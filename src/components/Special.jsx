import React from "react";
import special1 from "../assets/especiales/plato1.jpg";
import special2 from "../assets/especiales/plato2.jpg";
import special3 from "../assets/especiales/plato3.jpg";
import special4 from "../assets/especiales/plato4.jpg";

const spcials = [
  {
    title: "Especial del dia 1",
    price: 14.5,
    img: special1,
  },
  {
    title: "Especial del dia 2",
    price: 18.5,
    img: special2,
  },
  {
    title: "Especial del dia 3",
    price: 13.2,
    img: special3,
  },
  {
    title: "Especial del dia 4",
    price: 25.9,
    img: special4,
  },
];

export const Special = () => {
  return (
    <div className="py-8 px-10">
      <div className="divider lg:hidden lg:m-0"></div>

      <p className="text-4xl pb-8">Especiales por dia</p>

      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4  ">
        {spcials.map(({ title, price, img }, key) => (
          <div className="border-4 border-red-500 p-3">
            <div className="flex flex-col">
              <img
                src={img}
                alt=""
                className="object-cover w-[100%] h-[40vh]"
              />
              <p className="py-4 text-2xl">{title}</p>
              <p className="text-3xl text-red-500 font-semibold">$ {price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
