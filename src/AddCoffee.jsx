import { Link } from 'react-router-dom';
import bgImage from './assets/images/more/11.png'
import { FaArrowLeft } from 'react-icons/fa';
const AddCoffee = () => {
    return (
        <div className="bg-[url('./assets/images/more/11.png')]">
            <div className='mx-64'>
                <Link className='font-rancho text-sm flex my-6' to="/"> <FaArrowLeft className='mr-2'></FaArrowLeft> Back to Home</Link>
                <div className='bg-[#F4F3F0] my-6 pb-6'>
                    <h1 className='font-rancho text-4xl  py-5 text-[#331A15]'>Add New Coffee</h1>
                    <p className='text-xs mx-24 pb-4'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <div className='flex my-2'>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Name</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="name" defaultValue='' placeholder='Enter Coffee Name' />
                        </div>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Available Quantity</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="name" defaultValue='' placeholder='Enter Available Quantity' />
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Supplier</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="name" defaultValue='' placeholder='Enter Supplier' />
                        </div>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Taste</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="name" defaultValue='' placeholder='Enter Taste' />
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Category</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="name" defaultValue='' placeholder='Enter Category' />
                        </div>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Details</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="name" defaultValue='' placeholder='Enter Details' />
                        </div>
                    </div>
                    <div className='my-2'>
                        <div className='mx-4'>
                            <label className='float-left ml-5 mb-2'>Photo</label><br />
                            <input type='text' className='input input-bordered w-full' name="name" defaultValue='' placeholder='Enter Coffee Name' />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;