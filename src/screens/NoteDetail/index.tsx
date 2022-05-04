import {Text} from 'react-native';
import React from 'react';
import {Stack} from '@mobily/stacks';
import TestComponent from '../../components/TestComponent/TestComponent';

interface NoteDetailProps {}

const NoteDetail: React.FC<NoteDetailProps> = () => {
  return (
    <>
      <Stack space={20} align="center">
        <Text>We are in the note detail component</Text>
        <Text>We are in the note detail component</Text>
        <Text>We are in the note detail component</Text>
        <TestComponent></TestComponent>
      </Stack>
    </>
  );
};

export default NoteDetail;
