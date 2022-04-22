import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { ProjectType } from '../types';

export async function getMarkdownData() {
    const source = await readFile('src/content/projects/tonemato.md', 'utf8');
    const { data, content } = matter(source);

    const project: ProjectType = {
        id: 'abc',
        title: data.title,
        toolIds: data.tools,
        githubLink: data.github,
        carousel: data.carousel,
        description: content,
    };

    return [project];
}
