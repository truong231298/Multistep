import MultiStep from 'react-multistep'
import { useState } from 'react';
import bgDesktop from '/images/bg-sidebar-desktop.svg'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import Success from './components/Success';


export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const step = [
    { id: 1, order: "step 1", name: "YOUR INFO" },
    { id: 2, order: "step 2", name: "Select plan" },
    { id: 3, order: "step 3", name: "Add-ons" },
    { id: 4, order: "step 4", name: "Summary" }
  ]
  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  console.log(currentStep)

  return (
    <main className='min-h-screen flex items-center justify-center bg-Light-blue'>
      <div className='max-w-2xl flex justify-between bg-White p-2 rounded-md'>
        {/* name step */}
        <section className='w-48 p-4 rounded-lg' style={{
          backgroundImage: `url(${bgDesktop})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          {step.map((step) => (
            <div key={step.id} className='flex flex-row items-center gap-4 mb-4'>
              <span className={`border-2 px-3 py-1 rounded-full ${currentStep === step.id ? 'bg-Light-blue' : ''}`}>{step.id}</span>
              <span className=''>
                <h1 className='text-gray-400'>{step.order}</h1>
                <p className='text-white uppercase'>{step.name}</p>
              </span>
            </div>
          ))}


        </section>
        {/* step information */}
        <MultiStep
          activeStep={currentStep}
          prevButton={{
            title: 'Go Back',
            style: {
              color: 'hsl(213, 96%, 18%)',
              marginLeft: "1rem"
            }
          }}
          nextButton={{
            title: 'Next Step',
            style: {
              color: 'white',
              background: 'hsl(213, 96%, 18%)',
              padding: '5px',
              borderRadius: '5px',
              marginLeft: "15rem"
            }
          }}

        >
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
          <Success />
        </MultiStep>
      </div>

    </main>
  )
}
