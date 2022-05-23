import {Link} from 'react-router-dom';
import Wrapper from './styled/Wrapper';

interface Props {
    url: string;
    redirectTo: string;
}

const AppLink = ({url, redirectTo}: Props) => {
    return(
        <Wrapper
            className={redirectTo === 'Contact' ? 'Applink Contactbtn' : 'Applink'}
            left={redirectTo === 'Home'}
            top={redirectTo !== 'Contact'}
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
    );
};

export default AppLink;