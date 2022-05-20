import React from 'react';
import Logopage from '../components/Logopage';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import SectionBar from '../components/SectionBar';
import NavBarLeft from '../components/NavBarLeft';

const Inicio = () => {
	return (
		<div className="w-full flex flex-col h-screen ">
			<nav className="w-full dropShadow justify-items-end">
				<NavBarLeft />
			</nav>

			<div className="flex w-full justify-center">
				<section className="flex flex-col items-center w-4/5">
					<Logopage />
					<Footer />
					<SocialLinks />
					<SectionBar />
				</section>
			</div>
		</div>
	);
};

export default Inicio;
