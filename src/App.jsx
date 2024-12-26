import OrdenDeServicio from './pdf/OrdenDeServicio';
import './styles/global.css';
// import AppRouter from './routes/types';

import { PDFViewer } from '@react-pdf/renderer';

function App() {

return (
// <AppRouter/>
<PDFViewer  style={{ width: '100%', height: '100vh' }}>
  <OrdenDeServicio></OrdenDeServicio>
</PDFViewer>
  )
}

export default App


