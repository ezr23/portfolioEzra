import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row 
        lg:items-center lg:gab-x-20 lg:gap-y-0 h-screen'>
          {/*img*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[600px]
            mix-blend-lighten bg-top'>
          </motion.div>
          {/*text*/}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2'>
              About me
            </h2>
            <h3 className='h3 mb-4'>
              I'm a developer and tattoo artist who is passionate about continuous learning.
            </h3>
            <p className='mb-6' >
              I always seek new opportunities to improve my skills and knowledge in both fields,
              and enjoy exploring and discovering new techniques and tools. My growth mindset
              allows me to stay up-to-date and grow in my career and art.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div >
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={4} duration={8} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div >
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={50} duration={5} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Projects <br />
                  tattoos
                </div>
              </div>
              <div >
                <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {inView ? <CountUp start={0} end={100} duration={5} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px] '>
                  Available<br />
                  desing
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>
                Work whith me
              </button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
