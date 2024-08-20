interact('.resize-drag')
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        let size = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
        document.getElementById('size').innerHTML = size
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 110 }
      })
    ],

    inertia: true
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ]
  })


const viewSize = document.getElementById("size");
const viewButton = document.getElementById("view-btn")

viewButton.addEventListener("click", () => {
    viewSize.style.color = "#f0a432"
})


const guideButton = document.getElementById("guide-btn");
const guide = document.getElementById("guide-cont");
const gotIt = document.getElementById("got-it")

guideButton.addEventListener("click", () => {
    guide.style.visibility = "visible"
})

gotIt.addEventListener("click", () => {
    guide.style.visibility = "hidden"
})