import '../style/active.css'

interface avatarProps {
	displayName: string | undefined,
	imgUrl: string | undefined,
	repos: number | undefined,
	followers: number | undefined,
	following: number | undefined,
	userName: string | undefined
}

const Avatar = (props: avatarProps): JSX.Element => {
	return (
		<>
			
			<div className="main">
				<a href={ `https://www.github.com/${ props.userName }` }>

					<img src={ props.imgUrl } id="image" alt=""/>
				</a>
				<div className="username">{ props.displayName }</div>
				<div className="Info">
					<div className="repos">Total Repos : {props.repos}</div>
					<div className="followers">Followers: {props.followers}</div>
					<div className="following">Following: {props.following}</div>
				</div>
			</div>
		
		</>
	)
}

export default Avatar