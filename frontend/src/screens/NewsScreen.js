import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const NewsScreen = ({
  news = [
    {
      id: '1',
      title: 'Comienzan las obras de los termotanques',
      date: '2 days ago',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80',
    },
    {
      id: '2',
      title: 'Modificacion del sector del fogonero',
      date: '1 week ago',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=80&q=80',
    },
    {
      id: '3',
      title: 'trabajos en la iluminacion del predio',
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=80&q=80',
    },
    {
      id: '4',
      title: 'sembrado de chancha 1 y 2 de rugby',
      date: '1 month ago',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=80&q=80',
    },
  ]
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vicentinos News</Text>
      <FlatList
        data={news}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image source={{ uri: item.image }} style={styles.newsImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDate}>{item.date}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
    paddingTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111518',
    marginBottom: 18,
    alignSelf: 'center',
  },
  newsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7fafd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  newsImage: {
    width: 44,
    height: 44,
    borderRadius: 8,
    marginRight: 14,
    backgroundColor: '#eee',
  },
  newsTitle: {
    fontSize: 15,
    color: '#111518',
    fontWeight: '500',
  },
  newsDate: {
    fontSize: 13,
    color: '#60778a',
    marginTop: 2,
  },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 24,
    backgroundColor: '#0084ff',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  fabText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -2,
  },
});

export default NewsScreen; 