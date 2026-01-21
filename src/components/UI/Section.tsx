
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { SectionId } from '../../data/data';

interface SectionProps {
    sectionId: SectionId;
    sectionTitle?: string;
    noPadding?: boolean;
    className?: string;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({ children, sectionId, noPadding = false, className }) => {
    return (
        <section
            className={classNames(
                'relative w-full max-w-screen-2xl mx-auto',
                { 'px-4 py-16 md:py-24 lg:px-8': !noPadding },
                className
            )}
            id={sectionId}
        >
            {children}
        </section>
    );
};

export default Section;
