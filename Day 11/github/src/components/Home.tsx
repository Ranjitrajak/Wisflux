import React, { KeyboardEventHandler, KeyboardEvent, useState } from 'react'
import "../style/home.css"
import axios, { AxiosResponse } from "axios"
import Avatar from './Avatar'
import Active from './Active'

interface User {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
	name: string
	company: string
	blog: string
	location: string
	email: any
	hireable: any
	bio: string
	twitter_username: any
	public_repos: number
	public_gists: number
	followers: number
	following: number
	created_at: string
	updated_at: string
}



const Home = (): JSX.Element => {

	const [eventResponse, setEventResponse] = useState([])

	const [userResponse, setUserResponse] = useState<User>()

	const [username, setUsername] = useState('')

	const handleEnter: KeyboardEventHandler = async (e: KeyboardEvent<HTMLInputElement>) => {

		if (e.code !== "Enter") return

		const userName: string = e.currentTarget.value



		setUsername(userName)

		try {
			const myEventResponse: AxiosResponse = await axios.get(`https://api.github.com/users/${userName}/events`)

			const myUserResponse: AxiosResponse = await axios.get(`https://api.github.com/users/${userName}`)

			setEventResponse(myEventResponse.data)

			setUserResponse(myUserResponse.data)




		} catch (e) {
			console.log(e)
		}
	}
	const avatarProps = {

		displayName: userResponse?.name,
		userName: username,
		imgUrl: userResponse?.avatar_url,
		repos: userResponse?.public_repos,
		followers: userResponse?.followers,
		following: userResponse?.following
	}

	return (
		<>
			<div className='profile'>
				<div className="logo">
					<img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='logo' />
					<h1>GitProfile</h1>

				</div>

				<input type="text"
					placeholder="Enter The GitHub Username"
					onKeyDown={handleEnter}
					className="input"
				/><br></br>

				{username
					&&
					<Avatar {...avatarProps} />}



			</div>

			<div className='activity'>
				<Active arr={eventResponse} />


			</div>

		</>
	)
}

export default Home
