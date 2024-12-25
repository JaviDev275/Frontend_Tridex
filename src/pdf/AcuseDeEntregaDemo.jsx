import { Page, Text, View, Document, StyleSheet, Image, } from '@react-pdf/renderer';
import TridexLogo from '../assets/Tridex.png';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    paddingVertical: 38,
    paddingHorizontal: 70,
  },
  section: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 36,
  },
  image: {
    width: 130,
    position: 'absolute',
    left: 45,
  },
  place: {
    alignItems: 'flex-end',
    fontSize: 12,
    marginTop: 36,
  },
  clientInfoContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  clientInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    width: '35%',
  },
  input: {
    fontSize: 12,
    width: 500,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 2,
    paddingLeft: 5,
  },
  CommunicatedText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 12,
    textAlign: 'center',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#32849b',
    marginTop: 8,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '20%',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#32849b',
    padding: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  tableCol: {
    width: '20%',
    minHeight: 25,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#32849b',
    padding: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  tableCell: {
    fontSize: 10,
  },
  observations: {
    borderWidth: 1,
    borderColor: '#000',
    gap: 8,
    paddingTop: 10,
    paddingBottom: 60,
  },
  observationsTitle: {
    fontSize: 11,
    marginBottom: 5,
    marginTop: 40,
    marginLeft: 20,
  },
  observationsText: {
    fontSize: 11,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'justify',
  },
  signatureContainer: {
    marginTop: 60, // Espacio entre el contenido anterior y las firmas
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signatureSection: {
    alignItems: 'center',
    width: '45%',
  },
  signatureLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20, // Espacio entre el texto ("ENTREGÓ"/"RECIBIÓ") y la línea
  },
  signatureLine: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginTop: 80, // Espacio entre el texto y la línea
  },
});

export default function AcuseDeEntregaDemo() {
  const apiData = {
    nombre: 'Javier Antonio',
    direccion: '',
    telefono: '',
    equipos: [
      {
        descripcion: '',
        cantidad: '',
        marca: '',
        modelo: '',
        noSerie: '',
      },
      {
        descripcion: '',
        cantidad: '',
        marca: '',
        modelo: '',
        noSerie: '',
      },
    ],
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.image} src={TridexLogo} />

        <View style={styles.section}>
          <Text style={styles.title}>Acuse de entrega de equipo</Text>
        </View>

        <View style={styles.place}>
          <Text>Ciudad de México, CDMX a 20 agosto del 2024</Text>
        </View>

        <View style={styles.clientInfoContainer}>
          <View style={styles.clientInfoRow}>
            <Text style={styles.label}>NOMBRE DEL CLIENTE:</Text>
            <Text style={styles.input}>{apiData.nombre || ''}</Text>
          </View>
          <View style={styles.clientInfoRow}>
            <Text style={styles.label}>DIRECCIÓN:</Text>
            <Text style={styles.input}>{apiData.direccion || ''}</Text>
          </View>
          <View style={styles.clientInfoRow}>
            <Text style={styles.label}>TELÉFONO:</Text>
            <Text style={styles.input}>{apiData.telefono || ''}</Text>
          </View>
          <Text style={styles.CommunicatedText}>Por medio del presente acuso de entrega de equipo médico siguiente:</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Descripción</Text>
            <Text style={styles.tableColHeader}>Cantidad</Text>
            <Text style={styles.tableColHeader}>Marca</Text>
            <Text style={styles.tableColHeader}>Modelo</Text>
            <Text style={styles.tableColHeader}>No. de Serie</Text>
          </View>

          {apiData.equipos.map((equipo, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCol}>{equipo.descripcion || ''}</Text>
              <Text style={styles.tableCol}>{equipo.cantidad || ''}</Text>
              <Text style={styles.tableCol}>{equipo.marca || ''}</Text>
              <Text style={styles.tableCol}>{equipo.modelo || ''}</Text>
              <Text style={styles.tableCol}>{equipo.noSerie || ''}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.observationsTitle}>Observaciones:</Text>
        <View style={styles.observations}>
          <Text style={styles.observationsText}>• Se entrega equipo en perfectas condiciones, funcionando correctamente.</Text>
        </View>

        <View style={styles.signatureContainer}>
          <View style={styles.signatureSection}>
            <Text style={styles.signatureLabel}>ENTREGÓ</Text>
            <View style={styles.signatureLine}></View>
            <Text style={styles.signatureLabel}>NOMBRE Y FIRMA</Text>
          </View>
          <View style={styles.signatureSection}>
            <Text style={styles.signatureLabel}>RECIBIÓ</Text>
            <View style={styles.signatureLine}></View>
            <Text style={styles.signatureLabel}>NOMBRE Y FIRMA</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
