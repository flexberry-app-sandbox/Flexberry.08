import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iP: DS.attr('string'),
  порт: DS.attr('string'),
  протокол: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-08-сотрудник', { inverse: null, async: false }),
  программы: DS.hasMany('i-i-s-08-программы', { inverse: 'сервер', async: false }),
  настройки: DS.hasMany('i-i-s-08-настройки', { inverse: 'сервер', async: false })
});

export let ValidationRules = {
  iP: {
    descriptionKey: 'models.i-i-s-08-сервер.validations.iP.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  порт: {
    descriptionKey: 'models.i-i-s-08-сервер.validations.порт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  протокол: {
    descriptionKey: 'models.i-i-s-08-сервер.validations.протокол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-08-сервер.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  программы: {
    descriptionKey: 'models.i-i-s-08-сервер.validations.программы.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  настройки: {
    descriptionKey: 'models.i-i-s-08-сервер.validations.настройки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СерверE', 'i-i-s-08-сервер', {
    iP: attr('IP', { index: 0 }),
    порт: attr('Порт', { index: 1 }),
    протокол: attr('Протокол', { index: 2 }),
    сотрудник: belongsTo('i-i-s-08-сотрудник', 'Сотрудник', {
      имя: attr('Имя', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'имя' }),
    программы: hasMany('i-i-s-08-программы', 'Программы', {
      название: attr('Название', { index: 0 }),
      описание: attr('Описание', { index: 1 }),
      версия: attr('Версия', { index: 2 }),
      размер: attr('Размер', { index: 3 }),
      едИзмерения: attr('Ед измерения', { index: 4 })
    }),
    настройки: hasMany('i-i-s-08-настройки', 'Настройки', {
      типНастроек: attr('Тип настроек', { index: 0 }),
      датаНачала: attr('Дата начала', { index: 1 }),
      датаОкончания: attr('Дата окончания', { index: 2 }),
      описание: attr('Описание', { index: 3 })
    })
  });

  modelClass.defineProjection('СерверL', 'i-i-s-08-сервер', {
    iP: attr('IP', { index: 0 }),
    порт: attr('Порт', { index: 1 }),
    протокол: attr('Протокол', { index: 2 }),
    сотрудник: belongsTo('i-i-s-08-сотрудник', 'Имя', {
      имя: attr('Имя', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
