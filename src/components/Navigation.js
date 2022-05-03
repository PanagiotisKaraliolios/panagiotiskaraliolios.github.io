/* eslint-disable no-unused-vars */
import React from "react";
import HeaderButton from "./NavButton"


function Navigation() {

    const scrollToAbout = () => {
        window.document.getElementById("About").scrollIntoView({
          
          block: 'start',
          behavior: "smooth"
        });
      };
    
    return (
        
            <div className=" hidden sm:flex">
                <div className="flex space-x-6 2xl:text-xl">
                    <HeaderButton Text={"Home"}/>
                    <HeaderButton Text={"About"}/>
                    <HeaderButton Text={"Skills"}/>
                    <HeaderButton Text={"Services"}/>
                    <HeaderButton Text={"Contact Me"}/>

                </div>
                

            </div>
        
    )
}

export default Navigation
