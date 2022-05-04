import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React from 'react';
import {Pressable, Platform} from 'react-native';

interface NoteListProps {
  navigation: any;
  route: any;
}

const NoteList: React.FC<NoteListProps> = ({navigation, route}) => {
  const renderItem = ({item}: any) => {
    return (
      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate('NoteDetail', {id: item.id})}>
        <Text>{item.key}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'NOPE', id: '1'},
          {key: 'Yesterdays Note', id: '2'},
        ]}
        renderItem={renderItem}
      />
      <Text style={{backgroundColor: 'red'}}>Platform is {Platform.OS}</Text>
      <Text style={{backgroundColor: 'green'}}>
        Extra query params {JSON.stringify(route.params)}
      </Text>
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
    backgroundColor: '#34a1eb',
  },
});

export default NoteList;
