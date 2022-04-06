import React from 'react';

export const mainPadding = 'px-3 sm:px-12 md:px-28 lg:px-64 2xl:px-96';

export const MainSection = React.forwardRef<HTMLDivElement, any>(
    ({ children }, sectionRef) => (
        <section
            ref={sectionRef}
            className={`
            flex 
            justify-between
            ${mainPadding}
            `}>
            {children}
        </section>
    )
);
