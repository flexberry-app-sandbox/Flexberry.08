import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IIS08ДолжностьLForm from './forms/i-i-s-08-должность-l';
import IIS08ОтчетОСервереLForm from './forms/i-i-s-08-отчет-о-сервере-l';
import IIS08РасположениеLForm from './forms/i-i-s-08-расположение-l';
import IIS08СерверLForm from './forms/i-i-s-08-сервер-l';
import IIS08СотрудникLForm from './forms/i-i-s-08-сотрудник-l';
import IIS08ДолжностьEForm from './forms/i-i-s-08-должность-e';
import IIS08ОтчетОСервереEForm from './forms/i-i-s-08-отчет-о-сервере-e';
import IIS08РасположениеEForm from './forms/i-i-s-08-расположение-e';
import IIS08СерверEForm from './forms/i-i-s-08-сервер-e';
import IIS08СотрудникEForm from './forms/i-i-s-08-сотрудник-e';
import IIS08ДолжностьModel from './models/i-i-s-08-должность';
import IIS08НастройкиModel from './models/i-i-s-08-настройки';
import IIS08ОтчетОСервереModel from './models/i-i-s-08-отчет-о-сервере';
import IIS08ПрограммыModel from './models/i-i-s-08-программы';
import IIS08РасположениеModel from './models/i-i-s-08-расположение';
import IIS08СерверModel from './models/i-i-s-08-сервер';
import IIS08СотрудникModel from './models/i-i-s-08-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-08-должность': IIS08ДолжностьModel,
    'i-i-s-08-настройки': IIS08НастройкиModel,
    'i-i-s-08-отчет-о-сервере': IIS08ОтчетОСервереModel,
    'i-i-s-08-программы': IIS08ПрограммыModel,
    'i-i-s-08-расположение': IIS08РасположениеModel,
    'i-i-s-08-сервер': IIS08СерверModel,
    'i-i-s-08-сотрудник': IIS08СотрудникModel
  },

  'application-name': '08',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '08',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '08',
          title: '08'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        курсовая: {
          caption: 'Курсовая',
          title: 'Курсовая',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-08-должность-l': {
              caption: 'Должность',
              title: ''
            },
            'i-i-s-08-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          должности: {
            caption: 'Должности',
            title: 'Должности',
            'i-i-s-08-расположение-l': {
              caption: 'Расположение',
              title: ''
            },
            'i-i-s-08-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            },
            'i-i-s-08-сервер-l': {
              caption: 'Сервер',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-08-должность-l': IIS08ДолжностьLForm,
    'i-i-s-08-отчет-о-сервере-l': IIS08ОтчетОСервереLForm,
    'i-i-s-08-расположение-l': IIS08РасположениеLForm,
    'i-i-s-08-сервер-l': IIS08СерверLForm,
    'i-i-s-08-сотрудник-l': IIS08СотрудникLForm,
    'i-i-s-08-должность-e': IIS08ДолжностьEForm,
    'i-i-s-08-отчет-о-сервере-e': IIS08ОтчетОСервереEForm,
    'i-i-s-08-расположение-e': IIS08РасположениеEForm,
    'i-i-s-08-сервер-e': IIS08СерверEForm,
    'i-i-s-08-сотрудник-e': IIS08СотрудникEForm
  },

});

export default translations;
