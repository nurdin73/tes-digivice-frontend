import React, { Component } from 'react';
import { Grid, Container } from '@material-ui/core';
import './footer.css'
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div className="footer">
        <Container>
					<Grid container spacing={3}>
						<Grid item md={4}>
								tes
						</Grid>
						<Grid item md={4}>
								tes
						</Grid>
						<Grid item md={4}>
								tes
						</Grid>
					</Grid>
        </Container>
      </div>
    );
  }
}

export default Footer;