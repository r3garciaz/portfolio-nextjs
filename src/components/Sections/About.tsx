
import { FC, memo } from 'react';
import Image from 'next/image';

import { aboutData, SectionId } from '../../data/data';
import Section from '../UI/Section';
import Card from '../UI/Card';

const About: FC = () => {
    const { profileImageSrc, description, aboutItems } = aboutData;

    return (
        <Section sectionId={SectionId.About}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image / Stats Column */}
                <div className="relative order-2 lg:order-1">
                    <div className="relative h-96 w-full lg:h-[500px] rounded-3xl overflow-hidden">
                        {profileImageSrc ? (
                            <Image
                                alt="Reinaldo García Zúñiga - Senior Developer & Cloud Engineer Profile"
                                className="h-full w-full object-cover"
                                src={profileImageSrc}
                                placeholder="blur"
                            />
                        ) : null}
                        {/* Overlay tint */}
                        <div className="absolute inset-0 bg-primary-900/20 mix-blend-overlay"></div>
                    </div>
                    {/* Floating Cards (Decor) */}
                    <Card className="absolute -bottom-6 -right-6 !bg-dark-950/90 !border-dark-700 w-48 hidden md:block">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-primary-400">15+</span>
                            <span className="text-xs text-dark-400 uppercase tracking-wider">Years Experience</span>
                        </div>
                    </Card>
                </div>

                {/* Content Column */}
                <div className="flex flex-col gap-8 order-1 lg:order-2">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-base font-semibold text-primary-400 tracking-wide uppercase">About Me</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white">Engineering Reliability in Complex Systems</h3>
                    </div>

                    <div className="prose prose-invert max-w-none text-dark-300 leading-relaxed whitespace-pre-line">
                        {description}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {aboutItems.map(({ label, text, Icon }: import('../../data/dataDef').AboutItem, idx: number) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-dark-900/50 border border-dark-800/50">
                                {Icon && <Icon className="h-6 w-6 text-primary-500 mt-1" />}
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-dark-400">{label}</span>
                                    <span className="text-white font-medium">{text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default memo(About);
