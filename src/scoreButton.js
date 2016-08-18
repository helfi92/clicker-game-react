/**
 * Created by hassanali on 8/18/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Button } from 'react-bootstrap';

class ScoreButton extends Component {
    constructor(props) {
        super(props);

        this.addScore = this.addScore.bind(this);
    }

    addScore() {
        const { score, incrementScore } = this.props;
        incrementScore(score);
    }

    render() {
        return (
            <div>
                <Button onClick={this.addScore}>Add Score</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ score }) => ({ score });

export default connect(mapStateToProps, actions)(ScoreButton);