import React, { Component } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { NavMenu } from './NavMenu';
import Carousel from './Carousel';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <MDBContainer>
          {this.props.children}
          <Carousel />
        </MDBContainer>
      </div>
    );
  }
}
