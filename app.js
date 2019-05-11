var date = new Date();
var year = date.getFullYear();
var footerYear = document.getElementById('currentYear');
var textYear = document.createTextNode(year);
footerYear.appendChild(textYear);