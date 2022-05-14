import React, { RefObject } from 'react';
import { SectionData } from '../types';

export interface SectionProps {
  id?: string;
  sectionRef?: RefObject<HTMLDivElement>;
  sectionData?: SectionData;
}

interface MainSectionProps extends SectionProps {
  customCSS?: string;
}

export const MainSection: React.FC<MainSectionProps> = ({
  children,
  sectionRef,
  id,
  customCSS,
}) => {
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`flex flex-col justify-center pb-36 md:pb-72 ${customCSS}`}
    >
      {children}
    </section>
  );
};
