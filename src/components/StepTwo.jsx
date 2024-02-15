import iconAd from "/images/icon-advanced.svg"
import iconAr from '/images/icon-arcade.svg'
import iconPro from '/images/icon-pro.svg'
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useState } from "react";
import { Node } from "postcss";

const StepTwo = () => {

    const course = [
        { id: 1, image: iconAr, name: "Arcade", price: "$9/mo" },
        { id: 2, image: iconAd, name: "Advanced", price: "$12/mo" },
        { id: 3, image: iconPro, name: "Pro", price: "$15/mo" }

    ]


    const [isYearlyBilling, setIsYearlyBilling] = useState(true);

    const handleBillingChange = () => {
        setIsYearlyBilling(!isYearlyBilling);
        // Add any additional logic here when the billing type changes
    };
   

    return (
        <div className="w-96 ml-4 p-4">
            <h1 className="font-semibold text-xl text-Purplish-blue">Select your plan</h1>
            <p className="text-gray-500 mb-4">You have the option of monthly or yearly billing.</p>
            <div className="flex flex-row gap-4">
                {course.map((course) => (
                    <div key={course.id} className="flex flex-col border-2 rounded-lg p-4">
                        <img src={course.image} alt={course.name} className="w-10 mb-4" />
                        <span className="text-Marine-blue">{course.name}</span>
                        <span className="text-gray-500">{course.price}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-row gap-4 justify-center mt-4 py-1 bg-Light-blue rounded-lg">
                <span className={isYearlyBilling ? "text-Marine-blue" : "text-gray-500"}>Monthly</span>
                <label>
                    <Toggle
                        defaultChecked={!isYearlyBilling}
                        icons={false}
                        onChange={handleBillingChange}
                    />

                </label>
                <span className={isYearlyBilling ? "text-gray-500" : "text-Marine-blue" }>Yearly</span>
            </div>


        </div>
    );
}

export default StepTwo;