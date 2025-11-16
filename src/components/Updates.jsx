import React, { useState, useEffect } from "react";

const STEPS = [
  { 
    id: "registrations", 
    label: "Registrations Open", 
    date: new Date(2025, 10, 1)
  }, 
  { 
    id: "fixtures", 
    label: "Fixtures Released", 
    date: new Date(2025, 10, 10)
  },
  { 
    id: "live", 
    label: "Event Live", 
    date: new Date(2025, 10, 18)
  },
  { 
    id: "results", 
    label: "Results Announced", 
    date: new Date(2025, 11, 5)
  },
  { 
    id: "shortlisted", 
    label: "Teams Shortlisted", 
    date: new Date(2025, 11, 9)
  },
];

const getCurrentStepId = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  
  // Find the last step whose date has passed or is today
  let activeIndex = 0;
  
  for (let i = 0; i < STEPS.length; i++) {
    const stepDate = new Date(STEPS[i].date);
    stepDate.setHours(0, 0, 0, 0);
    
    if (now >= stepDate) {
      // If we've reached or passed this date, mark it and move to next
      activeIndex = i + 1;
    }
  }
  
  // If we've completed all steps, stay at the last one
  if (activeIndex >= STEPS.length) {
    activeIndex = STEPS.length - 1;
  }
  
  return STEPS[activeIndex].id;
};

const Update = () => {
  const [currentStepId, setCurrentStepId] = useState(getCurrentStepId);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStepId(getCurrentStepId());
    }, 3600000); 

    return () => clearInterval(intervalId);
  }, []);

  const currentIndex = Math.max(
    0,
    STEPS.findIndex((s) => s.id === currentStepId)
  );
  
  // Calculate progress percentage with partial progress between steps
  let progressPercent = 0;
  
  if (STEPS.length > 1) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    if (currentIndex === 0) {
      // Before first step or at first step
      progressPercent = 0;
    } else if (currentIndex >= STEPS.length - 1) {
      // At or past last step
      progressPercent = 100;
    } else {
      // Between steps - calculate partial progress
      const prevStep = STEPS[currentIndex - 1];
      const currentStep = STEPS[currentIndex];
      
      const prevDate = new Date(prevStep.date);
      prevDate.setHours(0, 0, 0, 0);
      
      const currentDate = new Date(currentStep.date);
      currentDate.setHours(0, 0, 0, 0);
      
      // Calculate days between prev and current step
      const totalDays = (currentDate - prevDate) / (1000 * 60 * 60 * 24);
      const daysPassed = (now - prevDate) / (1000 * 60 * 60 * 24);
      
      // Calculate progress within this segment
      const segmentProgress = Math.min(Math.max(daysPassed / totalDays, 0), 1);
      
      // Calculate overall progress
      const baseProgress = (currentIndex - 1) / (STEPS.length - 1);
      const segmentSize = 1 / (STEPS.length - 1);
      
      progressPercent = (baseProgress + (segmentProgress * segmentSize)) * 100;
    }
  }

  return (
    <div id="update" className="w-full max-w-5xl mx-auto my-6 p-5 sm:p-6 rounded-2xl b   shadow-sm">
      
      <h2 className="mb-1 text-2xl font-bold text-white">Event Updates</h2>
      <h3 className="mb-6 text-sm text-gray-500">Track your event progress</h3>

      <div className="relative">
        
        <div className="hidden sm:flex justify-between items-start relative pb-2">
          
          <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200" style={{ zIndex: 0 }} />
          
          <div 
            className="absolute top-5 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-700 ease-out"
            style={{ 
              width: `${progressPercent}%`,
              zIndex: 1
            }}
          />

          {STEPS.map((step, index) => {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            
            const stepDate = new Date(step.date);
            stepDate.setHours(0, 0, 0, 0);
            
            const isToday = now.getTime() === stepDate.getTime();
            const isPast = now > stepDate;
            const isCompleted = isPast;
            const isActive = isToday || index === currentIndex;
            const isUpcoming = now < stepDate;

            return (
              <div key={step.id} className="flex flex-col items-center flex-1 relative" style={{ zIndex: 2 }}>
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                  transition-all duration-500 border-4 bg-white relative
                  ${isCompleted ? 'border-green-500 text-green-600' : ''}
                  ${isToday ? 'border-green-500 text-green-600' : ''}
                  ${isUpcoming && !isActive ? 'border-gray-300 text-gray-400' : ''}
                  ${isActive && !isToday && !isCompleted ? 'border-blue-500 text-blue-600' : ''}
                `}>
                  {isToday && (
                    <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-pulse" style={{ filter: 'blur(4px)', opacity: 0.6 }} />
                  )}
                  <div className="relative z-10">
                    {isCompleted ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                </div>
                
                <div className="mt-3 text-center px-2">
                  <div className={`
                    text-xs font-semibold mb-1
                    ${isCompleted ? 'text-green-600' : ''}
                    ${isToday ? 'text-green-600' : ''}
                    ${isActive && !isToday && !isCompleted ? 'text-blue-600' : ''}
                    ${isUpcoming && !isActive ? 'text-gray-500' : ''}
                  `}>
                    {step.label}
                  </div>
                  <div className="text-[10px] text-gray-400 whitespace-nowrap">
                    {step.date.toLocaleDateString("en-US", { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  {isToday && (
                    <div className="mt-1 inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-semibold rounded-full">
                      TODAY
                    </div>
                  )}
                  {isActive && !isToday && !isCompleted && (
                    <div className="mt-1 inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[9px] font-semibold rounded-full">
                      IN PROGRESS
                    </div>
                  )}
                  {isCompleted && (
                    <div className="mt-1 inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-semibold rounded-full">
                      COMPLETED
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="sm:hidden space-y-4">
          {STEPS.map((step, index) => {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            
            const stepDate = new Date(step.date);
            stepDate.setHours(0, 0, 0, 0);
            
            const isToday = now.getTime() === stepDate.getTime();
            const isPast = now > stepDate;
            const isCompleted = isPast;
            const isActive = isToday || index === currentIndex;
            const isUpcoming = now < stepDate;

            return (
              <div key={step.id} className="flex items-start gap-3 relative">
                {index < STEPS.length - 1 && (
                  <div className={`
                    absolute left-5 top-10 w-0.5 h-full
                    ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}
                  `} />
                )}
                
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0
                  transition-all duration-500 border-4 bg-white relative z-10
                  ${isCompleted ? 'border-green-500 text-green-600' : ''}
                  ${isToday ? 'border-green-500 text-green-600' : ''}
                  ${isUpcoming && !isActive ? 'border-gray-300 text-gray-400' : ''}
                  ${isActive && !isToday && !isCompleted ? 'border-blue-500 text-blue-600' : ''}
                `}>
                  {isToday && (
                    <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-pulse z-0" style={{ filter: 'blur(4px)', opacity: 0.6 }} />
                  )}
                  <div className="relative z-10">
                    {isCompleted ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex-1 pt-1">
                  <div className={`
                    text-sm font-semibold mb-1
                    ${isCompleted ? 'text-green-600' : ''}
                    ${isToday ? 'text-green-600' : ''}
                    ${isActive && !isToday && !isCompleted ? 'text-blue-600' : ''}
                    ${isUpcoming && !isActive ? 'text-gray-500' : ''}
                  `}>
                    {step.label}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    {step.date.toLocaleDateString("en-US", { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  {isToday && (
                    <div className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                      🎯 TODAY
                    </div>
                  )}
                  {isActive && !isToday && !isCompleted && (
                    <div className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                      IN PROGRESS
                    </div>
                  )}
                  {isCompleted && (
                    <div className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                      ✓ COMPLETED
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-sm text-gray-700">
            <strong className="text-blue-700">Current Status:</strong> {STEPS[currentIndex]?.label || "Coming Soon"}
          </span>
        </div>
      </div>

       
    </div>
    
  );
};


export default Update;
