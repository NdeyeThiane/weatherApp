import { useState, useEffect } from 'react'
import './App.css'
import SearchBox from './component/Search';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>Check Weather</h1>
      <SearchBox />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App
