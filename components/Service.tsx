import React from 'react';
import ServicesCard from './ServiceCard';

type Props = {};

export default function Service({}: Props) {
  return (
    <div className="h-max">
      <div className="flex justify-center uppercase tracking-[20px] text-gray-500 text-2xl mt-10 mb-10">Provide Services</div>
      <div className="flex flex-wrap  gap-4 m-2 justify-center ">
        <ServicesCard
          judul={'Mobil Developer'}
          description={'We design mobile app designs with the latest trends and of course according to your needs'}
          logo={
            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 64 64" id="mobile-development" className="absolute z-10 " color="red-100">
              <path d="M56 39a7 7 0 1 0-7 7 7.008 7.008 0 0 0 7-7Zm-7 5a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"></path>
              <path d="M51.293 36.293 48 39.586l-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 1.414 0l4-4zM32 53a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM29 5h6v2h-6z"></path>
              <path d="M61 24H51V7a5.006 5.006 0 0 0-5-5H18a5.006 5.006 0 0 0-5 5v5H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h10v21a5.006 5.006 0 0 0 5 5h28a5.006 5.006 0 0 0 5-5v-9h10a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1Zm-1 6H38v-4h22ZM18 4h28a3 3 0 0 1 3 3v1H15V7a3 3 0 0 1 3-3Zm8 10v4H4v-4ZM4 20h22v14H4Zm42 40H18a3 3 0 0 1-3-3v-5h34v5a3 3 0 0 1-3 3Zm3-10H15V36h12a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H15v-2h34v14H37a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h12Zm0-4H38V32h22v14Z"></path>
              <path d="M39 27h2v2h-2zM42 27h2v2h-2zM45 27h2v2h-2zM9.143 21.485l-3 5a1 1 0 0 0 0 1.03l3 5 1.714-1.03L8.166 27l2.691-4.485zm11.714 0-1.714 1.03L21.834 27l-2.691 4.485 1.714 1.03 3-5a1 1 0 0 0 0-1.03zM12.073 31.63l3.997-10.002 1.857.743-3.997 10zM5 15h2v2H5zM8 15h2v2H8zM11 15h2v2h-2zM30 14h2v2h-2zM34 14h4v2h-4zM47 16v-2h-7v2h7zM30 18h4v2h-4zM36 18h2v2h-2zM40 18h7v2h-7zM18 40h6v2h-6zM26 40h6v2h-6zM20 44h2v2h-2zM24 44h4v2h-4zM30 44h2v2h-2z"></path>
            </svg>
          }
        />
        <ServicesCard
          judul={'Web Developer'}
          description={'The website is like a house and it is appropriate to give it a good look and according to its function.'}
          logo={
            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 64 64" id="mobile-development" className="absolute z-10">
              <path d="M56 39a7 7 0 1 0-7 7 7.008 7.008 0 0 0 7-7Zm-7 5a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"></path>
              <path d="M51.293 36.293 48 39.586l-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 1.414 0l4-4zM32 53a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM29 5h6v2h-6z"></path>
              <path d="M61 24H51V7a5.006 5.006 0 0 0-5-5H18a5.006 5.006 0 0 0-5 5v5H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h10v21a5.006 5.006 0 0 0 5 5h28a5.006 5.006 0 0 0 5-5v-9h10a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1Zm-1 6H38v-4h22ZM18 4h28a3 3 0 0 1 3 3v1H15V7a3 3 0 0 1 3-3Zm8 10v4H4v-4ZM4 20h22v14H4Zm42 40H18a3 3 0 0 1-3-3v-5h34v5a3 3 0 0 1-3 3Zm3-10H15V36h12a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H15v-2h34v14H37a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h12Zm0-4H38V32h22v14Z"></path>
              <path d="M39 27h2v2h-2zM42 27h2v2h-2zM45 27h2v2h-2zM9.143 21.485l-3 5a1 1 0 0 0 0 1.03l3 5 1.714-1.03L8.166 27l2.691-4.485zm11.714 0-1.714 1.03L21.834 27l-2.691 4.485 1.714 1.03 3-5a1 1 0 0 0 0-1.03zM12.073 31.63l3.997-10.002 1.857.743-3.997 10zM5 15h2v2H5zM8 15h2v2H8zM11 15h2v2h-2zM30 14h2v2h-2zM34 14h4v2h-4zM47 16v-2h-7v2h7zM30 18h4v2h-4zM36 18h2v2h-2zM40 18h7v2h-7zM18 40h6v2h-6zM26 40h6v2h-6zM20 44h2v2h-2zM24 44h4v2h-4zM30 44h2v2h-2z"></path>
            </svg>
          }
        />
        <ServicesCard
          judul={'UI Design'}
          description={'Intuitive, easy to use, and visually appealing for the user'}
          logo={
            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 64 64" id="mobile-development" className="absolute z-10">
              <path d="M56 39a7 7 0 1 0-7 7 7.008 7.008 0 0 0 7-7Zm-7 5a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"></path>
              <path d="M51.293 36.293 48 39.586l-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 1.414 0l4-4zM32 53a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM29 5h6v2h-6z"></path>
              <path d="M61 24H51V7a5.006 5.006 0 0 0-5-5H18a5.006 5.006 0 0 0-5 5v5H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h10v21a5.006 5.006 0 0 0 5 5h28a5.006 5.006 0 0 0 5-5v-9h10a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1Zm-1 6H38v-4h22ZM18 4h28a3 3 0 0 1 3 3v1H15V7a3 3 0 0 1 3-3Zm8 10v4H4v-4ZM4 20h22v14H4Zm42 40H18a3 3 0 0 1-3-3v-5h34v5a3 3 0 0 1-3 3Zm3-10H15V36h12a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H15v-2h34v14H37a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h12Zm0-4H38V32h22v14Z"></path>
              <path d="M39 27h2v2h-2zM42 27h2v2h-2zM45 27h2v2h-2zM9.143 21.485l-3 5a1 1 0 0 0 0 1.03l3 5 1.714-1.03L8.166 27l2.691-4.485zm11.714 0-1.714 1.03L21.834 27l-2.691 4.485 1.714 1.03 3-5a1 1 0 0 0 0-1.03zM12.073 31.63l3.997-10.002 1.857.743-3.997 10zM5 15h2v2H5zM8 15h2v2H8zM11 15h2v2h-2zM30 14h2v2h-2zM34 14h4v2h-4zM47 16v-2h-7v2h7zM30 18h4v2h-4zM36 18h2v2h-2zM40 18h7v2h-7zM18 40h6v2h-6zM26 40h6v2h-6zM20 44h2v2h-2zM24 44h4v2h-4zM30 44h2v2h-2z"></path>
            </svg>
          }
        />
      </div>
    </div>
  );
}
