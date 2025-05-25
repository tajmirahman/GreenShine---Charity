import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";


const OurCauses = () => {

    const causesData=useLoaderData();
    console.log(causesData);

    return (
        <div className="">
            <div className="my-8 space-y-3">
                <h1 className="text-4xl  text-center">OUR <span className="text-[#00A9A5]">CAUSES</span></h1>

                <div class="flex items-center justify-center w-1/6 mx-auto">
                    <div class="flex-grow h-px bg-gray-300"></div>
                    <div class="mx-4 border border-gray-300 p-1 rounded-sm">
                        <div class="w-1 h-1 border border-gray-400"></div>
                    </div>
                    <div class="flex-grow h-px bg-gray-300"></div>
                </div>

                <p className="text-center">Our charity help those people who have no hope</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-9/12 mx-auto">
                {
                    causesData.map(data=> <DonationCard data={data}></DonationCard>)
                }
            </div>


        </div>
    );
};

export default OurCauses;