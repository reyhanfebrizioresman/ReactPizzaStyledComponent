import styled from 'styled-components';
import FeaturePic from '../../image/featured3.jpg';

export const FeatureContainer = styled.div`
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7) , rgba(0, 0, 0, 0.1)), url(${FeaturePic});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    h1{
        font-size: 3rem;
        color: #fff;
    }
    p{
        color: #fff;
    }
`;

export const FeatureButton = styled.div`
    margin-top: 1rem;
    border: none;
    background: #ffc500;
    padding: 0.8rem 3rem;
    font-size: 20px;
    transition: 0.2s ease-out;
    
    &:hover{
        transition: 0.2s ease-out;
        background: #e31837;
        color: #fff;
    }
`;