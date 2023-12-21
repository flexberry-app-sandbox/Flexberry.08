import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '08',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '08',
          title: '08'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
