import React, { Component } from 'react';
import Header from './Header';

export default class Login extends Component {

    constructor(){
    	super();
    	this.state={
    		email: '',
    		pass: '',
    	}
    }
    onClick () {
    	if(this.state.email !== '' && this.state.pass !== '' && this.state.email.includes('@')) 
        {this.props.history.push('/ProfilePage')}
    	else {window.alert('Error');}
    }

	render(){
      console.log('bfn,db@'.includes('@'));
		return(
		  <div>
			<Header isformEmty={this.state.email === '' ||
                          this.state.pass === '' ||
                          !this.state.email.includes('@')} />
			<div className='Login'>
			
			    <div className='LoginForm'>
                          <label>
                              Connecter-vous à votre compte
                          </label>
                          {this.state.email !== '' && 
                                                    <span className='emailSpan'>Email</span>}
                          <input 
                                placeholder='Email' 
                                type='email'
                                onChange={(e)=>this.setState({ email: e.target.value })}
                          />
                         { this.state.pass !== '' && 
                                                   <span className='passSpan'>Password</span>}
                          <input 
                                placeholder='Password' 
                                type='password' 
                                onChange={(e)=>this.setState({ pass: e.target.value })}
                          />
                          <button onClick={this.onClick.bind(this)}>s'inscrire</button>
                          <a href="/">Mot de passe oublier ?</a>
			    </div>
			</div>
		  </div>
			);
	}
}