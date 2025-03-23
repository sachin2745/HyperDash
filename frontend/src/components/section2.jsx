import React from 'react'

const Section2 = () => {
  return (
    <>
    <section className="relative h-[40vh] sm:h-screen w-full font-Poppins bg-[url('/HeroImage.png')] bg-cover bg-center">
     
     <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2">
       <button
         className="bg-transparent border-2 border-white text-white px-3.5 py-1.5 rounded-none text-xs sm:text-sm font-normal transition duration-300 hover:bg-white hover:text-black"
       >
         Test Drive
       </button>
     </div>
   </section>
   </>
  )
}

export default Section2