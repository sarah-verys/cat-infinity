var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var GiphyAPI = require('../utils/GiphyAPI');

var AppActions = {
	getGiphyCat: function() {
		GiphyAPI.translate('kitten')
			.then(
				function(response) {
					AppDispatcher.handleViewAction({
						actionType: AppConstants.GET_GIPHY_CAT_SUCCESS,
						cat: response.data.embed_url
					})
				},
				function(response) {
					AppDispatcher.handleViewAction({
						actionType: AppConstants.GET_GIPHY_CAT_ERROR,
						error: response.message
					})
				}
			);
	}
	// reset: function() {
	// 	AppDispatcher.handleViewAction({
	// 		actionType: AppConstants.RESET
	// 	})
	// }
}

module.exports = AppActions;