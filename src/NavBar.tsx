import { Badge } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
// @ts-ignore
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useEffect, useState } from 'react';
import {
  BackDrop,
  DropDown,
  DropDownBtn,
  DropDownContent,
  FirstLogo,
  Header,
  IconBtn,
  Logo,
  LogoLinks,
  Nav,
  NavBtnWrap,
  ProfileDiv,
  SecondLogo,
  UserDiv,
  UserText
} from './style';

const NavBar = () => {
	const [elementPosition, setElementPosition] = useState(-1);
	const [overlay, setOverlay] = useState(false);

	const onHover = (value: number) => {
		// setOverlay()
		setElementPosition(value);
	};

	console.log('overlay', overlay);

	useEffect(() => {
		if (elementPosition > -1) {
			setOverlay(true);
			document.body.style.overflow = 'hidden';
		} else {
			setOverlay(false);
			document.body.style.overflow = '';
		}
	}, [elementPosition]);

	// Add Framer Motion in submene opening

	return (
		<Header>
			<Nav>
				<LogoLinks>
					<Logo>
						<FirstLogo>natty</FirstLogo>
						<SecondLogo>hatty</SecondLogo>
					</Logo>
					<NavButtons onHover={onHover} elementPosition={elementPosition} />
				</LogoLinks>
				<ProfileDiv>
					<SettingNavDropDown
						elementPosition={6}
						title="Settings"
						opened={elementPosition === 6}
						onHover={onHover}
					/>

					<UserDiv>
						<IconBtn type="button">
							<Badge badgeContent={11} color="secondary">
								<AccountCircle fontSize="large" />
							</Badge>
						</IconBtn>
						<UserText>Adit Agrawal</UserText>
					</UserDiv>
				</ProfileDiv>
			</Nav>
			<BackDrop isOverlay={overlay} />
		</Header>
	);
};

export default NavBar;

// backdrop could be just overlay to show something is opened
// hover highlight setting icon

const NavButtons = ({ onHover, elementPosition }: any) => {
	return (
		<NavBtnWrap>
			<NavDropDown
				elementPosition={0}
				title="Dashboard"
				opened={elementPosition === 0}
				onHover={onHover}
			/>
			<NavDropDown
				elementPosition={1}
				title="Calender"
				opened={elementPosition === 1}
				onHover={onHover}
			/>
			<NavDropDown
				elementPosition={2}
				title="Programs"
				opened={elementPosition === 2}
				onHover={onHover}
			/>
			<NavDropDown
				elementPosition={3}
				title="Customers"
				opened={elementPosition === 3}
				onHover={onHover}
			/>
			<NavDropDown
				elementPosition={4}
				title="Invoices"
				opened={elementPosition === 4}
				onHover={onHover}
			/>
			<NavDropDown
				elementPosition={5}
				title="Finanacials"
				opened={elementPosition === 5}
				onHover={onHover}
			/>
		</NavBtnWrap>
	);
};

const NavDropDown = ({ title, opened, elementPosition, onHover }: any) => {
	return (
		<DropDown onMouseLeave={() => onHover(-1)}>
			<DropDownBtn
				onMouseEnter={() => onHover(elementPosition)}
				btnActive={opened}
			>
				{title}
			</DropDownBtn>
			<DropDownContent active={opened}>
				<div className="dropdown-content">
					<h1 style={{ border: '1px solid red' }}>{title}</h1>
					<h1>{title}</h1>
					<h1>{title}</h1>
					<p>New here Welcome to natty hatty</p>
				</div>
			</DropDownContent>
		</DropDown>
	);
};

const SettingNavDropDown = ({
	title,
	opened,
	elementPosition,
	onHover,
}: any) => {
	return (
		<div
			style={{
				height: '100%',
				display: 'flex',
				alignItems: 'center',
			}}
			onMouseLeave={() => onHover(-1)}
		>
			<IconBtn onMouseEnter={() => onHover(elementPosition)} type="button">
				<SettingsIcon fontSize="large" />
			</IconBtn>
			<DropDownContent active={opened}>
				<h1>{title}</h1>
				<h1>{title}</h1>
				<h1>{title}</h1>
			</DropDownContent>
		</div>
	);
};
