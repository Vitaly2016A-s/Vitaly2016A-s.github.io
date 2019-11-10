/*  JS-файл на основе jQuery  */
// Обращаемся к странице
$(document).ready(function() {
	// Обращаемся к элементам “Выбрать тур” , “Получить консультацию” и “Расписание туров”
	$('.main_btna, .main_btn, [href="#sheldure"]').click(function() {
		$('.modal').css('display', 'block');
		$('.overlay').slideToggle('slow');
		$('.modal').animate({
			'position': 'relative',
			'top': '-1500'}, 1).animate({
				'top': '0'
			}, 2000);
	});
	// Обращаемся к кнопке закрытия модального окна (крестику)
	$('.close').click(function(){
		$('.overlay').slideToggle(2000);
		$('.modal').animate({
			'top': '-1500'}, 2000);
	});
});