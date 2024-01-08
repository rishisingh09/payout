import React from 'react'

const SearchBar = ({ backgroundColor = "black95", placeholder, extraClasses, width = 344 }) => {
    return (
        <div>
            <div className={`${extraClasses} flex bg-${backgroundColor} px-16px py-9px`} style={{ borderRadius: 6 }}>
                <img src='/Search.svg' />
                <input style={{ width: width }} className={`text-15 ml-8px bg-${backgroundColor}`} placeholder={placeholder} />
            </div>
        </div>

    )
}

export default SearchBar