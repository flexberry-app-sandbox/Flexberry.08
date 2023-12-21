import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  описание: DS.attr('string'),
  типНастроек: DS.attr('i-i-s-08-тип-настр'),
  сервер: DS.belongsTo('i-i-s-08-сервер', { inverse: 'настройки', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-08-настройки.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-08-настройки.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-08-настройки.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типНастроек: {
    descriptionKey: 'models.i-i-s-08-настройки.validations.типНастроек.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сервер: {
    descriptionKey: 'models.i-i-s-08-настройки.validations.сервер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НастройкиE', 'i-i-s-08-настройки', {
    типНастроек: attr('Тип настроек', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    описание: attr('Описание', { index: 3 })
  });
};
