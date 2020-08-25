import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 400px;
  padding: 10px 0;

  border-radius: 8px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;

  img {
    margin: 0 10px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  strong {
    font-size: 20px;
  }

  span {
    color: #4c4c4c;
    letter-spacing: -0.5px;
  }
`;
export const TweetContent = styled.p`
  margin: 10px;
`;
export const TweetImage = styled.img`
  flex: 1;
  border-radius: 8px;
  margin: 10px;
  height: 60%;
  width: 22rem;
`;
