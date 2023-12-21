import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-08-сервер', 'Unit | Model | i-i-s-08-сервер', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-08-должность',
    'model:i-i-s-08-настройки',
    'model:i-i-s-08-отчет-о-сервере',
    'model:i-i-s-08-программы',
    'model:i-i-s-08-расположение',
    'model:i-i-s-08-сервер',
    'model:i-i-s-08-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
