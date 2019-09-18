/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.5,
  
    // listen for drop related events: 
    ondropactivate: function (event) {
      // add active dropzone feedback
      d3.select(event.relatedTarget).attr("stroke", "black");
      hero = event.relatedTarget.id;
      hero = "h"+hero.split("h")[1];
      console.log("drop activate " + hero)
      div.transition().duration(100).style("opacity", 0);
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
      console.log("drag enter")
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      console.log("drag leave")
    },
    ondrop: function (event) {
      console.log("only drop " + event.target.id)
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      console.log("drop disattivato")
    }
  })
  
  interact('.drag-drop')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      onmove: dragMoveListener
    })

    function dragMoveListener (event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }

    // this is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener