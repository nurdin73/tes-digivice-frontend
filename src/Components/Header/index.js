import React, { Component } from 'react';
import { SearchOutlined } from '@material-ui/icons'
import { Link, withRouter, Redirect } from 'react-router-dom';
import './Header.css'
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { search, getMovieByTitle } from '../../_actions/movie';
class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
       search: "",
       redirect: false
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
      this.setState({redirect: true})
    }
  }

  componentDidMount() {
    const track = document.querySelector('.list__item');
    console.log(track)

    const updateDot = (currentActive, targetActive) => {
      currentActive.classList.remove('active')
      targetActive.classList.add('active')
    }
    
    track.addEventListener('click', e => {
      const targetList = e.target.closest('li')
      if(!targetList) return;
      const currentList = track.querySelector('.active')
      console.log(targetList)
      updateDot(currentList, targetList)
    })
    
  }

  render() {

    if(this.state.redirect) {
      this.setState({redirect: false})
      return (
        <Redirect to={{pathname: `/search/${this.state.search}`}} />
      )
    }

    return (
      <div>
        <nav className="navbar">
          <Container className="d-flex">
            <div className="d-flex">
              <Link to="/" className="navbar-brand">Lux</Link>
              <div className="search">
                <input type="text" name="search" value={this.props.match.params.title} onKeyUp={this.onKeyup} onChange={this.onSearch} className="form-search" placeholder="Type to search.." />
                <button className="btn-search"><SearchOutlined fontSize="large" style={{color:'#fff'}} /></button>
              </div>
            </div>
            <div className="nav-link d-flex">
              <ul className="list-item d-flex list__item">
                <li className="list active">
                  <Link to="/">Home</Link>
                </li>
                <li className="list">
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
    movie: state.Movie
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));