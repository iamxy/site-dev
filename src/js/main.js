/*! functions.js */
var $ = require('jquery');

$(function(){

  $.fn.extend({
    SimpleTree:function(options){

      var option = $.extend({
        click:function(a){ }
      },options);

      option.tree=this;

      option._init=function(){

        this.tree.find("ul ul").hide();
        this.tree.find("ul ul").prev("li").removeClass("open");

        this.tree.find("ul ul[show='true']").show();
        this.tree.find("ul ul[show='true']").prev("li").addClass("open");
      }/* option._init() End */


      this.find("a").click(function(){ $(this).parent("li").click(); return false; });


      this.find("li").click(function(){


        option.click($(this).find("a")[0]);


        if($(this).next("ul").attr("show")=="true"){
          $(this).next("ul").attr("show","false");
        }else{
          $(this).next("ul").attr("show","true");
        }

        option._init();
      });

      this.find("ul").prev("li").addClass("folder");


      this.find("li").find("a").attr("hasChild",false);
      this.find("ul").prev("li").find("a").attr("hasChild",true);


      option._init();

    }/* ree Function End */

  });
});





$(function () {


  $(".st_tree").SimpleTree({

    /* 可无视代码部分*/
    click:function(a){
      if(!$(a).attr("hasChild"))
        alert($(a).attr("ref"));
    }

  });



  var oFixed  = $('#draw_fixed');
  var doFixed = function () {
    var t = $(document).scrollTop(), opacityValue = 1 -.00175 * t;

    oFixed.css({
      opacity:opacityValue
    })
  }
  doFixed();
  $(window).scroll(doFixed);


  var eleBack = null, eleFront = null,

      eleList = $(".btn_translate"),
      nav_open = $('#nav_open');


  var funBackOrFront = function() {
    eleList.each(function() {
      if ($(this).hasClass("out")) {
        eleBack = $(this);
      } else {
        eleFront = $(this);
      }
    });
  };
  funBackOrFront();


  var flag = true;

  $(".outBtn").bind("click", function() {
    if(!flag){
      return
    }

    nav_open.toggleClass('nav_open');
    flag = false;

    eleFront.addClass("out").removeClass("in");
    setTimeout(function() {
      flag = true;
      eleBack.addClass("in").removeClass("out");

      funBackOrFront();
    }, 225);
    return false;
  });

  $('#group').on('click',function () {
    $(this).toggleClass('open');
  });



});
