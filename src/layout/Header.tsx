import styled from "@emotion/styled";
import theme from "@/styles/theme";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <span>
        <Link href="/">
          <a> 메뉴1 </a>
        </Link>
      </span>
      <span>
        <Link href="/">
          <a> 메뉴2 </a>
        </Link>
      </span>
      <span>
        <Link href="/">
          <a> 메뉴2 </a>
        </Link>
      </span>
      <span>
        <Link href="/">
          <a> 메뉴2 </a>
        </Link>
      </span>
      <span>
        <Link href="/">
          <a> 메뉴2 </a>
        </Link>
      </span>
      <span>
        <Link href="/">
          <a> 메뉴2 </a>
        </Link>
      </span>
    </Container>
  );
};

export default Header;

const Container = styled.nav`
  ${theme.flex.row}
`;
