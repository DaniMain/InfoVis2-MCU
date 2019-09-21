var width = 1000, height = 1000

var numNodes = 100
var nodes = d3.range(numNodes).map(function(d) {
  return {radius: Math.random() * 25}
})

var simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(-2))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('collision', d3.forceCollide().radius(function(d) {
    return d.radius
  }))
  .on('tick', ticked);

function ticked() {
    var u = d3.select('svg')
      .selectAll('ellipse')
      .data(nodes)
  
    u.enter()
      .append('ellipse')
      .attr('rx', function(d) { return d.radius })
      .attr('ry', function(d){ return d.radius-5 })
      .merge(u)
      .attr('cx', function(d) {
        return d.x
      })
      .attr('cy', function(d) {
        return d.y
      })
  
    u.exit().remove()
  }