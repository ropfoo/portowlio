import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ProjectCarouselProps {
  imageSources: string[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ imageSources }) => {
  return (
    <Carousel
      className='rounded-md bg-nightowl'
      infiniteLoop
      emulateTouch
      preventMovementUntilSwipeScrollTolerance
      swipeScrollTolerance={20}
      showThumbs={false}
      showStatus={false}
      showIndicators={imageSources.length > 1}
    >
      {imageSources.map((source) => (
        <CarouselElement key={source} source={source} />
      ))}
    </Carousel>
  );
};

interface CarouselElementProps {
  source: string;
}

const CarouselElement: React.FC<CarouselElementProps> = ({ source }) => {
  return (
    <div className='relative h-56 rounded-md md:h-64'>
      <Image
        className='pointer-events-none select-none rounded-md object-cover'
        src={source}
        layout='fill'
        sizes='320'
        quality={75}
      />
    </div>
  );
};

export default ProjectCarousel;
