import { Outlet } from 'react-router-dom';
import Applayout from './shared/layouts/Applayout';

function App() {
  return (
    <Applayout>
      <Outlet />
    </Applayout>
  );
}

export default App;
