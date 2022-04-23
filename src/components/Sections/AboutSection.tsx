import ReactMarkdown from 'react-markdown';
import { MainSection, SectionProps } from '../Layout';
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
                        <article>
                            <ReactMarkdown>{sectionData.body}</ReactMarkdown>
                        </article>
                    )}
                </div>
            </div>
        </MainSection>
    );
};

export default AboutSection;
