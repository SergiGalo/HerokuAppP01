var path = require('path');
// Cargar el modelo ORM
var Sequelize = require('sequelize');
//Uso de la BBDD SQLite
var sequelize = new Sequelize(null, null, null,
	{
		dialect:  "sqlite",
		storage:  "tblsqlite.sqlite"
	}
);

//Importación al objeto sequelize la tabla a Tbltareas que esta en tbltareas.js
var Tbltareas = sequelize.import(path.join(__dirname,'tbltareas'));
//Exportar definición de la tabla Tbltareas, para usarlo en otros lugares de la app
exports.Tbltareas = Tbltareas;

sequelize.sync().then(function() {
	Tbltareas.count().then(function (count){
		if (count === 0) {
			Tbltareas.create({nombre: 'Reunión con cliente',
						etiquetas: 'Node, Fechas',
						porcentaje: 15
			});
				Tbltareas.create({nombre: 'Desarrollo del mockup',
						etiquetas: 'Node, Mockup, Diseño',
						porcentaje: 50
			});
				Tbltareas.create({nombre: 'Generar repositorio Git',
						etiquetas: 'Node, Versiones',
						porcentaje: 100
			});
			//.then(function(){console.log('Base de datos inicializada')});
		};
	});
});
