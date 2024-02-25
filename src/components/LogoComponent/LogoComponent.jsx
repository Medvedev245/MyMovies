import { LogoContaoneer, Image, LogoText } from './LogoComponent.styled';

export const LogoComponent = () => {
  return (
    <LogoContaoneer>
      <Image
        src="https://mywebicons.ru/i/png/f372d1407ba1a748f908eca388590275.png"
        alt="Logo"
      />
      <LogoText>MyMovies</LogoText>
    </LogoContaoneer>
  );
};
