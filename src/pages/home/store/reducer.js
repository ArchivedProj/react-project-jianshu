import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '科普',
        imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }, {
        id: 2,
        title: '风格',
        imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }],
    articleList: [{
        id:1,
        title:"springboot集成Elastic Search",
        desc:"在这一篇文章开始之前，你需要先安装一个ElasticSearch，如果你是mac或者linux可以参考https://www.jianshu.c...",
        imgSrc:"https://upload-images.jianshu.io/upload_images/13362458-23ee88fe208ce5ed?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
        id:2,
        title:"小米MIX 3真机上手视频曝光",
        desc:"小米MIX 3采用了下滑式的前面板，下滑之后机身额头部分的传感器、摄像头等位置露出，方便拍照等。",
        imgSrc:"https://img.ithome.com/newsuploadfiles/focus/d782bfa4-23fa-40ec-8310-404f5da5bd6f.jpg?131805175735242295"
    },
    {
        id:3,
        title:"表格table+jq.ajax+vue.js实现 进步本首页",
        desc:"效果图 点击查看 项目结构图 代码 json数据 //progress_show.json",
        imgSrc:"https://upload-images.jianshu.io/upload_images/7236116-555e7c9aab038ee3.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
        id:4,
        title:"侧边栏筛选",
        desc:"废话不多说直接上代码一、头文件 二、实现文件 HomeTableView代码 Swift版本（其实差别不大） 二、HomeTableView代码...",
        imgSrc:"https://upload-images.jianshu.io/upload_images/3334769-0d3d3de3496f8d56.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}