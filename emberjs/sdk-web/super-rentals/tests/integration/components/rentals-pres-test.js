import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rentals-pres', 'Integration | Component | rentals pres', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rentals-pres}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rentals-pres}}
      template block text
    {{/rentals-pres}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
