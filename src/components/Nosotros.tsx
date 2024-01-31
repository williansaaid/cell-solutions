import React from "react";
import ListItem from "./ListItem";

export default function Nosotros() {
    return (
    <div className="min-h-[calc(100vh-100px)] max-w-screen flex flex-col md:flex-row justify-center items-center py-8 md:px-16 lg:px-36 xl:px-[200px] text-center overflow-hidden text-lg sm:text-xl gap-5 sm:gap-8 select-none bg-gradientThird text-dark">
        <div className="flex flex-col justify-center items-center text-center overflow-hidden gap-5 p-6">
            <h4
                className="text-4xl sm:text-5xl sm:pt-12 font-bold md:pb-8 text-center"
            >
                Sobre Nosotros
            </h4>
            <p
                className="text-lg sm:text-xl text-center pb-8 xl:pb-12 w-full sm:w-5/6"
            >
                Contamos con un equipo altamente calificado y apasionado por la tecnología. Cada miembro de Cell Solutions está comprometido a brindar un servicio excepcional y a mantenerse actualizado con las últimas tendencias y avances tecnológicos.

            </p>
            <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-8 pb-8 xl:pb-12">
                <div>
                    <div
                        className='flex flex-col justify-center items-center w-full px-2 sm:px-10 md:px-10 py-2 gap-2'
                    >
                        <p className="font-bold uppercase">
                            Misión
                        </p>
                        <p>
                            Brindar servicios técnicos de calidad, centrados en el cliente, para garantizar que cada usuario obtenga el máximo rendimiento de su dispositivo móvil.
                        </p>
                    </div>
                    <span className="flex w-full h-0.5 text-black bg-dark/50 rounded-full my-4"/>
                    <div
                        className='flex flex-col justify-center items-center w-full px-2 sm:px-10 md:px-10 py-2 gap-2'
                    >
                        <p className="font-bold uppercase">
                            Visión
                        </p>
                        <p>
                            Ser líderes reconocidos en el sector de servicios técnicos de celulares, destacando por nuestra excelencia, confiabilidad y compromiso con la satisfacción del cliente.

                        </p>
                    </div>
                </div>
                <img
                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1706657206/Cell-Solutions/2_j9hjjh.jpg"
                    alt="Tecnico arreglando celular, vista superior"
                    className="rounded-xl md:w-1/2 md:max-h-[400px] object-cover"
                    draggable="false"
                />
            </div>
            <h5
                className="text-xl font-bold uppercase text-center"
            >
                Valores
            </h5>
            <span className="flex w-2/3 h-0.5 text-black bg-dark/50 rounded-full my-2"/>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <ListItem
                    text="Compromiso: Nos comprometemos a proporcionar servicios confiables y eficientes."
                    showDot={false}
                    className="bg-dark/15 rounded-xl py-4 border-2 border-solid border-dark/25"
                />
                <ListItem
                    text="Calidad: Buscamos la excelencia en cada reparación y servicio que ofrecemos."
                    showDot={false}
                    className="bg-dark/10 rounded-xl py-4 border-2 border-solid border-dark/15"
                />
                <ListItem
                    text="Transparencia: Operamos con transparencia y honestidad en todas nuestras interacciones."
                    showDot={false}
                    className="bg-dark/5 rounded-xl py-4 border-2 border-solid border-dark/5"
                />
            </div>
        </div>
    </div>
    );
}