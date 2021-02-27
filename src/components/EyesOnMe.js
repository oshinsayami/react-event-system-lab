// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{
    render() {
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
        )
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    handleFocus = () => {
        console.log('Good!')
    }
}
