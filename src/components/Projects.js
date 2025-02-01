import React from 'react';
import '../styles/Projects.css';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import FadeInSection from './FadeInSection';
import ExternalLinks from './ExternalLinks';

const projects = {
	'Kimchi shop': {
		desc: "This app was created to sell Korea's Korgeous Kimchi.",
		techStack: 'Redux, React.js, React Router, Axios, Bootstrap',
		link: 'https://kimchi-shop.netlify.app/kimchi-shop',
		open: 'https://github.com/jeeannyy/kimchi-shop',
	},
	'Harry Potter House Test': {
		desc: 'This app lets you know which Hogwarts dorm you belong to.',
		techStack: 'React.js, React Router, SCSS',
		link: 'https://github.com/chingu-voyages/v42-geckos-team-12',
		open: 'https://chingu-voyages.github.io/v42-geckos-team-12',
	},
	'News app': {
		desc: 'A News app that user can view, discuss, rate articles.',
		techStack: 'React, React Router, Axios, CSS',
		link: 'https://github.com/jeeannyy/News-app',
		open: 'https://jeeannyy.github.io/News-app',
	},
	'Coin Tracker': {
		desc: "A coin tracker application that you can find the real-time cryptos' ranking, price chart, and history",
		techStack: 'React, TypeScript, Styled-components',
		link: 'https://github.com/jeeannyy/Coin-Tracker',
		open: 'https://jeeannyy.github.io/Coin-Tracker/',
	},
	Jeflix: {
		desc: 'This is a clone of the Netflix website built using React.JS as a Front-end.',
		techStack: 'React, TypeScript, Styled-components',
		link: 'https://github.com/jeeannyy/jetflix',
		open: 'https://jeeannyy.github.io/jetflix/',
	},
	'Pocket Forest': {
		desc: "A location-based tree capture application. The user can take a picture of the tree using the map and tree marker. If the species is a match with our database, the tree has been added to user's pocket forest page.",
		techStack: 'React Native, Expo, MongoDB, Jest, Heroku',
		link: 'https://github.com/jeeannyy/Pocket-Forest',
	},
	'Weather app': {
		desc: "This is an application that informs the weather based on the user's real-time location",
		techStack: 'React Native',
		link: 'https://github.com/jeeannyy/Weather-app',
		open: '',
	},
	Trello: {
		desc: 'Cloned basic features of Trello application. You can add and delete boards and tasks',
		techStack: 'React, TypeScript, Styled-components',
		link: 'https://github.com/jeeannyy/Trello-Clone',
		open: 'https://jeeannyy.github.io/Trello-Clone',
	},
	'Paint app': {
		desc: 'A paint app for all age of people.',
		techStack: 'JavaScript, HTML5 / CSS',
		link: 'https://github.com/jeeannyy/Paint-app',
		open: 'https://painting-jeeann.netlify.app',
	},
	Kokoatalk: {
		desc: 'Cloned Korean messanger application, Kakaotalk.',
		techStack: 'HTML5, CSS',
		link: 'https://github.com/jeeannyy/Kokoatalk',
		open: 'https://kokoatalk-jeeann.netlify.app/',
	},
	'Drum Kit': {
		desc: 'A drum application that everyone can play it.',
		techStack: 'JavaScript, HTML5, CSS',
		link: 'https://drumkit-jeeann.netlify.app',
		open: 'https://github.com/jeeannyy/Drum-Kit',
	},
	'Todo Todo': {
		desc: 'Simple design To do list application.',
		techStack: 'React, CSS',
		link: 'https://github.com/jeeannyy/TodoTodo',
		open: 'https://jeeannyy.github.io/TodoTodo/',
	},
	London: {
		desc: 'A poster for practicing CSS grid and flex.',
		techStack: 'HTML5, CSS',
		link: 'https://github.com/jeeannyy/London',
		open: '',
	},
	'Bad Religion': {
		desc: 'A poster for practicing CSS grid and flex.',
		techStack: 'HTML5, CSS',
		link: 'https://github.com/jeeannyy/Bad-Religion',
		open: '',
	},
	'Dice game': {
		desc: 'A dice game made with Vanilla JS.',
		techStack: 'JavaScript, HTML5, CSS',
		link: 'https://github.com/jeeannyy/Dice-Game',
		open: 'https://dicegame-jeeann.netlify.app',
	},
	'Real Time Chat': {
		desc: 'A simple chat app that multiple people can join and chat in real time.',
		techStack: 'socket.io, Javascript',
		link: 'https://github.com/jeeannyy/Real-Time-Chat',
		open: '',
	},
};

const Projects = () => {
	return (
		<div id='projects'>
			<div className='section-header'>
				<span className='section-title'>/ software-creations</span>
			</div>
			<div className='project-container'>
				<ul className='projects-grid'>
					{Object.entries(projects).map(([key, project], i) => (
						<FadeInSection key={i} delay={`${i + 1}00ms`}>
							<li className='projects-card'>
								<div className='card-header'>
									<div className='folder-icon'>
										<FolderOpenRoundedIcon style={{ fontSize: 35 }} />
									</div>
									<ExternalLinks
										githubLink={project.link}
										openLink={project.open}
									/>
								</div>
								<div className='card-title'>{key}</div>
								<div className='card-desc'>{project.desc}</div>
								<div className='card-tech'>{project.techStack}</div>
							</li>
						</FadeInSection>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
