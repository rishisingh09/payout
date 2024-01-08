import React from 'react'

const CommonButton = ({ text, image, height = 36, width = 137, extraClasses}) => {
    return (
        <div className={`text-16 text-black30 border border-black85 flex items-center py-6px justify-between ${extraClasses}`}
            style={{ height: height, width: width, borderRadius: 4 }}>
            {text}
            <img src={image} />
        </div>
    )
}

export default CommonButton