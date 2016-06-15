var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var CatInfinity = require('./CatInfinity');
var CatAdder = require('./CatAdder');

// Holds all of our state values
function getAppState() {
	return {
		title: AppStore.getTitle(),
		prompts: AppStore.getPrompts(),
		currentPrompt: AppStore.getCurrentPrompt(),
		cats: AppStore.getCats(),
		currentCat: AppStore.getCurrentCat()
	}
}

var App = React.createClass({

	getInitialState: function() {
		return getAppState();
	},

	// Listening to the AppStore 
	componentDidMount: function() {
		AppStore.addChangeListener(this.__onChange);
	},


	// Stop listening to the AppStore
	componentUnmount: function() {
		AppStore.removeChangeListener(this.__onChange);
	},

	render: function() {

		var cats = <CatAdder { ...this.state } />

		if (this.state.currentPrompt > this.state.prompts.length)  {
			cats = <CatInfinity />
		}

		return (
			<div>
				{ cats }
			</div>
		)
	},

	// Set our state again whenever it's re-rendered
	__onChange: function() {
		this.setState(getAppState());
	}

});

module.exports = App;