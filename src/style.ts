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
		/* width: 100px; */
		/* border: 1px solid hotpink; */
	}
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

export const NavBtn = styled(motion.button)`
	font-size: 15px;
	color: white;
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

	&:hover {
		color: orange;
	}
`;

export const NavBtnWrap = styled.div`
	display: flex;
	justify-content: space-around;
	/* border: 2px solid green; */
	flex: 1;
`;

export const UserText = styled.p`
	font-size: 18px;
	color: white;
	text-transform: capitalize;
	font-weight: 400;
	user-select: none;
`;
