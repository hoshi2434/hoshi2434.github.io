EDSFormats.HGWT= {
    'L': {
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
                left: "width(leftFlower) + len(2)"
            }
        },
        rightFlower: {
            align: "left",
            margin: {
                left: "width(leftFlower) + width(displayText) + len(4)"
            },
            image: "L"
        },
        text: "UNDER INSTRUCTION"
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
            align: "left",
            image: "logo"
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
                centreBottomText: {
                    align: "centre-x,bottom",
                    text: "$bottom",
                    font: "Mobitec-7:7",
                    spacing: 1
                }
            },
            align: "centre-y",
            margin: {
                left: "width(leftFlower) + len(8)"
            }
        },
        rightFlower: {
            align: "left",
            margin: {
                left: "width(leftFlower) + width(displayText) + len(14)"
            },
            image: "gas"
        },
        text: "ROUTE TRAINING"
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
                    top: "Driver",
                    bottom: "Under Instruction"
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
                text: "GAS LOGO",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "gar-logo",
                    serviceNumber: "",
                    top: " ",
                    bottom: " "
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
                    top: "ROUTE TRAINING",
                    bottom: " "
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9741: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: {
                text: "TOMLINSON INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "TOMLINSON INT",
                    topFont: "Mobitec-13:7"
                },
                "UPP TOMLINSON RD",
                "TOMLINSON AVE 1",
                "LONG HILL ROAD",
                "HGE",
                "TOMLINSON LINK",
                "TOWNSVILLE AVE 1"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
  9742: {
        front: {
            renderType: "destScroll",
            top: "ENDS AT T.V POLY",
            topFont: "Mobitec-7:7",

            bottom: "TOWNSVILLE MRT",
            bottomFont: "Mobitec-7:7",

            serviceNumber: "974A"
        }
    },
    9743: {
        front: {
            renderType: "standardService",
            serviceNumber: "974M",
            destination: {
                text: "WEST TERRA INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "974M",
                    top: "WEST TERRA INT",
                    topFont: "Mobitec-13:7"
                },
                "WEST TERRA AVE 1",
                "TOMLINSON AVE 1",
                "T'VILLE CRES, CL",
                "HGE",
                "TOMLINSON LINK",
                "TOWNSVILLE AVE 1"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    9751: {
        front: {
            renderType: "standardService",
            serviceNumber: "975",
            destination: {
                text: "W.N CEMETERY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                     renderType: "destScroll",
                     top: "WOODNEUK TOWN",
                     topFont: "Mobitec-7:7",

                     bottom: "CEMETERY",
                     bottomFont: "Mobitec-7:7",

                     serviceNumber: "974A"
                },
                "LONG HILL DRIVE",
                "HILLGROVE WAY",
                "HILLGROVE AVE 4,2,3",
                "W.N TOWN CEMETERY"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    9752: {
        front: {
            renderType: "standardService",
            serviceNumber: "975",
            destination: {
                text: "TOMLINSON INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "975",
                    top: "TOMLINSON INT",
                    topFont: "Mobitec-13:7"
                },
                "W.N TOWN CEMETERY",
                "HILLGROVE AVE 4,2,3",
                "HILLGROVE WAY",
                "LONG HILL DRIVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    9761: {
        front: {
            renderType: "standardService",
            serviceNumber: "976",
            destination: {
                text: "TOMLINSON INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "976",
                    top: "TOMLINSON INT",
                    topFont: "Mobitec-13:7"
                },
                "RIVERVALE CRESCENT",
                "BRICKLAND CRESCENT",
                "BRICKLAND DRIVE",
                "BRICKLAND NORTH 6"
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

EDSExtras.HGWT = { 
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
            renderType: "destScroll",
            top: "SALAMAT HARI RAYA",
            topFont: "Mobitec-7:7",

            bottom: "ALDERIFTI",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    3: {
        front: {
            renderType: "destScroll",
            top: "Gong Xi Fa Cai",
            topFont: "Mobitec-10:7",

            serviceNumber: ""
        }
    },
    4: {
        front: {
            renderType: "destScroll",
            top: "Last Bus",
            topFont: "Mobitec-10:7",

            serviceNumber: ""
        }
    },
    5: {
        front: {
            renderType: "destScroll",
            top: "Bus Full",
            topFont: "Mobitec-10:7",

            serviceNumber: ""
        }
    },
    6: {
        front: {
            renderType: "destScroll",
            top: "This Bus Service Ends Here",
            topFont: "Mobitec-7:4",

            bottom: "Please Do Not Board The Bus",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    7: {
        front: {
            renderType: "destScroll",
            top: "Welcome Aboard",
            topFont: "Mobitec-7:7",

            bottom: "Go-Ahead Roblox SG",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    //8: {
        //front: {
            //renderType: "standardService",
            //serviceNumber: "",
            //destination: {
                //text: "Listen to Our Weekly Podcast,",
                //font: "Mobitec-7:4"
            //},
            //scrolls: [
                //"GARThings!",
                //"Streamed in our Discord Server!",
                //"Approach a MR or HR for details!"
            //],
            //scrollFont: "Mobitec-7:4"
        //}
    //},
    8: {
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
                    top: "        Welcome Aboard",
                    bottom: "     Go-Ahead Roblox SG"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
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
