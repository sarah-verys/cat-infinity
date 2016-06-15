var AppActions = require('../actions/AppActions');
var popsicle = require('popsicle');

module.exports = {
	translate: function(word) {
		return new Promise(function (resolve, reject) {
			// TODO: Sanitize word per Giphy API requirements
			popsicle.get(`http://api.giphy.com/v1/gifs/translate?s=${word}&api_key=dc6zaTOxFJmzC`)
				.catch(function(response) {
					// Error			    
					reject(response);
				})
				.then(function (response) {
					if (response.status > 199 && response.status < 400) {
						resolve(response.body);
					} else {
						// Error			    
						reject(response);
					}
			 	})
		});

	}
}