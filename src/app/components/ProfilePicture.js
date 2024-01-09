import React from 'react'

const ProfilePicture = () => {
    return (
        <div className='flex items-center'>
            <div className='rounded'
                style={{
                    height: 39,
                    width: 39,
                    backgroundColor: "white",
                    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1682339458660-bc746ad86023?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                    backgroundSize: "cover",
                }}>

            </div>
            <div className='ml-12px'>
                <div className='text-15 font-medium'>Nishyan</div>
                <div className='underline text-13 cursor-pointer'>Visit Store</div>
            </div>
        </div>
    )
}

export default ProfilePicture