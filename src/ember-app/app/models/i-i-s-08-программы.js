import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПрограммыMixin
} from '../mixins/regenerated/models/i-i-s-08-программы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПрограммыMixin, Validations, {
});

defineProjections(Model);

export default Model;
