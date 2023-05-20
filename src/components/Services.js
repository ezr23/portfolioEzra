import React from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const services = [
  {
    name: 'Tattoo artist',
    description: 'I am an experienced tattoo artist with 4 years of expertise in the tattoo industry. I specialize in creating stunning geometric and dotwork designs with exceptional attention to detail and precision. My passion for tattoo art is reflected in every design I create, ensuring that each client leaves with an impressive and long-lasting tattoo.',
    link: 'Learn more',
  },
  {
    name: 'Blackwork tattoo',
    description: 'My main focus is to use blackwork tattoo techniques to create intricate and detailed designs.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & img */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat h-[550px] mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-12'>
            What I Do
          </h2>
          <h3 className='h3 max-w-[300px] mb-20'>
          I'm a developer and tattoo artist who is passionate about continuous learning.
          </h3>
          <a href="https://instagram.com/la_madriguera_tattoo?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
      <button className='btn btn-sm'>
        See my work
      </button>
    </a>
        </motion.div>
        {/* services */}
        <motion.div 
        variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
        className='flex-1'>
          {/* service list */}
          <div>
            {services.map((service, index) => {
              //destructure service
              const {name,description, link} = service;
              return (
                <div className='border-b border-white/20 h-[220px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-8'>{name}</h4>
                  <p className='font-secundary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                  <a href='https://instagram.com/la_madriguera_tattoo?igshid=OGQ5ZDc2ODk2ZA==' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsFillArrowUpRightCircleFill/>
                  </a>
                  <a href='https://instagram.com/la_madriguera_tattoo?igshid=OGQ5ZDc2ODk2ZA==' className='text-gradient text-sm'>
                    {link}
                  </a>
                  </div>
                </div>
              );
            })}
            
          </div>
        </motion.div>
      </div>
    </div>
    </section>
    );
};

export default Services;
