import { Link } from 'react-router-dom';
import aboutUs from '../../assets/image/about_us.webp'
import Header from '../MainLayout/Header/Header';
import aboutBanner from '../../assets/image/about-image.webp'
import weDoOne from '../../assets/WhatWeWant/we-do-one.webp'
import weDoTwo from '../../assets/WhatWeWant/we-do-two.webp'
import weDoThree from '../../assets/WhatWeWant/we-do-Three.webp'
import Volunteers from '../Volunteers';

const About = () => {



    return (
        <div>
            <Header></Header>

            {/* Banner */}
            <div className="h-[300px] bg-cover bg-center flex flex-col justify-center items-center"
                style={{
                    backgroundImage:
                        `url(${aboutUs})`,
                }}>

                <div >
                    <h1 className='uppercase text-3xl font-bold text-white'>Abouts Us</h1>
                    <p className='text-center'> <Link to={'/'}>Home</Link> / <span className=" font-bold">About Us</span></p>
                </div>
            </div>

            {/* main content */}

            <div className='md:flex justify-center items-center gap-3 md:w-9/12 mx-auto p-2'>
                <div className='flex-1 space-y-3'>
                    <h1 className='text-4xl font-bold text-center uppercase'>About <span className="text-[#00A9A5]">Us</span> </h1>

                    <div class="flex items-center justify-center w-2/6 mx-auto">
                        <div class="flex-grow h-px bg-gray-300"></div>
                        <div class="mx-4 border border-gray-300 p-1 rounded-sm">
                            <div class="w-1 h-1 border border-gray-400"></div>
                        </div>
                        <div class="flex-grow h-px bg-gray-300"></div>
                    </div>

                    <div>
                        <p> we are committed to bringing hope and support to people in need. Our mission is to provide essential resources like food, clean water, education, and medical care to underprivileged communities. We believe that with compassion, transparency, and collective effort, we can help break the cycle of poverty and create lasting change. Every donation helps us reach more lives and build a brighter future. Together with our volunteers, donors, and partners, we work to make the world a kinder, fairer place. Join us and be part of this journey of hope.</p>
                        <button className='btn bg-[#00A9A5] text-white text-xs uppercase mt-3 md:mt-14'>Become a Volunteer</button>
                    </div>
                </div>

                <div className='mt-5 lg:mt-24 flex-1'>
                    <img src={aboutBanner} alt="" />
                </div>
            </div>

            {/* What we do */}
            <div className='mb-3'>
                <div>
                    <div className='flex-1 space-y-3'>
                        <h1 className='text-4xl font-bold text-center uppercase'>What we do </h1>

                        <div class="flex items-center justify-center w-1/6 mx-auto">
                            <div class="flex-grow h-px bg-gray-300"></div>
                            <div class="mx-4 border border-gray-300 p-1 rounded-sm">
                                <div class="w-1 h-1 border border-gray-400"></div>
                            </div>
                            <div class="flex-grow h-px bg-gray-300"></div>
                        </div>
                        <p className='w-3/6 mx-auto text-center'>We create events aiming to pear to the voice for children and gather for support.
                            Please update with our events and confirm you presence.</p>
                    </div>

                    <div className='flex justify-center items-center gap-3 p-2'>

                        <div className="relative w-80 h-60  overflow-hidden shadow-lg">
                            <img
                                src={weDoOne}
                                alt="Donate for Education"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-teal-600 bg-opacity-50 flex items-center justify-center m-4">
                                <h2 className="text-white font-bold text-lg">DONATE FOR EDUCATION</h2>
                            </div>
                        </div>

                        <div className='relative w-80 h-60 overflow-hidden shadow-lg'>

                            <img className='w-full h-full object-cover' src={weDoTwo} alt="" />

                            <div className='absolute inset-0 bg-teal-600 bg-opacity-50  flex items-center justify-center m-4'>
                                <h2 className="text-white font-bold text-lg">DONATE FOR FOOD</h2>
                            </div>
                        </div>

                        <div className='relative w-80 h-60 overflow-hidden shadow-lg'>

                            <img className='w-full h-full object-cover' src={weDoThree} alt="" />

                            <div className='absolute inset-0 bg-teal-600 bg-opacity-50  flex items-center justify-center m-4'>
                                <h2 className="text-white font-bold text-lg">DONATE FOR WATER</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className='flex justify-center items-center gap-6 bg-black text-white h-48 mb-6'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <p className='font-bold'>1200</p>
                    <div class=" w-2/5">
                        <div class="flex-grow h-2 bg-teal-700"></div>

                    </div>
                    <span className='font-bold'>Finish Projects</span>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <p className='font-bold'>1400</p>
                    <div class=" w-2/5">
                        <div class="flex-grow h-2 bg-teal-700"></div>

                    </div>
                    <span className='font-bold'>Creative Materials</span>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <p className='font-bold'>1250</p>
                    <div class=" w-2/5">
                        <div class="flex-grow h-2 bg-teal-700"></div>

                    </div>
                    <span className='font-bold'>Experience Materials</span>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <p className='font-bold'>1700</p>
                    <div class=" w-2/5">
                        <div class="flex-grow h-2 bg-teal-700"></div>

                    </div>
                    <span className='font-bold'>Professinal awards</span>
                </div>




            </div>

            {/* volunteers */}
            <Volunteers></Volunteers>

            {/* WHAT WE THINK ABOUT OUR CHARITY */}

            <div>
                <div>
                    <video src=""></video>
                </div>
                
                <div>
                    <h1>WHAT WE THINK ABOUT OUR CHARITY</h1>
                    <p></p>
                    <div>
                        <h2>WORKING PROGRESS</h2>
                        <div className="flex gap-8 ">

                            <div className="relative flex flex-col items-center">
                                {/* Outer black ring */}
                                <div
                                    className="radial-progress text-black"
                                    style={{
                                        "--value": 100,
                                        "--size": "5rem",
                                        "--thickness": "0.5rem",
                                    }}
                                ></div>

                                {/* Inner teal progress */}
                                <div
                                    className="absolute radial-progress text-teal-600"
                                    style={{
                                        "--value": 73,
                                        "--size": "5rem",
                                        "--thickness": "0.5rem",
                                    }}
                                >
                                    73%
                                </div>

                                <span className="mt-2">Donate scale</span>
                            </div>
                            <div className="relative flex flex-col items-center">
                                {/* Outer black ring */}
                                <div
                                    className="radial-progress text-black"
                                    style={{
                                        "--value": 100,
                                        "--size": "5rem",
                                        "--thickness": "0.5rem",
                                    }}
                                ></div>

                                {/* Inner teal progress */}
                                <div
                                    className="absolute radial-progress text-teal-600"
                                    style={{
                                        "--value": 73,
                                        "--size": "5rem",
                                        "--thickness": "0.5rem",
                                    }}
                                >
                                    64%
                                </div>

                                <span className="mt-2">Comments</span>
                            </div>

                            <div className="relative flex flex-col items-center">
                                {/* Outer black ring */}
                                <div
                                    className="radial-progress text-black"
                                    style={{
                                        "--value": 100,
                                        "--size": "5rem",
                                        "--thickness": "0.5rem",
                                    }}
                                ></div>

                                {/* Inner teal progress */}
                                <div
                                    className="absolute radial-progress text-teal-600"
                                    style={{
                                        "--value": 73,
                                        "--size": "5rem",
                                        "--thickness": "0.5rem",
                                    }}
                                >
                                    55%
                                </div>

                                <span className="mt-2">Posts views</span>
                            </div>


                            <div className="relative flex flex-col items-center">
                                {/* Outer black ring */}
                                <div
                                    className="radial-progress text-black"
                                    style={{
                                        "--value": 100,
                                        "--size": "5rem",
                                        "--thickness": "0.5rem",
                                    }}
                                ></div>

                                {/* Inner teal progress */}
                                <div
                                    className="absolute radial-progress text-teal-600"
                                    style={{
                                        "--value": 73,
                                        "--size": "5rem",
                                        "--thickness": "0.5rem",
                                    }}
                                >
                                    50%
                                </div>

                                <span className="mt-2">Sharing Rating</span>
                            </div>




                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;