import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

export default class Root extends Component {

  compnentDidMount() {
    console.log('mounting root');
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={this.props.history} routes={routes} />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};