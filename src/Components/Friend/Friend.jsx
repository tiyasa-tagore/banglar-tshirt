import React from 'react';

const Friend = (ring) => {
    return (
        <div>
            <h2>friend</h2>
            {{ring} && <p><small>Ring: Diamond</small></p>}
        </div>
    );
};

export default Friend;