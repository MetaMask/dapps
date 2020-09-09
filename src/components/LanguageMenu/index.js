import React from 'react'
import { useTranslation } from 'react-i18next';
import './index.css';

function LanguageMenu() {

  const { i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="language__menu-position language__menu-box">
      <div className="language__menu-drawer">
        <label className="language__menu-label">
          <select name="languages" className="language__menu-select" onChange={e => handleClick(e.currentTarget.value)}>
            <option value="en">English</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default LanguageMenu;