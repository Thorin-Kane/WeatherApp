var React = require('react'),
	PropTypes= React.PropTypes,
	GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
	getDefaultProps: function () {
		return {
			direction: 'column'
		}
	},
	PropTypes: {
		direction: PropTypes.string
	},
	getInitialState: function () {
		return {
			city: ''
		}
	},
	handleSubmitCity: function () {
		console.log(this.state.city)
	},
	handleUpdateCity: function (e) {
		this.setState({
			city: e.target.value
		})
	},
	render: function() {
		return (
			<GetCity
			direction={this.props.direction}
			onSubmitCity={this.handleSubmitCity}
			onUpdateCity={this.handleUpdateCity}
			city={this.state.city} />
		)
	}
});

module.exports= GetCityContainer;