import HeaderButton from "./HeaderButton"

function Header() {
    return (
        <div className="hidden sm:flex bg-gray-50 p-10 lg:px-32 xl:px-52 2xl:text-xl">
            {/* Left */}
            <div className="hover:rotate-180 transition duration-500 ease-in-outflex
            cursor-pointer text-blue-600 font-medium text-2xl 2xl:text-4xl">
                Panos
            </div>
            {/* Center */}
            <div className="flex justify-center flex-grow ">
                <div className="flex space-x-6">
                    <HeaderButton Text={"Home"}/>
                    <HeaderButton Text={"About"}/>
                    <HeaderButton Text={"Skills"}/>
                    <HeaderButton Text={"Services"}/>
                    <HeaderButton Text={"Contact Me"}/>
                </div>
                
            </div>
            {/* Right */}
            
            
        </div>
    )
}

export default Header
