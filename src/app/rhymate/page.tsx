import * as React from 'react';
import { H1 } from '../../components/Text';
import { getPageData } from '../../helper/getPageData';
import { MainSection } from '../../components/Section';
import { Article } from '../../components/Article';
import ReactMarkdown from 'react-markdown';
import { A } from '../../components/Link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rhymate | Robert Pasdziernik',
  description: 'Rhymate App',
};

export default async function RhymatePage() {
  const rhymateInfo = await getPageData('rhymate/info');
  return (
    <MainSection>
      <H1>{rhymateInfo.title}*</H1>
      <Article>
        <ReactMarkdown>{rhymateInfo.body}</ReactMarkdown>
      </Article>
      <Article>
        <ul>
          <li>
            <A href={'/rhymate/privacy'}>Privacy</A>
          </li>
          <li>
            <A href='mailto:robert.pasdziernik@gmail.com'>Email Support</A>
          </li>
        </ul>
      </Article>
      <p>*proper website coming soon</p>
    </MainSection>
  );
}
