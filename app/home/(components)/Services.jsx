'use client'

import React, { useState } from 'react';

function Services() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            id: 1,
            content: {
                title: 'Ayurveda',
                description: 'Ayurveda is the time-tested traditional system of medicine of India. The term \'Ayurveda\' meaning \'the knowledge of life\' comprises of two Sanskrit words viz \'Ayu\' meaning \'Life\' and \'Veda\' meaning \'Knowledge\' or \'Science\'.'
            }
        },
        {
            id: 2,
            content: {
                title: 'Yoga & Naturopathy',
                description: 'The word \'Yoga\' comes from the Sanskrit word \'yuj\' which means \'to unite or integrate\'. Yoga is about the union of a person\'s own consciousness and the universal consciousness. Naturopathy is a cost-effective drugless, non-invasive therapy involving the use of natural materials for health care and healthy living.'
            }
        },
        {
            id: 3,
            content: {
                title: 'Unani',
                description: 'Unani System of medicine is a comprehensive medical system, which provides preventive, promotive, curative and rehabilitative health care. The system is holistic in nature and takes into account the whole personality of an individual rather than taking a reductionist approach towards disease.'
            }
        },
        {
            id: 4,
            content: {
                title: 'Siddha',
                description: 'The Siddha system is an ancient system of medicine in India. The word \'Siddha\' is derived from the root word "Citti" meaning attainment of perfection, eternal bliss and accomplishment.'
            }
        },
        {
            id: 5,
            content: {
                title: 'Sowa Rigpa',
                description: 'Sowa-Rigpa is the traditional medicine of many parts of the Himalayan region used mainly by the Tribal and Bhot people. Sowa-Rigpa (Bodh-Kyi) means \'science of healing\' and the practitioners of this medicine are known as Amchi.'
            }
        },
        {
            id: 6,
            content: {
                title: 'Homeopathy',
                description: '\'Homoeopathy\' was introduced as a scientific system of drug therapeutics by a German Physician, Dr. Christian Frederick Samuel Hahnemann in 1805. The principle of Homoeopathy is Similia Similibus Curentur i.e. let likes be treated by likes.'
            }
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative overflow-hidden p-4 md:p-12 m-4 md:m-10 rounded-xl bg-emerald-900">
            <h1 className="font-bold text-white text-3xl text-center mb-6">AYUSH SERVICES</h1>
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item) => (
                    <div key={item.id} className="flex-none w-full md:w-1/3 p-4 border-2 border-gray-300">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl text-center font-bold mb-3 uppercase">{item.content.title}</h2>
                                <p className="text-justify">{item.content.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white text-emerald-800 p-2 rounded-full"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white text-emerald-800 p-2 rounded-full"
            >
                &#10095;
            </button>
        </div>
    );
}

export default Services;
