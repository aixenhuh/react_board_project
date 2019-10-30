import React, { Component } from 'react'

class reactIndex extends Component {
    static defaultProps = {
        name: '기본이름'
    }

    render() {
        return (
            <div>
                안녕하세요! < b > {this.props.name} </b > 님
            </div >
        )
    }
}

export default reactIndex