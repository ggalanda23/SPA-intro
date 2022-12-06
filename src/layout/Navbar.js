import React from 'react';
import styled from '@emotion/styled';
import { Header , NavbarLinkItem, NavbarLinksWrapper} from "./Layout.style";
import { Link , useLocation} from 'react-router-dom';



const navbarLinks = [
    { path: "/", label: " Home "},
    { path: "/all", label: " Characters "},
    { path: "/about", label: " About "},
];

const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);

  return (
    <Header>
        <NavbarLinksWrapper>
            {navbarLinks.map((link, index) => (
                <NavbarLinkItem  active={location.pathname === link.path} key={index}>
                     <Link to={link.path}>{link.label}</Link>
                </NavbarLinkItem>
            ))}
        </NavbarLinksWrapper>
    </Header>
  )
}



export default Navbar;