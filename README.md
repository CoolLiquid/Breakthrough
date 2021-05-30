***Redux基础使用与进阶用法***
1. 使用到的框架`redux`,`react`。。redux如何结合react一起使用？
```
<!-- redux框架的api -->
import { createStore } from 'redux';

const ACTION_ADD = "action_add";
const ACTION_REMOCVE = "action_remove";
const reducer = (state = { count : 10 }, action) => {
    switch(action.type) {
        case ACTION_ADD:
            return { count: state.count++ };
        case ACTION_REMOVE:
            return { count: state.count-- };
        default:
            return { count: 10 };
    }
};
fun add(){
    return { type : ACTION_ADD };
}
fun remove() {
    return { type : ACTION_REMOVE };
}
const store = createStore(reducer);

<!-- update something -->
store.subscribe({
    console.log(`当前突击步枪数量为：${store.getState().count}`);
})

store.dispatch(add());
store.dispatch(remove());

```

2. 使用到的框架或者插件`redux`,`react`,`redux-thunk`。Redux处理异步，需要redux-thunk插件。


3. 调式redux的调式工具



4. redux更加优雅的结合React方式
    > 使用`react_redux`优化使用
        
        1. 关联到的api有<Provider store = $$> Connect( mapStateToProps, actionCreators )函数
    
    > 使用babel-plugin-transform-decorators-legacy插件优化上述代码
        
        关联的代码有@Connect注解

