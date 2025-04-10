"use client"

import React, { useState } from 'react';
import { ProfileForm } from '@/app/_features/form/CreateProfileForm';
import { ApiCredentialsForm } from '@/app/_features/form/ApiCredentialsForm';
import { StepIndicator } from '@/app/_features/form/StepIndicator';

export const ManualProfileCreator = ({
                                         onComplete,
                                         initialStep = 1,
                                         initialUserData = null,
                                         title = "Create an account",
                                         subtitle = "Let's set up the profile information and the API credentials",
                                         stepLabels = ["Profile Setup", "API Credentials"],
                                     }) => {
    const [currentStep, setCurrentStep] = useState(initialStep);
    const [userData, setUserData] = useState(initialUserData);

    // This function will be passed to the ProfileForm
    const handleProfileSubmit = (formData) => {
        console.log("Profile form submitted:", formData);

        // Store the user data
        setUserData(formData);

        // Move to the next step
        setCurrentStep(2);
    };

    // This function will be passed to the ApiCredentialsForm
    const handleApiSubmit = (formData) => {
        console.log("API form submitted:", formData);

        const completeData = {
            user: userData,
            api: formData
        };

        // Log the combined data
        console.log("Complete submission:", completeData);

        // Call the onComplete callback if provided
        if (onComplete) {
            onComplete(completeData);
        } else {
            alert("Registration complete!");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {title}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {subtitle}
                    </p>
                </div>

                {/* Step Indicator */}
                <div className="mb-8">
                    <StepIndicator
                        currentStep={currentStep}
                        totalSteps={stepLabels.length}
                        labels={stepLabels}
                    />
                </div>
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-8">
                        {currentStep === 1 ? (
                            <ProfileForm onSubmitSuccess={handleProfileSubmit} initialData={userData} />
                        ) : (
                            <ApiCredentialsForm onSubmitSuccess={handleApiSubmit} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
