import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../_actions/movie';
import { Typography, Container } from '@material-ui/core';
import Banner from '../../Components/Banner';
import Carousel from 'react-multi-carousel';
import CardList from '../../Components/CardList';

class Movies extends Component {

  componentDidMount() {
    this.props.getMovies()
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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const {valueSearch,search, movie, isLoading} = this.props.movie

    if(isLoading === true) {
        return <div className="no-result"><Typography variant="h6" className="fw-bold text-white" component="p">Is Loading....</Typography></div>
    }
    
    if(valueSearch) {
        return( 
            <div>
                <Banner />
                <Container maxWidth="md">
                    <div className="bg-title">
                        <Typography
                            variant="h5"
                            component="p"
                            className="fw-bold text-white"
                        >
                            Search Result : {valueSearch}
                        </Typography>
                    </div>
                    {search.status === false ? <div className="no-result"><Typography variant="h6" className="fw-bold text-white" component="p">{search.message}</Typography></div> : 
                        <Carousel
                            responsive={responsive}
                            additionalTransfrom={0}
                            arrows
                            centerMode={false}
                            className="card-carousel"
                            containerClass="container"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite={false}
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            ssr={true}
                            
                        >
                            {search.map((result, i) => {
                                return (
                                        <CardList key={i} poster={result.poster} id={result.id} overview={result.overview} title={result.title} releasedDate={formatDate(result.dateReleased)} rating={result.rating} />
                                )
                            })}
                        </Carousel>
                    }
                </Container>
            </div>
        )
    }

    return (
      <div>
        <Banner />
          <Container maxWidth="md">
            <div className="bg-title">
              <Typography
                variant="h5"
                component="p"
                className="fw-bold text-white"
              >
                Movie List
              </Typography>
            </div>
            {movie.status === false ? <div className="no-result"><Typography variant="h6" className="fw-bold text-white" component="p">{movie.message}</Typography></div> : 
              <Carousel
                responsive={responsive}
                additionalTransfrom={0}
                arrows
                centerMode={false}
                className="card-carousel"
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                ssr={true}
                
              >
                {movie.map((result, i) => {
                  return (
                      <CardList key={i} poster={result.poster} id={result.id} overview={result.overview} title={result.title} releasedDate={formatDate(result.dateReleased)} rating={result.rating} />
                  )
                })}
              </Carousel>
            }
          </Container>
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
        getMovies: () => {
            dispatch(getMovie())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);