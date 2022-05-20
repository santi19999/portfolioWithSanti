import FormPost from '../components/FormPost';
import NavBarLeft from '../components/NavBarLeft';

const Create = () => {
	return (
		<>
			<nav className="w-full dropShadow justify-items-end">
				<NavBarLeft />
			</nav>
			<FormPost />
		</>
	);
};

export default Create;
