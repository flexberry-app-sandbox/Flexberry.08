import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import РежимСервераEnum from '../enums/i-i-s-08-режим-сервера';

export default FlexberryEnum.extend({
  enum: РежимСервераEnum,
  sourceType: 'IIS.08.РежимСервера'
});
