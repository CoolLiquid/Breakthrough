import React from 'react';
import { connect } from 'react-redux';
import { add, remove, addAsync } from './index.redux.js';


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>仓库的突击抢数量是{ this.props.num }</p>
                <button onClick={ this.props.add }>添加突击抢数量</button>
                <button onClick={ this.props.remove }>减少突击抢数量</button>
                <button onClick={ this.props.remove }>延迟两天增加突击抢数量</button>
            </div>
        );
    }
}

let mapStateToProps = (state)=>{
    return { num: state };
}

let actionCreator = { add, remove, addAsync };


export default App = connect(mapStateToProps, actionCreator)(App)

