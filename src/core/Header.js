
import React from 'react';
// importing style for header
import headerStyle from '../web/headerStyle';

//function Header(props) {
class Header extends React.Component {
 
 constructor(props) {
  	super(props);
  	this.state = {
        value: ''
      }

  }
  onChange = (event) => {
  	let value = event.target.value.length > 0 ? event.target.value : 'Batman';
  	this.props.onSearch(value);
  }	
  render() { 	
	  return (
	      <div style={headerStyle.container}>
	      	 <label style={headerStyle.label}>Movie Catalog</label>
	      	 <input style={headerStyle.input} onChange={evt => this.onChange(evt)}/>
	      	 <label style={headerStyle.label}>Welcome Vidur</label>
	      </div>
	  )
  }    
}

export default Header;