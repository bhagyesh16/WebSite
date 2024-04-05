import styles from "../styles";
import {
  Container,softicon,} from "../assets/index";
import Getstared from './getstarted';

const Home = () => (
  <section id="home" className={`flex 
    md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row 
      items-center py-[6px] px-4
      bg-discount-gradient rounded-[10px] mb-2">
        <img src={softicon} alt="IT Solution"
          className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">INTEGRATED IT SOLUTION</span>
          <span className="text-white"></span>
        </p>
      </div>

      <div className="sm:flex flex-row
          justify-between items-center w-full">
        <h1 className="flex-1 font-poppins
          font-semibold text-[30px] sm:text-[38px] text-
          [44px] text-white sm:leading-[100px]
          leading-[75px]">
          Let's Find out what <br className="sm:block
          hidden" /> {" "}
          <span className="text-gradient">Great Work
          </span> {" "}
         </h1>

        <div className="ss:flex hidden md:mr-4
          mr-0">
          <Getstared />
        </div>

      </div>

      <h1 className="font-poppins
          font-semibold text-[30px] sm:text-[38px] text-
          [44px] text-white sm:leading-[100px]
          leading-[75px]">
          can do to your business with <br className="sm:block
          hidden" /> {" "}User-friendly &nbsp;
          <span className="text-gradient">IT</span>&nbsp;Solutions
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Web, Mobile app & Software Development Services
      </p>
      <br className="sm:block
       hidden" /> {" "}
      <h1 className="font-poppins
      font-semibold text-[12px] sm:text-[20px] text-
      [52px] text-white sm:leading-[100px]
      leading-[75px] w-full">
        PLANNING / STRATEGY / CREATIVITY / LAUNCHING
      </h1>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter}
    md:my-0 my-10 relative`}>
      <img src={Container} alt="robot " className="
      w-[100%] h-[100%] relative z-[5]"/>

      <div className="absolute z-[0] w-[40%] 
      h-[35%] top-0 pink__gradient" />

      <div className="absolute z-[1] w-[80%] 
      h-[80%] rounded-full bottom-40 white__gradient" />

      <div className="absolute z-[0] w-[50%] 
      h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <Getstared/>
    </div>
  </section>

)

export default Home;