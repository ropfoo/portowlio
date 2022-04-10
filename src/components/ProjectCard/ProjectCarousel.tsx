import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCarousel: React.FC = () => {
    return (
        <Carousel
            className='rounded-md'
            infiniteLoop
            emulateTouch
            showThumbs={false}
            showStatus={false}>
            <CarouselElement />
            <CarouselElement />
            <CarouselElement />
        </Carousel>
    );
};

const CarouselElement: React.FC = () => {
    return (
        <div className='h-56 md:h-64 rounded-md'>
            <Image
                className='object-cover rounded-md select-none pointer-events-none'
                src='/images/rp_team.jpg'
                layout='fill'
            />
        </div>
    );
};

export default ProjectCarousel;
