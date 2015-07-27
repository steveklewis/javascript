
import Ember from 'ember';
import ColumnDefinition from '../column-definition';

export default Ember.Controller.extend({
  numRows: 100,

  tableColumns: function() {
    var nameColumn, scoreColumn;
    nameColumn = ColumnDefinition.create({
      columnWidth: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Beach Name',
      getCellContent: function(row) {
        return row.get('date');
      }
    });
    scoreColumn = ColumnDefinition.create({
      columnWidth: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Beach Score',
      getCellContent: function(row) {
        return row.get('open');
      }
    });
    return [nameColumn, scoreColumn];
  }.property()
});

