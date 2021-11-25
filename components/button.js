import React, { useState } from 'react';

export default function Button() {

    const handleClick = () => {
        alert('clicked it')
    }

    return (
        <button onClick={handleClick}>Example Button</button>
    );
}