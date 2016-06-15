var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Data = require('../data/prompts');

var CHANGE_EVENT = 'change';

var _infinityMessage = 'You have officially crossed the point of no return into a realm of infinite cats.';
var _title = 'Y helo thar!';
var _cats = [];
var _prompts = Data.prompts;
var _currentPrompt = 1;
var _currentCat = -1;
var _error = null;

var AppStore = assign({}, EventEmitter.prototype, {
	getInfinityMessage: function() {
		return _infinityMessage;
	},
	getTitle: function() {
		return _title;
	},
	setTitle: function(title) {
		_title = title;
	},
	getCurrentCat: function() {
		return _currentCat;
	},
	incrementCurrentCat: function() {
		_currentCat++;
	},
	getCats: function() {
		return _cats;
	},
	addCat: function(cat) {
		_cats.push(cat);
	},
	getCurrentPrompt: function() {
		return _currentPrompt;
	},
	incrementCurrentPrompt: function() {
		_currentPrompt++;
	},
	getPrompts: function() {
		return _prompts;
	},
	getErrorMessage: function() {
		return _error;
	},
	setError: function(error) {
		_error = error;
	},
	resetErrorMessage: function() {
		_error = null;
	},
	// reset: function() {
	// 	_title = 'Oh.. you again?';
	// 	_cats = [];
	// 	_prompts = Data.prompts;
	// 	_currentPrompt = 1;
	// 	_currentCat = -1;
	// 	_error = null;
	// },
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback)
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.actionType) {
		case AppConstants.GET_GIPHY_CAT_SUCCESS:
			// If there was an error, reset it because this is no longer the case!
			if (!!_error) {
				AppStore.resetErrorMessage();
			}
			// If we are coming from a sad initial state of no cats, change the title
			if (!_cats.length) {
				AppStore.setTitle('Look at your army of floof!')
			}
			// Add the cat to your cat collection
			AppStore.addCat(action.cat);
			AppStore.incrementCurrentCat();
			// Show next prompt
			AppStore.incrementCurrentPrompt();
			AppStore.emit(CHANGE_EVENT);
			break;

		case AppConstants.GET_GIPHY_CAT_ERROR:
			AppStore.setError(action.error);
			AppStore.emit(CHANGE_EVENT);
			break;

		// case AppConstants.RESET:
		// 	AppStore.reset();
		// 	AppStore.emit(CHANGE_EVENT);
		// 	break;
	}

	return true;
});

module.exports = AppStore;