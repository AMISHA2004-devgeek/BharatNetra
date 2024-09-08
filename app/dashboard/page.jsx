'use client'

import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const generateFakeRegistrations = (num) => {
  let registrations = [];
  for (let i = 0; i < num; i++) {
    registrations.push({
      companyName: faker.company.name(),
      companyEmail: faker.internet.email(),
      companyWebsite: faker.internet.url(),
      companyAddress: faker.address.streetAddress(),
      // companySize: faker.datatype.number({ min: 1, max: 1000 }),
      pitchTitle: faker.lorem.words(),
      pitchDescription: faker.lorem.paragraphs(2),
      marketOpportunity: faker.lorem.sentences(2),
      competitiveAdvantage: faker.lorem.sentences(2),
      fundingNeeds: `$${faker.finance.amount()}`,
      contactName: faker.name.fullName(),
      contactPhone: faker.phone.number(),
      contactLinkedIn: faker.internet.url()
    });
  }
  return registrations;
};

const Dashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const registrationsPerPage = 5;

  useEffect(() => {
    const fakeRegistrations = generateFakeRegistrations(15);
    setRegistrations(fakeRegistrations);
  }, []);

  // Calculate pagination
  const indexOfLastRegistration = currentPage * registrationsPerPage;
  const indexOfFirstRegistration = indexOfLastRegistration - registrationsPerPage;
  const currentRegistrations = registrations.slice(indexOfFirstRegistration, indexOfLastRegistration);
  const totalPages = Math.ceil(registrations.length / registrationsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Registration Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Company Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Website</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Size</th>
              <th className="py-2 px-4 border-b">Pitch Title</th>
              <th className="py-2 px-4 border-b">Pitch Description</th>
              <th className="py-2 px-4 border-b">Market Opportunity</th>
              <th className="py-2 px-4 border-b">Competitive Advantage</th>
              <th className="py-2 px-4 border-b">Funding Needs</th>
              <th className="py-2 px-4 border-b">Contact Name</th>
              <th className="py-2 px-4 border-b">Contact Phone</th>
              <th className="py-2 px-4 border-b">LinkedIn</th>
            </tr>
          </thead>
          <tbody>
            {currentRegistrations.map((reg, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{reg.companyName}</td>
                <td className="py-2 px-4 border-b">{reg.companyEmail}</td>
                <td className="py-2 px-4 border-b">{reg.companyWebsite}</td>
                <td className="py-2 px-4 border-b">{reg.companyAddress}</td>
                <td className="py-2 px-4 border-b">{reg.companySize}</td>
                <td className="py-2 px-4 border-b">{reg.pitchTitle}</td>
                <td className="py-2 px-4 border-b">{reg.pitchDescription}</td>
                <td className="py-2 px-4 border-b">{reg.marketOpportunity}</td>
                <td className="py-2 px-4 border-b">{reg.competitiveAdvantage}</td>
                <td className="py-2 px-4 border-b">{reg.fundingNeeds}</td>
                <td className="py-2 px-4 border-b">{reg.contactName}</td>
                <td className="py-2 px-4 border-b">{reg.contactPhone}</td>
                <td className="py-2 px-4 border-b">
                  <a href={reg.contactLinkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    LinkedIn Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
