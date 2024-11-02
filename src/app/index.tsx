import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { supabase } from '../lib/supabase';

export default function HomeScreen() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      let { data, error } = await supabase.from('users').select('*');
      if (error) {
        Alert.alert('Erro ao carregar usuários');
      }
      console.log('Usuários', data?.[0].name);
      setUser(data?.[0].name);
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Dashboard Platform</Text>
      <Text>Plataforma de Dashboard da Casa Civil</Text>
      <Text>Esse dado está vindo do supabase: {user}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
