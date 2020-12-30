import styled from 'styled-components';

export const ProductContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #150f0f;
    color: #fff;

`;

export const ProductHeading = styled.h1`
    text-align: center;
    font-size: 2.1rem;
    margin-bottom: 3rem;
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const ProductCard = styled.div`
    margin: 0 2rem;
    width: 300px;
    line-height: 2;
`;
export const ProductImg = styled.div`
    height: 50vh;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`;
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
`;
export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;
export const ProductDesc = styled.p`
    font-size: 1.2rem;
`;
export const ProductPrice = styled.p`
    font-size: 2rem;
`;
export const ProductButton = styled.button`
    padding: 1.2rem 5rem;
    color: #fff;
    border: none;
    background: #e31837;
    margin-bottom: 2rem;
    transition: 0.2s ease-out;

    &:hover{
        transition: 0.2s ease-out;
        background: #ffc500;
        color: #000;
        cursor: pointer;
    }
`;
