$(function() {
  $.scrollify({
    section : ".section",
    sectionName : "section-name",
    scrollbars:false,
    before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".page-nav .active").removeClass("active");

      $(".page-nav").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"page-nav\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".home").append(pagination);
      /*

      Tip: The two click events below are the same:

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      */
      $(".pagination a").on("click",$.scrollify.move);
    }
  });
});

$(document).ready( function() {
  $(".scroll").click(function() {
    $.scrollify.next();
  });
  $(".nav-home").click(function(){
    $.scrollify.move("#home");
  });
  $(".nav-projects").click(function(){
    $.scrollify.move("#projects");
  });
  $(".nav-contact").click(function(){
    $.scrollify.move("#contact");
  });
});