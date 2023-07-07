import React from 'react';
import ServicesCard from './ServiceCard';
import mobileDev from '../public/mobileDev.png';
import webDev from '../public/webDev.png';
import uiUX from '../public/uiUX.png';

const servicesData = [
  {
    judul: 'Mobile Developer',
    description:
      'We design mobile app designs with the latest trends and of course according to your needs',
    logo: mobileDev,
  },
  {
    judul: 'Web Developer',
    description:
      'The website is like a house and it is appropriate to give it a good look and according to its function.',
    logo: webDev,
  },
  {
    judul: 'UI Design',
    description: 'Intuitive, easy to use, and visually appealing for the user',
    logo: uiUX,
  },
];

export default function Service(): JSX.Element {
  return (
    <div className="h-max py-8">
      <div className="flex justify-center uppercase tracking-[20px] text-primary text-2xl mt-10 m-30">
        Provide Services
      </div>
      <div className="flex flex-wrap gap-4 my-20 justify-center">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            judul={service.judul}
            description={service.description}
            logo={service.logo}
          />
        ))}
      </div>
    </div>
  );
}
