import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import _ from 'lodash';

const Styledh1 = styled.h1`
  text-align: center;
`;

const Styledh4 = styled.h4`
  text-align: center;
  font-size: 18px;
  font-weight: 300;
`;

const Styledli = styled.li`
  font-size: 16px;
  font-weight: 300;
`;

const Awardsaha = (props) => {
  const { t } = props;

  return (
    <div>
      <Styledh1>{t('heading')}</Styledh1>
      <div className="md-grid">
        <div className="md-cell md-cell--12 md-cell--8-tablet md-cell--4-phone">
          <Styledh4>{t('subheading1')}</Styledh4>
          <ul style={{ listStyle: 'none', textAlign: 'center' }}>
            {_.map(t('description1', { returnObjects: true }), (item, key) => <Styledli key={key}> {item}</Styledli>)}
          </ul>
        </div>
      </div>
      <div className="md-grid">
        <div className="md-cell md-cell--6 md-cell--4-tablet md-cell--4-phone">
          <Styledh4>{t('subheading2')}</Styledh4>
          <ul style={{ textAlign: 'left' }}>
            {_.map(t('description2', { returnObjects: true }), (item, key) => <Styledli key={key}> {item}</Styledli>)}
          </ul>
        </div>
        <div className="md-cell md-cell--6 md-cell--4-tablet md-cell--4-phone">
          <Styledh4>{t('subheading3')}</Styledh4>
          <ul style={{ textAlign: 'left' }}>
            {_.map(t('description3', { returnObjects: true }), (item, key) => <Styledli key={key}> {item}</Styledli>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default translate('Awardsaha')(Awardsaha);
