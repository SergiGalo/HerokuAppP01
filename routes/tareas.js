var express = require('express');
var router = express.Router();
var models = require('../models/models.js');

/* GET tareas listing */
router.get('/', function(req,res,next) {
	//res.render('tareas_lista', { title: 'Tareas', tareas: tareas});

	//findAll devuelve un array con el contenido de la BBDD
	models.Tbltareas.findAll().then(
				function(tbltareas) {
					for (var i = 0; i < tbltareas.length; i++) {
						var arrTags = tbltareas[i].etiquetas.split(',');
						tbltareas[i].etiquetas = arrTags;
					}
					console.log(tbltareas.etiquetas);
					res.render('tareas_lista', { tareas: tbltareas, errors: []});
	}).catch(function(error) {
		console.log("Error");
	})
});

/*
router.get('/new', function(req,res,next) {
	res.render('tareas_new', { title: 'Nueva tarea' });
});

router.post('/crear', function(req,res,next) {
	var arrTags = req.body.tags;
	arrTags = arrTags.split(',');
	var nuevaTarea = {
		nom: req.body.nom,
		etiquetes: arrTags,
		realitzacio: req.body.percent
	}
	tareas.push(nuevaTarea);
  res.redirect('/tareas');
});
*/

module.exports = router;
