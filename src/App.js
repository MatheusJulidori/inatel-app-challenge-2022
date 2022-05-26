import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home';
import Installers from './pages/Installers';
import Plans from './pages/Plans';
import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

function App() {
  return (
    <Router>
      <TemplateDefault>
      <Routes>
        <Route path="/plans" element={<TemplatePage Component={Plans} title='Plans'/>}/>
        <Route path="/installers" element={<TemplatePage Component={Installers} title='Installers'/>}/>
        <Route path="/" element={<TemplatePage Component={Home} title='Home'/>}/>
      </Routes>
    </TemplateDefault>
  </Router>
  );
}

export default App;
