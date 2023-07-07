import styled from 'styled-components'
import {useNavigate} from "react-router-dom";
import {Rating} from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

export function TeacherRow(teacher) {

	const navigate = useNavigate();

	return (
		<Wrapper onClick={() => {
			navigate(`/profesores/${teacher.teacher._id}`)
		}}>
			<Top>
				<Verification isVerified={true}>
					{'Verificado'}
				</Verification>
			</Top>
			<Image>
				<img src="https://news.iu.edu/live/image/gid/2/715_62cd8be92bbf8_element_12_f2f9513fbe0736fdc26f0b57467ff162-1164-head20shot-Edited.jpg" alt="teacher_photo" />
			</Image>
			<TeacherInfo>
				<p className={'teacher-names'}>{`${teacher.teacher.firstName} ${teacher.teacher.lastName}`}</p>
				<p className={'teacher-major'}>Maestro</p>
			</TeacherInfo>
			<Stars>
				<Rating
					style={{maxWidth: '80%'}}
					value={3.4}
					readOnly
				/>
			</Stars>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: #2F2F33;
  max-width: 320px;
  min-height: 280px;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.3);
`

const Top = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
`

const Verification = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  font-size: 12px;
  background-color: ${props => props.isVerified ? '#EFFBF7' : '#FFF6ED'};
  color: ${props => props.isVerified ? '#4ABA91' : '#FF8600'};
  border: ${props => props.isVerified ? '1px solid #4ABA91' : '1px solid #FF8600'};
  padding: 1px 8px;
  border-radius: 6px;
`

const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40%;
  img {
    object-fit: cover;
    border-radius: 100%;
    height: 100%;
    width: 34%;
  }
`;

const TeacherInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
  }

  .teacher-names {
    font-size: clamp(16px, 2vw, 20px);
    font-weight: 600;
    margin-bottom: 5px;
  }

  .teacher-major {
    font-size: clamp(14px, 2vw, 16px);
    font-weight: 400;
  }
`

const Stars = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default TeacherRow;
