import React from 'react'

const StepThree = () => {

    const storage = [
        { name: "Online service", info: "Access to multiplayer games", price: "+$1/mo" },
        { name: "Larger storage", info: "Extra 1TB of cloud save", price: "+$2/mo" },
        { name: "Customizable Profile", info: "Custom theme on your profile", price: "+$2/mo" }
    ]

    return (
        <div className="w-96 ml-4 p-4">
            <h1 className="font-semibold text-xl text-Purplish-blue"> Pick add-ons</h1>
            <p className="text-gray-500 mb-4">Add-ons help enhance your gaming experience.</p>

            {storage.map((storage) => (
                <div className='flex justify-between items-center border-2 rounded-lg p-2 mb-4 cursor-pointer hover:border-Marine-blue'>
                    <div className='flex flex-row gap-4'>
                        <input type="checkbox" />
                        <span>
                            <h1 className='text-Marine-blue font-semibold'>{storage.name}</h1>
                            <p className='text-gray-500'>{storage.info}</p>
                        </span>
                    </div>
                    <div className='text-Purplish-blue'>{storage.price}</div>
                </div>
            ))}

        </div>
    )
}

export default StepThree