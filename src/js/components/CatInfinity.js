var React = require('react');
var Cat = require('./Cat');

var CatInfinity = React.createClass({

	componentDidMount: function() {
		this.props.getinfinitegiphycats();
	},

	render: function() {
		// Display cats
		var cats = this.props.cats.map((cat,i) => {
				return <Cat cat={ cat } key={ i } />
			});
		// return (
		// 	<div id="cat-infinity">
		// 		<h1>{ this.props.message } <button onClick={ this.props.reset }>Reset</button></h1>
		// 		<div className="your-cats">
		// 			{ cats }
		// 		</div>
		// 	</div>
		// )
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