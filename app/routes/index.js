import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var record = this.store.createRecord("test");
        var child = this.store.createFragment("foo");
        record.set("someAttr", "set by client");
        record.set("anotherAttr", true);
        record.set("child", child);
        record.set("child.childAttr", "test");
        record.set("child.anotherChildAttr", true);
        return record;
    },

    actions: {
        save: function() {
            this.store.peekAll("test").objectAt(0).save();
        },
        fix: function() {
            this.store.peekAll("test").objectAt(0).rollback();
        }
    }
});
