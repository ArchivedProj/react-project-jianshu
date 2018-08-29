import styled from 'styled-components';
import logoImg from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
    position:releative;
    height:58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href:'/'
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