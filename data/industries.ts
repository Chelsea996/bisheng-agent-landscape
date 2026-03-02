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

export const industriesEn: Industry[] = [
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

export const industriesZh: Industry[] = [
    {
        id: "finance",
        industry: "金融",
        icon: "Building",
        positioning: "赋能信贷、合规、风控及运营管理的智能转型。",
        overview: "在高度监管和数据密集的金融领域，BISHENG AI 智能体展现出了无与伦比的效率提升能力。通过处理海量的非结构化数据（从复杂的交易算法到严格的合规检查），我们的智能体不仅能自动化日常任务，还能辅助人类专家进行更深度的业务分析。",
        demands: [
            "信贷与合规工作流中存在大量繁琐的人工文档审核。",
            "数据孤岛严重，拖延了风险评估与承保的速度。",
            "缺乏实时的市场化分析与政策法规变动监控。",
            "客服响应慢导致客户体验感不佳。"
        ],
        capabilities: [
            "Intelligent Q&A", "Content Review", "Report Generation", "Data Analysis",
            "Workflow Automation", "RAG Knowledge System", "API Integration", "Multi-Agent Orchestration"
        ],
        value: [
            { metric: "+200%", label: "处理效率提升" },
            { metric: "-40%", label: "操作成本降低" },
            { metric: "99%", label: "合规准确率" },
            { metric: "10x", label: "更快的信贷决策" }
        ],
        scenarios: [
            {
                id: "fin-01",
                name: "智能信贷评估",
                type: "Report",
                description: "自动聚合与分析借款人数据，进行全面的信用风险评估。",
                impact: "将审批时间从几天缩短到几分钟，同时保持极高的准确性。",
                overview: "这一智能体系统可自动摄取银行流水、信用历史及多种替代数据，通过大模型运算生成标准化的信用评分报告。",
                process: ["数据录入", "文档语义解析", "风险模型运算", "生成报告和输出"],
                inputs: ["银行流水", "KYC材料", "税务记录"],
                outputs: ["综合信用报告", "风险评分指数"]
            },
            {
                id: "fin-02",
                name: "合规审查助手",
                type: "Review",
                description: "实时审计金融沟通记录与交易流水，比对最新监管政策。",
                impact: "大幅规避监管罚单风险，让合规流程实现自动化。",
                overview: "部署自然语言处理能力（NLP），对内部通信、交易活动及公开披露信息进行审查，确保交易始终符合证监会/银保监会标准。",
                process: ["实时数据流处理", "语义分析", "政策对齐检查", "异常告警生成"],
                inputs: ["内部邮件", "交易日志", "监管手册"],
                outputs: ["合规异常告警", "审计就绪日志"]
            },
            {
                id: "fin-03",
                name: "财富管理顾问",
                type: "Q&A",
                description: "提供个性化投资见解和组合分析的对话式智能体。",
                impact: "显著优化客户体验，并为理财顾问提供即时的市场全景图。",
                overview: "一个专门为理财顾问及高净值客户设计的对话界面，支持交互式查询市场趋势、投资组合表现和资产配置建议。",
                process: ["用户意图识别", "调用金融API进行RAG检索", "综合信息生成回答", "多轮对话管理"],
                inputs: ["自然语言查询", "实时市场行情数据源"],
                outputs: ["叙述性市场摘要", "投资组合调仓建议"]
            }
        ]
    },
    {
        id: "healthcare",
        industry: "医疗健康",
        icon: "Activity",
        positioning: "以预测性智能分析与全自动病历生成赋能医疗服务者。",
        overview: "BISHENG AI 智能体在医疗专业知识与患者互动的交汇处运作。它们综合复杂的病历信息、加速医学研究论文转化、并简化医院日常运营。最终目的是将医生的时间还给患者，而非困于文书工作。",
        demands: [
            "医生因繁重的行政与电子病历（EHR）记录工作而过度疲劳。",
            "临床试验匹配和患者招募的过程中存在诸多瓶颈。",
            "在跨医学文献比对和诊断交叉引用时不够便捷与一致。",
            "医疗机构的供应链管理异常复杂。"
        ],
        capabilities: [
            "Intelligent Q&A", "Report Generation", "Workflow Automation", "RAG Knowledge System", "Data Analysis"
        ],
        value: [
            { metric: "-60%", label: "文书整理时间" },
            { metric: "+30%", label: "门诊接诊量" },
            { metric: "24/7", label: "智能分诊" },
            { metric: "+45%", label: "试验匹配率提升" }
        ],
        scenarios: [
            {
                id: "hlt-01",
                name: "自动病历生成器",
                type: "Report",
                description: "通过环境监听，将医患对话智能转换为结构化的电子病历。",
                impact: "每天为医生节省可达3小时以上的文字录入时间。",
                overview: "在安全符合规范的前提下监听问诊过程，并将对话直接在 EHR 系统内梳理成标准的 SOAP 格式病历记录。",
                process: ["音频采集", "语音转文字", "医疗实体抽取", "EHR字段填报"],
                inputs: ["问诊录音", "历史过往病历"],
                outputs: ["SOAP标准病历草稿", "计费代码建议"]
            },
            {
                id: "hlt-02",
                name: "百万医保政策助手",
                type: "Q&A",
                description: "多模态即时检索复杂的医保条款和医疗报销细节。",
                impact: "加快理赔解决速度并提高患者的计费透明度。",
                overview: "使行政人员能通过通俗的语言，针对具体的承保政策和病患报销额度提出复杂的大段文本查询并获得精准答复。",
                process: ["查询意图解析", "政策文档库RAG检索", "情景答案生成", "带引用的答案输出"],
                inputs: ["职工查询文本", "PDF医保手册/相关文档"],
                outputs: ["精准政策答复", "源文件具体定位引用"]
            }
        ]
    },
    {
        id: "manufacturing",
        industry: "制造业",
        icon: "Cpu",
        positioning: "通过预测性故障维护与供应链重组，迈向真正的工业4.0。",
        overview: "制造业对精密度和高运行时间要求极高。 BISHENG AI 智能体可以提前预测设备故障、优化全球供应路线，并自动生成详尽的生产安全报告。我们的解决方案弥合了信息技术（IT）与操作技术（OT）之间的鸿沟。",
        demands: [
            "计划外的设备停机造成巨大的意外收入损失。",
            "供应链的频繁波动严重干扰车间的生产计划。",
            "工厂车间数据孤岛化使得问题根源排查变得极为困难。",
            "人力密集的质量检测（QA）和人工报表存在滞后与隐患。"
        ],
        capabilities: [
            "Data Analysis", "Decision", "Workflow Automation", "Report Generation"
        ],
        value: [
            { metric: "-35%", label: "设备意外停机时间" },
            { metric: "+25%", label: "供应链韧性" },
            { metric: "99.9%", label: "QA瑕疵检出率" },
            { metric: "-15%", label: "工厂能源消耗" }
        ],
        scenarios: [
            {
                id: "mfg-01",
                name: "预测性设备维护智能体",
                type: "Decision",
                description: "利用海量物联网（IoT）传感器数据主动识别设备潜在故障。",
                impact: "杜绝灾难性的设备停机，并最优化设备维护排期班次。",
                overview: "持续分析设备传回的振动、温度和压力数据流，在发生实际故障之前提前预判异常并自动下发维保工单。",
                process: ["物联网数据录入", "机器异常检测建模", "故障走势拟合", "派发维护指令"],
                inputs: ["传感器遥测数据", "历史维护台账"],
                outputs: ["维护响应告警", "故障根本原因估算"]
            },
            {
                id: "mfg-02",
                name: "班次质量分析报告",
                type: "Report",
                description: "将计算机视觉质检数据高度聚合为可执行的班次质量报告。",
                impact: "赋能车间层实现高效的闭环质量持续改进。",
                overview: "汇总基于摄像头的光学检测发现，并将其与具体的运营班次联系起来，精确找出引发质量瓶颈的特定环节。",
                process: ["图像数据宏观分析", "生产趋势相关性比对", "格式化摘要提取", "工单分发"],
                inputs: ["质量检查影像元数据", "班次排班时间表"],
                outputs: ["班次品控报告", "工艺流程改进建议"]
            }
        ]
    },
    {
        id: "government",
        industry: "政务服务",
        icon: "Landmark",
        positioning: "以智能、合规且高度便利的市民门户实现公共服务的现代化。",
        overview: "BISHENG AI 支持和加速行政机构的数字化转型。在高度隐私的混合云环境中，我们的智能体理顺了错综复杂的官僚工作流程，提供多语言市民服务，并将晦涩密集的政策草案转化为高度可执行的内容摘要。",
        demands: [
            "办事系统积压了海量的市民请求与许可证申请需要人工下发。",
            "普通市民很难理解晦涩的政策文本和复杂的合规要求。",
            "跨部门、跨层级的数据共享与数据报送效率低下。",
            "对数据隐私和本地化有极其严格的红线要求。"
        ],
        capabilities: [
            "Intelligent Q&A", "Report Generation", "Content Review", "RAG Knowledge System"
        ],
        value: [
            { metric: "10x", label: "审批处理增速" },
            { metric: "+50%", label: "市民直观满意度" },
            { metric: "-60%", label: "公文流转干预" },
            { metric: "100%", label: "流程审计合规" }
        ],
        scenarios: [
            {
                id: "gov-01",
                name: "政务办事导航助手",
                type: "Q&A",
                description: "支持多种语言方言，协助市民寻找相关服务并正确填写表格。",
                impact: "巨幅缩减人工客服热线的接听压力并扩大了政务易用性。",
                overview: "全天候（24/7）部署于政府门户的数字虚拟助理，以对话引导用户完成各种复杂的市政流程（例如营业执照注册或出入境签证申请）。",
                process: ["用户意图识别", "表单前置要素抓取", "对接部门API提交", "任务进度追踪"],
                inputs: ["市民文本/语音诉求", "政务政策知识库支撑"],
                outputs: ["清晰的下一步行动指南", "结构化填写完成的工单"]
            },
            {
                id: "gov-02",
                name: "政策影响力模拟器",
                type: "Decision",
                description: "利用最新的人口与经济数据，在内部预演新草案法案的出台影响。",
                impact: "用坚实的数据洞察协助政策制定者完成立法。",
                overview: "将拟通过的草案文本与当地历史的社会经济数据进行相关度计算交叉引用，项目化地呈现特定街区或特定人群可能发生的经济指标变化情况。",
                process: ["草案文本语义挖掘", "关联因子挂载", "数值趋势粗建模预测", "多维图表可视化呈现"],
                inputs: ["法案草稿文本", "网格人口普查等结构化数据"],
                outputs: ["影响预估数据驾驶舱", "重点风险缓解摘要"]
            }
        ]
    },
    {
        id: "retail",
        industry: "零售与电商",
        icon: "ShoppingCart",
        positioning: "极度个性化的全链路消费者体验与自动化后端盘发履约。",
        overview: "在零售业中，响应速度与个性化几乎决定生死。 BISHENG AI 智能体扮演了积极主动的导购、动态定价优化员以及库存自动化分析师，将供应链仓库与前端收银台进行了无缝连通与体验编排。",
        demands: [
            "消费者越来越期待能够获得瞬时答复和“一对一”私域级别的服务。",
            "由于信息错位导致的爆款缺货与长尾商品囤积现象。",
            "激烈的线上价格战，需要高频生成数以万计的营销素材。",
            "由于尺码、物流造成的复杂售后与退换货争议纠纷处理。"
        ],
        capabilities: [
            "Intelligent Q&A", "Workflow Automation", "Data Analysis", "Decision"
        ],
        value: [
            { metric: "+35%", label: "下单转化率" },
            { metric: "-20%", label: "无效库存资金占用" },
            { metric: "+40%", label: "用户生命周期价值量" },
            { metric: "24/7", label: "全球覆盖跨国售后" }
        ],
        scenarios: [
            {
                id: "rtl-01",
                name: "全能私人导购体",
                type: "Q&A",
                description: "对话式驱动的电商智能体，基于用户过往风格偏好动态推荐单品。",
                impact: "通过更贴心的沟通极大推高购物车客单价（AOV）和复购率。",
                overview: "一个嵌入到品牌APP或小程序的聊天侧边栏，扮演金牌柜员。从发现好物一路陪伴引导使用者进入支付结账环节。",
                process: ["语境风格偏好提炼", "调取私域商品库RAG", "构建组合推荐逻辑", "引导购物车加购"],
                inputs: ["用户聊天查询词与历史订单记录", "当前货品种类的元数据矩阵"],
                outputs: ["精挑细选的穿搭商品链接", "情绪化关怀的造型指导建议"]
            }
        ]
    }
];

export const industriesData = typeof window !== 'undefined' && localStorage.getItem('lang') === 'zh'
    ? industriesZh
    : industriesEn;
