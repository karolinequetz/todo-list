import { HeaderContainer, HeaderContent } from "./styles";
import logo from "../../assets/logo.svg";
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
};
