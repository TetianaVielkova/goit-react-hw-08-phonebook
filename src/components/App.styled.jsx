import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;       
    margin: 30px auto;
    width: 40%;
    height: 100%;
    border-radius: 5px; 
    box-shadow: 10px 10px 12px 15px rgba(34, 60, 80, 0.3);
    padding: 0px 30px 20px 30px;
`
export const Title = styled.h1`
    font-size: 42px;
    color: #f1ee32;
    font-weight: 700;
    text-align: center;
`


export const SubTitle = styled.h2`
font-size: 38px;
color: #f1ee32;
font-weight: 700;
text-align: center;
`
export const HomeTitle = styled.h2`
    position: absolute
    top: 70%;
    left: 0;
    right: 0;
    
    color: #FFF;
    text-align: center;
    font-family: 'Lato',sans-serif;
    font-weight: 300;
    font-size: 55px;
    letter-spacing: 10px;
    
    margin-top: 60px;
    padding-left: 10px;
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`