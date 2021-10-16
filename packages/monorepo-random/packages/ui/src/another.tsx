import React from 'react';
import { i18n } from './App';
import { t } from '@lingui/macro';

const Another = () => <div>{i18n._(t`Whatup`)}</div>;

export { Another };
