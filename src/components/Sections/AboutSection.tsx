import Image from 'next/image';
import { Button } from '../Button';
import { MainSection } from '../Layout';
import { H1, P } from '../Text';

const AboutSection: React.FC = () => {
    return (
        <MainSection>
            <div className='flex flex-col justify-between'>
                <div>
                    <div className='mb-24 md:mb-36 xl:mb-52'>
                        <H1>about me:</H1>
                    </div>
                    <P>My name is Robert and I am a Frontend Developer. </P>
                </div>

                <section>
                    <Button>about me</Button>
                </section>
            </div>
        </MainSection>
    );
};

export default AboutSection;
