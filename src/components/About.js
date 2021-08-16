import React from "react"
import AboutImage from "./assets/svgs/portrait.svg"

function About() {
    return (
        <div className=" flex flex-col justify-center items-center p-20 sm:p-10 space-y-32">
            
            <div className=" flex flex-col justify-center items-center space-y-2">
                
                <div className=" text-gray-800 dark:text-gray-100 font-semibold text-3xl">About Me</div>
                
                <div className=" text-gray-600 dark:text-gray-500 font-medium">My introduction</div>


            </div>
            
            
            <div className=" flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-20 lg:space-x-40">

                <img className=" flex w-48 sm:w-72" src={AboutImage} alt=""/>
                
                <div className=" flex flex-col justify-center items-center max-w-md space-y-10" >
                    <div className=" dark:text-gray-400">
                        Current undergraduate student in applied information 
                        technology with dozens of classroom hours in 
                        software engineering and system development related
                        courses. Seeking to utilize my skills and 
                        gain further experience.
                    </div>
                        
                    <div className=" flex flex-row font-semibold items-start space-x-10 ">
                        
                        <div className=" flex flex-col justify-center items-center">
                            <div className="text-gray-700 dark:text-white text-3xl">03+</div>
                            
                            <div className=" dark:text-gray-400 max-w-min font-normal justify-center items-center self-center text-center">
                                Years of experience
                            </div>
                        </div>
                        
                        <div className=" flex flex-col justify-center items-center">
                            <div className="text-gray-700 dark:text-white text-3xl">02</div>
                            <div className=" dark:text-gray-400 max-w-min font-normal justify-center items-center self-center text-center">
                                Completed Projects
                            </div>
                        </div>
                        
                        <div className=" flex flex-col justify-center items-center">
                            <div className="text-gray-700 dark:text-white text-3xl">04+</div>
                            <div className="dark:text-gray-400 max-w-min font-normal justify-center items-center self-center text-center">
                                Years of continuous development
                            </div>
                        </div>
                        
                        

                    </div>
                    
                    <button className="flex text-white bg-blue-600 w-max items-center space-x-2 justify-evenly p-3 rounded-2xl md:self-start">
                        <div>Download CV</div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="34.462" height="28" viewBox="0 0 34.462 28">
                            <g id="download" transform="translate(0 -2.25)">
                                <path id="Path_13" data-name="Path 13" d="M1.077,18a1.077,1.077,0,0,1,1.077,1.077v7.538a2.154,2.154,0,0,0,2.154,2.154H30.154a2.154,2.154,0,0,0,2.154-2.154V19.077a1.077,1.077,0,1,1,2.154,0v7.538a4.308,4.308,0,0,1-4.308,4.308H4.308A4.308,4.308,0,0,1,0,26.615V19.077A1.077,1.077,0,0,1,1.077,18Z" transform="translate(0 -0.673)" fill="#f8f8f8" fillRule="evenodd"/>
                                <path id="Path_14" data-name="Path 14" d="M11.236,16.861a1.077,1.077,0,0,1,1.523,0L17.7,21.8l4.939-4.939a1.077,1.077,0,1,1,1.523,1.523l-5.7,5.7a1.077,1.077,0,0,1-1.525,0l-5.7-5.7a1.077,1.077,0,0,1,0-1.523Z" transform="translate(-0.467 -0.611)" fill="#f8f8f8" fillRule="evenodd"/>
                                <path id="Path_15" data-name="Path 15" d="M17.952,2.25a1.077,1.077,0,0,1,1.077,1.077V20.558a1.077,1.077,0,0,1-2.154,0V3.327A1.077,1.077,0,0,1,17.952,2.25Z" transform="translate(-0.721)" fill="#f8f8f8" fillRule="evenodd"/>
                            </g>
                        </svg>

                    </button>
                </div>
            </div>

        </div>
    )
}

export default About
