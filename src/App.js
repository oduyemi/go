import './App.css';
import { Box } from '@mui/material';
import { Sidebar } from './components/Sidebar';
import { AllUsers } from './components/AllUsers';


import Home from './page';

function App() {
  return (
    <Box className="App">
      <Home />
      <Box display="flex">
        <Sidebar />
        <AllUsers />
      </Box>
    </Box>
  );
}

export default App;
