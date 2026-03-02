export interface Scenario {
    id: string;
    name: string;
    type: 'Q&A' | 'Review' | 'Report' | 'Decision' | 'Automation';
    description: string;
    impact: string;
    overview: string;
    process: string[];
    inputs: string[];
    outputs: string[];
}

export interface Industry {
    id: string;
    industry: string;
    icon: string;
    overview: string;
    positioning: string;
    demands: string[];
    capabilities: string[];
    value: { metric: string; label: string }[];
    scenarios: Scenario[];
}

export const industriesData: Industry[] = [
    {
        id: "finance",
        industry: "Finance",
        icon: "Building",
        positioning: "AI agents transforming credit, compliance, risk, and operations.",
        overview: "In the heavily regulated and data-intensive finance sector, BISHENG AI Agents deliver unprecedented efficiency by navigating massive streams of unstructured data, from complex trading algorithms to rigorous compliance checks. Our agents automate routine tasks while empowering human experts with deeper analytical insights.",
        demands: [
            "High volume of manual document review in credit and compliance workflows.",
            "Fragmented data silos slowing down risk assessment and underwriting.",
            "Need for real-time market analysis and regulatory scanning.",
            "Suboptimal customer service experiences due to long response times."
        ],
        capabilities: [
            "Intelligent Q&A", "Content Review", "Report Generation", "Data Analysis",
            "Workflow Automation", "RAG Knowledge System", "API Integration", "Multi-Agent Orchestration"
        ],
        value: [
            { metric: "+200%", label: "Process Efficiency" },
            { metric: "-40%", label: "Operational Cost" },
            { metric: "99%", label: "Compliance Accuracy" },
            { metric: "10x", label: "Faster Credit Decisions" }
        ],
        scenarios: [
            {
                id: "fin-01",
                name: "Intelligent Credit Assessment",
                type: "Report",
                description: "Automated aggregation and analysis of borrower data for credit risk evaluation.",
                impact: "Reduces processing time from days to minutes while maintaining extreme accuracy.",
                overview: "An agentic system that ingests bank statements, credit history, and alternative data to generate standardized credit scoring reports.",
                process: ["Data Ingestion", "Document Parsing", "Risk Model Evaluation", "Report Generation output"],
                inputs: ["Bank Statements", "Kyc Docs", "Tax Returns"],
                outputs: ["Comprehensive Credit Report", "Risk Score Index"]
            },
            {
                id: "fin-02",
                name: "Regulatory Compliance Checker",
                type: "Review",
                description: "Real-time auditing of financial communications and transactions against changing regulations.",
                impact: "Avoids severe regulatory fines and automates manual compliance overhead.",
                overview: "Deploys NLP to monitor internal communications, trading activities, and public disclosures to ensure continuous compliance with SEC/FINRA standards.",
                process: ["Real-time Data Streaming", "Semantic Analysis", "Policy Alignment Check", "Alert Generation"],
                inputs: ["Internal Emails", "Trade Logs", "Regulatory Handbooks"],
                outputs: ["Compliance Exception Alerts", "Audit-Ready Logs"]
            },
            {
                id: "fin-03",
                name: "Wealth Management Assistant",
                type: "Q&A",
                description: "Conversational agent for personalized investment insights and portfolio analysis.",
                impact: "Enhances client experiences and empowers advisors with instant market knowledge.",
                overview: "A specialized conversational UI for advisors and clients to interactively queries market trends, portfolio performance, and asset allocations.",
                process: ["User Query Parsing", "RAG from Financial APIs", "Response Synthesis", "Dialogue Management"],
                inputs: ["Natural Language Queries", "Live Market Data Feeds"],
                outputs: ["Narrative Market Summaries", "Portfolio Action Recommendations"]
            }
        ]
    },
    {
        id: "healthcare",
        industry: "Healthcare",
        icon: "Activity",
        positioning: "Empowering providers with predictive insights and automated clinical documentation.",
        overview: "BISHENG AI Agents operate at the intersection of complex medical knowledge and patient care, synthesizing intricate medical records, accelerating research, and streamlining hospital operations, ultimately allowing practitioners to focus on treating patients instead of managing documentation.",
        demands: [
            "Physician burnout from overwhelming administrative and EHR documentation.",
            "Bottlenecks in clinical trial matching and patient recruitment.",
            "Inconsistent diagnostic cross-referencing against the latest medical literature.",
            "Complex supply chain management for medical facilities."
        ],
        capabilities: [
            "Intelligent Q&A", "Report Generation", "Workflow Automation", "RAG Knowledge System", "Data Analysis"
        ],
        value: [
            { metric: "-60%", label: "Documentation Time" },
            { metric: "+30%", label: "Patient Throughput" },
            { metric: "24/7", label: "Care Triage" },
            { metric: "+45%", label: "Trial Matching Rate" }
        ],
        scenarios: [
            {
                id: "hlt-01",
                name: "Clinical Note Generator",
                type: "Report",
                description: "Ambient listening agent that drafts structured EHR notes from doctor-patient conversations.",
                impact: "Reclaims up to 3 hours per day for physicians, reducing burnout.",
                overview: "Listens to patient consultations securely and structures the dialogue into standard SOAP notes directly inside the EHR system.",
                process: ["Audio Capture", "Speech-to-Text Transcription", "Medical Entity Extraction", "EHR Field Integration"],
                inputs: ["Consultation Audio", "Patient History"],
                outputs: ["Drafted SOAP Notes", "Billing Codes Suggestion"]
            },
            {
                id: "hlt-02",
                name: "Medical Policy Q&A",
                type: "Q&A",
                description: "Instant multimodal retrieval of insurance policies and medical coverage details.",
                impact: "Resolves claims faster and improves patient billing transparency.",
                overview: "Enables administrative staff to ask complex natural language questions regarding specific insurer policies and patient coverage limits.",
                process: ["Query Intent Parsing", "Document Retrieval via RAG", "Contextual Answer Generation", "Citation Linking"],
                inputs: ["Staff Queries", "Insurance Manuals PDF/HTML"],
                outputs: ["Direct Answers", "Source Citations"]
            }
        ]
    },
    {
        id: "manufacturing",
        industry: "Manufacturing",
        icon: "Cpu",
        positioning: "Driving Industry 4.0 with predictive maintenance and supply chain orchestration.",
        overview: "Manufacturing requires precision and high uptime. BISHENG AI Agents predict equipment failures, optimize global supply routes, and generate automated production safety reports. Our solutions bridge the gap between IT and operational technology (OT).",
        demands: [
            "Unplanned machine downtime leading to significant revenue loss.",
            "Supply chain volatility disrupting production schedules.",
            "Siloed floor data making root cause analysis difficult.",
            "Labor-intensive manual quality assurance and safety reporting."
        ],
        capabilities: [
            "Data Analysis", "Decision", "Workflow Automation", "Report Generation"
        ],
        value: [
            { metric: "-35%", label: "Equipment Downtime" },
            { metric: "+25%", label: "Supply Chain Resilience" },
            { metric: "99.9%", label: "QA Defect Detection" },
            { metric: "-15%", label: "Energy Consumption" }
        ],
        scenarios: [
            {
                id: "mfg-01",
                name: "Predictive Maintenance Agent",
                type: "Decision",
                description: "Proactively identifies potential machinery failures using IoT sensor data.",
                impact: "Prevents catastrophic failures and optimizes maintenance schedules.",
                overview: "Constantly analyzes vibration, temperature, and pressure data streams to forecast anomalies and automatically dispatch maintenance crews before failure occurs.",
                process: ["IoT Data Ingestion", "Anomaly Detection Modeling", "Failure Forecasting", "Work Order Dispatch"],
                inputs: ["Sensor Telemetry", "Historical Maintenance Logs"],
                outputs: ["Maintenance Alerts", "Root Cause Estimations"]
            },
            {
                id: "mfg-02",
                name: "Defect Analysis Reporter",
                type: "Report",
                description: "Aggregates computer vision QA data into actionable end-of-shift quality reports.",
                impact: "Enables continuous improvement loops on the factory floor.",
                overview: "Consolidates findings from camera-based optical inspections and correlates them with specific operational shifts to pinpoint quality bottlenecks.",
                process: ["Image Data Analysis", "Trend Correlation", "Summary Formatting", "Distribution"],
                inputs: ["QA Camera Metatada", "Shift Schedules"],
                outputs: ["Shift Quality Reports", "Process Improvement Recommendations"]
            }
        ]
    },
    {
        id: "government",
        industry: "Government",
        icon: "Landmark",
        positioning: "Modernizing public services with intelligent, compliant, and accessible citizen portals.",
        overview: "BISHENG AI accelerates digital transformation in public administration. Our agents streamline bureaucratic workflows, provide multilingual citizen services, and digest dense policy documents into actionable summaries, all within a highly secure, private cloud environment.",
        demands: [
            "High backlog of citizen requests and permit applications.",
            "Difficulty for citizens to navigate complex regulatory requirements.",
            "Inefficient inter-departmental data sharing and reporting.",
            "Strict data privacy and localization requirements."
        ],
        capabilities: [
            "Intelligent Q&A", "Report Generation", "Content Review", "RAG Knowledge System"
        ],
        value: [
            { metric: "10x", label: "Faster Application Processing" },
            { metric: "+50%", label: "Citizen Satisfaction" },
            { metric: "-60%", label: "Manual Document Handling" },
            { metric: "100%", label: "Audit Trail Compliance" }
        ],
        scenarios: [
            {
                id: "gov-01",
                name: "Citizen Navigator Bot",
                type: "Q&A",
                description: "Multilingual agent assisting citizens in finding services and filling out forms.",
                impact: "Massively reduces call center volume and improves accessibility.",
                overview: "A 24/7 digital assistant available on gov portals that guides users through civic processes like business registration or visa applications.",
                process: ["Intent Recognition", "Form Field Gathering", "API Submission", "Status Tracking"],
                inputs: ["Citizen Text/Voice Input", "Government Knowledge Base"],
                outputs: ["Actionable Next Steps", "Completed Web Forms"]
            },
            {
                id: "gov-02",
                name: "Policy Impact Simulator",
                type: "Decision",
                description: "Simulates the downstream effects of new legislative drafts using demographic data.",
                impact: "Aids policymakers with data-driven legislative insights.",
                overview: "Cross-references proposed policy text with historical socio-economic data to project potential economic and social outcomes across different districts.",
                process: ["Text Semantic Mining", "Data Association", "Trend Forecasting", "Visualization Generation"],
                inputs: ["Draft Bill Text", "Census Data"],
                outputs: ["Impact Assessment Dashboards", "Key Vulnerability Summaries"]
            }
        ]
    },
    {
        id: "retail",
        industry: "Retail & E-commerce",
        icon: "ShoppingCart",
        positioning: "Hyper-personalizing consumer journeys and automating backend inventory.",
        overview: "In retail, speed and personalization are critical. BISHENG AI Agents serve as proactive sales assistants, dynamic pricing optimizers, and automated inventory forecasters, creating a seamless omni-channel experience from the warehouse to the storefront.",
        demands: [
            "Customer expectation for instant, personalized support.",
            "Inventory misalignments leading to stockouts or overstock.",
            "High competition requiring rapid marketing copy generation.",
            "Complex returns processing and dispute resolution."
        ],
        capabilities: [
            "Intelligent Q&A", "Workflow Automation", "Data Analysis", "Decision"
        ],
        value: [
            { metric: "+35%", label: "Conversion Rate" },
            { metric: "-20%", label: "Inventory Costs" },
            { metric: "+40%", label: "Customer LTV" },
            { metric: "24/7", label: "Global Support" }
        ],
        scenarios: [
            {
                id: "rtl-01",
                name: "Personalized Shopping Agent",
                type: "Q&A",
                description: "Conversational commerce agent that recommends products based on user style and history.",
                impact: "Drives higher average order value and customer retention.",
                overview: "An embedded chat interface that acts as a digital stylist or personal shopper, guiding the user from discovery to checkout.",
                process: ["Preference Extraction", "Catalog RAG Search", "Recommendation Logic", "Cart Integration"],
                inputs: ["User Chat History", "Product Metadata"],
                outputs: ["Curated Product Links", "Styling Advice"]
            }
        ]
    }
];
