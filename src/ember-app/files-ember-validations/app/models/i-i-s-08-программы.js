import {
  defineNamespace,
  defineProjections,
  Model as ПрограммыMixin
} from '../mixins/regenerated/models/i-i-s-08-программы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПрограммыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
