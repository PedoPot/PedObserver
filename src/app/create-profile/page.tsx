"use client"

import { ManualProfileCreator } from '@/app/_features/form/ManualProfileCreatorForm';


export default function Home() {
    const handleRegistrationComplete = (data) => {
        console.log("Registration completed with data:", data);
        alert("Registration complete!");
        // Here you could redirect the user or perform other actions
    };

    return <ManualProfileCreator onComplete={handleRegistrationComplete} />;
}