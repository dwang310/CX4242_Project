// var links = [
//       {source: "Start", target: "Start", type: 1},
//       {source: "Start", target: "RX", type: 0.45},
//       {source: "Start", target: "PO", type: 0.54},
//       {source: "Start", target: "End", type:0},
//
//        {source: "CL", target: "CL", type: 0.10251},
//        {source: "CL", target: "RX", type: 0.096},
//        {source: "CL", target: "PO", type: 0.145},
//        {source: "CL", target: "End", type: 1.47},
//        {source: "ER", target: "ER", type: 0.061},
//        {source: "ER", target: "HO", type: 0.0030},
//        {source: "ER", target: "RX", type: 0.071},
//        {source: "ER", target: "PO", type: 0.055},
//        {source: "ER", target: "End", type: 0.0917},
//
//        {source: "HO", target: "CL", type: 0.034},
//        {source: "HO", target: "ER", type: 0.0945},
//        {source: "HO", target: "HO", type: 0.039},
//        {source: "HO", target: "RX", type: 0.0705},
//        {source: "HO", target: "PO", type: 0.0852},
//        {source: "HO", target: "End", type: 2.00},
//
//        {source: "RX", target: "CL", type: 0.0699},
//        {source: "RX", target: "ER", type: 0.0955},
//        {source: "RX", target: "HO", type: 0.0924},
//        {source: "RX", target: "RX", type: 0.112},
//        {source: "RX", target: "NP", type: 0.048},
//        {source: "RX", target: "PO", type: 0.046},
//        {source: "RX", target: "End", type: 1.50},
//
//        {source: "NP", target: "RX", type: 0.075},
//        {source: "NP", target: "NP", type: 0.069},
//        {source: "NP", target: "PO", type: 0.111},
//        {source: "NP", target: "End", type: 0.5936},
//
//        {source: "PO", target: "CL", type: 0.101},
//        {source: "PO", target: "ER", type: 0.177},
//        {source: "PO", target: "HO", type: 0.111},
//        {source: "PO", target: "RX", type: 0.082},
//        {source: "PO", target: "NP", type: 0.124},
//        {source: "PO", target: "PO", type: 0.816},
//        {source: "PO", target: "End", type: 1.897},
//
//        {source: "End", target: "End", type: 1}
// ];
//
//
// var nodes = {};

var nodes = [
  {id:"Start", size:12,"x": 100, "y":200},
  {id:"CL", size:12, "x": 200, "y":350},
  {id:"ER", size:12, "x": 400, "y":350},
  {id:"HO", size:12, "x": 400, "y":100},
  {id:"RX", size:12, "x": 300, "y":200},
  {id:"NP", size:12, "x": 300, "y":400},
  {id:"PO", size:12, "x":200, "y":100},
  {id:"End", size:12, "x": 500, "y":200},
]

var links = [
  {source: 0, target: 1, probability: "0.072664",type:"none"},
  {source: 0, target: 2, probability: "0.12703",type:"low"},
  {source: 0, target: 3, probability: "0.10279",type:"low"},
  {source: 0, target: 4, probability: "0.46873",type:"high"},
  {source: 0, target: 5, probability: "0",type:"none"},
  {source: 0, target: 6, probability: "0.22779",type:"medium"},
  {source: 1, target: 1, probability: "0.53666",type:"high"},
  {source: 1, target: 2, probability: "0",type:"none"},
  {source: 1, target: 3, probability: "0",type:"none"},
  {source: 1, target: 4, probability: "0.20836",type:"medium"},
  {source: 1, target: 5, probability: "0",type:"none"},
  {source: 1, target: 6, probability: "0.15139",type:"low"},
  {source: 1, target: 7, probability: "0.1036",type:"low"},
  {source: 2, target: 1, probability: "0",type:"none"},
  {source: 2, target: 2, probability: "0.15144",type:"low"},
  {source: 2, target: 3, probability: "0.24763",type:"medium"},
  {source: 2, target: 4, probability: "0.36326",type:"high"},
  {source: 2, target: 5, probability: "0",type:"none"},
  {source: 2, target: 6, probability: "0.18637",type:"low"},
  {source: 2, target: 7, probability: "0.051302",type:"none"},
  {source: 3, target: 1, probability: "0.010734",type:"none"},
  {source: 3, target: 2, probability: "0.064156",type:"none"},
  {source: 3, target: 3, probability: "0.20674",type:"medium"},
  {source: 3, target: 4, probability: "0.48644",type:"high"},
  {source: 3, target: 5, probability: "0",type:"none"},
  {source: 3, target: 6, probability: "0.1499",type:"low"},
  {source: 3, target: 7, probability: "0.082025",type:"none"},
  {source: 4, target: 1, probability: "0.013129",type:"none"},
  {source: 4, target: 2, probability: "0.026704",type:"none"},
  {source: 4, target: 3, probability: "0.047468",type:"none"},
  {source: 4, target: 4, probability: "0.6601",type:"high"},
  {source: 4, target: 5, probability: "0.017345",type:"none"},
  {source: 4, target: 6, probability: "0.18566",type:"low"},
  {source: 4, target: 7, probability: "0.049595",type:"none"},
  {source: 5, target: 1, probability: "0",type:"none"},
  {source: 5, target: 2, probability: "0",type:"none"},
  {source: 5, target: 3, probability: "0.022209",type:"none"},
  {source: 5, target: 4, probability: "0.50389",type:"high"},
  {source: 5, target: 5, probability: "0.14537",type:"low"},
  {source: 5, target: 6, probability: "0.11162",type:"low"},
  {source: 5, target: 7, probability: "0.2169",type:"medium"},
  {source: 6, target: 1, probability: "0.024188",type:"none"},
  {source: 6, target: 2, probability: "0.035787",type:"none"},
  {source: 6, target: 3, probability: "0.039761",type:"none"},
  {source: 6, target: 4, probability: "0.47149",type:"high"},
  {source: 6, target: 5, probability: "0.0111882",type:"none"},
  {source: 6, target: 6, probability: "0.28644",type:"medium"},
  {source: 6, target: 7, probability: "0.13046",type:"low"},
];


// Compute the distinct nodes from the links.
links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
});



// var width = 960,
//     height = 500;
// var height = document.getElementById('markovChains').clientHeight;
var width = $('#markovChains').width();
var height = 500;

function drawShit(temp_links, temp_nodes, haveLabel) {
  var color = d3.scale.category20();

  var radius = d3.scale.sqrt()
      .range([0, 6]);

  var force = d3.layout.force()
      .nodes(temp_nodes)
      .links(temp_links)
      .size([width, height])
      // .linkDistance(function(d) {
      //   return radius(d.source.size) + radius(d.target.size) + 20;
      // })
      .linkDistance(200)
      .charge(-200)
      .on("tick", tick)
      .start();

  //create svg canvas
  var svg = d3.select("#markovChains").append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background" ,"#FFF7DB");


  //Build an arrow
  svg.append("svg:defs").selectAll("marker")
      .data(["low","medium","high"])      // Different link/path types can be defined here
    .enter().append("svg:marker")    // This section adds in the arrows
      .attr("id", String)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 22)
      .attr("refY", -1.5)
      .attr("markerWidth", 10)
      .attr("markerHeight", 5)
      .attr("orient", "auto")
    .append("svg:path")
      .attr("d", "M0,-5L10,0L0,5");

  // add the links and the arrows
  var path = svg.append("svg:g").selectAll("path")
      .data(temp_links)
      .enter().append("svg:path")
      // .attr("class","link")
      // .attr("class", function(d) { return "link " + d.probability; })
      .attr("class", function(d) { return "link " + d.type; })
  	  .attr("id",function(d,i) { return "linkId_" + i; })
      // .style("stroke",function(d){
      //   if (d.type == "low") {
      //     return "#aea9a8";
      //   } else if (d.type == "medium") {
      //     return "#aea9a8";
      //   } else if (d.type == "high") {
      //     return "#0f0502"
      //   }
      // })
      .style("stroke-width", function(d) {
        if (d.type == "high") {
          return "3px"
        }
      })
      .attr("marker-end", function(d) {
        return "url(#" + d.type +")";
      });

  // var path = svg.append("g").selectAll("path")
  //     .data(force.links())
  //     .enter()
  //     .append("path");
  //     // .attr("class", function(d) { return "link " + d.type; })
  //     // .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });
  //     // .style("stroke", function(d) {return typeObject[d.type];});
  var drag = force.drag()
      .on("dragstart", dragstart);

  var node = svg.selectAll(".node")
        .data(temp_nodes)
      .enter().append("g")
        .attr("class", "node")
        .on("dblclick", dblclick)
        .call(drag);

  // var node = svg.selectAll(".node")
  //     .data(force.nodes())
  //     .enter().append("g")
  //     .attr("class", "node")
  //     .on("dblclick",function(d) {
  //       if (d.fixed == true) {
  //         return d.fixed = false;
  //       } else {
  //         return d.fixed = true;
  //       }
  //     })
  //     .call(force.drag);

  node.append("circle")
        // .attr("r",5)
        .attr("r", function(d) { return radius(d.size); })
        .attr("cx", function(d) { return this.x;})
        .attr("cy", function(d) { return this.y;})
        .attr("fixed", function(d) {d.fixed = true})
        .style("fill", function(d) { return "#e3db18"; });

  var nodetext = svg.append("svg:g").selectAll("g")
      .data(force.nodes())
    .enter().append("svg:g");

  nodetext.append("svg:text")
      .attr("x", "-1em")
      .attr("y", ".31em")
  	 .style("font-size", "13px")
      .text(function(d) { return d.id; });

  if (haveLabel) {
    generateProb();
  }

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", sameArc);
    // link.attr("d", linkArc);
    node.attr("transform", transform)
      .attr("cx", function(d) { return d.x;})
      .attr("cy", function(d) { return d.y;});
    // linktext.attr("transform", function(d) {
    //       return "translate(" + (d.source.x + d.target.x) / 2 + ","
    //       + (d.source.y + d.target.y) / 2 + ")"; });

    nodetext.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });
  }

  function sameArc(d) {
    var x1 = d.source.x,
            y1 = d.source.y,
            x2 = d.target.x,
            y2 = d.target.y,
            dx = x2 - x1,
            dy = y2 - y1,
            dr = Math.sqrt(dx * dx + dy * dy),

            // Defaults for normal edge.
            drx = dr,
            dry = dr,
            xRotation = 0, // degrees
            largeArc = 0, // 1 or 0
            sweep = 1; // 1 or 0

            // Self edge.
            if ( x1 === x2 && y1 === y2 ) {
              // Fiddle with this angle to get loop oriented.
              xRotation = -45;

              // Needs to be 1.
              largeArc = 1;

              // Change sweep to change orientation of loop.
              //sweep = 0;

              // Make drx and dry different to get an ellipse
              // instead of a circle.
              drx = 30;
              dry = 22;

              // For whatever reason the arc collapses to a point if the beginning
              // and ending points of the arc are the same, so kludge it.
              x2 = x2 + 0.1;
              y2 = y2 + 0.1;
            }
      return "M" + x1 + "," + y1 + "A" + drx + "," + dry + " " + xRotation + "," + largeArc + "," + sweep + " " + x2 + "," + y2;
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

  function dblclick(d) {
    d3.select(this).classed("fixed", d.fixed = false);
  }

  function dragstart(d) {
    d3.select(this).classed("fixed", d.fixed = true);
  }

  function generateProb() {
    var linktext = svg.append("svg:g").selectAll("g.linklabelholder").data(temp_links);

    linktext.enter().append("g").attr("class", "linklabelholder")
       .append("text")
       .attr("class", "linklabel")
       .style("font-size", "16px")
       .attr("x", "100")
       .attr("y", "-20")
       .attr("text-anchor", "middle")
       .style("fill","#002")
       .append("textPath")
       .attr("xlink:href",function(d,i) { return "#linkId_" + i;})
       .text(function(d) {
         if ((d.type == "high")) {
           num = Number(d.probability);
           return num.toFixed(2);
         }
       })
       .attr("transform", function(d) {
            return "translate(" +
                ((d.source.y + d.target.y)/2) + "," +
                ((d.source.x + d.target.x)/2) + ")";
        });
  }
}


// jQuery stuff
$(document).ready(function() {
  var state = "AL";
  var lc = true;
  var rc = true;
  var probability = false;
  var interarrival = false;
  var current_nodes = d3.values(nodes);
  var current_links = links;
  drawShit(current_links, current_nodes, probability);

  // update the graph
  $('#updateChange').click(function() {
    state = $('#stateChooser').val();
    lc = $('#showLC').is(":checked");
    rc = $('#showRC').is(":checked");
    probability = $('#showProbability').is(":checked");

    if (lc && rc) {
      current_links = links;
      current_nodes = d3.values(nodes);
    } else if (lc) { // no rc
      current_links = links.filter(function(d) {
          return d.target.id !== "End";
      });
      current_nodes = d3.values(nodes).filter(function(d) {
          return d.id !== "End";
      });
    } else if (rc) { // no lc
      current_links = links.filter(function(d) {
        // debugger;
          return d.source.id !== "Start";
      });
      current_nodes = d3.values(nodes).filter(function(d) {
          return d.id !== "Start";
      });
    } else { // no both
      current_links = current_links
                      .filter(function(d) {
                          return d.source.id !== "Start";
                      }).filter(function(d) {
                          return d.target.id !== "End";
                      });
      current_nodes = d3.values(nodes)
                      .filter(function(d) {
                          return d.id !== "Start";
                      }).filter(function(d) {
                          return d.id !== "End";
                      });
    }

    if (probability) {
      document.getElementById('markovChains').innerHTML = '';
      drawShit(current_links, current_nodes, true);
    } else {
      document.getElementById('markovChains').innerHTML = '';
      drawShit(current_links, current_nodes, false);
    }

  });
});
