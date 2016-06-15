var React = require('react');
var AppActions = require('../actions/AppActions');
var Prompt = require('./Prompt');
var Cat = require('./Cat');

var CatAdder = React.createClass({

	render: function() {
		let prompt = this.props.prompts.map(prompt => {
				if (prompt.id == this.props.current) {
					return <Prompt prompt={ prompt.text } key={ prompt.id } button={ prompt.button } />
				}
			});
		let cat = this.props.cats.length ? <Cat cat={ this.props.cats[this.props.current - 2]} /> : ''
		//console.log(this.props.cats, this.props.cats.length, this.props.current, this.props.cats[2], cat)
		return (
			<div>
				<h1>{ this.props.title }</h1>
				{ prompt } 
				{ cat }
			</div>
		)
	}

});

module.exports = CatAdder;