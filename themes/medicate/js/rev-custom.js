
/*
Template: Medicate – Health & Medical HTML Template
Author: peacefulqode.com
Version: 1.0
Design and Developed by: PeacefulQode

*/

// ================home-1=========================//
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider241"] = {
   once: RS_MODULES.modules["revslider241"] !== undefined ? RS_MODULES.modules["revslider241"].once : undefined,
   init: function () {
      window.revapi24 = window.revapi24 === undefined || window.revapi24 === null || window.revapi24.length === 0 ? document.getElementById("rev_slider_24_1") : window.revapi24;
      if (window.revapi24 === null || window.revapi24 === undefined || window.revapi24.length == 0) {
         window.revapi24initTry = window.revapi24initTry === undefined ? 0 : window.revapi24initTry + 1;
         if (window.revapi24initTry < 20) requestAnimationFrame(function () {
            RS_MODULES.modules["revslider241"].init()
         });
         return;
      }
      window.revapi24 = jQuery(window.revapi24);
      if (window.revapi24.revolution == undefined) {
         revslider_showDoubleJqueryError("rev_slider_24_1");
         return;
      }
      revapi24.revolutionInit({
         revapi: "revapi24",
         DPR: "dpr",
         sliderLayout: "fullwidth",
         visibilityLevels: "1240,1024,778,480",
         gridwidth: "1300,1024,778,480",
         gridheight: "830,650,500,350",
         perspective: 600,
         perspectiveType: "global",
         editorheight: "830,650,500,350",
         responsiveLevels: "1240,1024,778,480",
         progressBar: {
            disableProgressBar: true
         },
         navigation: {
            wheelCallDelay: 1000,
            onHoverStop: false,
            arrows: {
               enable: true,
               style: "metis",
               hide_onmobile: true,
               hide_under: "1399px",
               hide_onleave: true,
               animSpeed: "500ms",
               animDelay: "500ms",
               left: {
                  h_offset: 30
               },
               right: {
                  h_offset: 30
               }
            },
            bullets: {
               enable: true,
               tmp: "",
               style: "hesperiden",
               hide_onmobile: true,
               hide_under: 778,
               hide_over: "1399px"
            }
         },
         viewPort: {
            global: false,
            globalDist: "-200px",
            enable: false
         },
         fallbacks: {
            allowHTML5AutoPlayOnAndroid: true
         },
      });

   }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
   window.RS_MODULES.checkMinimal();
};



 
 window.RS_MODULES = window.RS_MODULES || {};
         window.RS_MODULES.modules = window.RS_MODULES.modules || {};
         window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
         window.RS_MODULES.defered = true;
         window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
         window.RS_MODULES.type = 'compiled';

function setREVStartSize(e){
         //window.requestAnimationFrame(function() {
            window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;
            window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;
            try {
               var pw = document.getElementById(e.c).parentNode.offsetWidth,
                  newh;
               pw = pw===0 || isNaN(pw) ? window.RSIW : pw;
               e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
               e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
               e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
               e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
               e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
               e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
               e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);
               if(e.layout==="fullscreen" || e.l==="fullscreen")
                  newh = Math.max(e.mh,window.RSIH);
               else{
                  e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
                  for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];
                  e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
                  e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
                  for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
                                 
                  var nl = new Array(e.rl.length),
                     ix = 0,
                     sl;
                  e.tabw = e.tabhide>=pw ? 0 : e.tabw;
                  e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
                  e.tabh = e.tabhide>=pw ? 0 : e.tabh;
                  e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;
                  for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
                  sl = nl[0];
                  for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}
                  var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);
                  newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
               }
               var el = document.getElementById(e.c);
               if (el!==null && el) el.style.height = newh+"px";
               el = document.getElementById(e.c+"_wrapper");
               if (el!==null && el) {
                  el.style.height = newh+"px";
                  el.style.display = "block";
               }
            } catch(e){
               console.log("Failure at Presize of Slider:" + e)
            }
         //});
        };


        if(typeof revslider_showDoubleJqueryError === "undefined") {function revslider_showDoubleJqueryError(sliderID) {console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");console.log("To fix this, you can:");console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");console.log("2. Find the double jQuery.js inclusion and remove it");return "Double Included jQuery Library";}}


// ================home-2=========================//
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider251"] = {
   once: RS_MODULES.modules["revslider251"] !== undefined ? RS_MODULES.modules["revslider251"].once : undefined,
   init: function () {
      window.revapi25 = window.revapi25 === undefined || window.revapi25 === null || window.revapi25.length === 0 ? document.getElementById("rev_slider_25_1") : window.revapi25;
      if (window.revapi25 === null || window.revapi25 === undefined || window.revapi25.length == 0) {
         window.revapi25initTry = window.revapi25initTry === undefined ? 0 : window.revapi25initTry + 1;
         if (window.revapi25initTry < 20) requestAnimationFrame(function () {
            RS_MODULES.modules["revslider251"].init()
         });
         return;
      }
      window.revapi25 = jQuery(window.revapi25);
      if (window.revapi25.revolution == undefined) {
         revslider_showDoubleJqueryError("rev_slider_25_1");
         return;
      }
      revapi25.revolutionInit({
         revapi: "revapi25",
         DPR: "dpr",
         sliderLayout: "fullwidth",
         visibilityLevels: "1240,1024,778,480",
         gridwidth: "1300,1024,778,480",
         gridheight: "830,650,550,300",
         perspective: 600,
         perspectiveType: "global",
         editorheight: "830,650,550,300",
         responsiveLevels: "1240,1024,778,480",
         progressBar: {
            disableProgressBar: true
         },
         navigation: {
            wheelCallDelay: 1000,
            onHoverStop: false,
            arrows: {
               enable: true,
               style: "metis",
               hide_onmobile: true,
               hide_under: "1399px",
               hide_onleave: true,
               animSpeed: "500ms",
               animDelay: "500ms",
               left: {
                  h_offset: 30
               },
               right: {
                  h_offset: 30
               }
            },
            bullets: {
               enable: true,
               tmp: "",
               style: "hesperiden",
               hide_onmobile: true,
               hide_under: 778,
               hide_over: "1399px"
            }
         },
         viewPort: {
            global: false,
            globalDist: "-200px",
            enable: false
         },
         fallbacks: {
            allowHTML5AutoPlayOnAndroid: true
         },
      });

   }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
   window.RS_MODULES.checkMinimal();
};
// ================home-2 End=========================//
        

// HOME-3=====================================//
var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider291"] = {
   once: RS_MODULES.modules["revslider291"] !== undefined ? RS_MODULES.modules["revslider291"].once : undefined,
   init: function () {
      window.revapi29 = window.revapi29 === undefined || window.revapi29 === null || window.revapi29.length === 0 ? document.getElementById("rev_slider_29_1") : window.revapi29;
      if (window.revapi29 === null || window.revapi29 === undefined || window.revapi29.length == 0) {
         window.revapi29initTry = window.revapi29initTry === undefined ? 0 : window.revapi29initTry + 1;
         if (window.revapi29initTry < 20) requestAnimationFrame(function () {
            RS_MODULES.modules["revslider291"].init()
         });
         return;
      }
      window.revapi29 = jQuery(window.revapi29);
      if (window.revapi29.revolution == undefined) {
         revslider_showDoubleJqueryError("rev_slider_29_1");
         return;
      }
      revapi29.revolutionInit({
         revapi: "revapi29",
         DPR: "dpr",
         sliderLayout: "fullwidth",
         visibilityLevels: "1240,1024,778,480",
         gridwidth: "1240,1024,778,480",
         gridheight: "900,768,550,400",
         perspective: 600,
         perspectiveType: "global",
         editorheight: "900,768,550,400",
         responsiveLevels: "1240,1024,778,480",
         progressBar: {
            disableProgressBar: true
         },
         navigation: {
            wheelCallDelay: 1000,
            onHoverStop: false,
            arrows: {
               enable: true,
               style: "metis",
               hide_onmobile: true,
               hide_under: "1399px",
               hide_onleave: true,
               animSpeed: "500ms",
               animDelay: "500ms",
               left: {
                  h_offset: 30
               },
               right: {
                  h_offset: 30
               }
            },
            bullets: {
               enable: true,
               tmp: "",
               style: "hesperiden",
               hide_over: "1399px"
            }
         },
         viewPort: {
            global: false,
            globalDist: "-200px",
            enable: false
         },
         fallbacks: {
            allowHTML5AutoPlayOnAndroid: true
         },
      });

   }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) {
   window.RS_MODULES.checkMinimal();
};
// End of RevInitScript HOME-3=========================//



// ================Landing =========================//

        window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = 'compiled';


function setREVStartSize(e) {
   //window.requestAnimationFrame(function() {
   window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
   window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
   try {
      var pw = document.getElementById(e.c).parentNode.offsetWidth,
         newh;
      pw = pw === 0 || isNaN(pw) ? window.RSIW : pw;
      e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
      e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
      e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
      e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
      e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
      e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
      e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
      if (e.layout === "fullscreen" || e.l === "fullscreen")
         newh = Math.max(e.mh, window.RSIH);
      else {
         e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
         for (var i in e.rl)
            if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
         e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
         e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
         for (var i in e.rl)
            if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

         var nl = new Array(e.rl.length),
            ix = 0,
            sl;
         e.tabw = e.tabhide >= pw ? 0 : e.tabw;
         e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
         e.tabh = e.tabhide >= pw ? 0 : e.tabh;
         e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
         for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
         sl = nl[0];
         for (var i in nl)
            if (sl > nl[i] && nl[i] > 0) {
               sl = nl[i];
               ix = i;
            }
         var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
         newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
      }
      var el = document.getElementById(e.c);
      if (el !== null && el) el.style.height = newh + "px";
      el = document.getElementById(e.c + "_wrapper");
      if (el !== null && el) {
         el.style.height = newh + "px";
         el.style.display = "block";
      }
   } catch (e) {
      console.log("Failure at Presize of Slider:" + e)
   }
   //});
};

if (typeof revslider_showDoubleJqueryError === "undefined") {
   function revslider_showDoubleJqueryError(sliderID) {
      console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");
      console.log("To fix this, you can:");
      console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");
      console.log("2. Find the double jQuery.js inclusion and remove it");
      return "Double Included jQuery Library";
   }
}

