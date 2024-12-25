import './styles/global.css';
//import AppRouter from './routes/types';

import PrestamoEquipo from './pdf/PrestamoEquipo';
import { PDFViewer } from '@react-pdf/renderer';

function App() {

  return (
//<AppRouter/>
    <PDFViewer  style={{ width: '100%', height: '100vh' }}>
      <PrestamoEquipo />
    </PDFViewer>
  )
}

export default App


