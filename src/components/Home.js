import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import "./Create.scss";

function Home() {
  const [data] = useState([
    300, 300, 300, 250, 250, 270, 290, 300, 200, 180, 90, 180, 170, 150, 140, 0,
  ]);
  const svgRef = useRef();

  useEffect(() => {
    const w = 1000;
    const h = 500;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)

      //styling
      .style("background", " #ddffdd")
      .style("overflow", "visible");

    //scaling
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generateScaleLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);
    svg.append("g").call(yAxis);

    //setting up the data for the svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaleLine(d))
      .attr("fill", "none")
      .attr("stroke", "green");
  }, [data]);

  return (
    <div className="home--container">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Home;
