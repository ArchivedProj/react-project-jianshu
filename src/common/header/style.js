import styled from 'styled-components';
import logoImg from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
    position:releative;
    height:58px;
    border-bottom: 1px solid #f0f0f0;
`

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
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`

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
`
