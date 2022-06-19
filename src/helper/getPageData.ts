import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { SectionData } from '../types';

export async function getPageData(
  type: 'maxpie/info' | 'maxpie/privacy'
): Promise<SectionData> {
  const source = await readFile(`src/content/pages/${type}.md`, 'utf8');
  const { data, content } = matter(source);

  return {
    title: data.title,
    body: content,
  };
}
