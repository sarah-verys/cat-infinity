var React = require('react');
var AppActions = require('../actions/AppActions');

var Prompt = React.createClass({

	render: function() {
		return (
			<div>
				<h4>{ this.props.prompt }</h4>
				<button onClick={ AppActions.getGiphyCat }>{ this.props.button }</button>
			</div>
		)
	}

});

module.exports = Prompt;