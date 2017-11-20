import React,{Component} from 'react'
import styled from 'styled-components'
import Separator from '../Separator/Separator'
import 'font-awesome/scss/font-awesome.scss'
import Link from 'gatsby-link'


const StyledContainerDiv = styled.div`
  margin-top:40px;
  margin-bottom:40px;
`

const Styledh1 = styled.h1`
  text-align:center;
  font-weight: 300
`

const Styledh3 = styled.h3`
  text-align:center;
  font-weight: 300
`

const Styledh4 = styled.h4`
  text-align:center;
  font-weight: 300
`
const Styledp= styled.p`
  margin: 0 auto;
`
const Stylei= styled.i`
 font-size: 45px !important;
 font-weight: 300
`

class Greeter extends Component {
  render(){
   
    return(
      <StyledContainerDiv>
        <Styledh1>AHa-Plan nimmt sich zum Ziel Kundenwünsche und 
        Technikwissen zu vereinen, um die bestmögliche Realisierung 
        ihres AV, Medien oder Digital Signage Projektes zu verwirklichen.
        </Styledh1>
        <Separator />
        <Styledh3> Die Aufgabenfelder: </Styledh3>
        <div className='md-grid'>
          <div className='md-cell md-cell--4' style={{textAlign:'center'}}>
            <Stylei className="fa fa-pencil" style={{marginBottom:' 10px'}} />
            <Styledh3> AV, Medien Planung </Styledh3>
            <Styledh4>Medientechnikplanung für Licht, Audio und Video für 
            Veranstaltungs- und Konferenzräume</Styledh4>
          </div>
          <div className='md-cell md-cell--4' style={{textAlign:'center'}}>
              <Styledp>
              <Stylei className="fa fa-desktop" style={{marginBottom:' 10px'}}/></Styledp>
              <Styledh3> Displays</Styledh3>
              <Styledh4>Entwicklung, Konstruktion und Planung von Displays für 
              verschiedenste Einsatzbereiche</Styledh4>
          </div>
          <div className='md-cell md-cell--4' style={{textAlign:'center'}}>
              <Link style={{textDecoration: 'none'}}to='/blog'>
              <Stylei className="fa fa-list-alt" style={{marginBottom:' 10px'}}/>
              <Styledh3> Redakteur</Styledh3>
              </Link>
              <Styledh4>Schreiben, Recherchen, Analysen und Veröffentlichungen 
              über den Digital Signage Markt</Styledh4>
          </div>
        </div> 
      </StyledContainerDiv>
    )
  }
}

export default Greeter