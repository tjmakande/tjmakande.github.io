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
            className={redirectTo === 'Contact' ? 'Applink Contactbtn' : 'Applink'}
            left={redirectTo === 'About Me' || redirectTo === 'Home'} 
            top={redirectTo === "Works" || redirectTo === "Home"}
        >
            {
                redirectTo === 'Contact' ? (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a style={{cursor: 'none'}}>{redirectTo}</a>
                ) : (<Link style={{cursor: 'none'}} to={url} reloadDocument>
                {redirectTo}
            </Link>)
            }
            
        </Wrapper>
    )
};

export default AppLink;