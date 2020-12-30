import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
  import {
    FooterContainer,
    FooterWrapper,
    FooterSocialMedia,
    SocialMediaWrap,
    SocialMediaLogo,
    SocialIcons,
    SocialIconLinks
  } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterSocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to='/'>Pizza</SocialMediaLogo>
                        <SocialIcons >
                            <SocialIconLinks href="/" target="_blank" aria-label="Facebook" rel="noopenernoreferrer">
                                <FaFacebook />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" aria-label="Instagram" rel="noopenernoreferrer">
                                <FaInstagram />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" aria-label="Youtube" rel="noopenernoreferrer">
                                <FaYoutube />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" aria-label="Twitter" rel="noopenernoreferrer">
                                <FaTwitter />
                            </SocialIconLinks>
                        </SocialIcons>
                    </SocialMediaWrap>
                </FooterSocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
