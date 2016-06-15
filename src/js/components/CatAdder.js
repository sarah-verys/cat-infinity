var React = require('react');
var AppActions = require('../actions/AppActions');
var Prompt = require('./Prompt');
var Cat = require('./Cat');

var CatAdder = React.createClass({

	render: function() {
		// Display greeting before getting cats
		var title = this.props.title
		// Show current prompt
		var prompt = this.props.prompts.map((prompt) => {
				if (prompt.id == this.props.currentPrompt) {
					return <Prompt prompt={ prompt.text } key={ prompt.id } button={ prompt.button } />
				}
			});
		// Display cats
		var cats = this.props.cats.map((cat, i) => {
				return <Cat cat={ cat } key={ i } />
			});
		return (
			<div id="cat-adder">
				<h1>{ title }</h1>
				{ prompt } 
				<div className="your-cats">
					{ cats }
				</div>
			</div>
		)
	}

});

module.exports = CatAdder;