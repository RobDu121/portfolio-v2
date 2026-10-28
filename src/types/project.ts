export interface Visualization{
    src: string;
    alt: string;
    caption: string;
}


export interface Project{
    title: string;
    problem: string;
    methods: string;
    results: string;
    technologies: string[];
    image?: string;
    visualizations?: Visualization[];
    github?: string;
    metrics?: Metric[];
    slug: string;
    methodologySteps?: string[];
    keyFindings?: string[];
    conclusion?: string;
    nextSteps?: string[];
}

export interface Metric {
    label: string;
    value: string;
}