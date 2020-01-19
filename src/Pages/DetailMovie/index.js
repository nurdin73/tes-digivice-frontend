import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Banner from '../../Components/Banner';

import './detail.css'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovieById } from '../../_actions/movie';

class DetailMovie extends Component {

  componentDidMount() {
      this.props.getMovieById(this.props.movieId)
  }

  render() {

    const formatDate = dates => {
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Juni",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const date = new Date(dates)
      let month = months[date.getMonth()];
      let tgl = date.getDate()
      tgl = tgl < 10 ? '0' + tgl : tgl
      return (
        month + ', ' + tgl + ' ' + date.getFullYear()
      );
    };

    const getYear = dates => {
			const date = new Date(dates)
			return date.getFullYear()
		}
    const {detailMovie, isLoading} = this.props.movie
    if(isLoading === true) {
      return <div className="no-result"><Typography variant="h6" className="fw-bold text-white" component="p">Is Loading....</Typography></div>
    }
    
      return (
        <div>
          <Banner/>
          <Container maxWidth="md">
          <div className="bg-title">
              <Typography variant="h5"
                  component="p"
                  className="fw-bold text-white"
              >
                  Detail Movie
              </Typography>
          </div>
              <Grid container spacing={4}>
                  <Grid item md={5}>
                    <div className="bg-poster">
                          <img src={detailMovie.poster} className="poster" alt={detailMovie.title} />
                    </div>
                  </Grid>
                  <Grid item md={7} className="p-2">
                      <Typography variant="h4" component="p" className="fw-bold text-white m-2">{detailMovie.title}({getYear(detailMovie.dateReleased)})</Typography>
                      <Typography variant="subtitle2" component="p" className="fw-bold text-white">Released Date : {formatDate(detailMovie.dateReleased)}</Typography>
                      <div className="display-flex">
                          <div className="rating-movie">
                              <Typography variant="h5" component="p" className="fw-bold">{detailMovie.rating}</Typography>
                          </div>
                          <Typography variant="h6" component="p" className="fw-bold text-white">Rating</Typography>
                      </div>
                      <Typography variant="h5" component="p" className="fw-bold text-white m-2">Publisher</Typography>
                      <div className="publisher">
                          <Typography variant="body1" component="p" className="fw-bold text-white text-align-justify">
                          {detailMovie.publisher}
                          </Typography>
                      </div>
                      <Typography variant="h5" component="p" className="fw-bold text-white m-2">Overview</Typography>
                      <div className="publisher">
                          <Typography variant="body1" component="p" className=" text-white text-align-justify m-2">
                              {detailMovie.overview}
                          </Typography>
                      </div>
                      <Typography variant="h5" component="p" className="fw-bold text-white m-2">Genre</Typography>
                      <div className="bg-title">
                          <div className="display-flex">
                              {detailMovie.genres ? 
                                  detailMovie.genres.map((result, i) => {
                                      return (
                                          <Link to={`/genre/${result.id}/movies`} key={i}>
                                              <button className="btn-genre">{result.name}</button>
                                          </Link>
                                      )
                                  })
                                  : ''
                              }
                          </div>
                      </div>
                  </Grid>
              </Grid>
          </Container>
        </div>
      );
    // }
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movieId: ownProps.match.params.id,
        movie: state.Movie
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMovieById: (id) => {
            dispatch(getMovieById(id))
        },
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailMovie));