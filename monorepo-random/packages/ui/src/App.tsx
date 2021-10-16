import React, { useState } from 'react';
import { setupI18n } from '@lingui/core';
import { Test, catalogs } from '@raghib/common';

import './App.css';
import { I18nProvider } from '@lingui/react';
import { Another } from './another';

export const i18n = setupI18n();

const App: React.FC = () => {
  const [language, setLanguage] = useState('en');
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.svg')} alt="logo" />
        <I18nProvider language={language} catalogs={catalogs} i18n={i18n}>
          <div>{React.version}</div>
          <div>
            <button
              style={{ backgroundColor: 'red' }}
              onClick={() => setLanguage('fi')}
            >
              FI
            </button>
            <button
              style={{ backgroundColor: 'green' }}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          <Test />
          <Another />
        </I18nProvider>
      </header>
    </div>
  );
};

export default App;
