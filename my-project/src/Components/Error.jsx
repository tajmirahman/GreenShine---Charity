
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen gap-4'>
            <h1 className='text-rose-500 text-2xl'>Oops! Page is not found</h1>
            <Link to={'/'} className='btn bg-black text-white'>Back To Home Page</Link>
        </div>
    );
};

export default Error;