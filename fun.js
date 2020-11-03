/**
 * not everybody is humorous.
 * 
 * btw, http://youmightnotneedjquery.com/
 * 
 * 2020, SvenK, Public Domain
 **/ 

var defaultIronyLevel =  0; /* not kidding */
var maxIronyLevel     = 10; /* hardcoded */

var ironyLevel = defaultIronyLevel; /* current global level */

var ironySwitcher = 
    ' <form>                              '+
    ' <label for="irony">Inhalt:</label> '+
    ' <select name="irony" id="irony">    '+
    '   <option value="0">Extrem Ernst</option>'+
    '   <option value="1">Ironisch</option> '+
    '   <option value="2">Sarkastisch</option>   '+
    '   <option value="3">Absurd</option>  '+
    ' </select>                           '+
    ' </form>';
    
var ironyLevelRegexp = /ironyLevel=([0-9])/;

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// Vanilla JS function that changes a select element's option.
function select(selectElement, optionValToSelect){
    for(var opt, j = 0; opt = selectElement.options[j]; j++) {
        if(opt.value == optionValToSelect) {
            selectElement.selectedIndex = j; break;
        }
    }
}

function detectIrony() {
    // Will return the last finding of ironyLevel in the current URL.
    var m = window.location.href.match(ironyLevelRegexp);
    return m ? m.pop() : defaultIronyLevel;
}

function scatterIrony(level) {
    ironyLevel = level; // global storage
    console.log("Scattering level ", level);
    
    for(i=0; i<maxIronyLevel; i++) {
        document.querySelector("body").classList.remove("ironyLevel"+i);
        //if(i <= level)
        //    document.querySelector("body").classList.add("ironyLevel"+i);
    }
    document.querySelector("body").classList.add("ironyLevel"+level);
    
    document.querySelectorAll('a').forEach(function(e){
        if(e.href.match(ironyLevelRegexp))
            e.href = e.href.replace(ironyLevelRegexp, "ironyLevel="+level.toString())
        else
            e.href += "#ironyLevel="+level.toString(); // this will probably destroy some deeplinks 
    });
    
    select(document.querySelector("nav select"), level);
}


ready(function() {
    var f = document.createElement("form");
    f.innerHTML = ironySwitcher;
    document.querySelector('nav').appendChild(f);
    
    ironyLevel = detectIrony();
    scatterIrony(ironyLevel);
    
    document.querySelector('nav select').addEventListener("input", function(e){
        scatterIrony(e.srcElement.value);
    });
    
    document.querySelectorAll("a[data-switch-irony]").forEach(function(e) {
        e.addEventListener("click", function() {
            scatterIrony(e.getAttribute("data-switch-irony"));
            return false;
        });
    });
});
