import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Header = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const Nav = styled.nav`
	position: relative;
	background: #232e3e;
	display: flex;
	align-items: center;
	height: 82px;
	width: 100%;
	justify-content: space-between;
	/* border: 2px solid red; */
	padding-left: 15px;
	padding-right: 25px;
`;

export const ProfileDiv = styled.div`
	/* border: 1px solid red; */
	display: flex;
	flex-basis: 30%;
	align-items: center;
	justify-content: flex-end;

	.setting-icon {
		height: 100%;
		color: wheat;
		/* width: 100px; */
		/* border: 1px solid hotpink; */
	}
`;

export const IconBtn = styled.button`
	border: none;
	color: wheat;
	background: transparent;
	border: 1px solid red;
	display: flex;
	align-items: center;
`;

export const UserDiv = styled.div`
	/* border: 1px solid orange; */
	display: flex;
	align-items: center;
	margin-left: 1rem;
`;

export const LogoLinks = styled.div`
	/* border: 1px solid yellow; */
	display: flex;
	flex-basis: 70%;
	height: 100%;
`;

export const Logo = styled.div`
	/* border: 2px solid hotPink; */
	margin-right: 4rem;
	display: flex;
	align-items: center;
	user-select: none;
	cursor: pointer;
`;

export const FirstLogo = styled.span`
	font-size: 17px;
	letter-spacing: 4px;
	font-weight: bold;
	color: white;
	margin-right: 10px;
`;

export const SecondLogo = styled(FirstLogo)`
	color: orange;
`;

interface DropDownBtnProps {
	btnActive: boolean;
}

export const DropDownBtn = styled(motion.button)`
	font-size: 15px;
	background: transparent;
	border: none;
	outline: none;
	font-weight: 400;
	/* border: 1px solid red; */
	flex: 1;
	height: 100%;
	cursor: pointer;
	user-select: none;
	transition: color 0.5ms;
	color: ${(props: DropDownBtnProps) => (props.btnActive ? 'orange' : 'white')};
`;

export const NavBtnWrap = styled.div`
	display: flex;
	justify-content: space-around;
	/* border: 2px solid green; */
	flex: 1;
	border: 2px solid green;
`;

export const UserText = styled.p`
	font-size: 18px;
	color: white;
	text-transform: capitalize;
	font-weight: 400;
	user-select: none;
`;

interface DropDownProps {
	active: boolean;
}
export const DropDownContent = styled.div`
	height: 500px;
	border: 1px solid red;
	display: ${(props: DropDownProps) => (props.active ? 'block' : 'none')};
	/* width: 100vw; */

	position: absolute;
	top: 100%;
	width: 100vw;
	left: 0;
	background-color: #f7f7f7;
	overflow: scroll;
`;

export const DropDown = styled.div`
	flex: 1;
`;

interface BackDropProps {
	isOverlay: boolean;
}

export const BackDrop = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: #000;
	opacity: 0.4;
	z-index: -1;
	display: ${(props: BackDropProps) => (props.isOverlay ? 'block' : 'none')};
`;
