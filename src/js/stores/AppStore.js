var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Data = require('../data/prompts');

var CHANGE_EVENT = 'change';

var _title = 'Y hello thar!';
var _cats = [];
var _prompts = Data.prompts;
var _current = 1;

var AppStore = assign({}, EventEmitter.prototype, {
	getTitle: function() {
		return _title;
	},
	getCats: function() {
		return _cats;
	},
	addCat: function(cat) {
		_cats.push(cat);
	},
	getCurrent: function() {
		return _current;
	},
	incrementCurrent: function(current) {
		_current = current;
	},
	getPrompts: function() {
		return _prompts;
	},
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
		case AppConstants.GET_GIPHY_CAT:
			AppStore.addCat(action.cat);
			AppStore.incrementCurrent(_current+1); // Is this ok?
			AppStore.emit(CHANGE_EVENT);
			break;
	}

	return true;
});

module.exports = AppStore;