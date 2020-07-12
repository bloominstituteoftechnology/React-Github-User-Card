/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import {
	Card,
	CardContent,
	Grid,
	CardHeader,
	Avatar,
	Typography,
	IconButton,
} from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

class AppCard extends Component {
	render() {
		return (
			<Card
				css={css`
					max-width: 100%;
				`}
			>
				<CardHeader
					css={css`
						background-color: #c5c1c9;
						display: flex;
						align-items: center;
					`}
					avatar={
						<Avatar
							css={css`
								width: 4rem;
								height: 4rem;
							`}
							alt={`${this.props.user.login}-user-image`}
							src={this.props.user.avatar_url}
						/>
					}
					action={
						<IconButton
							aria-label='settings'
							onClick={() => this.props.changeUser(this.props.user.login)}
						>
							<AssignmentIndIcon />
						</IconButton>
					}
					title={<Typography variant='h4'>{this.props.user.name}</Typography>}
					subheader={
						<Typography variant='h5'>{this.props.user.login}</Typography>
					}
				/>
				<CardContent>
					<Grid
						container
						justify='space-evenly'
						css={css`
							margin-bottom: 1rem;
						`}
					>
						<Typography variant='h6' component='span'>
							Followers: {this.props.user.followers}
						</Typography>
						<Typography variant='h6' component='span'>
							Following: {this.props.user.following}
						</Typography>
					</Grid>
					<Typography
						variant='body1'
						color='textSecondary'
						component='p'
						css={css`
							text-align: center;
						`}
					>
						Bio:
						{this.props.user.bio
							? ` ${this.props.user.bio}`
							: ' No Bio Available'}
					</Typography>
				</CardContent>
				<CardContent
					css={css`
						display: flex;
						justify-content: center;
					`}
				>
					<a href={this.props.user.html_url}>
						<img
							src={`http://ghchart.rshah.org/${this.props.user.login}`}
							alt={`${this.props.user.login}'s Github Chart`}
							css={css`
								width: 100%;
								transition: all 0.5s ease;
								&:hover {
									box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
								}
							`}
						/>
					</a>
				</CardContent>
			</Card>
		);
	}
}

export default AppCard;
