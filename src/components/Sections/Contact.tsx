
import { FC, memo } from 'react';
import { contact, SectionId } from '../../data/data';
import { ContactType } from '../../data/dataDef';
import Section from '../UI/Section';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Card from '../UI/Card';

const Contact: FC = () => {
    return (
        <Section sectionId={SectionId.Contact} className="mb-12">
            <Card className="bg-gradient-to-r from-dark-900 to-primary-900/20 border-primary-500/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 lg:p-8">
                    <div className="flex flex-col gap-4 max-w-xl">
                        <h2 className="text-3xl font-bold text-white">{contact.headerText}</h2>
                        <p className="text-dark-300 text-lg">{contact.description}</p>

                        <div className="flex flex-col sm:flex-row gap-6 mt-4">
                            {contact.items.map((item: import('../../data/dataDef').ContactItem, idx: number) => {
                                // Simple mapping for display
                                const isEmail = item.type === ContactType.Email;
                                const Icon = isEmail ? EnvelopeIcon : MapPinIcon; // Simplified for now
                                if (item.type === ContactType.Github || item.type === ContactType.LinkedIn) return null; // Show these in footer only or social block

                                return (
                                    <div key={idx} className="flex items-center gap-3 text-dark-200">
                                        <Icon className="h-5 w-5 text-primary-400" />
                                        {item.href ? (
                                            <a href={item.href} className="hover:text-white hover:underline transition-all">
                                                {item.text}
                                            </a>
                                        ) : (
                                            <span>{item.text}</span>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <a
                            href={`mailto:${contact.items.find(i => i.type === ContactType.Email)?.text}`}
                            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-dark-950 transition-all hover:bg-dark-100 hover:scale-105 shadow-xl shadow-white/10"
                        >
                            Say Hello
                        </a>
                    </div>
                </div>
            </Card>
        </Section>
    );
};

export default memo(Contact);
