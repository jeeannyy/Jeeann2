import React from 'react';
import '../styles/Credits.css';
import FadeInSection from './FadeInSection';

const Credits = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FadeInSection>
			<div id='credits'>
				<div className='ending-credits'>
					<div>Copyright © {currentYear} Jeeann 🦕. All rights reserved.</div>
				</div>
			</div>
		</FadeInSection>
	);
};

export default Credits;
