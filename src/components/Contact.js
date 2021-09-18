/* eslint-disable no-unused-vars */
import React from "react"


function About() {
    
    

    return (
        <div id="Contact Me" className=" flex flex-col justify-center items-center p-20 sm:p-10 space-y-32 sm:my-20">
            
            <div className=" flex flex-col justify-center items-center space-y-2">
                
                <div className=" text-gray-800 dark:text-gray-100 font-semibold text-3xl">Contact</div>
                
                <div className=" text-gray-600 dark:text-gray-500 font-medium">Get in touch</div>


            </div>
            
            
            <div className=" flex flex-col lg:flex-row  justify-center items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-40">

                <div className="space-y-5">
                    <div className="flex items-center space-x-5 flex-wrap">
                        <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="36.737" height="36.733" viewBox="0 0 36.737 36.733">
                            <path id="Path_62" data-name="Path 62" d="M9.512,4.173a1.558,1.558,0,0,0-2.329-.145L4.807,6.4a3.925,3.925,0,0,0-1.031,4.06,40.333,40.333,0,0,0,9.569,15.175,40.337,40.337,0,0,0,15.174,9.568,3.929,3.929,0,0,0,4.06-1.031L34.955,31.8a1.558,1.558,0,0,0-.147-2.329l-5.294-4.119a1.558,1.558,0,0,0-1.332-.282l-5.025,1.256a4.006,4.006,0,0,1-3.806-1.054l-5.638-5.64a4.006,4.006,0,0,1-1.054-3.806L13.915,10.8a1.558,1.558,0,0,0-.282-1.332ZM5.453,2.3a4.006,4.006,0,0,1,5.995.374l4.116,5.294a4,4,0,0,1,.725,3.429l-1.256,5.027a1.558,1.558,0,0,0,.409,1.479l5.642,5.638a1.558,1.558,0,0,0,1.479.409l5.025-1.256a4.006,4.006,0,0,1,3.431.725l5.294,4.116a4.006,4.006,0,0,1,.374,5.995l-2.376,2.376a6.381,6.381,0,0,1-6.6,1.612A42.782,42.782,0,0,1,11.615,27.371,42.782,42.782,0,0,1,1.466,11.279,6.383,6.383,0,0,1,3.078,4.671L5.454,2.3Z" transform="translate(-1.124 -1.128)" fill="" fillRule="evenodd"/>
                        </svg>

                        <div>
                            <div className=" font-semibold text-gray-800 dark:text-gray-100 text-xl">Call Me</div>
                            <div className="text-gray-600 dark:text-gray-500">(030) 697-706-3043</div>
                        </div>

                    </div>
                    <div className="flex items-center space-x-5">
                        <svg className="stroke-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="38.754" height="38.767" viewBox="0 0 38.754 38.767">
                            <g id="Group_42" data-name="Group 42" transform="translate(1.017 1.024)">
                                <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="7.012" cy="7.012" rx="7.012" ry="7.012" transform="translate(11.254 11.548)" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                <path id="Path_69" data-name="Path 69" d="M60.505,65.659a18.367,18.367,0,1,1,8.211-15.305c0,4.226-1.531,7.653-5.357,7.653S58,54.58,58,50.354V42.7" transform="translate(-31.979 -31.986)" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            </g>
                        </svg>



                        <div>
                            <div className=" font-semibold text-gray-800 dark:text-gray-100 text-xl">Email</div>
                            <div className="text-gray-600 dark:text-gray-500">karaliolios.panagiotis@gmail.com</div>
                        </div>

                    </div>
                    <div className="flex items-center space-x-5">
                        <svg className="stroke-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="38.737" height="45.834" viewBox="0 0 38.737 45.834">
                            <g id="Group_40" data-name="Group 40" transform="translate(1 1)">
                                <path id="Path_66" data-name="Path 66" d="M.739,19.045a18.369,18.369,0,1,1,36.737.125v.208c-.125,6.594-3.807,12.69-8.321,17.453A48.294,48.294,0,0,1,20.564,43.9a2.226,2.226,0,0,1-2.912,0A47.408,47.408,0,0,1,5.565,32.588,23.507,23.507,0,0,1,.739,19.108Z" transform="translate(-0.739 -0.739)" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd"/>
                                <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="5.887" cy="5.887" rx="5.887" ry="5.887" transform="translate(12.48 12.772)" fill="none" stroke="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            </g>
                        </svg>


                        <div>
                            <div className=" font-semibold text-gray-800 dark:text-gray-100 text-xl">Location</div>
                            <div className="text-gray-600 dark:text-gray-500">Thessaloniki, Greece</div>
                        </div>

                    </div>
                    
                </div>
                
                <form  action="https://usebasin.com/f/ebda1613d88c" encType="multipart/form-data" method="POST" className=" flex flex-col justify-center items-center  space-y-10 w-full" >
                    
                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 w-full">
                        <input required id="name" name="name" placeholder="Name" className=" placeholder-gray-900 resize-none p-3 bg-gray-400 rounded-lg outline-none"/>
                        <input required id="email" type="email" name="email" placeholder="Email" className=" placeholder-gray-900 resize-none p-3 bg-gray-400 rounded-lg outline-none"/>
                    </div>
                    
                    <div className="flex flex-col space-y-5 w-full">
                        
                        <textarea required id="subject" name="subject" placeholder="What is the project about" className=" placeholder-gray-900 resize-none p-3 bg-gray-400 rounded-lg h-24 outline-none"/>
                        <textarea required id="message" name="message" placeholder="Additional information" className=" placeholder-gray-900 resize-none p-3 bg-gray-400 rounded-lg h-52 outline-none"/>
                    </div>
                    
                    
                    <button type="submit" className="flex text-white bg-blue-600 w-max items-center space-x-2 justify-evenly p-3 rounded-2xl md:self-start">
                        <div>Send message</div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.032" height="26.995" viewBox="0 0 27.032 26.995">
                            <path id="send-filled" d="M30.881,17,6.131,4.624a1.114,1.114,0,0,0-1.586,1.26L7.526,16.875H20.25v2.25L7.526,19.86,4.5,30.082a1.145,1.145,0,0,0,1.631,1.294l14.994-7.5L30.881,19a1.125,1.125,0,0,0,0-2Z" transform="translate(-4.461 -4.505)" fill="#f8f8f8"/>
                        </svg>
                    </button>
                    
                    
                </form>
            </div>

        </div>
    )
}

export default About
