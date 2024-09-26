import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const coffee = useLoaderData();

    return (
        <div className="bg-[url('./assets/images/more/11.png')] bg-cover">
            <div className='mx-44'>
                <Link className='font-rancho text-sm flex my-6' to="/"> <FaArrowLeft className='mr-2'></FaArrowLeft> Back to Home</Link>

                <div className='bg-[#F4F3F0] my-6 py-16 flex'>
                    <div>
                        <figure>
                            <img src={coffee.photoUrl} className='h-[455] w-80 ml-28' />
                        </figure>
                    </div>
                    <div className='py-28 space-y-1'>
                        <h2 className='font-rancho text-3xl mb-3'>{coffee.nameCoffee}</h2>
                       <div className='flex text-xs'> <label className='font-bold mr-4'>Name :</label><p>{coffee.supplier}</p> </div>
                       <div className='flex text-xs'> <label className='font-bold mr-4'>Supplier :</label><p>{coffee.taste}</p> </div>
                       <div className='flex text-xs'> <label className='font-bold mr-4'>Category :</label><p>{coffee.categoryType}</p> </div>
                       <div className='flex text-xs'> <label className='font-bold mr-4'>Details :</label><p>{coffee.details}</p> </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;