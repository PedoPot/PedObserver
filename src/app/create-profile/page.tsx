"use client"

import React, { useState } from 'react';
import { ProfileForm } from '@/app/_features/form/CreateProfileForm';
import { ApiCredentialsForm } from '@/app/_features/form/ApiCredentialsForm';
import { StepIndicator } from '@/app/_features/form/StepIndicator';

export default function Home() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState(null);

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

        // Here you would typically save both userData and API credentials
        // and potentially redirect to another page

        // For demo, we'll just log the combined data
        console.log("Complete submission:", {
            user: userData,
            api: formData
        });

        alert("Registration complete!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Create an account
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Let's set up the profile information and the API credentials
                    </p>
                </div>

                {/* Step Indicator */}
                <div className="mb-8">
                    <StepIndicator
                        currentStep={currentStep}
                        totalSteps={2}
                        labels={["Profile Setup", "API Credentials"]}
                    />
                </div>

                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="p-6 sm:p-8">
                        {currentStep === 1 ? (
                            <ProfileForm onSubmitSuccess={handleProfileSubmit} />
                        ) : (
                            <ApiCredentialsForm onSubmitSuccess={handleApiSubmit} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
