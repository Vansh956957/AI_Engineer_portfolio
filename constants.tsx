
import { Project, Experience, SkillCategory, CodingStat } from './types';

export const TIMELINE_EVENTS: Experience[] = [
  {
    id: 'hotelkey-work',
    type: 'work',
    role: 'Product Analyst | Cloud & Automation',
    company: 'HotelKey India Pvt Ltd',
    period: 'July 2025 – Present',
    location: 'Nagpur, India',
    highlights: [
      'Orchestrating AI integration strategies within AWS infrastructure to optimize high-scale hospitality operations.',
      'Analyzing complex datasets to drive product-led growth and identify architectural efficiencies.',
      'Implementing automated system health monitoring frameworks for global cloud services.',
      'Bridging technical engineering and product vision to deliver data-informed roadmaps.'
    ]
  },
  {
    id: 'btech-edu',
    type: 'education',
    role: 'B.Tech in Artificial Intelligence',
    company: 'G.H Raisoni College of Engineering',
    period: '2020 – 2024',
    location: 'Nagpur',
    highlights: [
      'Specialized in Neural Architectures and Scalable Product Systems.',
      '8.88 CGPA | Academic focus on Generative AI integration in enterprise environments.'
    ]
  },
  {
    id: 'gbj-buzz-ai-intern',
    type: 'internship',
    role: 'AI Research Intern',
    company: 'GBJ BUZZ Pvt Ltd',
    period: 'Jan 2024 – June 2024',
    location: 'Nagpur',
    highlights: [
      'Researched LLM orchestration frameworks for cross-functional business automation.',
      'Validated RAG-based prototypes to improve internal knowledge retrieval accuracy.'
    ]
  },
  {
    id: 'gbj-buzz-ui-intern',
    type: 'internship',
    role: 'UI/UX Design Intern',
    company: 'GBJ BUZZ Pvt Ltd',
    period: 'Jan 2023 – June 2023',
    location: 'Nagpur',
    highlights: [
      'Developed design systems for AI-integrated products, focusing on seamless human-AI interaction.',
      'Led interface prototyping for high-traffic client platforms to enhance conversion metrics.'
    ]
  },
  {
    id: 'ai-ats-project',
    type: 'project',
    role: 'Final Year Internship Project: GenAI Powered ATS',
    company: 'G.H Raisoni College of Engineering',
    period: '2024',
    location: 'Nagpur',
    demoUrl: 'https://intellirecruit.vercel.app/',
    paperUrl: 'https://tijer.org/jnrid/papers/JNRID2405013.pdf',
    highlights: [
      'Architected a production-ready recruitment platform using Gemini LLM and FastAPI for high-performance resume parsing.',
      'Implemented automated screening and intelligent semantic search engine for high-precision candidate matching.',
      'Research published: Semantic Search using LLMs for Recruitment optimization using RAG architectures.'
    ]
  },
  {
    id: 'deepfake-project',
    type: 'project',
    role: 'Final Year Project: Deepfake Detection',
    company: 'G.H Raisoni College of Engineering',
    period: '2023',
    location: 'Nagpur',
    paperUrl: 'https://www.ijcrt.org/papers/IJCRT2311476.pdf',
    highlights: [
      'Developed a hybrid LSTM-ResNext architecture for high-accuracy deepfake video detection.',
      'Research published: Advanced video forensic analysis using deep spatial-temporal features.',
      'Engineered a scalable detection pipeline to mitigate the risks of synthetic media manipulation.'
    ]
  },
  {
    id: 'sih-finalist',
    type: 'achievement',
    role: 'Smart India Hackathon Finalist',
    company: 'Government of India',
    period: '2023',
    location: 'National',
    highlights: [
      'Architected an AI-driven automation solution for critical public sector challenges.',
      'Advanced to national finals by demonstrating high-impact technological viability.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'multi-llm',
    name: 'Multi-LLM Strategic Orchestration',
    period: 'Present',
    description: 'A sophisticated consensus-based search layer that queries multiple LLMs simultaneously to cross-verify facts, providing a higher echelon of truth for enterprise decision-making.',
    approach: [
      'Implemented model-to-model cross-validation protocols',
      'Optimized orchestration latency for real-time inference',
      'Developed granular system prompts for consistent output'
    ],
    tech: ['LangChain', 'Python', 'Google Gemini', 'Groq LPU'],
    metrics: [
      'Significant increase in factual verification',
      'Zero-latency response orchestration',
      'Reliable enterprise-grade truth scores'
    ],
    githubUrl: 'https://github.com/Vansh956957/Multi-LLM-Q-A-System-using-LangChain-V1-Groq-Gemini-.git'
  },
  {
    id: 'agentic-infra',
    name: 'Automated Cloud Provisioning Engine',
    period: '2025',
    description: 'An agent-led platform that translates visual infrastructure blueprints into production-ready cloud configurations, drastically reducing the manual barrier for cloud deployment.',
    approach: [
      'Engineered a visual-to-code abstraction layer',
      'Automated complex AWS service dependencies',
      'Integrated direct CI/CD deployment hooks'
    ],
    tech: ['React', 'AWS Bedrock', 'Terraform', 'Node.js'],
    metrics: [
      'Major acceleration in deployment cycles',
      'Zero manual configuration error rate',
      'Scalable visual infrastructure management'
    ],
    demoUrl: 'https://agentic-infrastructure-designer.onrender.com/'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI Systems Engineering',
    skills: ['Generative AI', 'LangChain', 'RAG Pipelines', 'LLM Orchestration', 'Python', 'FastAPI']
  },
  {
    title: 'Cloud Infrastructure',
    skills: ['AWS (Bedrock, SageMaker)', 'CloudWatch', 'MLOps']
  },
  {
    title: 'Analytical Intelligence',
    skills: ['SQL Performance', 'Data Visualization', 'Looker Studio', 'Predictive Modeling', 'ETL']
  },
  {
    title: 'Product Leadership',
    skills: ['Product Strategy', 'UI/UX Prototyping', 'User Psychology', 'Design Systems', 'Figma']
  }
];

export const CODING_STATS: CodingStat[] = [
  {
    platform: 'CodeChef',
    rank: '300+ Problems Solved',
    detail: 'Demonstrated proficiency in algorithmic efficiency and complex data structure implementation.',
    icon: '🏆'
  },
  {
    platform: 'LeetCode',
    rank: '50+ Specialized Solutions',
    detail: 'Expertise in database optimization and complex SQL query performance tuning.',
    icon: '⚡'
  },
  {
    platform: 'HackerRank',
    rank: '5-Star Proficiency',
    detail: 'Verified expert-level capability in Python development and relational database management.',
    icon: '💎'
  }
];
