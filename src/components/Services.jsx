import React from 'react'
import { services } from '../constants';
import styles, { layout } from '../styles';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-lg  ${index !== services.length - 1 ?
      "mb-6" : "mb-0"} service-card`}>
    <div className={`w-[64px] h-[64px] rounded-full 
    ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-
      [50%] h-[50%] object-contain"/>
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h3 className="font-poppins font-semibold
      text-white text-[18px] leading-[23px] mb-1">
        {title}
        </h3>
      <p className="font-poppins font-normal
      text-dimWhite text-[15px] leading-[24px] mb-1">
        {content}
        </p>
    </div>
  </div>
)
const Services = () => (
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>The bigger picture for the business in
        the form of well-defined digital architecture
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>IITS is the top growing software development company in the India that designs and develops
        custom software applications that drive revenue and delivers flawless user experiences and
        functionality for mobile apps , web applications and custom software development projects.
        We are a end to end IT solutions company that offers the following various IT services</p>
      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg}
    flex-col`}>
      {services.map((service, index) => (
        <FeatureCard key={service.id} {...
          service} index={index} />
      ))}

    </div>
  </section>
)

export default Services;