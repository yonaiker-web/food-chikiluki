import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

export const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-around text-white text-xl ">
        <div className="font-[Pacifico] text-5xl py-8 drop-shadow-2xl pl-4 ">
          La Reina de Dios
        </div>
        <div className="flex flex-col py-6 drop-shadow-2xl">
          <p className="flex items-center ">
            <FaPhone className=" mr-3" />
            999-99-888
          </p>
          <p className="flex items-center ">
            <FaLocationDot className="mr-3" />
            La Hoyada, Caracas - Venezuela
          </p>
        </div>
      </div>
      <div className="navbar bg-black absolute">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle "
            >
              <RiMenu2Fill className="size-6" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#000000d9] rounded-box z-[1] mt-3 p-2 shadow "
            >
              <li>
                <a>Inicio</a>
              </li>
              <li>
                <a>Nosotros</a>
              </li>
              <li>
                <a>Galeria</a>
              </li>
              <li>
                <a>Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
