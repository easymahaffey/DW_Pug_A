// ```
//  Develop reader/function for svg state in HTML state/output on user device i.e. <rect>s
// ```


const colorTransforms =() => {
	 let width = 1000;
 	 let height = 50;
	var canvasWidth = width,
		canvasHeight = height,
		tileSize = 10,
		tileWidth = canvasWidth / tileSize,
		tileHeight = canvasHeight / tileSize
		
	// 	//// 1st mobile touch code block ////
	// 	const rectangle = document.querySelector('.color-transform'),
  //   rectangles = Array.from(document.querySelectorAll('rect'))
		
	// 	let isDragging = false,
  //   startPos = 0,
  //   currentTranslate = 0,
  //   prevTranslate = 0,
  //   animationID = 0,
  //   currentIndex = 0

	// 	rectangles.forEach((rect, index) => {
	// 		const rectImage = rect.querySelector('rect')
	// 		rectImage.addEventListener('dragstart', (e) => e.preventDefault())
	
	// 		// Touch events
	// 		rect.addEventListener('touchstart', touchStart(index))
	// 		rect.addEventListener('touchend', touchEnd)
	// 		rect.addEventListener('touchmove', touchMove)
	
	// 		// Mouse events
	// 		rect.addEventListener('mousedown', touchStart(index))
	// 		rect.addEventListener('mouseup', touchEnd)
	// 		rect.addEventListener('mouseleave', touchEnd)
	// 		rect.addEventListener('mousemove', touchMove)
	// })

	// 	// Disable context menu
	// window.oncontextmenu = function (event) {
	// event.preventDefault()
	// event.stopPropagation()
	// return false
	// }
	// 	//// end 1st mobile code block ////

	var svg = d3
		.select("body")
		.append("svg")
		.attr("width", canvasWidth)
		.attr("height", canvasHeight)

	svg
		.selectAll("rect")
		.data(d3.range(tileWidth * tileHeight))
		.enter()
		.append("rect")
		.attr("class", "rect")
		.attr("transform", translate)
		.attr("width", tileSize)
		.attr("height", tileSize)
		.style("fill", function (d) {
			return d3.hsl(((d % tileWidth) / tileWidth) * 360, 1, Math.floor(d / tileWidth) / tileHeight)
		})

		.on("mouseover", mouseover)

		// // mobile touch code
		// .on("touchMove", touchMove)

	function translate(d) {
		return "translate(" + (d % tileWidth) * tileSize + "," + Math.floor(d / tileWidth) * tileSize + ")"
	}

	// //// last mobile touch code block ////
	// function touchStart(index) {
  //   return function (event) {
  //       currentIndex = index
  //       // console.log(event.type.includes('mouse'))
  //       startPos = getPositionX(event)
  //       isDragging = true
  //   }
	// }

	// function touchEnd() {
  //   isDragging = false
  //   const movedBy = currentTranslate - prevTranslate

  //   if(movedBy < -10 && currentIndex < rectangles.length -1)
  //   currentIndex +=1

  //   if(movedBy > 10 && currentIndex > 0)
  //   currentIndex -=1

  //   setPositionByIndex()
	// }

	// function touchMove(event) {
  //   if (isDragging) {
  //       const currentPosition = getPositionX(event)
  //       currentTranslate = prevTranslate + currentPosition - startPos
	// 			mouseover()
  //   }
	// }

	// // function touchMove(d) {
  // //   if (isDragging) {
  // //       this.parentNode.appendChild(this)
	// // 	d3.select(this)
	// // 		.style("pointer-events", "none")
	// // 		.transition()
	// // 		.duration(750)
	// // 		.attr("transform", "translate(480,480)scale(23)rotate(180)")
	// // 		.transition()
	// // 		.delay(1500)
	// // 		.attr("transform", "translate(240,240)scale(0)")
	// // 		.style("fill-opacity", 0)
	// // 		.remove()
  // //   }
	// // }

	// //// end of last mobile code block ////

	function mouseover(d) {
		this.parentNode.appendChild(this)
		d3.select(this)
			.style("pointer-events", "none")
			.transition()
			.duration(750)
			.attr("transform", "translate(480,480)scale(23)rotate(180)")
			.transition()
			.delay(1500)
			.attr("transform", "translate(240,240)scale(0)")
			.style("fill-opacity", 0)
			.remove()
	}
}
colorTransforms()