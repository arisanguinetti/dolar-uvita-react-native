import React from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import 'moment/locale/es';
import { DataTable, Card } from 'react-native-paper';

const Values = ({ title, values }) => {
  const dato = values.pop();

  const showDate = timestamp =>
    moment(timestamp)
      .tz('America/Argentina/Buenos_Aires')
      .format('LLL');

  const { vendedor, comprador } = dato.value;

  return (
    <Card>
      <Card.Title title={title} subtitle={showDate(dato.date)} />
      <Card.Content>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{ textAlign: 'center' }}>
              Vendedor
            </DataTable.Title>
            <DataTable.Title style={{ textAlign: 'center' }}>
              Comprador
            </DataTable.Title>
          </DataTable.Header>
          {dato && (
            <DataTable.Row key={dato.date}>
              <DataTable.Cell>{vendedor.toFixed(2)}</DataTable.Cell>
              <DataTable.Cell>{comprador.toFixed(2)}</DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </Card.Content>
    </Card>
  );
};

Values.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
};

export default Values;
