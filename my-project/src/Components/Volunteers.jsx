import volunterrOne from '../assets/Volunteers/volunteers-one.webp'
import volunterrTwo from '../assets/Volunteers/volunteers-two.webp'
import volunterrThree from '../assets/Volunteers/volunteers-three.webp'
import volunterrFour from '../assets/Volunteers/volunteers-four.webp'

const Volunteers = () => {
    return (
        <div>
            <div className='space-y-3'>
                <h1 className='text-2xl text-center font-semibold uppercase'>Our <span className="text-[#00A9A5]">Volunteers</span> </h1>
                <div class="flex items-center justify-center w-1/6 mx-auto">
                    <div class="flex-grow h-px bg-gray-300"></div>
                    <div class="mx-4 border border-gray-300 p-1 rounded-sm">
                        <div class="w-1 h-1 border border-gray-400"></div>
                    </div>
                    <div class="flex-grow h-px bg-gray-300"></div>
                </div>
                <p className='w-3/6 text-center  mx-auto'>
                    We create events aiming to pear to the voice for children and gather for support.
                    Please update with our events and confirm you presence.
                </p>

            </div>
            <div className='flex flex-row justify-center items-center gap-3 my-6'>
                <div >
                    <div >
                        <img className='w-[200px] h-[300px]' src={volunterrOne} alt="" />

                    </div>
                    <div className='text-center'>
                        <h1>Farnado rotia</h1>
                        <p>Secretery</p>
                    </div>
                </div>

                <div >
                    <div >
                        <img className='w-[200px] h-[300px]' src={volunterrTwo} alt="" />

                    </div>
                    <div className='text-center'>
                        <h1>Serena sanion</h1>
                        <p>Secretery</p>
                    </div>
                </div>

                <div >
                    <div >
                        <img className='w-[200px] h-[300px]' src={volunterrThree} alt="" />

                    </div>
                    <div className='text-center'>
                        <h1>Peterson smith</h1>
                        <p>Secretery</p>
                    </div>
                </div>

                <div >
                    <div >
                        <img className='w-[200px] h-[300px]' src={volunterrFour} alt="" />

                    </div>
                    <div className='text-center'>
                        <h1>Anabari koy</h1>
                        <p>Secretery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteers;