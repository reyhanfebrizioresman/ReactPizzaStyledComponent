import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    max-width: 1300px;
`;

export const FooterSocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
    
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 6rem;
    @media screen and ( max-width:820px) {
        flex-direction: column;
    }
`;

export const SocialMediaLogo = styled(Link)`
    text-decoration: none;
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    width: 200px;

    @media screen and (max-width: 840px) {
        margin-top: 20px;
        width: 250px;
    }
    
`;

export const SocialIconLinks = styled.a`
    color: #fff;
    font-size: 1.4rem;
`;  