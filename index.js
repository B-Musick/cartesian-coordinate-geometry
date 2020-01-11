
var margin = {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30
}

var width = 500 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

// Create the svg container
let svg = d3.select('body').append('svg')
            .attr('width',width+margin.left+margin.right)
            .attr('height',width+margin.top+margin.bottom)
            // This will center the graph in the SVG
            .append("g")
            .attr("transform","translate("+margin.left+","+margin.top+")");

// Set up x scale
let xScale = d3.scaleLinear()
    .domain([-10,10])
    .range([0,width])

// Set up y scale 
let yScale = d3.scaleLinear()
    .domain([-10,10])
    .range([height,0])

let xAxis = d3.axisBottom(xScale).ticks(20);

let yAxis = d3.axisLeft(yScale).ticks(20);

// Plot the xAxis
svg.append('g')
    .attr('class','axis')
    .attr('transform', 'translate(0, '+(height/2)+")")
    .call(xAxis)

// Plot the yAxis
svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + (width / 2) + ", 0)")
    .call(yAxis)

// Draw line (M = Move current point to, L = Line to)
let start = -10;
let end = 10;

// Draw the grid of lines
while(start<=end){
    svg.append('path')
        .attr('d', 'M' + xScale(start) + ' 0 L' + xScale(start) +' ' +height)
        .style('stroke', 'black')
        .attr('stroke-width','1px')
    svg.append('path')
        .attr('d', 'M0 ' + yScale(start) + '  L' + width + ' ' + yScale(start))
        .style('stroke', 'black')
        .attr('stroke-width', '1px')
    start++;
}
