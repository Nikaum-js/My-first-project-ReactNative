import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [ newSkill, setNewSkill ] = useState('');
  const [ mySkills, setMySkills ] = useState([]);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
  }

  
  return (
    <View style={styles.container}>
      <Text 
        style={styles.title}
      >
        Bem vindo!
      </Text>

      <TextInput
        style={styles.input} 
        placeholder="Nova Habilidade"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50, color: '#fff' }]}>
        Minhas Habilidades
      </Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
              {skill}
            </Text>
          </TouchableOpacity>
        ))

      } 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEA418',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#f1f1f1',
    color: '#000',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button : {
    backgroundColor: '#1D2551',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#3C3C3C',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  }
})
