import React from 'react'
import { feedback } from '../constants';
import Feedbackcard from './Feedbackcard';
import styles from '../styles';
const Testinomial = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

    <div className="w-full flex justify-between
      items-center md:flex-row flex-col sm:mb-16
      mb-6 relative z-[1]">
      <h1 className={styles.heading2}>What Clients are <br className="sm:block hidden" />saying about us</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Established in the year 2001 as an IT company with an intention to concentrate Software, Mobile app and Website Development solutions. Discover what you can achieve with India's leading Customized software development solution...
        </p>
      </div>
    </div>
    
    <div className="flex flex-wrap
    sm:justify-start justify-center w-full
    feedback-container relative z-[1]">
    {feedback.map((card)=>(
      <Feedbackcard key={card.id} {...card}/>
    ))}
   </div>
  </section>
   
  )


export default Testinomial;