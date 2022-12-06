import styled from "@emotion/styled";
  
export const CardContainer = styled.div`
  width: 200px;
  min-height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  background-color: gray;
  color: white;
  margin: 5px 0;
  border-radius: 4px;


`;

export const CardMedia = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
`;


export const CardTitle = styled.h6`
  color: white;
  font-size: 1.5rem;
  margin-top: 5px;
  margin-left: 10px;
`;

export const CardData= styled.p`
  color:white;
  font-size: 1.5rem;
  display:flex;
  align-items: center;

`;

export const CharacterStatus = styled.div`
  width: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ status }) => status === "Alive" ? "#2ecc71" : "#c0392b"};
  margin-right: 4px;
  `;

  export const CharacterCardPropertyLabel = styled.p`
    color: black;
  `;

  export const CharacterCardPropertyValue = styled.p`
    color: white light;
  `;