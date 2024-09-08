// src/Tabs.jsx
'use client'
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-emerald-800 min-h-screen border rounded-lg">
      <h1 className='text-white text-2xl font-bold mb-4'>What's New :</h1>
      <div className="flex flex-wrap space-x-2 sm:space-x-4 border-b-2 border-gray-300 overflow-x-auto">
        <button
          className={`pb-2 ${activeTab === 'Tab1' ? 'border-b-4 border-blue-500 text-white' : 'text-white'}`}
          onClick={() => handleTabClick('Tab1')}
        >
          Notice
        </button>
        <button
          className={`pb-2 ${activeTab === 'Tab2' ? 'border-b-4 border-blue-500 text-white' : 'text-white'}`}
          onClick={() => handleTabClick('Tab2')}
        >
          Vacancies
        </button>
        <button
          className={`pb-2 ${activeTab === 'Tab3' ? 'border-b-4 border-blue-500 text-white' : 'text-white'}`}
          onClick={() => handleTabClick('Tab3')}
        >
         Tenders
        </button>
      </div>

      <div className="mt-14 flex-1 overflow-y-auto">
        {activeTab === 'Tab1' && (
          <div className="overflow-y-auto max-h-[60vh]">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Sl. No.</th>
                  <th className="px-4 py-2 border-b">Subject</th>
                  <th className="px-4 py-2 border-b">File</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">1</td>
                  <td className="px-4 py-2 border-b">Comprehensive Revised Guidelines for Central Government Nomination (CGN) to MD (Ayurvedal/Unani/Siddha and Homoeopathy) Courses for the session 2024-25 (English version and Hindi version)-reg. शैक्षानिक सत्र 2024-25 के लिए एमडी (आयुर्वेद, यूनानी, सिद्ध और होम्योपैथी) पाठ्यक्रमों के लिए केंद्रिय सरकार नामांकन हेतु दिशानिर्देशो के संबंध में। Display upto: Mar 31, 2025</td>
                  <td className="px-4 py-2 border-b">(5.43 MB)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">2</td>
                  <td className="px-4 py-2 border-b">Central Government Nomination to MD (Unani) course at NIUM Bangalore and Govt. Nizamia Tibbiya College, Hyderabad for the session 2024-25 - regarding. Display upto: Sep 15, 2024</td>
                  <td className="px-4 py-2 border-b">(61.93 KB)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">3</td>
                  <td className="px-4 py-2 border-b">Central Government Nomination to MD (Ayurveda) course at NIA-Jaipur, ITRA-Jamnagar and GAC-Guwahati for the session 2024-25 – regarding. Display upto: Sep 15, 2024</td>
                  <td className="px-4 py-2 border-b">(68.25 KB)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">4</td>
                  <td className="px-4 py-2 border-b">Central Government Nomination to MD (Homoeopathy) course at NIH, Kolkata for the session 2024-25 - regarding. Display upto: Sep 15, 2024</td>
                  <td className="px-4 py-2 border-b">(63.50 KB)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">5</td>
                  <td className="px-4 py-2 border-b">Call for proposal on Geographical Indication (GI) for medicinal plants use in Ayush systems of medicine-reg. आयुष चिकित्सा पद्धति में औषधीय पौधों के उपयोग के लिए भौगोलिक संकेतक (जीआई) के बारे में प्रस्ताव आमंत्रित करना। Display upto: Sep 23, 2024</td>
                  <td className="px-4 py-2 border-b">(847.36 KB)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">6</td>
                  <td className="px-4 py-2 border-b">Central Government Nomination to MD (Siddha) course at Govt. Siddha Medical College, Palayamkottai for academic session 2024-25 - regarding. Display upto: Sep 15, 2024</td>
                  <td className="px-4 py-2 border-b">(12.40 KB)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'Tab2' && (
          <div className="overflow-y-auto max-h-[60vh] bg-white p-4">
            {/* Content for Tab 2 */}
            <p className="text-black">Content for Vacancies tab goes here.</p>
          </div>
        )}
        {activeTab === 'Tab3' && (
          <div className="overflow-y-auto max-h-[60vh] bg-white p-4">
            {/* Content for Tab 3 */}
            <p className="text-black">Content for Tenders tab goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
