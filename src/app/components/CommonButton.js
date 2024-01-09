import React from 'react'

const CommonButton = ({ text, image, height = 36, width = 137, extraClasses, imageBefore }) => {
    return (
        <div className={`cursor-pointer text-16 text-black30 border border-black85 flex items-center py-6px justify-between ${extraClasses}`}
            style={{ height: height, width: width, borderRadius: 4 }}>
            {imageBefore &&
                <img src={image} />
            }
            {text}
            {!imageBefore &&
                <img src={image} />
            }
        </div>
    )
}

export default CommonButton