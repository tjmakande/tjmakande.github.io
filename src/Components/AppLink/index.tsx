import React from 'react';
import Wrapper from './styled/Wrapper';
import {Link} from 'react-router-dom';


interface Props {
    url: string,
    redirectTo: string
    
}

const AppLink = (props: Props) => {
    const {url, redirectTo} = props;
    return(
        <Wrapper 
            left={redirectTo === 'About Me' || redirectTo === 'Home'} 
            top={redirectTo === "Works" || redirectTo === "Home"}
        >
            <Link to={url}>
                {redirectTo}
            </Link>
        </Wrapper>
    )
};

export default AppLink;