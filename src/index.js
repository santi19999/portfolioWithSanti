import React from 'react';
import ReactDOM from 'react-dom/client';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Blog from './routes/Blog';
import Cursos from './routes/Cursos';
import Noticias from './routes/Noticias';
import Inicio from './routes/Inicio';
import Create from './routes/Create';
import Post from './components/Post';
import Register from './routes/Register';
import Login from './routes/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="blog" element={<Blog />} />
					<Route path="post/:id" element={<Post />} />
					<Route path="cursos" element={<Cursos />} />
					<Route path="noticias" element={<Noticias />} />
					<Route path="create" element={<Create />} />
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
