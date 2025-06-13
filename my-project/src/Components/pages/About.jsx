import { Link } from 'react-router-dom';
import aboutUs from '../../assets/image/about_us.webp'
import Header from '../MainLayout/Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>

            <div className="h-[300px] bg-cover bg-center flex flex-col justify-center items-center"
                style={{
                    backgroundImage:
                        `url(${aboutUs})`,
                }}>

                <div >
                    <Link to={'/'}><h1 className='uppercase text-3xl font-bold text-white'>Abouts Us</h1></Link>
                    <p className='text-center'>Home / <span className=" font-bold">About Us</span></p>
                </div>
            </div>
        </div>
    );
};

export default About;