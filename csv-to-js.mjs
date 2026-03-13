#!/usr/bin/env node
/**
 * csv-to-js.mjs
 * Converts CSV question files → JS export files for the quiz platform.
 *
 * Usage:  node csv-to-js.mjs
 * Output: overwrites src/data/{aiml,react,sap,devops,tcs-numerical,tcs-reasoning,tcs-verbal}-questions.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── RFC 4180 CSV Parser ────────────────────────────────────────────────────
function parseCSV(text) {
  const rows = [];
  let i = 0;
  const len = text.length;

  function parseField() {
    if (i >= len) return '';
    if (text[i] === '"') {
      // Quoted field
      i++; // skip opening quote
      let field = '';
      while (i < len) {
        if (text[i] === '"') {
          if (i + 1 < len && text[i + 1] === '"') {
            field += '"';
            i += 2;
          } else {
            i++; // skip closing quote
            break;
          }
        } else {
          field += text[i];
          i++;
        }
      }
      return field;
    } else {
      // Unquoted field
      let field = '';
      while (i < len && text[i] !== ',' && text[i] !== '\n' && text[i] !== '\r') {
        field += text[i];
        i++;
      }
      return field;
    }
  }

  while (i < len) {
    const row = [];
    while (true) {
      row.push(parseField());
      if (i < len && text[i] === ',') {
        i++; // skip comma
        continue;
      }
      break;
    }
    // Skip line endings
    if (i < len && text[i] === '\r') i++;
    if (i < len && text[i] === '\n') i++;
    if (row.length > 1 || (row.length === 1 && row[0].trim() !== '')) {
      rows.push(row);
    }
  }
  return rows;
}

// ─── Answer letter → index ──────────────────────────────────────────────────
const ANSWER_MAP = { A: 0, B: 1, C: 2, D: 3 };

// ─── Topic → Section mappings ───────────────────────────────────────────────
const SECTION_MAP = {
  'AI & ML': {
    ML: 'ML Basics',
    'ML Basics': 'ML Basics',
    'ML Formula': 'ML Basics',
    Preprocessing: 'ML Basics',
    Training: 'ML Basics',
    'Deep Learning': 'Deep Learning',
    Python: 'NLP & CV',
    Concepts: 'GenAI & Agents',
    Models: 'GenAI & Agents',
    _default: 'GenAI & Agents',
  },
  'React Engineer': {
    JSX: 'JS Fundamentals',
    Components: 'JS Fundamentals',
    Hooks: 'Hooks & State',
    State: 'Hooks & State',
    Lifecycle: 'Hooks & State',
    Routing: 'Advanced Patterns',
    Redux: 'Advanced Patterns',
    Optimization: 'Performance & Testing',
    Testing: 'Performance & Testing',
    _default: 'JS Fundamentals',
  },
  'SAP Engineer': {
    FI: 'ERP Fundamentals',
    CO: 'ERP Fundamentals',
    MM: 'ERP Fundamentals',
    SD: 'ERP Fundamentals',
    BASIS: 'ERP Fundamentals',
    ABAP: 'ABAP Programming',
    HANA: 'Cloud & Architecture',
    Fiori: 'Cloud & Architecture',
    Security: 'Practical Modules',
    _default: 'ERP Fundamentals',
  },
  'DevOps Engineer': {
    'CI/CD': 'CI/CD & Git',
    Git: 'CI/CD & Git',
    Pipelines: 'CI/CD & Git',
    Docker: 'Docker & K8s',
    Kubernetes: 'Docker & K8s',
    Terraform: 'IaC & Linux',
    Cloud: 'Cloud & Security',
    Security: 'Cloud & Security',
    Monitoring: 'Cloud & Security',
    _default: 'CI/CD & Git',
  },
};

// ─── TCS section name remapping ─────────────────────────────────────────────
const TCS_SECTION_REMAP = {
  'Logical Reasoning': 'Reasoning Ability',
};

// ─── File configs ───────────────────────────────────────────────────────────
const CONFIGS = [
  {
    csv: 'AIML_900.csv',
    output: 'src/data/aiml-questions.js',
    exportName: 'aimlQuestions',
    jsTopic: 'AI & ML',       // CSV "section" col value
    useSectionMap: true,       // need CSV topic → JS section mapping
  },
  {
    csv: 'REACT_900.csv',
    output: 'src/data/react-questions.js',
    exportName: 'reactQuestions',
    jsTopic: 'React Engineer',
    useSectionMap: true,
  },
  {
    csv: 'SAP_900.csv',
    output: 'src/data/sap-questions.js',
    exportName: 'sapQuestions',
    jsTopic: 'SAP Engineer',
    useSectionMap: true,
  },
  {
    csv: 'DEVOPS_900.csv',
    output: 'src/data/devops-questions.js',
    exportName: 'devopsQuestions',
    jsTopic: 'DevOps Engineer',
    useSectionMap: true,
  },
  {
    csv: 'TCS_Aptitude_700.csv',
    output: 'src/data/tcs-numerical.js',
    exportName: 'numericalQuestions',
    jsTopic: 'TCS NQT',
    fixedSection: 'Numerical Ability',
  },
  {
    csv: 'TCS_Logical_700.csv',
    output: 'src/data/tcs-reasoning.js',
    exportName: 'reasoningQuestions',
    jsTopic: 'TCS NQT',
    fixedSection: 'Reasoning Ability', // remapped from "Logical Reasoning"
  },
  {
    csv: 'TCS_Verbal_700.csv',
    output: 'src/data/tcs-verbal.js',
    exportName: 'verbalQuestions',
    jsTopic: 'TCS NQT',
    fixedSection: 'Verbal Ability',
  },
];

// ─── Main ───────────────────────────────────────────────────────────────────
let totalGenerated = 0;

for (const cfg of CONFIGS) {
  const csvPath = resolve(__dirname, cfg.csv);
  const raw = readFileSync(csvPath, 'utf8');
  const rows = parseCSV(raw);

  if (rows.length < 2) {
    console.error(`⚠️  ${cfg.csv}: no data rows found`);
    continue;
  }

  // Header: id, section, difficulty, topic, question, A, B, C, D, answer
  const header = rows[0].map(h => h.trim());
  const colIdx = {};
  header.forEach((h, i) => { colIdx[h] = i; });

  const questions = [];
  const sectionCounts = {};
  const answerDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
  let skipped = 0;

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (row.length < 10) { skipped++; continue; }

    const id         = row[colIdx['id']]?.trim();
    const csvSection = row[colIdx['section']]?.trim();  // "AI & ML", "Numerical Ability", etc.
    const difficulty = row[colIdx['difficulty']]?.trim();
    const csvTopic   = row[colIdx['topic']]?.trim();     // "ML", "Hooks", etc.
    const question   = row[colIdx['question']]?.trim();
    const optA       = row[colIdx['A']]?.trim();
    const optB       = row[colIdx['B']]?.trim();
    const optC       = row[colIdx['C']]?.trim();
    const optD       = row[colIdx['D']]?.trim();
    const ansLetter  = row[colIdx['answer']]?.trim().toUpperCase();

    if (!id || !question) { skipped++; continue; }

    // Determine JS "topic" (the track name)
    const jsTopic = cfg.jsTopic;

    // Determine JS "section"
    let jsSection;
    if (cfg.fixedSection) {
      jsSection = cfg.fixedSection;
    } else if (cfg.useSectionMap && SECTION_MAP[jsTopic]) {
      jsSection = SECTION_MAP[jsTopic][csvTopic] || SECTION_MAP[jsTopic]._default;
    } else {
      jsSection = csvTopic;
    }

    // Answer index
    const answerIdx = ANSWER_MAP[ansLetter];
    if (answerIdx === undefined) { skipped++; continue; }

    // Correct option text for explanation
    const options = [optA, optB, optC, optD];
    const correctText = options[answerIdx] || optA;

    questions.push({
      id,
      topic: jsTopic,
      section: jsSection,
      difficulty,
      type: 'MCQ',
      question,
      options,
      answer: answerIdx,
      explanation: `The correct answer is ${correctText}.`,
    });

    sectionCounts[jsSection] = (sectionCounts[jsSection] || 0) + 1;
    answerDist[answerIdx]++;
  }

  // Write JS file
  const jsContent = `export const ${cfg.exportName} = ${JSON.stringify(questions, null, 2)};\n`;
  const outPath = resolve(__dirname, cfg.output);
  writeFileSync(outPath, jsContent, 'utf8');

  totalGenerated += questions.length;

  // Report
  console.log(`\n✅ ${cfg.csv} → ${cfg.output}`);
  console.log(`   ${questions.length} questions generated (${skipped} skipped)`);
  console.log(`   Sections: ${JSON.stringify(sectionCounts)}`);
  console.log(`   Answers: A=${answerDist[0]}  B=${answerDist[1]}  C=${answerDist[2]}  D=${answerDist[3]}`);
}

console.log(`\n🎯 Total: ${totalGenerated} questions across ${CONFIGS.length} files.`);
