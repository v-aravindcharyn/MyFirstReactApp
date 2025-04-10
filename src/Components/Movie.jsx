import React, { useState } from 'react'
function Movie(object) {
    const [selectedInfo, setSelectedInfo] = useState(null);

    const handleClick = () => {
        setSelectedInfo(object);
    };

    return (
        <div className='movie'>
            <div onClick={handleClick} style={{ cursor: 'pointer', textAlign: 'center' }}>
                <img height='300' width='300' src={object.url} alt='SQUID GAME' />
                <h2>{object.title}</h2>
            </div>

            {selectedInfo && (
                <div style={{ marginTop: "20px" }}>
                    <h3>{selectedInfo.title}</h3>
                    <p>This is some more info about {selectedInfo.title}</p>
                </div>
            )}
        </div>
    )
}
export default Movie
