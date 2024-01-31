"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Props {
    href: string;
    title: string;
    underline?: boolean;
    className?: string;
    classNameText?: string;
    onClick?: () => void;
}

const CustomLink = ({href, title, className="", classNameText="", underline=true, onClick}: Props) => {

    return (
        <Link href={href}
            className={`${className} relative group text-center`}
            onClick={onClick}
        >
            <p className={`${classNameText} text-yellowLight`}>
                {title}
            </p>
            {
                underline &&
                <span
                    className={`h-[1px] inline-block bg-green absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500 w-0`}
                >
                    &nbsp;
                </span>
            }
        </Link>
    )
}

export default CustomLink;