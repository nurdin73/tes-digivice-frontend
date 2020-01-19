import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../Components/Banner';
import { Container, Typography } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import CardList from '../../Components/CardList';
import { getMovieByTitle } from '../../_actions/movie';
import { withRouter } from 'react-router-dom';
class Search extends Component {


  componentDidMount() {
    this.props.searchData(this.props.title)
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

    const {search} = this.props.movie

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
                    Search Result : {this.props.title}
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
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movie: state.Movie,
        title: ownProps.match.params.title
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchData: (title) => {
            dispatch(getMovieByTitle(title))
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));