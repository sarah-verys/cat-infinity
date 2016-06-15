var React = require('react');
var AppActions = require('../actions/AppActions');

var Cat = React.createClass({

	render: function() {
		return (
			<div>
				<iframe src={ this.props.cat } width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
			</div>
		)
	}

});

module.exports = Cat;