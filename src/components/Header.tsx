import {Constants} from "../Constants.ts";

export const Header = () => {

  const logo = Constants.LOGO_SURA_IMAGE;
  return (
    <>
      <div className="bg-[#2D6DF6] h-[100px] px-[30px] py-[70px] md:px-[70px] lg:px-[130px]">
        <img
          src={logo}
          width="150"
          height="38"
          alt="logo_SURA"
        />
      </div>
      <div className="bg-[#0033A0] flex items-center h-[50px] px-[30px] md:px-[70px] lg:px-[130px]">
        <p className="text-[16px] font-bold text-white sm:text-[20px] md:text-[24px] lg:text-[28px]">
          EMPRESAS
        </p>
      </div>
    </>
  );
};
