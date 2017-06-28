import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

const Container = (Comp) => {

    const mapStateToProps = (state) => {
        return {
            store: state,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch),
        }
    };

    return connect(mapStateToProps, mapDispatchToProps)(Comp);
}

export default Container;