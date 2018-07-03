import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../static/img/logo.svg';
import '../static/css/home.css';
import {add_link_item, get_home_line, show_login_page} from '../store/action/Home'

class home extends Component {
  constructor(props){
    super(props);
    this.state = {
      personal: []
    }
  };
  change = () => {
	  console.log(2);
	  this.props.dispatch(get_home_line({info : '改变'}));
    this.props.dispatch(add_link_item());
    this.props.dispatch(show_login_page())
  };
  componentDidMount() {
   fetch('http://www.hw.com:8081/api/personal_recommend')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          personal : data.data.list
        })
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h1 className="home-title">Welcome to React</h1>
        </header>
        <Link to={'/'}>返回</Link>
        <p className="home-intro" onClick={() => {this.change()}}>
          To get started, edit <code>src/home.js</code> and save to reload.
        </p>
        <p>{this.props.HomeReducer.text}</p>
        <ul>
          {
            this.state.personal.map(function(item){
              return <li key={item.id}>{item.title}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return { HomeReducer: state.HomeReducer }
};

export default connect(mapStateToProps)(home)

