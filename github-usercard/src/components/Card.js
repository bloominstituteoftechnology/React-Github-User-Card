import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardContent,
	Grid,
	CardHeader,
	Avatar,
	Typography,
	IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
	root: {
		width: '18rem',
		height: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		// minHeight: '18rem',
		// minWidth: '18rem',
		padding: '1rem',
	},
	header: {
		backgroundColor: '#414141',
		color: '#f3eff7',
	},
	image: {
		height: '5rem',
		width: '5rem',
	},
	followText: {
		margin: '.5rem',
	},
});

export default function AppCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				className={classes.header}
				avatar={
					<Avatar
						alt={`${props.user.login}-user-image`}
						className={classes.image}
						src={props.user.avatar_url}
					/>
				}
				action={
					<IconButton aria-label='settings'>
						<ExpandMoreIcon />
					</IconButton>
				}
				title={props.user.name}
				subheader={props.user.login}
			/>
			<CardContent>
				<Grid container justify='center'>
					<Typography className={classes.followText}>
						Followers: {props.user.followers}
					</Typography>
					<Typography className={classes.followText}>
						Following: {props.user.following}
					</Typography>
				</Grid>
				<Typography variant='body2' color='textSecondary' component='p'>
					Bio: {props.user.bio ? props.user.bio : 'No Bio Available'}
				</Typography>
			</CardContent>
			{/* <CardActionArea>
				<Avatar
					alt={`${props.user.login}-user-image`}
					className={classes.image}
					src={props.user.avatar_url}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{props.user.name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{props.user.bio}
					</Typography>
				</CardContent>
			</CardActionArea> */}
			{/* <CardActions>
				<Button size='small' color='primary'>
					Share
				</Button>
				<Button size='small' color='primary'>
					Learn More
				</Button>
			</CardActions> */}
		</Card>
	);
}
