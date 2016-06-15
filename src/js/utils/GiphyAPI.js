var AppActions = require('../actions/AppActions');
var popsicle = require('popsicle');

module.exports = {
	translate: function(word) {
		return new Promise(function (resolve, reject) {
			// TODO: Sanitize word per Giphy API requirements to make this a more robust API request
			popsicle.get(`http://api.giphy.com/v1/gifs/translate?s=${word}&api_key=dc6zaTOxFJmzC`)
				.then(
					function (response) {
						if (!!response.status && response.status > 199 && response.status < 400) {
							resolve(response.body);
						} else {
							// Not the response we're looking for			    
							reject(response);
						}
				 	},
				 	function (response) {
				 		reject(response)
				 	}
			 	)
		});

	}
}