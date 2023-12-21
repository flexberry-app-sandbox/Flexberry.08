import { Serializer as СерверSerializer } from
  '../mixins/regenerated/serializers/i-i-s-08-сервер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СерверSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
