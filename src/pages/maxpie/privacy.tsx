import * as React from 'react';
import type { NextPage } from 'next';
import { H1 } from '../../components/Text';
import { getPageData } from '../../helper/getPageData';
import { SectionData } from '../../types';
import { MainSection } from '../../components/Section';
import { Article } from '../../components/Article';
import ReactMarkdown from 'react-markdown';
import { Back } from '../../components/Link';

export async function getStaticProps() {
  const maxpiePrivacy = await getPageData('maxpie/privacy');

  return {
    props: {
      privacy: maxpiePrivacy,
    },
  };
}

interface MaxpiePrivacyPageProps {
  info: SectionData;
  privacy: SectionData;
}

const MaxpiePrivacyPage: NextPage<MaxpiePrivacyPageProps> = (props) => {
  const { title, body } = props.privacy;
  return (
    <MainSection>
      <H1>{title}</H1>
      <Article>
        <Back />
        <ReactMarkdown>{body}</ReactMarkdown>
      </Article>
    </MainSection>
  );
};

export default MaxpiePrivacyPage;
