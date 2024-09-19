import React from "react";

export default function Members() {
  return (
    <>
      <div className="h-fit w-[100%] flex flex-col items-center  md:flex-row md:justify-evenly md:flex-wrap">
        {/* 1 */}
        <div
          className="group relative h-[12rem] w-[12rem] my-10 mx-10 rounded-lg"
          role="img"
        >
          <div className="absolute inset-0 bg-[url('./public/img/2.png')] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-[0.95]" />
          <div className="relative h-full w-full flex items-end justify-center">
            <h1 className="mb-[-3.5px] text-white text-xl font-bold absolute bottom-[-1.5vh] hover:text-blue-300 duration-100 hover:tracking-widest">
              PRANJIT
            </h1>
          </div>
        </div>
        {/* 2 */}
        <div
          className="group relative h-[12rem] w-[12rem] my-10 mx-10 rounded-lg "
          role="img"
        >
          <div className="absolute inset-0 bg-[url('./public/img/4.png')] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-[0.95]" />
          <div className="relative h-full w-full flex items-end justify-center">
            <h1 className="mb-[-3.5px] text-white text-xl font-bold absolute bottom-[-1.5vh] hover:text-blue-300 duration-100 hover:tracking-widest">
              EKTA
            </h1>
          </div>
        </div>
        {/* 3 */}
        <div
          className="group relative h-[12rem] w-[12rem] my-10 mx-10 rounded-lg "
          role="img"
        >
          <div className="absolute inset-0 bg-[url('./public/img/1.png')] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-[0.95]" />
          <div className="relative h-full w-full flex items-end justify-center">
            <h1 className="mb-[-3.5px] text-white text-xl font-bold absolute bottom-[-1.5vh] hover:text-blue-300 duration-100 hover:tracking-widest ">
              RANJIT
            </h1>
          </div>
        </div>
        {/* 4 */}
        <div
          className="group relative h-[12rem] w-[12rem] my-10 mx-10 rounded-lg "
          role="img"
        >
          <div className="absolute inset-0 bg-[url('./public/img/5.png')] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-[0.95]" />
          <div className="relative h-full w-full flex items-end justify-center">
            <h1 className="mb-[-3.5px] text-white text-xl font-bold absolute bottom-[-1.5vh] hover:text-blue-300 duration-100 hover:tracking-widest ">
              BARAKHA
            </h1>
          </div>
        </div>
        {/* 5 */}
        <div
          className="group relative h-[12rem] w-[12rem] my-10 mx-10 rounded-lg "
          role="img"
        >
          <div className="absolute inset-0 bg-[url('./public/img/3.png')] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-[0.95]" />
          <div className="relative h-full w-full flex items-end justify-center">
            <h1 className="mb-[-3.5px] text-white text-xl font-bold absolute bottom-[-1.5vh] hover:text-blue-300 duration-100 hover:tracking-widest ">
              BIBEK
            </h1>
          </div>
        </div>
        {/* 6 */}
        <div
          className="group relative h-[12rem] w-[12rem] my-10 mx-10 rounded-lg "
          role="img"
        >
          <div className="absolute inset-0 bg-[url('./public/img/6.png')] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-[0.95]" />
          <div className="relative h-full w-full flex items-end justify-center">
            <h1 className="mb-[-3.5px] text-white text-xl font-bold absolute bottom-[-1.5vh] hover:text-blue-300 duration-100 hover:tracking-widest">
              MANJIT
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
