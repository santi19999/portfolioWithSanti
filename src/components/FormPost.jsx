import { React, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import postData from '../hooks/CrudPost';
const Axios = require('axios');

const FormPost = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		Axios.get('http://localhost:3001/api/blog').then((response) =>
			setPosts(response.data)
		);
	}, []);

	function capitalizarPrimeraLetra(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	const urlCreate = 'http://localhost:3001/api/blog/create';
	let initialState = {
		titulo: '',
		autor: '',
		contenido: '',
		numPost: 0,
	};
	let [date, setDate] = useState(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDate((old) => ({
			...old,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!date.titulo.trim()) {
			return Swal.fire({
				title: 'Error!',
				text: 'El campo Título es obligatorio',
				icon: 'error',
			});
		}
		if (!date.autor.trim()) {
			return Swal.fire({
				title: 'Error!',
				text: 'El campo Autor es obligatorio',
				icon: 'error',
			});
		}
		if (!date.contenido.trim()) {
			return Swal.fire({
				title: 'Error!',
				text: 'El campo Contenido es obligatorio',
				icon: 'error',
			});
		}

		try {
			let titulo = capitalizarPrimeraLetra(date.titulo);
			let autor = capitalizarPrimeraLetra(date.autor);
			let contenido = capitalizarPrimeraLetra(date.contenido);
			if (posts.length !== 0) {
				let num = posts.length + 1;
				postData(urlCreate, { titulo, autor, contenido }, num);
			} else {
				postData(urlCreate, { titulo, autor, contenido }, 1);
			}
		} catch (error) {
			return Swal.fire({
				title: 'Error',
				text: 'No se pudo publicar el Post!',
				icon: 'error',
			});
		}

		return Swal.fire({
			title: 'Éxito',
			text: '¡Post publicado satisfactoriamente',
			icon: 'success',
		});

		//setDate(initialState);
	};
	return (
		<div className="w-full">
			<form
				className="w-3/4 flex flex-col bg-[#F2F3F4] drop-shadow-xl rounded px-8 pt-6 pb-8 mb-4 "
				onSubmit={handleSubmit}
			>
				<label htmlFor="titulo" className="text-[#34495E] text-lg">
					Titulo
				</label>
				<input
					type="text"
					name="titulo"
					id="titulo"
					className="rounded text-[#34495E] text-lg "
					value={date.titulo}
					onChange={handleChange}
				/>
				<label htmlFor="autor" className="text-[#34495E] text-lg">
					Autor
				</label>
				<input
					type="text"
					name="autor"
					id="autor"
					className="rounded text-[#34495E] text-lg "
					value={date.autor}
					onChange={handleChange}
				/>
				<label htmlFor="contenido" className="text-[#34495E] text-lg">
					Contenido
				</label>
				<textarea
					name="contenido"
					id="contenido"
					cols="22"
					rows="10"
					className="text-[#34495E] text-lg rounded mb-4"
					value={date.contenido}
					onChange={handleChange}
				></textarea>
				<button className="bg-orange p-2 rounded tex" type="submit">
					Publicar
				</button>
			</form>
			{}
		</div>
	);
};

export default FormPost;
