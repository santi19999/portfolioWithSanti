const express = require('express');
const { postModel } = require('../models');
const { handleHttpError } = require('../utils/handleErrors');
const { matchedData } = require('express-validator');

/**
 * Obtiene todas las publicaciones de la base de datos y las envía al cliente.
 * @param req - el objeto de solicitud.
 * @param res - el objeto de respuestastastasta
 */
const getPosts = async (req, res) => {
	try {
		const data = await postModel.find({});
		res.send(data);
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_ITEMS');
	}
};
/**
 * Obtiene una publicación por un id específico.
 * @param req - The request object.
 * @param res - The response object.
 */
const getPost = async (req, res) => {
	try {
		req = matchedData(req);
		const { id } = req;
		const data = await postModel.findById(id);
		res.send({ data });
	} catch (error) {
		handleHttpError(res, 'ERROR_GET_ITEMS');
	}
};

const createPost = async (req, res) => {
	try {
		const { body } = req;
		const data = await postModel.create(body);
		res.send({ data });
	} catch (error) {
		handleHttpError(res, 'ERROR_CREATE_ITEM');
		console.log(error);
	}
};

module.exports = { getPosts, getPost, createPost };
