import DS from 'ember-data';

export default DS.Model.extend({
  someAttr: DS.attr('string'),
  anotherAttr: DS.attr('boolean'),
  child: DS.hasOneFragment('foo')
});
