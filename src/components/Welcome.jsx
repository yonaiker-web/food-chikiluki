import React from "react";
import food1 from "../assets/food1.jpg";
import { Special } from "./Special";

export const Welcome = () => {
  return (
    <div className="w-full  text-center text-white ">
      <div className="bg-red-500 py-8">
        <p className="font-[Pacifico] text-3xl pb-5">
          -Bienvenido a su restaurante
        </p>
        <p className="lg:px-40 sm: px-10 text-justify">
          Bienvenidos a La Reyna de Dios. Nos complace enormemente recibirlos en
          nuestro hogar gastronómico, donde cada bocado es una experiencia
          única. Nuestro chef y su equipo se han esmerado en crear un menú que
          fusiona los sabores más exquisitos de [región o influencia culinaria],
          utilizando ingredientes frescos y de la más alta calidad. Desde
          nuestros aperitivos más ligeros hasta nuestros platos principales más
          elaborados, cada creación está diseñada para deleitar su paladar y
          transportarlo a nuevos horizontes culinarios. ¿Les gustaría comenzar
          con una copa de nuestro vino de la casa mientras exploran las opciones
          de nuestro menú?"
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center p-10">
        <div className="md:w-[50%] p-4">
          <div className="flex  justify-center">
            <img src={food1} className="w-[400px]" alt="food1" />
          </div>
        </div>
        <div className="md:w-[50%] text-left flex flex-col ">
          <p className="py-4 text-center text-xl">
            Expertise In industrial Solution
          </p>
          <p className="py-4 text-justify">
            Lorem ipsum dolor sit amte, consectetur adipisicing elit. Rem cum
            culpa, cumque, quaso coluptas assumenda vitae excepturi animi quis
            magni deserunt velit option quidem? rem nobis omnis neque,
            consequatur unde.
          </p>
          <button className="btn bg-red-500 text-black rounded-none text-xl">
            Contactanos
          </button>
        </div>
      </div>

      <Special />
    </div>
  );
};
