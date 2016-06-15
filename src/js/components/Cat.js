var React = require('react');
var AppActions = require('../actions/AppActions');

var Cat = React.createClass({

	render: function() {
		return (
			<div className="cat">
				<iframe src={ this.props.cat } frameBorder="0" allowFullScreen></iframe>
			</div>
		)
	}

});

module.exports = Cat;