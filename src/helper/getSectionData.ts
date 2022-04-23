import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { IntroSectionData, SectionData } from '../types';

export async function getSectionData(
    type: 'about' | 'projects'
): Promise<SectionData> {
    const source = await readFile(`src/content/sections/${type}.md`, 'utf8');
    const { data, content } = matter(source);

    return {
        title: data.title,
        body: content,
    };
}
export async function getIntroSectionData(): Promise<IntroSectionData> {
    const source = await readFile(`src/content/sections/intro.md`, 'utf8');
    const { data, content } = matter(source);

    return {
        title: data.title,
        githubLink: data.github,
        linkedInLink: data.linkedIn,
        body: content,
    };
}
