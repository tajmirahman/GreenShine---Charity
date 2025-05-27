
import { Link, NavLink } from 'react-router-dom';

const HelpUs = () => {


    const fullTextDonator = `Becoming a donor is one of the most impactful ways to support our mission. Your generous financial contributions directly help us provide essential resources such as food, shelter, education, and medical care to those who need them most. Every donation, big or small, plays a vital role in changing lives and bringing hope to underserved communities. With your support, we can expand our outreach, respond quickly to emergencies, and continue running our programs that aim to break the cycle of poverty and injustice. As a donor, you become part of a compassionate network of individuals committed to making a difference. We ensure full transparency in how funds are used, and we regularly share updates so you can see the real-world impact of your giving. Join us in transforming lives—your donation can be the spark of hope someone has been waiting for.`;

    const previewTextDonator = fullTextDonator.split('').slice(0, 50).join('') + '...';


    const fullTextFur = `Fundraising is a powerful way to amplify our cause and bring communities together for a common purpose. Whether you're hosting a charity event, starting an online campaign, or organizing a local drive, your efforts help spread awareness and generate critical support for our initiatives. Every dollar raised allows us to reach more people in need and offer them life-changing support. Fundraising isn't just about money—it’s about mobilizing people, inspiring action, and creating momentum around important social issues. We provide all the tools and guidance you need to launch a successful fundraiser, including promotional materials, planning tips, and digital support. By becoming a fundraiser, you don’t just raise funds—you raise hope. Bring your friends, family, coworkers, or community together to support a cause that matters. Your passion can ignite change and empower others to join our mission`;

    const previewTextFur = fullTextFur.split('').slice(0, 50).join('') + '...';

    const fullTextVol = `Volunteering is at the heart of everything we do. Our volunteers are everyday heroes who give their time, energy, and skills to support our programs and reach people in need. Whether you're helping to distribute food, mentor children, organize events, or provide administrative support, your contribution makes a direct and tangible impact. Volunteering offers a unique opportunity to connect with your community, learn new skills, and be part of something greater than yourself. We welcome volunteers from all walks of life and provide training and guidance to ensure your experience is meaningful and fulfilling. No matter how much time you have to give—an hour, a day, or more—your presence matters. Join our team of passionate changemakers and see firsthand how your efforts can brighten someone’s day and transform lives. Together, we can build a more compassionate and supportive world, one act of kindness at a time`;

    const previewTextVol = fullTextVol.split('').slice(0, 50).join('') + '...';







    return (
        <div className=' bg-black text-white py-10'>
            <div className='text-center mb-3'>
                <h1 className='text-4xl'>HOW CAN YOU HELP US?</h1>
                <p className='w-4/6 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet interdum erat, a pulvinar nibh sodales ac. </p>
            </div>
            <div className='md:flex justify-center items-center w-4/6 mx-auto mt-10 gap-3 '>
                <div className='space-y-3'>
                    <h1 className='text-3xl uppercase'>Donator</h1>
                    <p className='text-white'>{previewTextDonator}</p>
                    <Link to={'/'} ><button className='border-2 border-white py-2 px-2 mt-2'>Learn more</button></Link>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-3xl uppercase'>Funrising</h1>
                    <p className='text-white'>{previewTextFur}</p>
                   <Link to={'/'} ><button className='border-2 border-white py-2 px-2 mt-2'>Learn more</button></Link>
                </div>
                <div className='space-y-3 '>
                    <h1 className='text-2xl uppercase'>Volunteer</h1>
                    <p className='text-white'>{ previewTextVol}</p>
                    <Link to={'/'} ><button className='border-2 border-white py-2 px-2 mt-2'>Learn more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HelpUs;