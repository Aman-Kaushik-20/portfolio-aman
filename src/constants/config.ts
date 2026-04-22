type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Aman Kaushik",
    fullName: "Aman Kaushik",
    email: "amankhaushik20112001@gmail.com",
  },
  hero: {
    name: "Aman Kaushik",
    p: ["I build Generative AI systems, agentic", "workflows and scalable Python backends"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Python Backend & AI Engineer with 1+ year of production experience
      designing Generative AI systems, multi-agent workflows and scalable backend
      architectures. I've shipped high-impact AI solutions for government entities
      (Maharashtra), Fortune 500 MNCs (EXL) and leading EdTech platforms. I work
      day-to-day with async Python, FastAPI, LangChain/LangGraph, Agentic AI (Agno),
      and Graph RAG on Neo4j — with a strong focus on observability, evaluation and
      getting reliable AI into production. Always in beta, never in doubt.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `A selection of projects that reflect my work on agentic systems,
    Graph RAG, and production AI backends. Each one links to the source on GitHub —
    they cover multi-agent orchestration, vector + graph retrieval, async streaming,
    and end-to-end evaluation pipelines.`,
    },
  },
};
