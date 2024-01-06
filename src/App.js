import './App.css';
import 'alpinejs';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='App text-blue-900	'>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
