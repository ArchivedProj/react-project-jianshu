import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`

export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:620px;
        height:270px;
    }
`

export const HomeRight = styled.div`
    float:right;
    width:240px;
`

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
`

export const TopicItem = styled.div`
    float: left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    margin-left:18px;
    font-size:14px;
    border: 1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    margin-bottom:18px;
    img{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`
export const ListItem = styled.div`
    overflow:hidden;
    padding :20px 0;
    border-bottom:1px solid #dcdcdc;
    img{
        float:right;
        width:125px;
        height:100px;
        display:block;
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
width:500px;
float:left;
    h3{
        font-weight:bold;
        font-size:18px;
        padding-bottom:10px;
    }
    p{
        color:Gray;
        font-size:10px;
    }
`

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;
`
export const BackTop = styled.div`
    width:60px;
    height:60px;
    line-height:60px;
    border:1px solid #fff;
    background:gray;
    text-align:center;
    position:fixed;
    cursor:pointer;
    bottom:100px;
    font-size:12px;
    right:100px;
    color:#fff;
`
