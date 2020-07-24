import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: -150px; */
  color: #111;
  height: 60%;
  justify-content: space-between;
  padding: 50px;
`;

export const Header = styled.div`
  display: flex;

  > h1 {
    margin-top: -25px;
    margin-left: -30px;
  }

  > img {
    height: 130px;
    width: 190px;
  }
`;

export const Room = styled.div`
  display: flex;

  > h1 {
    margin: 0;
  }
  > img {
    height: 35px;
    width: 35px;
    opacity: 0.7;
    margin: 0;
    padding: 3px;
  }
`;

export const Users = styled.div`
  display: flex;

  > h1 {
    margin: 0;
  }
  > img {
    height: 35px;
    width: 35px;
    opacity: 0.7;
    margin: 0;
    padding: 3px;
  }
`;

export const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;
`;

export const ActiveItem = styled.div`
  display: flex;
  align-items: center;
`;
