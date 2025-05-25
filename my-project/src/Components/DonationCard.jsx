import React from 'react';

const DonationCard = ({ data }) => {
    console.log(data)
    const { title, description, image, raised, goal }=data || {}
    const progress = Math.min((raised / goal) * 100, 100).toFixed(1);

    return (
        <div>
            <div className="card bg-base-100 hover:shadow-lg mb-10">
                <figure>
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body bg-gray-200">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-sm text-gray-600 w-11/12">{description}</p>

                    <progress className="progress progress-primary w-full mt-2" value={progress} max="100"></progress>
                    
                    <div className="flex justify-between items-center mt-3">
                        <button className="btn btn-outline btn-sm">Donate</button>
                        <span className="text-sm font-semibold">
                            ${raised.toLocaleString()} / ${goal.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>

  

        </div>
    );
};

export default DonationCard;