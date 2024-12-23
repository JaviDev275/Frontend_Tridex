import './styles/global.css';
import AcuseDeEntrega from './pdf/AcuseDeEntrega';
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <PDFViewer style={{ height: '100%', width: '100%' }}>
        <AcuseDeEntrega />
      </PDFViewer>
    </div>
  );
}

export default App;
