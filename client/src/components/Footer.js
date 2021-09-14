import React from 'react'
import styled from 'styled-components';

 const Footer = () => {
    return (
        <FooterContainer>
            <span className="copyright" >
                &copy;{new Date().getFullYear()}All Rights Reserved. By Chamath
            </span>
        </FooterContainer>
    )
}

export default Footer;

//Footer container

const FooterContainer = styled.footer`
    background:#344;
    height:4rem;
    left:0;
    bottom:0;
    width:100%;

    .copyright{
        color:#fff;
        top:1.5rem;
        left:1rem;
        position:relative;
        padding-left:32rem;
    }
`;