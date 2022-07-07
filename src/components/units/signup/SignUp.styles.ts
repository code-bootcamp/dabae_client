import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 0px auto;
  padding-bottom: 40px;
`;
export const Error = styled.div`
  color: red;
  font-size: 12px;
  text-align: left;
  margin-top: 3px;
`;

export const Title = styled.div`
  font-size: 40px;
  padding-bottom: 20px;
`;

export const Button2 = styled.button`
  width: 264px;
  height: 40px;
  border: solid 1px black;
  border-radius: 10px;
`;

export const Button3 = styled.button`
  width: 264px;
  height: 60px;
  background-color: #b085f5;
  border-radius: 10px;

  :disabled {
    width: 264px;
    height: 60px;
    background-color: #eaeaea;
    cursor: default;
  }
`;

export const Button4 = styled.button`
  width: 264px;
  height: 60px;
  background-color: #eaeaea;
  border-radius: 10px;
`;
