/**
 * Created by hassanali on 8/18/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Jumbotron } from 'react-bootstrap';

class ScoreButton extends Component {
    render() {
        return (
            <div>
                <Jumbotron>Score: {this.props.score}</Jumbotron>
            </div>
        );
    }
}

const mapStateToProps = ({ score }) => ({ score });

export default connect(mapStateToProps, actions)(ScoreButton);