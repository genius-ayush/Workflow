import React from 'react'

function page() {
  return (
    <div className="bg-gradient-to-b from-white to-[#B0A3FF] " >
      
      <section className="text-center font-sans">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                Welcome to <span className="text-[#4534AC]"> Workflow</span> !
              </h1>
              <form  className="space-y-4 md:space-y-6" action="#">
              

                <div className='text-left'>
                  <input  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="Email" />    
                </div>

                <div className='text-left'>
                  <input  type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="Password" />    
                </div> 

                <button type="submit" className="w-full text-white bg-[#39299B] hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign up</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="/signup" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Signup</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page