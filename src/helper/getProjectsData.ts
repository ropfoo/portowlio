import { readFile, readdir } from 'fs/promises';
import matter from 'gray-matter';
import { ProjectType } from '../types';
import { v4 as uuidv4 } from 'uuid';

export async function getProjectsData(): Promise<ProjectType[]> {
    const projectFiles = await readdir('src/content/projects');

    let projects: ProjectType[] = [];

    for (const projectFile of projectFiles) {
        const source = await readFile(
            `src/content/projects/${projectFile}`,
            'utf8'
        );
        const { data, content } = matter(source);

        projects.push({
            id: uuidv4(),
            title: data.title,
            toolIds: data.tools,
            githubLink: data.github ?? '',
            carousel: data.carousel,
            description: content,
        });
    }

    return projects;
}
