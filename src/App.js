import React from 'react';
import { addAsync } from './index.redux';

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const store = this.props.store;
        const num = store.getState();
        const add = this.props.add;
        const addAsync = this.props.addAsync;
        const remove = this.props.remove;
        return (
            <div>
                <p>仓库的突击抢数量是{num}</p>
                <button onClick={ () => store.dispatch(add()) }>添加突击抢数量</button>
                <button onClick={ () => store.dispatch(remove()) }>减少突击抢数量</button>
                <button onClick={ () => store.dispatch(addAsync()) }>延迟两天增加突击抢数量</button>
            </div>
        );
    }
}

