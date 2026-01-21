
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

interface CardProps {
    className?: string;
    hoverEffect?: boolean;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, className, hoverEffect = true }) => {
    return (
        <div className={classNames(
            'glass-card rounded-2xl p-6 transition-all duration-300',
            { 'hover:scale-[1.02] hover:bg-dark-900/80 hover:border-primary-500/30': hoverEffect },
            className
        )}>
            {children}
        </div>
    )
}

export default Card;
