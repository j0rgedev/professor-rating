import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useEffect, useRef} from "react";

export const FeaturesModal = ({isOpen, onClose}) => {

	return (
		<>
			{isOpen && (
				<ModalBackdrop>
					<motion.div
						initial={{y: '100vh'}}
						animate={{y: 0}}
						transition={{duration: 0.3}}
						className={'modal-container'}
					>
						<ModalContent>
							<ul>
								<li>Aprende a calificar</li>
								<li>Comparación de profesores</li>
								<li>Ver trayectoria de profesores</li>
							</ul>
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
  position: relative;
  width: 100%;
  height: 60%;
  background-color: #3C3C3E;
  border-radius: 16px 16px 0 0;
  box-shadow: rgba(255, 255, 255, 0.5) 0 10px 18px;
  padding: 16px;
  overflow: auto;
`;
