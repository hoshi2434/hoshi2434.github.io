EDSFormats.GASG = {
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
                    font: "LECIP-8",
                    spacing: 1
                },
                centreBottomText: {
                    align: "left,bottom",
                    text: "$bottom",
                    font: "LECIP-8",
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
            font: "LAWO-26:12",
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
            font: "LAWO-26:12",
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

EDSData.GASG = {    
   '-1': {
        front: {
            renderType: "boot",
            top: "Erase all Data",
            topFont: "LECIP-8",

            bottom: "Press 'F4' or 'Home'",
            bottomFont: "LECIP-8",

            serviceNumber: ""
        }
    },
   '-2': {
        front: {
            renderType: "boot",
            top: "Data Erased",
            topFont: "LECIP-8",

            bottom: "Click 'Home' to continue",
            bottomFont: "LECIP-8",

            serviceNumber: ""
        }
    },
    1: {
        front: {
            renderType: "boot",
            top: "V315",
            topFont: "Mobitec-13:7",

            bottom: "0308",
            bottomFont: "Mobitec-13:7",

            serviceNumber: ""
        }
    },
    1111: {
        front: {
            renderType: "destScroll",
            top: "SORRY!",
            topFont: "Mobitec-13:7",

            bottom: "NOT IN SERVICE",
            bottomFont: "Mobitec-13:7",

            serviceNumber: ""
        }
    },
    3333: {
        front: {
            renderType: "routeTRG",
            top: "DRIVER UNDER",
            topFont: "Mobitec-13:7",

            bottom: "INSTRUCTION",
            bottomFont: "Mobitec-13:7",

            serviceNumber: ""
        }
    },
    4444: {
        front: {
            renderType: "destScroll",
            top: "On Test",
            topFont: "Mobitec-13:7",

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
            renderType: "logo",
            image: "logo",
            text: "GO-AHEAD SINGAPORE"
        }
    },
    6666: {
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
    9999: {
        front: {
            renderType: "destScroll",
            top: "VER. 16082021-DD",
            topFont: "Mobitec-13:7",

            serviceNumber: ""
        }
    },
    21: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "KAMPONG BAHRU",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "CHANGI VILLAGE RD",
                " ",
                "LOYANG AVE",
                " ",
                "LOYANG WAY",
                " ",
                "UPP CHANGI RD NTH/EAST",
                " ",
                "UPP CHANGI LINK",
                " ",
                "UPP CHANGI RD",
                " ",
                "BEDOK RD",
                " ",
                "NEW UPP CHANGI RD",
                " ",
                "CHANGI RD",
                " ",
                "GEYLANG RD",
                " ",
                "KALLANG RD",
                " ",
                "VICTORIA ST",
                " ",
                "HILL ST",
                " ",
                "NEW BRIDGE RD",
                " ",
                "KG BAHRU RD",
                " ",
                "SPOONER RD",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    22: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "CHANGI VILLAGE",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "SPOONER RD",
                " ",
                "KG BAHRU RD",
                " ",
                "EU TONG SEN ST",
                " ",
                "HILL ST",
                " ",
                "VICTORIA ST",
                " ",
                "KALLANG RD",
                " ",
                "SIMS AVE",
                " ",
                "SIMS AVE EAST",
                " ",
                "NEW UPP CHANGI RD",
                " ",
                "BEDOK RD",
                " ",
                "UPP CHANGI RD",
                " ",
                "UPP CHANGI LK",
                " ",
                "UPP CHANGI RD EAST/NTH",
                " ",
                "LOYANG WAY",
                " ",
                "LOYANG AVE",
                " ",
                "CHANGI VILLAGE RD",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    31: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "TAMPINES CTRL 1",
                " ",
                "TAMPINES AVE 5/4",
                " ",
                "TAMPINES ST 21",
                " ",
                "TAMPINES AVE 2/7",
                " ",
                "LOYANG AVE",
                " ",
                "PASIR RIS DR 1",
                " ",
                "PASIR RIS ST 21",
                " ",
                "PASIR RIS DR 4/3/8/1",
                " ",
                "ELIAS RD",
                " ",
                "PASIR RIS ST 71",
                " ",
                "PASIR RIS DR 10/1/12",
                " ",
                "TPE",
                " ",
                "PUNGGOL RD",
                " ",
                "PUNGGOL FIELD",
                " ",
                "PUNGGOL EAST",
                " ",
                "PUNGGOL CTRL",
                " ",
                "PUNGGOL EAST",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    32: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "PUNGGOL PL",
                " ",
                "PUNGGOL CTRL",
                " ",
                "PUNGGOL EAST",
                " ",
                "PUNGGOL FIELD",
                " ",
                "PUNGGOL RD",
                " ",
                "TPE",
                " ",
                "PASIR RIS DR 12/1/10",
                " ",
                "PASIR RIS ST 71",
                " ",
                "ELIAS RD",
                " ",
                "PASIR RIS DR 1/8/3/4",
                " ",
                "PASIR RIS ST 21",
                " ",
                "PASIR RIS DR 1",
                " ",
                "LOYANG AVE",
                " ",
                "TAMPINES AVE 7/2",
                " ",
                "TAMPINES ST 23/21",
                " ",
                "TAMPINES AVE 4/9",
                " ",
                "TAMPINES CTRL 1",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    61: {
        front: {
            renderType: "standardService",
            serviceNumber: "6",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "PASIR RIS DR 3",
                " ",
                "LOYANG AVE",
                " ",
                "LOYANG WAY",
                " ",
                "LOYANG CRESENT",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    121: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "KAMPONG BAHRU",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "PASIR RIS DR 3/6/1",
                " ",
                "LOYANG AVE",
                "TAMPINES AVE 7/2",
                " ",
                "SIMEI RD",
                " ",
                "UPP CHANGI RD EAST",
                " ",
                "NEW UPP CHANGI RD",
                " ",
                "BEDOK STH AVE 3",
                " ",
                "BEDOK STH RD",
                " ",
                "BEDOK STH AVE 1",
                " ",
                "UPP EAST COAST RD",
                " ",
                "EAST COAST RD",
                " ",
                "MOUNTBATTEN ROAD",
                " ",
                "SIMS WAY",
                " ",
                "GEYLANG RD",
                " ",
                "KALLANG RD",
                " ",
                "VICTORIA ST",
                " ",
                "HILL ST",
                " ",
                "NEW BRIDGE RD",
                " ",
                "KAMPONG BAHRU RD",
                " ",
                "SPOONER RD",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    122: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "SPOONER RD",
                " ",
                "KAMPONG BAHRU RD",
                " ",
                "EU TONG SEN STREET",
                " ",
                "HILL ST",
                " ",
                "VICTORIA ST",
                " ",
                "KALLANG ROAD",
                " ",
                "SIMS AVE",
                " ",
                "SIMS WAY",
                " ",
                "MOUNTBATTEN MRT/RD",
                " ",
                "EAST COAST RD",
                " ",
                "UPP EAST COAST RD",
                " ",
                "BEDOK SOUTH AVE 1",
                " ",
                "BEDOK SOUTH RD",
                " ",
                "BEDOK SOUTH AVE 3",
                " ",
                "NEW UPP CHANGI ROAD",
                " ",
                "UPP CHANGI ROAD EAST",
                " ",
                "SIMEI ROAD",
                " ",
                "TAMPINES AVE 2/7",
                " ",
                "LOYANG AVE",
                " ",
                "PASIR RIS DR 1/6/3",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    123: { //TEMP wrong data Cuz gas like to put hosp or smth
        front: {
            renderType: "standardService",
            serviceNumber: "12e",
            destination: {
                text: "KAMPONG BAHRU",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "PASIR RIS DR 3/6/1",
                " ",
                "LOYANG AVE",
                " ",
                "TAMPINES AVE 7/2",
                " ",
                "SIMEI RD",
                " ",
                "UPP CHANGI RD EAST",
                " ",
                "NEW UPP CHANGI RD",
                " ",
                "BEDOK STH AVE 3/1",
                " ",
                "BEDOK STH RD",
                " ",
                "ECP",
                " ",
                "ROCHOR RD",
                " ",
                "VICTORIA ST",
                " ",
                "HILL ST",
                " ",
                "NEW BRIDGE RD",
                " ",
                "SPOONER RD",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    124: {
        front: {
            renderType: "standardService",
            serviceNumber: "12e",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "SPOONER RD",
                " ",
                "EU TONG SEN RD",
                " ",
                "HILL ST",
                " ",
                "VICTORIA ST",
                " ",
                "OPHIR RD",
                " ",
                "ECP",
                " ",
                "BEDOK STH RD",
                " ",
                "BEDOK STH AVE 1/3",
                " ",
                "NEW UPP CHANGI RD",
                " ",
                "UPP CHANGI RD EAST",
                " ",
                "SIMEI RD",
                " ",
                "TAMPINES AVE 2/7",
                " ",
                "LOYANG AVE",
                " ",
                "PASIR RIS DR 1/6/3",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    151: {
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "PASIR RIS DR 3/1/8",
                " ",
                "PASIR RIS ST 52",
                " ",
                "TAMPINES AVE 12/9/5/7/4/1",
                " ",
                "BEDOK NTH RD EXTN (EXPRESS)",
                " ",
                "BEDOK RESERVOIR RD",
                " ",
                "KAKI BUKIT AVE 1",
                " ",
                "EUNOS LINK",
                " ",
                "JALAN EUNOS",
                " ",
                "STILL RD",
                " ",
                "JOO CHIAT PLACE",
                " ",
                "TELOK KURAU ROAD",
                " ",
                "MARINE PARADE RD",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    152: {
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "MARINE PARADE RD",
                " ",
                "JOO CHIAT PLACE",
                " ",
                "STILL ROAD",
                " ",
                "JALAN EUNOS",
                " ",
                "EUNOS LINK",
                " ",
                "KAKI BUKIT AVE 1",
                " ",
                "BEDOK RESERVOIR ROAD",
                " ",
                "JALAN EUNOS",
                " ",
                "BEDOK NTH RD EXTN (EXPRESS)",
                " ",
                "TAMPINES AVE 1/5/4/7/9/12",
                " ",
                "PASIR RIS ST 52",
                " ",
                "PASIR RIS DR 8/1/3",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    153: {
        front: {
            renderType: "standardService",
            serviceNumber: "15A",
            destination: {
                text: "OPP EUNOS STN",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15A",
                    top: "TERMINATES AT",
                    bottom: "OPP EUNOS STN",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                }
            ],
            scrollFont: "LECIP-8"
        }
    },
    171: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "BEDOK",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "PASIR RIS DR 3/4/1",
                " ",
                "LOYANG AVE",
                " ",
                "TAMPINES AVE 7/2",
                " ",
                "SIMEI AVE",
                " ",
                "BEDOK NORTH RD",
                " ",
                "BEDOK NORTH AVE 4/1",
                " ",
                "BEDOK NORTH DR",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    172: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "BEDOK NORTH DRIVE",
                " ",
                "BEDOK NORTH RD",
                " ",
                "BEDOK NORTH AVE 1/4",
                " ",
                "SIMEI AVE",
                " ",
                "TAMPINES AVE 2/7",
                " ",
                "LOYANG AVE",
                " ",
                "PASIR RIS DR 1/4/3",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    173: {
        front: {
            renderType: "standardService",
            serviceNumber: "17A",
            destination: {
                text: "BEDOK NTH DEPOT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17A",
                    top: "TERMINATES AT",
                    bottom: "BEDOK NTH DEPOT",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                }
            ],
            scrollFont: "LECIP-8"
        }
    },
    341: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "PUNGGOL PLACE",
                " ",
                "PUNGGOL CENTRAL",
                " ",
                "PUNGGOL ROAD",
                " ",
                "TPE",
                " ",
                "TAMPINES AVE 10/5/2/7",
                " ",
                "PIE",
                " ",
                "AIRPORT BOULEVARD",
                " ",
                "CHANGI AIRPORT PTB 3,1,2,4",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    342: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                "AIRPORT BOULEVARD",
                " ",
                "PIE",
                " ",
                "TAMPINES AVE 7/2/5/10",
                " ",
                "TPE",
                " ",
                "PUNGGOL ROAD",
                " ",
                "PUNGGOL CENTRAL",
                " ",
                "PUNGGOL PLACE",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    343: {
        front: {
            renderType: "standardService",
            serviceNumber: "34A",
            destination: {
                text: "TAMPINES HUB",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34A",
                    top: "ENDS AT",
                    bottom: "TAMPINES HUB",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                }
            ],
            scrollFont: "LECIP-8"
        }
    },
    344: {
        front: {
            renderType: "standardService",
            serviceNumber: "34B",
            destination: {
                text: "AFT TPE",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34B",
                    top: "ENDS AT",
                    bottom: "AFT TPE",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "34B",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "TAMPINES AVE 10/5/2/7",
                "PIE",
                "AIRPORT BOULEVARD",
                "CHANGI AIRPORT PTB 3,1,2",
                "CHANGI AIRPORT TER 4",
                "AIRPORT BOULEVARD",
                "PIE",
                "TAMPINES AVE 7/2/5/10"
            ],
            scrollFont: "LECIP-8"
        }
    },
    361: {
        front: {
            renderType: "standardService",
            serviceNumber: "36",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36",
                    top: "Changi Airport",
                    topFont: "Mobitec-10:7"
                },
                "CHANGI AIRPORT PTB 3,1,2",
                "AIRPORT BOULEVARD",
                "T4 CRESCENT",
                "ECP (EXPRESS)",
                "MARINE PARADE RD",
                "AMBER RD",
                "MOUNTBATTEN RD",
                "TANJONG KATONG RD STH",
                "TEMASEK BLVD/AVE",
                "RAFFLES BLVD/AVE",
                "STAMFORD RD",
                "ORCHAD BLVD",
                "PENANG RD",
                "SOMERSET RD",
                "GRANGE RD",
                "TOMLISON RD",
                "TANGLIN RD",
                "BRAS BASAH RD",
                "SINGLAP RD/LK"
            ],
            scrollFont: "LECIP-8"
        }
    },
    362: {
        front: {
            renderType: "standardService",
            serviceNumber: "36A",
            destination: {
                text: "TOMLINSON RD",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36A",
                    top: "TERMINATES AT",
                    bottom: "THE REGENT S'PORE",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "CHANGI AIRPORT PTB 3,1,2",
                "AIRPORT BOULEVARD",
                "T4 CRESCENT",
                "ECP (EXPRESS)",
                "MARINE PARADE RD",
                "AMBER RD",
                "MOUNTBATTEN RD",
                "TANJONG KATONG RD STH",
                "TEMASEK BLVD/AVE",
                "RAFFLES BLVD/AVE",
                "STAMFORD RD",
                "ORCHAD BLVD",
                "PENANG RD",
                "SOMERSET RD",
                "GRANGE RD",
                "TOMLISON RD"
            ],
            scrollFont: "LECIP-8"
        }
    },
    363: {
        front: {
            renderType: "standardService",
            serviceNumber: "36B",
            destination: {
                text: "SINGLAP RD",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36",
                    top: "Changi Airport",
                    topFont: "Mobitec-10:7"
                },
                "MARINE PARADE RD",
                "AMBER RD",
                "MOUNTBATTEN RD",
                "TANJONG KATONG RD STH",
                "TEMASEK BLVD/AVE",
                "RAFFLES BLVD/AVE",
                "STAMFORD RD",
                "ORCHAD BLVD",
                "PENANG RD",
                "SOMERSET RD",
                "GRANGE RD",
                "TOMLISON RD",
                "TANGLIN RD",
                "BRAS BASAH RD",
                "SINGLAP RD"
            ],
            scrollFont: "LECIP-8"
        }
    },
    431: {
        front: {
            renderType: "standardService",
            serviceNumber: "43",
            destination: {
                text: "UPP EAST COAST",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "UPP EAST COAST",
                    topFont: "Mobitec-13:7"
                },
                "PUNGGOL PL",
                "PUNGGOL CTRL",
                "PUNGGOL WAY",
                "SENGKANG EAST RD",
                "SENGKANG CTRL",
                "BUANGKOK DR",
                "BUANGKOK GREEN/MRT",
                "YIO CHU KANG RD",
                "YIO CHU KANG LK",
                "SERANGOON MRT/CTRL",
                "UPP SERANGOON RD",
                "PAYA LEBAR RD",
                "TANJONG KATONG RD",
                "AMBER RD",
                "MARINE PARADE RD",
                "BEDOK STH AVE 1",
                "UPP EAST COAST RD"
            ],
            scrollFont: "LECIP-8"
        }
    },
    432: {
        front: {
            renderType: "standardService",
            serviceNumber: "43",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                "UPP EAST COAST RD",
                "BEDOK SOUTH AVE 1",
                "MARINE PARADE RD",
                "AMBER RD",
                "GEYLANG RD",
                "PAYA LEBAR RD",
                "UPP PAYA LEBAR RD",
                "UPP SERANGOON RD",
                "SERANGOON MRT/CTRL",
                "YIO CHU KANG LK",
                "YIO CHU KANG RD",
                "BUANGKOK GREEN/MRT",
                "BUANGKOK DR",
                "SENGKANG CTRL",
                "SENGKANG EAST RD",
                "PUNGGOL WAY",
                "PUNGGOL CTRL",
                "PUNGGOL PL"
            ],
            scrollFont: "LECIP-8"
        }
    },
    433: {
        front: {
            renderType: "standardService",
            serviceNumber: "43M",
            destination: {
                text: "SERANGOON MRT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "Serangoon MRT",
                    topFont: "Mobitec-13:7"
                },
                "PUNGGOL PL",
                "PUNGGOL CTRL",
                "PUNGGOL WAY",
                "SENGKANG EAST RD",
                "SENGKANG CTRL",
                "BUANGKOK MRT/DR",
                "BUANGKOK GREEN",
                "YIO CHU KANG RD",
                "YIO CHU KANG LK",
                "SERANGOON MRT/CTRL"
            ],
            scrollFont: "LECIP-8"
        }
    },
    434: {
        front: {
            renderType: "standardService",
            serviceNumber: "43M",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "SERANGOON CENTRAL",
                "YIO CHU KANG LINK",
                "YIO CHU KANG RD",
                "BUANGKOK GREEN/MRT",
                "BUANGKOK DRIVE",
                "SENGKANG CENTRAL",
                "SENGKANG EAST ROAD",
                "PUNGGOL WAY",
                "PUNGGOL CTRL",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    435: {
        front: {
            renderType: "standardService",
            serviceNumber: "43e",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "EXPRESS  MARINE ",
                    bottom: "Service  PARADE",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PUNGGOL PLACE",
                "PUNGGOL CENTRAL",
                "PUNGGOL WAY",
                "SENGKANG EAST ROAD",
                "SENGKANG CENTRAL",
                "BUANGKOK MRT/DR",
                "BUANGKOK EAST DRIVE",
                "KPE(EXPRESS)",
                "AIRPORT ROAD",
                "PAYA LEBAR RD",
                "TANJONG KATONG RD",
                "AMBER ROAD"
            ],
            scrollFont: "LECIP-8"
        }
    },
    436: {
        front: {
            renderType: "standardService",
            serviceNumber: "43e",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "EXPRESS PUNGGOL",
                    bottom: "Service      INT   ",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "MARINE PARADE RD",
                "AMBER ROAD",
                "TANJONG KATONG ROAD",
                "GEYLANG ROAD",
                "PAYA LEBAR ROAD",
                "AIRPORT ROAD",
                "KPE(EXPRESS)",
                "BUANGKOK EAST DR",
                "BUANGKOK DRIVE",
                "BUANGKOK MRT/CTRL",
                "SENGKANG EAST ROAD",
                "PUNGGOL WAY",
                "PUNGGOL CENTRAL",
                "PUNGGOL PLACE"
                
            ],
            scrollFont: "LECIP-8"
        }
    },
    501: {
        front: {
            renderType: "standardService",
            serviceNumber: "50",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "50",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                "ANG MO KIO AVE 8",
                "ANG MO KIO AVE 5",
                "YIO CHU KANG RD",
                "SENGKANG WEST AVE",
                "SENGKANG EAST WAY",
                "PUNGGOL DR"
            ],
            scrollFont: "LECIP-8"
        }
    },
    621: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "SIMS AVE",
                font: "LECIP-11"
            },
            scrolls: [
                "PUNGGOL PL",
                " ",
                "PUNGGOL FIELD",
                " ",
                "PUNGGOL EAST",
                " ",
                "SENGKANG EAST DR",
                " ",
                "UPP SERANGOON RD",
                " ",
                "HOUGANG AVE 8/6/10/2/3",
                " ",
                "TAMPINES RD",
                " ",
                "HOUGANG AVE 1",
                " ",
                "LORONG AH SOO",
                " ",
                "UPP PAYA LEBAR RD",
                " ",
                "MACPHERSON RD",
                " ",
                "ALJUNIED RD/MRT",
                " ",
                "GEYLANG RD",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    622: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "PUNGGOL",
                font: "LECIP-11"
            },
            scrolls: [
                "ALJUNIED RD/MRT",
                " ",
                "MACPHERSON RD",
                " ",
                "UPP PAYA LEBAR RD",
                " ",
                "LORONG AH SOO",
                " ",
                "HOUGANG AVE 1",
                " ",
                "TAMPINES RD",
                " ",
                "HOUGANG AVE 3/2/10/6/8",
                " ",
                "UPP SERANGOON RD",
                " ",
                "SENGKANG EAST DR",
                " ",
                "PUNGGOL FIELD",
                " ",
                "PUNGGOL PL",
                " "
            ],
            scrollFont: "LECIP-8"
        }
    },
    623: {
        front: {
            renderType: "standardService",
            serviceNumber: "62A",
            destination: {
                text: "TERMINATES AT",
                font: "LECIP-11"
            },
            scrolls: [
                "ALJUNID MRT"
            ],
            scrollFont: "LECIP-11"
        }
    },
    624: {
        front: {
            renderType: "standardService",
            serviceNumber: "62M",
            destination: {
                text: "UPP P. LEBAR RD",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62M",
                    top: "ENDS AT",
                    bottom: "BLK 115",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "HOUGANG AVE 1",
                "FEEQ WANTED THIS"
            ],
            scrollFont: "LECIP-8"
        }
    },
    681: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "TAMPINES CENTRAL I",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "TAMPINES CTRL I",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 3/10/1/12",
                "ELIAS RD",
                "PASIR RIS ST 71",
                "TAMPINES AVE 10,11,6,9",
                "TAMPINES CONCOURSE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    682: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "PASIR RIS INT",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 9/6/11/10",
                "PASIR RIS DR 12/1/10/3",
                "ELIAS RD"
            ],
            scrollFont: "LECIP-8"
        }
    },
    683: {
        front: {
            renderType: "standardService",
            serviceNumber: "68A",
            destination: {
                text: "TAMPINES INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68A",
                    top: "ENDS AT",
                    bottom: "TAMPINES INT",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "68A",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "TAMPINES AVE 11,6,9",
                "TAMPINES CONCOURSE",
                "TAMPINES CENTRAL I"
            ],
            scrollFont: "LECIP-8"
        }
    },
    684: {
        front: {
            renderType: "standardService",
            serviceNumber: "68B",
            destination: {
                text: "REEBONZ BLDG",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68B",
                    top: "ENDS AT",
                    bottom: "REEBONZ BLDG",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "68B",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "TAMPINES CENTRAL I",
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 9/6/11"
            ],
            scrollFont: "LECIP-8"
        }
    },
    821: {
        front: {
            renderType: "standardService",
            serviceNumber: "82",
            destination: {
                text: "SERANGOON MRT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "82",
                    top: "Serangoon MRT",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "82",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PUNGGOL PLACE",
                "PUNGGOL FIELD",
                "PUNGGOL ROAD",
                "HOUGANG AVE 10/2",
                "UPP SERANGOON ROAD",
                "SERANGOON MRT/CENTRAL"
            ],
            scrollFont: "LECIP-8"
        }
    },
    822: {
        front: {
            renderType: "standardService",
            serviceNumber: "82",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "82",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "82",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "SERANGOON CENTRAL",
                "BOUNDARY ROAD",
                "UPP SERANGOON ROAD",
                "HOUGANG AVE 2/10",
                "PUNGGOL ROAD",
                "PUNGGOL FIELD",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    831: {
        front: {
            renderType: "standardService",
            serviceNumber: "83",
            destination: {
                text: "SENGKANG",
                font: "Mobitec-13:7"
            },
            scrolls: [
                " ",
                "PUNGGOL PLACE",
                " ",
                "PUNGGOL CENTRAL",
                " ",
                "PUNGGOL EAST",
                " ",
                "PUNGGOL FIELD",
                " ",
                "PUNGGOL ROAD",
                " ",
                "COMPASSVALE ST",
                " ",
                "SENGKANG EAST RD",
                " ",
                "SENGKANG SQUARE"
            ],
            scrollFont: "Hanover-8"
        }
    },
    832: {
        front: {
            renderType: "standardService",
            serviceNumber: "83",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                " ",
                "SENGKANG SQUARE",
                " ",
                "SENGKANG EAST ROAD",
                " ",
                "COMPASSVALE ST",
                " ",
                "PUNGGOL ROAD",
                " ",
                "PUNGGOL FIELD",
                " ",
                "PUNGGOL EAST",
                " ",
                "PUNGGOL CENTRAL",
                " ",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    833: {
        front: {
            renderType: "standardService",
            serviceNumber: "83W",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "83W",
                    top: "",
                    bottom: "THIS IS THE WSOE",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "83W",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "SENGKANG SQUARE",
                "SENGKANG EAST ROAD",
                "COMPASSVALE ST",
                "PUNGGOL ROAD",
                "PUNGGOL FIELD",
                "PUNGGOL EAST",
                "PUNGGOL CENTRAL",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    841: {
        front: {
            renderType: "standardService",
            serviceNumber: "84",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "84",
                    top: "PUNGGOL INT",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "84",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PUNGGOL PLACE",
                "PUNGGOL CENTRAL",
                "PUNGGOL ROAD",
                "SENTUL CRESCENT",
                "SUMANG LINK",
                "PUNGGOL WAY",
                "SUMANG LINK",
                "SENTUL CRESCENT",
                "PUNGGOL ROAD",
                "PUNGGOL CENTRAL",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    851: {
        front: {
            renderType: "standardService",
            serviceNumber: "85",
            destination: {
                text: "YISHUN",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "85",
                    top: "YISHUN",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "85",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PUNGGOL PLACE",
                "PUNGGOL CENTRAL",
                "PUNGGOL EAST",
                "SENGKANG EAST DRIVE",
                "SENGKANG EST/WST WAY",
                "JALAN KAYU",
                "SLE",
                "LENTOR AVE",
                "YISHUN AVE 2",
                "YISHUN CTRL"
            ],
            scrollFont: "LECIP-8"
        }
    },
    852: {
        front: {
            renderType: "standardService",
            serviceNumber: "85",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "85",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "85",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "YISHUN CTRL",
                "YISHUN AVE 2",
                "LENTOR AVE",
                "SLE",
                "JALAN KAYU",
                "SENGKANG WST/EST WAY",
                "SENGKANG EAST RD",
                "COMPASSVALE DR",
                "RIVERVALE DR",
                "SENGKANG EAST DR",
                "PUNGGOL EAST",
                "PUNGGOL CENTRAL",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    1181: {
        front: {
            renderType: "standardService",
            serviceNumber: "118",
            destination: {
                text: "CHANGI BIZ PARK",
                font: "Mobitec-13:7"
            },
            scrolls: [
                " ",
                "PUNGGOL PLACE",
                " ",
                "PUNGGOL CENTRAL",
                " ",
                "PUNGGOL WAY",
                " ",
                "TAMPINES EXPRESSWAY",
                " ",
                "TAMPINES AVE 10/5/8/1",
                " ",
                "SIMEI AVE",
                " ",
                "XILIN AVE",
                " ",
                "CHANGI SOUTH AVE 1/2",
                " ",
                "CHANGI BIZ PK CTRL 1",
                " ",
                "CHANGI SOUTH AVE 1"
            ],
            scrollFont: "LECIP-8"
        }
    },
    1182: {
        front: {
            renderType: "standardService",
            serviceNumber: "118",
            destination: {
                text: "PUNGGOL",
                font: "LECIP-11"
            },
            scrolls: [
                " ",
                "CHANGI SOUTH AVE 1",
                " ",
                "CHANGI BIZ PARK CTRL 1",
                " ",
                "CHANGI SOUTH AVE 2",
                " ",
                "XILIN AVE",
                " ",
                "SIMEI AVE",
                " ",
                "TAMPINES AVE 1/8/5/10",
                " ",
                "TAMPINES EXPRESSWAY",
                " ",
                "PUNGGOL WAY",
                " ",
                "PUNGGOL CENTRAL",
                " ",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    1183: {
        front: {
            renderType: "standardService",
            serviceNumber: "118A",
            destination: {
                text: "ITE COLL EAST",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118A",
                    top: "ENDS AT",
                    bottom: "ITE COLLEGE EAST",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "TAMPINES EXPRESSWAY",
                "TAMPINES AVE 10/5/8/1",
                "SIMEI AVE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    1184: {
        front: {
            renderType: "standardService",
            serviceNumber: "118B",
            destination: {
                text: "BEF PUNGGOL RD",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118B",
                    top: "ENDS AT",
                    bottom: "BEF PUNGGOL RD",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "118B",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "SIMEI AVE",
                "TAMPINES AVE 1/8/5/10",
                "TAMPINES EXPRESSWAY"
            ],
            scrollFont: "LECIP-8"
        }
    },
    1191: {
        front: {
            renderType: "standardService",
            serviceNumber: "119",
            destination: {
                text: "KOVAN",
                font: "LECIP-11"
            },
            scrolls: [
                " ",
                "PUNGGOL PLACE",
                " ",
                "PUNGGOL FIELD",
                " ",
                "PUNGGOL WAY",
                " ",
                "SENGKANG EAST RD",
                " ",
                "SENGKANG EAST WAY",
                " ",
                "RIVERVALE DRIVE",
                " ",
                "SENGKANG EAST AVE",
                " ",
                "PUNGGOL ROAD",
                " ",
                "HOUGANG AVE 10/8",
                " ",
                "UPP SERANGOON ROAD",
                " ",
                "HOUGANG STREET 21"
            ],
            scrollFont: "LECIP-8"
        }
    },
    1192: {
        front: {
            renderType: "standardService",
            serviceNumber: "119",
            destination: {
                text: "PUNGGOL",
                font: "LECIP-11"
            },
            scrolls: [
                " ",
                "UPP SERANGOON ROAD",
                " ",
                "HOUGANG AVE 8/10",
                " ",
                "PUNGGOL ROAD",
                " ",
                "SENGKANG EAST AVE",
                " ",
                "RIVERVALE DRIVE",
                " ",
                "SENGKANG EAST WAY",
                " ",
                "SENGKANG EAST ROAD",
                " ",
                "PUNGGOL WAY",
                " ",
                "PUNGGOL FIELD",
                " ",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    1361: {
        front: {
            renderType: "standardService",
            serviceNumber: "136",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "136",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "136",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "ANG MO KIO AVE 8/3/6/1",
                "LORONG CHUAN",
                "SERANGOOM GDN WAY",
                "YIO CHU KANG ROAD",
                "UPP SERANGOON ROAD",
                "RIVERVALE ROAD",
                "SENGKANG EAST WAY",
                "PUNGGOL ROAD",
                "PUNGGOL FIELD",
                "EDGEFIELD PLAINS",
                "PUNGGOL CENTRAL",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    1362: {
        front: {
            renderType: "standardService",
            serviceNumber: "136",
            destination: {
                text: "ANG MO KIO",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "136",
                    top: "ANG MO KIO",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "136",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PUNGGOL PLACE",
                "PUNGGOL CENTRAL",
                "EDGEFIELD PLAINS",
                "PUNGGOL FIELD",
                "PUNGGOL ROAD",
                "SENGKANG EAST WAY",
                "RIVERVALE DRIVE",
                "UPP SERANGOON ROAD",
                "YIO CHU KANG ROAD",
                "SERANGOON GDN WAY",
                "LORONG CHUAN",
                "ANG MO KIO AVE 1/6/3/8"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3811: {
        front: {
            renderType: "standardService",
            serviceNumber: "381",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "381",
                    top: "PUNGGOL INT",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "381",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PUNGGOL PLACE",
                "PUNGGOL FIELD",
                "PUNGGOL WAY",
                "EDGEFIELD PLAINS",
                "PUNGGOL FIELD",
                "PUNGGOL EAST"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3821: {
        front: {
            renderType: "standardService",
            serviceNumber: "382G",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "382G",
                    top: "PUNGGOL INT",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "382G",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PUNGGOL PLACE",
                "PUNGGOL FIELD",
                "SUMANG CRESCENT",
                "SUMANG LANE",
                "SUMANG WALK",
                "SUMANG LINK",
                "SENTUL CRESCENT",
                "PUNGGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3822: {
        front: {
            renderType: "standardService",
            serviceNumber: "382W",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "382W",
                    top: "PUNGGOL INT",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "382W",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PUNGGOL PLACE",
                "SENTUL CRESCENT",
                "SUMANG LINK",
                "SUMANG WALK",
                "SUMANG LANE",
                "SUMANG CRESCENT",
                "PUNGGOL FIELD",
                "PUNNGOL PLACE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3541: {
        front: {
            renderType: "standardService",
            serviceNumber: "354",
            destination: {
                text: "JLN LOYANG BR",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "354",
                    top: "JLN LOYANG BR",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "354",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 3"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3542: {
        front: {
            renderType: "standardService",
            serviceNumber: "354",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "354",
                    top: "PASIR RIS INT",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "354",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PASIR RIS CL",
                "PASIR RIS DR 3"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3581: {
        front: {
            renderType: "standardService",
            serviceNumber: "358",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "358",
                    top: "PASIR RIS INT",
                    bottom: "(WEST LOOP)",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "358",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 3/1",
                "PASIR RIS DR 10 (LOOP)",
                "ELIAS RD"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3582: {
        front: {
            renderType: "standardService",
            serviceNumber: "358",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "358",
                    top: "PASIR RIS INT",
                    bottom: "(EAST LOOP)",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "358",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 6/1",
                "PASIR RIS DR 4 (LOOP)",
                "PASIR RIS ST 41",
                "PASIR RIS DR 6/3"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3591: {
        front: {
            renderType: "standardService",
            serviceNumber: "359",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "359",
                    top: "PASIR RIS INT",
                    bottom: "(WEST LOOP)",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "359",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 3/12/1/10",
                "PASIR RIS ST 71 (LOOP)",
                "PASIR RIS 12/3"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3592: {
        front: {
            renderType: "standardService",
            serviceNumber: "359",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "359",
                    top: "PASIR RIS INT",
                    bottom: "(EAST LOOP)",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "359",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PASIR RIS CTRL",
                "PASIR RIS ST 51/11",
                "PASIR RIS DR 1/3"
            ],
            scrollFont: "LECIP-8"
        }
    },
    4031: {
        front: {
            renderType: "standardService",
            serviceNumber: "403",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "403",
                    top: "PASIR RIS INT",
                    bottom: "PSR PARK(LOOP)",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "403",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 3/1",
                "PASIR RIS CTRL",
                "ELIAS RD",
                "PASIR RIS RD(LOOP)",
                "ELIAS RD",
                "PASIR RIS CTRL",
                "PASIR RIS 1/3"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3841: {
        front: {
            renderType: "standardService",
            serviceNumber: "384",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "384",
                    top: "PUNGGOL INT",
                    topFont: "Mobitec-13:7"
                },
                "PUNGGOL PL",
                "PUNGGOL CTRL",
                "PUNGGOL WAY",
                "NORTHSHORE DRIVE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    3861: {
        front: {
            renderType: "standardService",
            serviceNumber: "386",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "386",
                    top: "PUNGGOL INT",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "386",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PUNGGOL PL",
                "PUNGGOL CTRL",
                "EDGEFIELD PLAINS",
                "PUNGGOL DR",
                "EDGEDALE PLAINS",
                "PUNGGOL FIELD",
                "PUNGGOL EAST",
                "PUNGGOL CTRL",
                "EDGEDALE PLAINS",
                "PUNGGOL DR",
                "EDGEFIELD PLAINS",
                "PUNGGOL CTRL",
                "PUNGGOL PL"
            ],
            scrollFont: "LECIP-8"
        }
    },
    5181: {
        front: {
            renderType: "standardService",
            serviceNumber: "518",
            destination: {
                text: "BAYFRONT AVE",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518",
                    top: "EXPRESSBAYFRONT",
                    bottom: "Service     AVE    ",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "518",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                 },
                "PASIR RIS DR 3/12/1",
                "LOYANG AVE",
                "TAMPINES AVE 7/2/1",
                "BEDOK NORTH MRT/RD",
                "PIE, CTE",
                "MOULMEIN ROAD",
                "NEWTON ROAD",
                "SCOTTS ROAD",
                "ORCHARD ROAD",
                "BRASH BASAH ROAD",
                "TEMASEK BLVD, AVE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    5182: {
        front: {
            renderType: "standardService",
            serviceNumber: "518",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518",
                    top: "EXPRESS PASIR RIS",
                    bottom: "Service      INT    ",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "518",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                 },
                "ECP, KPE, PIE",
                "BEDOK NORTH ROAD",
                "TAMPINES AVE 1/2/7",
                "LOYANG AVE",
                "PASIR RIS DR 1/12/3"
            ],
            scrollFont: "LECIP-8"
        }
    },
    5183: {
        front: {
            renderType: "standardService",
            serviceNumber: "518A",
            destination: {
                text: "BAYFRONT AVE",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518A",
                    top: "ENDS AT",
                    bottom: "BAYFRONT AVE",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "518A",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 3/12/1",
                "LOYANG AVE",
                "PIE, CTE",
                "MOULMEIN ROAD",
                "NEWTON ROAD",
                "SCOTTS ROAD",
                "ORCHARD ROAD",
                "BRASH BASAH ROAD",
                "TEMASEK BLVD, AVE"
            ],
            scrollFont: "LECIP-8"
        }
    },
    6611: { //following gorbit for now
        front: {
            renderType: "standardService",
            serviceNumber: "661",
            destination: {
                text: "CITY DIRECT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "661",
                    top: "CITY DIRECT        ",
                    topFont: "Mobitec-10:7"
                },
            ],
            scrollFont: "LECIP-8"
        }
    },
    6661: { //following gorbit for now
        front: {
            renderType: "standardService",
            serviceNumber: "666",
            destination: {
                text: "CITY DIRECT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "666",
                    top: "CITY DIRECT       ",
                    topFont: "Mobitec-10:7"
                },
            ],
            scrollFont: "LECIP-8"
        }
    },
    6261: {
        front: {
            renderType: "standardService",
            serviceNumber: "6264",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "WELCOME ABOARD PC6264K!",
                    bottom: "SHOW YOUR TICKETS TO OUR STAFF",
                    topFont: "LECIP-8",
                    bottomFont: "LECIP-8"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "6264",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                 {
                	renderType: "destScroll",
                    serviceNumber: "",
                    top: "ROUTE DETAILS NOT CONFIRMED",
                    bottom: "SORRY FOR THE INCONVENIENCE!",
                    topFont: "LECIP-8",
                    bottomFont: "LECIP-8"
                 },
            ],
            scrollFont: "LECIP-8"
        }
    },
    6262: {
        front: {
            renderType: "standardService",
            serviceNumber: "6264",
            destination: {
                text: "BUS DEPOT",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "6264",
                    top: "Sorry!",
                    bottom: "Not In Service",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "6264",
                    top: "HAPPY",
                    bottom: "VALENTINE'S DAY",
                    topFont: "Mobitec-13:7",
                    bottomFont: "Mobitec-13:7"
                },
                 {
                	renderType: "destScroll",
                    serviceNumber: "",
                    top: "THANK YOU FOR TRAVELLING WITH US!",
                    bottom: "FOLLOW OUR INSTA (BUSGAG.SG)!",
                    topFont: "LECIP-8",
                    bottomFont: "LECIP-8"
                 },
                "BUSGAG ADMINS ONLY",
                "CHARTERED",
                "BUS HEADING TO DEPOT"
            ],
            scrollFont: "LECIP-8"
        }
    },
    69: {
        front: {
            renderType: "destScroll",
            top: "CHARTERED",
            topFont: "Mobitec-13:7",

            bottom: "FOR 'busgag.sg'",
            bottomFont: "LECIP-8",

            serviceNumber: ""
        }
    },
    8251: {
        front: {
            renderType: "standardService",
            serviceNumber: "825",
            destination: {
                text: "LENTOR LOOP via",
                font: "LECIP-8"
            },
            scrolls: [
                "SEASONS PARK",
                "THOMSON GROVE",
                "CASTLE GREEN"
            ],
            scrollFont: "LECIP-8"
        }
    },
    8541: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: {
                text: "BEDOK via",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "BEDOK",
                    topFont: "Mobitec-13:7"
                },
                "JLN EUNOS, MRT",
                "HOUGANG AVE 3",
                "HOUGANG AVE 2",
                "YIO CHU KANG RD",
                "TO BE COMPLETED"
            ],
            scrollFont: "LECIP-8"
        }
    },
    8542: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: {
                text: "YISHUN via",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "YISHUN",
                    topFont: "Mobitec-13:7"
                },
                "HOUGANG AVE 2",
                "HOUGANG AVE 3",
                "JLN EUNOS",
                "P I E",
                "TO BE COMPLETED"
            ],
            scrollFont: "LECIP-8"
        }
    },
    901: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "GA RIDE 01",
                font: "Mobitec-13:7"
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

EDSExtras.GASG = { 
    1: {
        front: {
            renderType: "destScroll",
            top: "MERRY CHRISTMAS",
            topFont: "Mobitec-13:7",

            bottom: "HAPPY NEW YEAR",
            bottomFont: "Mobitec-13:7",

            serviceNumber: ""
        }
    },
    2: {
        front: {
            renderType: "destScroll",
            top: "SALAMAT HARI RAYA",
            topFont: "Mobitec-13:7",

            bottom: "ALDERIFTI",
            bottomFont: "Mobitec-13:7",

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
            topFont: "LECIP-8",

            bottom: "Please Do Not Board The Bus",
            bottomFont: "LECIP-8",

            serviceNumber: ""
        }
    },
    7: {
        front: {
            renderType: "destScroll",
            top: "Welcome Aboard",
            topFont: "Mobitec-13:7",

            bottom: "Go-Ahead Singapore",
            bottomFont: "Mobitec-13:7",

            serviceNumber: ""
        }
    },
    8: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Welcome Aboard V2",
                font: "Mobitec-13:7"
            },
            scrolls: [
                {
                    renderType: "gar-logo",
                    serviceNumber: "",
                    top: "        Welcome Aboard",
                    bottom: "     Go-Ahead Singapore"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    }
}

EDSImages.GASG = {
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
