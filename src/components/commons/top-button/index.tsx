import styled from "@emotion/styled";

export default function TopButton() {
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return <Button onClick={moveToTop}>Top</Button>;
}

const Button = styled.button`
  display: block;
  position: fixed;
  z-index: 2;
  bottom: 100px;
  right: 15%;
  font-size: 16px;
  padding: 16px;
  border: none;
  border-radius: 20px;
  background-color: #32c2b9;
  color: #fff;

  @media (max-width: 1500px) {
    right: 3%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
