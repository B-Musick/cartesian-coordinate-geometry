class Distance extends CartesianGrid{
    constructor(firstPointX, firstPointY){
        super();
        this.firstPoint;
        this.secondPoint;
        this.pointRadius = 5;

    }

    setPoints=()=>{
        this.firstPoint = {
            x: 1,
            y: 1
        }
        this.secondPoint = {
            x: 4,
            y: 4
        }
    }
    drawPoints=()=>{
        // Draw first point
        this.svg.append('circle')
            .attr('cx',this.xScale(this.firstPoint.x))
            .attr('cy',this.yScale(this.firstPoint.y))
            .attr('r',this.pointRadius)
            .attr('fill','orange')
            .attr('id', 'first-point');
            ;

        // Draw second point
        this.svg.append('circle')
            .attr('cx', this.xScale(this.secondPoint.x))
            .attr('cy', this.yScale(this.secondPoint.y))
            .attr('r', this.pointRadius)
            .attr('fill', 'orange')
            .attr('id','second-point');
    }
    drawDistancePath=()=>{
        this.svg.append('path')
            .attr('d', 'M' + this.xScale(this.firstPoint.x) + ' ' + this.yScale(this.firstPoint.y) + ' L' + this.xScale(this.secondPoint.x) + ' ' + this.yScale(this.secondPoint.y))
            .style('stroke', 'orange')
            .attr('stroke-width', '2px')
            .attr('id','distance-line')
    }

    
    moveFirstPoint=()=>{
        let dragHandler = d3.drag()
            .on("drag", function () {
                d3.select(this)
                    .attr("cx", d3.event.x)
                    .attr("cy", d3.event.y);
                console.log(d3.select(this).attr('id') === 'first-point')
                if (d3.select(this).attr('id') === 'first-point') {
                    console.log(d3.event.x)
                    console.log(this.svg)
                    this.svg.select('#distance-line')
                        .attr('d', 'M' + d3.event.x + ' ' + d3.event.y + ' L' + this.xScale(this.secondPoint.x) + ' ' + this.yScale(this.secondPoint.y))

                }
                else if (d3.select(this).attr('id') === 'second-point') {

                }
            });
        // https://octoperf.com/blog/2018/04/18/d3-js-drag-and-drop-tutorial/
        // this.dragHandler(this.svg.select('circle'));
        dragHandler(this.svg.select('#first-point'));
        dragHandler(this.svg.select('#second-point'));
        
    }
    drawDistance=()=>{
        this.setPoints();
        this.drawPoints();
        
        this.drawDistancePath();
        this.moveFirstPoint();
        
        
    }
}

let grid = new Distance();
grid.createGrid()
grid.drawDistance();


