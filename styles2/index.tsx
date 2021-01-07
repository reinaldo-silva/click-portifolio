import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  color: #f2f2f2;
  margin: 20px;
`;

export const Text = styled.span`
  color: #f2f2f2;
  margin-bottom: 20px;
`;
