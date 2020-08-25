import styled, { keyframes, css } from "styled-components";
interface IButtonAction {
  accept: boolean;
}

interface IContainerInputHashTag {
  loading: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  height: 100vh;
  background: #192834;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerInputHashTag = styled.div<IContainerInputHashTag>`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px;
  background: #fff;
  max-width: 1100px;
  border-radius: 4px;

  input {
    margin: 5px;
    border: 0;
    padding: 10px;
  }

  button {
    margin: 0 5px;
    border: 0;
    background: #192834;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 4px;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const ContainerHashTag = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  margin-top: 5px;
  div {
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    color: #fff;
    background: #1a91da;
    border-radius: 8px;

    button {
      margin-left: 5px;
      background: transparent;
      border: 0;
    }
  }
`;

export const ContainerTweetToApprove = styled.div`
  margin: 5px 0;
  overflow: auto;
  max-height: 700px;
`;
export const ContainerContentTweet = styled.div`
  width: 700px;
  background: #fff;
  padding: 5px;
  border-radius: 4px;
  margin: 10px 0;
  p {
    margin: 5px;
  }
`;
export const TweetHeader = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin: 0 8px;
    span {
      color: #3c3c3c;
    }
  }
`;
export const ContainerAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    margin: 5px;
    padding: 5px;
  }
`;
export const ButtonContainerAction = styled.button<IButtonAction>`
  border: 0;
  border-radius: 4px;
  background: ${(props) => (props.accept ? "#18bf63" : "#d9534f")};
  width: 100px;
`;
