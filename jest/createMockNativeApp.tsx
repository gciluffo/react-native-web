import {render, RenderOptions} from '@testing-library/react-native';
import {StacksProvider} from '@mobily/stacks';
import React, {FC, ReactElement} from 'react';

const AllTheProviders: FC = ({children}) => {
  return <StacksProvider spacing={4}>{children}</StacksProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
