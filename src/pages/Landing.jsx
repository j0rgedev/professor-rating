import styled from "styled-components";
import {SearchInput} from "../components/SearchInput.jsx";
import {InfoCard} from "../components/InfoCard.jsx";
import {Button} from "../components/Button.jsx";
import {CiLocationArrow1} from "react-icons/ci";
import {MdCompareArrows} from "react-icons/md";
import {RiLineChartLine, RiNotification2Fill} from "react-icons/ri";
import {FaChalkboardTeacher} from "react-icons/fa";
import {FeaturesModal} from "../components/FeaturesModal.jsx";
export const Landing = ({ isModalOpen, onCloseModal }) => {

    return (
        <>
            <Main>
                <MainSection>
                    <SearchContainer>
                        <ImageWrapper>
                            <img src="./utp-logo.png" alt="utp-logo" width={'100%'} height={'100%'}/>
                        </ImageWrapper>
                        <SearchDescription>Encuentra a tu profesor perfecto</SearchDescription>
                        <SearchInput/>
                    </SearchContainer>
                    <Button
                        text={'Ver todos los docentes'}
                        width={'270px'}
                        fontSize={'18px'}
                        icon={<CiLocationArrow1 fontSize={'24px'}/>}
                    />
                    <ArrowWrapper>
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
                        icon={<MdCompareArrows fontSize={'38px'}/>}
                        title={'Comparación de profesores'}
                        description={
                            'Podrás comparar de 2 a más profesores y ver sus calificaciones, comentarios y cursos, para que puedas elegir al mejor profesor para ti.'}
                    />
                    <InfoCard
                        icon={<RiNotification2Fill fontSize={'38px'}/>}
                        title={'Notificaciones personalizadas'}
                        description={
                            'Una vez que te hayas registrado, todos los cambios en las calificaciones de tus profesores favoritos o los que tú escojas, serán enviados a tu correo electrónico.'}/>
                    <InfoCard
                        icon={<RiLineChartLine fontSize={'38px'}/>}
                        title={'Trayectoria de profesor'}
                        description={
                            'Hemos incluido una nueva opción donde podrás ver el historial de como ha ido mejorando la enseñanza del profesor a través del tiempo.'}/>
                    <InfoCard
                        icon={<FaChalkboardTeacher fontSize={'38px'}/>}
                        title={'Profesores'}
                        description={
                            '¿Eres profesor? ¡Perfecto! Podrás tener acceso exclusivo a recursos adicionales sobre tus calificaciones y comentarios.'}/>
                </CardsSection>
            </Main>
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
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
    justify-content: center;
  
    .card-container{
        overflow: hidden;
    }

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