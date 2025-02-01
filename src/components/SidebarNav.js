import React from 'react';
import { Sidenav } from 'rsuite';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/SidebarNav.css';
import FadeInSection from './FadeInSection';

const isMobile = window.innerWidth < 600;

const SidebarNav = () => {
	const links = [
		{ label: '/home', href: '#intro' },
		{ label: '/about', href: '#about' },
		{ label: '/experience', href: '#experience' },
		{ label: '/software-creations', href: '#projects' },
	];

	return (
		<div className='sidebar-nav'>
			{!isMobile && (
				<Sidenav appearance='subtle'>
					<div className='sidebar-links'>
						{links.map((link, i) => (
							<FadeInSection key={i} delay={`${i + 1}00ms`}>
								<a href={link.href}>{link.label}</a>
							</FadeInSection>
						))}
					</div>
				</Sidenav>
			)}
			<div className='sidebar-logos'>
				<a href='mailto:jeeann.dev@gmail.com'>
					<EmailRoundedIcon style={{ fontSize: 25 }} />
				</a>
				<a href='https://github.com/jeeannyy'>
					<GitHubIcon style={{ fontSize: 24 }} />
				</a>
				<a href='https://www.linkedin.com/in/jeeanny/'>
					<LinkedInIcon style={{ fontSize: 26 }} />
				</a>
			</div>
		</div>
	);
};

export default SidebarNav;
