import React from 'react'

function Aboutme() {
  return (
    <div className='h[90vh]  bg-[#CDEA68] rounded-3xl py-10 text-black max-md:rounded-none'>
        <div className="text-5xl font-bold p-10 max-md:p-5 gap-2">
            <h1 className='text-5xl max-md:text-[5vh]'>About me :</h1>
            <div className="read flex items-center justify-center w-[26vh] max-md:w-40 max-md:h-12 text-2xl max-md:text-[18px] bg-gray-950 mt-6 text-white px-5 py-4 gap-4 rounded-full">
                <h1 className=''>Read more</h1>
                <div className="circle bg-white w-[12px] h-[12px] rounded-full"></div>
            </div>
        </div>  
        <div className="flex border-y-[1px] h-[55vh] border-[#8a9b4c] ">
            <div className="text w-1/2 p-10  h-full">s</div>
            <div className="pic  w-1/2 p-10 h-full ">
                <div className="bg-cover bg-[url('public/Top-Viewbbcbv-1-1440x921.jpg')]"></div>
            </div>
        </div>
    </div>
  )
}

export default Aboutme