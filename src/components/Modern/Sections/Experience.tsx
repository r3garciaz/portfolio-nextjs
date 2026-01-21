
import { FC, memo } from 'react';
import { experience, education, SectionId } from '../../../data/data';
import Section from '../UI/Section';

const Timeline: FC = () => {
    return (
        <Section sectionId={SectionId.Resume}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Experience Column */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 mb-4">
                        <h2 className="text-sm font-semibold text-primary-400 tracking-wide uppercase">Journey</h2>
                        <h3 className="text-3xl font-bold text-white">Experience</h3>
                    </div>

                    <div className="border-l-2 border-dark-800 ml-3 space-y-12">
                        {experience.map((item: import('../../../data/dataDef').TimelineItem, index: number) => (
                            <div key={index} className="relative pl-8 group">
                                {/* Dot */}
                                <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-dark-950 bg-dark-700 group-hover:bg-primary-500 transition-colors"></div>

                                <div className="flex flex-col gap-1 mb-2">
                                    <span className="text-xs font-mono text-primary-400">{item.date}</span>
                                    <h4 className="text-xl font-bold text-white text-gradient">{item.title}</h4>
                                    <span className="text-sm font-semibold text-white/80">{item.location}</span>
                                </div>
                                <div className="text-dark-400 text-sm leading-relaxed">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 mb-4">
                        <h2 className="text-sm font-semibold text-primary-400 tracking-wide uppercase">Knowledge</h2>
                        <h3 className="text-3xl font-bold text-white">Education & Certs</h3>
                    </div>

                    <div className="border-l-2 border-dark-800 ml-3 space-y-12">
                        {education.map((item: import('../../../data/dataDef').TimelineItem, index: number) => (
                            <div key={index} className="relative pl-8 group">
                                {/* Dot */}
                                <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-dark-950 bg-dark-700 group-hover:bg-primary-500 transition-colors"></div>

                                <div className="flex flex-col gap-1 mb-2">
                                    <span className="text-xs font-mono text-primary-400">{item.date}</span>
                                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                    <span className="text-sm text-dark-400">{item.location}</span>
                                </div>
                                <div className="text-dark-400 text-sm">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default memo(Timeline);
