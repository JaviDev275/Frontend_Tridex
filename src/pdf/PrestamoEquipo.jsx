import { Page, Text, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ImageSoliOne from '../assets/ImgPdf/PrestamoEquipo1.jpg';
import ImageSoliTwo from '../assets/ImgPdf/PrestamoEquipo2.jpg';

const styles = StyleSheet.create({
  folioTop: {
    top: 90,              // Distancia desde la parte superior
    left: 384,             // Distancia desde el lado izquierdo
    fontSize: 10,         // Tamaño de la fuente
    fontWeight: 'light',   // Negrita
    color: '#000',
  },
  folioButton: {
    top: 708,              // Distancia desde la parte superior
    left: 100,             // Distancia desde el lado izquierdo
    fontSize: 10,         // Tamaño de la fuente
    fontWeight: 'light',   // Negrita
    color: '#000',
  },
  page: {
    flexDirection: 'column',
    padding: 0,
  },
  image: {
    width: '100%', // La imagen ocupa todo el ancho
    height: '100%', // La imagen ocupa toda la altura
    position: 'absolute', // Posición absoluta
    zIndex: -1,
  },
  folioDateDay: {
    top: 698,              // Distancia desde la parte superior
    left: 350,             // Distancia desde el lado izquierdo
    fontSize: 10,         // Tamaño de la fuente
    fontWeight: 'light',   // Negrita
    color: '#000',
  },
  folioDateMonth: {
    top: 687,              // Distancia desde la parte superior
    left: 390,             // Distancia desde el lado izquierdo
    fontSize: 10,         // Tamaño de la fuente
    fontWeight: 'light',   // Negrita
    color: '#000',
  },
  folioDateYear: {
    top: 676,              // Distancia desde la parte superior
    left: 436,             // Distancia desde el lado izquierdo
    fontSize: 10,         // Tamaño de la fuente
    fontWeight: 'light',   // Negrita
    color: '#000',
  },
});

export default function PrestamoEquipo({ reportsCountData }) {
  return (
    <Document>
      {/* Primera página con texto y primera imagen */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.folioTop}>{reportsCountData.folio}</Text>
        <Text style={styles.folioButton}>{reportsCountData.folio}</Text>
        <Text style={styles.folioDateDay}>{reportsCountData.date.day}</Text>
        <Text style={styles.folioDateMonth}>{reportsCountData.date.month}</Text>
        <Text style={styles.folioDateYear}>{reportsCountData.date.year}</Text>
        <Image style={styles.image} src={ImageSoliOne} />
      </Page>

      {/* Segunda página con la segunda imagen */}
      <Page size="A4" style={styles.page}>
        <Image style={styles.image} src={ImageSoliTwo} />
      </Page>
    </Document>
  );
}
