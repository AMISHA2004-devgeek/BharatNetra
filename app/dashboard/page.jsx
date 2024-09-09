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
    <div className="bg-gray-50 min-h-screen p-6 ">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Registration Dashboard</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Company Name</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Email</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Website</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Address</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Size</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Pitch Title</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/3">Pitch Description</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Market Opportunity</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Competitive Advantage</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Funding Needs</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Contact Name</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">Contact Phone</th>
              <th className="py-4 px-6 text-left text-gray-600 font-semibold w-1/6">LinkedIn</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentRegistrations.map((reg, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.companyName}</td>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.companyEmail}</td>
                <td className="py-4 px-6 text-blue-600 hover:underline w-1/6">
                  <a href={reg.companyWebsite} target="_blank" rel="noopener noreferrer">{reg.companyWebsite}</a>
                </td>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.companyAddress}</td>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.companySize}</td>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.pitchTitle}</td>
                <td className="py-4 px-6 text-gray-700 w-1/6 truncate text-wrap">
                  {reg.pitchDescription.length > 150 ? (
                    <>
                      {reg.pitchDescription.substring(0, 150)}...{' '}
                      <a href="#" className="text-blue-500 hover:underline">Read more</a>
                    </>
                  ) : (
                    reg.pitchDescription
                  )}
                </td>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.marketOpportunity}</td>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.competitiveAdvantage}</td>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.fundingNeeds}</td>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.contactName}</td>
                <td className="py-4 px-6 text-gray-700 w-1/6">{reg.contactPhone}</td>
                <td className="py-4 px-6 w-1/6">
                  <a href={reg.contactLinkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-4 py-2 rounded-full text-sm font-medium ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
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
