EDSFormats.GASR = {
    'L': {
        leftFlower: {
            align: "left",
            image: "L"
        },
        displayText: {
            $$group: {
                centreTopText: {
                    align: "centre-x,top",
                    text: "$top",
                    font: "Mobitec-7:7",
                    spacing: 1
                },
                centreBottomText: {
                    align: "centre-x,bottom",
                    text: "$bottom",
                    font: "Mobitec-7:7",
                    spacing: 1
                }
            },
            align: "left",
            margin: {
                left: "width(leftFlower) + len(15)"
            }
        },
        rightFlower: {
            align: "right, centre-y",
            margin: {
                left: "width(leftFlower) + width(displayText) + len(15)"
            },
            image: "L"
        },
        text: "Driver Under Instruction"
    },
    'gar-logo': {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: 2
        },

        leftFlower: {
            align: "left+'     '",
            image: "gas"
        },
        displayText: {
            $$group: {
                centreTopText: {
                    align: "left,top",
                    text: "$top",
                    font: "Mobitec-7:4",
                    spacing: 1
                },
                centreBottomText: {
                    align: "left,bottom",
                    text: "$bottom",
                    font: "Mobitec-7:4",
                    spacing: 1
                }
            },
            align: "left",
            margin: {
                left: "width(leftFlower) + len(1)"
            }
        },
        text: "GASR Logo"
    },

    'GARide': {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: 2
        },

        leftFlower: {
            align: "left",
            image: "gas"
        },
        displayText: {
            $$group: {
                centreTopText: {
                    align: "centre-x,centre-y",
                    text: "$top",
                    font: "Mobitec-10:7",
                    spacing: 1
                },
            },
            align: "centre-x",
            margin: {
                left: "width(leftFlower) + len(2)"
            }
        },
    },

    'routeTRG': {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: 2
        },

        leftFlower: {
            align: "left",
            image: "gas"
        },
        displayText: {
            $$group: {
                centreTopText: {
                    align: "centre-x,centre-y",
                    text: "$top",
                    font: "Mobitec-10:7",
                    spacing: 1
                },
            },
            align: "left",
            margin: {
                left: "width(leftFlower) + len(2)"
            }
        },
        rightFlower: {
            align: "left",
            margin: {
                left: "width(leftFlower) + width(displayText) + len(4) + ' '"
            },
            image: "gas"
        },
    },

    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text",
            font: "$destination.font",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination.text+' '+$serviceNumber"
    },
    autoBus: {
        serviceNumber: {
            align: "left",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$spacing"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: "$topFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont !== null": "$bottomFont",
                    "else": "Mobitec-6:5"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    boot: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$spacing"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "left,top"
                }
            },
            text: "$top",
            font: "$topFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },
        bottom: {
            align: "left,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont !== null": "$bottomFont",
                    "else": "Mobitec-6:5"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$spacing"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: "$topFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont !== null": "$bottomFont",
                    "else": "Mobitec-6:5"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    },
    garide: {
        logo: {
            align: "left,centre-y",
            image: "gas"
        },
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: 1
        },
        text: "'GA RIDE '+$serviceNumber"
    },
}

EDSData.GASR = {    
   '-1': {
        front: {
            renderType: "boot",
            top: "Erase all Data",
            topFont: "Mobitec-7:4",

            bottom: "Press 'F4' or 'Home'",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
   '-2': {
        front: {
            renderType: "boot",
            top: "Data Erased",
            topFont: "Mobitec-7:4",

            bottom: "Click 'Home' to continue",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    1: {
        front: {
            renderType: "destScroll",
            top: "",
            topFont: "Mobitec-7:7",

            bottom: "",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    1111: {
        front: {
            renderType: "destScroll",
            top: "Sorry! Not in Service!",
            topFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    9999: {
        front: {
            renderType: "destScroll",
            top: "Ver 26.01.2020-Mobi",
            topFont: "Mobitec-7:7",

            bottom: "GO-AHEAD ROBLOX SG",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    3333: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Under Instruction",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "L",
                    serviceNumber: "",
                    top: "Driver Under",
                    bottom: "Instruction"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    4444: {
        front: {
            renderType: "destScroll",
            top: "On Test",
            topFont: "Mobitec-10:7",

            serviceNumber: ""
        }
    },
    5555: {
        front: {
            renderType: "destScroll",
            top: "On Charter",
            topFont: "Mobitec-10:7",

            serviceNumber: ""
        }
    },
    2222: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "GASR LOGO",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "gar-logo",
                    serviceNumber: "",
                    top: "        GO-AHEAD SINGAPORE",
                    bottom: "        ROBLOX"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    5556: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "ROUTE TRAINING",
                font: "Mobitec-10:7"
            },
            scrolls: [
                {
                    renderType: "routeTRG",
                    serviceNumber: "",
                    top: "ROUTE TRAINING"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    573: {
        front: {
            renderType: "standardService",
            serviceNumber: "57M",
            destination: {
                text: "KAMPONG GARANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "57M",
                    top: "KAMPONG GARANG INT",
                    topFont: "Mobitec-7:5:3"
                },
                "KG GARANG CTRL",
                "HORIZON RD",
                "KG GARANG RD",
                "HORIZON LINK"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4231: {
        front: {
            renderType: "standardService",
            serviceNumber: "423",
            destination: {
                text: "KAMPONG GARANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "423",
                    top: "KAMPONG GARANG INT",
                    topFont: "Mobitec-7:5:3"
                },
                "KG GARANG CTRL",
                "KG GARANG TURN",
                "GARANG BEACH SVC RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4251: {
        front: {
            renderType: "standardService",
            serviceNumber: "425",
            destination: {
                text: "KAMPONG GARANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "425",
                    top: "KAMPONG GARANG INT",
                    topFont: "Mobitec-7:5:3"
                },
                "KG GARANG CTRL",
                "CONRISTON RD",
                "TEUER LANE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4252: {
        front: {
            renderType: "standardService",
            serviceNumber: "425A",
            destination: {
                text: "TERNINATES AT",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "ROCHESTER FERRY TER"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4261: {
        front: {
            renderType: "standardService",
            serviceNumber: "426",
            destination: {
                text: "KAMPONG GARANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "426",
                    top: "KAMPONG GARANG INT",
                    topFont: "Mobitec-7:5:3"
                },
                "KG GARANG CTRL",
                "CONRISTON RD",
                "TEUER LANE",
                "SCHNELLE CRES",
                "PORTER ST"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4501: {
        front: {
            renderType: "standardService",
            serviceNumber: "450",
            destination: {
                text: "WESTWOOD PIER TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "450",
                    top: "WESTWOOD PIER TER",
                    topFont: "Mobitec-7:5:3"
                },
                "WESTWOOD PIER WAY",
                "WESTWOOD NORTH RD",
                "WESTWOOD NORTH RING"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4502: {
        front: {
            renderType: "standardService",
            serviceNumber: "450",
            destination: {
                text: "WESTWOOD PIER TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "450",
                    top: "WESTWOOD PIER TER",
                    topFont: "Mobitec-7:5:3"
                },
                "WESTWOOD PIER WAY",
                "WESTWOOD MAIN RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4531: {
        front: {
            renderType: "standardService",
            serviceNumber: "453",
            destination: {
                text: "WESTWOOD PIER TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "453",
                    top: "WESTWOOD PIER TER",
                    topFont: "Mobitec-7:5:3"
                },
                "WESTWOOD PIER WAY",
                "WESTWOOD NORTH RD",
                "WESTWOOD NORTH RING"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4531: {
        front: {
            renderType: "standardService",
            serviceNumber: "453",
            destination: {
                text: "WESTWOOD PIER TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "453",
                    top: "WESTWOOD PIER TER",
                    topFont: "Mobitec-7:5:3"
                },
                "WESTWOOD EAST AVE 1",
                "NORTH COAST DR",
                "WESTWOOD NORTH IND EST 3",
                "NORTH COAST WAY",
                "NORTH COAST AVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5871: {
        front: {
            renderType: "standardService",
            serviceNumber: "587",
            destination: {
                text: "ROCKFORD AIRPORT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "587",
                    top: "ROCKFORD AIRPORT",
                    topFont: "Mobitec-7:5:3"
                },
                "ROCKFORD CTRL",
                "ROCKFORD SPRING",
                "RWE",
                "INGURION RD",
                "STIMMIT DR",
                "JALAN BESI",
                "R'FORD AVIATION DR"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5872: {
        front: {
            renderType: "standardService",
            serviceNumber: "587",
            destination: {
                text: "ROCKFORD",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "587",
                    top: "ROCKFORD",
                    topFont: "Mobitec-13:7"
                },
                "R'FORD AVIATION DR",
                "JALAN BESI",
                "STIMMIT DR",
                "INGURION RD",
                "ROCKFORD SPRING",
                "ROCKFORD CTRL"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5873: {
        front: {
            renderType: "standardService",
            serviceNumber: "587A",
            destination: {
                text: "TERMINATES AT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                "AFT R'FORD SPRING"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5874: {
        front: {
            renderType: "standardService",
            serviceNumber: "587e",
            destination: {
                text: "ROCKFORD AIRPORT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "587e",
                    top: "EXPRESS",
                    topFont: "Mobitec-10:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "587e",
                    top: "ROCKFORD AIRPORT",
                    topFont: "Mobitec-7:5:3"
                },
                "ROCKFORD CTRL",
                "RWE",
                "R'FORD AVIATION DRIVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5875: {
        front: {
            renderType: "standardService",
            serviceNumber: "587e",
            destination: {
                text: "ROCKFORD",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "587e",
                    top: "EXPRESS",
                    topFont: "Mobitec-10:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "587e",
                    top: "ROCKFORD",
                    topFont: "Mobitec-13:7"
                },
                "R'FORD AVIATIOM DR",
                "ROCKFORD SPRING",
                "ROCKFORD CTRL"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5876: {
        front: {
            renderType: "standardService",
            serviceNumber: "587T",
            destination: {
                text: "ROCKFORD AIRPORT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "587T",
                    top: "ROCKFORD AIRPORT",
                    topFont: "Mobitec-7:5:3"
                },
                "ROCKFORD CTRL",
                "ROCKFORD SPRING",
                "RWE",
                "INGURION RD",
                "STIMMIT DR",
                "JALAN BESI",
                "R'FORD AVIATION DR"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    7511: {
        front: {
            renderType: "standardService",
            serviceNumber: "751G",
            destination: {
                text: "ROCKFORD INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "751G",
                    top: "ROCKFORD",
                    topFont: "Mobitec-13:7"
                },
                "ROCKFORD CTRL",
                "ROCKFORD SQ",
                "ROCKFORD LOOP",
                "ROCKFORD CIRCLE",
                "ROCKFORD RING"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    7512: {
        front: {
            renderType: "standardService",
            serviceNumber: "751W",
            destination: {
                text: "ROCKFORD INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "751W",
                    top: "ROCKFORD",
                    topFont: "Mobitec-13:7"
                },
                "ROCKFORD CTRL",
                "ROCKFORD RING",
                "ROCKFORD CIRCLE",
                "ROCKFORD LOOP",
                "ROCKFORD SQ"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    7521: {
        front: {
            renderType: "standardService",
            serviceNumber: "752",
            destination: {
                text: "ROCKFORD INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "752",
                    top: "ROCKFORD",
                    topFont: "Mobitec-13:7"
                },
                "ROCKFORD CTRL",
                "ROCKFORD DRIVE",
                "ROCKFORD CIRCLE",
                "ROCKFORD RING"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    7591: {
        front: {
            renderType: "standardService",
            serviceNumber: "759",
            destination: {
                text: "ROCKFORD INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "759",
                    top: "ROCKFORD",
                    topFont: "Mobitec-13:7"
                },
                "ROCKFORD CTRL",
                "ROCKFORD SPRING",
                "ROCKFORD WEST RD",
                "ROCKFORD WEST AVE 3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    8601: {
        front: {
            renderType: "standardService",
            serviceNumber: "860",
            destination: {
                text: "WESTWOOD PIER TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "860",
                    top: "WESTWOOD PIER TER",
                    topFont: "Mobitec-7:5:3"
                },
                "WESTWOOD EAST AVE 1",
                "WESTWOOD EAST ST 2/1/3",
                "WESTWOOD WEST RD",
                "WESTWOOD CRESCENT",
                "NORTH COAST AVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    8681: {
        front: {
            renderType: "standardService",
            serviceNumber: "868",
            destination: {
                text: "WESTWOOD PIER TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "868",
                    top: "WESTWOOD PIER TER",
                    topFont: "Mobitec-7:5:3"
                },
                "WESTWOOD EAST AVE 1",
                "WESTWOOD MAIN RD",
                "WESTWOOD PIER WAY"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    8682: {
        front: {
            renderType: "standardService",
            serviceNumber: "868",
            destination: {
                text: "WESTWOOD INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "868",
                    top: "WESTWOOD INT",
                    topFont: "Mobitec-13:7"
                },
                "WESTWOOD PIER WAY",
                "WESTWOOD MAIN RD",
                "WESTWOOD EAST AVE 1"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    901: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "GA RIDE 01",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "GARide",
                    serviceNumber: "",
                    top: "GA RIDE 01"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        },
    },
}

EDSExtras.GASR = { 
    1: {
        front: {
            renderType: "destScroll",
            top: "MERRY CHRISTMAS",
            topFont: "Mobitec-7:7",

            bottom: "HAPPY NEW YEAR",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    2: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "GONG XI FA CAI",
            spacing: 1
        }
    },
    3: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "SELAMAT HARI RAYA",
            spacing: 1
        }
    },
    4: {
        front: {
            renderType: "destScroll",
            top: "HAPPY",
            topFont: "Mobitec-7:7",

            bottom: "DEEPAVALI",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    5: {
        front: {
            renderType: "destScroll",
            top: "EZ READER OUT OF ORDER",
            topFont: "Mobitec-7:5:3",

            bottom: "PLEASE PAY CASH",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    6: {
        front: {
            renderType: "message",
            font: "Mobitec-13:7",
            text: "LAST BUS",
            spacing: 1
        }
    },
    7: {
        front: {
            renderType: "destScroll",
            top: "THIS IS THE WSOE",
            topFont: "Mobitec-7:5:3",

            bottom: "PLEASE SPAM W",
            bottomFont: "Mobitec-7:7",

            serviceNumber: "83"
        }
    },
    8: {
        front: {
            renderType: "destScroll",
            top: "HAPPY",
            topFont: "Mobitec-7:7",

            bottom: "VALENTINE'S DAY",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    }
}

EDSImages.GASR = {
    gas: [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0],
        [1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0]
    ],
    L: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    logo: [
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0],
        [1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    ]
}
