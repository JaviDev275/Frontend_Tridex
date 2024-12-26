import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
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
    marginBottom: 20,
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
  table: {
    display: 'table',
    width: '100%',
    borderWidth: 0,
    borderLeftWidth:1,
    borderColor: '#000',
    marginTop: 20,
    borderBottom:0
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: 'rgb(126, 198, 250)', // Celeste
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 4,
    textAlign: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth:1,
    borderColor: '#000',
  },
  tableCell: {
    fontSize: 10,
    padding: 4,
    textAlign: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth:0,
    borderColor: '#000',
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: '#000',
    margin: 'auto',
  },
  textboxContainer: {
    width: '100%',
    borderBottomWidth:0
  },
  textboxTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgb(126, 198, 250)', // Celeste
    color: '#FFF',
    padding: 4,
    borderWidth: 1,
    borderTopWidth:0,
    borderColor: '#000',
  },
  textbox: {
    height: 100,
    borderWidth: 1,
    borderTopWidth:0,
    borderColor: '#000',
    marginTop: -1, // Para eliminar el doble borde con el título
  },
  signatureContainer: {
    marginTop: 40, // Espacio entre el contenido anterior y las firmas
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
    marginTop:20,
    marginBottom: 20, // Espacio entre el texto ("ENTREGÓ"/"RECIBIÓ") y la línea
  },
  signatureLine: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginTop: 60, // Espacio entre el texto y la línea
  },
});

export default function OrdenDeServicio() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.image} src={TridexLogo} />
        <View style={styles.section}>
          <Text style={styles.title}>Orden de servicio</Text>
        </View>

        {/* Tabla */}
        <View style={styles.table}>
          {/* Encabezado - Descripción de equipo */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableHeader, { flex: 4 }]}>Descripción de equipo</Text>
          </View>

          {/* Filas existentes */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1 }]}>Fecha:</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}></Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>Asesoría:</Text>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <View style={styles.checkbox}></View>
            </View>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1 }]}>Nombre:</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}></Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>Mantto Correctivo:</Text>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <View style={styles.checkbox}></View>
            </View>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1 }]}>Ubicación:</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}></Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>Mantto Preventivo:</Text>
            <View style={[styles.tableCell, { flex: 1 }]}>
              <View style={styles.checkbox}></View>
            </View>
          </View>

          {/* Nueva sección: Detalles de equipo */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1 }]}>Equipo:</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}></Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>Marca:</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1 }]}>Modelo:</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}></Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>No. Serie:</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}></Text>
          </View>
        </View>

        {/* Textbox */}
        <View style={styles.textboxContainer}>
          <Text style={styles.textboxTitle}>Problema que presenta el equipo</Text>
          <View style={styles.textbox}></View>
        </View>
        {/* Textbox */}
        <View style={styles.textboxContainer}>
          <Text style={styles.textboxTitle}>Diagnostico del equipo</Text>
          <View style={styles.textbox}></View>
        </View>
                {/* Textbox */}
                <View style={styles.textboxContainer}>
          <Text style={styles.textboxTitle}>Solucion y observaciones</Text>
          <View style={styles.textbox}></View>
        </View>

                <View style={styles.signatureContainer}>
                  <View style={styles.signatureSection}>
                    <View style={styles.signatureLine}></View>
                    <Text style={styles.signatureLabel}>NOMBRE Y FIRMA DEL INGENIERO</Text>
                  </View>
                  <View style={styles.signatureSection}>
                    <View style={styles.signatureLine}></View>
                    <Text style={styles.signatureLabel}>NOMBRE Y FIRMA DEL CLIENTE</Text>
                  </View>
                </View>
      </Page>
    </Document>
  );
}
