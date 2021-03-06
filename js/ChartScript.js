$(document).ready(function() {

				$("button#update").click(function() {
					
					var X = $("#xdropdown").val();
					var Y = $("#ydropdown").val();
					
					if(Y == "category"){
						$("#cssId").attr("href", "style/style2.css");
					}else{
						$("#cssId").attr("href", "style/style.css");
						}
					// var result = {};
					getFromCSV(X, Y);
					//console.log(JSON.stringify(result));

				});


/* This function takes input X & Y, which are the field names of the CSV file, and creates a JSON array of output values 
eg: resultJSON =  {"Central": "265045",
 					"East":"178576",
 					"South":"103926",
 					"West":"272264"
 					}
 */	
 				
				function getFromCSV(X, Y) {

					resultJSON = d3.csv('a3-CoffeeData.csv', function(data) {

						var resultJSON = {};
						var arrayOfY = getNumberOfCategories(data, Y);

						for (var j = 0; j < arrayOfY.length; j++) {
							var sumOfX = 0;

							for (var i = 0; i < data.length; i++) {
								var obj = data[i];
								if (obj[Y] == arrayOfY[j]) {
									sumOfX += parseInt(obj[X]);
								}

							}

							resultJSON[arrayOfY[j]] = sumOfX;
						}
						drawBarChart(resultJSON);     //call function to draw the bar chart

					});

				}
				
 //This function counts the number of categories on the Y (The horizontal) Axis
			 function getNumberOfCategories(data, Y) {
					var categoryArray = [];

					for (var i = 0; i < data.length; i++) {
						var obj = data[i];

						if (categoryArray.indexOf(obj[Y]) < 0) {
							categoryArray.push(obj[Y]);
						}
					}

					return categoryArray;
				}

			});

//This function actually draws the bar chart
			function drawBarChart(resultJSON) {
				$("svg").remove();
				var maxValue = 0;
				var h = 500;
				var w = 100;
				var padding = 30;
				
				
				
				var keys = [];
				for (var keyz in resultJSON) {
					var attrName = keyz;
					keys.push(attrName);
					var attrValue = resultJSON[keyz];
					
					if(attrValue > maxValue){
						maxValue = attrValue;
					};
					console.log(attrName, attrValue);
					
				}
				
				console.log("MaxValue is:", maxValue);
				
				var dataset = d3.entries(resultJSON);
				var noOfCategories = dataset.length;
				var width;
				if(noOfCategories>4){width = 1700;}else{width = 700;}
				
				var xScale = d3.scale.linear()
                     .domain([maxValue, 0])
                     .range([0, h]);
                     
                var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("right");
                  
                //console.log("dataset",dataset.length); 
                
                 
                var yScale = d3.scale.ordinal()
    							.domain(keys)
    							.rangeRoundBands([0, ((w+20)*noOfCategories)], 0); 

				var yAxis = d3.svg.axis().scale(yScale).orient("bottom");
				
				var svg = d3.select("#graphArea").append("svg").attr("width",width).attr("height", 700);
				
				svg.append("g")
						.attr("class", "axis")
						.call(xAxis)
						.attr("transform", "translate(" + padding + ","+ (padding) +")");
						
				
				svg.append("g")
						.attr("class", "axisBottom")
						.call(yAxis)
						.attr("transform", "translate(" + (padding+95) + ","+ (h+30) +")");		
				
				
				
						
				svg.selectAll("rect")
					.data(dataset)
					.enter()
					.append("rect")
					.attr("class", "bar")
					.attr("x", function(d,i){
						return padding+100+(i*(w+20));
					})
					.attr("y", function(d){
						return (h-((d.value/maxValue)*500))+padding;
					})
					.attr("width" , w)
					.attr("height", function(d,i){
						return ((d.value/maxValue)*500);
					} );
					
						
				 var yAxis = d3.svg.axis()
    				.scale(xScale)
    				.tickFormat(function(d) { return dataset[d].key; })
   					.orient("bottom");
				    
				 
					
					
					

			}