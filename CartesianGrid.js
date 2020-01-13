// http://bl.ocks.org/mosley812/43194ec6f540c05e48273d0cd8877d2c
// https://observablehq.com/@d3/d3-path
// https://medium.com/@ghenshaw.work/customizing-axes-in-d3-js-99d58863738b

// var margin = {
//     top: 30,
//     bottom: 30,
//     left: 30,
//     right: 30
// }

// var width = 500 - margin.left - margin.right;
// var height = 500 - margin.top - margin.bottom;

// // Create the svg container
// let svg = d3.select('body').append('svg')
//             .attr('width',width+margin.left+margin.right)
//             .attr('height',width+margin.top+margin.bottom)
//             // This will center the graph in the SVG
//             .append("g")
//             .attr("transform","translate("+margin.left+","+margin.top+")");

// // Set up x scale
// let xScale = d3.scaleLinear()
//     .domain([-10,10])
//     .range([0,width])

// // Set up y scale 
// let yScale = d3.scaleLinear()
//     .domain([-10,10])
//     .range([height,0])

// let xAxis = d3.axisBottom(xScale).ticks(20);

// let yAxis = d3.axisLeft(yScale).ticks(20);

// // Plot the xAxis
// svg.append('g')
//     .attr('class','axis')
//     .attr('transform', 'translate(0, '+(height/2)+")")
//     .call(xAxis)

// // Plot the yAxis
// svg.append('g')
//     .attr('class', 'axis')
//     .attr('transform', 'translate(' + (width / 2) + ", 0)")
//     .call(yAxis)

// // Draw line (M = Move current point to, L = Line to)
// let start = -10;
// let end = 10;

// // Draw the grid of lines
// while(start<=end){
//     svg.append('path')
//         .attr('d', 'M' + xScale(start) + ' 0 L' + xScale(start) +' ' +height)
//         .style('stroke', 'black')
//         .attr('stroke-width','1px')
//     svg.append('path')
//         .attr('d', 'M0 ' + yScale(start) + '  L' + width + ' ' + yScale(start))
//         .style('stroke', 'black')
//         .attr('stroke-width', '1px')
//     start++;
// }

class CartesianGrid{
    constructor(){
        this.margin = {
            top: 30,
            bottom: 30,
            left: 30,
            right: 30
        }
        this.width = 500 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;

        // Create the svg container
        this.svg = d3.select('body').append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.width + this.margin.top + this.margin.bottom)
            // This will center the graph in the SVG
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

        this.xScale;
        this.yScale;

        this.xAxis;
        this.yAxis;
    }

    setXAxisScale=()=>{
        // Set up x scale
        this.xScale = d3.scaleLinear()
            .domain([-10, 10])
            .range([0, this.width])
    }
    setYAxisScale=()=>{
        // Set up y scale 
        this.yScale = d3.scaleLinear()
            .domain([-10, 10])
            .range([this.height, 0])
    }
    setXAxisLocation=()=>{
        this.xAxis = d3.axisBottom(this.xScale).ticks(20);
    }
    setYAxisLocation=()=>{
        this.yAxis = d3.axisLeft(this.yScale).ticks(20);
    }
    drawXAxis=()=>{
        // Plot the xAxis
        this.svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0, ' + (this.height / 2) + ")")
            .call(this.xAxis)
    }

    drawYAxis=()=>{
        // Plot the yAxis
        this.svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(' + (this.width / 2) + ", 0)")
            .call(this.yAxis)
    }
    setGridLines=()=>{
        // Draw line (M = Move current point to, L = Line to)
        let start = -10;
        let end = 10;

        // Draw the grid of lines
        while (start <= end) {
            this.svg.append('path')
                .attr('d', 'M' + this.xScale(start) + ' 0 L' + this.xScale(start) + ' ' + this.height)
                .style('stroke', 'black')
                .attr('stroke-width', '1px')
            this.svg.append('path')
                .attr('d', 'M0 ' + this.yScale(start) + '  L' + this.width + ' ' + this.yScale(start))
                .style('stroke', 'black')
                .attr('stroke-width', '1px')
            start++;
        }
    }
    createGrid=()=>{
        this.setXAxisScale();
        this.setYAxisScale();
        this.setXAxisLocation();
        this.setYAxisLocation();
        this.drawXAxis();
        this.drawYAxis();
        this.setGridLines();
    }
}

// let grid = new CartesianGrid();
// grid.createGrid();