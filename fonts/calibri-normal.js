﻿(function (jsPDFAPI) {
var callAddFont = function () {
this.addFileToVFS("calibri-normal.ttf", font);
this.addFont("calibri-normal.ttf", "calibri", "normal");
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);