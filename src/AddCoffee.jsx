import { json, Link } from 'react-router-dom';
import bgImage from './assets/images/more/11.png'
import { FaArrowLeft } from 'react-icons/fa';
import { data } from 'autoprefixer';
const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const nameCoffee = form.nameCoffee.value;
        const available = form.available.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const categoryType = form.categoryType.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const newCoffee = { nameCoffee, available, supplier, taste, categoryType, details, photoUrl }
        console.log(JSON.stringify(newCoffee)); 

        fetch('http://localhost:9001/coffee', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId > 0){
                    form.reset();
                }
            })
    }
    return (
        <div className="bg-[url('./assets/images/more/11.png')] bg-cover">
            <div className='mx-64'>
                <Link className='font-rancho text-sm flex my-6' to="/"> <FaArrowLeft className='mr-2'></FaArrowLeft> Back to Home</Link>
                {/* <form onSubmit={handleAddCoffee}> */}
                <div className='bg-[#F4F3F0] my-6 pb-6'>
                    <h1 className='font-rancho text-4xl  py-5 text-[#331A15] text-center'>Add New Coffee</h1>
                    <p className='text-xs mx-24 pb-4'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form className='px-10' onSubmit={handleAddCoffee}>
                        <div className='flex my-2 space-x-4'>
                            <div className='w-1/2'>
                                <label className='float-left ml-5 mb-2'>Name</label><br />
                                <input type='text' className='input input-bordered w-full max-w-xs' name="nameCoffee" defaultValue='' placeholder='Enter Coffee Name' />
                            </div>
                            <div className='w-1/2 '>
                                <label className='float-left ml-5 mb-2'>Available Quantity</label><br />
                                <input type='text' className='input input-bordered w-full max-w-xs' name="available" defaultValue='' placeholder='Enter Available Quantity' />
                            </div>
                        </div>
                        <div className='flex my-2 space-x-4'>
                            <div className='w-1/2'>
                                <label className='float-left ml-5 mb-2'>Supplier</label><br />
                                <input type='text' className='input input-bordered w-full max-w-xs' name="supplier" defaultValue='' placeholder='Enter Supplier' />
                            </div>
                            <div className='w-1/2'>
                                <label className='float-left ml-5 mb-2'>Taste</label><br />
                                <input type='text' className='input input-bordered w-full max-w-xs' name="taste" defaultValue='' placeholder='Enter Taste' />
                            </div>
                        </div>
                        <div className='flex my-2 space-x-4'>
                            <div className='w-1/2'>
                                <label className='float-left ml-5 mb-2'>Category</label><br />
                                <input type='text' className='input input-bordered w-full max-w-xs' name="categoryType" defaultValue='' placeholder='Enter Category' />
                            </div>
                            <div className='w-1/2'>
                                <label className='float-left ml-5 mb-2'>Details</label><br />
                                <input type='text' className='input input-bordered w-full max-w-xs' name="details" defaultValue='' placeholder='Enter Details' />
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className=''>
                                <label className='float-left ml-5 mb-2'>Photo</label><br />
                                <input type='text' className='input input-bordered w-full' name="photoUrl" defaultValue='' placeholder='Enter Coffee link' />
                            </div>

                        </div>
                        <div className='my-4'>
                            <div>
                                <input type='submit' className="hover:bg-amber-700 btn w-full bg-[#D2B48C] border-[#331A15] font-rancho text-[#331A15] text-base" value="Add Coffee" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;