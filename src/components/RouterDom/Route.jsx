import React, { useEffect } from 'react';

function Route({ path, element }) {

    return (
        <div>
            {
                window.Location.pathname === path && element
            }
        </div>
    );
}

export default Route;