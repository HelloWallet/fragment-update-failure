import DS from 'ember-data';

export default DS.ModelFragment.extend({
  childAttr: DS.attr('string'),
  anotherChildAttr: DS.attr('boolean')
});
