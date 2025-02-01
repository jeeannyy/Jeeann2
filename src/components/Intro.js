import React from 'react';
import '../styles/Intro.css';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FadeInSection from './FadeInSection';

const Intro = () => {
	return (
		<div id='intro'>
			<Typist avgTypingDelay={120}>
				<span className='intro-title'>
					{'Hi, '}
					<span className='intro-name'>{'Jeeann'}</span>
					{' here!'}
				</span>
			</Typist>
			<FadeInSection>
				<div className='intro-subtitle'>I create stuff sometimes.</div>
				<div className='intro-desc'>
					I'm a Software Engineer and Artist based in London 🇬🇧. I have a great
					interest in human-computer interactions, media arts, artificial
					intelligence, and everything in between.
				</div>
				<a href='mailto:jeeann.kim@gmail.com' className='intro-contact'>
					<EmailRoundedIcon />
					{'  Say hi!'}
				</a>
			</FadeInSection>
		</div>
	);
};

export default Intro;
