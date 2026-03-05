export const sapQuestions = [
    // ── SAP Fundamentals ──────────────────────────────────────────────────────────
    {
        id: 's1', topic: 'SAP Engineer', section: 'SAP Fundamentals', type: 'MCQ', difficulty: 'Easy',
        question: 'What does SAP stand for?',
        options: ['Systems Analysis and Program Development', 'Systems Applications and Products in Data Processing', 'Software Application Processing', 'Standard Application Platform'],
        answer: 1, explanation: 'SAP stands for Systems, Applications, and Products in Data Processing — founded in 1972 in Germany.'
    },
    {
        id: 's2', topic: 'SAP Engineer', section: 'SAP Fundamentals', type: 'MCQ', difficulty: 'Easy',
        question: 'SAP S/4HANA runs exclusively on:',
        options: ['Oracle DB', 'Microsoft SQL Server', 'SAP HANA in-memory database', 'IBM DB2'],
        answer: 2, explanation: 'S/4HANA is purpose-built for SAP HANA — an in-memory, columnar database enabling real-time analytics.'
    },
    {
        id: 's3', topic: 'SAP Engineer', section: 'SAP Fundamentals', type: 'MCQ', difficulty: 'Easy',
        question: 'What is a "client" in SAP terminology?',
        options: ['An end-user of the system', 'An organizational unit representing a legally independent entity with separate master data', 'A programming module', 'A type of user role'],
        answer: 1, explanation: 'In SAP, a client is the highest organizational unit — a self-contained unit with its own data, users, and configuration.'
    },
    {
        id: 's4', topic: 'SAP Engineer', section: 'SAP Fundamentals', type: 'MCQ', difficulty: 'Easy',
        question: 'Transaction code to display table data in SAP is:',
        options: ['SE38', 'SE16', 'SM30', 'SE11'],
        answer: 1, explanation: 'SE16 (Data Browser) displays database table contents. SE11 is the Data Dictionary for structure definitions.'
    },
    {
        id: 's5', topic: 'SAP Engineer', section: 'SAP Fundamentals', type: 'MCQ', difficulty: 'Medium',
        question: 'SAP Fiori is:',
        options: ['A programming language', 'A SAP database', 'A modern UX design system for SAP applications', 'A backup solution'],
        answer: 2, explanation: 'SAP Fiori is SAP\'s UX approach providing role-based, responsive, and simple apps replacing older SAP GUI screens.'
    },
    {
        id: 's6', topic: 'SAP Engineer', section: 'SAP Fundamentals', type: 'MCQ', difficulty: 'Medium',
        question: 'SAP Solution Manager is used for:',
        options: ['Managing user roles only', 'Application lifecycle management, monitoring, and IT service management for SAP landscapes', 'Database administration', 'Network configuration'],
        answer: 1, explanation: 'SAP Solution Manager (SolMan) supports the entire SAP lifecycle from implementation to operations including monitoring and ITSM.'
    },
    // ── ABAP ──────────────────────────────────────────────────────────────────────
    {
        id: 's7', topic: 'SAP Engineer', section: 'ABAP', type: 'MCQ', difficulty: 'Easy',
        question: 'ABAP stands for:',
        options: ['Advanced Business Application Programming', 'Automated Business Analysis Platform', 'Application Business API Programming', 'Advanced Backend Application Platform'],
        answer: 0, explanation: 'ABAP (Advanced Business Application Programming) is SAP\'s proprietary 4GL language for business applications.'
    },
    {
        id: 's8', topic: 'SAP Engineer', section: 'ABAP', type: 'MCQ', difficulty: 'Easy',
        question: 'Transaction SE38 is used for:',
        options: ['Table maintenance', 'ABAP Editor — writing and executing ABAP programs', 'User management', 'Transport management'],
        answer: 1, explanation: 'SE38 is the ABAP Editor where developers write, test, and activate ABAP programs.'
    },
    {
        id: 's9', topic: 'SAP Engineer', section: 'ABAP', type: 'MCQ', difficulty: 'Medium',
        question: 'What is an Internal Table in ABAP?',
        options: ['A database table', 'A runtime data structure stored in memory (like an array)', 'A transparent table', 'A configuration table'],
        answer: 1, explanation: 'Internal tables are ABAP runtime objects — dynamic arrays with a row structure used for temporary data processing in memory.'
    },
    {
        id: 's10', topic: 'SAP Engineer', section: 'ABAP', type: 'MCQ', difficulty: 'Medium',
        question: 'ABAP statement to read database table data:',
        options: ['GET TABLE', 'FETCH FROM', 'SELECT ... FROM ...', 'READ DATABASE'],
        answer: 2, explanation: 'SELECT (Open SQL) is used in ABAP to read data from database tables into local variables or internal tables.'
    },
    {
        id: 's11', topic: 'SAP Engineer', section: 'ABAP', type: 'MCQ', difficulty: 'Medium',
        question: 'BAPI in SAP stands for:',
        options: ['Business API', 'Business Application Programming Interface', 'Backend API Integration', 'Basic ABAP Programming Interface'],
        answer: 1, explanation: 'BAPIs are stable RFC-enabled function modules providing standard business object interfaces for external system integration.'
    },
    {
        id: 's12', topic: 'SAP Engineer', section: 'ABAP', type: 'MCQ', difficulty: 'Hard',
        question: 'Difference between MOVE and MOVE-CORRESPONDING:',
        options: ['No difference', 'MOVE copies full variable; MOVE-CORRESPONDING copies only matching field names between structures', 'MOVE is for strings, MOVE-CORRESPONDING for numbers', 'MOVE-CORRESPONDING is deprecated'],
        answer: 1, explanation: 'MOVE copies a full variable. MOVE-CORRESPONDING copies only fields sharing the same name between two structures.'
    },
    {
        id: 's13', topic: 'SAP Engineer', section: 'ABAP', type: 'MCQ', difficulty: 'Hard',
        question: 'ABAP CDS Views are used for:',
        options: ['Creating ABAP classes', 'Defining reusable data models for HANA-optimized queries', 'Replacing function modules', 'User role management'],
        answer: 1, explanation: 'CDS views define semantic data models close to the database layer, enabling push-down optimization to HANA.'
    },
    {
        id: 's14', topic: 'SAP Engineer', section: 'ABAP', type: 'MCQ', difficulty: 'Medium',
        question: 'Function module vs Method in ABAP OO:',
        options: ['They are identical', 'Function modules are procedural; methods belong to ABAP OO classes', 'Methods are faster', 'Function modules only work in S/4HANA'],
        answer: 1, explanation: 'Function modules are procedural (function groups). Methods are part of ABAP OO classes supporting inheritance and polymorphism.'
    },
    {
        id: 's15', topic: 'SAP Engineer', section: 'ABAP', type: 'MCQ', difficulty: 'Hard',
        question: 'SAP Enhancement Framework provides:',
        options: ['A UI framework', 'BAdIs and enhancement spots to modify standard SAP code without modifications', 'A database framework', 'A testing framework'],
        answer: 1, explanation: 'Enhancement Framework provides BAdIs (Business Add-Ins) and enhancement spots as official hooks to extend standard SAP without direct modification.'
    },
    // ── MM ────────────────────────────────────────────────────────────────────────
    {
        id: 's16', topic: 'SAP Engineer', section: 'SAP MM', type: 'MCQ', difficulty: 'Easy',
        question: 'Transaction ME21N is used for:',
        options: ['Goods Receipt', 'Create Purchase Order', 'Invoice Verification', 'Stock Transfer'],
        answer: 1, explanation: 'ME21N = Create Purchase Order. ME22N = Change, ME23N = Display.'
    },
    {
        id: 's17', topic: 'SAP Engineer', section: 'SAP MM', type: 'MCQ', difficulty: 'Easy',
        question: 'Material Master in SAP MM holds:',
        options: ['Only accounting data', 'All data about a material across multiple views (Basic, Purchasing, MRP, Accounting)', 'Only vendor information', 'Production order data only'],
        answer: 1, explanation: 'The Material Master is the central record for materials containing multiple views for different departments.'
    },
    {
        id: 's18', topic: 'SAP Engineer', section: 'SAP MM', type: 'MCQ', difficulty: 'Medium',
        question: 'Procure-to-Pay (P2P) process flow in SAP MM:',
        options: ['PO→GR→IV→Payment', 'MRP→PR→PO→GR→IV→Payment', 'GR→PO→PR→IV', 'RFQ→Order→Invoice'],
        answer: 1, explanation: 'P2P: MRP Run → Purchase Requisition → Purchase Order → Goods Receipt → Invoice Verification → Payment.'
    },
    {
        id: 's19', topic: 'SAP Engineer', section: 'SAP MM', type: 'MCQ', difficulty: 'Medium',
        question: 'MIGO transaction is used for:',
        options: ['Purchase order creation', 'Goods movements (GR, GI, Transfer Posting)', 'Invoice verification', 'Material master change'],
        answer: 1, explanation: 'MIGO is the central transaction for all goods movements: receipts, issues, stock transfers, and reversals.'
    },
    {
        id: 's20', topic: 'SAP Engineer', section: 'SAP MM', type: 'MCQ', difficulty: 'Hard',
        question: 'MRP (Material Requirements Planning) calculates:',
        options: ['Vendor payment terms', 'What materials are needed, when, in what quantity based on demand and BOMs', 'Employee schedules', 'Customer invoice amounts'],
        answer: 1, explanation: 'MRP analyzes BOMs, inventory levels, and demand to generate procurement and production proposals.'
    },
    // ── SD ────────────────────────────────────────────────────────────────────────
    {
        id: 's21', topic: 'SAP Engineer', section: 'SAP SD', type: 'MCQ', difficulty: 'Easy',
        question: 'Order-to-Cash process in SAP SD begins with:',
        options: ['Delivery', 'Invoice', 'Sales Order creation', 'Payment receipt'],
        answer: 2, explanation: 'OTC: Sales Order → Delivery → Goods Issue → Billing → Payment → Clearing.'
    },
    {
        id: 's22', topic: 'SAP Engineer', section: 'SAP SD', type: 'MCQ', difficulty: 'Easy',
        question: 'Transaction VA01 is used to:',
        options: ['Create a Purchase Order', 'Create a Sales Order', 'Create Customer Invoice', 'Post Goods Issue'],
        answer: 1, explanation: 'VA01 = Create Sales Order. VA02 = Change, VA03 = Display.'
    },
    {
        id: 's23', topic: 'SAP Engineer', section: 'SAP SD', type: 'MCQ', difficulty: 'Medium',
        question: 'SAP SD Pricing is controlled by:',
        options: ['Material master only', 'Condition Technique (condition types, access sequences, pricing procedures)', 'Vendor master', 'Profit center alone'],
        answer: 1, explanation: 'SAP uses the Condition Technique for flexible pricing — condition types determined via access sequences and pricing procedures.'
    },
    {
        id: 's24', topic: 'SAP Engineer', section: 'SAP SD', type: 'MCQ', difficulty: 'Medium',
        question: 'Outbound Delivery in SAP SD is created with:',
        options: ['VL01N', 'VA01', 'VF01', 'VK11'],
        answer: 0, explanation: 'VL01N creates an Outbound Delivery referencing a sales order. VF01 is for billing.'
    },
    // ── FI ────────────────────────────────────────────────────────────────────────
    {
        id: 's25', topic: 'SAP Engineer', section: 'SAP FI', type: 'MCQ', difficulty: 'Easy',
        question: 'Chart of Accounts in SAP FI is:',
        options: ['A list of all customers', 'A structured list of G/L accounts used for financial reporting', 'A vendor payment plan', 'A tax calculation table'],
        answer: 1, explanation: 'Chart of Accounts (CoA) is the master list of GL accounts used by a company code for financial accounting.'
    },
    {
        id: 's26', topic: 'SAP Engineer', section: 'SAP FI', type: 'MCQ', difficulty: 'Medium',
        question: 'Transaction FB50 is used for:',
        options: ['Asset accounting', 'Entering G/L Account Documents (journal entries)', 'Customer payment posting', 'Bank reconciliation'],
        answer: 1, explanation: 'FB50 posts General Ledger accounting documents — manual journal entries with debit/credit lines.'
    },
    {
        id: 's27', topic: 'SAP Engineer', section: 'SAP FI', type: 'MCQ', difficulty: 'Medium',
        question: 'In SAP FI, a Company Code represents:',
        options: ['A legally independent unit that creates a complete set of financial statements', 'A cost center', 'A plant', 'A profit center'],
        answer: 0, explanation: 'Company Code is the smallest organizational unit for which a complete, self-contained set of accounts can be drawn up.'
    },
    {
        id: 's28', topic: 'SAP Engineer', section: 'SAP FI', type: 'MCQ', difficulty: 'Hard',
        question: 'New G/L in SAP provides:',
        options: ['Simplified chart of accounts only', 'Document splitting, parallel ledgers, and real-time FI-CO integration', 'Only currency functionality', 'Elimination of cost centers'],
        answer: 1, explanation: 'New G/L introduces document splitting for segment reporting, parallel accounting, and real-time FI-CO integration.'
    },
    // ── CO ────────────────────────────────────────────────────────────────────────
    {
        id: 's29', topic: 'SAP Engineer', section: 'SAP CO', type: 'MCQ', difficulty: 'Easy',
        question: 'Cost Center in SAP CO is:',
        options: ['A profit-generating unit', 'An organizational unit that incurs costs for internal tracking', 'A vendor account', 'A bank account'],
        answer: 1, explanation: 'Cost centers represent departments where costs are incurred — used for internal cost tracking and allocation.'
    },
    {
        id: 's30', topic: 'SAP Engineer', section: 'SAP CO', type: 'MCQ', difficulty: 'Medium',
        question: 'Internal Orders in SAP CO are used to:',
        options: ['Bill customers', 'Monitor costs of short-term projects or specific business events', 'Purchase materials', 'Process payroll'],
        answer: 1, explanation: 'Internal Orders collect costs for specific tasks, events, or short-term projects for detailed tracking and settlement.'
    },
    // ── Basis ─────────────────────────────────────────────────────────────────────
    {
        id: 's31', topic: 'SAP Engineer', section: 'SAP Basis', type: 'MCQ', difficulty: 'Easy',
        question: 'SAP Basis is responsible for:',
        options: ['Writing ABAP code', 'Technical administration — system landscapes, transports, user management, performance tuning', 'Financial accounting', 'Material procurement'],
        answer: 1, explanation: 'SAP Basis is the technical foundation managing SAP systems, landscapes, security, transport, and performance.'
    },
    {
        id: 's32', topic: 'SAP Engineer', section: 'SAP Basis', type: 'MCQ', difficulty: 'Medium',
        question: 'Transport Management System (TMS) moves:',
        options: ['Physical goods', 'Configuration and development objects between SAP systems (DEV→QA→PRD)', 'Network traffic', 'Server hardware'],
        answer: 1, explanation: 'TMS manages transport of changes (ABAP, configurations) across system landscapes in a controlled manner.'
    },
    {
        id: 's33', topic: 'SAP Engineer', section: 'SAP Basis', type: 'MCQ', difficulty: 'Medium',
        question: 'An SAP Landscape is:',
        options: ['A mapping of financial accounts', 'The arrangement of SAP systems (DEV, QA, PRD) in a connected environment', 'A UI theme', 'A backup strategy'],
        answer: 1, explanation: 'SAP Landscape is the defined set of connected SAP systems used for systematic change management.'
    },
    {
        id: 's34', topic: 'SAP Engineer', section: 'SAP Basis', type: 'MCQ', difficulty: 'Hard',
        question: 'SAP HANA is classified as:',
        options: ['Columnar, in-memory relational DB handling OLTP and OLAP simultaneously', 'Row-store traditional database', 'NoSQL document store', 'GraphQL server'],
        answer: 0, explanation: 'SAP HANA is a columnar, in-memory database capable of handling both OLTP and OLAP workloads simultaneously.'
    },
    {
        id: 's35', topic: 'SAP Engineer', section: 'SAP Basis', type: 'MCQ', difficulty: 'Hard',
        question: 'SM37 transaction is used for:',
        options: ['Transport management', 'Background job scheduling and monitoring', 'User role assignment', 'System performance monitoring'],
        answer: 1, explanation: 'SM37 is the Background Job Monitor — view, manage, and schedule ABAP background programs.'
    },
    // ── Integration ───────────────────────────────────────────────────────────────
    {
        id: 's36', topic: 'SAP Engineer', section: 'SAP Integration', type: 'MCQ', difficulty: 'Medium',
        question: 'SAP Integration Suite (CPI) is:',
        options: ['A local ERP module', 'A cloud-based integration platform connecting SAP and non-SAP systems', 'A UI framework', 'An HR module'],
        answer: 1, explanation: 'SAP Integration Suite provides pre-built adapters and iFlows to connect SAP with third-party applications via APIs and EDI.'
    },
    {
        id: 's37', topic: 'SAP Engineer', section: 'SAP Integration', type: 'MCQ', difficulty: 'Medium',
        question: 'RFC (Remote Function Call) is used for:',
        options: ['Local function calls only', 'Calling function modules across different SAP or external systems over a network', 'Accessing database directly', 'UI rendering'],
        answer: 1, explanation: 'RFC allows SAP systems to call function modules on remote systems enabling ERP-to-ERP integrations synchronously.'
    },
    {
        id: 's38', topic: 'SAP Engineer', section: 'SAP Integration', type: 'MCQ', difficulty: 'Hard',
        question: 'IDoc (Intermediate Document) in SAP is:',
        options: ['A configuration document', 'A standard SAP data format for asynchronous message exchange (EDI/ALE)', 'A financial posting document', 'A transport request'],
        answer: 1, explanation: 'IDocs are SAP\'s standard data containers for asynchronous message exchange used in ALE and EDI integration scenarios.'
    },
    // ── S/4HANA ───────────────────────────────────────────────────────────────────
    {
        id: 's39', topic: 'SAP Engineer', section: 'SAP S/4HANA', type: 'MCQ', difficulty: 'Easy',
        question: 'SAP S/4HANA is:',
        options: ['A legacy ERP system', 'The 4th generation SAP ERP built on HANA with simplified data model and Fiori UX', 'A cloud storage product', 'An HR module'],
        answer: 1, explanation: 'S/4HANA (Simple Suite for HANA) is SAP\'s next-gen ERP rebuilt for in-memory computing with a simplified data model.'
    },
    {
        id: 's40', topic: 'SAP Engineer', section: 'SAP S/4HANA', type: 'MCQ', difficulty: 'Medium',
        question: 'Key simplification in S/4HANA vs ECC:',
        options: ['No more financial accounting', 'Merged tables — Universal Journal (ACDOCA) replaces separate FI/CO/ML tables', 'Removal of SD module', 'No user management'],
        answer: 1, explanation: 'S/4HANA key simplification: Universal Journal (ACDOCA) merges FI, CO, ML tables. HANA eliminates aggregate tables.'
    },
    {
        id: 's41', topic: 'SAP Engineer', section: 'SAP S/4HANA', type: 'MCQ', difficulty: 'Hard',
        question: 'SAP BTP (Business Technology Platform) provides:',
        options: ['Only legacy ERP migrations', 'Integration, extension, analytics, and AI services for building SAP-connected apps', 'A new database product', 'Hardware infrastructure'],
        answer: 1, explanation: 'SAP BTP is the unified platform for integration, extension development, analytics and AI — foundation for SAP\'s cloud strategy.'
    },
    // ── Security ──────────────────────────────────────────────────────────────────
    {
        id: 's42', topic: 'SAP Engineer', section: 'SAP Security', type: 'MCQ', difficulty: 'Easy',
        question: 'SAP Authorization Object is:',
        options: ['A backup object', 'A set of authorization fields controlling access to system functions or data', 'A transport object', 'A database view'],
        answer: 1, explanation: 'Authorization objects contain fields representing conditions to be checked — combined in roles to control user access.'
    },
    {
        id: 's43', topic: 'SAP Engineer', section: 'SAP Security', type: 'MCQ', difficulty: 'Medium',
        question: 'SU01 transaction is used for:',
        options: ['Scheduling background jobs', 'User maintenance — create/change users and assign roles', 'System performance monitoring', 'Transport management'],
        answer: 1, explanation: 'SU01 is the main User Administration transaction for creating/modifying SAP users and assigning authorization profiles.'
    },
    {
        id: 's44', topic: 'SAP Engineer', section: 'SAP Security', type: 'MCQ', difficulty: 'Medium',
        question: 'Profile Generator (PFCG) is used to:',
        options: ['Generate performance reports', 'Create and maintain authorization roles and assign them to users', 'Generate IDocs', 'Create transport requests'],
        answer: 1, explanation: 'PFCG creates single/composite roles, generates authorization profiles, and enables user-to-role assignment.'
    },
    {
        id: 's45', topic: 'SAP Engineer', section: 'SAP Security', type: 'MCQ', difficulty: 'Hard',
        question: 'Segregation of Duties (SoD) in SAP means:',
        options: ['Dividing system into modules', 'Ensuring no single user can complete an entire sensitive process end-to-end', 'Separating dev and production systems', 'Splitting databases'],
        answer: 1, explanation: 'SoD prevents fraud by ensuring critical actions (create vendor + approve + post payment) are distributed across different users.'
    },
    // ── HCM ───────────────────────────────────────────────────────────────────────
    {
        id: 's46', topic: 'SAP Engineer', section: 'SAP HCM', type: 'MCQ', difficulty: 'Easy',
        question: 'SAP HCM stands for:',
        options: ['Hardware Configuration Management', 'Human Capital Management', 'High Capacity Module', 'Hybrid Cloud Migration'],
        answer: 1, explanation: 'SAP HCM covers personnel administration, payroll, time management, and organizational management.'
    },
    {
        id: 's47', topic: 'SAP Engineer', section: 'SAP HCM', type: 'MCQ', difficulty: 'Medium',
        question: 'Infotypes in SAP HCM are:',
        options: ['Input form types', 'Logical groupings of employee HR data (e.g., IT0001=Org Assignment, IT0008=Basic Pay)', 'Information security types', 'Integration templates'],
        answer: 1, explanation: 'Infotypes store specific HR data — each has a number (IT00xx) for personal info, pay, address, etc.'
    },
    {
        id: 's48', topic: 'SAP Engineer', section: 'SAP HCM', type: 'MCQ', difficulty: 'Medium',
        question: 'SAP SuccessFactors is:',
        options: ['An ABAP framework', 'SAP\'s cloud-based HCM suite for talent management, core HR, and workforce analytics', 'A local SAP module only', 'A security tool'],
        answer: 1, explanation: 'SuccessFactors is SAP\'s SaaS HCM solution covering recruiting, onboarding, learning, performance, and core HR in the cloud.'
    },
    // ── Analytics ─────────────────────────────────────────────────────────────────
    {
        id: 's49', topic: 'SAP Engineer', section: 'SAP Analytics', type: 'MCQ', difficulty: 'Medium',
        question: 'SAP Analytics Cloud (SAC) is used for:',
        options: ['Database management', 'Business intelligence, planning, and predictive analytics', 'Network monitoring', 'User provisioning'],
        answer: 1, explanation: 'SAC combines BI, planning, and predictive analytics in a single cloud product with native SAP HANA connectivity.'
    },
    {
        id: 's50', topic: 'SAP Engineer', section: 'SAP Analytics', type: 'MCQ', difficulty: 'Medium',
        question: 'SAP BW (Business Warehouse) is:',
        options: ['A physical warehouse management system', 'An enterprise data warehousing solution for reporting and analysis', 'A transport management tool', 'A backup system'],
        answer: 1, explanation: 'SAP BW is SAP\'s EDW solution extracting data into InfoObjects, DSOs, and InfoCubes for OLAP reporting.'
    },
];
