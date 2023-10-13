import styled from "styled-components";
import { Link } from 'react-router-dom'


export const NavbarLink = styled(Link)`
color:white;
font-size: x-medium;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
font-weight:bold;
margin: 10px;
&:hover,
&:focus{
   color: black;
};
&:active{
   color: red;
};
`