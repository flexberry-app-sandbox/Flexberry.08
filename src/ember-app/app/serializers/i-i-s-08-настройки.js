import { Serializer as НастройкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-08-настройки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НастройкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
