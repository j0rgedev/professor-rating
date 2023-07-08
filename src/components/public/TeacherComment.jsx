import styled from 'styled-components'
import {Rating} from "@smastrom/react-rating";
import {useState} from "react";

export function TeacherComment({comment}) {
	const [expanded, setExpanded] = useState(false);
	const MAX_LENGTH = 200;

	const isCommentTooLong = expanded || comment.length <= MAX_LENGTH;

	const handleExpand = () => {
		setExpanded(!expanded);
	}

	return (
		<Container>
			<UserInfo>
				<div>
					<img src="https://i.pinimg.com/originals/51/90/10/519010d9ee8167bfe445e616f260f758.png" alt="avatar"/>
				</div>
				<h4>Anónimo</h4>
			</UserInfo>
			<RatingInfo>
				<Rating
					value={4.0}
					readOnly/>
				<p>Dic 12, 2022</p>
			</RatingInfo>
			<Comment>
				{isCommentTooLong ? (
					<p>
						{comment}
						{comment.length > MAX_LENGTH && <a onClick={handleExpand}>Ver menos</a>}
					</p>
				) : (
					<p>{comment.slice(0, MAX_LENGTH)}...<a onClick={handleExpand}>Ver más</a></p>
				)}
			</Comment>
		</Container>
	)
}

const Container = styled.div`
  display: flex;
	flex-direction: column;
	gap: 8px;
  width: 100%;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

const UserInfo = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	div {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 8px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	h4 {
		font-size: 1rem;
		font-weight: 500;
	}
`

const RatingInfo = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	p {
		font-size: 0.8rem;
		font-weight: 300;
	}
	
  .rr--group{
    width: 150px;
  }
`

const Comment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 1rem;
    font-weight: 300;
  }

  a {
    color: #3891E3;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
`

const Up = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
  }
`