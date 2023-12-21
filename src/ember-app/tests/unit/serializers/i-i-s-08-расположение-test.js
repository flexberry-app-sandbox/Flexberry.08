import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-08-расположение', 'Unit | Serializer | i-i-s-08-расположение', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-08-расположение',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-08-ед-изм',
    'transform:i-i-s-08-режим-сервера',
    'transform:i-i-s-08-тип-настр',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
