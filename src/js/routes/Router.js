// export class Router {
// 	constructor(selector, routes) {
// 		if (!selector) {
// 			throw new Error ('Selector is not provide')
// 		}

// 		this.routes = routes;
// 		this.init();

// 		this.changePageHandler = this.changePageHandler.bind(this)

// 		}

// 		init() {
// 			window.addEventListener('hashchange', this.changePageHandler)
// 			this.changePageHandler()
// 		};

// 		changePageHandler(e) {

// 		}

// 		destroy() {
// 			window.removeEventListener('hashchange', this.changePageHandler)
// 		}
// }