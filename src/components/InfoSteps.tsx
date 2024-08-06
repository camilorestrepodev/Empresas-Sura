export default function InfoSteps({texto, subtexto}: any) {
  return (
    <div className="bg-white min-w-screen px-[30px] py-[50px] lg:px-[130px] md:px-[70px]">
      <p className="text-[#3F3F41] text-center text-[18px] leading-[25.2px ] font-[500] sm:text-left">
        {texto}
      </p>
      <p className="text-[#3F3F41] text-center text-[18px] mt-5 font-[500] sm:text-left">
        {subtexto}
      </p>
    </div>
  );
}
