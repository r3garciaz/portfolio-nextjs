
import { FC, memo } from 'react';
import classNames from 'classnames';

import { skills, SectionId } from '../../data/data';
import Section from '../UI/Section';
import Card from '../UI/Card';

const Skills: FC = () => {
    return (
        <Section sectionId={SectionId.Skills} className="bg-dark-950/50">
            <div className="flex flex-col gap-12 relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-sm font-semibold text-primary-400 tracking-wide uppercase mb-2">My Arsenal</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Technologies & Tools</h3>
                    <p className="text-dark-400">
                        A comprehensive look at the stack I use to build scalable, reliable cloud infrastructure and applications.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr grid-flow-dense">
                    {skills.map((group: import('../../data/dataDef').SkillGroup, index: number) => {
                        // Smart Spans for Bento Layout
                        // "Cloud" and "DevOps" are key, so they get more space.
                        const isMain = group.name === 'Cloud' || group.name === 'DevOps / IaC';
                        // "Frontend" has many items, give it 2 cols if possible or keep 1 but flexible.
                        // Let's force Cloud/DevOps to span 2 cols to create visual hierarchy.

                        return (
                            <Card
                                key={index}
                                className={classNames(
                                    'flex flex-col gap-4',
                                    // Use 'md:col-span-2' for main items to break up the grid.
                                    // 'lg:col-span-2' on a 3-col grid allows a 1-col item to sit next to it.
                                    { 'md:col-span-1 lg:col-span-1 bg-gradient-to-br from-dark-900/80 to-dark-800/50': isMain }
                                )}
                            >
                                <div className="border-b border-dark-700/50 pb-2 mb-2">
                                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                        {group.name}
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill: import('../../data/dataDef').Skill, sIdx: number) => (
                                        <div
                                            key={sIdx}
                                            className={classNames(
                                                "px-3 py-1.5 rounded-md text-sm font-medium border transition-colors",
                                                isMain
                                                    ? "bg-primary-950/30 border-primary-800/50 text-primary-200 hover:border-primary-500/50"
                                                    : "bg-dark-800/50 border-dark-700 text-dark-300 hover:border-dark-500"
                                            )}
                                        >
                                            {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default memo(Skills);
