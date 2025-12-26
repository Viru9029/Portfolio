import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Light, attractive, modern navbar */
  background: ${({ theme }) => theme?.card_light || "#FFFFFF"};
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border-bottom: 1px solid ${({ theme }) => theme?.border || "rgba(15, 23, 42, 0.08)"};
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 60px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  /* Force logo text readable in light theme (also overrides inline "color: white") */
  color: ${({ theme }) => theme?.text_primary || "#0F172A"};
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: 0.4px;

  /* Override the <a style={{color:"white"}} inside Navbar/index.js */
  a {
    color: ${({ theme }) => theme?.text_primary || "#0F172A"} !important;
    text-decoration: none !important;
    display: flex;
    align-items: center;
  }
`;

export const Span = styled.span`
  padding: 0 4px;
  color: ${({ theme }) => theme?.primary || "#7C3AED"};
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme?.text_secondary || "#475569"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme?.primary || "#7C3AED"};
    transform: translateY(-1px);
  }

  &.active {
    color: ${({ theme }) => theme?.primary || "#7C3AED"};
    border-bottom: 2px solid ${({ theme }) => theme?.primary || "#7C3AED"};
    padding-bottom: 6px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  border: 1px solid ${({ theme }) => theme?.border || "rgba(15, 23, 42, 0.10)"};
  background: ${({ theme }) => theme?.primary || "#7C3AED"};
  color: ${({ theme }) => theme?.buttonText || "#FFFFFF"};
  padding: 10px 14px;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme?.shadow || "0 12px 30px rgba(15, 23, 42, 0.10)"};

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.02);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme?.text_primary || "#0F172A"};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;

  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;

  padding: 14px 22px 18px 22px;

  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-bottom: 1px solid ${({ theme }) => theme?.border || "rgba(15, 23, 42, 0.08)"};
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.10);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MobileMenuLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme?.text_primary || "#0F172A"};
  cursor: pointer;
  padding: 10px 10px;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.08);
    color: ${({ theme }) => theme?.primary || "#7C3AED"};
  }
`;

export const MobileMenuButton = styled.a`
  width: 100%;
  border: 1px solid ${({ theme }) => theme?.border || "rgba(15, 23, 42, 0.10)"};
  background: ${({ theme }) => theme?.primary || "#7C3AED"};
  color: ${({ theme }) => theme?.buttonText || "#FFFFFF"};
  padding: 12px 14px;
  border-radius: 14px;

  font-size: 14px;
  font-weight: 800;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.02);
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;

  display: flex;
  justify-content: start;
  align-items: center;

  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0;
  }
`;

/* Backward-compat alias: your Navbar/index.js imports MobileLink */
export const MobileLink = MobileMenuLink;
