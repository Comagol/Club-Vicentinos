import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const MembershipScreen = ({
  membership = {
    status: 'Activo',
    payments: [
      { label: 'Tipo de Socio', status: 'Activo', type: 'user', paid: true },
      { label: 'Cuota del Club', status: 'Al día', type: 'fee', paid: true },
      { label: 'Forma de Pago', status: 'Debito Automático', type: 'fee', paid: true },
    ],
  },
  onPay = () => {},
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Estado de la Cuota</Text>
      <View style={styles.list}>
        {membership.payments.map((item, idx) => (
          <View key={idx} style={styles.item}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>{item.type === 'user' ? '👤' : '$'}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemLabel}>{item.label}</Text>
              <Text style={[styles.itemStatus, { color: item.paid ? '#60778a' : '#e53935' }]}>{item.status}</Text>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.payButton} onPress={onPay}>
        <Text style={styles.payButtonText}>Pagar Ahora</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111518',
    marginBottom: 18,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  list: {
    marginBottom: 32,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7fafd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#eaf1fb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  icon: {
    fontSize: 20,
  },
  itemLabel: {
    fontSize: 15,
    color: '#111518',
    fontWeight: '500',
  },
  itemStatus: {
    fontSize: 13,
    color: '#60778a',
    marginTop: 2,
  },
  payButton: {
    backgroundColor: '#0084ff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 'auto',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MembershipScreen; 