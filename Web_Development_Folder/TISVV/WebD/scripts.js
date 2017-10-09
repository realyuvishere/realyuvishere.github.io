setTimeout(function () {
	document.title = "Google";
}, 2000);
setTimeout(function () {
	document.title = "Google I/O";
}, 2500);
setTimeout(function () {
	document.title = "Google I/O 2018";
}, 3000);
setTimeout(function () {
	$("#explorebtn").css('display', 'block');
}, 2500);
document.getElementById('explorebtn').onclick = function () {
	$("div.intro").addClass("fadeaway");
	setTimeout(function () {document.getElementById('mainbod').style.display = "block"; $('body').css('overflow', 'auto')}, 2000);
	anniscript();
};

var anniscript = function(){
     anniscript = function(){}; 
	document.getElementById("card1").style.display = "block";
	$(".script").addClass("fadein");
	document.getElementById("hi").style.display = "block";
	setTimeout(function () {document.getElementById("news").style.display = "block"; }, 3000);
	setTimeout(function () {document.getElementById("anni").style.display = "block"; $(".mainbod").css('background-color', '#4285f4');}, 6000);
	setTimeout(function () {document.getElementById("sur").style.display = "block"; $(".mainbod").css('background-color', '#34a853');}, 9000);
	setTimeout(function () {$("#card1").addClass("fadeaway"); }, 13000);
	setTimeout(function () {$("#card1").css('display', 'none'); anniscript2()}, 14900);
};
function anniscript2() {
	document.getElementById("card2").style.display = "block";
	$(".script").addClass("fadein");
	document.getElementById("chec").style.display = "block";
	$("#vid").css('display', 'block')
	$(".mainbod").css('background-color', '#fff');
	$("#card2").css('color', '#333');
}

var ddfullscreenslider = (function($){

	document.createElement('section')
	document.createElement('article')

	var defaults = {
		addHash: true,
		sliderstate: 'open',
		keycodeNavigation: [40, 38],
		transitionDuration: '0.5s',
		swipeconfig: {peekamount: 100, mousedrag: true},
		onslide: function($slide, index){}
	}

	var transformprop = '' 

	function supportstranslate3d(){ 
	  if (!window.getComputedStyle) {
	      return false;
	  }
	  var $el = $('<div style="position:absolute" />').appendTo(document.body)
	  var has3d
		$el.css('transform', 'translate3d(1px,1px,1px)')
		has3d = $el.css('transform')
		var findtransformprop = $el.get(0).style.cssText.match(/(\w|\-)*transform/i) 
		transformprop = (findtransformprop)? findtransformprop[0] : 'transform'
	  $el.remove()
	
	  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
	}


	var $window = $(window)
	var $root =  $('html')

	function ddfullscreenslider(setting){
		var translatesupport = supportstranslate3d()
		var s = $.extend({}, defaults, setting)
		var $slider = $('#' + s.sliderid)
		var $wrapper = $slider.find('div.slidewrapper').css({transitionDuration: s.transitionDuration})
		var $slides = $()
		var slideslength = 0
		var $nav = $()
		var thisslider = this
		var selectedindx = 0
		var hasharray = []
		var mouseslidetimer
		var swipeevts = {start:"", move:"", end:""}, swipestart = false, dy = 0, bounds = [,], scrollableclass = 'scrollable', bypassdrag = false
		var initialrun= true 

		if (!translatesupport){
			s.transitionDuration = parseFloat(s.transitionDuration) * 1000
		}


		function onslidealways($slide, index){
			if (!initialrun && s.addHash){
				var newhash = $nav.find('li').eq(selectedindx).find('a:eq(0)').attr('href')
				if (history.replaceState){
					history.replaceState(null, null, newhash)
				}
				else{
					window.location.hash = newhash
				}
			}
			s.onslide($slide, index)
		}

		function hashtoselectedslide(hash){
			for (var i=0; i<hasharray.length; i++){
				if (hasharray[i][0] == hash){
					return i
					break
				}
			}
			return 0
		}

		function applybounds(val, swipedir){
			if (swipedir == "down"){
				return (translatesupport)? Math.max(-parseInt(bounds[1]), val) : Math.max(-bounds[1], val)
			}
			else{
				return (translatesupport)? Math.min(bounds[0], val) : Math.min(bounds[0], val)
			}
		}

		function isscrollable($target){
			var $scrollel = $target.closest('.' + scrollableclass)
			var scrollel
			if ($scrollel.length == 1){
				scrollel = $scrollel.get(0)
				if (scrollel.offsetHeight < scrollel.scrollHeight){
					return true
				}
			}
			return false
		}


		function mouseslide(deltaY){
			var targetindx = selectedindx
			if (deltaY < 0) 
				var targetindx = Math.min(slideslength-1, selectedindx+1)
		  else if (deltaY > 0)
				var targetindx = Math.max(0, selectedindx-1)
			if (targetindx != selectedindx)
				thisslider.slideTo(targetindx)
		}

		$slider.on('mousewheel', function(event){
			clearTimeout(mouseslidetimer)
			var deltaY = event.deltaY
			mouseslidetimer = setTimeout(function(){
				mouseslide(deltaY)
			}, 100)
			return false
		})

		$(document).on('keyup', function(e){
			var targetindx = selectedindx
			if (e.keyCode == s.keycodeNavigation[0]) 
				var targetindx = Math.min(slideslength-1, selectedindx+1)
			else if (e.keyCode == s.keycodeNavigation[1]) 
				var targetindx = Math.max(0, selectedindx-1)
			if (targetindx != selectedindx)
				thisslider.slideTo(targetindx)
		})


		swipeevts.start = 'touchstart' + (s.swipeconfig.mousedrag? ' mousedown' : '')
		swipeevts.move = 'touchmove.dragmove' + s.sliderid + (s.swipeconfig.mousedrag? ' mousemove.dragmove' + s.sliderid : '')
		swipeevts.end = 'touchend' + (s.swipeconfig.mousedrag? ' mouseup' : '')

		if (s.swipeconfig.mousedrag){
			$wrapper.bind('click', function(e){
				if ($wrapper.data('dy') != 0) 
					e.preventDefault() 
			})
		}
	
  	$wrapper.bind(swipeevts.start, function(e){
			bypassdrag = false
  		var e = (e.type.indexOf('touch') != -1)? e.originalEvent.changedTouches[0] : e
			if ( isscrollable( $(e.target) ) ){ 
				bypassdrag = true
				return
			}
			swipestart = true
			var mousey = e.pageY
			dy = 0 
			if (translatesupport){
				$wrapper.css({transition: 'none'})
			}
			var initialy = -$window.outerHeight() * selectedindx
			$wrapper.data({dy: dy})
  		$(document).bind(swipeevts.move, function(e){
				if (bypassdrag){
					return
				}
  			var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
  			dy=e.pageY-mousey 
				var newy=initialy+dy
				newy = applybounds(newy, (dy < 0)? 'down' : 'up')
				if (translatesupport){
					$wrapper.css('transform', 'translate3d(0, ' + newy + 'px, 0)')
				}
				else{
	  			$wrapper.css('top', newy)
				}
				$wrapper.data({dy: dy})
  			return false 
  		})
			if (e.type == "mousedown")
  			return false 
  	})

  	$(document).bind(swipeevts.end, function(e){
  		$(document).unbind(swipeevts.move)
			if (!swipestart || bypassdrag)
				return
			if (dy != 0){ 
				if (dy < 0 && dy < -s.swipeconfig.peekamount) 
					var targetindx = Math.min(slideslength-1, selectedindx+1)
				else if (dy > 0 && dy > s.swipeconfig.peekamount) 
					var targetindx = Math.max(0, selectedindx-1)
				else
					targetindx = selectedindx
				thisslider.slideTo(targetindx)
				if (e.type == "mouseup")
					return false
			}
			swipestart = false
  	})


		$wrapper.on('transitionend webkitTransitionEnd', function(e){
			if (/transform/i.test(e.originalEvent.propertyName)){ 
				onslidealways($slides.eq(selectedindx), selectedindx)
			}
		})


		this.reloadSlides = function(){
			$nav.remove()
			hasharray = []
			$nav = $('<ul class="fssnav" />')
			$slides = $('article.slide').each(function(i){
				var $curslide = $(this)
				var anchorval = $curslide.attr('id') || 'slide' + (i+1)
				anchorval = "#" + anchorval
				hasharray.push([anchorval, i])
				var title = $curslide.data('title') || anchorval
				var $navli = $('<li><a href="' + anchorval +'" title="' + title +'">' + (i + 1) + '</a></li>').appendTo($nav)
				var $navlink = $navli.find('a:eq(0)')
				$navli.on('click touchstart', function(e){
					thisslider.slideTo(i)
				})
			})
			$nav.on('click touchstart touchend', function(e){
  			var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
				return false		
			}).appendTo($slider)
			slideslength = $slides.length
			bounds = [0, $window.outerHeight() * (slideslength-1)]
		}

		this.openSlider = function(){
			initialrun = false
			bypassdrag = false
			s.sliderstate = 'open'
			$root.addClass('fssopen')
			$slider.css('visibility', 'visible')
		}

		this.closeSlider = function(){
			s.sliderstate = 'close'
			bypassdrag = true
			$root.removeClass('fssopen')
			$slider.css({visibility:'hidden'})
		}

		this.slideTo = function(indx, noanimation){
			var newy = $window.outerHeight() * indx
			$nav.find('li').eq(selectedindx).removeClass('selected')
			$nav.find('li').eq(indx).addClass('selected')
			selectedindx = indx
			if (translatesupport){
				$wrapper.css({transition: (noanimation)? 'none' : transformprop + ' ' + s.transitionDuration})			
				$wrapper.css('transform', 'translate3d(0, -' + newy + 'px, 0)')
				if (noanimation){ 
					onslidealways($slides.eq(selectedindx), selectedindx)
				}
			}
			else{
				$wrapper.stop().animate({top: -newy}, (noanimation)? 0 : s.transitionDuration, function(){
					onslidealways($slides.eq(selectedindx), selectedindx)
				})
			}
		}

		this.reloadSlides()
		selectedindx = hashtoselectedslide(window.location.hash)
		this.slideTo(selectedindx, true)
		if (s.sliderstate == 'open'){
			this.openSlider()
		}

		$(window).on('resize', function(){
			thisslider.slideTo(selectedindx, true)
			bounds = [0, $window.outerHeight() * (slideslength-1)]
		})


	} 

	return ddfullscreenslider 

})(jQuery)