var links = [
      {source: "Start", target: "Start", type: 1},
      {source: "Start", target: "RX", type: 0.45},
      {source: "Start", target: "PO", type: 0.54},
      {source: "Start", target: "End", type:0},

       {source: "CL", target: "CL", type: 0.10251},
       {source: "CL", target: "RX", type: 0.096},
       {source: "CL", target: "PO", type: 0.145},
       {source: "CL", target: "End", type: 1.47},
       {source: "ER", target: "ER", type: 0.061},
       {source: "ER", target: "HO", type: 0.0030},
       {source: "ER", target: "RX", type: 0.071},
       {source: "ER", target: "PO", type: 0.055},
       {source: "ER", target: "End", type: 0.0917},

       {source: "HO", target: "CL", type: 0.034},
       {source: "HO", target: "ER", type: 0.0945},
       {source: "HO", target: "HO", type: 0.039},
       {source: "HO", target: "RX", type: 0.0705},
       {source: "HO", target: "PO", type: 0.0852},
       {source: "HO", target: "End", type: 2.00},

       {source: "RX", target: "CL", type: 0.0699},
       {source: "RX", target: "ER", type: 0.0955},
       {source: "RX", target: "HO", type: 0.0924},
       {source: "RX", target: "RX", type: 0.112},
       {source: "RX", target: "NP", type: 0.048},
       {source: "RX", target: "PO", type: 0.046},
       {source: "RX", target: "End", type: 1.50},

       {source: "NP", target: "RX", type: 0.075},
       {source: "NP", target: "NP", type: 0.069},
       {source: "NP", target: "PO", type: 0.111},
       {source: "NP", target: "End", type: 0.5936},

       {source: "PO", target: "CL", type: 0.101},
       {source: "PO", target: "ER", type: 0.177},
       {source: "PO", target: "HO", type: 0.111},
       {source: "PO", target: "RX", type: 0.082},
       {source: "PO", target: "NP", type: 0.124},
       {source: "PO", target: "PO", type: 0.816},
       {source: "PO", target: "End", type: 1.897},

       {source: "End", target: "End", type: 1}
];

var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
});



// var width = 960,
//     height = 500;
// var height = document.getElementById('markovChains').clientHeight;
var width = document.getElementById('markovChains').clientWidth;
var height = 500;

console.log(height + " " + width);

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(250)
    .charge(-250)
    .on("tick", tick)
    .start();

var drag = force.drag()


var svg = d3.select("#markovChains").append("svg")
    .attr("width", width)
    .attr("height", height);

// Per-type markers, as they don't inherit styles.
svg.append("defs").selectAll("marker")
    .data(force.nodes())
  .enter().append("marker")
    .attr("id", function(d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5");


var path = svg.append("svg:g").selectAll("path")
    .data(force.links())
  .enter().append("svg:path")
    .attr("class", function(d) { return "link " + d.type; })
      .attr("id",function(d,i) { return "linkId_" + i; });


var linktext = svg.append("svg:g").selectAll("g.linklabelholder").data(force.links());

linktext.enter().append("g").attr("class", "linklabelholder")
 .append("text")
 .attr("class", "linklabel")
   .style("font-size", "13px")
 .attr("x", "90")
   .attr("y", "-20")
 .attr("text-anchor", "start")
     .style("fill","#000")
   .append("textPath")
.attr("xlink:href",function(d,i) { return "#linkId_" + i;})
 .text(function(d) {
   return d.type;
   });

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
  .enter().append("circle")
    .attr("r", 16)
    .style("fill", colorfixed)
    .on("dblclick", dblclick)

    //.on('dblclick', circle.style('fill',function(d){return red}))
    .call(drag);
var text = svg.append("svg:g").selectAll("g")
    .data(force.nodes())
  .enter().append("svg:g");

text.append("svg:text")
    .attr("x", "-1em")
    .attr("y", ".31em")
       .style("font-size", "9px")
    .text(function(d) { return d.name; });
// Use elliptical arc path segments to doubly-encode directionality.
function tick() {
  path.attr("d", linkArc);
  circle.attr("transform", transform);
  text.attr('transform', transform);
  path.on("mouseover", function(d) {
        div.transition()
            .duration(200)
            .style("opacity", .9);
        div .html(d.source.name + "<br/>"  + d.target.name)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
            })
      .on("mouseout", function(d) {
          div.transition()
              .duration(500)
              .style("opacity", 0);
      });
}

function dblclick(d) {
    if (d.fixed==true){
        d3.select(this)
            .classed("fixed", d.fixed = false)
            .style('fill','yellow');
    }
    else {
        d3.select(this)
            .classed("fixed", d.fixed = true)
            .style('fill', 'red');}

}
function colorfixed(d) {
    if (d.fixed==true){
        return 'red';}
    else {
        return 'yellow';}
}
function linkArc(d) {
  var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
  return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
}

function transform(d) {
  return "translate(" + d.x + "," + d.y + ")";
}
