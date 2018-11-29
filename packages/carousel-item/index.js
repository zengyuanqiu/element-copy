import ElCarouselItem from '../carousel/src/item';

ElCarouselItem.install = function(Vue) {
	Vue.component(CarouselItem.name, CarouselItem)
}

export default ElCarouselItem;