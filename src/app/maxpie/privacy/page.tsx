import * as React from 'react';
import { H1 } from '../../../components/Text';
import { getPageData } from '../../../helper/getPageData';
import { MainSection } from '../../../components/Section';
import { Article } from '../../../components/Article';
import ReactMarkdown from 'react-markdown';
import { A } from '../../../components/Link';

export default async function MaxpiePrivacyPage() {
  const maxpiePrivacy = await getPageData('maxpie/privacy');
  return (
    <MainSection>
      <H1>{maxpiePrivacy.title}</H1>
      <Article>
        <A href='/maxpie'>back</A>
        <ReactMarkdown>{maxpiePrivacy.body}</ReactMarkdown>
      </Article>
    </MainSection>
  );
}
