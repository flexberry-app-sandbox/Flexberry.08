import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idСотрудник: DS.attr('number'),
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-08-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  idСотрудник: {
    descriptionKey: 'models.i-i-s-08-сотрудник.validations.idСотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-08-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-08-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-08-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-08-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-08-сотрудник', {
    idСотрудник: attr('Id сотрудник', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    должность: belongsTo('i-i-s-08-должность', 'Должность', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-08-сотрудник', {
    idСотрудник: attr('Id сотрудник', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    должность: belongsTo('i-i-s-08-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
