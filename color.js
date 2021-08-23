
var Links ={
  setColor:function(color){
    // var list=document.querySelectorAll('a');
    // var i=0;
    // while(i<list.length){
      // list[i].style.color=color;
      // i=i+1;
      $('a').css('color',color);
  }
}


var Body = {
 SetColor:function(color){
   // document.querySelector('body').style.color = color;
   $('body').css('color', color);
 },
 BackgroundSetColor:function(color){
  // document.querySelector('body').style.backgroundColor = color;
$('body').css('backgroundColor', color);
 }
}
function nightDayHandler(self){
 var target= document.querySelector('body');
if(self.value === 'night'){
 Body.BackgroundSetColor('black');
 Body.SetColor('white');
 self.value='day';
 Links.setColor('yellow');
}else{
 Body.BackgroundSetColor('white');
 Body.SetColor('black');
 self.value='night';

  Links.setColor('blue');

}

}
