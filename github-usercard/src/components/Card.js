import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	CardHeader,
	Avatar,
	Typography,
	IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
	root: {
		// maxWidth: 345,
		minHeight: '100%',
		minWidth: '100%',
		padding: '1rem',
	},
	image: {
		height: '5rem',
		width: '5rem',
	},
});

export default function AppCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
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
