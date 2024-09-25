import React from 'react';
import fLogo from './assets/images/more/logo1.png'
import facebook from './assets/images/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { MdLocationOn, MdMail } from 'react-icons/md';


const Footer = () => {
    return (
        <div className=''>
            <div className="bg-[url('./assets/images/more/10.png')] px-40 pt-10 pb-10 ">
                <img src={fLogo} className='w-16 h-24'></img>
                <div className='grid grid-cols-2 gap-0'>
                    <div className='space-y-4 '>
                        <h1 className='font-rancho text-4xl text-left'>Espresso Emporium</h1>
                        <p className='text-left text-sm'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-2'>
                            <FaFacebook className='text-2xl'></FaFacebook>
                            <FaTwitter className='text-2xl'></FaTwitter>
                            <FaInstagram className='text-2xl'></FaInstagram>
                            <FaLinkedin className='text-2xl'></FaLinkedin>
                        </div>
                        <h1 className='text-left font-rancho text-3xl'>Get in Touch</h1>
                        <div>
                            <div className='flex gap-3'> <FaPhoneAlt></FaPhoneAlt> <p> +88 01533 333 333 </p>  </div>
                            <div className='flex gap-3'> <MdMail></MdMail> <p> info@gmail.com </p>  </div>
                            <div className='flex gap-3'> <MdLocationOn></MdLocationOn> <p> 72, Wall street, King Road, Dhaka </p> </div>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='font-rancho text-4xl text-left'>Connect with Us</h1>
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs items-start" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <textarea
                            placeholder="Message"
                            className="textarea textarea-bordered textarea-md w-full max-w-xs"></textarea>
                        <br />
                        <button className="btn btn-outline btn-primary rounded-lg font-rancho">Send</button>

                    </div>
                </div>

            </div>
            <div className="bg-[url('./assets/images/more/24.jpg')] h-12">
                <h1 className='text-sm text-white py-3 font-rancho'>Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
        </div>
    );
};

export default Footer;