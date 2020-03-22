import React, { Component } from "react";
import { Text } from "react-native";
import { Svg } from "expo";
import _ from "lodash";
import Stock from "paths-js/stock";

import { Options, styleSvg } from "./util";
import Axis from "./Axis";
import GridAxis from "./GridAxis";

export default class Scatterplot extends Component {
  static defaultProps = {
    xKey: "",
    yKey: "",
    options: {
      width: 600,
      height: 600,
      margin: { top: 40, left: 60, bottom: 30, right: 30 },
      fill: "#2980B9",
      stroke: "#3E90F0",
      animate: {
        type: "delayed",
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: "Arial",
        fontSize: 14,
        bold: true,
        color: "#34495E"
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
          color: "#34495E"
        }
      },
      axisY: {
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

  getMaxAndMin(chart, key, scale) {
    let maxValue;
    let minValue;
    _.each(chart.curves, function(serie) {
      let values = _.map(serie.item, function(item) {
        return item[key];
      });

      let max = _.max(values);
      if (maxValue === undefined || max > maxValue) maxValue = max;
      let min = _.min(values);
      if (minValue === undefined || min < minValue) minValue = min;
    });
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
      return <Text>{noDataMsg}</Text>;

    const options = new Options(this.props);
    const accessor = function(key) {
      return function(x) {
        return x[key];
      };
    };

    const chart = Stock({
      data: this.props.data,
      xaccessor: accessor(this.props.xKey),
      yaccessor: accessor(this.props.yKey),
      width: options.chartWidth,
      height: options.chartHeight,
      closed: false
    });

    const chartArea = {
      x: this.getMaxAndMin(chart, this.props.xKey, chart.xscale),
      y: this.getMaxAndMin(chart, this.props.yKey, chart.yscale),
      margin: options.margin
    };

    const colors = styleSvg({}, options);
    const points = _.map(
      chart.curves,
      function(c) {
        return _.map(
          c.line.path.points(),
          function(p, j) {
            let render = (
              <Svg.G key={"k" + j} x={p[0]} y={p[1]}>
                <Svg.Circle
                  {...colors}
                  cx={0}
                  cy={0}
                  r={options.r || 5}
                  fillOpacity={1}
                />
              </Svg.G>
            );

            return render;
          },
          this
        );
      },
      this
    );

    return (
      <Svg width={options.width} height={options.height}>
        <Svg.G x={options.margin.left} y={options.margin.top}>
          <GridAxis
            scale={chart.xscale}
            options={options.axisX}
            chartArea={chartArea}
          />
          <GridAxis
            scale={chart.yscale}
            options={options.axisY}
            chartArea={chartArea}
          />
          {points}
          <Axis
            scale={chart.xscale}
            options={options.axisX}
            chartArea={chartArea}
          />
          <Axis
            scale={chart.yscale}
            options={options.axisY}
            chartArea={chartArea}
          />
        </Svg.G>
      </Svg>
    );
  }
}
