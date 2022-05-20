import { useState } from 'react';

const FormRegister = () => {
	/*const [datos, setDatos] = useState({
		nombre: '',
		email: '',
		password: '',
	});
	let handleChange = (e) => {
		const { name, value } = e.target;
		setDatos((old) => ({
			...old,
			[name]: value,
		}));
	};
	let handleSubmit = (e) => {
		e.preventDefault();
	};*/
	return (
		<form
			className="w-1/4 h-96 bg-[#ffffff52]  rounded flex flex-col justify-around items-center text-center p-4"
			//onSubmit={handleSubmit}
		>
			<h2 className="text-[#0791e6] font">
				<strong>Regístrate para aprender programación</strong>
			</h2>
			<input
				type="text"
				name="nombre"
				className="p-2 rounded w-full"
				placeholder="Ingrese su Usuario..."
				//value={datos.nombre}
				//handleChange={handleChange}
			/>
			<input
				type="email"
				name="email"
				className="p-2 rounded w-full"
				placeholder="Ingrese su email..."
				//value={datos.email}
				//handleChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				className="p-2 rounded w-full"
				placeholder="Ingrese su password..."
				//value={datos.password}
				//handleChange={handleChange}
			/>
			<button
				type="submit"
				className="bg-[#0791e6] text-[#fff] py-4 px-11 rounded hover:drop-shadow-md"
			>
				Registrarme
			</button>
		</form>
	);
};

export default FormRegister;
