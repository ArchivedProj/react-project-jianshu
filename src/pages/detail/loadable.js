import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
    loader: () => import('./'), //异步加载的语法
    loading: () => { //加载过程中，临时返回的一个组件，这里是一个函数
        return <div>正在加载.....</div>;
    },
});

export default () => <LoadableComponent />; //直接这么简写即可
// export default class App extends React.Component {
//     render() {
//         return <LoadableComponent />;
//     }
// }