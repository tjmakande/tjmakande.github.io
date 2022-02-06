import React from 'react';
import styled from 'styled-components';
import TextLink from '../TextLink';

const EmailLink = () => (
    <Text>
        <TextLink href="#"> Hello@example.com</TextLink>
    </Text>
)
export default EmailLink;

const Text = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
`;