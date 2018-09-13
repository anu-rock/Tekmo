var frameModule = require('ui/frame');

function onAboutButtonTap() {
    var navigationEntry = {
        moduleName: "views/about/about",
        transition: {
            name: "slideTop"
        }
    };
    frameModule.topmost().navigate(navigationEntry);
}
exports.onAboutButtonTap = onAboutButtonTap;

function onContactButtonTap() {
    var navigationEntry = {
        moduleName: "views/contact/contact",
        transition: {
            name: "slideTop"
        }
    };
    frameModule.topmost().navigate(navigationEntry);
}
exports.onContactButtonTap = onContactButtonTap;

function onProductsButtonTap() {
    var navigationEntry = {
        moduleName: "views/products/products",
        transition: {
            name: "slideTop"
        }
    };
    frameModule.topmost().navigate(navigationEntry);
}
exports.onProductsButtonTap = onProductsButtonTap;