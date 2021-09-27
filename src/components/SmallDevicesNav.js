/* eslint-disable no-unused-vars */
import React from "react";
import SmallNavButton from "./SmallNavButton";



function SmallDevicesNav() {


    return (

        
        <div id="nav" className=" grid sm:hidden grid-cols-3 p-6 rounded-t-3xl bg-white dark:bg-indigo-900 z-50 fixed w-screen shadow-xlupper transition-all duration-500 opacity-0 -bottom-full " >

            <SmallNavButton Text={"Home"}
             Icon={<svg className=" fill-current text-black dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" width="31.881" height="32.001" viewBox="0 0 31.881 32.001">
                    <g id="home-line" transform="translate(-2.06 -1.999)">
                        <path id="Path_82" data-name="Path 82" d="M33.71,17.29l-15-15a1,1,0,0,0-1.41,0l-15,15A1,1,0,0,0,3.71,18.7L18,4.41l14.29,14.3A1,1,0,0,0,33.7,17.3Z"/>
                        <path id="Path_83" data-name="Path 83" d="M28,32H23V22H13V32H8V18L6,20V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76l-2-2Z"/>
                    </g>
                    </svg>
                }/>
            
            <SmallNavButton Text={"About"}
            Icon={<svg className=" fill-current text-black dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g id="person" transform="translate(-4.5 -4.5)">
                        <path id="Path_84" data-name="Path 84" d="M33.833,36.5A2.612,2.612,0,0,0,36.5,33.833c0-2.667-2.667-10.667-16-10.667s-16,8-16,10.667A2.612,2.612,0,0,0,7.167,36.5ZM7.18,33.983v0Zm.045-.149H33.774l.038-.006.021-.006a7.12,7.12,0,0,0-2.219-4.437C29.876,27.647,26.6,25.833,20.5,25.833s-9.376,1.813-11.115,3.552a7.14,7.14,0,0,0-2.219,4.437Zm26.6.149v0ZM20.5,17.833A5.333,5.333,0,1,0,15.167,12.5,5.333,5.333,0,0,0,20.5,17.833Zm8-5.333a8,8,0,1,1-8-8A8,8,0,0,1,28.5,12.5Z" fillRule="evenodd"/>
                        </g>
                    </svg>
                    
                }/>
            
            <SmallNavButton Text={"Skills"}
             Icon={<svg className=" fill-current text-black dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" width="22.858" height="32.001" viewBox="0 0 22.858 32.001">
                        <g id="document" transform="translate(-6.75 -2.251)">
                        <path id="Path_85" data-name="Path 85" d="M29.264,10.594l-8-8a1.037,1.037,0,0,0-.8-.342H9.036A2.292,2.292,0,0,0,6.75,4.537V31.966a2.292,2.292,0,0,0,2.286,2.286H27.322a2.292,2.292,0,0,0,2.286-2.286V11.393a1.039,1.039,0,0,0-.342-.8Zm-8.8-5.6,6.4,6.4h-6.4Zm6.857,26.972H9.036V4.536h9.143v6.857a2.292,2.292,0,0,0,2.286,2.286h6.857Z" transform="translate(0)"/>
                        <path id="Path_86" data-name="Path 86" d="M11.25,24.75H24.965v2.286H11.25Z" transform="translate(0.072 0.358)"/>
                        <path id="Path_87" data-name="Path 87" d="M11.25,18H24.965v2.286H11.25Z" transform="translate(0.072 0.25)"/>
                        </g>
                    </svg>
           
                }/>
            
            <SmallNavButton Text={"Services"}
             Icon={<svg className=" fill-current text-black dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" width="32.016" height="32.001" viewBox="0 0 32.016 32.001">
                        <path id="briefcase" d="M31.521,7.516H24.628V1.125H9.688V7.516H2.811A1.656,1.656,0,0,0,1.158,9.171v22.3a1.656,1.656,0,0,0,1.653,1.653H31.52a1.656,1.656,0,0,0,1.654-1.654V9.171A1.656,1.656,0,0,0,31.52,7.516Zm-19.7-4.255H22.492V7.516H11.824ZM30.935,9.755v5.36l-3.55,3.55h-9.1V15.547H16.046v3.12h-9.1L3.4,15.116V9.755ZM3.4,30.887v-12.6L6.02,20.905H16.046v3.153h2.239V20.905H28.311l2.623-2.623v12.6Z" transform="translate(-1.158 -1.125)"/>
                    </svg>
           
                }/>
            
            <SmallNavButton Text={"Contact Me"}
             Icon={<svg className=" stroke-current text-black dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" width="34.053" height="34.034" viewBox="0 0 34.053 34.034">
                        <path id="send-filled" d="M35.779,19.315,6.441,4.646A1.32,1.32,0,0,0,4.561,6.14L8.094,19.168H23.177v2.667l-15.083.871L4.507,34.824a1.358,1.358,0,0,0,1.933,1.534l17.774-8.887,11.565-5.782a1.334,1.334,0,0,0,0-2.373Z" transform="translate(-3.451 -3.472)" fill="none" stroke="" strokeWidth="2"/>
                    </svg>
           
           
                }/>
            
            <button className="flex justify-center content-center" onClick={() => { window.document.getElementById('nav').style.bottom='-100%'
                                                                                    window.document.getElementById('nav').style.opacity='0'
                                                                                    }}> 
                <svg className=" self-center fill-current text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="18.004" height="18.003" viewBox="0 0 18.004 18.003">
                    <g id="x" transform="translate(-8.998 -8.998)">
                        <path id="Path_88" data-name="Path 88" d="M26.671,9.329a1.125,1.125,0,0,1,0,1.593l-15.75,15.75a1.126,1.126,0,0,1-1.593-1.593l15.75-15.75a1.125,1.125,0,0,1,1.593,0Z" fill="" fillRule="evenodd"/>
                        <path id="Path_89" data-name="Path 89" d="M9.329,9.329a1.125,1.125,0,0,0,0,1.593l15.75,15.75a1.126,1.126,0,0,0,1.593-1.593L10.922,9.329a1.125,1.125,0,0,0-1.593,0Z" fill="" fillRule="evenodd"/>
                    </g>
                </svg>
            </button>
            
        </div>
    )
}




export default SmallDevicesNav
