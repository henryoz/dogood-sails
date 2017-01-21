/**
 * CityController
 *
 * @description :: Server-side logic for managing cities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	indexCities: function(req, res) {
		City.find((err, cities) => {
			return res.send(cities)
		})
	},

	createCity: function(req, res) {
		const name = req.param('name')
		const description = req.param('description')
		City.create({
			name,
			description,
		})
		.then((success) => {
			return res.created(success)
		})
	},

	deleteCity: function(req, res) {
	//TODO: delete the city
	}
};
