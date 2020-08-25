import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #192834;
  padding: 10px;
`;

export const Content = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  overflow: auto;
  max-height: 90%;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    margin: 0 10px;
    background: transparent;
    border: 0;
  }
  span {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border: 2px solid #fff;
    border-radius: 50%;
    padding: 2px 8px;
  }
`;
