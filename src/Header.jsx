import React from 'react';
import Home from './Home';
import logo from './assets/images/more/logo1.png';

const Header = () => {
    return (
        <div>
            <div className="h-32 w-full bg-[url('./assets/images/more/15.jpg')]">
                <div className='flex justify-center'>
                <img className='pt-4 w-16 h-24' src={logo} />
                <h1 className='py-6 text-center text-6xl text-white font-rancho'>Espresso Emporium</h1>
                </div>
            </div>
            {/* <Home></Home> */}
        </div>
    );
};

export default Header;