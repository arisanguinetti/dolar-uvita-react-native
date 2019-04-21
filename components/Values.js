import React from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import 'moment/locale/es';
import { DataTable, Card } from 'react-native-paper';

const Values = ({ title, data }) => {
  const showDate = timestamp =>
    moment(timestamp)
      .tz('America/Argentina/Buenos_Aires')
      .format('LLL');

  const { date, vendedor, comprador } = data;

  return (
    <Card>
      <Card.Title title={title} subtitle={showDate(date)} />
      <Card.Content>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{ textAlign: 'center' }}>
              Comprador
            </DataTable.Title>
            <DataTable.Title style={{ textAlign: 'center' }}>
              Vendedor
            </DataTable.Title>
          </DataTable.Header>
          {data && (
            <DataTable.Row key={date}>
              <DataTable.Cell>{comprador.toFixed(2)}</DataTable.Cell>
              <DataTable.Cell>{vendedor.toFixed(2)}</DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </Card.Content>
    </Card>
  );
};

Values.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};

export default Values;
