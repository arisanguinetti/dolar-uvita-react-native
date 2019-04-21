import React from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import { DataTable, Card } from 'react-native-paper';
import 'moment/locale/es';

const Value = ({ title, data }) => {
  const showDate = timestamp =>
    moment(timestamp)
      .tz('America/Argentina/Buenos_Aires')
      .format('LLL');

  const { date, value } = data;

  return (
    <Card>
      <Card.Title title={title} subtitle={showDate(date)} />
      <Card.Content>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{ textAlign: 'center' }}>
              Valor
            </DataTable.Title>
          </DataTable.Header>
          {value && (
            <DataTable.Row key={date}>
              <DataTable.Cell>{value.toFixed(2)}</DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </Card.Content>
    </Card>
  );
};

Value.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};

export default Value;
