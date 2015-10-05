import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var record = this.store.createRecord("test");
        var childOne = this.store.createFragment("foo", {
            "childAttr": "child one attr set by client",
            "anotherChildAttr": true
        });
        var childTwo = this.store.createFragment("foo", {
            "childAttr": "child two attr set by client",
            "anotherChildAttr": true
        });
        record.set("theChildren", []);
        record.set("someAttr", "set by client");
        record.get("theChildren").pushObject(childOne);
        record.get("theChildren").pushObject(childTwo);
        return record;
    },

    actions: {
        save: function() {
            this.store.peekAll("test").objectAt(0).save();
        }
    }
});
