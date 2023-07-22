import styled from "styled-components";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { getTeachers } from "../../setup/api/teachers";
import { getReviewsByTeacher } from "../../setup/api/review";

const comparisonData = [
  { label: "Calificación", teacher1: "4.5", teacher2: "3.8" },
  { label: "Reseñas", teacher1: "32", teacher2: "20" },
];

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#444" : "#333",
    borderColor: state.isFocused ? "#fff" : "#666",
    boxShadow: state.isFocused ? "0 0 0 1px #fff" : "none",
    "&:hover": {
      borderColor: "#fff",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#666" : "transparent",
    color: state.isSelected ? "#fff" : "#fff",
    "&:hover": {
      backgroundColor: "#666",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#333333",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  input: (provided) => ({
    ...provided,
    color: "#fff",
  }),
};

export function TeacherComparison() {
  const [teachers, setTeachers] = useState([]);
  const [comparisonData, setComparisonData] = useState([]);

  const [selectedTeacher1, setSelectedTeacher1] = useState(null);
  const [selectedTeacher2, setSelectedTeacher2] = useState(null);

  useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
    onSuccess: (data) => {
      setTeachers(
        data.map((teacher) => ({
          label: `${teacher.firstName.split(" ")[0]} ${teacher.lastName}`,
          value: teacher._id,
        }))
      );
    },
  });

  useEffect(() => {
    console.log(selectedTeacher1, selectedTeacher2);
    if (selectedTeacher1 && selectedTeacher2) {
      Promise.all([
        getReviewsByTeacher(selectedTeacher1.value),
        getReviewsByTeacher(selectedTeacher2.value),
      ])
        .then(([data1, data2]) => {
          let average1 = data1.reduce((sum, review) => sum + review.rating, 0) / data1.length;
          let average2 = data2.reduce((sum, review) => sum + review.rating, 0) / data2.length;

          if (data1.length == 0) {
            average1 = 0;
          }
          if (data2.length == 0) {
            average2 = 0;
          }
          setComparisonData([
            { label: "Calificación", teacher1: average1.toFixed(1), teacher2: average2.toFixed(1) },
            { label: "Reseñas", teacher1: data1.length, teacher2: data2.length },
          ]);
        })
        .catch((error) => {
          // Handle any errors that occurred while fetching data
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedTeacher1, selectedTeacher2]);

  const handleTeacher1Change = (selectedOption) => {
    setSelectedTeacher1(selectedOption);
  };

  const handleTeacher2Change = (selectedOption) => {
    setSelectedTeacher2(selectedOption);
  };

  return (
    <Container comparisonDone={selectedTeacher1 && selectedTeacher2}>
      <h1>Comparación de profesores</h1>
      <SelectContainer>
        <StyledSelect
          value={selectedTeacher1}
          onChange={handleTeacher1Change}
          options={teachers}
          placeholder="Seleccionar profesor 1"
          isSearchable
          styles={selectStyles}
        />
        <StyledSelect
          value={selectedTeacher2}
          onChange={handleTeacher2Change}
          options={teachers}
          placeholder="Seleccionar profesor 2"
          isSearchable
          styles={selectStyles}
        />
      </SelectContainer>
      {selectedTeacher1 && selectedTeacher2 && (
        <ComparisonResult>
          <h3>Resultado de la comparación</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>{selectedTeacher1.label}</th>
                <th>{selectedTeacher2.label}</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.teacher1}</td>
                  <td>{row.teacher2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ComparisonResult>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.comparisonDone ? "space-around" : "center")};

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const StyledSelect = styled(Select)`
  width: 300px;
  margin: 0 1rem;
`;

const ComparisonResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;

  h3 {
    font-size: clamp(14px, 5vw, 22px);
    font-weight: 500;
    text-align: center;
  }

  table {
    max-width: 800px;
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
    border: 1px solid #666;
    background-color: #222;
    color: #fff;
  }

  th,
  td {
    padding: 1.5rem;
    text-align: center;
    border-bottom: 1px solid #666;
  }

  th {
    background-color: #333;
    font-weight: 500;
  }

  tr:nth-child(even) {
    background-color: #111;
  }

  tr:last-child {
    td {
      border-bottom: none;
    }
  }
`;
