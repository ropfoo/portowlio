import * as React from 'react';
import type { NextPage } from 'next';
import { H1 } from '../../components/Text';
import { getPageData } from '../../helper/getPageData';
import { SectionData } from '../../types';
import { MainSection } from '../../components/Section';
import { Article } from '../../components/Article';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export async function getStaticProps() {
  const maxpieInfo = await getPageData('maxpie/info');
  const maxpiePrivacy = await getPageData('maxpie/privacy');

  return {
    props: {
      info: maxpieInfo,
      privacy: maxpiePrivacy,
    },
  };
}

interface MaxpiePageProps {
  info: SectionData;
  privacy: SectionData;
}

const MaxpiePage: NextPage<MaxpiePageProps> = (props) => {
  console.log(props);
  const { title, body } = props.info;
  return (
    <MainSection>
      <H1>{title}</H1>
      <Article>
        <ReactMarkdown>{body}</ReactMarkdown>
      </Article>
      <Article>
        <ul>
          <li>
            <Link href={'/maxpie/privacy'}>
              <a className='text-jeans'>Privacy</a>
            </Link>
          </li>
          <li>
            <a
              href='mailto:robert.pasdziernik@gmail.com'
              className='text-jeans'
            >
              Email Support
            </a>
          </li>
        </ul>
      </Article>
    </MainSection>
  );
};

export default MaxpiePage;
