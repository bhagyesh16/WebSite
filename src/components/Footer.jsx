import React from 'react';
import styles from '../styles';
import { logo } from '../assets';
import { socialMedia } from '../constants';

const Footer = () => {
  const handleSocialClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col border-t-[1px] border-t-[#3f3r445]`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="IITS" className="w-[265px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-full`}>
            Established in the year 2001 as an IT company with an intention to concentrate Software, Mobile app and
            Website Development solutions. Discover what you can achieve with India's leading Customized software
            development solution...
          </p>
          <p className={`${styles.paragraph} text-white mt-4 max-w-full`}>
            Address: 832,Belguim Tower, Ring Road,
                    Surat, Gujarat, India.
                    395003.
          </p>
          
          <p className={`${styles.paragraph}  text-white mt-4 max-w-full`}>
            Contact: +91-9328588728
          </p>

          
          <p className={`${styles.paragraph}  text-white mt-4 max-w-full`}>
            Email: info@iits.co.in
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 pb-6 border-b-[1px] border-b-[#3f3r445] border-t-[1px] border-t-[#3f3r445] ">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2024 INTEGRATED IT SOLUTION. All Right Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              onClick={() => handleSocialClick(social.link)}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
  