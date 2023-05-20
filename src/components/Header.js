import React from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/*logo*/}
          <a href='#'>
           <img src={Logo} alt=''/>
          </a>
          {/*bottom*/}

          <Link to='contact' className='btn btn-sm flex justify-center items-center'
                activeClass='active'
                smooth={true}
                spy={true}>
                Work with me
              </Link>

        </div>
      </div>
    </header>
    );
};

export default Header;
