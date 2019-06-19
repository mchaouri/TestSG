import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import logo from '../assets/images/logo_header.png';

class Header extends Component {

	render(){
	  return(
           <div className='header'>
                 <img className='logo' alt='logo' src={logo} />
                 <button 
                         className='Identifier'
                         onClick={() => this.props.history.push('/')}
                         >
                      S’identifier
                 </button>
                 <button
                         className={this.props.isformEmty === false ? 'inscrire-clicked' :'inscrire'}
                         onClick={() => this.props.isformEmty === false ? this.props.history.push('/ProfilePage')
                         :
                         window.alert('Error')}
                         >
                     S’inscrire
                 </button>
           </div>
           );
	}
}
export default withRouter(Header);
