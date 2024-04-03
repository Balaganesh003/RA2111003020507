import React, { useState } from 'react';
import axios from 'axios';

interface ResponseData {
  windowPrevState: number[];
  windowCurrState: number[];
  numbers: number[];
  avg: string;
}

export default function MyComponent() {
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchNumbers = async (numberid: string) => {
    try {
      const res = await axios.get<ResponseData>(`/api/numbers/${numberid}`);
      setResponse(res.data);
    } catch (err: any) {
      setError(err.response?.data.error || 'Error fetching data');
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <button onClick={() => fetchNumbers('p')}>Fetch Prime Numbers</button>
      <button onClick={() => fetchNumbers('f')}>Fetch Fibonacci Numbers</button>
      <button onClick={() => fetchNumbers('e')}>Fetch Even Numbers</button>
      <button onClick={() => fetchNumbers('r')}>Fetch Random Numbers</button>

      {response && (
        <div>
          <h2>Previous Window State:</h2>
          <p>{response.windowPrevState.join(', ')}</p>
          <h2>Current Window State:</h2>
          <p>{response.windowCurrState.join(', ')}</p>
          <h2>Numbers:</h2>
          <p>{response.numbers.join(', ')}</p>
          <h2>Average:</h2>
          <p>{response.avg}</p>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}
