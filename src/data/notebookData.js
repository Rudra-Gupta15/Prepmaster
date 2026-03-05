export const notebookLibrary = {
    'TCS NQT': [
        {
            title: '1. Percentage Shortcuts',
            content: '1. Percentage means "per 100".\n2. To convert fraction to %, multiply by 100.\n3. To convert % to fraction, divide by 100.\n\nExample:\nWhat is 20% of 50?\nAnswer: (20/100) * 50 = 10.'
        },
        {
            title: '2. Profit and Loss',
            content: '1. Profit = Selling Price (SP) - Cost Price (CP).\n2. Loss = CP - SP.\n3. Profit% = (Profit/CP) * 100.\n\nExample:\nBuy a pen for ₹10, sell for ₹15.\nAnswer: Profit = ₹5. Profit% = (5/10) * 100 = 50%.'
        },
        {
            title: '3. Simple Interest',
            content: '1. SI = (P * R * T) / 100.\n2. P = Principal (Starting money).\n3. R = Rate of interest.\n4. T = Time in years.\n\nExample:\nBorrow ₹1000 at 10% for 2 years.\nAnswer: SI = (1000 * 10 * 2) / 100 = ₹200.'
        },
        {
            title: '4. Time and Work',
            content: '1. If A does a work in X days, 1 day work = 1/X.\n2. If A and B work together, their 1 day work = (1/A) + (1/B).\n\nExample:\nA takes 2 days, B takes 3 days.\nAnswer: Together 1 day = 1/2 + 1/3 = 5/6. Full work = 6/5 days.'
        },
        {
            title: '5. Average',
            content: '1. Average = Sum of items / Number of items.\n2. Helpful for age and marks problems.\n\nExample:\nAverage of 10, 20, 30.\nAnswer: (10+20+30) / 3 = 60/3 = 20.'
        },
        { title: '6. Ratios', content: '1. Ratio compares two quantities of same kind.\n2. Simplest form of A:B is A/B.\n\nExample:\nRatio of 20kg to 40kg is 1:2.' },
        { title: '7. Speed & Distance', content: '1. Distance = Speed * Time.\n2. 1 km/hr = 5/18 m/s.\n\nExample:\nTrain at 72 km/hr. m/s = 72 * (5/18) = 20 m/s.' },
        { title: '8. Probability Basics', content: '1. Probability = Favorable outcomes / Total outcomes.\n2. Value is always between 0 and 1.\n\nExample:\nTossing a coin for "Heads" = 1/2.' },
        { title: '9. LCM and HCF', content: '1. LCM: Smallest number divisible by all.\n2. HCF: Largest number that divides all.\n\nExample:\nLCM of 4 and 6 is 12. HCF is 2.' },
        { title: '10. Number Series', content: '1. Look for addition, subtraction, or multiplication patterns.\n\nExample:\n2, 4, 8, 16... (Next is 32, doubling).' },
        { title: '11. Coding-Decoding', content: '1. A=1, B=2... Z=26 pattern is common.\n\nExample:\nIf CAT = 3.1.20, DOG = 4.15.7.' },
        { title: '12. Syllogism', content: '1. Use Venn Diagrams to solve.\n2. Check if "All A are B" matches conclusion.' },
        { title: '13. Blood Relations', content: '1. Draw a chart.\n2. Male (+), Female (-), Siblings (=), Couples (double line).' },
        { title: '14. Sentence Correction', content: '1. Check Subject-Verb agreement.\n\nExample:\n"He go" is wrong. "He goes" is correct.' },
        { title: '15. Reading Comprehension', content: '1. Read questions first, then the passage.\n2. Look for keywords in the text.' },
        { title: '16. Active & Passive Voice', content: '1. Active: I eat an apple.\n2. Passive: An apple is eaten by me.' },
        { title: '17. Direct & Indirect Speech', content: '1. Direct: He said, "I am happy."\n2. Indirect: He said that he was happy.' },
        { title: '18. Vocabulary Tips', content: '1. Learn Root Words like "Bene" (Good).\n\nExample:\nBenevolent = Kind/Good.' },
        { title: '19. Programming: Variables', content: '1. Containers to store data.\n2. Names cannot start with numbers.' },
        { title: '20. Programming: Loops', content: '1. Repeat code multiple times.\n2. "For" is for counts, "While" is for conditions.' }
    ],
    'AI & ML': [
        {
            title: '1. What is Machine Learning?',
            content: '1. Making computers learn from data without direct coding.\n2. It finds patterns and makes predictions.\n\nExample:\nPredicting house price using its size.'
        },
        {
            title: '2. Supervised Learning',
            content: '1. Learning with "Labeled Data" (answers provided).\n2. Two types: Regression and Classification.\n\nExample:\nTeacher showing photos of cats and dogs to a student.'
        },
        {
            title: '3. Unsupervised Learning',
            content: '1. Learning from data without labels.\n2. Finds clusters or groups in data.\n\nExample:\nGrouping customers by shopping habits.'
        },
        {
            title: '4. NumPy - The Math Library',
            content: '1. Used for handling fast arrays and math operations.\n2. Basis of almost all AI tools.\n\nExample:\nMultiplying two large matrix tables easily.'
        },
        {
            title: '5. Pandas - The Data Tool',
            content: '1. Used for reading CSV files and cleaning data.\n2. "DataFrame" is the main table structure.\n\nExample:\nFiltering rows where "Salary" > 50000.'
        },
        { title: '6. Data Splitting', content: '1. Split data into Training and Testing sets.\n2. Standard ratio: 80% Training, 20% Testing.\n\nExample:\nStudying 80 pages for exam, testing on 20 new pages.' },
        { title: '7. Overfitting', content: '1. Model learns data too well (even noise).\n2. Fails on new unseen data.\n\nExample:\nMemorizing exam answers instead of understanding logic.' },
        { title: '8. Neural Networks', content: '1. Inspired by human brain structure.\n2. Made of "Neurons" arranged in layers.' },
        { title: '9. Activation Functions', content: '1. Decides if a neuron should "fire" or stay silent.\n2. Popular ones: ReLU, Sigmoid, Tanh.' },
        { title: '10. Deep Learning', content: '1. Neural networks with many layers.\n2. Used for Image and Voice recognition.' },
        { title: '11. NLP - Text Processing', content: '1. Natural Language Processing.\n2. Tools: Chatbots, Google Translate.' },
        { title: '12. Computer Vision', content: '1. Computers "seeing" and identifying objects.\n\nExample:\nFace unlock on your phone.' },
        { title: '13. LLMs (Large Language Models)', content: '1. AI models trained on huge text datasets.\n\nExample:\nChatGPT, Bard, Claude.' },
        { title: '14. Transformer Architecture', content: '1. The "Brain" behind modern AI like GPT.\n2. Uses "Attention" to focus on important words.' },
        { title: '15. Prompt Engineering', content: '1. Writing better instructions for AI.\n2. Tip: Be specific and give examples.' },
        { title: '16. AI Agents', content: '1. AI that can take actions to reach a goal.\n\nExample:\nAI that can book a flight for you.' },
        { title: '17. Bias in AI', content: '1. Errors due to unfair data.\n2. Important to use diverse and balanced datasets.' },
        { title: '18. Gradient Descent', content: '1. How AI "optimizes" its errors.\n2. Moving step-by-step to find the "lowest" error point.' },
        { title: '19. Python for ML', content: '1. Use Python because of simple syntax and huge library support.\n2. Key libraries: Scikit-learn, PyTorch, TensorFlow.' },
        { title: '20. Model Deployment', content: '1. Putting your AI model on a website or app for users.\n2. Tools: Flask, FastAPI, Docker.' }
    ],
    'React': [
        {
            title: '1. What is React?',
            content: '1. A JavaScript library for building User Interfaces (UIs).\n2. Uses "Components" to build websites like LEGO blocks.'
        },
        {
            title: '2. Components',
            content: '1. Small, reusable pieces of code.\n2. Can be Functions or Classes.\n\nExample:\nA "Button" component used 10 times.'
        },
        {
            title: '3. JSX - HTML in JS',
            content: '1. Allows writing HTML code inside JavaScript.\n2. Browser doesn\'t understand it directly (Babel converts it).'
        },
        {
            title: '4. Props (Properties)',
            content: '1. Way to pass data from Parent to Child component.\n2. Props are "Ready-only" (cannot be changed by child).'
        },
        {
            title: '5. State',
            content: '1. "Current data" of a component.\n2. When state changes, React re-renders the UI automatically.'
        },
        { title: '6. useState Hook', content: '1. Special function to add state to function components.\n2. Returns: [Variable, Function to update it].' },
        { title: '7. useEffect Hook', content: '1. Runs code after render.\n2. Used for data fetching or timers.\n\nExample:\nFetching user list when page opens.' },
        { title: '8. Event Handling', content: '1. Capturing user actions like clicks or typing.\n2. Syntax: onClick={handleClick}.' },
        { title: '9. Conditional Rendering', content: '1. Showing different UI based on a condition.\n\nExample:\nShow "Logout" if user is logged in.' },
        { title: '10. Lists & Keys', content: '1. Using .map() to display arrays.\n2. "Key" helps React identify which item changed.' },
        { title: '11. Virtual DOM', content: '1. React\'s "draft" of the UI.\n2. Faster because it only updates what changed.' },
        { title: '12. Controlled Components', content: '1. Form inputs where value is controlled by React state.' },
        { title: '13. Lifting State Up', content: '1. Moving state to a common parent so children can share it.' },
        { title: '14. Context API', content: '1. Avoiding "Prop Drilling".\n2. Global state accessible by any component.' },
        { title: '15. React Router', content: '1. Handling navigation without page refresh.\n2. Navigates Between /Home, /About, etc.' },
        { title: '16. Custom Hooks', content: '1. Writing your own reusable logic starting with "use".' },
        { title: '17. useRef Hook', content: '1. Directly accessing a DOM element (like focusing an input).' },
        { title: '18. React.memo', content: '1. Optimization to prevent unnecessary re-renders.' },
        { title: '19. Fragment (<>)', content: '1. Grouping multiple items without adding an extra <div>.' },
        { title: '20. Error Boundaries', content: '1. Catching JavaScript errors in child components so app doesn\'t crash.' }
    ],
    'SAP': [
        {
            title: '1. What is SAP?',
            content: '1. Systems, Applications, and Products in Data Processing.\n2. ERP software to manage business operations.'
        },
        {
            title: '2. Modules of SAP',
            content: '1. MM: Material Management.\n2. SD: Sales and Distribution.\n3. FI/CO: Finance and Controlling.'
        },
        {
            title: '3. ABAP Programming',
            content: '1. Advanced Business Application Programming.\n2. The language used to code inside SAP.'
        },
        {
            title: '4. S/4HANA',
            content: '1. Modern ERP version of SAP.\n2. Runs only on HANA database for high speed.'
        },
        {
            title: '5. SAP Fiori',
            content: '1. Modern UI/UX for SAP apps.\n2. Responsive design for Mobile and Desktop.'
        },
        { title: '6. Master Data', content: '1. Core data that doesn\'t change often.\n\nExample:\nCustomer name, Material ID.' },
        { title: '7. Transactional Data', content: '1. Daily business event data.\n\nExample:\nSales Order, Invoice.' },
        { title: '8. SAP Client', content: '1. An independent unit with its own data.\n\nExample:\nClient 100 for Testing.' },
        { title: '9. SAP Basis', content: '1. The technical foundation (Admin work).\n2. Handling installation and patches.' },
        { title: '10. T-Codes', content: '1. Shortcut codes to open any SAP screen.\n\nExample:\nVA01 to create Sales Order.' },
        { title: '11. ABAP Internal Tables', content: '1. Temporary storage of data in ABAP code memory.' },
        { title: '12. SAP BAPI', content: '1. Standard interfaces to connect SAP with other apps.' },
        { title: '13. SAP IDoc', content: '1. Intermediate Document.\n2. Used to exchange data between systems.' },
        { title: '14. SAP CPI', content: '1. Cloud Platform Integration.\n2. Connecting Cloud and On-premise systems.' },
        { title: '15. SAP Security', content: '1. Managing Roles and Authorizations.\n2. Ensures user can only see what they need.' },
        { title: '16. SAP Solution Manager', content: '1. Tool to manage the entire SAP lifecycle.' },
        { title: '17. SAP BW/4HANA', content: '1. Modern data warehousing for reporting.' },
        { title: '18. SAP SuccessFactors', content: '1. Cloud-based HCM (Human Capital Management) module.' },
        { title: '19. SAP MM: P2P Cycle', content: '1. Purchase to Pay cycle: Requisition -> PO -> GR -> Invoice.' },
        { title: '20. SAP SD: OTC Cycle', content: '1. Order to Cash cycle: Order -> Delivery -> Billing -> Payment.' }
    ],
    'DevOps': [
        {
            title: '1. What is DevOps?',
            content: '1. Development (Dev) + Operations (Ops).\n2. Culture of fast delivery and continuous improvement.'
        },
        {
            title: '2. CI/CD Pipeline',
            content: '1. Continuous Integration (Fast code merge).\n2. Continuous Deployment (Auto-release to users).'
        },
        {
            title: '3. Docker Containers',
            content: '1. Lightweight package with app and its dependencies.\n2. "Runs anywhere" consistency.'
        },
        {
            title: '4. Kubernetes (K8s)',
            content: '1. Tool to manage and "orchestrate" containers.\n2. Handles auto-scaling and self-healing.'
        },
        {
            title: '5. Git - Version Control',
            content: '1. Tracking changes in code history.\n2. Key commands: commit, push, pull, merge.'
        },
        { title: '6. IaC (Infrastructure as Code)', content: '1. Using code to setup servers instead of manual clicking.\n\nExample:\nTerraform, Ansible.' },
        { title: '7. Jenkins', content: '1. Popular tool for building CI/CD automation pipelines.' },
        { title: '8. Monitoring Tools', content: '1. Checking system health and performance.\n\nExample:\nPrometheus, Grafana.' },
        { title: '9. Logging', content: '1. Keeping records of everything that happens in the app.\n\nExample:\nELK Stack.' },
        { title: '10. Microservices', content: '1. Breaking a big app into small, independent services.' },
        { title: '11. Linux for DevOps', content: '1. Essential to know command line (bash).\n\nExample:\ncd, ls, grep, sudo.' },
        { title: '12. Cloud Providers', content: '1. Platforms where we host our apps.\n\nExample:\nAWS, Azure, Google Cloud.' },
        { title: '13. Serverless Computing', content: '1. Running code without managing servers.\n\nExample:\nAWS Lambda.' },
        { title: '14. YAML Basics', content: '1. Simple text format used for config.\n2. Uses indentation (spaces).' },
        { title: '15. Load Balancing', content: '1. Distributing traffic across multiple servers.' },
        { title: '16. DevSecOps', content: '1. Adding Security into every step of the DevOps process.' },
        { title: '17. Blue-Green Deployment', content: '1. Running two versions (New & Old) and switching traffic.' },
        { title: '18. SRE', content: '1. Using data and automation to keep sites up.' },
        { title: '19. Artifact Management', content: '1. Storing built code files safely.\n\nExample:\nJFrog Artifactory.' },
        { title: '20. Configuration Management', content: '1. Keeping server settings consistent.\n\nExample:\nAnsible.' }
    ]
};
