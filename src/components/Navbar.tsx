import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CustomLink from './CustomLink';

const logo = 'https://res.cloudinary.com/ds41xxspf/image/upload/v1706657198/Cell-Solutions/5_nzq6jm.png';

const Navbar = () => {

    return (
        <header
            className='w-full h-[100px] px-8 sm:px-16 md:px-24 xl:px-32 2xl:px-56 font-medium flex items-center justify-between sticky top-0 z-50 bg-black select-none text-xl text-yellowLight text-center'
        >
            <div className='w-4/6 h-[70%] xs:w-3/6 xs:h-[80%] sm:w-2/5 sm:h-[80%] lg:w-2/6 lg:h-[90%] xl:w-1/5'>
                <Link
                    href='/'
                    className='flex items-center justify-center w-full h-full object-cover relative'
                >
                    <Image
                        src={logo}
                        alt='Logo Cell Solutions'
                        fill
                        className='w-full h-full object-contain'
                        priority draggable={false}
                    />
                </Link>
            </div>

            <nav className='hidden justify-between items-center sm:flex gap-6 xl:gap-8'>
                <CustomLink href='#inicio' title='Inicio'/>
                <CustomLink href='#servicios' title='Servicios'/>
                <CustomLink href='#nosotros' title='Sobre Nosotros'/>
                <CustomLink href='#contactanos' title='Contáctanos'/>
            </nav>

        </header>
    )
}

export default Navbar;