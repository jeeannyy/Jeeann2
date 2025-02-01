import React, { useState } from 'react';
import { Sidenav } from 'rsuite';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import '../styles/SidebarNav.css';
import 'react-typist/dist/Typist.css';
import FadeInSection from './FadeInSection';

const isMobile = window.innerWidth < 600;

const SidebarNav = () => {
	const [expanded, setExpanded] = useState(true);
	const [activeKey, setActiveKey] = useState('1');

	const handleSelect = (eventKey) => {
		setActiveKey(eventKey);
	};

	const links = [
		<a key='home' href='#intro'>
			/home
		</a>,
		<a key='about' href='#about'>
			/about
		</a>,
		<a key='experience' href='#experience'>
			/experience
		</a>,
		<a key='projects' href='#projects'>
			/software-creations
		</a>,
	];

	return (
		<div className='sidebar-nav'>
			{!isMobile && (
				<Sidenav
					expanded={expanded}
					defaultOpenKeys={['3', '4']}
					activeKey={activeKey}
					onSelect={handleSelect}
					appearance='subtle'
				>
					<Sidenav.Body>
						<div className='sidebar-links'>
							{links.map((link, i) => (
								<FadeInSection key={i} delay={`${i + 1}00ms`}>
									<div>{link}</div>
								</FadeInSection>
							))}
						</div>
					</Sidenav.Body>
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
