import iconHome from '../images/casa.svg';
import iconBlog from '../images/editar.svg';
import iconCursos from '../images/libro-alt.svg';
import iconNoticias from '../images/megafono.svg';
import { Link } from 'react-router-dom';

const NavBarLeft = () => {
	let pageLikns = [
		{
			id: 1,
			name: 'Inicio',
			link: '/',
			icon: iconHome,
		},
		{
			id: 2,
			name: 'Mi Blog',
			link: '/blog',
			icon: iconBlog,
		},
		{
			id: 3,
			name: 'Mis Cursos',
			link: '/Cursos',
			icon: iconCursos,
		},
		{
			id: 4,
			name: 'Noticias',
			link: '/Noticias',
			icon: iconNoticias,
		},
		{
			id: 5,
			name: 'Sign Up',
			link: '/login',
			icon: '',
		},
		{
			id: 6,
			name: 'Sign In',
			link: '/register',
			icon: '',
		},
	];
	let handleOnclick = () => {};

	return (
		<ul className="flex navBar w-full  text-center text-[#fff]">
			{pageLikns.map((item) => (
				<li key={item.id} className=" w-full center p-3 hover:opacity-70">
					<Link
						className={
							item.id === 5
								? 'w-24 bg-[#0791e6] rounded ml-4 logIn'
								: item.id === 6
								? 'w-24 underline underline-offset-4 hover:text-[#0791e6] signIn'
								: 'w-24'
						}
						to={item.link}
						onClick={item.id === 6 ? handleOnclick : ''}
					>
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavBarLeft;
