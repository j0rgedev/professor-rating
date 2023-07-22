import "@smastrom/react-rating/style.css";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { Rating } from "@smastrom/react-rating";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { useState, useRef } from "react";

import { TeacherComment } from "../../components/public/TeacherComment.jsx";
import {
  getReviews,
  getReviewsByTeacher,
  getReviewsByTeacherAndCourse,
  createReview,
} from "../../setup/api/review.js";

export function TeacherProfile() {
  const { id } = useParams();
  const { cursoId } = useParams();
  console.log(id);
  console.log(cursoId);

  const [showGeneralSection, setShowGeneralSection] = useState(true);
  const [showReviewSection, setShowReviewSection] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);

  const [reviews, setReviews] = useState([]);
  const [teacherRating, setTeacherRating] = useState(0);
  const [rating, setRating] = useState(0);

  const [excellent, setExcellent] = useState(0);
  const [good, setGood] = useState(0);
  const [normal, setNormal] = useState(0);
  const [bad, setBad] = useState(0);
  const [terrible, setTerrible] = useState(0);

  const inputRef = useRef();

  const { data, refetch } = useQuery({
    queryKey: ["teacherRating"],
    queryFn: async () => {
      if (cursoId) {
        return await getReviewsByTeacherAndCourse(id, cursoId);
      }
      return await getReviewsByTeacher(id);
    },
    onSuccess: (data) => {
      setReviews(data);

      if (data.length === 0) {
        setTeacherRating(-1);
        return;
      }

      const totalRating = data.reduce((sum, review) => sum + review.rating, 0);
      setTeacherRating((totalRating / data.length).toFixed(1));

      const excellent = (data.filter((review) => review.rating === 5).length * 100) / data.length;
      const good = (data.filter((review) => review.rating === 4).length * 100) / data.length;
      const normal = (data.filter((review) => review.rating === 3).length * 100) / data.length;
      const bad = (data.filter((review) => review.rating === 2).length * 100) / data.length;
      const terrible = (data.filter((review) => review.rating === 1).length * 100) / data.length;

      setExcellent(excellent);
      setGood(good);
      setNormal(normal);
      setBad(bad);
      setTerrible(terrible);
    },
  });

  const handleGeneralClick = () => {
    setShowGeneralSection(true);
    setShowReviewSection(false);
  };

  const handleReviewClick = () => {
    setShowGeneralSection(false);
    setShowReviewSection(true);
  };

  const handleUserReview = (e) => {
    setIsCommenting(e.target.value.length > 0);
  };

  const sendReview = () => {
    const review = {
      idUser: null,
      idCourse: cursoId,
      idTeacher: id,
      rating,
      comment: inputRef.current.value,
    };

    createReview(review);

    setRating(0);
    clearInput();

    refetch();
  };

  const clearInput = () => {
    inputRef.current.value = "";
  };

  return (
    <>
      <Sections>
        <Section isActive={showGeneralSection} onClick={handleGeneralClick}>
          General
        </Section>
        <Section isActive={showReviewSection} onClick={handleReviewClick}>
          Reseñas
        </Section>
      </Sections>
      {showGeneralSection ? (
        <GeneralSection>
          <MainWrapper>
            <MainReview>
              <div className={"title"}>Calificación general</div>
              {teacherRating !== -1 ? (
                <>
                  <div className={"rating"}>{teacherRating}</div>
                  <Rating value={teacherRating} readOnly />
                  <div className={"description"}>Basado en {reviews.length} reviews</div>
                </>
              ) : (
                <p>No hay reviews</p>
              )}
            </MainReview>
            <ReviewProgress>
              <ProgressRow>
                <ProgressScale>Excelente</ProgressScale>
                <ProgressBar color="#4EAD52" progress={excellent} />
              </ProgressRow>
              <ProgressRow>
                <ProgressScale>Bueno</ProgressScale>
                <ProgressBar color="#A5D431" progress={good} />
              </ProgressRow>
              <ProgressRow>
                <ProgressScale>Normal</ProgressScale>
                <ProgressBar color="#F7E642" progress={normal} />
              </ProgressRow>
              <ProgressRow>
                <ProgressScale>Deficiente</ProgressScale>
                <ProgressBar color="#FDAA2C" progress={bad} />
              </ProgressRow>
              <ProgressRow>
                <ProgressScale>Malo</ProgressScale>
                <ProgressBar color="#EE3A19" progress={terrible} />
              </ProgressRow>
            </ReviewProgress>
          </MainWrapper>
          {/* <TeacherTrajectory>
            <p>¿Interesado en este profesor?</p>
            <a href={`asad/trayectoria`}>Mira su trayectoria</a>
          </TeacherTrajectory> */}
        </GeneralSection>
      ) : (
        <>
          <ReviewInput>
            {/* <AnonymousStudentImage
              src="https://i.pinimg.com/originals/51/90/10/519010d9ee8167bfe445e616f260f758.png"
              alt="Estudiante anónimo"
            /> */}
            <Rating style={{ maxWidth: 180 }} value={rating} onChange={setRating} />
            <StyledInput
              ref={inputRef}
              type="text"
              placeholder="Escribe una reseña..."
              onChange={handleUserReview}
            />
            <SendIcon disabled={!isCommenting} onClick={sendReview} />
          </ReviewInput>
          {reviews.map((review) => (
            <TeacherComment key={review._id} review={review} />
          ))}
        </>
      )}
    </>
  );
}

const GeneralSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 50%;

  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 30px;
  }
`;

const Sections = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
  justify-content: space-around;
  margin-bottom: 16px;
`;

const Section = styled.div`
  width: 50%;
  border-bottom: ${(props) => (props.isActive ? "2px solid #fff" : "none")};
  text-align: center;
  font-size: clamp(16px, 3vw, 18px);
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: pointer;
  padding: 6px 0;
`;

const MainReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title,
  .description {
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

  .description {
    margin-top: 12px;
  }

  .rr--group {
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
    content: "";
    display: block;
    height: 100%;
    width: ${(props) => props.progress}%;
    background-color: ${(props) => props.color};
  }
`;

const TeacherTrajectory = styled.div`
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
`;

const ReviewInput = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const AnonymousStudentImage = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  background: #37373a;
  border: 1px solid #37373a;
  outline: none;
  color: #fff;
  border-radius: 8px;
  padding: 5px 40px 5px 12px;
  font-size: 14px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #3891e3;
  }
`;

const SendIcon = styled(IoSend)`
  position: absolute;
  right: 12px;
  border-radius: 50%;
  font-size: 28px;
  padding: 6px;
  transition: background 0.3s ease-in-out;
  color: ${(props) => (props.disabled ? "#ccc" : "#3891E3")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${(props) => (props.disabled ? "none" : "rgba(0,0,0,0.2)")};
  }
`;
