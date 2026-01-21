
import { FC, memo } from 'react';
import Image from 'next/image';

import { heroData, SectionId } from '../../../data/data';
import Section from '../UI/Section';

const Hero: FC = () => {
    // Standard destructuring - keeping it clean
    const { description, actions } = heroData;

    return (
        <Section noPadding sectionId={SectionId.Hero} className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Full Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    alt="Cloud Infrastructure Background"
                    fill
                    src="/hero-bg.png"
                    quality={100}
                    className="object-cover object-center"
                    priority
                />
                {/* Heavy Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/80 to-dark-950/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
            </div>

            {/* Content Container - Centered/Left-Aligned but Balanced */}
            <div className="relative z-10 w-full max-w-screen-xl px-4 md:px-8 flex flex-col justify-center min-h-[80vh]">

                <div className="max-w-3xl flex flex-col gap-8 animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex self-start px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 backdrop-blur-md">
                        <span className="text-xs font-mono text-primary-400 font-semibold tracking-wider uppercase">
                            Senior Developer & Cloud Engineer
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                        {heroData.name} <br />
                        {/* Architecting <br className="hidden md:block" /> */}
                        <span className="text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-200">
                            Architecting Resilient Cloud Systems.
                        </span>
                    </h1>

                    {/* Description - Using the data but styled */}
                    <div className="text-lg md:text-xl text-dark-200 leading-relaxed max-w-2xl">
                        {description}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        {actions.map(({ href, text, primary, Icon }: any) => (
                            <a
                                key={text}
                                href={href}
                                className={`
                                    relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300
                                    ${primary
                                        ? 'bg-primary-600 text-white hover:bg-primary-500 hover:-translate-y-1 shadow-xl shadow-primary-600/20'
                                        : 'bg-white/5 text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20'}
                                `}
                            >
                                {text}
                                {Icon && <Icon className="w-5 h-5" />}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex justify-center pt-2">
                    <div className="w-1 h-2 bg-primary-500 rounded-full"></div>
                </div>
            </div>

        </Section>
    );
};

export default memo(Hero);
