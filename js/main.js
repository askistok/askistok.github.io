let font_size = 100
let line_height = 1.1

$('body').css('font-size', font_size + '%')
$('body').css('line-height', line_height)

$('.btnm').on('click', function() {
    $('.mobile_menu').toggleClass('mobile_active')
})

$('.mobile_list a').on('click', function() {
    $('.mobile_menu').toggleClass('mobile_active')
})

$('.blind_btn').click(function() {
    $('.blind_btn').css('display', 'none')
    $('.blind').toggleClass('blind_active')
})

$('.close_blind').click(function() {
    $('.blind_btn').css('display', 'block')
    $('.blind').toggleClass('blind_active')
})

$('#a_plus').click(function() {
    font_size = font_size + 10
    $('body').css('font-size', font_size + '%')
})

$('#a_minus').click(function() {
    font_size = font_size - 10
    $('body').css('font-size', font_size + '%')
})

$('#i_plus').click(function() {
    line_height = line_height + 0.1
    $('body').css('line-height', line_height)
})

$('#i_minus').click(function() {
    line_height = line_height - 0.1
    $('body').css('line-height', line_height)
})