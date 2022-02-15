import React from 'react';

import Wrapper from './styled/Wrapper';
import Line from './styled/Line';
const Navigation = () => {
    return(
        <Wrapper onClick={() => alert('This is the navigation!!')}>
            <Line width={60} />
            <Line width={100} />
            <Line width={75} />
        </Wrapper>
    )
}

export default Navigation;