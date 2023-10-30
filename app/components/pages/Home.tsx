import Section from '../containers/Section';
import HomeContainer from '../containers/HomeContainer';
import styled from 'styled-components';
import Link from 'next/link';
import { BsFillPlayFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import BackgroundOverlay from '../containers/BackgroundOverlay';

type Props = { headerHeight: number };

const Home = ({ headerHeight }: Props) => {
  return (
    <BackgroundOverlay>
      <HomeContainer $headerHeight={headerHeight}>
        <Section $headerHeight={headerHeight}>
          <StyledHomeContainer>
            <ContentContainer>
              <StyledHomeRole>FULL-STACK DEVELOPER</StyledHomeRole>
              <StyledHomeTitle>Hey! I am</StyledHomeTitle>
              <StyledHomeTitle $gradientprop>Vitor Fernandes</StyledHomeTitle>
              <StyledP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi voluptas eveniet aut iusto ab voluptatum delectus
                ratione!
              </StyledP>
              <StyledButtonLink href='mailto:vitosdeveloper@gmail.com'>
                <StyledHireMeButton>
                  <span>HIRE ME</span> <BsFillPlayFill />
                </StyledHireMeButton>
              </StyledButtonLink>
              <StyledP>Follow Me:</StyledP>
              <StyledSocialContainer>
                <Link href='https://github.com/vitosnatios' target='_blank'>
                  <BsGithub />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/vitosnatios/'
                  target='_blank'
                >
                  <BsLinkedin />
                </Link>
              </StyledSocialContainer>
            </ContentContainer>
            <ImageContainer>
              <StyledImage src='/eu.png' alt='home-picture' />
            </ImageContainer>
          </StyledHomeContainer>
        </Section>
      </HomeContainer>
    </BackgroundOverlay>
  );
};

export default Home;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.2;
  /* max-width: 40%; */
  flex: 1;
  @media (max-width: 1200px) {
    max-width: 744px;
    /* align-items: center; */
  }
`;

const ImageContainer = styled.div`
  max-height: 744px;
  flex: 1;
  min-width: 280px;
`;

const StyledImage = styled.img`
  border-radius: 8px;
  max-width: 744px;
  width: 100%;
  flex: 1;
  float: inline-end;
`;

const StyledHomeRole = styled.h3`
  opacity: 1;
  -webkit-text-fill-color: transparent;
  background: var(--color-special-color);
  -webkit-background-clip: text;
  background-clip: text;
  color: var(--white);
  font-family: var(--font-fira-code), Roboto Mono, monospace;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const StyledHomeTitle = styled.h3<{ $gradientprop?: boolean }>`
  font-family: var(--font-jost);
  font-size: 3rem;
  -webkit-text-fill-color: transparent;
  background: ${({ $gradientprop }) =>
    $gradientprop ? 'var(--color-button)' : 'var(--color-info-light)'};
  -webkit-background-clip: text;
  background-clip: text;
  display: inline;
`;

const StyledP = styled.p`
  font-weight: 400;
  font-family: var(--font-rubik);
  color: #ccc;
  font-size: 16px;
`;

const StyledButtonLink = styled(Link)`
  display: contents;
`;

const StyledHireMeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: center;
  border-radius: 47px;
  height: 60px;
  letter-spacing: 3px;
  border: none;
  color: var(--color-white);
  font-weight: 500;
  transition: all 0.1s ease;
  width: 180px;
  background: var(--color-button);
  margin: 0.5rem 0 2rem 0;
  cursor: pointer;
  &:hover {
    background: var(--color-button-hover);
  }
`;

const StyledSocialContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  svg {
    width: 25px;
    height: 25px;
  }
  svg:hover {
    fill: var(--color-button-hover);
  }
`;
