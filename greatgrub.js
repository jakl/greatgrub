!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

//
// Anti-Spam Email Cloaking 3.0 by David Tulga
// http://www.davidtulga.com/antispamemail.htm
//
var x = '&#64;';
var eml = '&#103;&#114;&#101;&#97;&#116;&#103;&#114;&#117;&#98;' + x + '&#108;&#117;&#115;&#46;&#99;&#111;&#109;';
var out = '<a href="mailto:' + eml + '?subject=Sign Me Up!"><div class="wide tall"></div></a>';
$(function(){
  $('body').html(out);

  $('body').click(function(){
    var link = $(this.children)
    var href = link.attr('href')
    $(this.children).attr('href', href)
  })
})
