import styled from 'styled-components';
import { motion } from 'framer-motion';
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export const FeaturesModal = ({ openModal, openModalSetter }) => {

	const navigate = useNavigate();
	const handleModalContentClick = (event) => {
		event.stopPropagation();
	};

	return (
		<>
			{openModal && (
				<ModalBackdrop onClick={() => openModalSetter(false)}>
					<motion.div
						initial={{ y: '100vh' }}
						animate={{ y: 0 }}
						transition={{ duration: 0.3 }}
						className='modal-container'
					>
						<ModalContent onClick={handleModalContentClick}>
							<h2>Secciones</h2>
							<ul>
								<FeatureItem>
									<FeatureIcon>🌟</FeatureIcon>
									<FeatureText>Aprende a calificar</FeatureText>
								</FeatureItem>
								<FeatureItem>
									<FeatureIcon>🔍</FeatureIcon>
									<FeatureText>Comparación de profesores</FeatureText>
								</FeatureItem>
								<FeatureItem>
									<FeatureIcon>📚</FeatureIcon>
									<FeatureText onClick={()=>toast(
										"Cuando selecciones un profesor, podrás ver su trayectoria académica",
										{
											icon: "📚",
											style: {
												borderRadius: "10px",
												background: "rgba(40,40,40,0.8)",
												color: "#fff",
											},
										}
									)}>Ver trayectoria de profesores</FeatureText>
								</FeatureItem>
							</ul>
							<BackToMenuLink href='/'>Volver al menú principal</BackToMenuLink>
						</ModalContent>
					</motion.div>
				</ModalBackdrop>
			)}
		</>
	);
};

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: ${props => (props.isOpen ? 'none' : 'flex')};

  .modal-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 60%;
  background-color: #3C3C3E;
  border-radius: 16px 16px 0 0;
  box-shadow: rgba(255, 255, 255, 0.5) 0 10px 18px;
  padding: 16px;
  overflow: auto;
  color: #fff;
	
	h2 {
		font-size: 24px;
		margin-bottom: 10px;
	}

  ul {
    list-style: none;
    padding-left: 10px;
    margin: 0;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FeatureIcon = styled.span`
  margin-right: 10px;
  font-size: 24px;
`;

const FeatureText = styled.span`
  font-size: 18px;
	cursor: pointer;
`;

const BackToMenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-top: auto;
`;
