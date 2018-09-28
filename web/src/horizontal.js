var $frame=$('#oneperframe');jQuery(function($){(function(){var $wrap=$frame.parent();$frame.sly({horizontal:1,itemNav:'forceCentered',smart:1,activateMiddle:1,mouseDragging:0,touchDragging:1,releaseSwing:1,startAt:0,scrollBar:$wrap.find('.scrollbar'),scrollBy:1,speed:1000,elasticBounds:1,easing:'swing',dragHandle:1,dynamicHandle:1,clickBar:1,scrollTrap:1},{change:changePage}).init();}());});var status=0;var state=0;function 
changePage(eventName){
if(status!=1){openPage(this.rel.activeItem);
window.history.pushState(this.rel.activeItem,'Brainence',null);
$('#oneperframe').sly('activate',this.rel.activeItem);
    $('#oneperframe').sly('set', {'scrollBy': 0});
	
setTimeout(function(){ $('#oneperframe').sly('set',{'scrollBy': 1});}, 100);
}status=0;}var activatePageNr=function(index){openPage(index);window.history.pushState(index,'Brainence',null);}
var openPage=function(index){status=1;$frame.sly('activate',index);clearmenuclass();$("#menu-button-"+index).addClass('menu-active');status=0;}
var clearmenuclass=function(){for(i=0;i<6;i++){$("#menu-button-"+i).removeClass('menu-active');}}