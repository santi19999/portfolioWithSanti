import React from 'react';

const SocialLinks = () => {
	let redes = [
		{
			name: 'Twitter',
			link: 'http://www.twitter.com/santiherrera',
			color: 'text-xl text-[#1d9bf0] hover:underline',
		},
		{
			name: 'GitHub',
			link: 'http://www.github.com/santi19999',
			color: 'text-xl text-light hover:underline',
		},
		{
			name: 'Twitch',
			link: 'http://www.twitch.tv/ssherrera1999',
			color: 'text-xl text-[#9147ff] hover:underline',
		},
	];
	const listItems = redes.map((red) => (
		<li key={red.name}>
			<a href={red.link} target="_blank" rel="noreferrer" className={red.color}>
				{red.name}
			</a>
		</li>
	));

	return (
		<ul className=" text-center flex justify-around w-4/6 mb-7">{listItems}</ul>
	);
};

export default SocialLinks;
