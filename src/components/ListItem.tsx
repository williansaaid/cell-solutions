import React from 'react'

interface Props {
    text: string;
    className?: string;
    showDot?: boolean;
}

const ListItem = ({
    text,
    className,
    showDot=true,
}: Props) => {
    return (
        <div
            className={`flex justify-start items-start w-full md:w-5/12 px-8 sm:px-10 md:px-10 py-2 gap-2 ${className}`}
        >
            { showDot && '•' }
            <p>
                {text}
            </p>
        </div>
    )
}

export default ListItem;