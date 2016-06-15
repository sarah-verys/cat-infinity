var React = require('react');
var AppActions = require('../actions/AppActions');
var Cat = require('./Cat');

var CatInfinity = React.createClass({

	componentDidMount: function() {
		this.infiniteCats = setInterval(AppActions.getGiphyCat, 8000);
	},

	componentUnmount: function() {
		removeInterval(this.infiniteCats);
	},

	render: function() {
		// Display cats
		var cats = this.props.cats.map((cat,i) => {
				return <Cat cat={ cat } key={ i } />
			});
		return (
			<div id="cat-infinity">
				<h1>{ this.props.message }</h1>
				<div className="your-cats">
					{ cats }
				</div>
			</div>
		)
	}

});

module.exports = CatInfinity;