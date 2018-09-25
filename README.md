# core.plugin.tree

enriches the core with a <a href="https://github.com/Yomguithereal/baobab">Baobab</a> tree.

```js
let core = new require('core.constructor')();
 
 core.plugin(
     require('core.plugin.tree')
 );
 
core.set('a', 5);

core.get('a'); // 5

core.tree // a baobab tree

core.select('a') // a baobab cursor

```
