import React from 'react';

const Navber = () => {
    return (
        <div className='bg-black text-white py-20'>
            <div className='flex flex-col justify-center items-center gap-3 p-2'>
                <h1 className="uppercase text-4xl font-bold">
                    We can help{' '}
                    <span className="inline-flex space-x-1">
                        {['s', 'o', 'm', 'e', 'o', 'n', 'e'].map((char, i, arr) => (
                            <span
                                key={i}
                                className="opacity-0 animate-fadeInOutLoop"
                                style={{
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: `${arr.length * 0.4}s`, // make it long enough for full cycle
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </span>
                </h1>

                <p className='md:w-3/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur pariatur voluptas temporibus nesciunt officia nulla autem nisi qui impedit porro?</p>
            </div>
            <div className='flex justify-center items-center gap-4 mt-3'>
                <button className='border border-1 border-white p-2'>DONATE NOW</button>
                <button className='border border-1 border-white p-2'>LEARN NOW</button>
            </div>
        </div>
    );
};

export default Navber;