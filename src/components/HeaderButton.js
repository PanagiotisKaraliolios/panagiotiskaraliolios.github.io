
function HeaderButton({Text}) {
    return (
        <div className="flex rounded-b-md items-center cursor-pointer font-medium text-gray-500 active:border-b-2 active:border-blue-500 hover:text-blue-600">
            {Text}
        </div>
    )
}


export default HeaderButton

