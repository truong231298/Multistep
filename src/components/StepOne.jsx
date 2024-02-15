const StepOne = () => {
    return ( 
        <div className="w-96 ml-4 p-4">
           <h1 className="font-semibold text-xl text-Purplish-blue">Personal info</h1>
           <p className="text-gray-500 mb-4"> Please provide your name, email address, and phone number.</p>

           <form action="" className="flex flex-col">
            <label htmlFor="">Name</label>
            <input type="text" placeholder=" e.g. Stephen King"/>
            <label htmlFor=""> Email Address</label>
            <input type="text" placeholder="e.g. stephenking@lorem.com"/>
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder="e.g. +1 234 567 890"/>
           </form>
        </div>
     );
}
 
export default StepOne;