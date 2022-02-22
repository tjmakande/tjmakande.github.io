import React from 'react';

import Wrapper from './styled/Wrapper';
import Line from './styled/Line';
const Navigation = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <Wrapper ref={ref} onClick={() => alert('This is the navigation!!')}>
            <Line width={60} />
            <Line width={100} />
            <Line width={75} />
        </Wrapper>
    )
})

export default Navigation;