import { NavLink } from "react-router-dom";
import {Constants} from "../Constants.ts";
const Error = () => {
  const errorImage = Constants.ERROR_IMAGE;
  
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center py-40">
        <h1 className="text-3xl font-bold text-[#2D6DF6]">
          {" "}
          Ups!
        </h1>
        <p className="text-xl font-bold  mt-5">No se encontró la pagina solicitada</p>
        <img
          src={errorImage}
          alt=""
          className="w-[300px] mx-auto mt-5"
        />
        <NavLink to="/home/terminos-condiciones">
          <button className="text-white mt-10 h-[50px] w-[100px] md:w-[150px] md:h-[50px] bg-[#2D6DF6] rounded-[28px] hover:bg-[#274585]">
            Ir al inicio
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
