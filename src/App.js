import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Home from './Component/Home';

function App() {
  const client = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
