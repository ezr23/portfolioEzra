import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col'>
            {/* text */}
            <div>
              <h2 className='h2 mb-2 leading-tight text-accent '>
                Black work <br />
                tattoo.
              </h2>
              <p className='max-w-sm mb-4'>
                Here you can see some tattoo projects, but actually when you click you will open a few files on GitHub, this is just for the test.
              </p>

              <a href="https://github.com/ezr23" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-sm mb-2'>
                See my work
              </button></a>


            </div>
            {/* image */}
            <div className='group relative overflow-hidden flex mix-blend-lighten justify-center items-center'>
              {/* over lay */}
              <div className='group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <a href="https://github.com/ezr23/portfolioEzra" target="_blank" rel="noopener noreferrer">
                <span className='text-gradient'>Black Work</span></a>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Chrysanthemum Tattoo</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* image */}
            <div className='group relative overflow-hidden flex mix-blend-lighten justify-center items-center'>
              {/* over lay */}
              <div className='group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <a href="https://github.com/ezr23/portfolioEzra" target="_blank" rel="noopener noreferrer">
                  <button className='text-gradient'>Dot Work</button>
                </a>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Full Sleve Dotwork Tattoo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
