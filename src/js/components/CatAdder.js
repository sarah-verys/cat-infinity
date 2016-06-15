var React = require('react');
var AppActions = require('../actions/AppActions');
var Prompt = require('./Prompt');
var Cat = require('./Cat');

var CatAdder = React.createClass({

	render: function() {
		var prompt = this.props.prompts.map(prompt => {
				if (prompt.id == this.props.currentPrompt) {
					return <Prompt prompt={ prompt.text } key={ prompt.id } button={ prompt.button } />
				}
			});
		var cat = this.props.cats.length ? <Cat cat={ this.props.cats[this.props.currentCat]} /> : ''

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