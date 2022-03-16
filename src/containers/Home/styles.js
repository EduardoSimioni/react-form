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
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #f2f2f2;
  position: absolute;
  box-shadow: 13px 17px 18px 0px rgba(0, 0, 0, 0.5);

  .div-button {
    background: #dde3e8;
    margin-top: 20px;
    padding-bottom: 10px;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: flex-end;

    button {
      width: 70px;
      height: 35px;
      background: #2f3676;
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
  width: 100%;
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

export const ContainerInputs = styled.div`
  padding-left: 10px;

  display: flex;
  flex-direction: column;
  position: relative;

  p {
    padding-bottom: 10px;
  }

  .label-input {
    margin-top: 20px;
  }

  textarea {
    width: 340px;
    height: 65px;
    padding: 5px;
    resize: none;
    margin-right: 10px;
    outline: none;
    font-size: 16px;
  }

  .Caixa {
    display: block;
    width: 25em;
    background: red;
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const QuantityBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;

  input {
    outline: none;

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    width: 25px;
    height: 25px;
    background: #2f3676;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;

    :hover {
      opacity: 0.9;
    }

    :active {
      opacity: 0.6;
    }
  }
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
`
