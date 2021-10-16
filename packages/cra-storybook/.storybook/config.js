import { addDecorator, configure } from '@storybook/react';
import { themes } from '@storybook/components';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    theme: themes.dark,
  })
);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
