/**
 * Created by xang on 7/2/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();

function acleda() {

 this.rateinfo=function (okcallback, errorcallback) {

     var storeratearray=[];
     var lablearray=['Currency','Buy','Sale'];

     httpclient.call(conf.serverurl.acleda,function ok(stringhtml) {

         var startproint=stringhtml.indexOf("<tr><td");
         var endproint=stringhtml.indexOf("</table>");
         var newstringhtml=stringhtml.substring(startproint,endproint);
         var spile=newstringhtml.split("</tr><tr>");

         for (var i=0;i<spile.length;i++){
             var newsplite=spile[i].split("</td>");
             var storerate={};

             var curency=newsplite[0].substring(newsplite[0].lastIndexOf("'>")+"'>".length,newsplite[0].length);
             var buy=newsplite[1].substring(newsplite[1].lastIndexOf("'>")+"'>".length,newsplite[1].length);
             var sale=newsplite[2].substring(newsplite[2].lastIndexOf("'>")+"'>".length,newsplite[2].length);
             storerate[lablearray[0]]=curency.trim();
             storerate[lablearray[1]]=buy.trim();
             storerate[lablearray[2]]=sale.trim();

             storeratearray.push(storerate);

         }

    okcallback(storeratearray);

     },function error(err) {
         errorcallback(err);
     });

 }

}

module.exports=function () {
    return new acleda();
};