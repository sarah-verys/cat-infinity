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
		current: AppStore.getCurrent(),
		cats: AppStore.getCats()
	}
}

var App = React.createClass({

	getInitialState: function() {
		return getAppState();
	},

	componentWillMount: function() { },

	// Listening to the AppStore 
	componentDidMount: function() {
		AppStore.addChangeListener(this.__onChange);
	},


	// Stop listening to the AppStore
	componentUnmount: function() {
		AppStore.removeChangeListener(this.__onChange);
	},

	render: function() {
		if (this.state.current > 10)  {
			var cats = <CatInfinity />
		} else {
			var cats = <CatAdder { ...this.state } />
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