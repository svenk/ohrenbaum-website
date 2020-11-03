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
    ' <label for="irony">Content:</label> '+
    ' <select name="irony" id="irony">    '+
    '   <option value="0">Extremely serious</option>'+
    '   <option value="1">Slightly winking</option> '+
    '   <option value="2">Sense of humor</option>   '+
    '   <option value="3">I forget myself</option>  '+
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

function detectIrony() {
    // Will return the last finding of ironyLevel in the current URL.
    var m = window.location.href.match(ironyLevelRegexp);
    return m ? m.pop() : defaultIronyLevel;
}

function scatterIrony(level) {
    console.log("Scattering level ", level);
    
    for(i=0; i<maxIronyLevel; i++) {
        document.querySelector("body").classList.remove("ironyLevel"+i);
        if(i <= level)
            document.querySelector("body").classList.add("ironyLevel"+i);
    }
    
    document.querySelectorAll('a').forEach(function(e){
        if(e.href.match(ironyLevelRegexp))
            e.href.replace(ironyLevelRegexp, "ironyLevel="+level.toString())
        else
            e.href += "#ironyLevel="+level.toString();
    });
}


ready(function() {
    var f = document.createElement("form");
    f.innerHTML = ironySwitcher;
    document.querySelector('nav').appendChild(f);
    
    ironyLevel = detectIrony();
    scatterIrony(ironyLevel);
    
    document.querySelector('nav select').addEventListener("input", function(e){
        console.log(e.srcElement);
        ironyLevel = e.srcElement.value; // populate global level
        scatterIrony(ironyLevel);
    });
    
});
