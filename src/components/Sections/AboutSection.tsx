import ReactMarkdown from 'react-markdown';
import { Article } from '../Article';
import { MainSection, SectionProps } from '../Section';
import { H1 } from '../Text';

const AboutSection: React.FC<SectionProps> = ({
  id,
  sectionRef,
  sectionData,
}) => {
  return (
    <MainSection id={id} sectionRef={sectionRef}>
      <div className='flex flex-col'>
        <div>
          <H1>{sectionData?.title}</H1>
          {sectionData?.body && (
            <Article>
              <ReactMarkdown>{sectionData.body}</ReactMarkdown>
            </Article>
          )}
        </div>
      </div>
    </MainSection>
  );
};

export default AboutSection;
