
import { Transition, TransitionChild } from '@headlessui/react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { FC, Fragment, memo, useCallback, useMemo, useState } from 'react';

import { SectionId } from '../../../data/data';
import { useEffect } from 'react';

export const headerLinks = [
    { label: 'Home', href: `#${SectionId.Hero}` },
    { label: 'About', href: `#${SectionId.About}` },
    { label: 'Skills', href: `#${SectionId.Skills}` },
    { label: 'Experience', href: `#${SectionId.Resume}` },
    // { label: 'Projects', href: `#${SectionId.Portfolio}` },
    { label: 'Contact', href: `#${SectionId.Contact}` },
];

const Header: FC = () => {
    const [currentSection, setCurrentSection] = useState<string>(SectionId.Hero);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Header State
    const [isAtTop, setIsAtTop] = useState(true);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll Handler
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            // Check if at top (e.g., hero section)
            setIsAtTop(currentY < 50);

            // Hide/Show Logic
            if (currentY > lastScrollY && currentY > 100) {
                // Scrolling Down -> Hide
                setIsHidden(true);
            } else {
                // Scrolling Up -> Show
                setIsHidden(false);
            }

            setLastScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection('#' + entry.target.id);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '-80px 0px 0px 0px' }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    const navLinks = useMemo(() => headerLinks.map((link: { label: string; href: string }) => (
        <a
            className={classNames(
                'text-sm font-bold transition-all duration-300 hover:text-primary-400',
                currentSection === link.href ? 'text-primary-400' : 'text-dark-200'
            )}
            href={link.href}
            key={link.label}
        >
            {link.label}
        </a>
    )), [currentSection]);

    const mobileNavLinks = useMemo(() => headerLinks.map((link: { label: string; href: string }) => (
        <a
            className={classNames(
                'block py-3 text-base font-medium transition-colors hover:text-primary-400 border-b border-dark-800/50',
                currentSection === link.href ? 'text-primary-400' : 'text-dark-300'
            )}
            href={link.href}
            key={link.label}
            onClick={() => setMobileMenuOpen(false)}
        >
            {link.label}
        </a>
    )), [currentSection]);

    return (
        <>
            {/* Desktop / Sticky Header */}
            <header
                className={classNames(
                    'fixed top-0 z-50 w-full p-4 md:p-6 transition-all duration-500 transform',
                    {
                        '-translate-y-full': isHidden,
                        'translate-y-0': !isHidden,
                    }
                )}
            >
                <nav
                    className={classNames(
                        'mx-auto flex w-full max-w-screen-xl items-center justify-between rounded-2xl px-6 py-4 transition-all duration-500',
                        {
                            // At Top: Transparent, no border, no shadow
                            'bg-transparent border-transparent shadow-none': isAtTop,
                            // Scrolled: Glassmorphic, border, shadow
                            'bg-dark-950/80 backdrop-blur-md border border-dark-800/50 shadow-lg shadow-black/20': !isAtTop
                        }
                    )}
                >
                    {/* Logo/Name */}
                    <a href={`#${SectionId.Hero}`} className="text-xl font-bold tracking-tight text-white group">
                        r3garciaz<span className="text-primary-500 group-hover:text-primary-400 transition-colors">.dev</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden gap-8 md:flex">
                        {navLinks}
                    </div>

                    {/* Action Button (Resume) */}
                    <div className="hidden md:block">
                        <a
                            href="https://pub-69491211ff1b4b7a852b79efc883f329.r2.dev/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classNames(
                                "rounded-lg px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-primary-600/20",
                                isAtTop ? "bg-white/10 hover:bg-white/20 backdrop-blur-sm" : "bg-primary-600 hover:bg-primary-500"
                            )}
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="rounded-md p-2 text-dark-300 hover:bg-dark-800 md:hidden"
                        onClick={toggleMobileMenu}
                    >
                        <Bars3BottomRightIcon className="h-6 w-6" />
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <Transition show={mobileMenuOpen} as={Fragment}>

                <div className="relative z-50">
                    {/* Backdrop */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={toggleMobileMenu} />
                    </TransitionChild>

                    {/* Slide-over panel */}
                    <div className="fixed inset-y-0 right-0 z-50 flex w-3/4 max-w-sm">
                        <TransitionChild
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative flex h-full w-full flex-col bg-dark-900 shadow-xl border-l border-dark-800/50 p-6">
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="text-lg font-bold text-white">Navigation</span>
                                    <button onClick={toggleMobileMenu} className="text-dark-400 hover:text-white">
                                        X
                                    </button>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {mobileNavLinks}
                                </div>
                            </div>
                        </TransitionChild>
                    </div>
                </div>
            </Transition>
        </>
    );
};

export default memo(Header);
