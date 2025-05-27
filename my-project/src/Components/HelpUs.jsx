import React from 'react';

const HelpUs = () => {
    return (
        <div className=' bg-black text-white py-10'>
            <div className='text-center mb-3'>
                <h1 className='text-4xl'>HOW CAN YOU HELP US?</h1>
                <p className='w-4/6 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet interdum erat, a pulvinar nibh sodales ac. </p>
            </div>
            <div className='md:flex justify-center items-center w-4/6 mx-auto mt-10 gap-3'>
                <div className='space-y-3'>
                    <h1 className='text-3xl uppercase'>Donator</h1>
                    <p>Becoming a donor is one of the most impactful ways to support our mission. Your generous financial contributions directly help us provide essential resources such as food, shelter, education, and medical care to those who need them most. Every donation, big or small, plays a vital role in changing lives and bringing hope to underserved communities. With your support, we can expand our outreach, respond quickly to emergencies, and continue running our programs that aim to break the cycle of poverty and injustice. As a donor, you become part of a compassionate network of individuals committed to making a difference. We ensure full transparency in how funds are used, and we regularly share updates so you can see the real-world impact of your giving. Join us in transforming lives—your donation can be the spark of hope someone has been waiting for.</p>
                    <button className=' border-2 border-white py-2 px-2'>Learn more</button>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-3xl uppercase'>Funrising</h1>
                    <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                    <button className=' border-2 border-white py-2 px-2'>Learn more</button>
                </div>
                <div className='space-y-3 '>
                    <h1 className='text-2xl uppercase'>Volunteer</h1>
                    <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                    <button className=' border-2 border-white py-2 px-2'>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default HelpUs;