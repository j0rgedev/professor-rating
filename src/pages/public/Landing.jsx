import styled from "styled-components";
import {SearchInput} from "../../components/public/SearchInput.jsx";
import {InfoCard} from "../../components/public/InfoCard.jsx";
import {BiTimer} from "react-icons/bi";
import {Button} from "../../components/public/Button.jsx";
import {MdCompareArrows} from "react-icons/md";
import {PiMagnifyingGlassFill} from "react-icons/pi";
import {AiOutlineStock} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

export const Landing = () => {
	const navigate = useNavigate();

	return (
		<>
			<MainSection>
				<SearchContainer>
					<ImageWrapper>
						<img src="/utp-logo.png" alt="utp-logo" width={'100%'} height={'100%'}/>
					</ImageWrapper>
					<SearchDescription>Encuentra a tu profesor perfecto</SearchDescription>
					<SearchInput/>
					<TeachersButton onClick={()=>navigate('profesores')}>
						Ver todos los profesores🡽
					</TeachersButton>
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
			<CardsSectionTitle id={'features-section'}>Características</CardsSectionTitle>
			<CardsSection>
				<InfoCard
					icon={<PiMagnifyingGlassFill fontSize={'38px'}/>}
					title={'Transparencia'}
					description={
						'Todas las reseñas cumplen con nuestros lineamientos, para que siempre sepas lo que piensan los estudiantes de la UTP'}/>
				<InfoCard
					icon={<MdCompareArrows fontSize={'38px'}/>}
					title={'Comparación'}
					description={
						'Tendrás la posibilidad de comparar a los profesores que más te interesen, para que puedas elegir el que más se adapte a tus necesidades'}/>
				<InfoCard
					icon={<AiOutlineStock fontSize={'38px'}/>}
					title={'Trayectoria'}
					description={
						'Podrás ver como ha cambiado la calificación de un profesor a lo largo del tiempo, para que puedas tomar una decisión más informada'}/>
			</CardsSection>
		</>
	)
}

const MainSection = styled.section`
  display: flex;
  height: 100vh;
  position: relative;
  align-items: center;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 900px;
  padding-top: 6%;
	margin: 0 auto;
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

const TeachersButton = styled.button`
  background: radial-gradient(circle at 0.2% 1.8%,
  rgb(255, 90, 8) 0%,
  rgb(88, 0, 0) 100.2%);
	margin-top: 6rem;
  border: none;
  color: inherit;
	font-size: clamp(16px, 2vw, 18px);
	padding: clamp(4px, 1vw, 10px);
	width: 50%;
	height: 50px;
	min-width: 150px;
  max-width: 300px;
  font-weight: 500;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0 10px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

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
  position: absolute;
  right: 0;
  left: 0;
  bottom: 100px;
`

const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;

  @media (min-width: 724px) {
    flex-direction: row;
  }
`

const CardsSectionTitle = styled.div`
	padding-top: 3rem;
  color: #F8F8F8;
  text-align: center;
  font-size: 32px;
  line-height: 28px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 32px;
`