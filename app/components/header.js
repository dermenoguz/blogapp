import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
     <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img  width={23} src= "/logo.svg" alt=""/>
            <span className="ml-3 text-xl">Blogs</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900">Anasayfa</a>
          <a href="/icerik" className="mr-5 hover:text-gray-900">İçerik</a>
          <a href="/contact" className="mr-5 hover:text-gray-900">Contact</a>
            </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  </div>
      </section>
    </div>
  )  
}

export default Header
