var btn = document.getElementById('btn');

btn.onclick = function(e){
	e.preventDefault();
	var text = document.querySelector('.title');
	text.style.color = '#E9ECF5';
	document.querySelector('.header').style.background = '#8380B6';
	document.querySelector('.header_text').style.fontSize = '12px';
	document.querySelector('.travel').style.width = '500px';
	document.querySelector('.ticket').style.background = '#C2CAE8';
	document.querySelector('.footer').style.background = '#8380B6';
	document.querySelector('.footer').style.color = '#040F16';

}

$(function(){
	$(window).scroll(function(){
		$('.plan').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650){
				$(this).addClass("swing")
			}
		});
	});
	$(window).scroll(function(){
		$('.btn-form').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650){
				$(this).addClass("slideInDown")
			}
		});
	});
})
