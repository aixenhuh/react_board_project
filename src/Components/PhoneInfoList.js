import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'
class PhoneInfoList extends Component {
    render() {

        const {data, onRemove} = this.props;
        const list = data.map((a) => (<PhoneInfo info={a} key={a.id} onRemove={onRemove}/>))
        return (
            <div>
                {list}
            </div>
            )
    }
}

export default PhoneInfoList;