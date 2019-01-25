import Elcol from './src/col';

Elcol.install = function(Vue) {
  Vue.component(Elcol.name, Elcol);
}

export default Elcol;