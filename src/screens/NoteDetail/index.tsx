import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from '@mobily/stacks';

interface NoteDetailProps {}

const NoteDetail: React.FC<NoteDetailProps> = () => {
  return (
    <>
      <Stack space={20} align="center">
        <Text>We are in the note detail component</Text>
        <Text>We are in the note detail component</Text>
        <Text>We are in the note detail component</Text>
      </Stack>
    </>
  );
};

export default NoteDetail;
