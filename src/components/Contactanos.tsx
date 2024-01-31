import React from "react";

export default function Contactanos() {
    return (
    <div className="min-h-[calc(100vh-100px)] max-w-screen flex flex-col md:flex-row justify-center items-center py-8 md:px-16 lg:px-36 xl:px-[200px] text-center overflow-hidden text-lg sm:text-xl gap-5 sm:gap-8 select-none bg-gradientFourth sm:bg-fix bg-cover bg-center">
        <div className="flex flex-col justify-center items-center text-center overflow-hidden gap-5 sm:backdrop-blur-sm sm:bg-dark/40 sm:bg-clip-padding p-6 sm:rounded-xl">
            <h4
                className="text-4xl sm:text-5xl sm:pt-12 font-bold md:pb-8"
            >
                Cell Solutions ¡Tu mejor opción!
            </h4>
            <div className="mb-8">
                <p className="text-lg sm:text-xl font-light pb-8 xl:pb-12">
                    ¡Confía en nosotros para mantener tu celular en óptimas condiciones!
                    Contáctanos ahora y recibe atención personalizada.
                </p>
                <a
                    href={`https://wa.me/+5930995440312?text=¡Saludos!,%20Me%20interesa%20su%20servicio.`}
                    className="bg-yellowLight py-3 px-8 rounded-xl font-bold text-dark cursor-pointer my-2.5 transition duration-500 ease-in-out hover:bg-yellowLight/90 hover:text-green"
                >
                    Contáctanos
                </a>
            </div>
        </div>
    </div>
    );
}