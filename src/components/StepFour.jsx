import React from 'react'

const StepFour = () => {

    const finish = [
        { course: "Arcade", price: "$9/mo" }
    ]
    const pick = [
        { name: "Online service", price: "+$1/mo" }, { name: "Larger storage", price: "+$2/mo" }, { name: "" }
    ]

    return (
        <div className="w-96 ml-4 p-4">
            <h1 className="font-semibold text-xl text-Purplish-blue">Finishing up</h1>
            <p className="text-gray-500 mb-4">Double-check everything looks OK before confirming.</p>
            {finish.map((finish) => (
                <div className='flex flex-col gap-4 bg-Magnolia p-4 rounded-lg mb-4'>
                    <div className='flex justify-between items-center font-semibold text-Marine-blue'>
                        <span>
                            <h1 >{finish.course}<span></span></h1>
                            <a href="#" className='underline text-gray-500 hover:text-Purplish-blue'>Change</a>
                        </span>
                        <p>{finish.price}</p>

                    </div>
                    <hr />
                    {pick.map((pick) => (

                        <span className='flex justify-between'>
                            <h1 className='text-gray-500'>{pick.name}</h1>
                            <p className='text-Purplish-blue'>{pick.price}</p>
                        </span>


                    ))}

                </div>
            ))}

            <div>
                <span>Total (per month)</span>
                <p></p>
            </div>
        </div>
    )
}

export default StepFour