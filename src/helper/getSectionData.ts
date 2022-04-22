import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { SectionType } from '../types';

export async function getSectionData(
    type: 'about' | 'intro'
): Promise<SectionType> {
    const source = await readFile(`src/content/sections/${type}.md`, 'utf8');
    const { data, content } = matter(source);

    return {
        title: data.title,
        body: content,
    };
}
