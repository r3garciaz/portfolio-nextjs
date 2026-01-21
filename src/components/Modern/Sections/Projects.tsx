
import { FC, memo } from 'react';
import Image from 'next/image';
import { portfolioItems, SectionId } from '../../../data/data';
import Section from '../UI/Section';
import Card from '../UI/Card';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Projects: FC = () => {
    return (
        <Section sectionId={SectionId.Portfolio}>
            <div className="flex flex-col gap-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-sm font-semibold text-primary-400 tracking-wide uppercase mb-2">Work</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Featured Projects</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item: import('../../../data/dataDef').PortfolioItem, index: number) => (
                        <Card key={index} className="!p-0 overflow-hidden group relative h-[300px]">
                            {/* Image Background */}
                            <div className="absolute inset-0 h-full w-full">
                                <Image
                                    alt={item.title}
                                    src={item.image}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    placeholder="blur"
                                />
                                <div className="absolute inset-0 bg-dark-950/60 group-hover:bg-dark-950/80 transition-colors duration-300"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-dark-300 text-sm mb-4 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {item.description}
                                </p>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm hover:text-primary-300"
                                >
                                    View Project <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default memo(Projects);
