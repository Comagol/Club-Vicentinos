import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = ({
  user = {
    name: 'Francisco Comabella',
    memberId: '123456',
    membershipType: 'Socio Activo',
    email: 'fran.comabella@example.com',
    phone: '(+54) 9 11 3333-3333',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMK2J4dfHECS-HsqJlZDf_xu5qtMR_VKT4Mg&s',
  },
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.memberId}>Member ID: {user.memberId}</Text>
      </View>

      {/* Personal Information */}
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <View style={styles.infoSection}>
        <InfoRow label="Name" value={user.name} />
        <InfoRow label="Member ID" value={user.memberId} />
        <InfoRow label="Membership Type" value={user.membershipType} />
      </View>

      {/* Contact Information */}
      <Text style={styles.sectionTitle}>Contact Information</Text>
      <View style={styles.infoSection}>
        <InfoRow label="Email" value={user.email} />
        <InfoRow label="Phone" value={user.phone} />
      </View>

      {/* Logout Button */}
      <View style={{ marginTop: 32, marginHorizontal: 32 }}>
        <Button
          title="Cerrar sesión"
          color="#d32f2f"
          onPress={() => navigation.navigate('Auth')}
        />
      </View>
    </View>
  );
};

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 0,
  },
  header: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111518',
    marginBottom: 2,
  },
  memberId: {
    fontSize: 15,
    color: '#60778a',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111518',
    marginLeft: 24,
    marginTop: 18,
    marginBottom: 2,
  },
  infoSection: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#dbe1e6',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#dbe1e6',
    paddingHorizontal: 8,
  },
  infoLabel: {
    color: '#60778a',
    fontSize: 14,
    width: 110,
  },
  infoValue: {
    color: '#111518',
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
  },
});

export default ProfileScreen; 