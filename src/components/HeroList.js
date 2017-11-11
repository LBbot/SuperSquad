import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById, removeAll } from '../actions';

class HeroList extends Component {
    render() {
        return (
            <div>
                <h4>Your Hero Squad:</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(hero => {
                            return (
                                <li key={hero.id} className="list-group-item">
                                    <div className="list-item">
                                        <b>{hero.name}</b>
                                    </div>
                                    <div className="list-item right-button" 
                                    onClick={() => this.props.removeCharacterById(hero.id)}
                                    >
                                        x
                                    </div>
                                    <div>Strength: {hero.strength} | Intelligence: {hero.intelligence} | Speed: {hero.speed}</div>
                        
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="list-group">
                    <li className="list-group-item" onClick={() => this.props.removeAll()}>
                        Clear all
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList);