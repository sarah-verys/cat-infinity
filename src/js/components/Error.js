var React = require('react');

var Error = React.createClass({

	render: function() {
		return (
			<div id="error-message">
				<p>{ this.props.message }</p>
			</div>
		)
	}

});

module.exports = Error;