import React from 'react';
import { FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import { FaBasketShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
// import { FaEye } from 'react-icons/fa';

const Coffee = ({ coffee }) => {
    console.log(coffee)
    const { nameCoffee, details, available, photoUrl } = coffee
    return (
        <div className='flex border bg-[#ECEAE3] py-10 px-5'>
            <div>
                <figure>
                <img src={photoUrl} className='h-32 w-24 mr-5 border' />
                {/* <img src="https://postimg.cc/m1hzPbWM" className='h-64 w-44 mr-5 border' /> */}
                </figure>
            </div>
            <div className='w-80'>
                <div className='flex space-x-2'><label className='font-bold'>Name:</label><p>{nameCoffee}</p> </div>
                <div className='flex'><label className='font-bold'>Details:</label><p>{details}</p> </div>
                <div className='flex'> <label className='font-bold'>Available:</label><p>{available}</p></div>
            </div>
            <div className='ml-4 space-y-2'>
                <Link> <FaEye></FaEye></Link>
                <Link> <FaPen></FaPen></Link>
                <Link> <FaTrashAlt></FaTrashAlt></Link>
            {/* <FaEye></FaEye> */}
                {/* <Link to="/updateCoffee"> View</Link>
                <Link to="/updateCoffee"> Edit</Link>
                <Link to="/updateCoffee"> Delete</Link> */}
            </div>
        </div>
    );
};

export default Coffee;