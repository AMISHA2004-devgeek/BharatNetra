'use client';
import React from 'react';

const schemes = [
  {
    id: 1,
    title: 'Ayurgyan',
    description:
      'AYURGYAN Scheme has been approved for the period from the FY 2021-2022 to FY 2025-2026 for promoting education and research in the field of Ayush and to support Research & Innovation in Ayush by extra mural research and education in Ayush by providing academic activities., training, Capacity Building etc.',
    fileSize: null,
    applyLink: '#',
    readMoreLink: '#',
  },
  {
    id: 2,
    title: 'Ayurswasthya',
    description:
      'Under the Centre of Excellence component of AYURSWASTHYA Yojana, financial assistance is provided to eligible individual organizations/institutes for establishing and upgrading their functions & facilities and/or for research & development activities in Ayush.',
    fileSize: '909 KB',
    applyLink: '#',
    readMoreLink: '#',
  },
  {
    id: 3,
    title: 'Champion Services sector scheme',
    description:
      'The Champion Services Sector Scheme have been framed by Govt. of India to enhance Medical tourism in the country. The initiative will not only promote and propagate Ayurveda, Yoga and other traditional systems of medicines but also expect to increase footfall of International patients/tourists/visitors in the country.',
    fileSize: null,
    applyLink: '#',
    readMoreLink: '#',
  },
  {
    id: 4,
    title: 'Promotion of International Co-operation',
    description:
      'Central Sector Scheme for Promotion of International Co-operation (IC) in Ayush. To promote and strengthen awareness and interest about Ayush Systems of Medicine and to facilitate International promotion, development and recognition of Ayurveda, Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy.',
    fileSize: '1.01 MB',
    applyLink: '#',
    readMoreLink: '#',
  },
  {
    id: 5,
    title: 'Information, Education & Communication',
    description:
      'Pursue activities in the areas of Information, Education and Communication to fulfill the mandate of propagation of Ayush Systems of Healthcare, assigned to the Ministry in the Government of India (Allocation of Business) Rules 1961.',
    fileSize: '409 KB',
    applyLink: '#',
    readMoreLink: '#',
  },
  {
    id: 6,
    title: 'Ayush Oushadhi Gunvatta Evam Uttpadan Samvardhan Yojana',
    description:
      'Regulation of Ayurveda, Siddha, Unani and Homeopathy (ASU&H) medicines in India, are governed under the provisions of Drugs & Cosmetics Act, 1940 and the Rules made thereunder.',
    fileSize: '456 KB',
    applyLink: '#',
    readMoreLink: '#',
  },
];

function SchemeCard({ title, description, fileSize, applyLink, readMoreLink }) {
  return (
    <div className="bg-white border border-emerald-300 rounded-lg shadow-lg p-6 flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 text-sm flex-grow text-justify">
        {description}
      </p>
      {fileSize && (
        <p className="text-gray-500 text-sm mt-2">File Size: {fileSize}</p>
      )}
      <div className="mt-auto flex space-x-4">
        <a href={readMoreLink} className="text-blue-600 hover:underline">
          Read More
        </a>
        <a
          href={applyLink}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Apply Here
        </a>
      </div>
    </div>
  );
}

function Schemes() {
  return (
    <div className="p-6 m-10 bg-emerald-900 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          AYUSH SCHEMES
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {schemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              title={scheme.title}
              description={scheme.description}
              fileSize={scheme.fileSize}
              applyLink={scheme.applyLink}
              readMoreLink={scheme.readMoreLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schemes;
