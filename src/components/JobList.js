import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FadeInSection from './FadeInSection';

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	if (isHorizontal) {
		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`full-width-tabpanel-${index}`}
				aria-labelledby={`full-width-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box p={3}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	} else {
		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`vertical-tabpanel`}
				{...other}
			>
				{value === index && (
					<Box p={3}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	if (isHorizontal) {
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		};
	} else {
		return {
			id: `vertical-tab-${index}`,
		};
	}
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'theme.palette.background.paper',
		display: 'flex',
		height: 300,
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
}));

const JobList = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const experienceItems = {
		StoreBoost: {
			jobTitle: 'Frontend Developer @',
			duration: 'FEB 2023 - Present',
			desc: [
				'* Building applications for the media planning platform for stakeholders',
				'Tech Stack: React.js, TypeScript, Redux, Git, Material UI, Chart JS',
			],
		},
		'Code First Girls': {
			jobTitle: 'Course Instructor @',
			duration: 'NOV 2022 - Present',
			desc: [
				'Teaching online web development courses to women who are beginners in programming',
				"Leading lectures and supporting other instructors' classes, assisting in their presentations",
				'Tech Stack: JavaScript, Git, HTML, CSS',
			],
		},

		freeCodeCamp: {
			jobTitle: 'Open Source Contributor @',
			duration: 'OCT 2022 - Present',
			desc: [
				'Translating and reviewing freeCodeCamp tutorials from English to Korean for Korean developer community',
			],
		},

		'Athena Hackathon': {
			jobTitle: 'Frontend Developer @',
			duration: 'OCT 2022',
			desc: [
				'Won the Best User Journey Prize from Valtech',
				'Built an impact investment app that allows everyone to invest in socially and environmentally focused projects and companies through their daily spending activities, using our round-up feature.',
				'Tech Stack: Python, Figma',
			],
		},
		TikTok: {
			jobTitle: 'AI Data Operator Specialist @',
			duration: 'SEP 2020 - FEB 2022',
			desc: [
				'Machine Translation Project with AI-Lab-NLP-Machine Learning team',
				'Worked cooperatively with the internal and global team to build QA policies and created documentation related to Korean trends',
				'Identified controversial cases and errors using the content review & discussion set-up within the team and to be updated stakeholders',
			],
		},
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation={!isHorizontal ? 'vertical' : null}
				variant={isHorizontal ? 'fullWidth' : 'scrollable'}
				value={value}
				onChange={handleChange}
				className={classes.tabs}
			>
				{Object.keys(experienceItems).map((key, i) => (
					<Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
				))}
			</Tabs>
			{Object.keys(experienceItems).map((key, i) => (
				<TabPanel value={value} index={i}>
					<span className='joblist-job-title'>
						{experienceItems[key]['jobTitle'] + ' '}
					</span>
					<span className='joblist-job-company'>{key}</span>
					<div className='joblist-duration'>
						{experienceItems[key]['duration']}
					</div>
					<ul className='job-description'>
						{experienceItems[key]['desc'].map(function (descItem, i) {
							return (
								<FadeInSection delay={`${i + 1}00ms`}>
									<li key={i}>{descItem}</li>
								</FadeInSection>
							);
						})}
					</ul>
				</TabPanel>
			))}
		</div>
	);
};

export default JobList;
