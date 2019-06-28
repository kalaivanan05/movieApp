
import React from 'react';
// importing style for footer
import footerStyle from '../web/footerStyle';

function Footer(props) {
console.log(props)	
  function RenderPages() {
  	let pageList = [];
  	let pagesToShow = props.data/10;
  	for(let i=1; i <= 10; i++) {
	  	pageList.push(
	  		<div key = {i} style={footerStyle.labelBox}>
	     	   {i}
	     	</div>
	  	);
  	}
  	return pageList;
  }
  return (
      <div style = {footerStyle.container}>
       <div style={footerStyle.labelBox}>&lt;</div>
        <RenderPages/>
        <div style={footerStyle.labelBox}>&gt;</div>
      </div>
  )    
}

export default Footer;