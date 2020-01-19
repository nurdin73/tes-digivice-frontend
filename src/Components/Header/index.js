import React, { Component } from 'react';
import { SearchOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import './Header.css'
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { search, getMovieByTitle } from '../../_actions/movie';
class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
       search: ""
    }
  }
  
  onSearch = (e) => {
    this.setState({search: e.target.value})
  }
  onSubmit = () => {
    this.props.search(this.state.search)
    this.props.searchData(this.state.search.toLowerCase())
  }
  onKeyup = (e) => {
    if(e.keyCode === 13) {
      this.onSubmit()
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <Container className="d-flex">
            <div className="d-flex">
              <Link to="/" className="navbar-brand">Lux</Link>
              <div className="search">
                <input type="text" name="search" value={this.state.search} onKeyUp={this.onKeyup} onChange={this.onSearch} className="form-search" placeholder="Type to search.." />
                <button className="btn-search"><SearchOutlined fontSize="large" style={{color:'#fff'}} /></button>
              </div>
            </div>
            <div className="nav-link d-flex">
              <ul className="list-item d-flex">
                <li>
                  <Link to="/" className="active">Home</Link>
                </li>
                <li>
                  <Link to="/movie">Movie</Link>
                </li>
                {/* <li>
                  <Link to="/tv-show">TV Show</Link>
                </li> */}
              </ul>
              {/* <button className="btn-login">Login</button> */}
            </div>
          </Container>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    search: state.search
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: (title) => {
      dispatch(search(title))
    },
    searchData: (title) => {
      dispatch(getMovieByTitle(title))
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);