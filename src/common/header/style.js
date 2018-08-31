import styled from 'styled-components';
import logoImg from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
    position:releative;
    height:58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${logoImg});
background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box; //这个什么意思？
`;

export const NavItem = styled.div`
    color:#333;
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    &.left{   //表示NavItem组件上有一个className=left
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .iconfont{
        position: absolute;
        right:5px;
        border-radius:15px;
        width:30px;
        line-height:30px;
        bottom:5px;
        /* background:green; */
        text-align:center;
        &.focused{
            background:#777;
            color:white;
        }
    }

`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    outline:none;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    border:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{  //表示这个组件下面的placeholder
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        width:160px;
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }

   &.slide-exit{
        width:240px;
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    font-size:14px;
    padding:0 20px;
    border:1px solid #ec6149;
    &.reg{
        color:#ec6149;
    }
    &.write{
        color:#fff;
        background:#ec6149;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
    color:#969696;
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
`;

export const SearchInfoSwitcher = styled.span`
    float:right;
    font-size:13px;

`;

export const SearchInfoList = styled.div`
     overflow:hidden;
`;

export const SearchInfoItem = styled.a`
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:5px;
`;