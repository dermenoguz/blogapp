"use client"
import React, { useEffect, useState } from 'react';
import { fetchData } from '../data';

const Blog = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setBlogs(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
   
    getData();
  }, []); 


function formatImageUrl(url) {
  const baseUrl = "http://localhost:1337";
  return baseUrl + url;
}

 

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        {blogs.map(blog => ( 
          <div key={blog.id} className="lg:w-4/6 mx-auto mb-10">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src ={formatImageUrl(blog.attributes.photos.data.attributes.formats.thumbnail.url)}  />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src ={formatImageUrl(blog.attributes.profilephoto.data.attributes.formats.thumbnail.url)}  />                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{blog.attributes.username}</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{blog.attributes.description}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{blog.attributes.title}</h2>
                <p className="leading-relaxed text-lg mb-4">{blog.attributes.blog}</p>
                <a className="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
