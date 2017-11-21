import React from 'react';
import styled from 'styled-components';

const Styledp = styled.p`
  margin: 15px
  padding-right: 10px;
  font-size: 18px;
  font-weight: 300;
  text-align:center;

`;

const Styledh1 = styled.h1`
  text-align: center;
`;

const Aboutaha = (props) => {
  const { node: img } = props.titlepic.ahapic[0];
  return (
    <div>
      <Styledh1>Über Aha</Styledh1>
      <div className="md-grid">
        <div className="md-cell md-cell--8">
          <Styledp>
            In einem Team aus Ingenieuren , Entwicklern und ehemaligen System
            Integratoren planen wir Projekte im Bereich Medientechnik und
            Digital Signage. Für unsere namhaften Kunden übernehmen wir auch das
            Projektmanagement, die Rollout Planung, die Bauüberwachung und
            Bauleitung bis zur Abnahme. Nach ihren Anforderungen erarbeiten wir
            Audiovisuelle Kommunikationslösungen, machen Designvorschläge und
            entwickeln neue technische Lösungen.
          </Styledp>
        </div>
        <div className="md-cell md-cell--4">
          <img
            src={img.sizes.src}
            alt="achim hannemann"
            srcSet={img.sizes.srcSet}
            sizes="(min-width: 960px) 150px, 33vw"
            style={{ display: 'block', margin: 'auto', borderRadius: '50%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutaha;
