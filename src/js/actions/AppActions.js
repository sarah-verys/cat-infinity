var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var GiphyAPI = require('../utils/GiphyAPI');

var AppActions = {
	getGiphyCat: function() {
		GiphyAPI.translate('cat')
			.catch(
				function(response) {
					// TODO: Dispatch appropriate Action
				}
			)
			.then(
				function(response) {
					AppDispatcher.handleViewAction({
						actionType: AppConstants.GET_GIPHY_CAT,
						cat: response.data.embed_url
					})
				}
			);
	}
}

module.exports = AppActions;