import banner from './assets/images/more/3.png'
import icon1 from './assets/images/icons/1.png'
import icon2 from './assets/images/icons/2.png'
import icon3 from './assets/images/icons/3.png'
import icon4 from './assets/images/icons/4.png'
import cup1 from './assets/images/cups/Rectangle 9.png'
import cup2 from './assets/images/cups/Rectangle 10.png'
import cup3 from './assets/images/cups/Rectangle 11.png'
import cup4 from './assets/images/cups/Rectangle 12.png'
import cup5 from './assets/images/cups/Rectangle 13.png'
import cup6 from './assets/images/cups/Rectangle 14.png'
import cup7 from './assets/images/cups/Rectangle 15.png'
import cup8 from './assets/images/cups/Rectangle 16.png'


import { Link, useLoaderData } from 'react-router-dom'
import { TiCoffee } from 'react-icons/ti'
import './Home.css'
import Coffee from './Coffee'
import { useState } from 'react'


const Home = () => {
    const loadedCoffeeList = useLoaderData();
    const [coffeeList, setCoffeeList] = useState(loadedCoffeeList)
    return (
        <div>
            <div className="h-800 bg-cover bg-center bg-[url('./assets/images/more/3.png')]">
                <div className="h-800 bg-cover bg-center bg-banner-image ">
                    {/* <div className={`h-32 w-full bg-[url('${banner}')]`}> */}
                    <div className='h-56 w-2/5 float-right mr-56 my-72 text-left space-y-4'>
                        <h2 className='font-rancho text-4xl text-white'>Would you like a Cup of Delicious Coffee?</h2>
                        <p className='font-rancho text-base text-gray-300'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='font-rancho bg-orange-300 text-black py-2 px-4 text-2xl'> Learn More</button>
                    </div>


                </div >
            </div>
            <div className='bg-[#ECEAE3] h-64'>
                <div className='grid grid-cols-4 gap-9 px-40 py-10'>
                    <div className='text-left h-48 space-y-2'>
                        <img src={icon1} />
                        <h2 className='font-rancho text-4xl text-[#331A15]'>Awesome Aroma</h2>
                        <p className='text-base font-light'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='text-left h-48 space-y-2'>
                        <img src={icon2} />
                        <h2 className='font-rancho text-4xl text-[#331A15]'>High Quality</h2>
                        <p className='text-base font-light'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='text-left h-48 space-y-2'>
                        <img src={icon3} />
                        <h2 className='font-rancho text-4xl text-[#331A15]'>Pure Grades</h2>
                        <p className='text-base font-light'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='text-left h-48 space-y-2'>
                        <img src={icon4} />
                        <h2 className='font-rancho text-4xl text-[#331A15]'>Proper Roasting</h2>
                        <p className='text-base font-light'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
            <div className="homeBackground">
                <div className='mt-28 space-y-2'>
                    <h3>--- Sip & Savor ---</h3>
                    <h1 className='text-5xl text-[#331A15] font-rancho'>Our Popular Products </h1>
                    <div><Link className='flex justify-center ' to="/addCoffee"><button className='hover:bg-slate-300 flex bg-[#E3B577] px-3 py-2 rounded border-red-950 border-solid border-2 text-gray-100'>Add Coffee <TiCoffee className='mt-1 ml-1 text-[#450a0a]'></TiCoffee> </button></Link></div>
                    <div className='grid grid-cols-2 gap-6 px-40 py-10'>
                        {
                            coffeeList.map(coffee=> <Coffee key={coffee._id} coffee={coffee} coffeeList={coffeeList} setCoffeeList = {setCoffeeList}></Coffee>)
                        }
                    </div>
                </div>
            </div>
            <div className='mb-16'>
                <h6 className='text-xs'>Follow Us Now</h6>
                <h2 className='font-rancho text-4xl'>Follow on Instagram</h2>
                <div className='px-40 py-10 grid grid-cols-4 gap-6'>
                    <img src={cup1} className='h-56 w-52'></img>
                    <img src={cup2} className='h-56 w-52'></img>
                    <img src={cup3} className='h-56 w-52'></img>
                    <img src={cup4} className='h-56 w-52'></img>
                    <img src={cup5} className='h-56 w-52'></img>
                    <img src={cup6} className='h-56 w-52'></img>
                    <img src={cup7} className='h-56 w-52'></img>
                    <img src={cup8} className='h-56 w-52'></img>
                </div>
            </div>            
        </div>
    );
};

export default Home;