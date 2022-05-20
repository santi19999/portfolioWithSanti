/**
 * Se necesita una URL y un objeto, convierte el objeto en JSON y lo envía a la URL
 */
async function postData(url, data = {}, num) {
	let datos = {
		titulo: data.titulo,
		autor: data.autor,
		contenido: data.contenido,
		numPost: num,
	};
	let res = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		body: JSON.stringify(data),
	});
	let json = await res.json();
	console.log(json);
}

module.exports = postData;
