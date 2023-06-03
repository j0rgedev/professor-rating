import styled from 'styled-components';
import { CommentRow } from '../../components/admin/CommentRow.jsx';
import { useState } from 'react';

export function Comments() {
	const [isAllComments, setIsAllComments] = useState(false);

	const handleSectionClick = () => {
		setIsAllComments(!isAllComments);
	};

	return (
		<>
			<SectionsWrapper>
				<SectionTitle isFocused={!isAllComments} onClick={handleSectionClick}>
					Nuevos comentarios (10)
				</SectionTitle>
				<SectionTitle isFocused={isAllComments} onClick={handleSectionClick}>
					Todos los comentarios
				</SectionTitle>
				<Line isFocused={isAllComments} />
			</SectionsWrapper>
			<MainContent>
				<CommentRow isNew={true} commentText={'HOLA'} />
			</MainContent>
		</>
	);
}

const SectionsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: fit-content;
  margin-bottom: 20px;
  border-bottom: 1px solid #fff;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Line = styled.div`
  position: absolute;
  bottom: -1px;
  left: ${({ isFocused }) => (isFocused ? '0' : '50%')};
  width: 50%;
  height: 3px;
  background-color: #fff;
  transition: left 0.3s ease;
`;

const MainContent = styled.div`
  flex: 1 1 0;
`;
