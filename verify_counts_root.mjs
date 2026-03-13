import { ALL_QUESTIONS, EXAM_CONFIGS } from './src/data/index.js';

console.log(`Total Questions: ${ALL_QUESTIONS.length}`);

Object.entries(EXAM_CONFIGS).forEach(([id, track]) => {
    if (id.includes('DEMO')) return;
    console.log(`\nTrack: ${track.label}`);
    track.sections.forEach(s => {
        const count = ALL_QUESTIONS.filter(s.filter).length;
        console.log(`  - ${s.label}: ${count}q`);
    });
});
