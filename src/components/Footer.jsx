import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="w-full bg-slate-700 py-5 sm:flex sm:flex-col lg:flex-row px-8 lg:gap-10 sm:gap-1 text-white">
      <div className="basis-1/4   ">
        <p className="pb-4 font-bold ">¿Por que visitarnos?</p>
        <p>
          Lorem ipsum dolor sit amte, consectetur adipisicing elit. Rem cum
          culpa, cumque, quaso coluptas assumenda vitae excepturi animi quis
          magni deserunt velit option quidem? rem nobis omnis neque, consequatur
          unde.
        </p>
      </div>

      <div className="divider lg:hidden lg:m-0"></div>

      <div className="basis-1/4">
        <p className="pb-4 font-bold">Contactanos</p>
        <p className="py-2">La Hoyada</p>
        <p className="py-2">888-88888-88</p>
        <p className="py-2">reynadedios@dominio.com</p>
      </div>

      <div className="divider lg:hidden lg:m-0"></div>

      <div className="basis-1/4">
        <p className="pb-4 font-bold">Siguenos</p>
        <p className="py-2 flex items-center	">
          <FaFacebook className="mr-2" />
          facebook
        </p>
        <p className="py-2 flex items-center	">
          <FaInstagram className="mr-2" />
          instagram
        </p>
        <p className="py-2 flex items-center	">
          <IoMdMail className="mr-2" />
          email
        </p>
      </div>

      <div className="divider lg:hidden lg:m-0"></div>

      <div className="basis-1/4 items-center content-center">
        <p>
          2019 Your Restaurant <br /> Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};
