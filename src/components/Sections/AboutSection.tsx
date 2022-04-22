import ReactMarkdown from 'react-markdown';
import { MainSection, SectionProps } from '../Layout';
import { H1 } from '../Text';

const AboutSection: React.FC<SectionProps> = ({ id, sectionRef, data }) => {
    return (
        <MainSection id={id} sectionRef={sectionRef}>
            <div className='flex flex-col justify-between'>
                <div>
                    <H1>{data?.title}</H1>
                    {data?.body && (
                        <article>
                            <ReactMarkdown>{data.body}</ReactMarkdown>
                        </article>
                    )}
                </div>
            </div>
        </MainSection>
    );
};

export default AboutSection;
