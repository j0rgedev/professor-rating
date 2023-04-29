import styled from "styled-components";
export const InfoCard = ({icon, title, description}) => {
    return (
        <Card>
            <IconWrapper>{icon}</IconWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    )
}

const Card = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(28, 28, 30);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    gap: 14px;
    h4,p {margin:0}
`

const IconWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Title = styled.h4`
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 24px;
    letter-spacing: -0.28px;
`

const Description = styled.p`
    font-size: 16px;
    color: #C7C7C7;
    text-align: center;
`