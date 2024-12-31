import React, {useState, useRef} from 'react';
import {
  Animated,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

export const AnimatedList = () => {
  const [data, setData] = useState<any[]>([]);
  const animations = useRef<Record<string, any>>({}).current;

  const addBulkItems = () => {
    const newItems = Array.from({length: 10}, (_, i) => {
      const id = Date.now().toString() + i;
      return {id, text: `Item ${data.length + i + 1}`};
    });

    setData(prev => [...prev, ...newItems]);

    // Tạo animations cho từng item
    newItems.forEach(item => {
      animations[item.id] = {
        opacity: new Animated.Value(0),
        translateY: new Animated.Value(30),
      };
    });

    // Kích hoạt animation với `Animated.stagger`
    const animationArray = newItems.map(item => {
      const animation = animations[item.id];
      return Animated.parallel([
        Animated.timing(animation.opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation.translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]);
    });

    Animated.stagger(100, animationArray).start();
  };

  const removeItem = id => {
    const animation = animations[id];

    if (animation) {
      Animated.timing(animation.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        delete animations[id];
        setData(prev => prev.filter(item => item.id !== id));
      });
    }
  };

  const renderItem = ({item}) => {
    const animation = animations[item.id];

    if (!animation) {
      return null;
    }

    return (
      <Animated.View
        style={[
          styles.item,
          {
            opacity: animation.opacity,
            transform: [{translateY: animation.translateY}],
          },
        ]}>
        <Text style={styles.itemText}>{item.text}</Text>
        <TouchableOpacity onPress={() => removeItem(item.id)}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={addBulkItems}>
        <Text style={styles.addButtonText}>Add 10 Items</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  addButton: {
    padding: 15,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  list: {
    padding: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  removeText: {
    color: '#ff0000',
    marginTop: 10,
  },
});
