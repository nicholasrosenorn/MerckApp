import React, { Component } from "react";
import { Text as ReactText } from "react-native";
import { Svg } from "expo";
import _ from "lodash";

import { Colors, Options, fontAdapt, cyclic, color, identity } from "./util";
import Axis from "./Axis";
import GridAxis from "./GridAxis";

const Bar = require("paths-js/bar");

export default class BarChart extends Component {
  static defaultProps = {
    accessorKey: "",
    options: {
      width: 600,
      height: 600,
      margin: { top: 20, left: 20, bottom: 50, right: 20 },
      color: "#2980B9",
      gutter: 20,
      animate: {
        type: "oneByOne",
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: "bottom",
        label: {
          fontFamily: "Arial",
          fontSize: 14,
          bold: true,
          color: "#34495E",
          rotate: 45
        }
      },
      axisY: {
        min: false,
        max: false,
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: "left",
        label: {
          fontFamily: "Arial",
          fontSize: 14,
          bold: true,
          color: "#34495E"
        }
      }
    }
  };

  color(i) {
    let color = this.props.options.color;
    if (!_.isString(this.props.options.color)) color = color.color;
    const pallete = this.props.pallete || Colors.mix(color || "#9ac7f7");
    return Colors.string(cyclic(pallete, i));
  }

  getMaxAndMin(values, scale) {
    const axisY = this.props.options.axisY;
    let maxValue = axisY.max || 0;
    let minValue = axisY.min || 0;

    let max = _.max(values);
    if (max > maxValue) maxValue = max;
    let min = _.min(values);
    if (min < minValue) minValue = min;

    return {
      minValue: minValue,
      maxValue: maxValue,
      min: scale(minValue),
      max: scale(maxValue)
    };
  }

  render() {
    const noDataMsg = this.props.noDataMessage || "No data available";
    if (this.props.data === undefined)
      return <ReactText>{noDataMsg}</ReactText>;

    let options = new Options(this.props);
    let accessor = this.props.accessor || identity(this.props.accessorKey);

    let chart = Bar({
      data: this.props.data,
      gutter: this.props.options.gutter || 10,
      width: options.chartWidth,
      height: options.chartHeight,
      accessor: accessor,
      min: this.props.options.axisY.min || undefined,
      max: this.props.options.axisY.max || undefined
    });

    let values = chart.curves.map(curve => accessor(curve.item));
    let chartArea = {
      x: { minValue: 0, maxValue: 200, min: 0, max: options.chartWidth },
      y: this.getMaxAndMin(values, chart.scale),
      margin: options.margin
    };

    let textStyle = fontAdapt(options.axisX.label);
    let labelOffset = this.props.options.axisX.label.offset || 20;

    let lines = chart.curves.map(function(c, i) {
      let numDataGroups = this.props.data.length || 0;
      let colorVariationVal = numDataGroups > 1 ? numDataGroups : 3;
      let color = this.color(i % colorVariationVal);
      let stroke = Colors.darkenColor(color);
      return (
        <Svg.G key={"lines" + i}>
          <Svg.Path d={c.line.path.print()} stroke={stroke} fill={color} />
          {options.axisX.showLabels ? (
            <Svg.Text
              fontFamily={textStyle.fontFamily}
              fontSize={textStyle.fontSize}
              fontWeight={textStyle.fontWeight}
              fontStyle={textStyle.fontStyle}
              fill={textStyle.fill}
              x={c.line.centroid[0]}
              y={labelOffset + chartArea.y.min}
              originX={c.line.centroid[0]}
              originY={labelOffset + chartArea.y.min}
              rotate={textStyle.rotate}
              textAnchor="middle"
            >
              {c.item.name}
            </Svg.Text>
          ) : null}
        </Svg.G>
      );
    }, this);

    return (
      <Svg width={options.width} height={options.height}>
        <Svg.G x={options.margin.left} y={options.margin.top}>
          <GridAxis
            scale={chart.scale}
            options={options.axisY}
            chartArea={chartArea}
          />
          {lines}
          <Axis
            scale={chart.scale}
            options={options.axisY}
            chartArea={chartArea}
          />
        </Svg.G>
      </Svg>
    );
  }
}