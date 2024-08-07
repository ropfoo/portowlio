import * as React from 'react';
import { H1 } from '../../components/Text';
import { getPageData } from '../../helper/getPageData';
import { MainSection } from '../../components/Section';
import { Article } from '../../components/Article';
import ReactMarkdown from 'react-markdown';
import { A } from '../../components/Link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maxpie | Robert Pasdziernik',
  description: 'Maxpie App',
};

export default async function MaxpiePage() {
  const maxpieInfo = await getPageData('maxpie/info');
  return (
    <MainSection>
      <H1>{maxpieInfo.title}</H1>
      <Article>
        <ReactMarkdown>{maxpieInfo.body}</ReactMarkdown>
      </Article>
      <Article>
        <ul>
          <li>
            <A href={'/maxpie/privacy'}>Privacy</A>
          </li>
          <li>
            <A href='mailto:robert.pasdziernik@gmail.com'>Email Support</A>
          </li>
        </ul>
      </Article>
    </MainSection>
  );
}
