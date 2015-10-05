import DS from 'ember-data';

export default DS.Model.extend({
  someAttr: DS.attr('string'),
  theChildren: DS.hasManyFragments('foo')
});
