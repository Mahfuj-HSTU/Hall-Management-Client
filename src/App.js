import './App.css';
import 'alpinejs';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className='App text-blue-900	'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
