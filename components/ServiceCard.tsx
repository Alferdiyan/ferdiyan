import React from 'react';

interface Props {
  judul: string;
  description: string;
  logo: SVGAElement;
}

export default function ServiceCard({ judul, description, logo }: Props) {
  return (
    <div className=" border border-stone-800 rounded-lg hover:bg-slate-600 h-80 w-80  flex flex-col bg-stone-700  justify-center items-center p-5">
      <div>
        <div className="relative flex justify-center items-center ">
          <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="absolute z-0">
            <path
              stroke="none"
              strokeWidth={0}
              fill="#f5f5f5"
              d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
            />
          </svg>
          {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 64 64"
                        id="mobile-development"
                        className="absolute z-10"
                    >
                        <path d="M56 39a7 7 0 1 0-7 7 7.008 7.008 0 0 0 7-7Zm-7 5a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"></path>
                        <path d="M51.293 36.293 48 39.586l-1.293-1.293-1.414 1.414 2 2a1 1 0 0 0 1.414 0l4-4zM32 53a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM29 5h6v2h-6z"></path>
                        <path d="M61 24H51V7a5.006 5.006 0 0 0-5-5H18a5.006 5.006 0 0 0-5 5v5H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h10v21a5.006 5.006 0 0 0 5 5h28a5.006 5.006 0 0 0 5-5v-9h10a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1Zm-1 6H38v-4h22ZM18 4h28a3 3 0 0 1 3 3v1H15V7a3 3 0 0 1 3-3Zm8 10v4H4v-4ZM4 20h22v14H4Zm42 40H18a3 3 0 0 1-3-3v-5h34v5a3 3 0 0 1-3 3Zm3-10H15V36h12a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H15v-2h34v14H37a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h12Zm0-4H38V32h22v14Z"></path>
                        <path d="M39 27h2v2h-2zM42 27h2v2h-2zM45 27h2v2h-2zM9.143 21.485l-3 5a1 1 0 0 0 0 1.03l3 5 1.714-1.03L8.166 27l2.691-4.485zm11.714 0-1.714 1.03L21.834 27l-2.691 4.485 1.714 1.03 3-5a1 1 0 0 0 0-1.03zM12.073 31.63l3.997-10.002 1.857.743-3.997 10zM5 15h2v2H5zM8 15h2v2H8zM11 15h2v2h-2zM30 14h2v2h-2zM34 14h4v2h-4zM47 16v-2h-7v2h7zM30 18h4v2h-4zM36 18h2v2h-2zM40 18h7v2h-7zM18 40h6v2h-6zM26 40h6v2h-6zM20 44h2v2h-2zM24 44h4v2h-4zM30 44h2v2h-2z"></path>
                    </svg> */}
          {logo}
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-lg relative">{judul}</h1>
      <p className="text-xs relative text-center">{description}</p>
    </div>
  );
}
