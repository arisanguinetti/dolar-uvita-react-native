import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Card, Divider } from 'react-native-paper';
import Header from './components/Header';
import Values from './components/Values';
import Value from './components/Value';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usdUva, setUsdUva] = useState([]);
  const [uva, setUva] = useState([]);
  const [usd, setUsd] = useState([]);

  const doRefresh = () => {
    setLoading(true);
    setError(null);
    fetch('https://arielsanguinetti.com.ar/dolar-uvita/data')
      .then(res => res.json())
      .then(json => {
        setLoading(false);
        setUsdUva(json.usdUva);
        setUva(json.uva);
        setUsd(json.usd);
      })
      .catch(({ message }) => {
        setLoading(false);
        setError(message);
      });
  };

  useEffect(() => {
    doRefresh();
  }, []);

  return (
    <>
      <Header
        title="Dolar Uvita"
        subtitle="@DolarUvita"
        doRefresh={doRefresh}
      />
      {loading && <ActivityIndicator size="large" />}
      {error && (
        <Card>
          <Card.Title
            title="Error"
            subtitle="Por favor intente nuevamente..."
          />
        </Card>
      )}
      {usdUva.length > 0 && <Values title="USD en UVA" values={usdUva} />}
      <Divider />
      {usd.length > 0 && <Values title="USD" values={usd} />}
      <Divider />
      {uva.length > 0 && <Value title="UVA" values={uva} />}
    </>
  );
};

export default App;
