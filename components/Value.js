import React from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import 'moment/locale/es';
import { DataTable, Card } from 'react-native-paper';

const Value = ({ title, values }) => {
  const value = values.pop();

  const showDate = timestamp =>
    moment(timestamp)
      .tz('America/Argentina/Buenos_Aires')
      .format('LLL');

  return (
    <Card>
      <Card.Title title={title} subtitle={showDate(value.date)} />
      <Card.Content>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{ textAlign: 'center' }}>
              Valor
            </DataTable.Title>
          </DataTable.Header>
          {value && (
            <DataTable.Row key={value.date}>
              <DataTable.Cell>{value.value.toFixed(2)}</DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </Card.Content>
    </Card>
  );
};

Value.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
};

export default Value;
