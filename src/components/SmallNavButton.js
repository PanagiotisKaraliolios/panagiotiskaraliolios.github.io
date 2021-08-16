import React from 'react'
import PropTypes from 'prop-types'

function SmallNavButton({Text, Icon}) {
    return (
        <div className=" cursor-pointer flex flex-col m-5 justify-center items-center text-black  dark:text-gray-100">
            {Icon}
            {Text}
        </div>
    )
}

SmallNavButton.propTypes = {
    Text: PropTypes.string.isRequired,
    Icon: PropTypes.object.isRequired
}

export default SmallNavButton

