import React from 'react';

type StepIndicatorProps = {
    currentStep: number;
    totalSteps: number;
    labels?: string[];
};

export function StepIndicator({ currentStep, totalSteps, labels = [] }: StepIndicatorProps) {
    return (
        <div className="mb-8">
            <div className="relative flex items-center justify-between">
                {/* Line connecting dots */}
                <div className="absolute left-0 right-0 h-0.5 bg-gray-200" />

                {/* Steps */}
                {Array.from({ length: totalSteps }).map((_, index) => {
                    const isCompleted = index < currentStep;
                    const isActive = index === currentStep;

                    return (
                        <div key={index} className="relative flex flex-col items-center">
                            <div
                                className={`z-10 flex items-center justify-center w-8 h-8 rounded-full ${
                                    isCompleted
                                        ? "bg-blue-600 text-white"
                                        : isActive
                                            ? "bg-white border-2 border-blue-600 text-blue-600"
                                            : "bg-white border-2 border-gray-300 text-gray-400"
                                }`}
                            >
                                {isCompleted ? (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <span>{index + 1}</span>
                                )}
                            </div>

                            {labels[index] && (
                                <span className={`mt-2 text-xs font-medium ${
                                    isCompleted || isActive ? "text-blue-600" : "text-gray-500"
                                }`}>
                  {labels[index]}
                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
