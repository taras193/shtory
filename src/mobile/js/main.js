$(document).ready(function() {
  console.log('main.document.ready');

  $('a').unbind('click');
  console.log('a.prevent-canceled');


  //zz_pop open
  $('.zz-btn').click(function(e){
    e.preventDefault();
    $('#zz_pop').arcticmodal();
  });
  //pop close
  $('.close').click(function(e){
    e.preventDefault();
    $(this).parent().arcticmodal('close');
  });

  //valid phone
  $('input[name="phone"]').mask('+7 (999) 999-99-99');
  $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
  $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

  //slider1
    
  var slider1 = $('#sld1').bxSlider({
        infiniteLoop: true,
        nextSelector:'#sld1_r',
        prevSelector:'#sld1_l',
        slideWidth:980,
        controls: true,
        pager: true,
        pagerCustom: '#sld1_p',
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        touchEnabled: true,
      onSlideNext:function($slideElement, oldIndex, newIndex){
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
      },
      onSlideBefore: function($slideElement, oldIndex, newIndex){ 
        $('.slider_r>p').text($('.first-slider-slide[data-sld="'+newIndex+'"]').data('alt'));
      },
      onSliderLoad:function(){

        console.log('sld1.loaded');

      }
    });

  //calculator
  $('.calc-step a').click(function(e){
      e.preventDefault();
      var cur_step = $(this).closest('.calc-step').data('step');
      $('input[name="step'+cur_step+'"]').val($(this).text());
      $(this).closest('.calc-step').removeClass('active').addClass('disactive').next().addClass('active').removeClass('disactive');
      $('.form_line').attr('data-step',parseInt(cur_step)+1);
      console.log('calc.prev-step='+parseInt(cur_step)+1);
  });
  $('.back_k').click(function(){
      var cur_step = $(this).closest('.calc-step').data('step');
      $(this).closest('.calc-step').removeClass('active').addClass('disactive').prev().addClass('active').removeClass('disactive');
      $('.form_line').attr('data-step',parseInt(cur_step)-1);
  });

  //double-slider
  var small_bx_1 = $('#small_bx_1').bxSlider({
        infiniteLoop: true,
        //nextSelector:'#slbx1r',
        //prevSelector:'#slbx1l',
        slideWidth:480,
        controls: false,
        pager:true,
        pagerCustom: '#slbxs1',
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
      onSlideNext:function($slideElement, oldIndex, newIndex){
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
      },
      onSliderLoad:function(){
        console.log('small_bx_1.loaded');
$("#smbx1p").draggable({axis:'x',containment:"parent" });
      }
    });

  var small_bx_2 = $('#small_bx_2').bxSlider({
        infiniteLoop: true,
        //nextSelector:'#slbx2r',
        //prevSelector:'#slbx2l',
        slideWidth:480,
        controls: false,
        pager:true,
        pagerCustom: '#slbxs2',
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
      onSlideNext:function($slideElement, oldIndex, newIndex){
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
      },
      onSliderLoad:function(){
        console.log('small_bx_2.loaded');
      }
    });


  var small_bx_3 = $('#small_bx_3').bxSlider({
        infiniteLoop: true,
        //nextSelector:'#slbx3r',
        //prevSelector:'#slbx3l',
        slideWidth:480,
        controls: false,
        pager:true,
        pagerCustom: '#slbxs3',
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
      onSlideNext:function($slideElement, oldIndex, newIndex){
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
      },
      onSliderLoad:function(){
        console.log('small_bx_3.loaded');
      }
    });

  var big_bx = $('.slid1_wrap').bxSlider({
        infiniteLoop: true,
        nextSelector:'#sldb_r',
        prevSelector:'#sldb_l',
        slideWidth:480,
        controls: true,
        pager:false,
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        touchEnabled: false,
      onSlideNext:function($slideElement, oldIndex, newIndex){
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
      },
      onSliderLoad:function(){

        $('.sec6 .left').each(function(index, el){
          $(this).swipe({
            swipe:function(event,direction){
              if(direction==='left'){
                big_bx.goToNextSlide();
              }
              if(direction==='right'){
                big_bx.goToPrevSlide();
              }
            },
            allowPageScroll:"vertical"
          });
        });


        console.log('big_bx.loaded');

      }
    });

  //sider otz
  var otz_bx = $('#bx_otz').bxSlider({
        infiniteLoop: true,
        nextSelector:'#bxor',
        prevSelector:'#bxol',
        slideWidth:480,
        controls: true,
        pager:true,
        pagerCustom: '#otz_p',        
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
      onSlideNext:function($slideElement, oldIndex, newIndex){
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
      },
      onSliderLoad:function(){
        console.log('bx_otz.loaded');
      }
    });

  //map-btn
  $('.btn_vop').click(function(e){
    e.preventDefault();
    $('.vop_okno').toggleClass('active');
  });

  //menu
//  $('.btn_foot').click(function(e){
//    e.preventDefault();
//    if (!$('.menu').hasClass('active')) {
//      console.log('menu.hasnotactive');
//      $('.menu').addClass('active')
//    }else{
//      $('.menu').removeClass('active');
//    }
//  });

//  $('header,section,footer,#map').not('#m-sect8').click(function(){
//      $('.menu').removeClass('active');
//  });
  
  //$('.menu a').click(function(e){e.preventDefault();$('.menu').removeClass('active');$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 2000);});

//menu

var menu_active = 0;
$('.menu-btn,.btn_foot').click(function(e){
    e.preventDefault();
  if (!$('.menu').hasClass('active')) {
    $('.menu').addClass('active');
    $('.menu-btn').addClass('as-close');
    menu_active = 1;
  } else{
    $('.menu').removeClass('active');
    $('.menu-btn').removeClass('as-close');
    menu_active = 0;
  }
});
$('.menu .menu-a').click(function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
  $('.menu').removeClass('active');
  $('.menu-btn').removeClass('as-close');
    menu_active = 0;
});


  //conf pop
  $('.polit').click(function(e){
    e.preventDefault();
    $('#conf_pop').arcticmodal();
  });

  //forms
  function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
  function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
  }
  $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
  utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){$('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")});
  $('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
  $('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");

  $('form').submit(function(e){
      e.preventDefault();
      $(this).find('input[type="text"]').trigger('blur');
      if(!$(this).find('input[type="text"]').hasClass('error-input')){
          var type=$(this).attr('method');
          var url=$(this).attr('action');
          var data=$(this).serialize();
          var track_event=$(this).find('input[name="event"]').val();
          $.ajax({type: type, url: url, data: data,
          success : function(){
              $.arcticmodal('close');$('#okgo').arcticmodal();
              yaCounter38088070.reachGoal(track_event);
              ga('send','event','submit',track_event);
          }
      }); 
      }
  });

});

$(window).load(function() {
  console.log('main.window.load');
  if (isMobile != true) {    
    if(!$('body').hasClass('loaded')){$('body').addClass('loaded');}
    console.log('body.loaded'); 
  }

});