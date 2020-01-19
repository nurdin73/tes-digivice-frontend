import React, { Component } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { Instagram, Twitter } from '@material-ui/icons'
import './footer.css'
import { Link } from 'react-router-dom';
class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <Container>
					<Grid container spacing={3} className="m-2">
						<Grid item xs={6} md={4}>
							<Typography variant="h3" component="p" className="fw-bold text-yellow font-bebas-neue">LUX</Typography>
              <Typography variant="body1" component="p" className="fw-bold text-white font-roboto">
                LUX is a web application that displays the latest and most favorite movie triller lists based on the interests and ratings of users 
              </Typography>
						</Grid>
						<Grid item xs={6} md={4}>
              <Typography variant="h5" component="p" className="fw-bold text-yellow font-bebas-neue">Links</Typography>
              <Link to="/about" className="td-none">
                <Typography variant="body1" component="p" className="fw-bold text-white font-roboto align-center mb-3">
                  About Us
                </Typography>
              </Link>
              <Typography variant="h5" component="p" className="fw-bold text-yellow font-bebas-neue">Follow Us On</Typography>
              <Link to="/about" className="td-none">
                <Typography variant="body1" component="p" className="fw-bold text-white font-roboto align-center mb-1">
                  <Instagram className="mr-1" /> Instagram
                </Typography>
              </Link>
              <Link to="/about" className="td-none">
                <Typography variant="body1" component="p" className="fw-bold text-white font-roboto align-center">
                  <Twitter className="mr-1" /> Twitter
                </Typography>
              </Link>
						</Grid>
						<Grid item xs={12} md={4}>
              <Typography variant="h5" component="p" className="fw-bold text-yellow font-bebas-neue mb-1">Have A Question ?</Typography>
              <Typography variant="h6" component="p" className="fw-bold text-white font-bebas-neue mb-1">
                LUX 
              </Typography>
              <Typography variant="body1" component="p" className="fw-bold text-white font-roboto">
                Phone : +62 838 2321 0947
              </Typography>
              <Typography variant="body1" component="p" className="fw-bold text-white font-roboto">
                Email : support@lux.com 
              </Typography>
              <Typography variant="body1" component="p" className="fw-bold text-white font-roboto">
                Address : Jl.Wijaya Kusuma 63 Blok Prapatan Desa Getasan Kecamatan Depok Kabupaten Cirebon
              </Typography>
						</Grid>
					</Grid>
          <div className="text-center p-2">
            <Typography variant="body1" component="p" className="fw-bold text-white font-roboto">
                Copyright &copy; 2019
              </Typography>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;