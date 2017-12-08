

module.exports = {
    name: 'core.plugin.tree',
    dependencies: ['core.import.baobab'],
    init(def, done) {
        var core = this;
        var Baobab = core.imports.baobab;
        core.extend({
            tree: new Baobab({
                plugins: {}
            }),
            set(path, value) {
                return this.tree.set.apply(this.tree, arguments);
            },
            get(path) {
                return this.tree.get.apply(this.tree, arguments);
            },
            select(path) {
                return this.tree.select.apply(this.tree, arguments);
            }
        })
        done();
    }
};