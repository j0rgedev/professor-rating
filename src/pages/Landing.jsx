import styled from "styled-components";
import {SearchInput} from "../components/SearchInput.jsx";
import {InfoCard} from "../components/InfoCard.jsx";
import {BiTimer} from "react-icons/bi";
import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

export const Landing = () => {
    return (
        <>
            <Header/>
            <Main>
                <MainSection>
                    <SearchContainer>
                        <ImageWrapper>
                            <img src="/utp-logo.png" alt="utp-logo" width={'100%'} height={'100%'}/>
                        </ImageWrapper>
                        <SearchDescription>Encuentra a tu profesor perfecto</SearchDescription>
                        <SearchInput/>
                    </SearchContainer>
                    <ArrowWrapper>
                        <h3>Descubre más</h3>
                        <a href="#features-section">
                            <svg viewBox="0 0 72 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 height="19px" width="72px" cursor={'pointer'}>
                                <path
                                    d="m1.571 5.256 30.793 12.3c.569.239 1.167.463 1.796.673.658.21 1.271.314 1.84.314.569 0 1.167-.105 1.795-.314.659-.21 1.287-.434 1.886-.674L70.429 5.256c.509-.21.898-.509 1.167-.898.27-.389.404-.793.404-1.212 0-.718-.24-1.316-.718-1.795-.479-.509-1.093-.763-1.84-.763-.36 0-.764.075-1.213.224-.448.15-.823.285-1.122.404L34.34 14.28h3.322L4.893 1.216c-.33-.12-.718-.254-1.167-.404A3.597 3.597 0 0 0 2.514.588c-.718 0-1.317.254-1.796.763C.24 1.83 0 2.428 0 3.146c0 .42.135.823.404 1.212.27.39.658.689 1.167.898Z"
                                    fill="#AEAEB2"></path>
                            </svg>
                        </a>
                    </ArrowWrapper>
                </MainSection>
                <CardsSectionTitle id={'features-section'}>Features</CardsSectionTitle>
                <CardsSection>
                    <InfoCard
                        icon={<BiTimer fontSize={'38px'}/>}
                        title={'Rápidez'}
                        description={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet cum debitis dolore, ducimus eveniet fuga.'}/>
                    <InfoCard
                        icon={<BiTimer fontSize={'38px'}/>}
                        title={'Rápidez'}
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet cum debitis dolore, ducimus eveniet fuga.'}/>
                    <InfoCard
                        icon={<BiTimer fontSize={'38px'}/>}
                        title={'Rápidez'}
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet cum debitis dolore, ducimus eveniet fuga.'}/>
                </CardsSection>
            </Main>
            <Footer/>
        </>
    )
}

const MainSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Main = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 100px;
`

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 900px;
`

const ImageWrapper = styled.div`
    width: 130px;
    height: 44px;
    margin-bottom: 1.5rem;
  
    @media (min-width: 724px) {
        width: 250px;
        height: 85px
    }
`

const SearchDescription = styled.div`
    font-size: 22px;
    line-height: 1.5rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 2rem;
    width: 80%;
`

const ArrowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
`

const CardsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    justify-content: center;

    @media (min-width: 724px) {
        flex-direction: row;
    }
`

const CardsSectionTitle = styled.div`
    color: #F8F8F8;
    text-align: center;
    font-size: 32px;
    line-height: 28px;
    letter-spacing: 1px;
    font-weight: bold;
    margin-bottom: 32px;
`