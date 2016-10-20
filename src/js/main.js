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
    var scrollPane = $(".scroll-pane"),
        scrollContent = $(".scroll-content");
    var this_val = 0;
    //функция стабилизации
    function stabilize(this_val){    
        if (this_val>=0 && this_val<=20 && this_val!=10) {
          setTimeout(function(){$(".liner .after").slider("value", 10)},50);
        }
        if(this_val==10){identify(1);}//10
        if (this_val>=20 && this_val<=44 && this_val!=32) {
          setTimeout(function(){$(".liner .after").slider("value", 32)},50);
        }
        if(this_val==32){identify(2);}//32
        if (this_val>=44 && this_val<=70 && this_val!=57) {
          setTimeout(function(){$(".liner .after").slider("value", 57)},50);
        }
        if(this_val==57){identify(3);}//57
        if (this_val>=70 && this_val<=101 && this_val!=86) {
          setTimeout(function(){$(".liner .after").slider("value", 86)},50);
        }
        if(this_val==86){identify(4);}//86
    }
    //функция расчета процентов смещения ленты слайдера
    function percent(value){
      var percent;
      if (value>=0 && value<=20) {
        percent = -((value-10)*100/20);
      }
      if (value>=20 && value<=44) {
        percent = -((value-32)*100/24 + 100);
      }
      if (value>=44 && value<=70) {
        percent = -((value-57)*100/26 + 200);
      }
      if (value>=70 && value<=101) {
        percent = -((value-86)*100/32 + 300);
      }
      return percent
    }

    //функция идентификации положения слайдера
    function identify(index){
      $('.first-slider-wrap').attr('data-slide',index);
      $('.liner a').removeClass('active');
      $('.liner a[data-slide="'+index+'"]').addClass('active');
      console.log('big-slider-index='+index);
    }

    //функция перехода к слайду
    function go_to_slide(index){
      var ind = parseInt(index);
      if (ind < 1) {
        $('.liner .before').attr('style', 'width:0%;transition:all 0.5s!important');
        $('.ui-slider-handle').attr('style', 'left:0%;transition:all 0.5s!important');
        $('.first-slider-lint').attr('style', 'left:50%;transition:all 0.5s!important');   
        setTimeout(function(){$('.ui-slider-handle').attr('style', 'left:0%');$(".liner .after").slider("value", 0);},500);   
      }
      if (ind == 1) {
        $('.liner .before').attr('style', 'width:10%;transition:all 0.5s!important');
        $('.ui-slider-handle').attr('style', 'left:10%;transition:all 0.5s!important');
        $('.first-slider-lint').attr('style', 'left:0%;transition:all 0.5s!important');  
        setTimeout(function(){$('.ui-slider-handle').attr('style', 'left:10%');$(".liner .after").slider("value", 10)},500);       
      }
      if (ind == 2) {
        $('.liner .before').attr('style', 'width:32%;transition:all 0.5s!important'); 
        $('.ui-slider-handle').attr('style', 'left:32%;transition:all 0.5s!important');
        $('.first-slider-lint').attr('style', 'left:-100%;transition:all 0.5s!important');  
        setTimeout(function(){$('.ui-slider-handle').attr('style', 'left:32%');$(".liner .after").slider("value", 32)},500);     
      }
      if (ind == 3) {
        $('.liner .before').attr('style', 'width:57%;transition:all 0.5s!important');
        $('.ui-slider-handle').attr('style', 'left:57%;transition:all 0.5s!important');
        $('.first-slider-lint').attr('style', 'left:-200%;transition:all 0.5s!important'); 
        setTimeout(function(){$('.ui-slider-handle').attr('style', 'left:57%');$(".liner .after").slider("value", 57)},500);        
      }
      if (ind == 4) {
        $('.liner .before').attr('style', 'width:86%;transition:all 0.5s!important');
        $('.ui-slider-handle').attr('style', 'left:86%;transition:all 0.5s!important');
        $('.first-slider-lint').attr('style', 'left:-300%;transition:all 0.5s!important');   
        setTimeout(function(){$('.ui-slider-handle').attr('style', 'left:86%');$(".liner .after").slider("value", 86);},500);   
      }
      if (ind > 4) {
        $('.liner .before').attr('style', 'width:100%;transition:all 0.5s!important');
        $('.ui-slider-handle').attr('style', 'left:100%;transition:all 0.5s!important');
        $('.first-slider-lint').attr('style', 'left:-350%;transition:all 0.5s!important');   
        setTimeout(function(){$('.ui-slider-handle').attr('style', 'left:100%');$(".liner .after").slider("value", 100);},500);   
      }
      //identify(index);
    }

    //scroll-bar
    var scrollbar = $(".liner .after").slider({
      //animate: 500,
      slide: function( event, ui ) {
        //$('.liner .before').attr('style', 'width:'+ui.value+'%');
        $('.liner .before').attr('style', 'width:'+ui.value+'%;transition:all 0s!important');
        $('.first-slider-lint').attr('style', 'left:'+percent(ui.value)+'%;transition:all 0s!important');

        //if ( scrollContent.width() > scrollPane.width() ) {
        //  scrollContent.css( "margin-left", Math.round(
        //    ui.value / 100 * ( scrollPane.width() - scrollContent.width() )
        //  ) + "px" );
        //} else {
        //  scrollContent.css( "margin-left", 0 );
        //}
      },
      change: function(event, ui){
        //$('.liner .before').attr('style', 'width:'+ui.value+'%;transition:all 0s!important');
        //setTimeout($('.liner .before').attr('style', 'width:'+ui.value+'%'),1000);
        $('.liner .before').attr('style', 'width:'+ui.value+'%;transition:all 0.5s!important');      
        $('.first-slider-lint').attr('style', 'left:'+percent(ui.value)+'%;transition:all 0.5s!important');
        this_val = ui.value;
        stabilize(this_val);
      },
      create: function( event, ui ) {
        console.log('jq-ui.slider.created');
        go_to_slide(1);
      }
    });
$('.cssload-container').fadeOut(250);

    $('.ui-slider-handle').mousedown(function(){
      $('.liner .before,.first-slider-lint').addClass('ui-state-active');
    }).mouseup(function(){
      $('.liner .before,.first-slider-lint').removeClass('ui-state-active');
    });

    //click-controls
    $('.liner a').click(function(e){
      e.preventDefault();
      go_to_slide($(this).data('slide'));
    });

    $('.strb_l').click(function(e){
      e.preventDefault();
      go_to_slide(parseInt($('.first-slider-wrap').attr('data-slide'))-1);

    });

    $('.strb_r').click(function(e){
      e.preventDefault();
      go_to_slide(parseInt($('.first-slider-wrap').attr('data-slide'))+1);
    });

    //swipe-slide control
    $('.sec2 .wrap').swipe({
      swipe:function(event,direction){
        if(direction==='left'){
          go_to_slide(parseInt($('.first-slider-wrap').attr('data-slide'))+1);
        }
        if(direction==='right'){
          go_to_slide(parseInt($('.first-slider-wrap').attr('data-slide'))-1);
        }
      },
      allowPageScroll:"vertical",
      excludedElements:  ".liner"
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
  
//menu
var menu_active = 0;
$('.menu-btn').click(function(){
  if (!$('.menu').hasClass('active')) {
    $(this).addClass('as-close');
    $('.menu').addClass('active');
    menu_active = 1;
  } else{
    $(this).removeClass('as-close');
    $('.menu').removeClass('active');
    menu_active = 0;
  }
});
$('section, header').click(function(){
  if (menu_active == 1) {
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

  //double-slider
  var small_bx_1 = $('#small_bx_1').bxSlider({
        infiniteLoop: true,
        nextSelector:'#slbx1r',
        prevSelector:'#slbx1l',
        slideWidth:575,
        controls: true,
        pager:true,
        pagerCustom: '#smbx1p',
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
      onSlideNext:function($slideElement, oldIndex, newIndex){
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
      },
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        
        var elem = $('.slid1_slide').not('.bx-clone').find("#smbx1p");
        var ofleft = elem.parent().offset().left-elem.offset().left;
        var left_gr = 123*newIndex;
        var right_gr = 123*newIndex-123*3;
        var css_left = parseInt(elem.css('left').replace('px',''));
        //console.log(ofleft,left_gr,right_gr,css_left);
        if(ofleft>left_gr){
          elem.css({
            left: -left_gr+'px'
          });
        }
        if(ofleft<right_gr){
          elem.css({
            left: -right_gr+'px'
          });
        }
      },
      onSliderLoad:function(){
        console.log('small_bx_1.loaded');

      }
    });

  var small_bx_2 = $('#small_bx_2').bxSlider({
        infiniteLoop: true,
        nextSelector:'#slbx2r',
        prevSelector:'#slbx2l',
        slideWidth:575,
        controls: true,
        pager:true,
        pagerCustom: '#smbx2p',
        auto: false,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
      onSlideNext:function($slideElement, oldIndex, newIndex){
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
      },
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        var elem = $('.slid1_slide').not('.bx-clone').find("#smbx2p");
        var ofleft = elem.parent().offset().left-elem.offset().left;
        var left_gr = 123*newIndex;
        var right_gr = 123*newIndex-123*3;
        var css_left = parseInt(elem.css('left').replace('px',''));
        //console.log(ofleft,left_gr,right_gr,css_left);
        if(ofleft>left_gr){
          elem.css({
            left: -left_gr+'px'
          });
        }
        if(ofleft<right_gr){
          elem.css({
            left: -right_gr+'px'
          });
        }
      },
      onSliderLoad:function(){
        console.log('small_bx_2.loaded');
      }
    });

  var big_bx = $('.slid1_wrap').bxSlider({
        infiniteLoop: true,
        nextSelector:'#bbxr',
        prevSelector:'#bbxl',
        slideWidth:980,
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




        $('.slid1_slide').not('.bx-clone').find("#smbx1p").draggable({axis:'x',
                    drag: function( event, ui ) {
                      var width = $('#smbx1p').width();
                      var parent_width = $('#smbx1p').parent().width();
                      var right = parent_width - width - ui.position.left;
                      console.log(ui.position.left,right);
                      if (right >0 || ui.position.left >0 ) {
                        return false;
                      }
                }
              });

$('.slid1_slide').not('.bx-clone').find("#smbx2p").draggable({axis:'x',
                    drag: function( event, ui ) {
                      var width = $('#smbx2p').width();
                      var parent_width = $('#smbx2p').parent().width();
                      var right = parent_width - width - ui.position.left;
                      console.log(ui.position.left,right);
                      if (right >0 || ui.position.left >0 ) {
                        return false;
                      }
                }
              });


      }
    });

  //sider otz
  var otz_bx = $('#bx_otz').bxSlider({
        infiniteLoop: true,
        nextSelector:'#bxor',
        prevSelector:'#bxol',
        slideWidth:980,
        controls: true,
        pager:false,
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