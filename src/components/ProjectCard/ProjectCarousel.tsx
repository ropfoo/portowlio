import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ImageSource } from '../../types';

interface ProjectCarouselProps {
  imageSources: ImageSource[];
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
      {imageSources.map((image) => (
        <CarouselElement key={image.src} image={image} />
      ))}
    </Carousel>
  );
};

interface CarouselElementProps {
  image: ImageSource;
}

const CarouselElement: React.FC<CarouselElementProps> = ({ image }) => {
  return (
    <div className='relative h-56 rounded-md md:h-64'>
      <Image
        alt={image.alt}
        className='pointer-events-none select-none rounded-md object-cover'
        src={image.src}
        sizes='320'
        width={300}
        height={300}
        quality={75}
      />
    </div>
  );
};

export default ProjectCarousel;
