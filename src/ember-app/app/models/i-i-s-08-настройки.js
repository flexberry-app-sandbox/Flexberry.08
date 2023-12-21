import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НастройкиMixin
} from '../mixins/regenerated/models/i-i-s-08-настройки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НастройкиMixin, Validations, {
});

defineProjections(Model);

export default Model;
