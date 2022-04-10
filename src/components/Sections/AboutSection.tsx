import { MainSection, SectionProps } from '../Layout';
import { H1, P } from '../Text';

const AboutSection: React.FC<SectionProps> = ({ id, sectionRef }) => {
    return (
        <MainSection id={id} sectionRef={sectionRef}>
            <div className='flex flex-col justify-between'>
                <div>
                    <H1>about me:</H1>
                    <P>My name is Robert and I am a Frontend Developer. </P>
                </div>
            </div>
        </MainSection>
    );
};

export default AboutSection;
