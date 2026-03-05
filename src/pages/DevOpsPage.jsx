import { useState } from 'react';
import { ALL_QUESTIONS } from '../data/index.js';
import QuizEngine from '../components/QuizEngine';
import styles from './AIMLPage.module.css';

const sections = [
    { id: 'all', label: 'Full DevOps Quiz', icon: '🔧', color: '#f97316', desc: 'All DevOps topics combined — complete interview simulation', filter: q => q.topic === 'DevOps Engineer' },
    { id: 'dev-fund', label: 'DevOps Fundamentals', icon: '🚀', color: '#f97316', desc: 'DevOps culture, CI/CD, IaC, Shift-Left, CALMS framework', filter: q => q.topic === 'DevOps Engineer' && q.section === 'DevOps Fundamentals' },
    { id: 'linux', label: 'Linux & Scripting', icon: '🐧', color: '#10b981', desc: 'chmod, process management, cron, bash scripts, tail/grep', filter: q => q.topic === 'DevOps Engineer' && q.section === 'Linux & Scripting' },
    { id: 'git', label: 'Git & VCS', icon: '🌿', color: '#f59e0b', desc: 'Branching, rebase vs merge, stash, cherry-pick, GitOps', filter: q => q.topic === 'DevOps Engineer' && q.section === 'Git & VCS' },
    { id: 'docker', label: 'Docker & Containers', icon: '🐳', color: '#38bdf8', desc: 'Images, containers, Dockerfile (ENTRYPOINT/CMD), volumes, multi-stage builds, compose', filter: q => q.topic === 'DevOps Engineer' && q.section === 'Docker & Containers' },
    { id: 'k8s', label: 'Kubernetes', icon: '☸️', color: '#6366f1', desc: 'Pods, Deployments, Services (ClusterIP/NodePort/LB), HPA, ConfigMaps, Rolling Updates', filter: q => q.topic === 'DevOps Engineer' && q.section === 'Kubernetes' },
    { id: 'cicd', label: 'CI/CD Tools', icon: '⚙️', color: '#8b5cf6', desc: 'Jenkins, Jenkinsfile, GitHub Actions, Blue-Green, Canary deployments', filter: q => q.topic === 'DevOps Engineer' && q.section === 'CI/CD Tools' },
    { id: 'iac', label: 'IaC & Config Management', icon: '📋', color: '#14b8a6', desc: 'Terraform (plan, state), Ansible (playbooks, agentless)', filter: q => q.topic === 'DevOps Engineer' && q.section === 'IaC & Config Mgmt' },
    { id: 'monitoring', label: 'Monitoring & Observability', icon: '📡', color: '#ef4444', desc: 'Logs, Metrics, Traces — Prometheus, Grafana, distributed tracing', filter: q => q.topic === 'DevOps Engineer' && q.section === 'Monitoring & Observability' },
    { id: 'cloud', label: 'Cloud Platforms', icon: '☁️', color: '#f0a500', desc: 'AWS EC2, S3, IAM, Lambda — core cloud service concepts', filter: q => q.topic === 'DevOps Engineer' && q.section === 'Cloud Platforms' },
    { id: 'devsecops', label: 'DevSecOps', icon: '🔒', color: '#e53e3e', desc: 'Security in CI/CD, SAST, secrets management best practices', filter: q => q.topic === 'DevOps Engineer' && q.section === 'DevSecOps' },
    { id: 'networking', label: 'Networking', icon: '🌐', color: '#c084fc', desc: 'Load balancers, DNS resolution, networking fundamentals', filter: q => q.topic === 'DevOps Engineer' && q.section === 'Networking' },
];

export default function DevOpsPage() {
    const [active, setActive] = useState(null);

    if (active) {
        const sec = sections.find(s => s.id === active);
        const qs = ALL_QUESTIONS.filter(sec.filter);
        return (
            <div>
                <div className={styles.backBar}>
                    <button className={styles.backBtn} onClick={() => setActive(null)}>← Back</button>
                    <span style={{ color: sec.color, fontWeight: 700 }}>{sec.icon} {sec.label}</span>
                </div>
                <QuizEngine questions={qs} title={`DevOps Engineer — ${sec.label}`} color={sec.color} timePerQ={99999} enableTimer={false} />
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <span className={styles.badge} style={{ borderColor: 'rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.1)', color: '#f97316' }}>🔧 DevOps Engineer Interview Preparation</span>
                <h1 className={styles.title}>Interview-Ready <span style={{ background: 'linear-gradient(135deg,#f97316,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DevOps</span></h1>
                <p className={styles.sub}>
                    Practice all 11 core DevOps interview topics. No timer — focus on understanding.
                    Covers Linux, Docker, Kubernetes, Terraform, CI/CD, Cloud, and DevSecOps.
                </p>
            </div>
            <div className={styles.grid}>
                {sections.map(sec => {
                    const count = ALL_QUESTIONS.filter(sec.filter).length;
                    return (
                        <div key={sec.id} className={`${styles.card} ${sec.id === 'all' ? styles.featured : ''}`}
                            style={{ '--sc': sec.color }} onClick={() => setActive(sec.id)}>
                            <span className={styles.icon}>{sec.icon}</span>
                            <h3 className={styles.cardTitle}>{sec.label}</h3>
                            <p className={styles.cardDesc}>{sec.desc}</p>
                            <div className={styles.cardFoot}>
                                <span className={styles.count}>{count} questions</span>
                                <button className={styles.go} style={{ color: sec.color, borderColor: sec.color + '44' }}>Practice →</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
