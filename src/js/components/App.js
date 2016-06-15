var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var CatInfinity = require('./CatInfinity');
var CatAdder = require('./CatAdder');
var Error = require('./Error');

// Holds all of our state values
function getAppState() {
	return {
		title: AppStore.getTitle(),
		prompts: AppStore.getPrompts(),
		currentPrompt: AppStore.getCurrentPrompt(),
		cats: AppStore.getCats(),
		currentCat: AppStore.getCurrentCat(),
		infinityMessage: AppStore.getInfinityMessage(),
		errorMessage: AppStore.getErrorMessage()
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

	getGiphyCat() {
		AppActions.getGiphyCat();
	},

	getInfiniteGiphyCats() {
		this.infiniteCats = setInterval(AppActions.getGiphyCat, 8000);
	},

	// reset() {
	// 	clearInterval(this.infiniteCats);
	// 	AppActions.reset();
	// },

	render: function() {

		var cats = <CatAdder { ...this.state } getgiphycat={ this.getGiphyCat } />

		if (this.state.currentPrompt > this.state.prompts.length)  {
			//cats = <CatInfinity cats={ this.state.cats } message={ this.state.infinityMessage } getinfinitegiphycats={ this.getInfiniteGiphyCats } reset={ this.reset } />
			cats = <CatInfinity cats={ this.state.cats } message={ this.state.infinityMessage } getinfinitegiphycats={ this.getInfiniteGiphyCats } />
		}

		var error = !!this.state.errorMessage ? <Error message={ this.state.errorMessage } /> : ''

		return (
			<div id="app-container">
				{ error }
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