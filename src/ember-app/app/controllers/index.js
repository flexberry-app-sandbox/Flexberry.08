import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.курсовая.caption'),
          title: i18n.t('forms.application.sitemap.курсовая.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.сотрудники.title'),
            children: [{
              link: 'i-i-s-08-должность-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-08-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-08-должность-l.title'),
              icon: 'paperclip',
              children: null
            }, {
              link: 'i-i-s-08-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-08-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-08-сотрудник-l.title'),
              icon: 'building',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.должности.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.должности.title'),
            children: [{
              link: 'i-i-s-08-расположение-l',
              caption: i18n.t('forms.application.sitemap.курсовая.должности.i-i-s-08-расположение-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.должности.i-i-s-08-расположение-l.title'),
              icon: 'edit',
              children: null
            }, {
              link: 'i-i-s-08-отчет-о-сервере-l',
              caption: i18n.t('forms.application.sitemap.курсовая.должности.i-i-s-08-отчет-о-сервере-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.должности.i-i-s-08-отчет-о-сервере-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-08-сервер-l',
              caption: i18n.t('forms.application.sitemap.курсовая.должности.i-i-s-08-сервер-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.должности.i-i-s-08-сервер-l.title'),
              icon: 'address card',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})