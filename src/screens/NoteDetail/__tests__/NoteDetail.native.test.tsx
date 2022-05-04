/**
 * @format
 */

import 'react-native';
import React from 'react';
import NoteDetail from '..';
import {render} from '../../../../jest/createMockNativeApp';

it('renders correctly', () => {
  const NoteDetailScreen = render(<NoteDetail />);
  expect(NoteDetailScreen).toMatchSnapshot();
});
