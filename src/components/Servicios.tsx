import React from "react";
import ListItem from "./ListItem";

export default function Servicios() {
    return (
    <div className="min-h-[calc(100vh-100px)] max-w-screen flex flex-col md:flex-row justify-center items-center py-8 md:px-16 lg:px-36 xl:px-[200px] text-center overflow-hidden text-lg sm:text-xl gap-5 sm:gap-8 select-none bg-gradientSecond sm:bg-tech bg-cover bg-center">
        <div className="flex flex-col justify-center items-center text-center overflow-hidden gap-5 sm:backdrop-blur-sm sm:bg-dark/40 sm:bg-clip-padding p-6 sm:rounded-xl">
            <h4
                className="text-4xl sm:text-5xl sm:pt-12 font-bold md:pb-8 text-center"
            >
                Nuestros Servicios Destacados
            </h4>
            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                <ListItem
                    text="Reparación Rápida: Reparamos tu celular de manera rápida y eficiente, desde problemas de pantalla hasta fallos en el sistema."
                    className="border-2 border-solid border-yellowLight/20 bg-yellowLight/10 rounded-2xl backdrop-blur-2xl"
                />
                <ListItem
                    text="Actualizaciones de Software: Mantén tu dispositivo al día con las últimas actualizaciones de software para un rendimiento óptimo."
                    className="border-2 border-solid border-yellowLight/20 bg-yellowLight/10 rounded-2xl backdrop-blur-2xl"
                />
                <ListItem
                    text="Reemplazo de Baterías: Solucionamos problemas de duración de batería con servicios de reemplazo de baterías originales."
                    className="border-2 border-solid border-yellowLight/20 bg-yellowLight/10 rounded-2xl backdrop-blur-2xl"
                />
                <ListItem
                    text="Desbloqueo y Liberación: Desbloqueamos tu celular y lo liberamos para que puedas utilizarlo con la compañía que elijas."
                    className="border-2 border-solid border-yellowLight/20 bg-yellowLight/10 rounded-2xl backdrop-blur-2xl"
                />
                <ListItem
                    text="Asesoramiento Técnico: Brindamos asesoramiento técnico para maximizar el rendimiento y la seguridad de tu dispositivo."
                    className="border-2 border-solid border-yellowLight/20 bg-yellowLight/10 rounded-2xl backdrop-blur-2xl"
                />
            </div>
        </div>
    </div>
    );
}