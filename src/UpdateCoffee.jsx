import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { json, Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const existCoffee = useLoaderData();
    const [coffee, setCoffee] = useState(existCoffee);
    const handleUpdateCoffee = (event) =>{
        event.preventDefault();
        const form = event.target;
        const nameCoffee = form.nameCoffee.value;
        const available = form.available.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const categoryType = form.categoryType.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        console.log("photoUrl ::" + photoUrl)
        const updatedCoffee = { nameCoffee, available, supplier, taste, categoryType, details, photoUrl }

        fetch(`http://localhost:9001/updateCoffee/${coffee._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data =>  {
                console.log(data);
                if(data.modifiedCount > 0){
                    setCoffee(updatedCoffee)
                    form.reset();
                }
            })

    }
    return (
        <div className="bg-[url('./assets/images/more/11.png')]">
        <div className='mx-64'>
            <Link className='font-rancho text-sm flex my-6' to="/"> <FaArrowLeft className='mr-2'></FaArrowLeft> Back to Home</Link>
            {/* <form onSubmit={handleAddCoffee}> */}
            <div className='bg-[#F4F3F0] my-6 pb-6'>
                <h1 className='font-rancho text-4xl  py-5 text-[#331A15]'>Update Existing Coffee Details</h1>
                <p className='text-xs mx-24 pb-4'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdateCoffee}>
                    <div className='flex my-2'>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Name</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="nameCoffee" defaultValue={coffee.nameCoffee} placeholder='Enter Coffee Name' />
                        </div>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Available Quantity</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="available" defaultValue={coffee.available} placeholder='Enter Available Quantity' />
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Supplier</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="supplier" defaultValue={coffee.supplier} placeholder='Enter Supplier' />
                        </div>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Taste</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="taste" defaultValue={coffee.taste} placeholder='Enter Taste' />
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Category</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="categoryType" defaultValue={coffee.categoryType} placeholder='Enter Category' />
                        </div>
                        <div className='w-1/2'>
                            <label className='float-left ml-5 mb-2'>Details</label><br />
                            <input type='text' className='input input-bordered w-full max-w-xs' name="details" defaultValue={coffee.details} placeholder='Enter Details' />
                        </div>
                    </div>
                    <div className='my-2'>
                        <div className='mx-4'>
                            <label className='float-left ml-5 mb-2'>Photo</label><br />
                            <input type='text' className='input input-bordered w-full' name="photoUrl" defaultValue={coffee.photoUrl} placeholder='Enter Coffee link' />
                        </div>

                    </div>
                    <div className='my-4'>
                        <div className='mx-4'>
                            <input type='submit' className="hover:bg-amber-700 btn w-full bg-[#D2B48C] border-[#331A15] font-rancho text-[#331A15] text-base" value="Update Coffee" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default UpdateCoffee;