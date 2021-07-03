import { Badge } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// @ts-ignore
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import {
	FirstLogo,
	Header,
	Logo,
	LogoLinks,
	Nav,
	NavBtn,
	NavBtnWrap,
	ProfileDiv,
	SecondLogo,
	UserDiv,
	UserText,
} from './style';

const NavBar = () => {
	return (
		<Header>
			<Nav>
				<LogoLinks>
					<Logo>
						<FirstLogo>natty</FirstLogo>
						<SecondLogo>hatty</SecondLogo>
					</Logo>
					<NavButtons />
				</LogoLinks>
				<ProfileDiv>
					<IconButton
						className="setting-icon"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
					>
						<SettingsIcon fontSize="large" />
					</IconButton>
					<UserDiv>
						<IconButton aria-label="show profile options" color="inherit">
							<Badge badgeContent={11} color="secondary">
								<AccountCircle fontSize="large" />
							</Badge>
						</IconButton>

						<UserText>Adit Agrawal</UserText>
					</UserDiv>
				</ProfileDiv>
			</Nav>
		</Header>
	);
};

export default NavBar;

const NavButtons = () => {
	console.log('NavButton');
	return (
		<NavBtnWrap>
			<DashboardDropDown />
			<NavBtn>Calender</NavBtn>
			<NavBtn>Programs</NavBtn>
			<NavBtn>Teams</NavBtn>
			<NavBtn>Customers</NavBtn>
			<NavBtn>Invoices</NavBtn>
			<NavBtn>Finanacials</NavBtn>
		</NavBtnWrap>
	);
};

const DashboardDropDown = () => {
	console.log('NavButton');
	return (
		<div>
			<NavBtn>Dashboard</NavBtn>
			<div>
				<h1>Dashboard</h1>
				<h1>Dashboard</h1>
				<h1>Dashboard</h1>
				<h1>Dashboard</h1>
				<h1>Dashboard</h1>
				<h1>Dashboard</h1>
				<h1>Dashboard</h1>
			</div>
		</div>
	);
};
