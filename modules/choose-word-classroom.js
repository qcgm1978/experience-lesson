import './styles/choose-word-classroom.scss'
import $ from 'jquery'
import '../app.js'
import baseObj from './base.js'
$(function(){
    setWidthOrHeightFull();
	const place = [
		{
			start: [380, 510],
			target: ['455px', '618px']
		},
		{
			start: [-50, 80],
			target: ['33px', '618px']
		},
		{
			start: [-475, -320],
			target: ['-367px', '618px']
		}
	];

	let questions = [
		{
			question: 'I see a <span class="right-answer"></span><span class="answer">all</span>.',
			answer: ['b', 'c', 'a'],
			right: 'b'
		},
		{
			question: 'I see an <span class="right-answer"></span><span class="answer">pple</span>.',
			answer: ['b', 'c', 'a'],
			right: 'a'
		},
		{
			question: 'I see a <span class="right-answer"></span><span class="answer">at</span>.',
			answer: ['b', 'c', 'a'],
			right: 'c'
		}
	];

	let questionPhotos = ['./images/ball.png', './images/apple.png', './images/cat.png'];
	let rocketImg = ['url(./images/pink-rocket.png)', 'url(./images/blue-rocket.png)'];
	let audios = ['./audio/i see a ball.mp3','./audio/i see an apple.mp3','./audio/i see a cat.mp3'];

	let question_img = 0;

	$('#star li').each(function(i,n){
		$(this).on('mouseover', ()=>{
			let audio = $('<audio></audio>');
			audio.attr({'src': './audio/'+$(this).html()+'.mp3', 'autoplay': 'autoplay'});
			$(this).parent('ul').append(audio);
		});
		$(this).on('mouseout', ()=>{
			setTimeout(()=>{
				$(this).siblings().remove();
			}, 800);
		});
        baseObj.bindPracticePageEvt($(this),()=>{
            const index = $(this).parent('ul').index();
            if( $(this).html() == questions[question_img].right ){	// 答案正确
                const _this = $(this);
                rocketImg.reverse();
                $('#question-fire img').attr('src', './images/fire.gif');
                $(this).addClass('move');
                setTimeout(()=>{
                    let right_audio = $('<audio></audio>');
                    right_audio.attr({'src': './audio/great.mp3', 'autoplay': 'autoplay'});
                }, 300);
                $(this).animate({
                    'left': place[index].target[0],
                    'top': place[index].target[1]
                }, 1000, ()=>{
                    _this.css('opacity', 0);
                    let star = $('<div></div>');
                    star.addClass('rocket-star');
                    star.html(_this.html());
                    $('.rocket').append(star);
                    $('.rocket').css('zIndex', 101);
                    //$('#star li').html('');
                    _this.removeClass('move');
                    $('.question-fire').animate({'opacity': 1}, 300);
                    $('.right-answer').html(_this.html());
                    $('.right-answer').css({
                        'padding': '0 10px'
                    });
                    let rocket_audio = $('<audio></audio>');
                    let right_answer = $('<audio></audio>');
                    right_answer.attr({'src': audios[question_img], 'autoplay': 'autoplay'});
                    //star.append(right_audio);
                    setTimeout(()=>{
                        rocket_audio.attr({'src': './audio/rocket.wav', 'autoplay': 'autoplay'});
                        $(this).append(rocket_audio);
                        $('.rocket').animate({'top': '-1100px'}, 1500, ()=>{
                            $('.rocket').css({'zIndex': 99, 'top': 0, 'backgroundImage': rocketImg[0]});
                            star.remove();
                            $('.question-fire').css({'opacity': 0});
                            $('#word').html(questions[question_img].question);
                            $('#question-photo').find('img').attr('src', questionPhotos[question_img]);
                            $('#question-fire img').attr('src', '');
                        });
                        question_img ++;
                        if( question_img > 2 ) {
                            question_img = 0;
                        }
                    }, 2500);
                    setTimeout(()=>{
                        _this.css({'opacity': 1, 'top': 0, 'left': 0});
                    }, 2000);
                    setTimeout(()=>{
                        rocket_audio.remove();
                        right_answer.remove();
                    }, 4500);
                });
            }else {		// 答案错误
                let whoops = $('<audio></audio>');
                $(this).animate({
                    'left': place[index].target[0],
                    'top': place[index].target[1],
                    'transform': 'scale(.6, .625)'
                }, 1000, ()=>{
                    whoops.attr({'src': './audio/whoops.mp3', 'autoplay': 'autoplay'});
                    $(this).append(whoops);
                    setTimeout(()=>{
                        whoops.remove();
                    }, 1200);
                }).animate({
                    'left': 0,
                    'top': 0,
                    'transform': 'scale(1, 1)'
                }, 600);
            }
        })
	})
})
