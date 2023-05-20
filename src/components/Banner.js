import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import { Link } from 'react-scroll';


const Banner = () => {
  return (

    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text*/}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[55px] font-bold leanding-[0.18] lg:text-[100px]'>
              EZRA<span > RAMÍREZ</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'> I'm a </span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Tattoo artist',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className=' max-w-lg mx-auto lg:mx-0'>
              I want to leave a positive impact as a developer, creating innovative solutions that make people's lives easier.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

              <Link to='contact' className='btn btn-lg flex justify-center items-center'
                activeClass='active'
                smooth={true}
                spy={true}>
                Contact me
              </Link>

              <a href='https://github.com/ezr23' className='text-gradient btn-link'> My Portfolio</a>
            </motion.div>
            {/*socials*/}
            <motion.div
              variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/ezr23'>
                <FaGithub />
              </a>
              <a href='https://instagram.com/la_madriguera_tattoo?igshid=OGQ5ZDc2ODk2ZA=='>
                <FaInstagram />
              </a>
              <a href='https://www.linkedin.com/in/ezra-ram%C3%ADrez-122341273/'>
                <FaLinkedin />
              </a>
            </motion.div>

          </div>
          {/*image*/}
          <motion.div
            variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'}

            className='hidden lg:flex flex-1 max-w-[320px] max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
