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

var links = []

links[0] = [
  {source: 0, target: 1, probability: "0",type:"none"},
  {source: 0, target: 2, probability: "0",type:"none"},
  {source: 0, target: 3, probability: "0",type:"low"},
  {source: 0, target: 4, probability: "0.45458",type:"high"},
  {source: 0, target: 5, probability: "0",type:"none"},
  {source: 0, target: 6, probability: "0.54542",type:"high"},
  {source: 1, target: 1, probability: "0.082469",type:"none"},
  {source: 1, target: 2, probability: "0",type:"none"},
  {source: 1, target: 3, probability: "0",type:"none"},
  {source: 1, target: 4, probability: "0.69604",type:"high"},
  {source: 1, target: 5, probability: "0",type:"none"},
  {source: 1, target: 6, probability: "0.18426",type:"low"},
  {source: 1, target: 7, probability: "0.037229",type:"none"},
  {source: 2, target: 1, probability: "0",type:"none"},
  {source: 2, target: 2, probability: "0.063137",type:"none"},
  {source: 2, target: 3, probability: "0.14469",type:"none"},
  {source: 2, target: 4, probability: "0.54094",type:"high"},
  {source: 2, target: 5, probability: "0",type:"none"},
  {source: 2, target: 6, probability: "0.21177",type:"medium"},
  {source: 2, target: 7, probability: "0.039461",type:"none"},
  {source: 3, target: 1, probability: "0.010023",type:"none"},
  {source: 3, target: 2, probability: "0.022938",type:"none"},
  {source: 3, target: 3, probability: "0.11392",type:"low"},
  {source: 3, target: 4, probability: "0.66731",type:"high"},
  {source: 3, target: 5, probability: "0",type:"none"},
  {source: 3, target: 6, probability: "0.15825",type:"low"},
  {source: 3, target: 7, probability: "0.027564",type:"none"},
  {source: 4, target: 1, probability: "0.0059269",type:"none"},
  {source: 4, target: 2, probability: "0.0083226",type:"none"},
  {source: 4, target: 3, probability: "0.013577",type:"none"},
  {source: 4, target: 4, probability: "0.79403",type:"high"},
  {source: 4, target: 5, probability: "0.0029969",type:"none"},
  {source: 4, target: 6, probability: "0.12126",type:"low"},
  {source: 4, target: 7, probability: "0.048886",type:"none"},
  {source: 5, target: 1, probability: "0",type:"none"},
  {source: 5, target: 2, probability: "0",type:"none"},
  {source: 5, target: 3, probability: "0",type:"none"},
  {source: 5, target: 4, probability: "0.77183",type:"high"},
  {source: 5, target: 5, probability: "0.08262",type:"none"},
  {source: 5, target: 6, probability: "0.11045",type:"low"},
  {source: 5, target: 7, probability: "0.035103",type:"none"},
  {source: 6, target: 1, probability: "0.0083914",type:"none"},
  {source: 6, target: 2, probability: "0.012915",type:"none"},
  {source: 6, target: 3, probability: "0.016209",type:"none"},
  {source: 6, target: 4, probability: "0.49088",type:"high"},
  {source: 6, target: 5, probability: "0.0045399",type:"none"},
  {source: 6, target: 6, probability: "0.31038",type:"high"},
  {source: 6, target: 7, probability: "0.15668",type:"low"},
];

links[1] = [
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

links[2] = [
  {source: 0, target: 1, probability: "0.023042",type:"none"},
  {source: 0, target: 2, probability: "0.14815",type:"low"},
  {source: 0, target: 3, probability: "0.21404",type:"medium"},
  {source: 0, target: 4, probability: "0.29215",type:"high"},
  {source: 0, target: 5, probability: "0",type:"none"},
  {source: 0, target: 6, probability: "0.32262",type:"high"},
  {source: 1, target: 1, probability: "0.18928",type:"high"},
  {source: 1, target: 2, probability: "0",type:"none"},
  {source: 1, target: 3, probability: "0",type:"none"},
  {source: 1, target: 4, probability: "0.19305",type:"low"},
  {source: 1, target: 5, probability: "0",type:"none"},
  {source: 1, target: 6, probability: "0.31114",type:"high"},
  {source: 1, target: 7, probability: "0.30653",type:"high"},
  {source: 2, target: 1, probability: "0",type:"none"},
  {source: 2, target: 2, probability: "0.23185",type:"medium"},
  {source: 2, target: 3, probability: "0.17956",type:"low"},
  {source: 2, target: 4, probability: "0.10011",type:"low"},
  {source: 2, target: 5, probability: "0",type:"none"},
  {source: 2, target: 6, probability: "0.14725",type:"low"},
  {source: 2, target: 7, probability: "0.34123",type:"high"},
  {source: 3, target: 1, probability: "0",type:"none"},
  {source: 3, target: 2, probability: "0.11425",type:"low"},
  {source: 3, target: 3, probability: "0.34169",type:"high"},
  {source: 3, target: 4, probability: "0.11479",type:"low"},
  {source: 3, target: 5, probability: "0",type:"none"},
  {source: 3, target: 6, probability: "0.13195",type:"low"},
  {source: 3, target: 7, probability: "0.29733",type:"high"},
  {source: 4, target: 1, probability: "0.011853",type:"none"},
  {source: 4, target: 2, probability: "0.030955",type:"none"},
  {source: 4, target: 3, probability: "0.054269",type:"none"},
  {source: 4, target: 4, probability: "0.61957",type:"high"},
  {source: 4, target: 5, probability: "0.013816",type:"none"},
  {source: 4, target: 6, probability: "0",type:"low"},
  {source: 4, target: 7, probability: "0.26954",type:"medium"},
  {source: 5, target: 1, probability: "0",type:"none"},
  {source: 5, target: 2, probability: "0",type:"none"},
  {source: 5, target: 3, probability: "0",type:"none"},
  {source: 5, target: 4, probability: "0.14611",type:"low"},
  {source: 5, target: 5, probability: "0.17667",type:"low"},
  {source: 5, target: 6, probability: "0.17556",type:"low"},
  {source: 5, target: 7, probability: "0.50167",type:"high"},
  {source: 6, target: 1, probability: "0.032762",type:"none"},
  {source: 6, target: 2, probability: "0.065986",type:"none"},
  {source: 6, target: 3, probability: "0.0873",type:"none"},
  {source: 6, target: 4, probability: "0.094392",type:"none"},
  {source: 6, target: 5, probability: "0.03677",type:"none"},
  {source: 6, target: 6, probability: "0.45489",type:"high"},
  {source: 6, target: 7, probability: "0.22791",type:"medium"},
];

links[3] = [
  {source: 0, target: 1, probability: "0.073254",type:"none"},
  {source: 0, target: 2, probability: "0.091762",type:"none"},
  {source: 0, target: 3, probability: "0.092888",type:"none"},
  {source: 0, target: 4, probability: "0.40248",type:"high"},
  {source: 0, target: 5, probability: "0.074438",type:"none"},
  {source: 0, target: 6, probability: "0.26518",type:"medium"},
  {source: 1, target: 1, probability: "0.34197",type:"high"},
  {source: 1, target: 2, probability: "0.065327",type:"none"},
  {source: 1, target: 3, probability: "0081496",type:"none"},
  {source: 1, target: 4, probability: "0.23111",type:"medium"},
  {source: 1, target: 5, probability: "0.021815",type:"none"},
  {source: 1, target: 6, probability: "0.14563",type:"low"},
  {source: 1, target: 7, probability: "0.11263",type:"low"},
  {source: 2, target: 1, probability: "0.047109",type:"none"},
  {source: 2, target: 2, probability: "0.17275",type:"low"},
  {source: 2, target: 3, probability: "0.17568",type:"low"},
  {source: 2, target: 4, probability: "0.316",type:"high"},
  {source: 2, target: 5, probability: "0.030459",type:"none"},
  {source: 2, target: 6, probability: "0.16038",type:"low"},
  {source: 2, target: 7, probability: "0.097627",type:"none"},
  {source: 3, target: 1, probability: "0.048414",type:"none"},
  {source: 3, target: 2, probability: "0.095686",type:"none"},
  {source: 3, target: 3, probability: "0.21633",type:"medium"},
  {source: 3, target: 4, probability: "0.37847",type:"high"},
  {source: 3, target: 5, probability: "0.025553",type:"none"},
  {source: 3, target: 6, probability: "0.16143",type:"low"},
  {source: 3, target: 7, probability: "0.074115",type:"none"},
  {source: 4, target: 1, probability: "0.018419",type:"none"},
  {source: 4, target: 2, probability: "0.037512",type:"none"},
  {source: 4, target: 3, probability: "0.043038",type:"none"},
  {source: 4, target: 4, probability: "0.49171",type:"high"},
  {source: 4, target: 5, probability: "0.032616",type:"none"},
  {source: 4, target: 6, probability: "0.2973",type:"high"},
  {source: 4, target: 7, probability: "0.079406",type:"low"},
  {source: 5, target: 1, probability: "0.021764",type:"none"},
  {source: 5, target: 2, probability: "0.048621",type:"none"},
  {source: 5, target: 3, probability: "0.032612",type:"none"},
  {source: 5, target: 4, probability: "0.37355",type:"high"},
  {source: 5, target: 5, probability: "0.1884",type:"low"},
  {source: 5, target: 6, probability: "0.1493",type:"low"},
  {source: 5, target: 7, probability: "0.18575",type:"low"},
  {source: 6, target: 1, probability: "0.02149",type:"none"},
  {source: 6, target: 2, probability: "0.039297",type:"none"},
  {source: 6, target: 3, probability: "0.037815",type:"none"},
  {source: 6, target: 4, probability: "0.44201",type:"high"},
  {source: 6, target: 5, probability: "0.017608",type:"none"},
  {source: 6, target: 6, probability: "0.34371",type:"high"},
  {source: 6, target: 7, probability: "0.098064",type:"low"},
];


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
  var clusterNum = "AL";
  var lc = true;
  var rc = true;
  var probability = false;
  var interarrival = false;
  var current_nodes = d3.values(nodes);
  var current_all_links = links[0];
  var current_links = []

  drawShit(current_all_links, current_nodes, probability);

  $('#stateChooser').change( function() {
    clusterNum = $('#stateChooser').val();
    current_all_links = links[clusterNum - 1];
  });

  // update the graph
  $('#updateChange').click(function() {
    lc = $('#showLC').is(":checked");
    rc = $('#showRC').is(":checked");
    probability = $('#showProbability').is(":checked");

    if (lc && rc) {
      current_links = current_all_links;
      current_nodes = d3.values(nodes);
    } else if (lc) { // no rc
      current_links = current_all_links.filter(function(d) {
          return d.target.id !== "End";
      });
      current_nodes = d3.values(nodes).filter(function(d) {
          return d.id !== "End";
      });
    } else if (rc) { // no lc
      current_links = current_all_links.filter(function(d) {
        // debugger;
          return d.source.id !== "Start";
      });
      current_nodes = d3.values(nodes).filter(function(d) {
          return d.id !== "Start";
      });
    } else { // no both
      current_links = current_all_links
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
