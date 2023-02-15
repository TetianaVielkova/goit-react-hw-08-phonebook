import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 20px;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    &.active {
        color: #f1ee32;
    }
`