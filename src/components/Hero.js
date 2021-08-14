
import heroImage from "./assets/svgs/Profile_Picture (2).svg"

function Hero() {
  return (
    <div>
        
        <div className="flex sm:flex-row justify-center sm:items-center sm:justify-around p-20 sm:p-10 flex-wrap sm:flex-nowrap">

            

            <div className="flex flex-col pt-12 pr-20 sm:p-10 order-1 sm:order-none">
                
                <a className=" w-max pb-4" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/panagiotis-karaliolios/">
                <svg className="stroke-current text-blue-500 " xmlns="http://www.w3.org/2000/svg" width="34.961" height="33.508" viewBox="0 0 34.961 33.508">
                    <path id="linkedin" d="M7.482,31.508V10.25H.417V31.508ZM3.95,7.345A3.684,3.684,0,1,0,4,0,3.682,3.682,0,1,0,3.9,7.345H3.95Zm7.443,24.163h7.066V19.636a4.837,4.837,0,0,1,.233-1.724,3.868,3.868,0,0,1,3.625-2.584c2.557,0,3.579,1.949,3.579,4.807V31.508h7.066V19.318c0-6.53-3.486-9.568-8.135-9.568a7.037,7.037,0,0,0-6.415,3.581h.048V10.249H11.394c.092,1.995,0,21.258,0,21.258Z" transform="translate(1 1)" fill="none" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                </a>
                
                <a className="w-max" target="_blank" rel="noreferrer" href="https://github.com/PanagiotisKaraliolios">
                    <svg className="stroke-current text-blue-500 " xmlns="http://www.w3.org/2000/svg" width="35.174" height="37.585" viewBox="0 0 35.174 37.585">
                        <path id="Icon_feather-github" data-name="Icon feather-github" d="M14.832,31.931C6.381,34.467,6.381,27.705,3,26.86M26.665,37V30.46a5.7,5.7,0,0,0-1.589-4.412c5.308-.592,10.886-2.6,10.886-11.832a9.194,9.194,0,0,0-2.534-6.338,8.57,8.57,0,0,0-.153-6.374s-1.995-.592-6.609,2.5a22.617,22.617,0,0,0-11.832,0c-4.615-3.093-6.609-2.5-6.609-2.5a8.57,8.57,0,0,0-.152,6.373,9.2,9.2,0,0,0-2.535,6.389c0,9.162,5.578,11.173,10.886,11.832a5.7,5.7,0,0,0-1.589,4.361V37" transform="translate(-1.787 -0.417)" fill="none" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                </a>

            </div>

            <div className="flex flex-col justify-self-center max-w-xs justify-around order-5 sm:order-none space-y-4 pt-10">
                <div className=" text-4xl font-semibold text-gray-800 dark:text-gray-100">
                    Hi, I am Panos
                </div>
                <div className=" text-2xl font-medium text-gray-600 dark:text-gray-500">
                    Full Stack Developer
                </div>
                <div className="font-regular text-gray-600 dark:text-gray-500">
                    Web Design and application 
                    development experience, 
                    producing high quality work.
                </div>
                

            </div>

            <div className="order-2 sm:order-none w-48 sm:w-max">
                
                <img className="" src={heroImage} alt=""/>
            </div>

            
        </div>
        
    </div>
  );
}

export default Hero;
