import React from 'react';

const Contacts = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-[#0e1825] via-[#1b2a3a] to-[#163040] min-h-screen text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto bg-[#0f1c2a]/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-16">
        <div className="md:flex md:justify-between md:items-start gap-12">
         
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h3 className="text-4xl font-bold font-serif text-white mb-4">
              <span className="text-[#2eb2d3]">Quick</span> Contact
            </h3>
            <p className="text-5xl leading-tight font-extrabold font-serif">
              Leave a <br /> Message
            </p>
            <p className="mt-6 text-gray-300 md:w-[24rem] font-serif">
              Please feel free to reach out. We're here to help with anything you need — let’s talk.
            </p>
          </div>

         
          <div className="md:w-1/2">
            <form>
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full py-3 px-5 bg-[#1e2a3a] placeholder-gray-400 text-white rounded-xl border border-transparent focus:border-[#2eb2d3] focus:ring-2 focus:ring-[#2eb2d3] outline-none"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full py-3 px-5 bg-[#1e2a3a] placeholder-gray-400 text-white rounded-xl border border-transparent focus:border-[#2eb2d3] focus:ring-2 focus:ring-[#2eb2d3] outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full py-3 px-5 bg-[#1e2a3a] placeholder-gray-400 text-white rounded-xl border border-transparent focus:border-[#2eb2d3] focus:ring-2 focus:ring-[#2eb2d3] outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#2eb2d3] hover:bg-[#239bb9] text-[#0e1825] font-bold py-3 rounded-xl transition-all duration-300"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
