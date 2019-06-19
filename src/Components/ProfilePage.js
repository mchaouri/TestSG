import React, { Component } from 'react';
import axios from 'axios'
import Header from './Header';
export default class ProfilePage extends Component {

	Constructor(){
		this.setState({
			photo: '',
			nomComplet: '',
			ville: '',
		});
	}

	componentDidMount() {
       axios.get(`https://randomuser.me/api`)
      .then(res => {
        const profile = res.data.results[0];
        const nom = profile.name.first.concat(' ',profile.name.first).concat(' ,',profile.dob.age);
        const ville = profile.location.state;
        const photo = profile.picture.medium;
        this.setState({ nomComplet: nom, ville: ville, photo: photo });
      }).catch(err => {window.alert('Error')});
  }

	render() {
		return(
		  <div>
			<Header isformEmty={false}/>
			<div className='Login'>
			    
			    <div className='Card'>
			         <img src={this.state && this.state.photo} alt="photo_profile"/>
			         <label className="nameLabel">{this.state && this.state.nomComplet}</label>
			         <label className="cityLabel">{this.state && this.state.ville} </label>
			         <p>
			             Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim.
			         </p>
			         <button>Voir Profile</button>
			         <a href="/">Supprimer le profile</a>
			    </div>
			</div>
		  </div>
			)
	}
}