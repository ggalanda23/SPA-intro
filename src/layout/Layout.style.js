import styled from "@emotion/styled";


export const Header = styled.nav`
   width: 100%;
   height: 60px;
   background-color: var(--main-navbar-background-color);
   border-bottom: 1px solid rgba(0,0,0,0.2);

   `;

   export const NavbarLinksWrapper = styled.ul`
  
     display: flex;
     list-style: none;
     margin 20px 20px;
     margin-left: auto;
     margin-right: 100px;
     width: 200px;
     height: 100%;
     align-items: center;
     justify-content: space-betwwen;
   
   `;

   export const NavbarLinkItem = styled.li`
    border-bottom: ${({active}) =>
      active ? "2px solid var(--main-text-color)" : "none"};
     height: 100%;
     margin-right: 10px;
     display: flex;
     align-items: center;
     justify-content: center;

     &:hover {
        border-bottom: 2px solid var(--main-text-color);

     }

   `;

   export const MainContainer = styled.main`
   margin: 0 100px;
   margin-top: 20px;
   background-color: red;
   min-height: calc(100vh - 20px);

   @media(max-width: 600px;) {
    margin: 0;
   }
   `;