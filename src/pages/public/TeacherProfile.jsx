import styled from 'styled-components';
import {Rating} from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import {useState} from "react";
import {TeacherComment} from "../../components/public/TeacherComment.jsx";

export function TeacherProfile() {
	const [showGeneralSection, setShowGeneralSection] = useState(true);
	const [showReviewSection, setShowReviewSection] = useState(false);

	const handleGeneralClick = () => {
		setShowGeneralSection(true);
		setShowReviewSection(false);
	};

	const handleReviewClick = () => {
		setShowGeneralSection(false);
		setShowReviewSection(true);
	};

	return (
		<Container>
			<TeacherInfo>
				<ImageWrapper>
					<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
					<Verification isVerified={true}>Verificado</Verification>
				</ImageWrapper>
				<h1>Nombres y apellidos</h1>
				<TeacherTrajectory isDesktop={true}>
					<p>¿Interesado en este profesor?</p>
					<a href="#">Mira su trayectoria</a>
				</TeacherTrajectory>
			</TeacherInfo>
			<MainInfo>
				<Sections>
					<Section isActive={showGeneralSection} onClick={handleGeneralClick}>
						General
					</Section>
					<Section isActive={showReviewSection} onClick={handleReviewClick}>
						Reseñas
					</Section>
				</Sections>
				{
					showGeneralSection ? (
						<GeneralSection>
							<MainReview>
								<div className={'title'}>Calificación general</div>
								<div className={'rating'}>4.0</div>
								<Rating value={4.0} readOnly/>
								<div className={'description'}>Basado en 15 reviews</div>
							</MainReview>
							<ReviewProgress>
								<ProgressRow>
									<ProgressScale>Excelente</ProgressScale>
									<ProgressBar color="#4EAD52" progress={80} />
								</ProgressRow>
								<ProgressRow>
									<ProgressScale>Bueno</ProgressScale>
									<ProgressBar color="#A5D431" progress={60} />
								</ProgressRow>
								<ProgressRow>
									<ProgressScale>Normal</ProgressScale>
									<ProgressBar color="#F7E642" progress={40} />
								</ProgressRow>
								<ProgressRow>
									<ProgressScale>Deficiente</ProgressScale>
									<ProgressBar color="#FDAA2C" progress={20} />
								</ProgressRow>
								<ProgressRow>
									<ProgressScale>Malo</ProgressScale>
									<ProgressBar color="#EE3A19" progress={10} />
								</ProgressRow>
							</ReviewProgress>
							<TeacherTrajectory isDesktop={false}>
								<p>¿Interesado en este profesor?</p>
								<a href="#">Mira su trayectoria</a>
							</TeacherTrajectory>
						</GeneralSection>
					) : (
						<TeacherComment
							comment={
								`
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Aliquam euismod, nisl quis tincidunt aliquam, nunc nisl
									ultricies nunc, quis aliquet nunc nisl quis nunc. Nulla
									quis nisl quis nunc. Nulla quis nisl quis nunc. Nulla quis
									nisl quis nunc. Nulla quis nisl quis nunc. Nulla quis nisl
									quis nunc. Nulla quis nisl quis nunc. Nulla quis nisl quis
									nunc. Nulla quis nisl quis nunc. Nulla quis nisl quis nunc.
									Nulla quis nisl quis nunc. Nulla quis nisl quis nunc. Nulla
									quis nisl quis nunc. Nulla quis nisl quis nunc. Nulla quis
									nisl quis nunc. Nulla quis nisl quis nunc. Nulla quis nisl
									quis nunc. Nulla quis nisl quis nunc. Nulla quis nisl quis
								`
							}
						/>
					)
				}
			</MainInfo>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
  width: 100%;
  height: 100%;
	
	@media (min-width: 768px) {
		flex-direction: row;
		gap: 30px;
  }
`;

const TeacherInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-bottom: 26px;
  width: 100%;
  height: 30%;

  h1 {
    font-size: clamp(26px, 2.5vw, 36px);
    font-weight: 600;
    text-align: center;
  }
	
	@media (min-width: 768px) {
		width: fit-content;
		height: 100%;
		margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  img {
    width: 50%;
    max-width: 300px;
    border-radius: 50%;
  }
`;

const Verification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 55%;
  font-size: 12px;
  background-color: ${(props) => (props.isVerified ? '#EFFBF7' : '#FFF6ED')};
  color: ${(props) => (props.isVerified ? '#4ABA91' : '#FF8600')};
  border: ${(props) => (props.isVerified ? '1px solid #4ABA91' : '1px solid #FF8600')};
  padding: 1px 8px;
  border-radius: 6px;
`;

const GeneralSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
  width: 100%;
  height: 50%;
	
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100%;
  }
`;

const MainInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
`;

const Sections = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
  justify-content: space-around;
	margin-bottom: 16px;
`;

const Section = styled.div`
	width: 50%;
  border-bottom: ${(props) => (props.isActive ? '2px solid #fff' : 'none')};
	text-align: center;
	font-size: clamp(16px, 3vw, 18px);
	font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
	cursor: pointer;
	padding: 6px 0;
`;

const MainReview = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

  .title, .description {
    font-size: clamp(16px, 3vw, 20px);
	  font-weight: 300;
  }

 	.rating {
    font-size: clamp(80px, 9vw, 90px);
    font-weight: bold;
    max-height: 90px;
    display: flex;
    align-items: center;
  }
	
	.description{
		margin-top: 12px;
	}
	
	.rr--group{
		max-width: 250px;
	}
	
	@media (min-width: 768px) {
		width: fit-content;
  }
`;

const ReviewProgress = styled.div`
  display: flex;
  flex-direction: column;
	margin-top: 18px;
	
	@media (min-width: 768px) {
		justify-content: center;
		gap: 12px;
		margin-top: 0;
		width: 60%;
		height: 100%;
		padding-right: 12px;
	}
`;

const ProgressRow = styled.div`
  display: flex;
  align-items: center;
	justify-content: center;
`;

const ProgressScale = styled.div`
  word-wrap: break-word;
  width: 30%;
	font-size: clamp(14px, 3vw, 16px);
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 10px;
  margin-left: 10px;
  background-color: #ddd;

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: ${(props) => props.progress}%;
    background-color: ${(props) => props.color};
  }
`;

const TeacherTrajectory = styled.div`
	display: ${(props) => (props.isDesktop ? 'none' : 'block')};
  width: 100%;
  margin-top: 80px;
  text-align: left;

  p {
    font-size: clamp(16px, 3vw, 18px);
    margin-bottom: 10px;
  }

  a {
    display: block;
    font-size: clamp(16px, 3vw, 18px);
    color: #fff;
    font-weight: bold;
  }
	
	@media (min-width: 768px) {
		display: ${(props) => (props.isDesktop ? 'block' : 'none')};
  }
`;
