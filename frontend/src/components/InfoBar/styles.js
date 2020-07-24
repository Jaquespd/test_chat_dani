import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #991a1d;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;

export const Room = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 3%;
  color: white;
`;

export const Buttom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  text-decoration: none;
  background: #fff;
  border: 0;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  transition: background 0.4s;

  &:hover {
    background: red;
    border: 3px solid #dcdce6;
  }

  > a {
    text-decoration: none;

    > img {
      height: 15px;
      width: 15px;
      opacity: 0.7;
      margin-top: 7px;
      margin-left: 2px;
    }
  }
`;
