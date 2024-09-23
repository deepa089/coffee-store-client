import { data } from 'autoprefixer';
import React from 'react';
import { FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import { FaBasketShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { FaEye } from 'react-icons/fa';

const Coffee = ({ coffee,coffeeList, setCoffeeList }) => {
    const { _id,nameCoffee, details, available, photoUrl } = coffee

    const handleDeleteCoffee = () =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:9001/delete/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        const coffees = coffeeList.filter(map=> map._id != _id);
                        setCoffeeList(coffees);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                    
                })
            }
          });
    }
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
            <div className='ml-4 space-y-4'>
               <div> <Link> <FaEye></FaEye></Link> </div>
               <div><Link to={`/updateCoffee/${_id}`}> <FaPen></FaPen></Link></div>
               <div> <button onClick={handleDeleteCoffee}><FaTrashAlt></FaTrashAlt></button> </div>
            </div>
        </div>
    );
};

export default Coffee;