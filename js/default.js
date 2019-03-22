$(document).ready(function() {
    /*
progress through stages where 

*/

  resize();
  $(window).resize(function(){
    resize();
  })
  function resize(){
    ww = $(window).width();
    wh = $(window).height();
    $('.Game').css({left:ww/2-150,top:wh/2-300})
  }

$('.Songs_Album').parent().addClass('Album');
$('.Songs_Album').click(function(){
  var offset = $(this).offset();
  $('.Game').animate({
    scrollTop: offset.top,
});
})


$('.toggle').click(function(e) {
    e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
$('.Main_Menu').click();
$('.Main_Menu').click();

});