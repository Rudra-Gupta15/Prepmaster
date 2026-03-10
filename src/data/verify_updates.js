
import { reactQuestions } from './react-questions.js';
import { aimlQuestions } from './aiml-questions.js';
import { devopsQuestions } from './devops-questions.js';
import { sapQuestions } from './sap-questions.js';

const verify = (name, questions) => {
    console.log(`--- Verifying ${name} ---`);
    console.log(`Total Count: ${questions.length}`);
    if (questions.length !== 150) {
        console.error(`ERROR: ${name} should have 150 questions, found ${questions.length}`);
    }

    // Check first and last question structure
    const checkStruct = (q, label) => {
        const requiredKeys = ["id", "topic", "section", "difficulty", "type", "question", "options", "answer", "explanation"];
        const missing = requiredKeys.filter(k => !(k in q));
        if (missing.length > 0) {
            console.error(`ERROR: ${label} structure is invalid. Missing: ${missing.join(', ')}`);
        } else {
            console.log(`${label} structure: OK`);
        }
    };

    checkStruct(questions[0], `${name} First Question`);
    checkStruct(questions[questions.length - 1], `${name} Last Question`);

    // Check for "boilerplate" keywords in first 10 questions (should be cleaned)
    const boilerplateKeywords = ["Which of the following describes a core capability in", "standard paradigm and best practices"];
    const foundBoilerplate = questions.slice(0, 10).some(q =>
        boilerplateKeywords.some(kb => q.question.includes(kb) || q.explanation.includes(kb))
    );
    if (foundBoilerplate) {
        console.warn(`WARNING: ${name} might still contain boilerplate in the first 10 questions.`);
    } else {
        console.log(`${name} Content Check: OK`);
    }
};

verify('React', reactQuestions);
verify('AI/ML', aimlQuestions);
verify('DevOps', devopsQuestions);
verify('SAP', sapQuestions);
