import React from 'react';



const rank = ({ name, entries }) => {
    return (
        <div>
            <div className="white f3">
                vignesh, your current entry count is...
            </div>
            <div className="white f1">
                {entries}
            </div>
        </div>
    );
}

export default rank;