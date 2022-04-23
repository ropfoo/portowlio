export type ProjectType = {
    id: string;
    title: string;
    description: string;
    toolIds: ToolType[];
    carousel: string[];
    githubLink?: string;
};

export interface SectionData {
    title: string;
    body: string;
}

export interface IntroSectionData extends SectionData {
    githubLink: string;
    linkedInLink: string;
}

export type ToolType =
    | 'react'
    | 'nextjs'
    | 'gatsby'
    | 'graphql'
    | 'firebase'
    | 'tailwind'
    | 'flutter'
    | 'ionic'
    | 'nodejs';
