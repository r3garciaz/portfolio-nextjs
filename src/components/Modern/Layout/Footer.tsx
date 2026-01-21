
import { FC, memo } from 'react';

import { socialLinks } from '../../../data/data';

const Footer: FC = () => {
    return (
        <footer className="w-full bg-dark-950 py-12 border-t border-dark-800/30">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-bold text-white">r3garciaz<span className="text-primary-500">.dev</span></span>
                    <p className="text-sm text-dark-400">© 2026 Reinaldo García. All rights reserved.</p>
                </div>

                <div className="flex gap-4">
                    {socialLinks.map(({ label, Icon, href }) => (
                        <a
                            aria-label={label}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-800 text-dark-400 transition-all hover:bg-primary-600 hover:text-white"
                            href={href}
                            key={label}
                            target="_blank" // Added target blank for external links in footer
                            rel="noreferrer" // Security best practice
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);
