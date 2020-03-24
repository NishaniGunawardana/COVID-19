var tree_structure = {
    chart: {
        container: "#COVIDspread",
        levelSeparation:    20,
        siblingSeparation:  15,
        subTeeSeparation:   15,
        rootOrientation: "WEST",

        node: {
            HTMLclass: "covid_sl",
            drawLineThrough: true
        },
        connectors: {
            style: {
                "strokeWidth": 2,
                "stroke": "#ccc"
            }
        }
    },
    
    nodeStructure: {
        text: {
            name: {val: "SRI LANKAN CASES"},
        },
        HTMLclass: "slcases",
        children: [
            {
				text: {
                    name: "Imported - foreign visitors"
                },
				HTMLclass: "slcases",
                children: [
                    {
						text: {
							name: "Case 1: 27 Jan 2020",
							desc: "Chinese national"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 28: 16 Mar 2020",
							desc: "Indian national"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"

					},
					{
						text: {
							name: "Case 46: 18 Mar 2020",
							desc: "Linked to #28"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 28: 16 Mar 2020",
							desc: "Italian national"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					}
				]				
			},
			{
				text: {
                    name: "Imported - local returnees"
                },
				HTMLclass: "slcases",
                children: [
                    {
						text: {
							name: "Case 4: 13 Mar 2020",
							desc: "Returned from Germany"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 5: 13 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"

					},
					{
						text: {
							name: "Case 6: 13 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 7: 14 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 8: 14 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 9: 14 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 12: 15 Mar 2020",
							desc: "Returned from Germany"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 13: 15 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 14: 15 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 15: 15 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 16: 15 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 17: 15 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 18: 15 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 19: 16 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 20: 16 Mar 2020",
							desc: "Returned from UK"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 23: 16 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 24: 16 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 25: 16 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 26: 16 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 27: 16 Mar 2020",
							desc: "Returned from Singapore, India"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 32: 17 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 33: 17 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 34: 17 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 35: 17 Mar 2020",
							desc: "Returned from UK"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 36: 17 Mar 2020",
							desc: "Returned from Qatar"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 37: 17 Mar 2020",
							desc: "Returned from UK"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 38: 17 Mar 2020",
							desc: "Returned from India"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 43: 17 Mar 2020",
							desc: "Returned from India"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 44: 17 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 53: 19 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 57: 19 Mar 2020",
							desc: "Returned from Italy, linked to #44, #45, #63"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 61: 20 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 62: 20 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 63: 20 Mar 2020",
							desc: "Returned from Italy, linked to #44, #45, #57"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 67: 20 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 68: 20 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 69: 20 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 70: 20 Mar 2020",
							desc: "Returned from Pakistan"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 72: 20 Mar 2020",
							desc: "Returned from UK"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 74: 20 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 75: 20 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 76: 20 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 77: 20 Mar 2020",
							desc: "Returned from Italy"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 78: 20 Mar 2020",
							desc: "Returned from UK"
						},
						image: "https://github.com/NishaniGunawardana/NishaniGunawardana.github.io/blob/master/airplane.png",
                        HTMLclass: "casetype"
					}
				]				
			},
			/*{
				text: {
                    name: "Known direct contacts with \ndiagnosed foreign visitors"
                },
				HTMLclass: "slcases"
			}*/
			{
				text: {
                    name: "Known direct contacts with \ndiagnosed local returnees"
                },
				HTMLclass: "slcases",
				children: [
                    {
						text: {
							name: "Case 21: 16 Mar 2020",
							desc: "Linked to #8"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 31: 17 Mar 2020",
							desc: "Linked to #12"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 45: 18 Mar 2020",
							desc: "Linked to #44, #63"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 52: 19 Mar 2020",
							desc: "Linked to #43"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					}
				]
			},
			{
				text: {
                    name: "Linked to imported case \n(imported case not known)"
                },
				HTMLclass: "slcases",
				children: [
                    {
						text: {
							name: "Case 2: 11 Mar 2020",
							desc: "  "
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 3: 13 Mar 2020",
							desc: "  "
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 22: 16 Mar 2020",
							desc: "Direct exposure to possible \ninfected returnees from Italy @ BIA"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 30: 17 Mar 2020",
							desc: "Exposure to a tour group"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					}
				]
			},
			{
				text: {
                    name: "Local transmission, \nno link to imported case"
                },
				HTMLclass: "slcases",
				children: [
					{
						text: {
							name: "Case 11: 20 Mar 2020",
							desc: "Linked to #3"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 29: 17 Mar 2020",
							desc: "Linked to #11 and #3"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 42: 17 Mar 2020",
							desc: "Linked to #11, #3 and #29"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 49: 18 Mar 2020",
							desc: "Linked to #30"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 50: 18 Mar 2020",
							desc: "Linked to #2"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 55: 19 Mar 2020",
							desc: "Linked to #31"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 56: 19 Mar 2020",
							desc: "Linked to #55"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 58: 19 Mar 2020",
							desc: "Linked to #54"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 59: 19 Mar 2020",
							desc: "Linked to #54"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 60: 19 Mar 2020",
							desc: "Linked to #39, #49"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 64: 20 Mar 2020",
							desc: "Linked to #54"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 65: 20 Mar 2020",
							desc: "Linked to #54"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 66: 20 Mar 2020",
							desc: "Linked to #51"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 71: 20 Mar 2020",
							desc: "Linked to #58"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					}
				]
			},
			{
				text: {
                    name: "Unknown"
                },
				HTMLclass: "slcases",
				children: [
					{
						text: {
							name: "Case 41: 17 Mar 2020",
							desc: "Uncertain exposure"
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					},
					{
						text: {
							name: "Case 51: 17 Mar 2020",
							desc: " "
						},
						image: "D:/IHP/Nishani/COVID/programs/circle.png",
                        HTMLclass: "casetype"
					}
				]
			}
        ]
    }
};



