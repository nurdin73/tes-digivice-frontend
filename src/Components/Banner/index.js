import React, { Component } from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import './banner.css'
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }
	componentDidMount() {
		const track = document.querySelector('.carousel__track');
		const carousel = document.querySelector('.carousel__image')
		const slides = Array.from(track.children)
		const nextButton = document.querySelector('.carousel__button--right');
		const prevButton = document.querySelector('.carousel__button--left');
		const dotsNav = document.querySelector('.carousel_nav')
		const dots = Array.from(dotsNav.children)

		const slideWidth = slides[0].getBoundingClientRect().width

		// slides[0].style.left = slideWidth * 0 + 'px';
		// slides[1].style.left = slideWidth * 1 + 'px';
		// slides[2].style.left = slideWidth * 2 + 'px'

		const setSlidePosition = (slide, i) => {
			slide.style.left = slideWidth * i + 'px'
		}
		slides.forEach(setSlidePosition)

		const moveToSlide = (track, currentSlide, targetSlide) => {
			if(targetSlide === null) {
				const start = slides[0]
				track.style.transform = 'translateX(-' + 0 + ')'
				currentSlide.classList.remove('current-slide')
				start.classList.add('current-slide')
			} else {
				track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
				currentSlide.classList.remove('current-slide')
				targetSlide.classList.add('current-slide')
			}
		}

		const updateDot = (currentDot, targetDot) => {
			if(targetDot === null) {
				const start = dots[0]
				currentDot.classList.remove('current-slide')
				start.classList.add('current-slide')
			} else {
				currentDot.classList.remove('current-slide')
				targetDot.classList.add('current-slide')
			}
		}

		const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
			if(targetIndex === -1) {
				prevButton.classList.add('is-hidden')
				nextButton.classList.remove('is-hidden')
			} else {
				if(targetIndex === 0) {
					prevButton.classList.add('is-hidden')
					nextButton.classList.remove('is-hidden')
				} else if (targetIndex === slides.length - 1) {
					prevButton.classList.remove('is-hidden')
					nextButton.classList.add('is-hidden')
				} else {
					prevButton.classList.remove('is-hidden')
					nextButton.classList.remove('is-hidden')
				}
			}
		}

		// click left button
		nextButton.addEventListener('click', e => {
			const currentSlide = track.querySelector('.current-slide')
			const nextSlide = currentSlide.nextElementSibling
			const currentDot = dotsNav.querySelector('.current-slide')
			const nextDot = currentDot.nextElementSibling
			const nextIndex = slides.findIndex(slide => slide === nextSlide)

			moveToSlide(track, currentSlide, nextSlide)
			updateDot(currentDot, nextDot)
			hideShowArrows(slides, prevButton, nextButton, nextIndex) 
		})
		// click right button
		prevButton.addEventListener('click', e => {
			const currentSlide = track.querySelector('.current-slide')
			const prevSlide = currentSlide.previousElementSibling
			const currentDot = dotsNav.querySelector('.current-slide')
			const prevDot = currentDot.previousElementSibling
			const prevIndex = slides.findIndex(slide => slide === prevSlide)

			moveToSlide(track, currentSlide, prevSlide)
			updateDot(currentDot, prevDot)
			hideShowArrows(slides, prevButton, nextButton, prevIndex) 
		})

		

		// click indicator
		dotsNav.addEventListener('click', e => {
			const targetDot = e.target.closest('button');
			if(!targetDot) return;
			const currentSlide = track.querySelector('.current-slide')
			const currentDot = dotsNav.querySelector('.current-slide')
			const targetIndex = dots.findIndex(dot => dot === targetDot)
			const targetSlide = slides[targetIndex]

			moveToSlide(track, currentSlide, targetSlide)

			updateDot(currentDot, targetDot)

			hideShowArrows(slides, prevButton, nextButton, targetIndex) 
			
		})


		// mouse down
		carousel.addEventListener('mousedown', e => {
			const position = e.clientX
			console.log(position)
		})




		// WIth INTERVAL CAROUSEL

		// setInterval(() => {
		// 	const currentSlide = track.querySelector('.current-slide')
		// 	const nextSlide = currentSlide.nextElementSibling
		// 	const nextIndex = slides.findIndex(slide => slide === nextSlide)
		// 	if(nextIndex >= slides.length ) {
		// 		const currentDot = dotsNav.querySelector('.current-slide')
		// 		const nextDot = currentDot.nextElementSibling
		// 		moveToSlide(track, currentSlide, null)
		// 		updateDot(currentDot, nextDot)
		// 		hideShowArrows(slides, prevButton, nextButton, nextIndex)
		// 	} else {
		// 		const currentDot = dotsNav.querySelector('.current-slide')
		// 		const nextDot = currentDot.nextElementSibling
		// 		moveToSlide(track, currentSlide, nextSlide)
		// 		updateDot(currentDot, nextDot)
		// 		hideShowArrows(slides, prevButton, nextButton, nextIndex)
		// 	}
		// }, 3000);
	}
  render() {
    return (
      <div>
        <div className="carousel">
					<button className="carousel__button carousel__button--left is-hidden"> <ArrowBack fontSize="large" /> </button>
					<div className="carousel__track-container">
						<ul className="carousel__track">
							<li className="carousel__slide current-slide">
								<img className="carousel__image" src="http://host.trivialbeing.org/up/tdk-jun5-bannerbatmanexclusivo2.jpg" alt="" />
								<div className="shadow" />
							</li>
							<li className="carousel__slide">
								<img className="carousel__image" src="https://thegrandtour.uk.com/wp-content/uploads/2019/09/share.jpg" alt="" />
								<div className="shadow" />
							</li>
							<li className="carousel__slide">
								<img className="carousel__image" src="http://appletreemovies.com/wp-content/uploads/sites/4/2018/06/The-Avengers-2012.jpg" alt="" />
								<div className="shadow" />
							</li>
							<li className="carousel__slide">
								<img className="carousel__image" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2017/03/Justice-League-Movie-Banner.jpg" alt="" />
								<div className="shadow" />
							</li>
						</ul>
					</div>
					<button className="carousel__button carousel__button--right"> <ArrowForward fontSize="large" /> </button>
					<div className="carousel_nav">
						<button className="carousel__indicator current-slide"></button>
						<button className="carousel__indicator"></button>
						<button className="carousel__indicator"></button>
						<button className="carousel__indicator"></button>
					</div>
        </div>
      </div>
		);
  }
}

export default Banner;