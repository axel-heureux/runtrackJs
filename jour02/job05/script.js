window.onscroll = function() {
    var scrollPercentage = (document.documentElement.scrollTop || document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    var footer = document.getElementById("footer");

    var color = `rgb(${scrollPercentage * 2.55}, 0, ${255 - scrollPercentage * 2.55})`;
    footer.style.backgroundColor = color;
}