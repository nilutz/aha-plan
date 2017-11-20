import React, {Component} from 'react'
import styled from 'styled-components'


import bg_logo from './bg_fifa.jpg'


const Head = styled.header`  
  background-image:url('./bg_fifa.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const Overlay=styled.div`
  position:relative;
  background-color:rgba(228, 230, 229, .85);
  color: #5f5f5f;
  font-family: "Titillium Web", sans-serif;
  max-width:960px;
  border: none; 
  margin:0 auto;
  padding:0px 1.0875rem 1.45rem;
  top:10%;
  bottom:10%;
  text-align:center;
`

const Headh1=styled.h1`
    font-size: 100px !important;
    padding-top:75px;
    @media (max-width: 1022px) {
      font-size: 100px !important;
      padding-top:25px;
    }

    @media (max-width: 993px) {
      font-size: 75px !important;
      padding-top:25px;
    }

    @media (max-width: 767px) {
      font-size: 45px !important;
      padding-top:25px;
    }
`
const Headh4=styled.h4`
    font-weight: 200;
    font-size: 30px;
    margin-top:65px;
    padding-bottom:75px;
    @media (max-width: 1022px) {
      font-size: 35px !important;
      padding-bottom:25px;
    }
    @media (max-width: 767px) {
    font-size: 15px !important;
    padding-bottom:25px;
    }
`


class Header extends Component{

  render (){

    return(

      <Head>
        <Overlay>
        <Headh1> AHa-Plan</Headh1>
        <Headh4> AV - Medien - Digital Signage </Headh4>
        </Overlay>
      </Head>
      )

  }


}

export default Header