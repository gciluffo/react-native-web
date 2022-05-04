/**
 * @format
 */

import 'react-native';
import React from 'react';
import NoteDetail from '..';
import {render} from '../../../../jest/createMockWebApp';

it('renders correctly', () => {
  const NoteDetailScreen = render(<NoteDetail />);
  expect(NoteDetailScreen).toMatchSnapshot();
});
