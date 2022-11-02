// Get the button
let mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  let dist = 600
  if (
    document.body.scrollTop > dist ||
    document.documentElement.scrollTop > dist
  ) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

const sections = document.querySelectorAll('section')
const chapterLinks = document.querySelectorAll('.chapters div a')

window.addEventListener('scroll', () => {
  let current = ''
  for (i = sections.length - 1; i >= 0; --i) {
    const section = sections[i]
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - sectionHeight / 10) {
      current = section.getAttribute('id')
      break
    }
  }
  activateChapter(current)
})

function activateChapter(className) {
  chapterLinks.forEach((a) => {
    a.classList.remove('active')
    a.classList.remove('nonactive')
    if (a.classList.contains(className)) {
      a.classList.add('active')
    } else {
      a.classList.add('nonactive')
    }
  })
}

// var slideIndex = 1
// showDivs(slideIndex)

// function plusDivs(n) {
//   showDivs((slideIndex += n))
// }

// function showDivs(n) {
//   var i
//   var x = document.getElementsByClassName('mySlides')
//   if (n > x.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = x.length
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = 'none'
//   }
//   x[slideIndex - 1].style.display = 'block'
// }

// for the image modal
var modal = document.getElementById('myModal')

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll('.myImg')
var modalImg = document.getElementById('modal-img')
var captionText = document.getElementById('caption')
images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = 'block'
    modalImg.src = img.src
    captionText.innerHTML = img.alt
  }
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault()

      // Store hash
      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        },
      )
    } // End if
  })
})
