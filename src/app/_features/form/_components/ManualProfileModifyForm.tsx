'use client';

import React, { useState } from 'react';
import { ApiCredentialsForm } from '@/app/_features/form/_components/ApiCredentialsForm';
import { ModifyProfileForm } from './ModifyProfileForm';

export const ManualProfileModify = ({
  onComplete,
  id,
  initialStep = 1,
  initialUserData = null,
  title = 'Modify an account',
  subtitle = "Let's adjust the profile information and the API credentials",
}: any) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [userData, setUserData] = useState(initialUserData);
  // This function will be passed to the ProfileForm
  const handleModifyProfile = (data) => {
    console.log('Registration completed with data:', data);
    alert('Registration complete!');
    // Here you could redirect the user or perform other actions
  };

  const handleProfileSubmit = (formData) => {
    console.log('Profile form submitted:', formData);

    // Store the user data
    setUserData(formData);

    // Move to the next step
    setCurrentStep(2);
  };

  // This function will be passed to the ApiCredentialsForm
  const handleApiSubmit = (formData) => {
    console.log('API form submitted:', formData);

    const completeData = {
      user: userData,
      api: formData,
    };

    // Log the combined data
    console.log('Complete submission:', completeData);

    // Call the onComplete callback if provided
    if (onComplete) {
      onComplete(completeData);
    } else {
      alert('Modification completed!');
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl font-bold text-gray-900'>{title}</h1>
          <p className='mt-2 text-gray-600'>{subtitle}</p>
        </div>

        <div className='bg-white shadow-xl rounded-lg overflow-hidden'>
          <div className='p-6 sm:p-8'>
            {currentStep === 1 ? (
              <ModifyProfileForm
                onSubmitSuccess={handleProfileSubmit}
                id={id}
                // initialData={userData}
              />
            ) : (
              <ApiCredentialsForm onSubmitSuccess={handleApiSubmit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
