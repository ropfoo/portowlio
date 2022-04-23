import React, { RefObject } from 'react';
import { SectionData } from '../types';
export const mainPadding = 'px-3 sm:px-24 md:px-24 lg:px-36 xl:px-60 2xl:px-96';

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
            className={`
            flex 
            flex-col
            justify-center
            pb-36 md:pb-72
            ${mainPadding}
            ${customCSS}
            `}>
            {children}
        </section>
    );
};
