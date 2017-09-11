import React from 'react';
import { connect } from 'react-redux';

import { loadSins } from '../actions/'
import api from '../api/'

class Sins extends React.Component{
    componentDidMount(){
        this.props.loadSins()
    }
    render(){
        return(
            <div>
                Sins
                {this.props.sins.length ?
                    <ul>
                        {this.props.sins.map((item)=>{
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                    : ''}
                    <button onClick={console.log(this.props)}>click</button>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
        sins: state.sins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSins: () => {
            dispatch(loadSins())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sins)