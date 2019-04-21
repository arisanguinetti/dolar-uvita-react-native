import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Card, Divider } from 'react-native-paper';
import Header from './components/Header';
import Values from './components/Values';
import Value from './components/Value';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usdUva, setUsdUva] = useState(null);
  const [uva, setUva] = useState(null);
  const [usd, setUsd] = useState(null);

  const doRefresh = async () => {
    setLoading(true);
    setError(null);
    fetch('https://arielsanguinetti.com.ar/dolar-uvita/latest')
      .then(res => res.json())
      .then(json => {
        setUsdUva(json.usdUva);
        setUva(json.uva);
        setUsd(json.usd);
        setLoading(false);
      })
      .catch(({ message }) => {
        setLoading(false);
        setError(message);
      });
  };

  useEffect(() => {
    (async () => {
      await doRefresh();
    })();
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
      {!loading && (
        <>
          <Values title="USD en UVA" data={usdUva} />
          <Divider />
          <Values title="USD" data={usd} />
          <Divider />
          <Value title="UVA" data={uva} />
        </>
      )}
    </>
  );
};

export default App;
