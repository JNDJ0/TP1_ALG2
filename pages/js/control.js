function showTriangulation(divId) {
    var divs = document.getElementsByClassName('animation-triangulation-div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
        document.getElementsByClassName(divs[i].id)[0].style.backgroundColor = "#222";
    }
    document.getElementById(divId).style.display = 'flex';
    document.getElementsByClassName(divId)[0].style.maxWidth = "360px";
    document.getElementsByClassName(divId)[0].style.backgroundColor = "#000";
}

showTriangulation("div1-triangulation")

function showColoring(divId) {
    var divs = document.getElementsByClassName('animation-coloring-div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
        document.getElementsByClassName(divs[i].id)[0].style.backgroundColor = "#222";
    }
    document.getElementById(divId).style.display = 'flex';
    document.getElementsByClassName(divId)[0].style.backgroundColor = "#000";
}

showColoring("div1-coloring")
