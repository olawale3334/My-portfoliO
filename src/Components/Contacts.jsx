import React from 'react'

const Contacts = () => {
  return (
    <div className='bg-gradient-to-br from-[#0e1825] via-[#1b2a3a] to-[#163040] text-white'>
       <div className='md:flex  justify-center items-start '> 
        <div className='p-6'> 
            <h3 className='font-bold font-serif text-3xl mb-3'> <span className='text-[#2eb2d3]'>Quick</span> Contact</h3>
            <p className='text-5xl font-serif leading-10 font-extrabold'>Leave a <br /> Message</p>
            <p className='md:w-[22rem] font-serif mt-5'>Please feel free to reach out. We're here to help with anything you need.</p>
        </div>
        <div>
            <form >
               <div className="md:w-[30rem]  p-6">
                    <div className="mb-5">
                        <input
                        type="text"
                        placeholder="Your name"
                        className="w-full py-2 px-4 shadow-lg border-transparent focus:border-[#2eb2d3] focus:ring-2 focus:ring-[#ade4f2] border rounded-xl"
                        />
                    </div>

                    <div className="mb-5">
                        <input
                        type="email"
                        placeholder="Your email"
                        className="w-full py-2 px-4 shadow-lg border-transparent focus:border-[#2eb2d3] focus:ring-2 focus:ring-[#ade4f2] border rounded-xl"
                        />
                    </div>

                    <div className="mb-5">
                        <textarea
                        placeholder="Your message"
                        className="w-full py-2 px-4 shadow-lg border-transparent focus:border-[#2eb2d3] focus:ring-2 focus:ring-[#ade4f2] border rounded-xl"
                        rows="4"
                        />
                    </div>
                    <div>
                        <button className='w-full bg-[#2eb2d3] py-3 rounded-xl  hover:bg-[#239bb9]'>SUBMIT</button>
                    </div>
                </div>

            </form>
        </div>
       </div>
    </div>
  )
}

export default Contacts
