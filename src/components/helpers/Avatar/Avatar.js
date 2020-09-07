import React from 'react';

const Avatar = ({ imageUrl, size }) => {
    return (
        <div className="tc">
        <img
            src={imageUrl || "https://i.ytimg.com/vi/p5Vsg1CrhrI/hqdefault.jpg"}
            className="br4 dib" alt="avatar"
            style={{
                objectFit: 'cover',
                height: size,
                width: size
            }}
        />
        </div>
    )
}

export default Avatar;