document.addEventListener("DOMContentLoaded", function(event) { 
    var modus = document.getElementById('myModus');
    var btn = document.getElementById("btn-modus");
    var span = document.getElementsByClassName("close")[0]; 
    btn.onclick = function() {
        modus.style.display = "block";
    }
    
    span.onclick = function() {
        modus.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modus) {
            modus.style.display = "none";
        }
    }
    });