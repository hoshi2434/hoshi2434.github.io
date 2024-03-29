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
            align: "centre-x",
            margin: {
                left: "len(2)"
            }
        },
        rightFlower: {
            align: "right",
         
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
            align: "centre-x,centre-y",
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

EDSData.HGWT = {    
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
    '1': {
        front: {
            renderType: "destScroll",
            top: "",
            topFont: "Mobitec-7:7",

            bottom: "",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    1: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "A&S Transit",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                    "For Enquiries, Call 6383 1111",
                    "Or Visit WWW.ANSTRANSIT.COM",
                    {
            renderType: "destScroll",
            top: "Sorry!",
            topFont: "Mobitec-7:7",

            bottom: "Not in Service",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }

            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2: {
        front: {
            renderType: "destScroll",
            top: "Vehicle Under Testing",
            topFont: "Mobitec-7:7",

            bottom: "Please Do Not Board",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    3: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Under Instruction",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "L",
                    serviceNumber: "",
                    top: "Driver Under",
                    bottom: "Orientation"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    4: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "MAN Message",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                    {
            renderType: "destScroll",
            top: "A&S TRANSIT INTRODUCES",
            topFont: "SMRT-LAWO-7",

            bottom: "THE MAN A22 CITYBUS",
            bottomFont: "SMRT-LAWO-7",

            serviceNumber: ""
                    },
                    {
            renderType: "destScroll",
            top: "A&S TRANSIT INTRODUCES",
            topFont: "SMRT-LAWO-7",

            bottom: "THE PEOPLE MOVERS",
            bottomFont: "SMRT-LAWO-7",

            serviceNumber: ""
                    },
                    {
            renderType: "destScroll",
            top: "Call 6383 1111 or",
            topFont: "Mobitec-7:7",

            bottom: "Visit www.anstransit.com",
            bottomFont: "Mobitec-6:5",

            serviceNumber: ""
                    },

            ],
            scrollFont: "Mobitec-6:5"
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
            topFont: "Mobitec-7:4",

            bottom: "TOWNSVILLE MRT",
            bottomFont: "Mobitec-7:4",

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
9791: {
        front: {
            renderType: "standardService",
            serviceNumber: "979",
            destination: {
                text: "TOMLINSON INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "979",
                    top: "TOMLINSON INT",
                    topFont: "Mobitec-13:7"
                },
                "UPP TOMLINSON RD",
                "TOMLINSON AVE 1",
                "NORMANTON CRESCENT",
                "HGE",
                "LONG HILL RD, DR",
                "RIVERVALE CRESCENT"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9811: {
        front: {
            renderType: "standardService",
            serviceNumber: "981",
            destination: {
                text: "HILLGROVE INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "HILLGROVE INT",
                    topFont: "Mobitec-13:7"
                },
                "HILLGROVE AVE 1",
                "HILLGROVE WAY",
                "HILLGROVE AVE 2,3,5,6",
                "BURLINGTON CRES"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9821: {
        front: {
            renderType: "standardService",
            serviceNumber: "982",
            destination: {
                text: "HILLGROVE INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982",
                    top: "HILLGROVE INT",
                    topFont: "Mobitec-13:7"
                },
                "HILLGROVE WAY",
                "BRICKLAND ST 52",
                "BRICKLAND CRESCENT"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9831: {
        front: {
            renderType: "standardService",
            serviceNumber: "983",
            destination: {
                text: "HILLGROVE INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "983",
                    top: "HILLGROVE INT",
                    topFont: "Mobitec-13:7"
                },
                "HILLGROVE WAY",
                "WEST TERRA AVE 1",
                "UPP TOMLINSON RD",
                "LONG HILL CLOSE",
                "HILLGROVE MRT",
                "HILLGROVE FLYOVER"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9832: {
        front: {
            renderType: "standardService",
            serviceNumber: "983",
            destination: {
                text: "WEST TERRA INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "983",
                    top: "WEST TERRA INT",
                    topFont: "Mobitec-13:7"
                },
                "HILLGROVE WAY",
                "WEST TERRA AVE 1",
                "UPP TOMLINSON RD",
                "LONG HILL CLOSE",
                "HILLGROVE MRT",
                "HILLGROVE FLYOVER"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9841: {
        front: {
            renderType: "standardService",
            serviceNumber: "984",
            destination: {
                text: "BUDGET TER PTB1",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                     renderType: "destScroll",
                     top: "BUDGET TER",
                     topFont: "Mobitec-7:7",

                     bottom: "PTB 1",
                     bottomFont: "Mobitec-7:7",

                     serviceNumber: "984"
                },
                "WEST TERRA AVE 1",
                "TOMLINSON AVE 1",
                "LONG HILL RD,DR",
                "UPP TOMLINSON RD",
                "TERMINAL AVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9842: {
        front: {
            renderType: "standardService",
            serviceNumber: "984",
            destination: {
                text: "WEST TERRA INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "984",
                    top: "WEST TERRA INT",
                    topFont: "Mobitec-13:7"
                },
                "TERMINAL AVE",
                "UPP TOMLINSON RD",
                "LONG HILL RD,DR",
                "TOMLINSON AVE 1",
                "WEST TERRA AVE 1"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9871: {
        front: {
            renderType: "standardService",
            serviceNumber: "987",
            destination: {
                text: "HILLGROVE INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "987",
                    top: "HILLGROVE INT",
                    topFont: "Mobitec-13:7"
                },
                "HILLGROVE AVE 1",
                "NORMANTON CIRCLE",
                "TENNESSEE HILL ST 1",
                "HILLGROVE TURN, WAY",
                "HILLGROVE AVE 1, CTRL",
                "HILLTOP AVE, LANE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9881: {
        front: {
            renderType: "standardService",
            serviceNumber: "988",
            destination: {
                text: "HILLGROVE INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "988",
                    top: "HILLGROVE INT",
                    topFont: "Mobitec-13:7"
                },
                "HILLGROVE AVE 4/1/7",
                "HILLGROVE JUNCTION",
                "HILLGROVE LINK"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9891: {
        front: {
            renderType: "standardService",
            serviceNumber: "989",
            destination: {
                text: "HILLGROVE INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "989",
                    top: "HILLGROVE INT",
                    topFont: "Mobitec-13:7"
                },
                "HILLGROVE AVE 1",
                "NORMANTON RD",
                "EDGEVILLE HILL",
                "TENNESSEE DRIVE",
                "STONE VILLAGE WAY",
                "PEACE VILLAGE CRES"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9901: {
        front: {
            renderType: "standardService",
            serviceNumber: "990",
            destination: {
                text: "HOSP. AVE TER",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                     renderType: "destScroll",
                     top: "HOSPITAL AVENUE",
                     topFont: "Mobitec-7:7",

                     bottom: "TERMINAL",
                     bottomFont: "Mobitec-7:7",

                     serviceNumber: "990"
                },
                "PEACE VILLAGE CRES",
                "STONE VILLAGE WAY",
                "NORTHERN TIP RD",
                "E'VILLE HILL/AVE 1,2",
                "STONE VILLAGE WAY",
                "PEACE VILLAGE CRES"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
9911: {
        front: {
            renderType: "standardService",
            serviceNumber: "991",
            destination: {
                text: "HOSP. AVE TER",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                     renderType: "destScroll",
                     top: "HOSPITAL AVENUE",
                     topFont: "Mobitec-7:7",

                     bottom: "TERMINAL",
                     bottomFont: "Mobitec-7:7",

                     serviceNumber: "990"
                },
                "STONE VILLAGE WAY",
                "NORTHERN TIP RD",
                "TENNESSEE HILL/CIRC",
                "TENNESSEE DRIVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
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

EDSImages.HGWT = {
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
