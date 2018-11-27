import ElCard from './src/main';

ElCard.install = function(Vue) {
	Vue.component(ElCard.name, ElCard)
}

export default ElCard;