"use client"
import React from 'react';

interface Props {
    href: string;
    title: string;
    underline?: boolean;
    className?: string;
    classNameText?: string;
}

const CustomLink = ({ href, title, className = "", classNameText = "", underline = true }: Props) => {

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetTop = targetElement.offsetTop - 100;

            window.scrollTo({
                top: targetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <a
            href={href}
            className={`${className} relative group text-center`}
            onClick={scrollToSection}
        >
        <p className={`${classNameText} text-yellowLight`}>{title}</p>
        {underline && (
            <span
            className={`h-[1px] inline-block bg-green absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500 w-0`}
            >
                &nbsp;
            </span>
        )}
        </a>
    );
};

export default CustomLink;
