import React, {Component} from "react";
import "react-multi-carousel/lib/styles.css";
import "./CardList.css";
import {Typography} from "@material-ui/core";
import {} from "@material-ui/icons";
import {Link} from "react-router-dom";
class CardList extends Component {

  render() {


    return (
      <div>
        
          <div className="list-movie">
            <img
              className="card-image"
              src={this.props.poster}
              alt=""
            />
            <div className="card-detail">
              <Link to={`/detail-movie/${this.props.id}`} className="td-none">
                <Typography
                  variant="h6"
                  component="p"
                  color="inherit"
                  className="font-bebas-neue text-dark"
                >
                  {this.props.title}
                </Typography>
              </Link>
              <Typography variant="subtitle2" className="font-poppins fw-bold">
                {this.props.releasedDate}
              </Typography>
              <div className="rating font-poppins">{this.props.rating}</div>
              <div className="overview">
                <Typography variant="subtitle2" className="text-justify fw-bold text-white">{this.props.overview.length > 100 ? this.props.overview.substr(0,100) + '...' : this.props.overview}</Typography>
              </div>
              <div className="d-flex">
                <Link to={`/detail-movie/${this.props.id}`}>
                  <button className="btn-read">read more</button>
                </Link>
              </div>
            </div>
          </div>
      </div>
    );
  }
}


export default CardList;
