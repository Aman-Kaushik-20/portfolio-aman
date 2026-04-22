import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  creator,
  web,
  mobile,
  typescript,
  fastapi,
  langchain,
  neo4j,
  git,
  docker,
  qolaba,
  surepass,
  python,
  orbitix,
  supplygraph,
  graphreason,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Python Backend Engineer",
    icon: backend,
  },
  {
    title: "AI / GenAI Engineer",
    icon: web,
  },
  {
    title: "Agentic Systems",
    icon: mobile,
  },
  {
    title: "Graph RAG & Knowledge Graphs",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "Neo4j",
    icon: neo4j,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "SWE — Python Backend & AI",
    companyName: "Qolaba AI",
    icon: qolaba,
    iconBg: "#ffffff",
    date: "February 2025 — Present",
    points: [
      "Built a knowledge graph + LLM pipeline on Neo4j to automate OCR-based content structuring for NCERT, Maharashtra and Odisha State Boards, and Bansal Classes — standardizing unstructured enterprise data at scale.",
      "Architected production NLP pipelines for document classification and multilingual translation for the Maharashtra Government (Tapaal), processing thousands of daily inquiries across regional vernaculars and drastically reducing manual triage.",
      "Orchestrated agentic multi-agent workflows for EXL (Fortune 500), automating intricate business logic through modular agent design and advanced state management.",
      "Architected a provider-agnostic multi-modal engine for automated video, audio, and image synthesis powering Sumo AI's global rollout, with a polyglot Python/TypeScript backend built for horizontal scalability.",
      "Deployed observability and evaluation pipelines with LangSmith and Opik across 5+ production client projects — tracking hallucination rates, classification precision, and translation quality.",
      "Built scalable FastAPI + Dapr services on GCP with async processing and caching for AI-heavy pipelines serving thousands of document requests.",
    ],
  },
  {
    title: "Machine Learning Intern",
    companyName: "Surepass Technologies",
    icon: surepass,
    iconBg: "#ffffff",
    date: "July 2024 — September 2024",
    points: [
      "Fine-tuned YOLOv8 models on large-scale public datasets for document and face processing, achieving 0.95 mAP in inference.",
      "Built FastAPI services for liveness detection and document processing pipelines with 98% classification precision.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Orbitix — Travel Agent Planner",
    description:
      "Multi-agent travel concierge built on Agno (Phidata), coordinating 6 specialized agents (Amadeus, Perplexity, Google Maps, NewsAPI, TripAdvisor, ElevenLabs) under a Claude Sonnet team lead. Features SSE streaming, tool-call tracing, per-run context injection, episodic memory via pgvector, and an ElevenLabs-powered audio-tour generator.",
    tags: [
      {
        name: "agno",
        color: "blue-text-gradient",
      },
      {
        name: "pgvector",
        color: "green-text-gradient",
      },
      {
        name: "sse-streaming",
        color: "pink-text-gradient",
      },
    ],
    image: orbitix,
    sourceCodeLink: "https://github.com/Aman-Kaushik-20/Orbitix",
  },
  {
    name: "SupplyGraph AI",
    description:
      "Multi-agent system for global supply chain analysis using Neo4j GraphRAG. Combines 4+ retrieval strategies (vector, hybrid, vector+cypher, hybrid+cypher) with Voyage-3 embeddings, BM25, and custom re-ranking on Agno AI. Fully async architecture with SSE streaming and sub-1.5s TTFT.",
    tags: [
      {
        name: "neo4j",
        color: "blue-text-gradient",
      },
      {
        name: "graph-rag",
        color: "green-text-gradient",
      },
      {
        name: "async",
        color: "pink-text-gradient",
      },
    ],
    image: supplygraph,
    sourceCodeLink: "https://github.com/Aman-Kaushik-20/global-supply-chain",
  },
  {
    name: "GraphReason",
    description:
      "LLM reasoning combined with Neo4j for intelligent content classification — reaching 92% accuracy vs. 78% for a traditional ML baseline. Explores how graph context improves prompt-level classification on messy real-world documents.",
    tags: [
      {
        name: "llm",
        color: "blue-text-gradient",
      },
      {
        name: "neo4j",
        color: "green-text-gradient",
      },
      {
        name: "classification",
        color: "pink-text-gradient",
      },
    ],
    image: graphreason,
    sourceCodeLink: "https://github.com/Aman-Kaushik-20",
  },
];

export { services, technologies, experiences, testimonials, projects };
