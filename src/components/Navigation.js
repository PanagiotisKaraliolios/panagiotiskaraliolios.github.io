import HeaderButton from "./HeaderButton"
import sun from "./assets/svgs/sunny-outline.svg"
import moon from "./assets/svgs/moon.svg"
import DarkModeHook from "./DarkModeHook";

function Navigation() {
    const [colorTheme, setTheme] = DarkModeHook();
    return (
        
            <div className="flex">
                <div className="flex space-x-6 2xl:text-xl">
                    <HeaderButton Text={"Home"}/>
                    <HeaderButton Text={"About"}/>
                    <HeaderButton Text={"Skills"}/>
                    <HeaderButton Text={"Services"}/>
                    <HeaderButton Text={"Contact Me"}/>

                    
                    <button onClick={() => setTheme(colorTheme)} className=" w-7 2xl:w-12">
                    {colorTheme === "dark"?(
                            <img src={moon} alt=""/>
                            
                        ):(
                            <img src={sun} alt=""/>
                        )}
                    </button>
                    
                    
                </div>
                

            </div>
        
    )
}

export default Navigation
