// counter program 


 const decreaseBtn=document.getElementById('decreaseBtn');
 const resetBtn=document.getElementById('resetBtn');
 const increaseBtn=document.getElementById('increaseBtn');
 const countlabel=document.getElementById('countlabel');
 let count=0;
 
 increaseBtn_onclick=function () {
     count++;
     countlabel.textcontent=count;
 }
 decreaseBtn_onclick=function () {
     count--;
     countlabel.textcontent=count;
 }
 resetBtn_onclick=function () {
     count=0;
     countlabel.textcontent=count;
 }
