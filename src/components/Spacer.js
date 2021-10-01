import React from 'react';

const Spacer = (props) => {
    return (
        <div className="spacer" style={{ display: 'block', height:props.pixels + 'px'}}></div>
    );
};

Spacer.defaultProps = {
    pixels: 40
};

export default Spacer;