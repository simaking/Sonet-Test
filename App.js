import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const getCurrentDateTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year} kl. ${hours}:${minutes} (CEST)`;
  };

  const handleControlPress = () => {
    // Simulate control/verification process
    console.log('Kontroll button pressed - verifying card authenticity');
  };

  const handleEuropeanStudentCardPress = () => {
    // Navigate to European student card
    console.log('European Student Card button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#f5f3ff" />
      
      {/* Header with Sikt logo and menu */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoText}>Sikt</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuDots}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* Student Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
            }}
            style={styles.profileImage}
          />
        </View>
        
        <Text style={styles.studentName}>Even Martin Abelseth Riksheim (23)</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>📅</Text>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Fødselsdato:</Text>
              <Text style={styles.detailValue}>24.09.2001</Text>
            </View>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>👤</Text>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Studentnummer:</Text>
              <Text style={styles.detailValue}>599264</Text>
            </View>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailIcon}>🎓</Text>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Studiested:</Text>
              <Text style={styles.detailValue}>Norges teknisk-naturvitenskapelige universitet</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Validity Card */}
      <View style={styles.validityCard}>
        <Text style={styles.validityTitle}>Gyldig studentbevis</Text>
        <Text style={styles.semester}>Vår 2025</Text>
        <Text style={styles.expiryLabel}>Utløper: <Text style={styles.expiryDate}>31.08.2025</Text></Text>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.controlButton} onPress={handleControlPress}>
        <Text style={styles.buttonText}>Kontroll</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.europeanButton} onPress={handleEuropeanStudentCardPress}>
        <Text style={styles.europeanButtonText}>Europeisk studentbevis</Text>
        <Text style={styles.europeanButtonIcon}>🏛️</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Sist oppdatert: {getCurrentDateTime()}</Text>
        <Text style={styles.footerText}>Tidssone: Europe/Oslo</Text>
        <Text style={styles.footerText}>Versjon: 4.1.8</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f3ff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  logoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  menuDots: {
    fontSize: 20,
    color: '#6b46c1',
    fontWeight: 'bold',
  },
  profileCard: {
    backgroundColor: '#e0e7ff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#8b5cf6',
    alignItems: 'center',
  },
  profileImageContainer: {
    marginBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#d1d5db',
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 2,
  },
  detailTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  validityCard: {
    backgroundColor: '#dcfce7',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#22c55e',
  },
  validityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 10,
  },
  semester: {
    fontSize: 16,
    fontWeight: '600',
    color: '#16a34a',
    marginBottom: 8,
  },
  expiryLabel: {
    fontSize: 14,
    color: '#166534',
  },
  expiryDate: {
    fontWeight: 'bold',
  },
  controlButton: {
    backgroundColor: '#8b5cf6',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  europeanButton: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#8b5cf6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  europeanButtonText: {
    color: '#8b5cf6',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  europeanButtonIcon: {
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
});

export default App;