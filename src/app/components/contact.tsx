import React from 'react'
import Link from 'next/link'
const Contact = () => {
  return (
    <div id='Contact' >
    
    
      <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900">
        Contact Me
      </h1>
 
    </div>
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1024.3170036086876!2d67.07861034634512!3d24.977297077597264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d24.97728605982293!2d67.07939279374793!5e0!3m2!1sen!2s!4v1714775087917!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-gray-300 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
           new karachi sector 11-f new karachi
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">wahabsurfali@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+923212147164</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mx-2">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600 mx-2">
        feel free to contact
      </p>
      <form   action="https://formspree.io/f/xvoejwzd"
  method="POST">
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600 mx-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         required
         />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600 mx-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
           />
      </div>
      <div className="relative mb-4">
        <label htmlFor="subject" className="leading-7 text-sm text-gray-600 mx-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
          />
      </div>
      <div className="relative mb-4 mx-2">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
          required
          />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-full text-lg">
        Send Message
      </button>
  </form>

    </div>
  </div>
  </div>
</section>

    </div>
  )
}

export default Contact
