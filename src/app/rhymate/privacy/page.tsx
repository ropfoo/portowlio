import * as React from 'react';
import { H1 } from '../../../components/Text';
import { getPageData } from '../../../helper/getPageData';
import { MainSection } from '../../../components/Section';
import { Article } from '../../../components/Article';
import ReactMarkdown from 'react-markdown';
import { A } from '../../../components/Link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rhymate Privacy | Robert Pasdziernik',
  description: 'Rhymate App Privacy',
};

export default async function RhymatePrivacyPage() {
  const rhymatePrivacy = await getPageData('rhymate/privacy');
  return (
    <MainSection>
      <H1>{rhymatePrivacy.title}</H1>
      <Article>
        <A href='/rhymate'>back</A>
        <ReactMarkdown>{rhymatePrivacy.body}</ReactMarkdown>
      </Article>
    </MainSection>
  );
}
