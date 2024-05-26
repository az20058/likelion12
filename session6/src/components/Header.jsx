import { NavLink } from "react-router-dom";
import styled from "styled-components";
import '../App.css';

const Nav = styled(NavLink)`
    text-decoration: none;
    color: black;
    &.active{
        color: red;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
`;

export default function Header(){
    return(
        <div>
            <div className="NavWrapper">
                <Nav to="/">홈 가기</Nav>
                <Nav to="/intro">인트로</Nav>
                <Nav to="/work">work</Nav>
                <Nav to="/react">react</Nav>
            </div>
        </div>
    )
}