import React, { Component } from "react";
import styled from "styled-components";
import Separator from "../Separator/Separator";

const Styledh1 = styled.h1`
  text-align: center;
`;

const Styledh4 = styled.h4`
  text-align: center;
  font-size: 18px;
  font-weight: 300;
`;

const Styledli = styled.li`
  font-size: 15px;
  font-weight: 300;
`;

class Awardsaha extends Component {
  render() {
    return (
      <div>
        <Styledh1>Awards, Patente und Referenzen</Styledh1>
        <div className="md-grid">
          <div className="md-cell md-cell--12">
            <Styledh4>Patente:</Styledh4>
            <ul style={{ listStyle: "none", textAlign: "center" }}>
              <Styledli>Infoscreen Tower - 1998 </Styledli>
              <Styledli>Sunlight Display Gebrauchsmuster - 2007</Styledli>
              <Styledli>Sunlight Screen Markenname - 2008</Styledli>
              <Styledli>Sunlight Steele Geschmacksmuster - 2009 </Styledli>
              <Styledli>Displaykühlung Gebrauchsmuster - 2009</Styledli>
              <Styledli>Solar Display Gebrauchsmuster - 2010</Styledli>
              <Styledli>Solar Display Gebrauchsmuster - 2012</Styledli>
              <Styledli>Sunlight Screen EU Patent - 2013</Styledli>
            </ul>
          </div>
        </div>
        <div className="md-grid">
          <div className="md-cell md-cell--6">
            <Styledh4>Entwicklung:</Styledh4>
            <ul style={{ textAlign: "left" }}>
              <Styledli>
                1. Großbildprojektors mit 6500A Lumen und FHD.{" "}
              </Styledli>
              <Styledli>
                360 °Projektion sowie 3D Projektion, Rückprojektionen
              </Styledli>
              <Styledli>
                U-Bahnhöfe für Stroer+, Großbildtower-Infoscreen für ICE-
                Bahnhöfe. Centralscreens mit steglos Plasma+ LCD
              </Styledli>
              <Styledli>Lens shift Technologie und Scaler </Styledli>
              <Styledli>Displays für jede KStyledlimazone</Styledli>
              <Styledli>
                Sunlight Display für Innen und Außen Entwicklung von Solar
                Display(TV ohne Strom)
              </Styledli>
              <Styledli>Entwicklung von Kühlkonzepten für Displays</Styledli>
              <Styledli>Stelen und Displaysäulen</Styledli>
            </ul>
          </div>
          <div className="md-cell md-cell--6">
            <Styledh4>Planung:</Styledh4>
            <ul style={{ textAlign: "left" }}>
              <Styledli>Fifa Football Globe, Cocoon Club </Styledli>
              <Styledli>
                Audi Forum Ingolstadt+Neckarsulm, ADEC-Neuburg
              </Styledli>
              <Styledli>
                Div. digitale TV Brodcast Sender, Leitwarte-ESA{" "}
              </Styledli>
              <Styledli>LED Videowand für Telekom </Styledli>
              <Styledli>
                Roll Out: Sunlight Displays: Telekom, Dt.Bank, T-Mobile{" "}
              </Styledli>
              <Styledli>
                9er Sunlight Outdoor Monitor für Standorte in CH-Skigebiete
              </Styledli>
              <Styledli>Premierministeramt-China</Styledli>
              <Styledli>3D-Kino-USA</Styledli>
              <Styledli>Aufbau Europavertriebnetz für Hughes – JVC</Styledli>
              <Styledli>
                Projekte in Europa, Indien, Singapore, USA, Südamerika, Asien...
              </Styledli>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Awardsaha;
