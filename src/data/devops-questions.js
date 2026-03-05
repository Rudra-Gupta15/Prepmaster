export const devopsQuestions = [
    // ── DevOps Fundamentals ───────────────────────────────────────────────────────
    {
        id: 'd1', topic: 'DevOps Engineer', section: 'DevOps Fundamentals', type: 'MCQ', difficulty: 'Easy',
        question: 'DevOps primary goal is:',
        options: ['Replace developers with automation', 'Bridge the gap between development and operations to deliver software faster and reliably', 'Only automate deployments', 'Eliminate QA testing'],
        answer: 1, explanation: 'DevOps combines Dev and Ops practices to shorten the SDLC, enabling continuous delivery with high software quality.'
    },
    {
        id: 'd2', topic: 'DevOps Engineer', section: 'DevOps Fundamentals', type: 'MCQ', difficulty: 'Easy',
        question: 'CI/CD stands for:',
        options: ['Code Integration / Code Delivery', 'Continuous Integration / Continuous Delivery (or Deployment)', 'Central Integration / Central Deployment', 'Container Infrastructure / Cloud Deployment'],
        answer: 1, explanation: 'CI/CD is a practice where code changes are automatically integrated (CI), tested, and delivered/deployed (CD) to production.'
    },
    {
        id: 'd3', topic: 'DevOps Engineer', section: 'DevOps Fundamentals', type: 'MCQ', difficulty: 'Easy',
        question: 'Infrastructure as Code (IaC) means:',
        options: ['Writing code for application logic', 'Managing and provisioning infrastructure through machine-readable config files', 'Documenting server configurations', 'Using code editors for DB management'],
        answer: 1, explanation: 'IaC manages infrastructure (servers, networks) using code/config files (Terraform, CloudFormation) enabling version control and automation.'
    },
    {
        id: 'd4', topic: 'DevOps Engineer', section: 'DevOps Fundamentals', type: 'MCQ', difficulty: 'Medium',
        question: 'Shift-Left testing means:',
        options: ['Moving QA to the left side of screen', 'Introducing testing early in the development cycle rather than at the end', 'Using only unit tests', 'Left-to-right code reading'],
        answer: 1, explanation: 'Shift-Left moves testing earlier in the SDLC — catching bugs sooner when they are cheapest to fix.'
    },
    {
        id: 'd5', topic: 'DevOps Engineer', section: 'DevOps Fundamentals', type: 'MCQ', difficulty: 'Medium',
        question: 'The term "CALMS" in DevOps refers to:',
        options: ['A monitoring tool', 'Culture, Automation, Lean, Measurement, Sharing — core pillars of DevOps', 'A deployment strategy', 'A microservices pattern'],
        answer: 1, explanation: 'CALMS framework: Culture, Automation, Lean, Measurement, Sharing — pillars defining the DevOps transformation approach.'
    },
    // ── Linux & Scripting ─────────────────────────────────────────────────────────
    {
        id: 'd6', topic: 'DevOps Engineer', section: 'Linux & Scripting', type: 'MCQ', difficulty: 'Easy',
        question: 'Linux command to change file permissions:',
        options: ['chown', 'chmod', 'chgrp', 'setperm'],
        answer: 1, explanation: 'chmod (change mode) changes file permissions. chown changes ownership. chmod 755 grants rwxr-xr-x.'
    },
    {
        id: 'd7', topic: 'DevOps Engineer', section: 'Linux & Scripting', type: 'MCQ', difficulty: 'Easy',
        question: 'Command to check running processes in Linux:',
        options: ['ls -la', 'top or ps aux', 'df -h', 'netstat'],
        answer: 1, explanation: 'top shows real-time processes. ps aux lists all running processes with details.'
    },
    {
        id: 'd8', topic: 'DevOps Engineer', section: 'Linux & Scripting', type: 'MCQ', difficulty: 'Medium',
        question: 'A cron expression "0 2 * * *" means:',
        options: ['Every 2 minutes', 'At 2:00 AM every day', 'Every 2 hours', 'At minute 0 of hour 2 on the 2nd of every month'],
        answer: 1, explanation: 'Cron: minute hour day month weekday. "0 2 * * *" = minute 0, hour 2, every day = 2:00 AM daily.'
    },
    {
        id: 'd9', topic: 'DevOps Engineer', section: 'Linux & Scripting', type: 'MCQ', difficulty: 'Medium',
        question: 'In a bash script, $? represents:',
        options: ['Script name', 'Exit status of the last command (0=success, non-zero=failure)', 'Number of arguments', 'Process ID'],
        answer: 1, explanation: '$? holds the exit code of the most recently executed command — 0 means success, any other value means error.'
    },
    {
        id: 'd10', topic: 'DevOps Engineer', section: 'Linux & Scripting', type: 'MCQ', difficulty: 'Medium',
        question: 'Linux command to view last 100 lines of a log file:',
        options: ['head -100 file.log', 'cat file.log | last', 'tail -100 file.log', 'less file.log -100'],
        answer: 2, explanation: 'tail -n 100 file.log shows the last 100 lines. tail -f watches a log file in real time.'
    },
    // ── Git & Version Control ─────────────────────────────────────────────────────
    {
        id: 'd11', topic: 'DevOps Engineer', section: 'Git & VCS', type: 'MCQ', difficulty: 'Easy',
        question: 'Git command to create and switch to a new branch:',
        options: ['git branch newbranch', 'git checkout -b newbranch', 'git switch newbranch', 'git new newbranch'],
        answer: 1, explanation: 'git checkout -b branchname creates a new branch and switches to it. Modern equivalent: git switch -c branchname.'
    },
    {
        id: 'd12', topic: 'DevOps Engineer', section: 'Git & VCS', type: 'MCQ', difficulty: 'Medium',
        question: 'Git rebase vs merge:',
        options: ['They are identical', 'Rebase rewrites commit history for linear flow; merge preserves branch history with a merge commit', 'Rebase is only for remote repos', 'Merge creates a linear history'],
        answer: 1, explanation: 'Rebase replays commits on top of another branch creating a clean linear history. Merge creates a merge commit preserving branch topology.'
    },
    {
        id: 'd13', topic: 'DevOps Engineer', section: 'Git & VCS', type: 'MCQ', difficulty: 'Medium',
        question: 'git stash is used to:',
        options: ['Delete local changes', 'Temporarily save uncommitted changes and clean the working directory', 'Push to remote', 'Merge branches'],
        answer: 1, explanation: 'git stash saves dirty working directory state (tracked files) so you can switch branches, then restore with git stash pop.'
    },
    {
        id: 'd14', topic: 'DevOps Engineer', section: 'Git & VCS', type: 'MCQ', difficulty: 'Hard',
        question: 'A "GitOps" approach means:',
        options: ['Using git for application code only', 'Declarative infrastructure and app deployments driven by Git as the single source of truth', 'A git branching strategy', 'Automated git backups'],
        answer: 1, explanation: 'GitOps uses Git PRs/commits as the trigger for infrastructure changes — the git repo is the desired state and an operator reconciles drift.'
    },
    {
        id: 'd15', topic: 'DevOps Engineer', section: 'Git & VCS', type: 'MCQ', difficulty: 'Easy',
        question: 'git cherry-pick is used to:',
        options: ['Select files to commit', 'Apply a specific commit from one branch to another', 'Delete selected commits', 'Merge selected files'],
        answer: 1, explanation: 'git cherry-pick <commit-hash> applies the changes from a specific commit to the current branch.'
    },
    // ── Docker & Containers ───────────────────────────────────────────────────────
    {
        id: 'd16', topic: 'DevOps Engineer', section: 'Docker & Containers', type: 'MCQ', difficulty: 'Easy',
        question: 'A Docker image is:',
        options: ['A running container', 'A read-only template/blueprint used to create containers', 'A virtual machine', 'A Docker registry'],
        answer: 1, explanation: 'A Docker image is a read-only, immutable template with application code, runtime, and dependencies. Containers are running instances of images.'
    },
    {
        id: 'd17', topic: 'DevOps Engineer', section: 'Docker & Containers', type: 'MCQ', difficulty: 'Easy',
        question: 'Docker command to list running containers:',
        options: ['docker images', 'docker ps', 'docker list', 'docker status'],
        answer: 1, explanation: 'docker ps lists running containers. docker ps -a shows all containers including stopped ones.'
    },
    {
        id: 'd18', topic: 'DevOps Engineer', section: 'Docker & Containers', type: 'MCQ', difficulty: 'Medium',
        question: 'ENTRYPOINT vs CMD in Dockerfile:',
        options: ['They are identical', 'ENTRYPOINT defines the executable; CMD provides default arguments that can be overridden at runtime', 'CMD executes first', 'ENTRYPOINT can be overridden easily'],
        answer: 1, explanation: 'ENTRYPOINT defines the main process. CMD provides default arguments. CMD can be overridden at runtime; ENTRYPOINT requires --entrypoint flag to override.'
    },
    {
        id: 'd19', topic: 'DevOps Engineer', section: 'Docker & Containers', type: 'MCQ', difficulty: 'Medium',
        question: 'Docker volumes are used to:',
        options: ['Limit CPU usage', 'Persist data beyond the container lifecycle and share data between containers', 'Network containers together', 'Cache Docker layers'],
        answer: 1, explanation: 'Volumes decouple data from container lifecycle — data persists even after containers are stopped/deleted.'
    },
    {
        id: 'd20', topic: 'DevOps Engineer', section: 'Docker & Containers', type: 'MCQ', difficulty: 'Hard',
        question: 'Multi-stage Docker build is used to:',
        options: ['Build multiple images simultaneously', 'Separate build-time dependencies from runtime image to reduce final image size', 'Run multiple containers', 'Cache build layers'],
        answer: 1, explanation: 'Multi-stage builds use multiple FROM statements — compile/build in one stage, copy only necessary artifacts to a lean runtime image.'
    },
    {
        id: 'd21', topic: 'DevOps Engineer', section: 'Docker & Containers', type: 'MCQ', difficulty: 'Medium',
        question: 'docker-compose is used to:',
        options: ['Build a single Dockerfile', 'Define and run multi-container Docker applications from a single YAML file', 'Monitor containers', 'Push images to registry'],
        answer: 1, explanation: 'docker-compose.yml defines multi-service apps (app + db + redis) and docker-compose up spins all up at once.'
    },
    // ── Kubernetes ────────────────────────────────────────────────────────────────
    {
        id: 'd22', topic: 'DevOps Engineer', section: 'Kubernetes', type: 'MCQ', difficulty: 'Easy',
        question: 'A Kubernetes Pod is:',
        options: ['A cluster node', 'The smallest deployable unit — one or more containers sharing network and storage', 'A namespace', 'A service endpoint'],
        answer: 1, explanation: 'A Pod is K8s smallest deployable unit. Containers inside a Pod share network namespace (localhost) and volumes.'
    },
    {
        id: 'd23', topic: 'DevOps Engineer', section: 'Kubernetes', type: 'MCQ', difficulty: 'Easy',
        question: 'kubectl command to get all pods in a namespace:',
        options: ['kubectl list pods -n ns', 'kubectl get pods -n namespace', 'kubectl show pods', 'kubectl describe ns'],
        answer: 1, explanation: 'kubectl get pods -n <namespace> lists all pods. Omit -n flag to use the current namespace context.'
    },
    {
        id: 'd24', topic: 'DevOps Engineer', section: 'Kubernetes', type: 'MCQ', difficulty: 'Medium',
        question: 'A Kubernetes Deployment is used to:',
        options: ['Expose pods to the internet', 'Declaratively manage Pod replicas with rolling updates and rollback capabilities', 'Store configuration', 'Route traffic'],
        answer: 1, explanation: 'Deployments manage desired state for Pods — define replicas, update strategy, and enable rollback to previous versions.'
    },
    {
        id: 'd25', topic: 'DevOps Engineer', section: 'Kubernetes', type: 'MCQ', difficulty: 'Medium',
        question: 'Kubernetes Service types: ClusterIP vs NodePort vs LoadBalancer:',
        options: ['All expose pods externally', 'ClusterIP=internal, NodePort=node-level external, LoadBalancer=cloud LB external access', 'NodePort is only for development', 'LoadBalancer only works on-premises'],
        answer: 1, explanation: 'ClusterIP: cluster-internal only. NodePort: exposes on each node IP+port. LoadBalancer: cloud provider creates external LB.'
    },
    {
        id: 'd26', topic: 'DevOps Engineer', section: 'Kubernetes', type: 'MCQ', difficulty: 'Hard',
        question: 'Kubernetes HPA (Horizontal Pod Autoscaler) scales based on:',
        options: ['Time of day', 'CPU/memory utilization or custom metrics to automatically adjust replica count', 'Manual kubectl commands', 'Docker image size'],
        answer: 1, explanation: 'HPA monitors metrics (CPU%, memory%) and automatically scales Pod replicas up/down to match demand.'
    },
    {
        id: 'd27', topic: 'DevOps Engineer', section: 'Kubernetes', type: 'MCQ', difficulty: 'Hard',
        question: 'A Kubernetes ConfigMap is used to:',
        options: ['Store Docker images', 'Decouple configuration data from container images (non-sensitive key-value pairs)', 'Manage secrets', 'Define network policies'],
        answer: 1, explanation: 'ConfigMaps store non-confidential configuration data (env vars, config files) keeping containers portable across environments.'
    },
    {
        id: 'd28', topic: 'DevOps Engineer', section: 'Kubernetes', type: 'MCQ', difficulty: 'Hard',
        question: 'Rolling Update strategy in Kubernetes:',
        options: ['Terminates all pods then creates new ones', 'Gradually replaces old pods with new ones ensuring zero downtime', 'Only updates one pod', 'Requires manual approval per pod'],
        answer: 1, explanation: 'Rolling Update incrementally replaces pods (controlled by maxSurge/maxUnavailable) ensuring the service remains available during deployment.'
    },
    // ── CI/CD Tools ───────────────────────────────────────────────────────────────
    {
        id: 'd29', topic: 'DevOps Engineer', section: 'CI/CD Tools', type: 'MCQ', difficulty: 'Easy',
        question: 'Jenkins is:',
        options: ['A container runtime', 'An open-source CI/CD automation server with extensive plugin ecosystem', 'A cloud provider', 'A monitoring tool'],
        answer: 1, explanation: 'Jenkins is an open-source automation server widely used for CI/CD pipelines, with 1800+ plugins for integrations.'
    },
    {
        id: 'd30', topic: 'DevOps Engineer', section: 'CI/CD Tools', type: 'MCQ', difficulty: 'Medium',
        question: 'A Jenkinsfile defines:',
        options: ['Jenkins installation settings', 'A pipeline-as-code definition stored in SCM alongside application code', 'Jenkins user accounts', 'Plugin configuration'],
        answer: 1, explanation: 'Jenkinsfile is a text file defining the Jenkins Pipeline using Declarative or Scripted DSL, stored in the project repository.'
    },
    {
        id: 'd31', topic: 'DevOps Engineer', section: 'CI/CD Tools', type: 'MCQ', difficulty: 'Medium',
        question: 'GitHub Actions workflow is triggered by:',
        options: ['Only manual runs', 'Events like push, pull_request, schedule, or workflow_dispatch configured in YAML', 'Docker builds', 'Kubernetes changes'],
        answer: 1, explanation: 'GitHub Actions workflows are triggered by GitHub events (push, PR, release, schedule) defined in .github/workflows/*.yml.'
    },
    {
        id: 'd32', topic: 'DevOps Engineer', section: 'CI/CD Tools', type: 'MCQ', difficulty: 'Hard',
        question: 'Blue-Green deployment strategy:',
        options: ['Deploy to half users and half users', 'Run two identical environments; route traffic to new (green) and keep old (blue) as fallback', 'Deploy to blue servers only', 'A Kubernetes strategy only'],
        answer: 1, explanation: 'Blue-Green maintains two identical production environments — green gets new version, traffic switches instantly, blue is standby rollback.'
    },
    {
        id: 'd33', topic: 'DevOps Engineer', section: 'CI/CD Tools', type: 'MCQ', difficulty: 'Hard',
        question: 'Canary deployment gradually:',
        options: ['Deploys to a canary server in the data center', 'Routes a small percentage of production traffic to the new version before full rollout', 'Deploys only to test environments', 'Requires manual testing before each step'],
        answer: 1, explanation: 'Canary releases route a small % of traffic (1-10%) to the new version, monitoring for errors before rolling out to all users.'
    },
    // ── IaC & Configuration Management ───────────────────────────────────────────
    {
        id: 'd34', topic: 'DevOps Engineer', section: 'IaC & Config Mgmt', type: 'MCQ', difficulty: 'Easy',
        question: 'Terraform is used for:',
        options: ['Application code deployment', 'Infrastructure provisioning using declarative HCL configuration files', 'Container orchestration', 'Log management'],
        answer: 1, explanation: 'Terraform provisions cloud infrastructure (VMs, VPCs, databases) using declarative HCL code — works across AWS, Azure, GCP.'
    },
    {
        id: 'd35', topic: 'DevOps Engineer', section: 'IaC & Config Mgmt', type: 'MCQ', difficulty: 'Medium',
        question: 'terraform plan does:',
        options: ['Applies infrastructure changes immediately', 'Shows what changes Terraform will make without executing them (dry run)', 'Destroys all resources', 'Formats Terraform code'],
        answer: 1, explanation: 'terraform plan is a dry run — shows the diff between current state and desired state without making actual changes.'
    },
    {
        id: 'd36', topic: 'DevOps Engineer', section: 'IaC & Config Mgmt', type: 'MCQ', difficulty: 'Medium',
        question: 'Ansible is:',
        options: ['A container runtime', 'An agentless configuration management and automation tool using YAML playbooks over SSH', 'A CI server', 'A monitoring solution'],
        answer: 1, explanation: 'Ansible uses agentless SSH-based automation with YAML playbooks to configure systems, deploy apps, and manage infrastructure.'
    },
    {
        id: 'd37', topic: 'DevOps Engineer', section: 'IaC & Config Mgmt', type: 'MCQ', difficulty: 'Hard',
        question: 'Terraform state file purpose:',
        options: ['Store application code', 'Track the current state of managed infrastructure to determine changes needed', 'Log terraform commands', 'Store secrets'],
        answer: 1, explanation: 'Terraform state (terraform.tfstate) maps real infrastructure to your config — Terraform diffs desired vs current state to plan changes.'
    },
    // ── Monitoring & Observability ────────────────────────────────────────────────
    {
        id: 'd38', topic: 'DevOps Engineer', section: 'Monitoring & Observability', type: 'MCQ', difficulty: 'Easy',
        question: 'The three pillars of observability are:',
        options: ['CPU, Memory, Disk', 'Logs, Metrics, Traces', 'CI, CD, Monitoring', 'Alerts, Dashboards, Reports'],
        answer: 1, explanation: 'The three pillars of observability: Logs (events), Metrics (time-series numbers), Traces (distributed request tracking).'
    },
    {
        id: 'd39', topic: 'DevOps Engineer', section: 'Monitoring & Observability', type: 'MCQ', difficulty: 'Medium',
        question: 'Prometheus is:',
        options: ['A log aggregation tool', 'An open-source time-series metrics monitoring system with PromQL query language', 'A tracing platform', 'A CI/CD tool'],
        answer: 1, explanation: 'Prometheus scrapes and stores time-series metrics data. PromQL queries metrics, and Alertmanager handles alerting.'
    },
    {
        id: 'd40', topic: 'DevOps Engineer', section: 'Monitoring & Observability', type: 'MCQ', difficulty: 'Medium',
        question: 'Grafana is used for:',
        options: ['Container orchestration', 'Visualizing metrics and logs through dashboards from various data sources like Prometheus', 'Application deployment', 'Code review'],
        answer: 1, explanation: 'Grafana provides rich dashboards and visualizations for metrics from Prometheus, InfluxDB, Elasticsearch, and other sources.'
    },
    {
        id: 'd41', topic: 'DevOps Engineer', section: 'Monitoring & Observability', type: 'MCQ', difficulty: 'Hard',
        question: 'Distributed tracing (e.g., Jaeger, Zipkin) helps with:',
        options: ['Container scheduling', 'Following a request as it flows through multiple microservices to identify bottlenecks and failures', 'Network configuration', 'Code coverage'],
        answer: 1, explanation: 'Distributed tracing provides end-to-end visibility of a request across microservices using trace IDs and spans.'
    },
    // ── Cloud Platforms ───────────────────────────────────────────────────────────
    {
        id: 'd42', topic: 'DevOps Engineer', section: 'Cloud Platforms', type: 'MCQ', difficulty: 'Easy',
        question: 'AWS EC2 is:',
        options: ['A database service', 'A managed Kubernetes service', 'Virtual servers in the cloud (Elastic Compute Cloud)', 'An object storage service'],
        answer: 2, explanation: 'EC2 (Elastic Compute Cloud) provides resizable virtual servers — you choose OS, instance type, and size.'
    },
    {
        id: 'd43', topic: 'DevOps Engineer', section: 'Cloud Platforms', type: 'MCQ', difficulty: 'Easy',
        question: 'AWS S3 is used for:',
        options: ['Compute instances', 'Scalable object storage for files, backups, static websites, and data lakes', 'Managed databases', 'DNS management'],
        answer: 1, explanation: 'S3 (Simple Storage Service) is AWS object storage — unlimited storage for files, images, backups, and static assets.'
    },
    {
        id: 'd44', topic: 'DevOps Engineer', section: 'Cloud Platforms', type: 'MCQ', difficulty: 'Medium',
        question: 'AWS IAM is used for:',
        options: ['Monitoring cloud resources', 'Identity and Access Management — control who can do what in AWS', 'Networking configuration', 'Container orchestration'],
        answer: 1, explanation: 'IAM manages users, groups, roles, and policies — the principle of least privilege controls what actions are allowed on which resources.'
    },
    {
        id: 'd45', topic: 'DevOps Engineer', section: 'Cloud Platforms', type: 'MCQ', difficulty: 'Medium',
        question: 'Serverless computing (AWS Lambda) means:',
        options: ['Servers without OS', 'Run code without provisioning/managing servers — cloud handles scaling and infrastructure', 'No servers in the cloud', 'Free cloud computing'],
        answer: 1, explanation: 'Serverless lets you run functions in response to events. AWS Lambda scales automatically and you pay only per invocation.'
    },
    // ── Security / DevSecOps ──────────────────────────────────────────────────────
    {
        id: 'd46', topic: 'DevOps Engineer', section: 'DevSecOps', type: 'MCQ', difficulty: 'Medium',
        question: 'DevSecOps integrates security by:',
        options: ['Adding a security team at the end of development', 'Embedding security practices throughout the CI/CD pipeline from the start', 'Only scanning production images', 'Hiring security specialists only'],
        answer: 1, explanation: 'DevSecOps shifts security left — integrating SAST, DAST, dependency scanning, and secrets detection into every pipeline stage.'
    },
    {
        id: 'd47', topic: 'DevOps Engineer', section: 'DevSecOps', type: 'MCQ', difficulty: 'Medium',
        question: 'SAST (Static Application Security Testing) analyzes:',
        options: ['Running application behavior', 'Source code for security vulnerabilities without executing the code', 'Network traffic', 'Database queries'],
        answer: 1, explanation: 'SAST scans source code or binaries for vulnerabilities (SQL injection, XSS) before the app is deployed — white-box testing.'
    },
    {
        id: 'd48', topic: 'DevOps Engineer', section: 'DevSecOps', type: 'MCQ', difficulty: 'Hard',
        question: 'Secrets management best practice in CI/CD:',
        options: ['Store secrets in source code', 'Use environment variables in .env files committed to git', 'Use dedicated secrets managers (HashiCorp Vault, AWS Secrets Manager) injected at runtime', 'Store secrets in Docker images'],
        answer: 2, explanation: 'Secrets should never be in source code or images. Use Vault, AWS Secrets Manager, or GitHub Secrets — inject them at runtime, not build time.'
    },
    // ── Networking ────────────────────────────────────────────────────────────────
    {
        id: 'd49', topic: 'DevOps Engineer', section: 'Networking', type: 'MCQ', difficulty: 'Medium',
        question: 'A load balancer is used to:',
        options: ['Increase server storage', 'Distribute incoming traffic across multiple backend servers to improve availability and throughput', 'Encrypt network traffic', 'Monitor network latency'],
        answer: 1, explanation: 'Load balancers distribute requests across server pool — improving availability, preventing single point of failure, and enabling horizontal scaling.'
    },
    {
        id: 'd50', topic: 'DevOps Engineer', section: 'Networking', type: 'MCQ', difficulty: 'Medium',
        question: 'DNS (Domain Name System) is responsible for:',
        options: ['Encrypting data in transit', 'Translating human-readable domain names to IP addresses', 'Routing network packets', 'Assigning server IP addresses'],
        answer: 1, explanation: 'DNS is the internet\'s phone book — translates domain names (google.com) to IP addresses so browsers can locate servers.'
    },
];
