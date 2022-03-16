import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgb(138, 43, 226);
  background: linear-gradient(
    90deg,
    rgba(138, 43, 226, 1) 0%,
    rgba(65, 20, 106, 1) 100%
  );
`

export const ContainerItems = styled.div`
  width: 360px;
  height: max-content;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #f2f2f2;
  position: absolute;

  .div-button {
    background: #dde3e8;
    margin-top: 20px;
    padding-bottom: 10px;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: flex-end;

    button {
      width: 90px;
      height: 35px;
      background: #006400;
      color: white;
      margin-right: 15px;
      margin-top: 15px;
      border: none;
      font-size: 17px;
      border-radius: 8px;
      cursor: pointer;

      :hover {
        opacity: 0.9;
      }

      :active {
        opacity: 0.6;
      }
    }
  }
`

export const HeaderBox = styled.div`
  background: #2f3676;
  padding-bottom: 25px;
  display: flex;
  justify-content: space-between;
  border-radius: 9px 9px 0 0;
  align-items: center;

  height: 30%;

  p {
    padding-top: 10px;
    padding-left: 15px;
    color: #ffffff;
    font-weight: 200;
    font-size: 1.2em;
    line-height: 22px;
    text-shadow: 0.2em 0.2em 0.2em #000;
    strong {
      font-weight: 500;
    }
  }

  img {
    width: 80px;
    margin-top: 10px;
    margin-right: 30px;
    transform: rotate(-8deg);
  }
`

export const ContainerInfo = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  position: relative;

  .title {
    margin-top: 20px;
  }
`
