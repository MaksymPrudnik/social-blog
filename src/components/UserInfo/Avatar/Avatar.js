import React from 'react';

const Avatar = ({ imageUrl }) => {
    return (
        <div class="tc">
        <img
            src={imageUrl || "http://tachyons.io/img/logo.jpg"}
            class="br4 h4 w4 dib" alt="avatar"
            style={{objectFit: 'cover'}}
        />
        </div>
    )
}

export default Avatar;