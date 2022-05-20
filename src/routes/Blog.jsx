import { useEffect, useState } from 'react';
import Post from '../components/Post';
import NavBarLeft from '../components/NavBarLeft';
import FormRegister from '../hooks/FormRegister';

const Axios = require('axios');

const Blog = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		Axios.get('http://localhost:3001/api/blog').then((response) =>
			setPosts(response.data.reverse())
		);
	}, []);

	return (
		<>
			<nav className="w-full dropShadow justify-items-end">
				<NavBarLeft />
			</nav>
			<div className="imgHeader">
			</div>
			<div className="containerPostGeneral mt-4">
				<div className="ForumListLayout">
					<section className="containerPost">
						<div className="grid auto-rows-max auto-cols-max gap-2">
							{posts.map((post) => (
								<Post datosPost={post} key={post._id} />
							))}
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Blog;
