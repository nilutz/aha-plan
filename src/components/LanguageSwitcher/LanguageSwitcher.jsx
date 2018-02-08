import React, { Component } from 'react';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import {ListItem, MenuButton } from 'react-md';

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  renderLanguageChoice({ code, label }) {
    const buttonClass = classNames('LanguageSwitcher__button', {
      'LanguageSwitcher__button--selected': this.state.language === code,
    });

    return (
      <ListItem
        key={code}
        className={buttonClass}
        style={{ fontSize: '25px', fontWeight: '700' }}
        icon={false}
        onClick={() => this.handleChangeLanguage(code)}
        primaryText={label}
      />
    );
  }

  render() {
    const languages = [
      { code: 'de', label: 'Deutsch' },
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Espanol' },
    ];

    return (
      <MenuButton
        className="LanguageSwitcher"
        id="language_button-3"
        style={{ fontSize: '25px', fontWeight: '700' }}
        menuItems={languages.map(language =>
          this.renderLanguageChoice(language))}
        listInline
        iconClassName="fa fa-language"
        flat
        centered
        anchor={{
          x: MenuButton.HorizontalAnchors.INNER_LEFT,
          y: MenuButton.VerticalAnchors.BOTTOM,
        }}
      >
        ES/EN/DE
      </MenuButton>
    );
  }
}

export default translate('LanguageSwitcher')(LanguageSwitcher);
