import React from "react";

export default function Inicio() {
    return (
    <div className="min-h-[calc(100vh-100px)] max-w-screen flex flex-col md:flex-row justify-center items-center py-8 px-5 md:px-16 lg:px-36 xl:px-[250px] text-center overflow-hidden text-lg sm:text-xl gap-5 sm:gap-8 select-none bg-gradientFirst">
        <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left md:w-1/2 overflow-hidden gap-5">
            <h4
                className="text-4xl sm:text-5xl sm:pt-12 font-bold md:pb-8"
            >
                Cell Solutions ¡Transformamos problemas en soluciones!
            </h4>
            <div className="mb-8">
                <p className="text-lg sm:text-xl font-light pb-8 xl:pb-12">
                    En Cell Solutions, nos dedicamos apasionadamente a ofrecer soluciones excepcionales para tus necesidades.
                    ¡Estamos aquí para ayudarte a mantener tus dispositivos en óptimas condiciones!
                </p>
                <a
                    href={`https://wa.me/+5930995440312?text=¡Saludos!,%20Me%20interesa%20su%20servicio.`}
                    target="_blank"
                    className="bg-yellowLight py-3 px-8 rounded-xl font-bold text-dark cursor-pointer my-2.5 transition duration-500 ease-in-out hover:bg-yellowLight/80"
                >
                    Quiero Contactarme
                </a>
            </div>
        </div>
        <img
            src="https://res.cloudinary.com/ds41xxspf/image/upload/v1706657204/Cell-Solutions/1_xkqmga.jpg"
            alt="Tecnico arreglando celular, vista superior"
            className="rounded-xl md:w-1/2 md:max-h-[400px] object-cover"
            draggable="false"
        />
    </div>
    );
}
