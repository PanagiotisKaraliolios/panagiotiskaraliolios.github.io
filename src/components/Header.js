import Navigation from "./Navigation";

function Header() {
    
    return (
        <div className="hidden sm:flex bg-gray-100 dark:bg-indigo-1000 justify-around top-0 sticky z-50 p-8 shadow-xl">
            
            
            {/* Left */}
            

            <div className="transform hover:-rotate-12 transition duration-500 ease-in-out flex
            cursor-pointer text-blue-600 dark:text-blue-500 font-medium text-2xl 2xl:text-4xl">
                Panos
            </div>
            
            {/* Right */}

            <Navigation/>

            
            
        </div>
    )
}

export default Header
