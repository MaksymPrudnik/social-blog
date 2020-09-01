import React from 'react';

const Avatar = ({ imageUrl, size }) => {
    return (
        <div class="tc">
        <img
            src={imageUrl || "http://tachyons.io/img/logo.jpg"}
            class="br4 dib" alt="avatar"
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