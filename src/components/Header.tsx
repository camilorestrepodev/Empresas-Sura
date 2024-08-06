
export const Header = () => {

  const logo = "https://image.comunicaciones.sura.com/lib/fe3911727564047d771277/m/1/3c6d67af-ca66-463e-8b41-0975018cc879.png"
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
