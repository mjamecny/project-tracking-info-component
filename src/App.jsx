import { useState } from "react"
import styled, { css } from "styled-components"

const Intro = styled.section`
  position: relative;
  padding-top: 2.4rem;
  padding-left: 2.4rem;

  @media (min-width: 75em) {
    padding-left: 9.6rem;
  }
`

const Decoration = styled.div`
  position: absolute;
  background-color: var(--color-grayish-blue);
  opacity: 0.3;
  top: 0;
  right: 0;
  height: 300px;
  width: 50%;
  z-index: -10;
  border-bottom-left-radius: 50px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
  margin-top: 6.4rem;

  @media (min-width: 75em) {
    grid-template-columns: 1fr 1fr;
    margin-top: 9.6rem;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2.4rem;
  max-width: 120rem;

  position: relative;
`

const Hamburger = styled.img`
  cursor: pointer;

  @media (min-width: 64em) {
    display: none;
  }
`

const CloseButton = styled.img`
  cursor: pointer;

  @media (min-width: 64em) {
    display: none;
  }
`

const Nav = styled.nav`
  display: none;
  flex-direction: column;
  gap: 2.4rem;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  top: 60px;
  left: 0;
  width: calc(100% - 2.4rem);
  padding: 2.4rem;
  background-color: #fff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
    `}

  @media (min-width: 64em) {
    display: flex;
    position: static;
    flex-direction: row;
    background-color: transparent;
    box-shadow: none;
    justify-content: flex-end;
    gap: 4.8rem;
  }
`

const Line = styled.hr`
  height: 5px;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  @media (min-width: 64em) {
    flex-direction: row;
  }
`

const NavItem = styled.li``

const NavLink = styled.a`
  color: var(--color-very-dark-blue);
  transition: text-decoration 0.3s;

  &:hover {
    text-decoration: underline;
  }
`

const Logo = styled.img`
  cursor: pointer;
`

const Illustration = styled.img`
  width: 100%;

  @media (min-width: 64em) {
    transform: translateX(100px);
  }

  @media (min-width: 75em) {
    grid-column: 2;
    grid-row: 1;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 64em) {
    padding-right: 12.8rem;
  }
`

const SubHeading = styled.p`
  text-transform: uppercase;
  display: flex;
  gap: 1.6rem;
  font-family: "Barlow Condensed", sans-serif;
`

const SubText = styled.span`
  letter-spacing: 5px;
`

const Tag = styled.span`
  background-color: var(--color-very-dark-blue);
  color: var(--color-light-grayish-blue);
  font-weight: 700;
  border-radius: 50px;
  padding-inline: 1.4rem;
`

const Heading = styled.h1`
  text-transform: uppercase;
  color: var(--color-very-dark-blue);
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  font-size: 4.4rem;
  line-height: 1.1;
`

const Text = styled.p``

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`

const Button = styled.button`
  background-color: var(--color-red);
  border: none;
  text-transform: uppercase;
  padding: 1.2rem 1.8rem;
  font-size: 1.2rem;

  border-radius: 5px;

  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: var(--color-red);
      color: var(--color-light-grayish-blue);
      font-weight: 700;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.7;
      }
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: transparent;
      color: var(--color-grayish-blue);
      letter-spacing: 3px;
    `}
`

const LoginButton = styled.button`
  font-family: "Barlow Condensed", sans-serif;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  color: var(--color-grayish-blue);
  transition: text-decoration 0.3s;

  &:hover {
    text-decoration: underline;
  }
`

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Intro>
      <Decoration></Decoration>
      <Header>
        <Logo src="logo.svg" alt="logo" />
        {!isOpen && (
          <Hamburger
            src="icon-hamburger.svg"
            alt="hamburger menu"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        {isOpen && (
          <CloseButton
            src="icon-close.svg"
            alt="close button"
            onClick={() => setIsOpen(false)}
          />
        )}

        <Nav isOpen={isOpen}>
          <NavList>
            <NavItem>
              <NavLink href="#">Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
          </NavList>
          <hr />
          <LoginButton>Login</LoginButton>
        </Nav>
      </Header>
      <Grid>
        <Illustration src="illustration-devices.svg" alt="illustration" />
        <Content>
          <SubHeading>
            <Tag>New</Tag>
            <SubText>Monograph Dashboard</SubText>
          </SubHeading>
          <Heading>Powerful insights into your team</Heading>
          <Text>Project planning and time tracking for agile teams</Text>
          <ButtonContainer>
            <Button type="primary">Schedule a demo</Button>
            <Button type="secondary">To see a preview</Button>
          </ButtonContainer>
        </Content>
      </Grid>
    </Intro>
  )
}
