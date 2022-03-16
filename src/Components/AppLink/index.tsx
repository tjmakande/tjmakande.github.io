import React from 'react';
import Wrapper from './styled/Wrapper';
import {Link} from 'react-router-dom';


interface Props {
    url: string,
    redirectTo: string,
}

const AppLink = ({url, redirectTo}: Props) => {
    return(
        <Wrapper 
            className={'Applink'}
            left={redirectTo === 'About Me' || redirectTo === 'Home'} 
            top={redirectTo === "Works" || redirectTo === "Home"}
        >
            <Link style={{cursor: 'none'}} to={url} reloadDocument>
                {redirectTo}
            </Link>
        </Wrapper>
    )
};

export default AppLink;