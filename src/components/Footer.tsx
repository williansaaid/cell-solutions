import React from 'react';
import { SocialIcon } from 'react-social-icons';

const logo = 'https://res.cloudinary.com/ds41xxspf/image/upload/v1706657198/Cell-Solutions/5_nzq6jm.png';

const Footer = () => {
    return (
        <div
            className='bg-black text-yellowLight h-auto w-full flex flex-col justify-center items-center pb-8 px-5 sm:py-24 sm:px-5 md:px-16 lg:px-36 xl:px-[350px] overflow-hidden text-xs sm:text-sm gap-5 sm:gap-3'
        >
            <div
                className='hidden sm:flex justify-between items-center w-full pb-8'
            >
                <div
                    className='flex flex-col gap-8 w-1/3'
                >
                    <div
                        className='flex gap-4 w-full items-center'
                    >
                        <img
                            src={logo}
                            alt='Logo cell solutions'
                            className='h-[100px] w-[80px] object-cover'
                            draggable="false"
                        />
                        <p
                            className='font-bold text-2xl text-green uppercase'
                        >
                            Cell Solutions
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p
                            className='w-full select-none text-white'
                        >
                            ¡Confía en nosotros para mantener tu celular en óptimas condiciones!
                        </p>
                        <p
                            className='w-full select-none text-white'
                        >
                            Quito - Ecuador
                        </p>
                    </div>
                </div>
                <div className='flex flex-col w-1/6 gap-2 text-white'>
                    <a
                        className='cursor-pointer text-green hover:text-white transition duration-300 ease-in-out'
                        href='#inicio'
                    >
                        Inicio
                    </a>
                    <a
                        className='cursor-pointer hover:text-green transition duration-300 ease-in-out'
                        href='#servicios'
                    >
                        Servicios
                    </a>
                    <a
                        className='cursor-pointer hover:text-green transition duration-300 ease-in-out'
                        href='#nosotros'
                    >
                        Sobre Nostros
                    </a>
                    <a
                        className='cursor-pointer hover:text-green transition duration-300 ease-in-out'
                        href='https://wa.me/+5930995440312?text=¡Saludos!,%20Me%20interesa%20su%20servicio.'
                        target='_blank'
                    >
                        Contáctanos
                    </a>
                </div>
            </div>
            <div
                className='sm:hidden flex flex-col justify-center items-center gap-4 pt-8'
            >
                <p>
                    © 2024 Made with &#9825; by <a target='_blank' href='https://www.dosandev.com' className='hover:text-green font-bold duration-300 text-white'>
                        DosanDev
                    </a>
                </p>
                <div
                    className='flex justify-center items-center gap-2'
                >
                    <SocialIcon
                        url='#'
                        target='_blank'
                        network="instagram"
                        fgColor='#E2F779'
                        bgColor='#373C1A'
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon
                        url='#'
                        target='_blank'
                        network="facebook"
                        fgColor='#E2F779'
                        bgColor='#373C1A'
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon
                        url={`https://wa.me/+5930995440312?text=¡Saludos!,%20Me%20interesa%20su%20servicio.`}
                        target='_blank'
                        network="whatsapp"
                        fgColor='#E2F779'
                        bgColor='#373C1A'
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon
                        url="mailto:cellsolutions96@gmail.com"
                        target='_blank'
                        network="email"
                        fgColor='#E2F779'
                        bgColor='#373C1A'
                        style={{height: 35, width: 35}}
                    />
                </div>
            </div>
            <hr className="hidden sm:flex w-full bg-white"/>
            <div
                className='hidden sm:flex flex-row-reverse justify-between items-center w-full'
            >
                <p>
                    © 2024 Made with &#9825; by <a target='_blank' href='https://www.dosandev.com' className='hover:text-green font-bold duration-300 text-white'>
                        DosanDev
                    </a>
                </p>
                <div
                    className='flex justify-center items-center gap-2'
                >
                    <SocialIcon
                        url='#'
                        target='_blank'
                        network="instagram"
                        fgColor='#E2F779'
                        bgColor='#373C1A'
                        style={{height: 40, width: 40}}
                    />
                    <SocialIcon
                        url='#'
                        target='_blank'
                        network="facebook"
                        fgColor='#E2F779'
                        bgColor='#373C1A'
                        style={{height: 40, width: 40}}
                    />
                    <SocialIcon
                        url={`https://wa.me/+5930995440312?text=¡Saludos!,%20Me%20interesa%20su%20servicio.`}
                        target='_blank'
                        network="whatsapp"
                        fgColor='#E2F779'
                        bgColor='#373C1A'
                        style={{height: 40, width: 40}}
                    />
                    <SocialIcon
                        url="mailto:cellsolutions96@gmail.com"
                        target='_blank'
                        network="email"
                        fgColor='#E2F779'
                        bgColor='#373C1A'
                        style={{height: 40, width: 40}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer;