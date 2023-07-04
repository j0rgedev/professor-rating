import styled from "styled-components";
import {FaCommentAlt, FaUserAlt, FaChalkboardTeacher, FaStar} from "react-icons/fa";
import {BsFillBookFill} from "react-icons/bs";
import {useState} from "react";

export function CommentRow({isNew, commentText}) {
	const [expanded, setExpanded] = useState(false);
	const MAX_HEIGHT = 320;

	const isCommentTooLong = commentText.length > MAX_HEIGHT;

	const handleReadMoreClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Container>
			<Top>
				<CommentsInfo>
					<Info>
						<FaCommentAlt/>
						<InfoText>C202012</InfoText>
					</Info>
					<Info>
						<FaUserAlt/>
						<InfoText>Anónimo</InfoText>
					</Info>
					<Info>
						<FaChalkboardTeacher/>
						<InfoText>Edwin Palomino</InfoText>
					</Info>
					<Info>
						<BsFillBookFill/>
						<InfoText>Matemáticas 1</InfoText>
					</Info>
				</CommentsInfo>
				<Stars>
					<StarIcon/>
					<StarIcon/>
					<StarIcon/>
					<StarIcon/>
					<StarIcon/>
					<Score>5</Score>
				</Stars>
			</Top>
			<Content>
				<Comment expanded={expanded} maxHeight={MAX_HEIGHT}>
					{expanded ? (
						commentText
					) : (
						<>
							{commentText.slice(0, MAX_HEIGHT)}
							{isCommentTooLong && (
								<ReadMoreButton onClick={handleReadMoreClick}>
									{expanded ? "Ver menos" : "Ver más"}
								</ReadMoreButton>
							)}
						</>
					)}
				</Comment>
				{isNew && (
					<ButtonWrapper>
						<StyledButton isMain={true}>Eliminar</StyledButton>
						<StyledButton isMain={false}>Rechazar</StyledButton>
					</ButtonWrapper>
				)}
			</Content>
		</Container>
	);
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 1rem;
  gap: 14px;
  border-bottom: 1px solid #e6e6e6;
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
`;

const CommentsInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: flex-start;
  width: 80%;
  height: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background-color: #202224;
`;

const InfoText = styled.div`
  display: flex;
  align-items: center;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-end;
  width: 20%;
  height: 100%;
  position: relative;
`;

const StarIcon = styled(FaStar)`
  color: gold;
`;

const Score = styled.div`
  position: absolute;
  top: -14px;
  right: -16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #fff;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 80%;
`;

const Comment = styled.div`
  overflow: hidden;
  text-overflow: ${({expanded}) => (expanded ? "unset" : "ellipsis")};
  height: ${({expanded}) => (expanded ? "auto" : `unset`)};
  transition: height 0.3s ease-in-out;
  text-align: justify;
  width: 80%;
`;

const ReadMoreButton = styled.button`
  margin-top: 5px;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
  color: blue;
  border: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
`;

const StyledButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.isMain ? "#ff0000" : "#888888")};
  color: #ffffff;
  border: none;
`;
