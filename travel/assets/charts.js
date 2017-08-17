AmCharts.makeChart("wants-to-visit-countries", {
    "type": "map",
    "theme": "light",
    "colorSteps": 10,
    fontFamily: "Open Sans Condensed",
    language: "uk",
    "numberFormatter": {precision: 0, decimalSeparator: '.', thousandsSeparator: ','},

    "dataProvider": {
        "map": "worldHigh",
        "zoomLevel": 1.2,
        "zoomLongitude": 10,
        "zoomLatitude": 52,
        "areas": wantsToVisitCountries
    },

    "areasSettings": {
        color: "#fee6ce",
        colorSolid: "#e6550d",
//            "autoZoom": true,
//         "rollOverOutlineColor": "#e6550d",
//            "rollOverColor": "#0e7ae6",
           "rollOverOutlineColor": "#e6550d",
           "rollOverColor": "#e6ac00",
        "alpha": 1,
        "unlistedAreasAlpha": 0.1,
        "balloonText": "[[title]] \n ([[value]]% опитаних)"
    },
    "valueLegend": {
        "right": 10,
        "minValue": "менше",
        "maxValue": "більше"
    },

//        "legend": {
//            "width": "100%",
//
//            "equalWidths": false,
//            "backgroundAlpha": 0.1,
//            "backgroundColor": "#ffffff",
//            "borderColor": "#ffffff",
////            "borderAlpha": 1,
//            "top": 0,
//            "left": 0,
//            "horizontalGap": 10,
//
//        }


});
AmCharts.makeChart("visited-countries", {
    "type": "map",
    "theme": "dark",
    "colorSteps": 10,
    fontFamily: "Open Sans Condensed",
    language: "uk",
    "numberFormatter": {precision: 0, decimalSeparator: '.', thousandsSeparator: ','},

    "dataProvider": {
        "map": "worldHigh",
        "zoomLevel": 1.2,
        "zoomLongitude": 10,
        "zoomLatitude": 52,
        "areas": visitedCountries
    },

    "areasSettings": {
        color: "#cfe6fc",
        colorSolid: "#0e7ae6",
        "backgroundColor": "#000000",
        "borderColor": "#ffffff",
        "autoZoom": true,
           "rollOverOutlineColor": "#0e7ae6",
           "rollOverColor": "#004de6",
        "alpha": 1,
        "unlistedAreasAlpha": 0.3,
//            "balloonFunction": function(item, graph) {
//                let value = item.value;
//                if(value < 0)
//                {
//                    return  `${item.dataContext.title}\n < 1%`
//                }
//                else
//                {
//                    return  `${item.dataContext.title}\n < ${item.dataContext.value.toFixed(0)}%`
//                }
//            }
        "balloonText": "[[title]] \n ([[value]]% опитаних)"
    },
    "valueLegend": {
        "right": 10,
        "minValue": "менше",
        "maxValue": "більше"
    },

    "legend": {
        "width": "100%",

        "equalWidths": false,
        "backgroundAlpha": 0.1,
        "backgroundColor": "#000000",
        "borderColor": "#ffffff",
//            "borderAlpha": 1,
        "top": 0,
        "left": 0,
        "horizontalGap": 10,

    }


});
AmCharts.makeChart("visited-countries-chart", {
    "type": "serial",
    "theme": "none",
    "marginRight": 70,
    fontFamily: "Open Sans Condensed",
    "dataProvider": visitedCountries.slice(0, 10).map((country) => {
        return {
            id: country.id,
            title: AmCharts.mapTranslations.uk[
                AmCharts.maps.worldHigh.svg.g.path.find((it) => country.id === it.id).title
                ],
            value: country.value
        }
    }),
    "valueAxes": [{
        "axisAlpha": 1,
        "position": "left",
        "title": "% опитаних"

    }],
    "numberFormatter": {precision: 0, decimalSeparator: '.', thousandsSeparator: ','},
    "startDuration": 1,
    "graphs": [{
        fillColors: "#014084",

        "balloonText": "<b>[[value)]]% опитаних</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.4,
        "type": "column",
        "valueField": "value"
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "title",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 45
    },


});
AmCharts.makeChart("average-countries", {
    "type": "serial",
    "theme": "none",

    "marginRight": 70,
    fontFamily: "Open Sans Condensed",
    "dataProvider": ageRates,
    "valueAxes": [{
        "axisAlpha": 0.2,
        "position": "left",

        color: "#ffffff",
        titleColor: "#ffffff",
        gridColor: "#ffffff",
        gridAlpha: 0.2,
        axisColor: "#ffffff",
    }],
    "startDuration": 1,
    "graphs": [{

        "balloonText": "<b>[[title]] </b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "value",
        color: "#ffffff",
        "fillColors": "#fcd202",
        "lineColor": "#fcd202"
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "id",
    "categoryAxis": {
        "gridPosition": "start",
        axisColor: "#ffffff",
        color: "#ffffff",
        fontSize: 20,
        gridColor: "#ffffff",
        gridAlpha: 0.2,
        title: "Вік"
    },


});
AmCharts.makeChart("visited-countries-chart", {
    "type": "serial",
    "theme": "light",
    "marginRight": 70,
    fontFamily: "Open Sans Condensed",
    "rotate": true,
    "dataProvider": visitedCountries.slice(0, 10).map((country) => {
        return {
            id: country.id,
            title: AmCharts.mapTranslations.uk[
                AmCharts.maps.worldHigh.svg.g.path.find((it) => country.id === it.id).title
                ],
            value: country.value.toFixed(0)
        }
    }),
    color: "#0e7ae6",
    "valueAxes": [{
        "axisAlpha": 0.2,
        "position": "left",

        color: "#ffffff",
        titleColor: "#ffffff",
        gridColor: "#ffffff",
        gridAlpha: 0.2,
        axisColor: "#ffffff",
    }],
    "startDuration": 1,
    "graphs": [{

        "balloonText": "<b>[[value]]% </b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "value",

        color: "#ffffff"
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "title",
    "categoryAxis": {
        "gridPosition": "start",
        axisColor: "#ffffff",
        color: "#ffffff",
        fontSize: 20,
        gridColor: "#ffffff",
        gridAlpha: 0.2
    },


});
AmCharts.makeChart("wants-to-visit-countries-chart", {
    "type": "serial",
    "theme": "none",
    "rotate": true,
    "marginRight": 70,
    "numberFormatter": {precision: 0, decimalSeparator: '.', thousandsSeparator: ','},
    fontFamily: "Open Sans Condensed",
    "dataProvider": wantsToVisitCountries.slice(0, 10).map((country) => {
        return {
            id: country.id,
            title: AmCharts.mapTranslations.uk[
                AmCharts.maps.worldHigh.svg.g.path.find((it) => country.id === it.id).title
                ],
            value: country.value
        }
    }),
    "valueAxes": [{
        "axisAlpha": 0.2,
        "position": "left",

        color: "#ffffff",
        titleColor: "#ffffff",
        gridColor: "#ffffff",
        gridAlpha: 0.2,
        axisColor: "#ffffff",
    }],
    "startDuration": 1,
    "graphs": [{

        "balloonText": "<b>[[value]]% опитаних </b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.5,
        "type": "column",
        "valueField": "value",
        color: "#ffffff"
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "title",
    "categoryAxis": {
        "gridPosition": "start",
        axisColor: "#ffffff",
        color: "#ffffff",
        fontSize: 20,
        gridColor: "#ffffff",
        gridAlpha: 0.2
    },


});
// $("window").on("resize",function(){
//     $(".svgWrapper").each(function() {
//
//         var svgWidth = $(this).find("svg").attr("width");
//         var svgHeight = $(this).find("svg").attr("height");
//         var thisHeight = $(this).height();
//         var scale = svgHeight / thisHeight;
//         var thisWidth = parseInt((svgWidth / scale) + 3);
//
//         $(this).width(thisWidth);
//     });
// });
// $("window").resize();