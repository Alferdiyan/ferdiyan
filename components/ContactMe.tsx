import React from 'react';
import ContactForm from './ContactForm';

export default function ContactMe() {
    return (
        <div className="m-20 h-screen">
            <div className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center m-10">
                <h1>Contact</h1>
            </div>
            <div className="m-10 p-5 flex flex-wrap ">
                <div className="w-full md:w-1/2 lg:w-1/2 flex flex-wrap justify-center items-center mb-4">
                    <div className="w-full   text-center">
                        <div className="items-center mb-2 text-white">
                            <p>Our Address</p>
                        </div>
                        <p className="ml-2 font-bold text-sm text-white">
                            Jl. Pandawa No. 146, Sukoharjo, Central Java,
                            Indonesia
                        </p>
                    </div>
                    <div className="w-full   text-center">
                        <div className="items-center mb-2 text-white">
                            <p>Email Us</p>
                        </div>
                        <p className="ml-2 font-bold text-sm text-white">
                            Ferdiyan.eka1@gmail.com
                        </p>
                    </div>
                    <div className="w-full   text-center">
                        <div className="items-center mb-2 text-white">
                            <p>Our Contact</p>
                        </div>
                        <p className="ml-2 font-bold text-sm text-white">
                            +62813 9295 5870
                        </p>
                    </div>
                </div>

                {/* contak form */}
                <div className="w-full  md:w-1/2 lg:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
