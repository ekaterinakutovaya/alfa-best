import Logo from "assets/icons/Logo";

const HappyPartners = ({title, text}) => {


  return (
    <section className="w-full h-[350px] lg:h-[500px] my-[50px] relative bg-[url('../assets/images/image003.jpg')] lg:bg-fixed bg-top bg-no-repeat bg-cover overflow-x-hidden">
      <div className="w-full h-full backdrop-brightness-50 py-[30px] sm:py-[30px]">
        <div className="container lg:py-[30px] ">
          <div className="w-[70%] h-full">
            <div className="pb-[20px] lg:pb-[60px]">
              <Logo type="light-full" />
            </div>

            <h2 className="lg-[536px] text-[16px] font-bold text-white pb-[17px] sm:text-[18px] lg:text-[34px]">
              {title}
            </h2>

            <div className="w-[150px] lg:w-[386px] h-[2px] bg-white mb-[15px]"></div>

            <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-white max-w-[536px]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyPartners;
