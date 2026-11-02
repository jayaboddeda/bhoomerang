// Site-wide 404 switch. Set to false to bring all pages back online.
var FORCE_404 = true;

if (FORCE_404 && location.pathname !== '/404.html') {
    location.replace('/404.html');
}
