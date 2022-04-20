import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React from 'react';
import {CompositeNavigationProp} from '@react-navigation/native';

interface NoteListProps {
  navigation: any;
}

const NoteList: React.FC<NoteListProps> = ({navigation}) => {
  const renderItem = ({item}: any) => {
    return (
      <Button
        title={item.key}
        onPress={() => navigation.navigate('NoteDetail')}></Button>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Todays Note', id: '1'},
          {key: 'Yesterdays Note', id: '2'},
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default NoteList;
