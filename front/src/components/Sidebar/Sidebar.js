import React from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
const Sidebar = styled.section`
  color: white;
  padding: 20px;
  height: 100vh;
  z-index: 1;
  position: fixed;
  width: 12vw;
  background-color: #FFF;
`;

const SidebarLogo = styled.section`
  display: flex;
  align-items: center;
  margin: 30px 0 60px 0;
`;

const SidebarLogoImg = styled.img`
	margin-right: 20px;
	height: 40px;
  	width: 60px;
`;

const SidebarLogoTitle = styled.h2`
  	color: #0F1D36;
	font-size: 1.2rem;
`;

const SidebarItem = styled.li`
  display: flex;
  color: #0F1D36;
  opacity: 50%;
  list-style-type: none;
  padding: none;
  margin: 20px 0;
  transition: 0.3s;

  &:hover {
	  color: #3E2AD1;
	  opacity: 100%;
	  cursor: pointer;
	  transition: 0.3s;
  }
`;

const SidebarItemLabel = styled.span`
  margin-left: 10px;
  font-size: 1.2rem;
`;

const SidebarNav = styled.li`
  padding: none;
`;

export default () => {
  return (
	<Sidebar>
		<SidebarLogo id="logo">
			<SidebarLogoImg src="https://i.redd.it/fnutbjqyahj21.jpg"/>
			<SidebarLogoTitle>Tongo Music</SidebarLogoTitle>
		</SidebarLogo>

		<div id="navbar">
				<SidebarNav>
					<Link to="/">
						<SidebarItem>
							<Icon 
								name="activity"
								size="large"
								fill="#000000"     // small, medium, large, xlarge
								animation={{
								type: "pulse",  // zoom, pulse, shake, flip
								hover: true,
								infinite: false 
								}}
							/>
							<SidebarItemLabel>Discover</SidebarItemLabel>
						</SidebarItem>
					</Link>
					<Link to="/albums">
						<SidebarItem>
							<Icon 
								name="book-open-outline"
								size="large"
								fill="#000000"     // small, medium, large, xlarge
								animation={{
								type: "pulse",  // zoom, pulse, shake, flip
								hover: true,
								infinite: false 
								}}
							/>
							<SidebarItemLabel>Albums</SidebarItemLabel>
						</SidebarItem>
					</Link>
					<Link to="/artists">
						<SidebarItem>
							<Icon 
								name="person-outline"
								size="large"
								fill="#000000"     // small, medium, large, xlarge
								animation={{
								type: "pulse",  // zoom, pulse, shake, flip
								hover: true,
								infinite: false 
								}}
							/>
							<SidebarItemLabel>Artists</SidebarItemLabel>
						</SidebarItem>
					</Link>
					<Link to="/favorites">
						<SidebarItem>
							<Icon 
								name="heart-outline"
								size="large"
								fill="#000000"     // small, medium, large, xlarge
								animation={{
								type: "pulse",  // zoom, pulse, shake, flip
								hover: true,
								infinite: false 
								}}
							/>
							<SidebarItemLabel>Favorites</SidebarItemLabel>
						</SidebarItem>
					</Link>
				</SidebarNav>
		</div>
	</Sidebar>
  );
};
