import { Link } from 'react-router-dom';
import aboutUs from '../../assets/image/about_us.webp'
import Header from '../MainLayout/Header/Header';
import aboutBanner from '../../assets/image/about-image.webp'

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
                    <img  src={aboutBanner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;