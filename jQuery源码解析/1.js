function jQuery() {
    return new jQuery.prototype.init();
}

jQuery.prototype.init = function () {
    console.log('init');
};
jQuery.prototype.css = function () {
    console.log('css');
};
jQuery.prototype.init.prototype = jQuery.prototype;

console.log(jQuery());
// jQuery().css();
