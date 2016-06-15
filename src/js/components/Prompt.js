var React = require('react');

var Prompt = React.createClass({

	render: function() {
		return (
			<div id="prompt">
				<h4>{ this.props.prompt }</h4>
				<button onClick={ this.props.getgiphycat }>{ this.props.button }</button>
			</div>
		)
	}

});

module.exports = Prompt;