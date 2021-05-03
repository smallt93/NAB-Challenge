import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'stylesheets/defaultTheme.styles';


export function mountWithTheme(child) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    ),
  });
}

export function shallowWithTheme(child) {
  return shallow(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    ),
  });
}
