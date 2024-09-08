'use client'

import React, { useState } from 'react';

function StartupRegistrationForm() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-10 bg-emerald-900 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-white uppercase mb-6">Startup Ideas Pitch Registration</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="bg-gray-50 p-6 border rounded-lg">
              <h3 className="text-xl font-medium mb-4">Company Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter your company's name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="companyEmail">
                    Company Email
                  </label>
                  <input
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter your company's email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="companyWebsite">
                    Company Website
                  </label>
                  <input
                    type="url"
                    id="companyWebsite"
                    name="companyWebsite"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter your company's website URL"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="companyAddress">
                    Company Address
                  </label>
                  <input
                    type="text"
                    id="companyAddress"
                    name="companyAddress"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter your company's address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="companySize">
                    Company Size
                  </label>
                  <input
                    type="text"
                    id="companySize"
                    name="companySize"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter the number of employees"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-gray-50 p-6 border rounded-lg">
              <h3 className="text-xl font-medium mb-4">Pitch Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="pitchTitle">
                    Pitch Title
                  </label>
                  <input
                    type="text"
                    id="pitchTitle"
                    name="pitchTitle"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter the title of your pitch"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="pitchDescription">
                    Pitch Description
                  </label>
                  <textarea
                    id="pitchDescription"
                    name="pitchDescription"
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Describe your pitch idea in detail"
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="marketOpportunity">
                    Market Opportunity
                  </label>
                  <textarea
                    id="marketOpportunity"
                    name="marketOpportunity"
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Explain the market opportunity for your idea"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="competitiveAdvantage">
                    Competitive Advantage
                  </label>
                  <textarea
                    id="competitiveAdvantage"
                    name="competitiveAdvantage"
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Describe your competitive advantage"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="fundingNeeds">
                    Funding Needs
                  </label>
                  <input
                    type="text"
                    id="fundingNeeds"
                    name="fundingNeeds"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Specify your funding needs (if any)"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-gray-50 p-6 border rounded-lg">
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="contactName">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="contactPhone">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="contactLinkedIn">
                    LinkedIn Profile (optional)
                  </label>
                  <input
                    type="url"
                    id="contactLinkedIn"
                    name="contactLinkedIn"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Enter your LinkedIn profile URL"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default StartupRegistrationForm;
