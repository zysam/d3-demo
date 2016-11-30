var line = d3.svg.line()
svg.select('#r0')
  .attr({
    d: function () {rerturn line()},
    transform: 'translate(0,0)'
  })
  .style({
    'stoke': 'orange',
    'stroke-width': 1,
    'fill': 'white'
  })
