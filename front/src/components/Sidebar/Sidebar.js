import React from "react";
import styled from "styled-components";

const Sidebar = styled.section`
  color: white;
  padding: 10px;
`;

const SidebarLogo = styled.section`
  display: flex;

`;

const SidebarLogoImg = styled.img`
  height: 40px;
  width: 60px;
`;

const SidebarLogoTitle = styled.h2`
  color: #000000;

`;

const SidebarItem = styled.li`
  list-style-type: none;
  padding: none;
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
				<SidebarItem>
					<i data-eva="github"></i>
					<span>Discover</span>
				</SidebarItem>
				<SidebarItem>
					<i data-eva="github"></i>
					<span>Albums</span>
				</SidebarItem>
				<SidebarItem>
					<i data-eva="github"></i>
					<span>Artists</span>
				</SidebarItem>
				<SidebarItem>
					<i data-eva="github"></i>
					<span>Favorites</span>
				</SidebarItem>
			</SidebarNav>
		</div>
	</Sidebar>
  );
};
