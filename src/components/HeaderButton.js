
function HeaderButton({Text}) {
    return (
        <div className="flex rounded-b-md items-center cursor-pointer font-medium
         text-gray-700 active:border-b-2 active:border-blue-600 hover:text-blue-600
         dark:text-gray-300 dark:hover:text-blue-500 dark:active:border-blu-500">
            {Text}
        </div>
    )
}


export default HeaderButton

