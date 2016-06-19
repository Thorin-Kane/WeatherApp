var React = require('react'),
	GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '100%'
  },
  header: {
  	display: 'flex',
  	justifycontent: 'space-between',
  	alignItems: 'center',
  	height: '50px',
  	background: 'rgba(252 , 90, 44, 0.89',
  	color: '#fff',
  	padding: 5,
  }, 
  search: {
  	alignItems:'right',
  }
}
var Main = React.createClass({
	render: function() {
		return (
			<div style={styles.container}>
		        <div style={styles.header}>
		        	<h2 style={{margin:0}}>Weather Finder</h2>
		        	<GetCityContainer direction='row' style={styles.search}/>
		        </div>
		        {this.props.children}
		     </div>
		)
	}
});

module.exports = Main;