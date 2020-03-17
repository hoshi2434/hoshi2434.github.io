EDSFormats.SMRT = {
    'gas-temp-kindness': {
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
            image: "gas-temp-flower"
        },
        displayText: {
            $$group: {
                centreTopText: {
                    align: "centre-x,top",
                    text: "$top",
                    font: "Hanover-7:3",
                    spacing: 1
                },
                centreBottomText: {
                    align: "centre-x,bottom",
                    text: "$bottom",
                    font: "Hanover-7:3",
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
            image: "gas-temp-flower"
        },
        text: "Kindness is Greater; Be Greater"
    },

    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
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
            text: "$destination.text+' via'",
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
    destScroll: {
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
}

EDSData.SMRT = {
    "-1": {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "gas-temp-kindness",
                    serviceNumber: "43M",
                    top: "Happy Kindness Day",
                    bottom: "24 May 2019"
                },
                {
                    renderType: "gas-temp-kindness",
                    serviceNumber: "43M",
                    top: "Greatness is Kindness",
                    bottom: "Be Greater"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1: {
        front: {
            renderType: "message",
            text: "CHARTERED",
            font: "Mobitec-16:8",
            spacing: 2
        }
    },
    2: {
        front: {
            renderType: "message",
            text: "ANG MO KIO DEPOT",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    3: {
        front: {
            renderType: "message",
            text: "KRANJI DEPOT",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    4: {
        front: {
            renderType: "message",
            text: "SMRT BUSES",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    5: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    6: {
        front: {
            renderType: "message",
            text: "WOODLANDS DEPOT",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    7: {
        front: {
            renderType: "message",
            text: "OUT OF SERVICE",
            font: "Mobitec-13:7",
            spacing: 2
        }
    },
    8: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    9: {
        front: {
            renderType: "message",
            text: "ON DRIVING TEST",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    10: {
        front: {
            renderType: "message",
            text: "FERRY SERVICE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    11: {
        front: {
            renderType: "message",
            text: "MRT SHUTTLE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    12: {
        front: {
            renderType: "message",
            text: "ELECTRIC BUS",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    13: {
        front: {
            renderType: "message",
            text: "TRAINING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    14: {
        front: {
            renderType: "message",
            text: "MoBi 240419",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    16: {
        front: {
            renderType: "message",
            text: "PULAU TEKONG",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    18: {
        front: {
            renderType: "message",
            text: "LRT SHUTTLE A",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    19: {
        front: {
            renderType: "message",
            text: "LRT SHUTTLE B",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    21: {
        front: {
            renderType: "message",
            text: "WT 1",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    22: {
        front: {
            renderType: "message",
            text: "WT 2",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    23: {
        front: {
            renderType: "message",
            text: "WT 3",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    24: {
        front: {
            renderType: "message",
            text: "WT 4",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    25: {
        front: {
            renderType: "message",
            text: "WT 5",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    26: {
        front: {
            renderType: "message",
            text: "WT 6",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    27: {
        front: {
            renderType: "message",
            text: "WT 7",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    28: {
        front: {
            renderType: "message",
            text: "WT 8",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    29: {
        front: {
            renderType: "message",
            text: "WT 9",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    30: {
        front: {
            renderType: "message",
            text: "WT 10",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    31: {
        front: {
            renderType: "message",
            text: "WT 11",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    32: {
        front: {
            renderType: "message",
            text: "WT 12",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    33: {
        front: {
            renderType: "message",
            text: "WT 13",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    34: {
        front: {
            renderType: "message",
            text: "WT 14",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    35: {
        front: {
            renderType: "message",
            text: "WT 15",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    36: {
        front: {
            renderType: "message",
            text: "WT 16",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    37: {
        front: {
            renderType: "message",
            text: "WT 17",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    38: {
        front: {
            renderType: "message",
            text: "WT 18",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    39: {
        front: {
            renderType: "message",
            text: "WT 19",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    40: {
        front: {
            renderType: "message",
            text: "WT 20",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    41: {
        front: {
            renderType: "message",
            text: "WT 21",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    42: {
        front: {
            renderType: "message",
            text: "LRT A",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    43: {
        front: {
            renderType: "message",
            text: "LRT B",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    44: {
        front: {
            renderType: "message",
            text: "WT 22",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    45: {
        front: {
            renderType: "message",
            text: "WT 23",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    46: {
        front: {
            renderType: "destScroll",
            top: "RESORTS WORLD",
            topFont: "Mobitec-7:7",

            bottom: "SENTOSA",
            bottomFont: "Mobitec-7:7",
            serviceNumber: "NR6"
        }
    },
    47: {
        front: {
            renderType: "destScroll",
            top: "RESORTS WORLD",
            topFont: "Mobitec-7:7",

            bottom: "SENTOSA",
            bottomFont: "Mobitec-7:7",
            serviceNumber: "NR1"
        }
    },
    48: {
        front: {
            renderType: "destScroll",
            top: "YISHUN",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR1"
        }
    },
    49: {
        front: {
            renderType: "destScroll",
            top: "HARBOUR FRONT",
            topFont: "Mobitec-7:7",

            bottom: "INTERCHANGE",
            bottomFont: "Mobitec-7:7",

            serviceNumber: "NR6"
        }
    },
    50: {
        front: {
            renderType: "destScroll",
            top: "HARBOUR FRONT",
            topFont: "Mobitec-7:7",

            bottom: "INTERCHANGE",
            bottomFont: "Mobitec-7:7",

            serviceNumber: "NR1"
        }
    },
    51: {
        front: {
            renderType: "destScroll",
            top: "SUNTEC CITY",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR1"
        }
    },
    52: {
        front: {
            renderType: "destScroll",
            top: "YISHUN",
            topFont: "Mobitec-7:7",

            bottom: "INTERCHANGE",
            bottomFont: "Mobitec-7:7",

            serviceNumber: "NR1"
        }
    },
    53: {
        front: {
            renderType: "destScroll",
            top: "MARINA CENTRE",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR2"
        }
    },
    54: {
        front: {
            renderType: "destScroll",
            top: "SEMBAWANG",
            topFont: "Mobitec-13:8",

            serviceNumber: "NR2"
        }
    },
    55: {
        front: {
            renderType: "destScroll",
            top: "BOAT QUAY",
            topFont: "Mobitec-13:8",

            serviceNumber: "NR3"
        }
    },
    56: {
        front: {
            renderType: "destScroll",
            top: "CHOA CHU KANG",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR3"
        }
    },
    57: {
        front: {
            renderType: "destScroll",
            top: "JURONG WEST",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR5"
        }
    },
    58: {
        front: {
            renderType: "destScroll",
            top: "WHAMPOA",
            topFont: "Mobitec-13:8",

            serviceNumber: "NR5"
        }
    },
    59: {
        front: {
            renderType: "destScroll",
            top: "SENGKANG",
            topFont: "Mobitec-13:8",

            serviceNumber: "NR6"
        }
    },
    60: {
        front: {
            renderType: "destScroll",
            top: "MARINA CENTRE",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR6"
        }
    },
    61: {
        front: {
            renderType: "destScroll",
            top: "PASIR RIS",
            topFont: "Mobitec-13:8",

            serviceNumber: "NR7"
        }
    },
    62: {
        front: {
            renderType: "destScroll",
            top: "MARINA CENTRE",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR7"
        }
    },
    66: {
        front: {
            renderType: "message",
            text: "BULIM  DEPOT",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    67: {
        front: {
            renderType: "message",
            text: "WT 24",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    68: {
        front: {
            renderType: "message",
            text: "WT 25",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    69: {
        front: {
            renderType: "message",
            text: "WT 26",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    70: {
        front: {
            renderType: "message",
            text: "WT 27",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    72: {
        front: {
            renderType: "message",
            text: "HAPPY MAY DAY",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    75: {
        front: {
            renderType: "destScroll",
            top: "JURONG WEST",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR5"
        }
    },
    76: {
        front: {
            renderType: "destScroll",
            top: "MARINA CENTRE",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR5"
        }
    },
    77: {
        front: {
            renderType: "destScroll",
            top: "BUKIT BATOK",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR8"
        }
    },
    78: {
        front: {
            renderType: "destScroll",
            top: "MARINA CENTRE",
            topFont: "Mobitec-13:7",

            serviceNumber: "NR8"
        }
    },
    81: {
        front: {
            renderType: "destScroll",
            top: "WELCOME TO IKEA",
            topFont: "Mobitec-7:7",

            bottom: "IKEA    -   TAMPINES",
            bottomFont: "Mobitec-7:5:3",

            serviceNumber: ""
        }
    },
    82: {
        front: {
            renderType: "destScroll",
            top: "WELCOME TO IKEA",
            topFont: "Mobitec-7:7",

            bottom: "IKEA  -  SENGKANG",
            bottomFont: "Mobitec-7:5:3",

            serviceNumber: ""
        }
    },
    83: {
        front: {
            renderType: "destScroll",
            top: "WELCOME TO IKEA",
            topFont: "Mobitec-7:7",

            bottom: "IKEA    -     ANG MO KIO",
            bottomFont: "Mobitec-7:5:3",

            serviceNumber: ""
        }
    },
    84: {
        front: {
            renderType: "destScroll",
            top: "WELCOME TO IKEA",
            topFont: "Mobitec-7:7",

            bottom: "IKEA  -  WOODLANDS",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    85: {
        front: {
            renderType: "destScroll",
            top: "WELCOME TO IKEA",
            topFont: "Mobitec-7:7",

            bottom: "IKEA  -  BOON LAY",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    86: {
        front: {
            renderType: "destScroll",
            top: "WELCOME TO IKEA",
            topFont: "Mobitec-7:7",

            bottom: "IKEA  -  YISHUN",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    89: {
        front: {
            renderType: "destScroll",
            top: "DOWNTOWN EAST   -  PASIR RIS",
            topFont: "Mobitec-7:4",

            bottom: "CARPARKS C, D, E, F",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    91: {
        front: {
            renderType: "destScroll",
            top: "BEDOK MRT TO & FROM",
            topFont: "Mobitec-7:5:3",

            bottom: "GIANT, IKEA & COURTS",
            bottomFont: "Mobitec-7:5:3",

            serviceNumber: ""
        }
    },
    92: {
        front: {
            renderType: "destScroll",
            top: "TAMPINES MRT TO & FROM",
            topFont: "Mobitec-7:5:3",

            bottom: "GIANT, IKEA & COURTS",
            bottomFont: "Mobitec-7:5:3",

            serviceNumber: ""
        }
    },
    98: {
        front: {
            renderType: "destScroll",
            top: "SENGKANG & PUNGGOL -",
            topFont: "Mobitec-7:5:3",

            bottom: "GIANT, IKEA & COURTS",
            bottomFont: "Mobitec-7:5:3",

            serviceNumber: ""
        }
    },
    101: {
        front: {
            renderType: "destScroll",
            top: "FREE CHINATOWN",
            topFont: "Mobitec-7:7",

            bottom: "SHUTTLE SERVICE",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    106: {
        front: {
            renderType: "message",
            text: "NGEE ANN POLY",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    113: {
        front: {
            renderType: "message",
            text: "AIRSHOW SHUTTLE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    114: {
        front: {
            renderType: "destScroll",
            top: "JOO KOON - BUKIT GOMBAK",
            topFont: "Mobitec-7:5:3",

            bottom: "PARALLEL BUS SERVICE",
            bottomFont: "Mobitec-7:5:3",

            serviceNumber: ""
        }
    },
    115: {
        front: {
            renderType: "destScroll",
            top: "BUKIT GOMBAK - JOO KOON",
            topFont: "Mobitec-7:5:3",

            bottom: "PARALLEL BUS SERVICE",
            bottomFont: "Mobitec-7:5:3",

            serviceNumber: ""
        }
    },
    117: {
        front: {
            renderType: "logo",
            image: "logo",
            text: "SMRT LOGO"
        }
    },
    118: {
        front: {
            renderType: "message",
            text: "SMRT FLY OUR FLAG",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    119: {
        front: {
            renderType: "message",
            text: "SMRT",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    141: {
        front: {
            renderType: "destScroll",
            top: "FREE SMRT CHINATOWN",
            topFont: "Mobitec-7:7",

            bottom: "SHUTTLE BUS SERVICE",
            bottomFont: "Mobitec-7:7",
            serviceNumber: ""
        }
    },
    142: {
        front: {
            renderType: "message",
            text: "THANK YOU EXSA WINNERS",
            font: "Mobitec-7:5:3",
            spacing: 1
        }
    },
    150: {
        front: {
            renderType: "message",
            text: "FREE SHUTTLE",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    151: {
        front: {
            renderType: "message",
            text: "FREE BRIDGING BUS",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    152: {
        front: {
            renderType: "message",
            text: "LRT BRIDGING A",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    153: {
        front: {
            renderType: "message",
            text: "LRT BRIDGING B",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    155: {
        front: {
            renderType: "message",
            text: "FREE SHUTTLE BUS",
            font: "Mobitec-13:7",
            spacing: 1
        }
    },
    199: {
        front: {
            renderType: "message",
            text: "ON TEST",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    200: {
        front: {
            renderType: "standardService",
            serviceNumber: "804",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "804",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 2",
                "YISHUN RING RD",
                "YISHUN AVE 1, 11",
                "YISHUN RING RD",
                "YISHUN AVE 2"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    203: {
        front: {
            renderType: "standardService",
            serviceNumber: "800",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "800",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 3",
                "YISHUN AVE 9",
                "YISHUN RING RD",
                "YISHUN AVE 2, 7",
                "SEMBAWANG RD",
                "YISHUN ST 71",
                "YISHUN AVE 9"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    204: {
        front: {
            renderType: "standardService",
            serviceNumber: "806",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "806",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 11",
                "YISHUN AVE 6",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    206: {
        front: {
            renderType: "standardService",
            serviceNumber: "811",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "811",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 9, 6, 7",
                {
                    text: "SEMBAWANG RD ",
                    font: "Mobitec-7:7"
                },
                "YISHUN AVE 5, 2, 7",
                "YISHUN AVE 6, 9, 2",
                "YISHUN RING RD",
                "YISHUN ST 81",
                "YISHUN AVE 1",
                "YISHUN AVE 4",
                "YISHUN RING RD",
                "YISHUN AVE 2"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    207: {
        front: {
            renderType: "destScroll",
            serviceNumber: "811E",
            top: "ENDS AT",
            bottom: "YISHUN INT/MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    208: {
        front: {
            renderType: "standardService",
            serviceNumber: "812",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "812",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN CENTRAL",
                "YISHUN ST 61",
                "YISHUN AVE 4"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    209: {
        front: {
            renderType: "destScroll",
            serviceNumber: "812E",
            top: "ENDS AT",
            bottom: "YISHUN INT / MRT",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    210: {
        front: {
            renderType: "standardService",
            serviceNumber: "900",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "900",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7",
                "WDL AVENUE 4",
                "WDL DRIVE 14",
                "WDL AVENUE 4 ",
                "WDL AVENUE 7 "
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    213: {
        front: {
            renderType: "destScroll",
            serviceNumber: "911E",
            top: "ENDS AT",
            bottom: "WDL INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    215: {
        front: {
            renderType: "destScroll",
            serviceNumber: "912E",
            top: "ENDS AT",
            bottom: "WDL INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    217: {
        front: {
            renderType: "destScroll",
            serviceNumber: "913E",
            top: "ENDS AT",
            bottom: "WDL INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    218: {
        front: {
            renderType: "standardService",
            serviceNumber: "300",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "300",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG AVE 4",
                "CHOA CHU KANG AVE 2",
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    219: {
        front: {
            renderType: "standardService",
            serviceNumber: "302",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "302",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG ST 52",
                "CHOA CHU KANG CRES"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    221: {
        front: {
            renderType: "destScroll",
            serviceNumber: "307E",
            top: "ENDS AT",
            bottom: "C.C.K INT/MRT/LRT",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    222: {
        front: {
            renderType: "standardService",
            serviceNumber: "307",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "307",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG CENTRAL",
                {
                    text: "TECK WHYE LANE",
                    font: "Mobitec-7:5:3"
                },
                "CHOA CHU KANG CENTRAL",
                "CHOA CHU KANG AVE 4",
                "CHOA CHU KANG NORTH 5",
                "CHOA CHU KANG NORTH 6",
                {
                    text: "YEW TEE MRT",
                    font: "Mobitec-7:7"
                },
                "CHOA CHU KANG ST 62"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    224: {
        front: {
            renderType: "destScroll",
            serviceNumber: "811",
            top: "ENDS AT",
            bottom: "YISHUN ITE",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    225: {
        front: {
            renderType: "standardService",
            serviceNumber: "901",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "901",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 2,1",
                "WOODLANDS DRIVE 16",
                "WOODLANDS AVE 6"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    229: {
        front: {
            renderType: "destScroll",
            serviceNumber: "67A",
            top: "ENDS AT",
            bottom: "HWA CHONG JC",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    230: {
        front: {
            renderType: "destScroll",
            serviceNumber: "67W",
            top: "ENDS AT",
            bottom: " LITTLE INDIA",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    231: {
        front: {
            renderType: "destScroll",
            serviceNumber: "77A",
            top: "ENDS AT  TOH TUCK ROAD",
            bottom: "BUKIT BATOK SEC SCH",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        }
    },
    232: {
        front: {
            renderType: "destScroll",
            serviceNumber: "169A",
            top: "ENDS AT",
            bottom: "YISHUN INT/MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    233: {
        front: {
            renderType: "destScroll",
            serviceNumber: "965A",
            top: "ENDS AT",
            bottom: "YISHUN INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    234: {
        front: {
            renderType: "destScroll",
            serviceNumber: "858A",
            top: "ENDS AT",
            bottom: "YISHUN MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    235: {
        front: {
            renderType: "destScroll",
            serviceNumber: "964A",
            top: "ENDS AT",
            bottom: "WOODLANDS LINK",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    236: {
        front: {
            renderType: "destScroll",
            serviceNumber: "106A",
            top: "ENDS AT",
            bottom: "CLEMENTI MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    237: {
        front: {
            renderType: "destScroll",
            serviceNumber: "173A",
            top: "ENDS AT",
            bottom: "CLEMENTI INT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    238: {
        front: {
            renderType: "destScroll",
            serviceNumber: "173K",
            top: "ENDS AT",
            bottom: "CANADIAN INT'L SCHOOL",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        }
    },
    239: {
        front: {
            renderType: "destScroll",
            serviceNumber: "189A",
            top: "ENDS AT",
            bottom: "BT BATOK ST 23",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    242: {
        front: {
            renderType: "destScroll",
            serviceNumber: "962A",
            top: "ENDS AT",
            bottom: "SEMBAWANG DRIVE",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    244: {
        front: {
            renderType: "destScroll",
            serviceNumber: "67C",
            top: "ENDS AT GEYLANG ROAD",
            bottom: "(BEFORE CITY PLAZA)",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        }
    },
    246: {
        front: {
            renderType: "destScroll",
            serviceNumber: "985A",
            top: "ENDS AT",
            bottom: "JLN JURONG KECHIL",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    247: {
        front: {
            renderType: "standardService",
            serviceNumber: "900A",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "900A",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7",
                "WDL AVENUE 4",
                "WDL DRIVE 14",
                "S'PORE SPORTS SCH",
                {
                    text: "INNOVA JC",
                    font: "Mobitec-7:7"
                },
                "WDL AVENUE 4",
                "WDL AVENUE 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    248: {
        front: {
            renderType: "destScroll",
            serviceNumber: "189A",
            top: "ENDS AT",
            bottom: "MIDVEW BUILDING",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    249: {
        front: {
            renderType: "standardService",
            serviceNumber: "858A",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858A",
                    top: "ENDS AT",
                    bottom: "YISHUN MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 4",
                "WDL AVENUE 9",
                "GAMBAS AVE",
                "WDL AVENUE 7",
                "SEMBAWANG WAY",
                "CANBERRA RD",
                "SEMBAWANG RD",
                "WDL AVENUE 5,2"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    250: {
        front: {
            renderType: "destScroll",
            serviceNumber: "188A",
            top: "ENDS AT",
            bottom: "ITE COLLEGE WEST",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    251: {
        front: {
            renderType: "standardService",
            serviceNumber: "106A",
            destination: {
                text: "CENTRAL BOULEVARD - BAYFRONT AVE (LOOP)",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106A",
                    top: "CENTRAL",
                    bottom: "BOULEVARD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106A",
                    top: "BAYFRONT AVE",
                    bottom: "(LOOP)",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    252: {
        front: {
            renderType: "standardService",
            serviceNumber: "903",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "903",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 2",
                "MARSILING RD, DR",
                "WDL CENTRE RD",
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                },
                "ADMIRALTY RD",
                "MARSILING DR, RD",
                "WOODLANDS AVE 2"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    253: {
        front: {
            renderType: "standardService",
            serviceNumber: "911",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "911",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7",
                "WOODLANDS ST 83",
                "WOODLANDS AVE 2",
                "WOODLANDS ST 13",
                "WDL TRAIN CHECKPOINT",
                "WOODLANDS ST 13"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    254: {
        front: {
            renderType: "standardService",
            serviceNumber: "912",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 5,2,1",
                "WOODLANDS ST 41",
                "WDL TRAIN CHECKPOINT",
                "WOODLANDS ST 41",
                "WOODLANDS DR 50",
                "WOODLANDS RING RD",
                "ADMIRALTY MRT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    255: {
        front: {
            renderType: "standardService",
            serviceNumber: "913",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "913",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7,6",
                "WOODLANDS DR 61",
                "WOODLANDS CIRCLE",
                "MARSILING RISE",
                "MARSILING RD",
                "WDL TRAIN CHECKPOINT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    256: {
        front: {
            renderType: "standardService",
            serviceNumber: "BPS1",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "BPS1",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "SEGAR RD",
                    font: "Mobitec-7:7"
                },
                "BT PANJANG RING RD",
                "SENJA RD",
                "CHOA CHU KANG AVE 4",
                "CHOA CHU KANG LOOP"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    257: {
        front: {
            renderType: "destScroll",
            serviceNumber: "177A",
            top: "ENDS AT",
            bottom: "JELEBU ROAD",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    258: {
        front: {
            renderType: "destScroll",
            serviceNumber: "180A",
            top: "ENDS AT",
            bottom: "BT PANJANG ROAD",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    259: {
        front: {
            renderType: "standardService",
            serviceNumber: "904",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "904",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7, 6",
                "WDL DRIVE 62, 73",
                {
                    text: "WDL CRESENT (LOOP)",
                    font: "Mobitec-7:4"
                },
                "WDL DRIVE 73, 62",
                "WDL AVENUE 6, 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    260: {
        front: {
            renderType: "destScroll",
            serviceNumber: "178A",
            top: "ENDS AT",
            bottom: "KRANJI MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    261: {
        front: {
            renderType: "destScroll",
            serviceNumber: "969A",
            top: "ENDS AT",
            bottom: "YISHUN INT/MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    263: {
        front: {
            renderType: "destScroll",
            serviceNumber: "962B",
            top: "ENDS AT",
            bottom: "SEMBAWANG DR",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    264: {
        front: {
            renderType: "destScroll",
            serviceNumber: "75A",
            top: "ENDS AT",
            bottom: "OPP SIM HQ",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    265: {
        front: {
            renderType: "destScroll",
            serviceNumber: "857A",
            top: "ENDS AT",
            bottom: "OPP SUNRISE GDNS",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    266: {
        front: {
            renderType: "destScroll",
            serviceNumber: "811A",
            top: "ENDS AT  YISHUN",
            bottom: "AVE 5, BLK 145",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    267: {
        front: {
            renderType: "destScroll",
            serviceNumber: "972A",
            top: "ENDS AT",
            bottom: "DHOBY GHAUT MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    268: {
        front: {
            renderType: "standardService",
            serviceNumber: "803",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "803",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN CTRL",
                "YISHUN AVE 9",
                "YISHUN RING RD",
                "YISHUN ST 31",
                "YISHUN AVE 6,9",
                "YISHUN CTRL",
                "YISHUN AVE 2"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    269: {
        front: {
            renderType: "destScroll",
            serviceNumber: "975A",
            top: "ENDS AT",
            bottom: "LOR RUSUK",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    270: {
        front: {
            renderType: "standardService",
            serviceNumber: "859B",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859B",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG CRES",
                "ADMIRALTY LINK",
                "CANBERRA ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    271: {
        front: {
            renderType: "destScroll",
            serviceNumber: "882A",
            top: "ENDS AT",
            bottom: "MONTREAL LINK",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    272: {
        front: {
            renderType: "destScroll",
            serviceNumber: "302A",
            top: "ENDS AT",
            bottom: "OPP YEW TEE MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    277: {
        front: {
            renderType: "standardService",
            serviceNumber: "803",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "803",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 9",
                "YISHUN RING RD",
                "YISHUN ST 31",
                "YISHUN AVE 6,9"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    278: {
        front: {
            renderType: "standardService",
            serviceNumber: "812",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "812",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN CENTRAL",
                "YISHUN ST 61",
                "YISHUN AVE 4",
                "YISHUN AVE 2",
                "YISHUN RING RD",
                "KHATIB MRT, AVE 3",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    279: {
        front: {
            renderType: "standardService",
            serviceNumber: "301",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "301",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "C C K WAY",
                    font: "Mobitec-7:7"
                },
                "C.C.K AVE 2,3",
                "C.C.K AVE 5,6",
                "C.C.K AVENUE 1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    280: {
        front: {
            renderType: "standardService",
            serviceNumber: "983",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "983",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C C K AVENUE 4",
                "C.C.K AVE 5 (LOOP)"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    281: {
        front: {
            renderType: "destScroll",
            serviceNumber: "860A",
            top: "ENDS AT",
            bottom: "KHATIB MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    282: {
        front: {
            renderType: "standardService",
            serviceNumber: "BPS1",
            destination: {
                text: "SEGAR RD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "BPS1",
                    top: "ENDS SEGAR RD",
                    bottom: "BEF BLK 484",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "C.C.K AVE 4",
                "SENJA RD",
                "BT PANJANG RING RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    283: {
        front: {
            renderType: "standardService",
            serviceNumber: "920",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "920",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "PETIR / JELEBU RD",
                "SENJAR RD / LINK",
                "JELAPANG RD",
                "SAUJANA RD",
                "FAJAR ROAD",
                "BT PANJANG RING RD",
                "BANGKIT RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    284: {
        front: {
            renderType: "standardService",
            serviceNumber: "922",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "922",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "PETIR / JELEBU RD",
                "JELAPANG ROAD",
                "SEGAR / FAJAR RD ",
                "BT PANJANG RING RD",
                "BANGKIT RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    285: {
        front: {
            renderType: "standardService",
            serviceNumber: "301",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "301",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "C. C. K WAY",
                    font: "Mobitec-7:7"
                },
                "C. C. K  AVE 2,3",
                "C. C. K  AVENUE 5",
                {
                    text: "KEAT HONG CLOSE (LOOP)",
                    font: "Mobitec-7:4"
                },
                "C. C. K  AVE 6,1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    286: {
        front: {
            renderType: "standardService",
            serviceNumber: "805",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "805",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 2",
                "YISHUN CTRL",
                {
                    text: "YISHUN AVE 4,1",
                    font: "Mobitec-7:5:3"
                },
                "YISHUN ST 41",
                {
                    text: "YISHUN RING RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    287: {
        front: {
            renderType: "destScroll",
            serviceNumber: "858B",
            top: "ENDS AT",
            bottom: "AFT SELETAR CAMP",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    288: {
        front: {
            renderType: "standardService",
            serviceNumber: "308",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "308",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C. C. K. AVENUE 4",
                "C. C. K.  DRIVE",
                "C. C. K. AVE 1, 7",
                "C. C. K.  GROVE",
                {
                    text: "KEAT HONG LINK (LOOP)",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    289: {
        front: {
            renderType: "destScroll",
            serviceNumber: "975B",
            top: "ENDS AT",
            bottom: "LIM CHU KANG LANE 3",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        }
    },
    290: {
        front: {
            renderType: "destScroll",
            serviceNumber: "962C",
            top: "ENDS AT  BLK 680",
            bottom: "WOODLANDS AVE 6",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    291: {
        front: {
            renderType: "standardService",
            serviceNumber: "912M",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912M",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "WLD AVE 1,2,5",
                "WDL ST 41 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    292: {
        front: {
            renderType: "destScroll",
            serviceNumber: "307A",
            top: "ENDS AT",
            bottom: "OPP C. C. K. MRT",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    293: {
        front: {
            renderType: "standardService",
            serviceNumber: "883",
            destination: {
                text: "SEMBAWANG INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "SEMBAWANG",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG DR",
                "SEMBAWANG WAY",
                "CANBERRA LINK",
                "SEMBAWANG RD",
                "CANBERRA ST",
                "CANBERRA WAY",
                "YISHUN AVE 2",
                "YISHUN CTRL 2 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    294: {
        front: {
            renderType: "standardService",
            serviceNumber: "912A",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912A",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVE 2,5",
                "WOODLANDS DR 50",
                "WOODLANDS RING RD",
                "ADMIRALTY MRT",
                "WDL AVE 7 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    295: {
        front: {
            renderType: "standardService",
            serviceNumber: "912B",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912B",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVE 5,2,1",
                "WDL STREET 41",
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                },
                "WDL CTR RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    296: {
        front: {
            renderType: "standardService",
            serviceNumber: "903M",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "903M",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 2",
                "MARSILING RD",
                "MARSILING LANE",
                {
                    text: "MARSILING DR (LOOP)",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    297: {
        front: {
            renderType: "standardService",
            serviceNumber: "973",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "973",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "BT PANJANG ROAD",
                "PENDING / PETIR RD",
                "DAIRY FARM ROAD",
                "HILLVIEW RD / AVE",
                "HUME AVE (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    359: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 6",
            topFont: "Mobitec-7:7",

            bottom: "TANAH MERAH - BUGIS",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    360: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 6",
            topFont: "Mobitec-7:7",

            bottom: "BUGIS - TANAH MERAH",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    373: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 10",
            topFont: "Mobitec-7:7",

            bottom: "ANG MO KIO - WOODLANDS",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    374: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 10",
            topFont: "Mobitec-7:7",

            bottom: "WOODLANDS - ANG MO KIO",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    375: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "EXPRESS 17",
            topFont: "Mobitec-7:7",

            bottom: "WOODLANDS-BUKIT PANJANG",
            bottomFont: "Mobitec-7:5:2"
        }
    },
    376: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "EXPRESS 17",
            topFont: "Mobitec-7:7",

            bottom: "BUKIT PANJANG-WOODLANDS",
            bottomFont: "Mobitec-7:5:2"
        }
    },
    377: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 9",
            topFont: "Mobitec-7:7",

            bottom: "YISHUN - NEWTON",
            bottomFont: "Mobitec-7:7"
        }
    },
    378: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 9",
            topFont: "Mobitec-7:7",

            bottom: "NEWTON - YISHUN",
            bottomFont: "Mobitec-7:7"
        }
    },
    379: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "EXPRESS 15",
            topFont: "Mobitec-7:7",

            bottom: "CLEMENTI - BEAUTY WORLD",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    380: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "EXPRESS 15",
            topFont: "Mobitec-7:7",

            bottom: "BEAUTY WORLD - CLEMENTI",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    381: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 2",
            topFont: "Mobitec-7:7",

            bottom: "JOO KOON - JURONG EAST",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    382: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 2",
            topFont: "Mobitec-7:7",

            bottom: "JURONG EAST - JOO KOON",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    383: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 4",
            topFont: "Mobitec-7:7",

            bottom: "CHOA CHU KANG - JURONG EAST",
            bottomFont: "Mobitec-7:4"
        }
    },
    384: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 4",
            topFont: "Mobitec-7:7",

            bottom: "JURONG EAST - CHOA CHU KANG",
            bottomFont: "Mobitec-7:4"
        }
    },
    385: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 7",
            topFont: "Mobitec-7:7",

            bottom: "PAYA LEBAR - PASIR RIS",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    386: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 7",
            topFont: "Mobitec-7:7",

            bottom: "PASIR RIS - PAYA LEBAR",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    387: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 8",
            topFont: "Mobitec-7:7",

            bottom: "TANAH MERAH - CHANGI AIRPORT",
            bottomFont: "Mobitec-7:4"
        }
    },
    388: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 8",
            topFont: "Mobitec-7:7",

            bottom: "CHANGI AIRPORT - TANAH MERAH",
            bottomFont: "Mobitec-7:4"
        }
    },
    389: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 11",
            topFont: "Mobitec-7:7",

            bottom: "ALJUNIED - MACHPERSON",
            bottomFont: "Mobitec-7:5:2"
        }
    },
    390: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 11",
            topFont: "Mobitec-7:7",

            bottom: "MACHPERSON - ALJUNIED",
            bottomFont: "Mobitec-7:5:2"
        }
    },
    391: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "EXPRESS 12",
            topFont: "Mobitec-7:7",

            bottom: "CHANGI AIRPORT T3 - BUGIS",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    392: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "EXPRESS 12",
            topFont: "Mobitec-7:7",

            bottom: "BUGIS - CHANGI AIRPORT T3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    393: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 2",
            topFont: "Mobitec-7:7",

            bottom: "JOO KOON - BUONA VISTA",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    394: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 2",
            topFont: "Mobitec-7:7",

            bottom: "BUONA VISTA - JOO KOON",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    395: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 3",
            topFont: "Mobitec-7:7",

            bottom: "JOO KOON - TUAS LINK",
            bottomFont: "Mobitec-7:7"
        }
    },
    396: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 3",
            topFont: "Mobitec-7:7",

            bottom: "TUAS LINK - JOO KOON",
            bottomFont: "Mobitec-7:7"
        }
    },
    397: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 1",
            topFont: "Mobitec-7:7",

            bottom: "BUONA VISTA - RAFFLES PLACE",
            bottomFont: "Mobitec-7:4"
        }
    },
    398: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SHUTTLE 1",
            topFont: "Mobitec-7:7",

            bottom: "RAFFLES PLACE - BUONA VISTA",
            bottomFont: "Mobitec-7:4"
        }
    },
    402: {
        front: {
            renderType: "standardService",
            serviceNumber: "75",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "75",
                    top: "MARINA CENTRE",
                    topFont: "Mobitec-13:7"
                },
                "UPP BT TIMAH RD",
                "CLEMENTI RD",
                "HOLLAND ROAD",
                "GREAT WORLD CITY",
                "ROBINSON RD",
                "EMPRESS PLACE"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    406: {
        front: {
            renderType: "standardService",
            serviceNumber: "169",
            destination: {
                text: "ANG MO KIO",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "ANG MO KIO",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 9,8",
                "ADMIRALTY ROAD EAST",
                "YISHUN MRT,AVE 2",
                "SEMBAWANG RD",
                "UPP THOMSON AVE",
                "ANG MO KIO AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    407: {
        front: {
            renderType: "standardService",
            serviceNumber: "169",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "ANG MO KIO AVE 3",
                "UPP THOMSON RD",
                "YISHUN AVE 3,2",
                "YISHUN MRT",
                "SEMBAWANG RD",
                "ADMIRALTY RD EAST",
                "WOODLANDS AVE 8, 9"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    408: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "MARINA CENTRE",
                    topFont: "Mobitec-13:7"
                },
                "SEMBAWANG ROAD",
                "MANDAI ROAD",
                "BT PANJANG ROAD",
                "UPP BT TIMAH RD",
                "DUNEARN ROAD",
                "ORCHARD ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    409: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SCOTTS ROAD",
                "BUKIT TIMAH ROAD",
                "BT PANJANG ROAD",
                "MANDAI ROAD",
                "SEMBAWANG ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    410: {
        front: {
            renderType: "standardService",
            serviceNumber: "176",
            destination: {
                text: "BUKIT MERAH",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "176",
                    top: "BUKIT MERAH",
                    topFont: "Mobitec-13:7"
                },
                "UPP BUKIT TIMAH RD",
                {
                    text: "HILLVIEW AVENUE",
                    font: "Mobitec-7:7"
                },
                "BT BATOK CTR / MRT",
                "JURONG TOWN HALL",
                "WEST COAST HIGHWAY",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    413: {
        front: {
            renderType: "standardService",
            serviceNumber: "177",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "UPP BUKIT TIMAH ROAD",
                {
                    text: "GOMBAK DRIVE",
                    font: "Mobitec-7:7"
                },
                {
                    text: "HILLVIEW AVENUE",
                    font: "Mobitec-7:7"
                },
                "BT BATOK EAST AVE 4",
                "BT BATOK EAST AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    416: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: {
                text: "BUKIT MERAH",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "BUKIT MERAH",
                    topFont: "Mobitec-13:7"
                },
                "THOMSON ROAD",
                "SCOTTS ROAD",
                "ORCHARD ROAD",
                "SHENTON WAY",
                "JLN BUKIT MERAH"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    417: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CANTONMENT RD",
                "CECIL STREET",
                "ORCHARD TURN",
                "SCOTTS ROAD",
                "THOMSON ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    418: {
        front: {
            renderType: "standardService",
            serviceNumber: "180",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "180",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BT PANJANG RD",
                {
                    text: "CHOA CHU KANG RD",
                    font: "Mobitec-7:5:3"
                },
                "BUKIT BATOK RD",
                {
                    text: "JURONG TOWN HALL",
                    font: "Mobitec-7:5:3"
                },
                "BOON LAY WAY"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    420: {
        front: {
            renderType: "standardService",
            serviceNumber: "184",
            destination: {
                text: "CLEMENTI",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "184",
                    top: "CLEMENTI MRT",
                    topFont: "Mobitec-13:8"
                },
                "BT PANJANG RD",
                "CASHEW ROAD",
                "UPP BT TIMAH RD",
                "JLN ANAK BUKIT",
                "CLEMENTI ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    422: {
        front: {
            renderType: "standardService",
            serviceNumber: "187",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "187",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "BUKIT PANJANG RD",
                "BUKIT BATOK WEST",
                "BUKIT BATOK CTR,MRT",
                {
                    text: "JURONG EAST",
                    font: "Mobitec-7:7"
                },
                {
                    text: "BOON LAY WAY",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    423: {
        front: {
            renderType: "standardService",
            serviceNumber: "187",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "187",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BOON LAY WAY",
                "JURONG EAST",
                {
                    text: "BUKIT BATOK CTR,MRT",
                    font: "Mobitec-7:5:3"
                },
                "BUKIT BATOK WEST",
                {
                    text: "BUKIT PANJANG RD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "WOODLANDS AVE 3",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    424: {
        front: {
            renderType: "standardService",
            serviceNumber: "859",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 5",
                "SEMBAWANG RD",
                {
                    text: "SEMBAWANG CRES",
                    font: "Mobitec-7:5:3"
                },
                "ADMIRALTY LINK",
                "CANBERRA RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    425: {
        front: {
            renderType: "standardService",
            serviceNumber: "859",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CANBERRA ROAD",
                "ADMIRALTY LINK",
                {
                    text: "SEMBAWANG CRES",
                    font: "Mobitec-7:5:3"
                },
                "SEMBAWANG RD",
                "YISHUN AVE 5"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    428: {
        front: {
            renderType: "standardService",
            serviceNumber: "825",
            destination: {
                text: "YIO CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "YIO CHU KANG",
                    bottom: "MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "LENTOR LOOP"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    429: {
        front: {
            renderType: "standardService",
            serviceNumber: "851",
            destination: {
                text: "BUKIT MERAH",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "851",
                    top: "BUKIT MERAH INT",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "ANG MO KIO AVE 6",
                    font: "Mobitec-7:5:3"
                },
                "MARYMOUNT RD",
                "THOMSON RD",
                "SUNGEI ROAD",
                "NEW BRIDGE RD",
                "TIONG BAHRU RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    430: {
        front: {
            renderType: "standardService",
            serviceNumber: "851",
            destination: {
                text: "YISHUN ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "851",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TIONG BAHRU RD",
                "EU TONG SEN ST",
                {
                    text: "ROCHOR RD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "THOMSON RD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "MARYMOUNT RD",
                    font: "Mobitec-7:7"
                },
                "ANG MO KIO AVE 6"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    431: {
        front: {
            renderType: "standardService",
            serviceNumber: "852",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "852",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 2",
                "LENTOR AVE",
                {
                    text: "AND MO KIO AVE 6",
                    font: "Mobitec-7:5:3"
                },
                "LORNIE RD",
                "BUKIT TIMAH RD",
                {
                    text: "UPP BUKIT TIMAH RD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "BUKIT BATOK E. AVE 6",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    432: {
        front: {
            renderType: "standardService",
            serviceNumber: "852",
            destination: {
                text: "YISHUN ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "852",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "JLN ANAK BUKIT",
                "DUNEARN ROAD",
                "LORNIE ROAD",
                "MARYMOUNT RD",
                {
                    text: "ANG MO KIO AVE 6",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    433: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "ANG MO KIO AVE 6",
                "ANG MO KIO AVE 1",
                "UPP SERANGOON RD",
                "KALLANG BAHRU"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    434: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "YISHUN ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KALLANG BAHRU",
                "UPPER SERANGOON RD",
                "ANG MO KIO AVE 1",
                "ANG MO KIO AVE 6"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    435: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "UPP EAST COAST RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "UPPER",
                    bottom: "EAST COAST RD",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "ANG MO KIO AVE 6",
                "UPP SERANGOON RD",
                "KALLANG BAHRU",
                "TANJONG KATONG",
                "MARINE PARADE RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    436: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "YISHUN ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TANJONG KATONG",
                "KALLANG BAHRU",
                "UPP SERANGOON RD",
                "ANG MO KIO AVE 6"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    437: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: {
                text: "BEDOK ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "BEDOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "YIO CHU KANG RD",
                    font: "Mobitec-7:5:3"
                },
                "HOUGANG AVE 2",
                "HOUGANG AVE 3",
                "JLN EUNOS, MRT"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    438: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: {
                text: "YISHUN ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "JLN EUNOS, MRT",
                "HOUGANG AVE 3",
                "HOUGANG AVE 2",
                {
                    text: "YIO CHU KANG RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    440: {
        front: {
            renderType: "standardService",
            serviceNumber: "855",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "YIO CHU KANG RD",
                "UPP THOMSON RD",
                {
                    text: "FARRER ROAD",
                    font: "Mobitec-7:7"
                },
                "JLN BUKIT MERAH",
                "LOWER DELTA RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    441: {
        front: {
            renderType: "standardService",
            serviceNumber: "855",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "LOWER DELTA RD",
                "JLN BUKIT MERAH",
                "FARRER ROAD",
                "UPP THOMSON ROAD",
                "YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    444: {
        front: {
            renderType: "standardService",
            serviceNumber: "980",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG RD",
                "THOMSON RD",
                "BENCOOLEN ST",
                "MIDDLE ROAD",
                "BEACH ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    445: {
        front: {
            renderType: "standardService",
            serviceNumber: "980",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BEACH ROAD",
                "VICTORIA ST",
                "ROCHOR RD",
                "THOMSON RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    451: {
        front: {
            renderType: "standardService",
            serviceNumber: "925",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "KRANJI ROAD, WAY",
                "SUNGEI KADUT ST 1",
                "WOODLANDS ROAD",
                "KRANJI EXP WAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    452: {
        front: {
            renderType: "standardService",
            serviceNumber: "925",
            destination: {
                text: "SUNGEI BULOH",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925",
                    top: "SUNGEI BULOH",
                    bottom: "NATURE PARK",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "KRANJI RD, LOOP",
                "KRANJI WAY",
                "NEW TEO LANE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    453: {
        front: {
            renderType: "standardService",
            serviceNumber: "925",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KRANJI EXP WAY",
                "WOODLANDS RD",
                "SUNGEI KANDUT ST 1",
                "KRANJI WAY, RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    454: {
        front: {
            renderType: "standardService",
            serviceNumber: "925",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KRANJI WAY, LOOP",
                "KRANJI ROAD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    455: {
        front: {
            renderType: "standardService",
            serviceNumber: "926",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "926",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "MANDAI LAKE RD",
                "MANDAI ROAD",
                "WDL CENTRE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    456: {
        front: {
            renderType: "standardService",
            serviceNumber: "926",
            destination: {
                text: "SINGAPORE ZOO",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "926",
                    top: "SINGAPORE",
                    bottom: "ZOOLOGICAL GDN",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS CENTRE",
                "MANDAI ROAD",
                "MANDAI LAKE RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    457: {
        front: {
            renderType: "standardService",
            serviceNumber: "925",
            destination: {
                text: "LIM CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925",
                    top: "LIM CHU KANG",
                    topFont: "Mobitec-13:7"
                },
                "WOODLANDS AVE 3",
                "KRANJI, LOOP",
                "SUNGEI BULOH",
                "NEO TIEW ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    458: {
        front: {
            renderType: "standardService",
            serviceNumber: "960",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "960",
                    top: "MARINA",
                    bottom: "CENTRE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS RD",
                "BT PANJANG RD",
                "BKE / PIE",
                "WHITLEY RD",
                "BUKIT TIMAH RD",
                "VICTORIA ST",
                "BRAS BASAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    459: {
        front: {
            renderType: "standardService",
            serviceNumber: "960",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "960",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "VICTORIA ST",
                "ROCHOR RD",
                "BUKIT TIMAH RD",
                "WHITLEY RD",
                "PIE / BKE",
                "BT PANJANG RD/LRT",
                "WOODLANDS RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    460: {
        front: {
            renderType: "standardService",
            serviceNumber: "961",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "961",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "UPP BT TIMAH RD",
                "QUEENSWAY",
                "JLN BUKIT MERAH",
                "CHINATOWN",
                "BEACH ROAD",
                "KALLANG BAHRU"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    461: {
        front: {
            renderType: "standardService",
            serviceNumber: "961",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "961",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KALLANG BAHRU",
                "BEACH ROAD",
                "CHINATOWN",
                "JLN BUKIT MERAH",
                "QUEENSWAY",
                "UPP BT TIMAH RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    462: {
        front: {
            renderType: "standardService",
            serviceNumber: "964",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "964",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7,6",
                "WOODLANDS AVE 9",
                "WOODLANDS LOOP",
                "WOODLANDS LINK"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    466: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "67",
                    top: "TAMPINES",
                    bottom: " INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "UPP BT TIMAH RD",
                "DUNEARN ROAD",
                "SERANGOON ROAD",
                "SIMS AVENUE",
                "NEW UPP CHANGI RD",
                "BEDOK NORTH AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    467: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "67",
                    top: "CHOA CHU KANG",
                    bottom: " INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BEDOK NORTH AVE 3",
                "NEW UPP CHANGI RD",
                "GEYLANG ROAD",
                "JALAN BESAR",
                "BUKIT TIMAH RD",
                "UPP BUKIT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    469: {
        front: {
            renderType: "standardService",
            serviceNumber: "172",
            destination: {
                text: "BOON LAY ",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "172",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG DRIVE",
                "CHOA CHU KANG AVE 1,3",
                "BRICKLAND ROAD",
                "CHOA CHU KANG RD",
                "JALAN BAHAR"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    470: {
        front: {
            renderType: "standardService",
            serviceNumber: "172",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "172",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "JLN BOON LAY",
                "JALAN BAHAR",
                "CHOA CHU KANG RD",
                "BRICKLAND RD",
                "CHOA CHU KANG AVE 3,1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    475: {
        front: {
            renderType: "standardService",
            serviceNumber: "188",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "CHOA CHU KANG WAY",
                "B.B. WEST AVE 4, 2",
                "B.B. WEST AVE 3, 6",
                "TOH GUAN ROAD",
                "BOON LAY WAY",
                "AYE, CLEMENTI RD",
                "PASIR PANJANG RD",
                "HAW PAR VILLA",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    476: {
        front: {
            renderType: "standardService",
            serviceNumber: "188",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TELOK BLANGAH RD",
                "HAW PAR VILLA",
                "PASIR PANJANG RD",
                "CLEMENTI RD, AYE",
                "BOON LAY WAY",
                "TOH GUAN ROAD",
                "B.B. WEST AVE 6,3",
                "B.B. WEST AVE 2,4",
                "CHOA CHU KANG WAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    477: {
        front: {
            renderType: "standardService",
            serviceNumber: "190",
            destination: {
                text: "NEW BRIDGE ROAD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "190",
                    top: "NEW BRIDGE",
                    bottom: "ROAD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BUKIT PANJANG RD",
                "STEVENS ROAD",
                "ORCHARD ROAD",
                "HILL STREET",
                "CHINATOWN"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    478: {
        front: {
            renderType: "standardService",
            serviceNumber: "190",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "190",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "HILL STREET",
                "SOMERSET ROAD",
                "SCOTTS ROAD",
                "STEVENS ROAD",
                "BUKIT PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    479: {
        front: {
            renderType: "destScroll",
            serviceNumber: "190A",
            top: "ENDS AT",
            bottom: "DHOBY GHAUT MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    480: {
        front: {
            renderType: "standardService",
            serviceNumber: "981",
            destination: {
                text: "SENOKO IND EST",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "SENOKO",
                    bottom: "INDUSTRIAL EST",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CANBERRA ROAD",
                "ADMIRALTY RD WEST",
                "SENOKO ROAD",
                "SENOKO LOOP"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    481: {
        front: {
            renderType: "standardService",
            serviceNumber: "981",
            destination: {
                text: "SEMBAWANG MRT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SENOKO ROAD",
                "SENOKO LOOP",
                "ADMIRALTY RD WEST",
                "CANBERRA ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    492: {
        front: {
            renderType: "standardService",
            serviceNumber: "700A",
            destination: {
                text: "SUNTEC",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "700A",
                    top: "SUNTEC",
                    topFont: "Mobitec-13:7"
                },
                "BUKIT PANJANG RD",
                "DUNEARN RD",
                "SCOTTS RD",
                "ORCHARD RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    494: {
        front: {
            renderType: "standardService",
            serviceNumber: "927",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "927",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "MANDAI ROAD",
                "WOODLANDS RD",
                "KJE,CHOA CHU KANG DR",
                "CHOA CHU KANG AVE 4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    495: {
        front: {
            renderType: "standardService",
            serviceNumber: "700",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "700",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "BUKIT PANJANG RD",
                "PETIR ROAD",
                "DUNEARN RD",
                "SCOTTS ROAD",
                "ORCHARD ROAD",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    496: {
        front: {
            renderType: "standardService",
            serviceNumber: "61",
            destination: {
                text: "EUNOS",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "61",
                    top: "EUNOS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CLEMENTI RD",
                "HOLLAND RD,AVE",
                "TELOK BLANGAH RD",
                "CHINATOWN",
                "VICTORIA ST",
                "KALLANG BAHRU",
                "MACPHERSON RD",
                "UBI AVE 2"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    497: {
        front: {
            renderType: "standardService",
            serviceNumber: "61",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "61",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "UBI AVE 2",
                "MACPHERSON RD",
                "KALLANG BAHRU",
                "NORTH BRIDGE RD",
                "SOUTH BRIDGE RD",
                "TELOK BLANGAH RD",
                "HOLLAND RD",
                "CLEMENTI RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    498: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "MARINA",
                    bottom: "CENTRE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "DUNEARN RD",
                "SIXTH AVENUE",
                "HOLLAND RD",
                "ORCHARD RD",
                "RAFFLES CITY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    499: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "PENANG RD",
                "ORCHARD BOULEVARD",
                "HOLLAND RD",
                "SIXTH AVENUE",
                "BUKIT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    504: {
        front: {
            renderType: "standardService",
            serviceNumber: "189",
            destination: {
                text: "KENT RIDGE TER",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "KENT RIDGE",
                    bottom: "TERMINAL",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "B. B. EAST AVE 6",
                "CLEMENTI AVE 6",
                "CLEMENTI MRT",
                "WEST COAST RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    505: {
        front: {
            renderType: "standardService",
            serviceNumber: "189",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WEST COAST RD",
                "CLEMENTI MRT",
                "CLEMENTI AVE 6",
                "B. B. EAST AVE 6"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    508: {
        front: {
            renderType: "standardService",
            serviceNumber: "921",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "921",
                    top: "BUKIT PANJANG",
                    bottom: "INT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BUKIT PANJANG RD",
                "PENDING RD",
                "PETIR RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    510: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: {
                text: "SUNTEC CITY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "SUNTEC",
                    bottom: "CITY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YIO CHU KANG RD,CTE",
                "JLN TOA PAYOH",
                "BENDEMEER RD",
                "JALAN BESAR",
                "BENCOOLEN ST"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    511: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "STAMFORD RD",
                "SELEGIE RD",
                "SERANGOON RD",
                "JLN TOA PAYOH",
                "CTE,YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    512: {
        front: {
            renderType: "standardService",
            serviceNumber: "970",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "970",
                    top: "SHENTON",
                    bottom: "WAY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "HILLVIEW RD, AVE",
                "JLN JURONG KECHIL",
                "DUNEARN RD",
                "SIXTH AVENUE",
                "COMMONWEALTH AVE",
                "KIM SENG ROAD",
                "EU TONG SEN ST"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    513: {
        front: {
            renderType: "standardService",
            serviceNumber: "970",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "970",
                    top: "BUKIT",
                    bottom: "PANJANG",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "NEW BRIDGE RD",
                {
                    text: "ZION RD",
                    font: "Mobitec-7:7"
                },
                "COMMONWEALTH AVE",
                "SIXTH AVENUE",
                "UPP BUKIT TIMAH RD",
                "JLN JUORNG KECHIl",
                "HILLVIEW RD, AVE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    515: {
        front: {
            renderType: "standardService",
            serviceNumber: "969",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "TAMPINES",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7",
                "GAMBAS AVENUE",
                "YISHUN AVE 5,2",
                "SLE / TPE",
                "TAMPINES AVE 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    516: {
        front: {
            renderType: "standardService",
            serviceNumber: "969",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TAMPINES AVE 7",
                "TPE / SLE",
                "YISHUN AVE 2,5",
                "GAMBAS AVENUE",
                "WOODLANDS AVE 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    519: {
        front: {
            renderType: "standardService",
            serviceNumber: "962",
            destination: {
                text: "SEMBAWANG DR",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "962",
                    top: "SEMBAWANG",
                    bottom: "DRIVE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 5,6,7",
                "SEMBAWANG WAY",
                "SEMBAWANG CRES",
                "SEMBAWANG DRIVE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    520: {
        front: {
            renderType: "standardService",
            serviceNumber: "962",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "962",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG DR",
                "SEMBAWANG CRES",
                "SEMBAWANG WAY",
                "WOODLANDS AVE 7,6,5"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    521: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "MASRILING MRT",
                    font: "Mobitec-7:7"
                },
                "BUKIT PANJANG RD",
                "HILLVIEW AVENUE",
                "B.B EAST AVE 2,4",
                "B.B EAST AVE 3",
                "CLEMENTI AVE 6",
                {
                    text: "A Y E",
                    font: "Mobitec-7:7"
                },
                "NUH  , SISIR",
                "ALEXANDRA RD",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    522: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TELOK BLANGAH RD",
                "ALEXANDRA RD",
                {
                    text: "SISIR , NUH",
                    font: "Mobitec-7:7"
                },
                {
                    text: "A Y E",
                    font: "Mobitec-7:7"
                },
                "CLEMENTI AVE 6",
                "B. B EAST AVE 3,4",
                "B. B EAST AVE 2",
                "HILLVIEW AVENUE",
                "BUKIT PANJANG RD",
                "MASRILING MRT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    523: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: {
                text: "SENGKANG INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "SENGKANG INT",
                    topFont: "Mobitec-13:7"
                },
                "ADMIRALTY MRT",
                "GAMBAS AVENUE",
                "YISHUN MRT, AVE 2",
                "SLE / TPE",
                "COMPASSVIEW ST, RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    524: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "COMPASSVIEW RD, ST",
                "TPE / SLE",
                "YISHUN AVE 2, MRT",
                "GAMBAS AVENUE",
                "ADMIRALTY MRT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    525: {
        front: {
            renderType: "standardService",
            serviceNumber: "941",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "B. B WEST AVE 3, 6",
                "B. B WEST ST 11",
                "B. B WEST AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    527: {
        front: {
            renderType: "standardService",
            serviceNumber: "947",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "B. B WEST AVE 2, 4",
                "B. B WEST AVE 7",
                "BT BATOK ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    528: {
        front: {
            renderType: "standardService",
            serviceNumber: "985",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "985",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SERANGOON ROAD",
                "JLN TOA PAYOH",
                "JLN JURONG KECHIL",
                "B. B EAST AVE 2",
                "B. B WEST AVE 2, 4",
                "B. B WEST AVE 7",
                "TECK WHYE AVE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    529: {
        front: {
            renderType: "standardService",
            serviceNumber: "985",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "985",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TECK WHYE AVE",
                "B. B WEST AVE 7,4",
                "B. B WEST AVE 2",
                "B. B EAST AVE 2",
                "JLN JURONG KECHIL",
                "JLN TOA PAYOH",
                "BENDEMEER ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    538: {
        front: {
            renderType: "standardService",
            serviceNumber: "963E",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963E",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "MASRILING MRT",
                "BT PANJANG RD",
                "HILLVIEW AVE",
                "B.B EAST AVE 4",
                "B.B EAST AVE 3",
                {
                    text: "A Y E",
                    font: "Mobitec-7:7"
                },
                "NUH ,SISIR",
                "ALEXANDRA RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    539: {
        front: {
            renderType: "standardService",
            serviceNumber: "173",
            destination: {
                text: "CLEMENTI",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "CLEMENTI",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "HILLVIEW AVE",
                "HUME AVENUE",
                "UPP BT ITMAH RD",
                "JLN JURONG KECHIL",
                "TOH TUCK RD, RISE",
                "C'WEALTH AVE WEST"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    540: {
        front: {
            renderType: "standardService",
            serviceNumber: "173",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C'WEALTH AVE WEST",
                "TOH TUCK RD, RISE",
                "JLN JURONG KECHIL",
                "UPP BT TIMAH ROAD",
                "HUME AVENUE",
                "HILLVIEW AVENUE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    542: {
        front: {
            renderType: "standardService",
            serviceNumber: "902",
            destination: {
                text: "REPUBLIC POLY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "902",
                    top: "REPUBLIC",
                    bottom: "POLYTECHNIC",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    547: {
        front: {
            renderType: "standardService",
            serviceNumber: "985W",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "985W",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "TECK WHYE AVE",
                "BUKIT BATOK RD",
                "B. B WEST AVE 7,4",
                "B. B WEST AVE 2",
                "B. B EAST AVE 2",
                "JLN JURONG KECHIL",
                "JLN TOA PAYOH",
                "BENDEMEER RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    548: {
        front: {
            renderType: "standardService",
            serviceNumber: "985W",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "985W",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "SERANGOON RD",
                "JLN TOA PAYOH",
                "JLN JURONG KECHIL",
                "B. B EAST AVE 2",
                "B. B WEST AVE 2, 4",
                "B. B WEST AVE 7",
                "BT BATOK ROAD",
                "TECK WHYE AVE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    549: {
        front: {
            renderType: "standardService",
            serviceNumber: "945",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "B.B EAST AVE 5",
                "LITTLE GUILIN",
                "BT GOMBAK MRT",
                "B. B WEST AVE 7,4",
                "BUKIT BATOK ST 33",
                "BT BATOK INT / MRT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    550: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE",
                    bottom: "PARADE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "PENDING / PETIR RD",
                "PIE (WHITLEY RD)",
                "JLN TOA PAYOH",
                "JLN KOLAM AYER",
                "EUNOS MRT",
                "STILL RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    551: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "STILL RD",
                "EUNOS MRT",
                "JLN KOLAM AYER",
                "JLN TOA PAYOH",
                "PIE (WHITLEY RD)",
                "PETIR/PENDING RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    552: {
        front: {
            renderType: "standardService",
            serviceNumber: "854E",
            destination: {
                text: "BEDOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854E",
                    top: "BEDOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YIO CHU KANG RD",
                "HOUGANG AVE 2",
                "HOUGANG AVE 3",
                "JLN EUNOS",
                {
                    text: "P I E",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    553: {
        front: {
            renderType: "standardService",
            serviceNumber: "188E",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188E",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "CHOA CHU KANG WAY",
                "B. B. WEST AVE 7",
                "B. B. WEST AVE 4",
                "B. B. WEST AVE 2",
                "B. B. WEST AVE 3",
                "B. B. WEST AVE 6",
                "TOH GUAN ROAD",
                "CLEMENTI ROAD",
                "PASIR PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    554: {
        front: {
            renderType: "standardService",
            serviceNumber: "530",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "530",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "RIVER VALLEY RD",
                "CHURCH STREET"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    555: {
        front: {
            renderType: "standardService",
            serviceNumber: "531",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "531",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "SIMEI",
                "BEDOK",
                "UPP EAST COAST",
                "SUNTEC CITY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    556: {
        front: {
            renderType: "standardService",
            serviceNumber: "859A",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859A",
                    top: "SEMBAWANG",
                    topFont: "Mobitec-13:7"
                },
                "CANBERRA RD",
                "ADMIRALTY LINK",
                "SEMBAWANG CRES"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    557: {
        front: {
            renderType: "standardService",
            serviceNumber: "173A",
            destination: {
                text: "B. B EAST AVE 4",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "173A",
                    top: "ENDS BT BATOK EAST",
                    bottom: "AVE 4, BLK 254",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:7"
                },
                "BT BATOK CENTRAL",
                "BT BATOK AVE 1",
                "B. B EAST AVE 6",
                "BUKIT BATOK ST 21",
                "B. B EAST AVE 4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    558: {
        front: {
            renderType: "standardService",
            serviceNumber: "546",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "546",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "GEYLANG BAHRU",
                "UPP BOON KENG RD",
                "SIMS AVE",
                "NICOLL HIGHWAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    559: {
        front: {
            renderType: "standardService",
            serviceNumber: "587",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "587",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "SCOTTS RD",
                "ORCHARD RD",
                "BRAS BASAH RD",
                "NICOLL HIGHWAY",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    560: {
        front: {
            renderType: "standardService",
            serviceNumber: "587",
            destination: {
                text: "WOODLANDS RING RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "587",
                    top: "WOODLANDS",
                    topFont: "Mobitec-13:8"
                },
                "ROBINSON RD",
                "STAMFORD RD",
                "ORCHARD TURN",
                "SCOTTS RD",
                "WDL AVE 1,5"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    561: {
        front: {
            renderType: "standardService",
            serviceNumber: "531",
            destination: {
                text: "SIMEI",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "531",
                    top: "SIMEI",
                    topFont: "Mobitec-13:8"
                },
                "ROBINSON RD",
                "TEMASEK BLVD",
                "UPP EAST COAST RD",
                "BEDOK RD",
                "UPP CHANGI RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    562: {
        front: {
            renderType: "standardService",
            serviceNumber: "588",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "588",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "MARYMOUNT RD",
                "BISHAN ST 21",
                "BISHAN ST 11, 12",
                "UPP PICKERING ST",
                "CHURCH STREET"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    563: {
        front: {
            renderType: "standardService",
            serviceNumber: "588",
            destination: {
                text: "SIN MING AVE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "588",
                    top: "SIN MIN",
                    bottom: "AVENUE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "ROBINSON RD",
                "STAMFORD RD",
                "SOMERSET RD",
                "BISHAN ST 13,21",
                "MARYMOUNT RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    564: {
        front: {
            renderType: "standardService",
            serviceNumber: "586",
            destination: {
                text: "JURONG EAST",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "586",
                    top: "JURONG EAST",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "SENJA RD",
                    font: "Mobitec-7:7"
                },
                "BT PANJANG RD",
                "CHOA CHU KANG RD",
                "JURONG TOWN HALL RD",
                "BOON LAY WAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    565: {
        front: {
            renderType: "standardService",
            serviceNumber: "589",
            destination: {
                text: "FULLERTON RD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "589",
                    top: "FULLERTON RD",
                    topFont: "Mobitec-13:7"
                },
                "SUNSET WAY",
                "CLEMENTI AVE 2",
                "WEST COAST RD",
                "WEST COAST HIGHWAY",
                "ROBINSON RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    566: {
        front: {
            renderType: "standardService",
            serviceNumber: "590",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "590",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "C.C.K NORTH 6,5",
                "ORCHARD RD",
                "BRAS BASAH RD",
                "NICOLL HIGHWAY",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    567: {
        front: {
            renderType: "standardService",
            serviceNumber: "597",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "597",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "LOR 2 TOA PAYOH",
                "LOR 1 TOA PAYOH",
                "NICOLL HIGHWAY",
                {
                    text: "COLLYER QUAY",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    568: {
        front: {
            renderType: "standardService",
            serviceNumber: "598",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "598",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "PETIR ROAD",
                {
                    text: "UPP BT TIMAH RD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "DAIRY FARM CRES",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "CHESTNUT DR / AVE",
                    font: "Mobitec-7:5:3"
                },
                "ORCHARD RD",
                "BRAS BASAH RD",
                {
                    text: "NICOLL HIGHWAY",
                    font: "Mobitec-7:5:3"
                },
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    569: {
        front: {
            renderType: "standardService",
            serviceNumber: "598",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "598",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "HOUGANG ST 51",
                "HOUGANG AVE 4,9",
                {
                    text: "S'GOON NORTH AVE 4,3",
                    font: "Mobitec-7:4"
                },
                "UPP PICKERING ST",
                {
                    text: "CHURCH ST",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    570: {
        front: {
            renderType: "standardService",
            serviceNumber: "963E",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963E",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TELOK BLANGAH RD",
                {
                    text: "A  Y  E",
                    font: "Mobitec-7:7"
                },
                {
                    text: "CLEMENTI AVE 6",
                    font: "Mobitec-7:7"
                },
                "B BATOK EAST AVE 3",
                {
                    text: "HILLVIEW AVE",
                    font: "Mobitec-7:7"
                },
                "UPP BT TIMAH RD",
                {
                    text: "B  K  E",
                    font: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    571: {
        front: {
            renderType: "standardService",
            serviceNumber: "882",
            destination: {
                text: "SEMBAWANG PARK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "SEMBAWANG",
                    bottom: "PARK",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG DRIVE",
                "SEMBAWANG WAY",
                {
                    text: "CANBERRA RD",
                    font: "Mobitec-7:7"
                },
                "WELLINGTON CIRCLE",
                {
                    text: "MONTREAL DR",
                    font: "Mobitec-7:7"
                },
                "MONTREAL LINK",
                "SEMBAWANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    572: {
        front: {
            renderType: "standardService",
            serviceNumber: "882",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG RD",
                "MONTREAL LINK",
                "MONTREAL DRIVE",
                {
                    text: "WELLINGTON CIRCLE",
                    font: "Mobitec-7:5:3"
                },
                "CANBERRA ROAD",
                {
                    text: "SEMBAWANG WAY",
                    font: "Mobitec-7:5:3"
                },
                "SEMBAWANG DR"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    575: {
        front: {
            renderType: "standardService",
            serviceNumber: "RWS8",
            destination: {
                text: "RWS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "RWS8",
                    top: "RESORTS WORLD",
                    bottom: "SENTOSA",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    576: {
        front: {
            renderType: "standardService",
            serviceNumber: "963R",
            destination: {
                text: "SENTOSA",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "RESORTS WORLD",
                    bottom: "SENTOSA",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                {
                    text: "B K E",
                    font: "Mobitec-7:7"
                },
                "BT PANJANG RD",
                "PENDING ROAD",
                "PETIR ROAD",
                "JELEBU ROAD",
                "HILLVIEW AVE",
                "B. B EAST AVE 4,3",
                "C'WEALTH AVE WEST",
                "CLEMENTI AVE 6",
                {
                    text: "A Y E",
                    font: "Mobitec-7:7"
                },
                "ALEXANDRA ROAD",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    577: {
        front: {
            renderType: "standardService",
            serviceNumber: "963R",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TELOK BLANGAH RD",
                {
                    text: "ALEXANDRA RD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "A Y E",
                    font: "Mobitec-7:7"
                },
                "CLEMENTI AVE 6",
                "C'WEALTH AVE WEST",
                "B. B EAST AVE 3,4",
                "HILLVIEW AVENUE",
                "BT PANJANG ROAD",
                {
                    text: "JELEBU ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "PETIR ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "PENDING ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "B K E",
                    font: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    578: {
        front: {
            renderType: "standardService",
            serviceNumber: "RWS88",
            destination: {
                text: "RWS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "RWS88",
                    top: "RESORTS WORLD",
                    bottom: "SENTOSA",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "RWS88",
                    top: "CITY HALL",
                    bottom: "(LOOP)",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    579: {
        front: {
            renderType: "standardService",
            serviceNumber: "RWS68",
            destination: {
                text: "RWS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "RWS68",
                    top: "RESORTS WORLD",
                    bottom: "SENTOSA",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    580: {
        front: {
            renderType: "standardService",
            serviceNumber: "RWS68",
            destination: {
                text: "OUTRAM PARK MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "RWS68",
                    top: "OUTRAM PARK",
                    bottom: "MRT STATION",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    582: {
        front: {
            renderType: "standardService",
            serviceNumber: "858",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "CHANGI",
                    bottom: "AIRPORT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 4",
                "WDL AVENUE 9",
                "GAMBAS AVE",
                "WDL AVENUE 7",
                {
                    text: "SEMBAWANG WAY",
                    font: "Mobitec-7:5:3"
                },
                "CANBERRA RD",
                "SEMBAWANG RD",
                "YISHUN AVE 5, 2",
                "YISHUN CTRL 2",
                "SLE / TPE",
                {
                    text: "AIRPORT BOULEVARD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    583: {
        front: {
            renderType: "standardService",
            serviceNumber: "858",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "AIRPORT BOULEVARD",
                    font: "Mobitec-7:5:3"
                },
                "TPE / SLE",
                "YISHUN CTRL 2",
                "YISHUN AVE 2,5",
                "SEMBAWANG RD",
                "CANBERRA RD",
                "SEMBAWANG WAY",
                "WDL AVENUE 7",
                "GAMBAS AVE",
                "WDL AVENUE 9",
                "WDL AVENUE 4"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    584: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: {
                text: "SHENTON WAY TER",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "SHENTON WAY",
                    bottom: "TERMINAL",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "B.B EAST AVE 3",
                "TOH TUCK AVE",
                {
                    text: "C'WEALTH AVE WEST",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "C'WEALTH AVE",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "HOLLAND AVE, ROAD",
                    font: "Mobitec-7:5:3"
                },
                "NAPIER ROAD",
                "TANGLIN ROAD",
                "ORCHARD ROAD",
                "BRAS BASAH RD",
                {
                    text: "TAMASEK BLVD, AVE",
                    font: "Mobitec-7:5:3"
                },
                "BAYFRONT AVE",
                "CENTRAL BLVD",
                "SHENTON WAY"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    585: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CENTRAL BLVD",
                "BAYFRONT AVE",
                "RAFFLES AVENUE",
                "STAMFORD ROAD",
                "ORCHARD ROAD",
                "PENANG ROAD",
                "SOMERSET ROAD",
                "ORCHARD BLVD",
                "NAIPER ROAD",
                {
                    text: "HOLLAND ROAD, AVE",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "C'WEALTH AVE WEST",
                    font: "Mobitec-7:5:3"
                },
                "TOH TUCK AVE",
                "B.B EAST AVE 3"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    586: {
        front: {
            renderType: "standardService",
            serviceNumber: "188R",
            destination: {
                text: "R W S",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188R",
                    top: "RESORTS WORLD",
                    bottom: "SENTOSA",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C. C. K WAY",
                "B.B WEST AVE 7",
                "B.B WEST AVE 4",
                "B.B WEST AVE 2",
                "B.B WEST AVE 3",
                "B.B WEST AVE 6",
                "B. BATOK AVE 1",
                {
                    text: "JURONG EAST CTRL",
                    font: "Mobitec-7:5:3"
                },
                "TOH GUAN ROAD",
                {
                    text: "TELOK BLANGAH ROAD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    587: {
        front: {
            renderType: "standardService",
            serviceNumber: "188R",
            destination: {
                text: "C. C. K INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188R",
                    top: "CHOA CHU KANG",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "TELOK BLANGAH RD",
                    font: "Mobitec-7:5:3"
                },
                "TOH GUAN ROAD",
                "B. BATOK AVE 1",
                "B.B WEST AVE 6",
                "B.B WEST AVE 3",
                "B.B WEST AVE 2",
                "B.B WEST AVE 4",
                "B.B WEST AVE 7",
                "C. C. K WAY"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    588: {
        front: {
            renderType: "standardService",
            serviceNumber: "568",
            destination: {
                text: "SUNTEC CITY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "568",
                    top: "SUNTEC CITY",
                    topFont: "Mobitec-13:7"
                },
                "BT BATOK WEST AVE 5,4",
                "BT BATOK WEST AVE 2,3",
                "BT BATOK WEST AVE 6",
                {
                    text: "BT BATOK AVE 1",
                    font: "Mobitec-7:7"
                },
                "JURONG EAST CENTRAL",
                {
                    text: "TOH GUAN ROAD",
                    font: "Mobitec-7:7"
                },
                "JURONG TOWN HALL ROAD",
                {
                    text: "ANSON ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "ROBINSON ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "FULLERTON ROAD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "ESPLANADE DRIVE",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "TAMASEK BLVD / AVE",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    589: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE",
                    bottom: "PARADE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 3",
                {
                    text: "PENDING / PETIR RD",
                    font: "Mobitec-7:5:3"
                },
                "JLN TOA PAYOH",
                {
                    text: "JLN KOLAM AYER",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "EUNOS MRT / STILL ROAD",
                    font: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE PARADE",
                    bottom: "( LOOP )",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "STILL ROAD / EUNOS MRT",
                    font: "Mobitec-7:4"
                },
                {
                    text: "JLN KOLAM AYER",
                    font: "Mobitec-7:5:3"
                },
                "JLN TOA PAYOH",
                {
                    text: "PETIR / PENDING RD",
                    font: "Mobitec-7:5:3"
                },
                "WDL AVENUE 3"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    590: {
        front: {
            renderType: "standardService",
            serviceNumber: "971E",
            destination: {
                text: "CECIL STREET",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "971E",
                    top: "CECIL STREET",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "BT PANJANG RING RD",
                    font: "Mobitec-7:4"
                },
                "JELAPANG ROAD",
                {
                    text: "SEGAR / FAJAR RD",
                    font: "Mobitec-7:5:3"
                },
                "WHITLEY ROAD",
                {
                    text: "SCOTTS / ORCHARD RD",
                    font: "Mobitec-7:4"
                },
                {
                    text: "NICOLL HIGHWAY",
                    font: "Mobitec-7:5:3"
                },
                "COLLYER QUAY",
                "RAFFLES QUAY",
                "SHENTON WAY",
                "ANSON ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    591: {
        front: {
            renderType: "standardService",
            serviceNumber: "178",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "178",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS CENTRE RD",
                "UPP BT TIMAH",
                "BUKIT BATOK",
                "JURONG TOWN HALL",
                "CORPORATION RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    592: {
        front: {
            renderType: "standardService",
            serviceNumber: "178",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "178",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CORPORATION RD",
                "JURONG TOWN HALL",
                "BUKIT BATOK",
                "UPP BUKIT TIMAH",
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    593: {
        front: {
            renderType: "standardService",
            serviceNumber: "856",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                },
                "ADMIRALTY RD",
                "SENOKO AVE",
                "ADMIRALTY RD WEST",
                "CANBERRA RD / MRT",
                "SEMBAWANG RD",
                "YISHUN AVE 5"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    594: {
        front: {
            renderType: "standardService",
            serviceNumber: "856",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 5",
                "SEMBAWANG RD",
                "CANBERRA RD / MRT",
                "ADMIRALTY RD WEST",
                "SENOKO AVE",
                "ADMIRALTY RD",
                "WDL CENTRE RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    598: {
        front: {
            renderType: "standardService",
            serviceNumber: "860",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "860",
                    top: "YISHUN INT",
                    topFont: "Mobitec-13:7"
                },
                "YISHUN AVENUE 9",
                "YISHUN RING ROAD",
                {
                    text: "YISHUN AVE 3, 2(LOOP)",
                    font: "Mobitec-7:4"
                },
                "YISHUN RING ROAD",
                "YISHUN AVENUE 9"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    610: {
        front: {
            renderType: "standardService",
            serviceNumber: "75",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "75",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:8"
                },
                "COLLYER QUAY",
                "SHENTON WAY",
                "OUTRAM RD, MRT",
                "HOLLAND ROAD",
                "CLEMENTI ROAD",
                "UPP BT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    611: {
        front: {
            renderType: "standardService",
            serviceNumber: "176",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "176",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "TELOK BLANGAH RD",
                "WEST COAST HIGHWAY",
                "JURONG TOWN HALL",
                "BT BATOK CTR/ MRT",
                {
                    text: "HILLVIEW AVENUE",
                    font: "Mobitec-7:7"
                },
                "UPP BUKIT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    612: {
        front: {
            renderType: "standardService",
            serviceNumber: "177",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "BT BATOK EAST AVE 3",
                "BT BATOK EAST AVE 4",
                {
                    text: "HILLVIEW AVE",
                    font: "Mobitec-7:7"
                },
                {
                    text: "GOMBAK DRIVE",
                    font: "Mobitec-7:7"
                },
                "UPP BUKIT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    613: {
        front: {
            renderType: "standardService",
            serviceNumber: "180",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "180",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "BOON LAY WAY",
                {
                    text: "JURONG TOWN HALL",
                    font: "Mobitec-7:5:3"
                },
                "BUKIT BATOK RD",
                {
                    text: "CHOA CHU KANG RD",
                    font: "Mobitec-7:5:3"
                },
                "PETIR RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    614: {
        front: {
            renderType: "standardService",
            serviceNumber: "184",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "184",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "CLEMENTI ROAD",
                {
                    text: "UPP BUKIT TIMAH RD",
                    font: "Mobitec-7:5:3"
                },
                "CASHEW ROAD",
                {
                    text: "BUKIT PANJANG RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    615: {
        front: {
            renderType: "standardService",
            serviceNumber: "700",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "700",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "STAMFORD RD",
                "SOMERSET RD",
                "ORCHARD TURN",
                "SCOTTS ROAD",
                "BUKIT TIMAH RD",
                "PETIR RD",
                {
                    text: "BUKIT PANJANG RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    616: {
        front: {
            renderType: "standardService",
            serviceNumber: "700A",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "700A",
                    top: "BUKIT",
                    bottom: "PANJANG",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "STAMFORD RD",
                "SOMERSET RD",
                {
                    text: "ORCHARD TURN",
                    font: "Mobitec-7:5:3"
                },
                "SCOTTS RD",
                {
                    text: "BUKIT TIMAH RD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "BT PANJANG RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    617: {
        front: {
            renderType: "standardService",
            serviceNumber: "920",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "920",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "SENJA ROAD",
                "JELAPANG ROAD",
                "SAUJANA ROAD",
                "FAJAR ROAD",
                {
                    text: "BANGKIT ROAD (LOOP)",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    618: {
        front: {
            renderType: "standardService",
            serviceNumber: "922",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "922",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "BT PANJANG RING RD",
                    font: "Mobitec-7:5:3"
                },
                "JELAPANG ROAD",
                "SEGAR ROAD",
                "FAJAR ROAD",
                {
                    text: "BANGKIT RD ( LOOP )",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    619: {
        front: {
            renderType: "standardService",
            serviceNumber: "970",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "970",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "NEW BRIDGE RD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "ZION RD",
                    font: "Mobitec-7:7"
                },
                "COMMONWEALTH AVE",
                {
                    text: "SIXTH AVENUE",
                    font: "Mobitec-7:7"
                },
                "UPP BUKIT TIMAH RD",
                "JLN JURONG KECHIL",
                "HILLVIEW AVE, RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    621: {
        front: {
            renderType: "standardService",
            serviceNumber: "971E",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "971E",
                    top: "BUKIT",
                    bottom: "PANJANG",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "ANSON RD / CECIL ST",
                    font: "Mobitec-7:4"
                },
                "FULLERTON ROAD",
                "ESPLANADE DR",
                "STAMFORD ROAD",
                {
                    text: "ORCHARD/ PENANG RD",
                    font: "Mobitec-7:4"
                },
                "SOMERSET ROAD",
                {
                    text: "GARAGE / SCOTTS RD",
                    font: "Mobitec-7:4"
                },
                "WHITLEY ROAD",
                {
                    text: "BT PANJANG RING RD",
                    font: "Mobitec-7:4"
                },
                {
                    text: "FAJAR / SEGAR RD",
                    font: "Mobitec-7:4"
                },
                "JELAPANG ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    622: {
        front: {
            renderType: "standardService",
            serviceNumber: "850E",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "850E",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "YISHUN AVE 6",
                "YISHUN RING RD",
                "DHOBY GHAUT MRT",
                "BRAS BASAH RD",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    623: {
        front: {
            renderType: "standardService",
            serviceNumber: "850E",
            destination: {
                text: "YISHUN AVE 11",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "850E",
                    top: "YISHUN",
                    bottom: "AVENUE 11",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "ROBINSON RD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "STAMFORD RD",
                    font: "Mobitec-7:7"
                },
                "DHOBY GHAUT MRT",
                "YISHUN RING RD",
                "YISHUN AVE 6"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    624: {
        front: {
            renderType: "standardService",
            serviceNumber: "975",
            destination: {
                text: "LIM CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "975",
                    top: "LIM CHU KANG",
                    topFont: "Mobitec-13:7"
                },
                "TECK WHYE AVE",
                "CHOA CHU KANG MRT",
                "C.C.K WAY,AVE 3",
                {
                    text: "OLD CHOA CHU KANG RD",
                    font: "Mobitec-7:4"
                },
                "LIM CHU KANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    625: {
        front: {
            renderType: "standardService",
            serviceNumber: "975",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "975",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "LIM CHU KANG RD",
                {
                    text: "OLD CHOA CHU KANG RD",
                    font: "Mobitec-7:4"
                },
                "C.C.K  AVE 3,WAY",
                "CHOA CHU KANG MRT",
                {
                    text: "TECK WHY AVE",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    626: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "MARINA BLVD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "MARINA",
                    bottom: "BOULEVARD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C.C.K AVE 5,4",
                "C.C.K WAY,AVE 1",
                "TECK WHYE AVE",
                {
                    text: "ANSON ROAD",
                    font: "Mobitec-7:7"
                },
                "ROBINSON ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    627: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "C.C.K AVE 5",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "CHOA CHU KANG",
                    bottom: "AVENUE 5",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "CENTRAL BLVD",
                "SHENTON WAY",
                "TECK WHYE AVE",
                {
                    text: "C.C.K  AVE 1",
                    font: "Mobitec-7:7"
                },
                "C.C.K WAY,AVE 4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    628: {
        front: {
            renderType: "standardService",
            serviceNumber: "951E",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "951E",
                    top: "SHENTON",
                    bottom: "WAY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "WOODLANDS AVE 4,1",
                    font: "Mobitec-7:4"
                },
                "DHOBY GHAUT MRT",
                "BRAS BASAH RD",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    629: {
        front: {
            renderType: "standardService",
            serviceNumber: "951E",
            destination: {
                text: "WOODLANDS ST 82",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "951E",
                    top: "WOODLANDS",
                    bottom: "STREET 82",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "ROBINSON ROAD",
                "STAMFORD ROAD",
                "DHOBY GHAUT MRT",
                {
                    text: "WOODLANDS AVE 1,4",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    631: {
        front: {
            renderType: "standardService",
            serviceNumber: "75",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "75",
                    top: "MARINA CENTRE",
                    topFont: "Mobitec-13:7"
                },
                "UPP BT TIMAH RD",
                "CLEMENTI ROAD",
                "HOLLAND ROAD",
                "GREAT WORLD CITY",
                "OUTRAM ROAD",
                "CANTONMENT RD",
                "ANSON ROAD",
                "ROBINSON ROAD",
                "EMPRESS PLACE"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    632: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "BENCOOLEN ST",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "BENCOOLEN",
                    bottom: "STREET",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BT PANJANG RING RD",
                {
                    text: "SEGAR / FAJAR RD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "B K E / P I E",
                    font: "Mobitec-7:7"
                },
                "STEVENS / SCOTTS RD",
                {
                    text: "ORCHARD RD",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    633: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "SOMERSET RD",
                {
                    text: "SCOTTS / STEVENS RD",
                    font: "Mobitec-7:4"
                },
                " P I E / B K E",
                {
                    text: "FAJAR / SENJAR RD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "BT PANJANG RING RD",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    634: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN CTRL 1",
                "ANG MO KIO AVE 6",
                "ANG MO KIO AVE 1",
                "UPP SERANGOON RD",
                "KALLANG BAHRU"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    635: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KALLANG BAHRU",
                "UPPER SERANGOON RD",
                "ANG MO KIO AVE 1",
                "ANG MO KIO AVE 6",
                "YISHUN CTRL 1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    636: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "UPP E. COAST RD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "UPPER",
                    bottom: "EAST COAST RD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN CTRL 1",
                "ANG MO KIO AVE 6",
                "UPP SERANGOON RD",
                "KALLANG BAHRU",
                "TANJONG KATONG",
                "MARINE PARADE RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    637: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TANJONG KATONG",
                "KALLANG BAHRU",
                "UPP SERANGOON RD",
                "ANG MO KIO AVE 6",
                "YISHUN CTRL 1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    638: {
        front: {
            renderType: "standardService",
            serviceNumber: "990",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "990",
                    top: "BUKIT BATOK",
                    topFont: "Mobitec-13:8"
                },
                "B.B EAST AVE 3,6",
                "B.BATOK AVE 1",
                "TOH GUAN ROAD",
                "BOON LAY WAY",
                "JURONG EAST CTRL",
                "JURONG GATEWAY RD",
                "JURONG EAST (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    640: {
        front: {
            renderType: "standardService",
            serviceNumber: "189",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "BUKIT BATOK",
                    topFont: "Mobitec-13:7"
                },
                "B.B. EAST AVE 6",
                "B.B. EAST ST 23",
                "B.B. EAST AVE 3",
                "CLEMENTI AVE 6",
                "C'WEALTH AVE WEST",
                "CLEMENTI AVE 1 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    642: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "MARINA BLVD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "MARINA",
                    bottom: "BOULEVARD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C. C. K AVE 5,4",
                "C. C. K WAY,AVE 1",
                "TECK WHYE AVE",
                "CHOA CHU KANG RD",
                "BUKIT BATOK RD",
                {
                    text: "ANSON ROAD",
                    font: "Mobitec-7:7"
                },
                "ROBINSON ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    643: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "KEAT HONG CLOSE",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "KEAT HONG",
                    bottom: "CLOSE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CENTRAL BLVD",
                "SHENTON WAY",
                "BUKIT BATOK RD",
                "CHOA CHU KANG RD",
                "TECK WHYE AVE",
                "C.C.K AVE 1,WAY",
                "C.C.K AVE 4,5"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    644: {
        front: {
            renderType: "standardService",
            serviceNumber: "950",
            destination: {
                text: "JB SENTRAL TER",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "950",
                    top: "WOODLANDS INT",
                    bottom: "SINGAPORE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "950",
                    top: "JB SENTRAL TER (LOOP)",
                    bottom: "JOHOR BAHRU",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    645: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "MARINA BLVD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "MARINA",
                    bottom: "BOULEVARD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C. C. K AVE 5,4",
                "C. C. K WAY,AVE 1",
                "TECK WHYE AVE",
                "CHOA CHU KANG RD",
                "BUKIT BATOK RD",
                {
                    text: "ANSON ROAD",
                    font: "Mobitec-7:7"
                },
                "ROBINSON ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    646: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "C.C.K AVE 5",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "CHOA CHU KANG",
                    bottom: "AVENUE 5",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CENTRAL BLVD",
                "SHENTON WAY",
                "BUKIT BATOK ROAD",
                "CHOA CHU KANG RD",
                "TECK WHYE AVE",
                "C.C.K AVE 1,WAY",
                "C.C.K AVE 4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    647: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "BENCOOLEN ST",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "BENCOOLEN",
                    bottom: "STREET",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "BT PANJANG RD",
                    font: "Mobitec-7:4"
                },
                "SENJA ROAD / LINK",
                "JELAPANG RD",
                "SEGAR / FAJAR RD",
                "BT PANJANG RING RD",
                "B K E / P I E",
                "WHITLEY RD",
                "STEVENS / SCOTTS RD",
                {
                    text: "ORCHARD RD",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    648: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "ORCHARD / PENANG RD",
                {
                    text: "SOMERSET ROAD",
                    font: "Mobitec-7:7"
                },
                "ORCHARD TURN",
                "SCOTTS / STEVENS RD",
                "WHITLEY ROAD",
                "P I E / B K E",
                "BT PANJANG RING RD",
                "FAJAR / SEGAR RD",
                "JELAPANG RD",
                "SENJA LINK / ROAD",
                "BT PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    649: {
        front: {
            renderType: "standardService",
            serviceNumber: "850E",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "850E",
                    top: "SHENTON",
                    bottom: "WAY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 1,11",
                "YISHUN RING RD",
                "DHOBY GHAUT MRT",
                "BRAS BASAH RD",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    650: {
        front: {
            renderType: "standardService",
            serviceNumber: "850E",
            destination: {
                text: "YISHUN RING RD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "850E",
                    top: "YISHUN",
                    bottom: "RING ROAD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "ROBINSON RD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "STAMFORD RD",
                    font: "Mobitec-7:7"
                },
                "DHOBY GHAUT MRT",
                "YISHUN ST 41",
                "YISHUN AVE 1,11"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    651: {
        front: {
            renderType: "standardService",
            serviceNumber: "951E",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "951E",
                    top: "SHENTON",
                    bottom: "WAY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "WOODLANDS AVE 4,5",
                    font: "Mobitec-7:4"
                },
                "DHOBY GHAUT MRT",
                "BRAS BASAH RD",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    652: {
        front: {
            renderType: "standardService",
            serviceNumber: "951E",
            destination: {
                text: "WOODLANDS ST 82",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "951E",
                    top: "WOODLANDS",
                    bottom: "STREET 82",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "ROBINSON ROAD",
                "STAMFORD ROAD",
                "DHOBY GHAUT MRT",
                {
                    text: "WOODLANDS AVE 5,4",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    653: {
        front: {
            renderType: "standardService",
            serviceNumber: "979",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "979",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "PETIR / JELEBU RD",
                    font: "Mobitec-7:5:3"
                },
                "WOODLANDS RD",
                "C.C.K DR / NTH 5",
                "C.C.K ST 52 / DR",
                "C.C.K NORTH 7",
                "C.C.K CRES (LOOP)"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    654: {
        front: {
            renderType: "standardService",
            serviceNumber: "983",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "983",
                    top: "CHOA CHU KANG",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C.C.K AVE 4 ,5",
                "C.C.K AVE 6 ,1",
                "CHOA CHU KANG RD",
                "PETIR ROAD",
                "JELEBU RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    655: {
        front: {
            renderType: "standardService",
            serviceNumber: "979M",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "979M",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:8"
                },
                "PETIR / JELEBU RD",
                "WOODLANDS RD",
                "C.C.K DR / NTH 6",
                {
                    text: "C.C.K NTH 5 (LOOP)",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    656: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "ORCHARD ROAD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "ORCHARD",
                    bottom: "ROAD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "BT PANJANG RD",
                    font: "Mobitec-7:4"
                },
                "SENJA ROAD / LINK",
                "JELAPANG ROAD",
                "SEGAR / FAJAR RD",
                "BT PANJANG RING RD",
                "BKE / PIE",
                "WHITLEY ROAD",
                "STEVENS / SCOTTS RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    657: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "PENANG RD",
                {
                    text: "SOMERSET ROAD",
                    font: "Mobitec-7:7"
                },
                "ORCHARD TURN",
                "SCOTTS / STEVENS RD",
                "WHITLEY ROAD",
                "PIE / BKE",
                "BT PANJANG RING RD",
                "FAJAR / SEGAR RD",
                "JELAPANG RD",
                "SENJA LINK / ROAD",
                "BT PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    658: {
        front: {
            renderType: "standardService",
            serviceNumber: "969",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "TAMPINES",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7",
                "GAMBAS AVENUE",
                "YISHUN AVE 5 ,2",
                "SLE / TPE",
                "TAMPINES AVE 9",
                "TAMPINES CONCOURSE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    659: {
        front: {
            renderType: "standardService",
            serviceNumber: "969",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 9",
                "TPE / SLE",
                "YISHUN AVE 2 ,5",
                "GAMBAS AVENUE",
                "WDL AVENUE 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1101: {
        front: {
            renderType: "standardService",
            serviceNumber: "110",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "110",
                    top: "CHANGI",
                    bottom: "AIRPORT",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "COMPASSVALE DR",
                "ANCHORVALE DR",
                "ANCHORVALE RD",
                "ANCHORVALE ST",
                {
                    text: "T P E",
                    font: "Mobitec-7:7"
                },
                "AIRPORT BOULEVARD",
                "PTB 3,1,2,4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1102: {
        front: {
            renderType: "standardService",
            serviceNumber: "110",
            destination: {
                text: "COMPASSVALE INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "110",
                    top: "COMPASSVALE",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "PTB 3,1,2,4",
                "AIRPORT BOULEVARD",
                "TPE",
                "ANCHORVALE ST",
                "ANCHORVALE RD",
                "ANCHORVALE DR",
                "COMPASSVALE DR"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1111: {
        front: {
            renderType: "destScroll",
            top: "Sorry!",
            topFont: "Mobitec-7:7",

            bottom: "Not in Service",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    1191: {
        front: {
            renderType: "destScroll",
            top: "PUNGGOL TEMP INT",
            topFont: "Mobitec-7:7",

            bottom: "SENGKANG EAST WAY",
            bottomFont: "Mobitec-7:6:1",

            serviceNumber: "119"
        }
    },
    1671: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: {
                text: "BUKIT MERAH",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "BUKIT MERAH",
                    topFont: "Mobitec-13:7"
                },
                "THOMSON ROAD",
                "SCOTTS ROAD",
                "ORCHARD ROAD",
                "SHENTON WAY",
                "JLN BUKIT MERAH"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1672: {
        front: {
            renderType: "standardService",
            serviceNumber: "167",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "167",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CANTONMENT RD",
                "CECIL STREET",
                "ORCHARD TURN",
                "SCOTTS ROAD",
                "THOMSON ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1691: {
        front: {
            renderType: "standardService",
            serviceNumber: "169",
            destination: {
                text: "ANG MO KIO",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "ANG MO KIO",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 9,8",
                "ADMIRALTY ROAD EAST",
                "YISHUN MRT,AVE 2",
                "SEMBAWANG RD",
                "UPP THOMSON RD",
                "ANG MO KIO AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1692: {
        front: {
            renderType: "standardService",
            serviceNumber: "169",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "169",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "ANG MO KIO AVE 3",
                "UPP THOMSON RD",
                "YISHUN AVE 3,2",
                "YISHUN MRT",
                "SEMBAWANG RD",
                "ADMIRALTY RD EAST",
                "WOODLANDS AVE 8,9"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1693: {
        front: {
            renderType: "destScroll",
            serviceNumber: "169A",
            top: "ENDS AT",
            bottom: "YISHUN INT/MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    1711: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "MARINA CENTRE",
                    topFont: "Mobitec-13:7"
                },
                "SEMBAWANG ROAD",
                "MANDAI ROAD",
                "BT PANJANG ROAD",
                "UPP BT TIMAH RD",
                "DUNEARN ROAD",
                "ORCHARD ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1712: {
        front: {
            renderType: "standardService",
            serviceNumber: "171",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "171",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SOMERSET ROAD",
                "SCOTTS ROAD",
                "BUKIT TIMAH ROAD",
                "BT PANJANG ROAD",
                "MANDAI ROAD",
                "SEMBAWANG ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1721: {
        front: {
            renderType: "standardService",
            serviceNumber: "172",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "172",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG DRIVE",
                "CHOA CHU KANG AVE 1,3",
                "BRICKLAND ROAD",
                "CHOA CHU KANG RD",
                "JALAN BAHAR"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1722: {
        front: {
            renderType: "standardService",
            serviceNumber: "172",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "172",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "JLN BOON LAY",
                "JALAN BAHAR",
                "CHOA CHU KANG RD",
                "BRICKLAND RD",
                "CHOA CHU KANG AVE 3,1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1761: {
        front: {
            renderType: "standardService",
            serviceNumber: "176",
            destination: {
                text: "BUKIT MERAH",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "176",
                    top: "BUKIT MERAH",
                    topFont: "Mobitec-13:7"
                },
                "UPP BUKIT TIMAH RD",
                {
                    text: "HILLVIEW AVENUE",
                    font: "Mobitec-7:7"
                },
                "BT BATOK CTR / MRT",
                "JURONG TOWN HALL",
                "WEST COAST HIGHWAY",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1762: {
        front: {
            renderType: "standardService",
            serviceNumber: "176",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "176",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "TELOK BLANGAH RD",
                "WEST COAST HIGHWAY",
                "JURONG TOWN HALL",
                "BT BATOK CTR/ MRT",
                {
                    text: "HILLVIEW AVENUE",
                    font: "Mobitec-7:7"
                },
                "UPP BUKIT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1781: {
        front: {
            renderType: "standardService",
            serviceNumber: "178",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "178",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS CENTRE RD",
                "UPP BT TIMAH",
                "BUKIT BATOK",
                "JURONG TOWN HALL",
                "CORPORATION RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1782: {
        front: {
            renderType: "standardService",
            serviceNumber: "178",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "178",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CORPORATION RD",
                "JURONG TOWN HALL",
                "BUKIT BATOK",
                "UPP BUKIT TIMAH",
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1783: {
        front: {
            renderType: "destScroll",
            serviceNumber: "178A",
            top: "ENDS AT",
            bottom: "KRANJI MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    1801: {
        front: {
            renderType: "standardService",
            serviceNumber: "180",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "180",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "BOON LAY WAY",
                {
                    text: "JURONG TOWN HALL",
                    font: "Mobitec-7:5:3"
                },
                "BUKIT BATOK RD",
                {
                    text: "CHOA CHU KANG RD",
                    font: "Mobitec-7:5:3"
                },
                "PETIR RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1802: {
        front: {
            renderType: "standardService",
            serviceNumber: "180",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "180",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BT PANJANG RD",
                {
                    text: "CHOA CHU KANG RD",
                    font: "Mobitec-7:5:3"
                },
                "BUKIT BATOK RD",
                {
                    text: "JURONG TOWN HALL",
                    font: "Mobitec-7:5:3"
                },
                "BOON LAY WAY"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1803: {
        front: {
            renderType: "destScroll",
            serviceNumber: "180A",
            top: "ENDS AT",
            bottom: "BT PANJANG ROAD",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    1841: {
        front: {
            renderType: "standardService",
            serviceNumber: "184",
            destination: {
                text: "CLEMENTI",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "184",
                    top: "CLEMENTI MRT",
                    topFont: "Mobitec-13:8"
                },
                "BT PANJANG RD",
                "CASHEW ROAD",
                "UPP BT TIMAH RD",
                "JLN ANAK BUKIT",
                "CLEMENTI ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1842: {
        front: {
            renderType: "standardService",
            serviceNumber: "184",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "184",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "CLEMENTI ROAD",
                {
                    text: "UPP BUKIT TIMAH RD",
                    font: "Mobitec-7:5:3"
                },
                "CASHEW ROAD",
                {
                    text: "BUKIT PANJANG RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1871: {
        front: {
            renderType: "standardService",
            serviceNumber: "187",
            destination: {
                text: "BOON LAY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "187",
                    top: "BOON LAY",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "BUKIT PANJANG RD",
                "BUKIT BATOK WEST",
                "BUKIT BATOK CTR,MRT",
                {
                    text: "JURONG EAST",
                    font: "Mobitec-7:7"
                },
                {
                    text: "BOON LAY WAY",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1872: {
        front: {
            renderType: "standardService",
            serviceNumber: "187",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "187",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BOON LAY WAY",
                "JURONG EAST",
                {
                    text: "BT BATOK CTR,MRT",
                    font: "Mobitec-7:5:3"
                },
                "BT BATOK WEST",
                {
                    text: "BT PANJANG RD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "WOODLANDS AVE 3",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1881: {
        front: {
            renderType: "standardService",
            serviceNumber: "188",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "CHOA CHU KANG WAY",
                "B.B. WEST AVE 4,2",
                "B.B. WEST AVE 3,6",
                "TOH GUAN ROAD",
                "BOON LAY WAY",
                "AYE, CLEMENTI RD",
                "PASIR PANJANG RD",
                "HAW PAR VILLA",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1882: {
        front: {
            renderType: "standardService",
            serviceNumber: "188",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TELOK BLANGAH RD",
                "HAW PAR VILLA",
                "PASIR PANJANG RD",
                "CLEMENTI RD, AYE",
                "BOON LAY WAY",
                "TOH GUAN ROAD",
                "B.B. WEST AVE 6,3",
                "B.B. WEST AVE 2,4",
                "CHOA CHU KANG WAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1883: {
        front: {
            renderType: "destScroll",
            serviceNumber: "188A",
            top: "ENDS AT",
            bottom: "ITE COLLEGE WEST",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    1884: {
        front: {
            renderType: "standardService",
            serviceNumber: "188e",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188e",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "CHOA CHU KANG WAY",
                {
                    text: "B. B. WEST AVE 7",
                    font: "Mobitec-7:7"
                },
                "B. B. WEST AVE 4",
                "B. B. WEST AVE 2",
                "B. B. WEST AVE 3",
                "B. B. WEST AVE 6",
                {
                    text: "TOH GUAN ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "CLEMENTI ROAD",
                    font: "Mobitec-7:7"
                },
                "PASIR PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1885: {
        front: {
            renderType: "standardService",
            serviceNumber: "188R",
            destination: {
                text: "R W S",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188R",
                    top: "RESORTS WORLD",
                    bottom: "SENTOSA",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C. C. K WAY",
                "B.B WEST AVE 7",
                "B.B WEST AVE 4",
                "B.B WEST AVE 2",
                "B.B WEST AVE 3",
                "B.B WEST AVE 6",
                "B. BATOK AVE 1",
                {
                    text: "JURONG EAST CTRL",
                    font: "Mobitec-7:5:3"
                },
                "TOH GUAN ROAD",
                {
                    text: "TELOK BLANGAH ROAD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1886: {
        front: {
            renderType: "standardService",
            serviceNumber: "188R",
            destination: {
                text: "C. C. K INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "188R",
                    top: "CHOA CHU KANG",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "TELOK BLANGAH RD",
                    font: "Mobitec-7:5:3"
                },
                "TOH GUAN ROAD",
                "B. BATOK AVE 1",
                "B.B WEST AVE 6",
                "B.B WEST AVE 3",
                "B.B WEST AVE 2",
                "B.B WEST AVE 4",
                "B.B WEST AVE 7",
                "C. C. K WAY"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    1901: {
        front: {
            renderType: "standardService",
            serviceNumber: "190",
            destination: {
                text: "KAMPONG BAHRU TER",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "190",
                    top: "KAMPONG BAHRU",
                    bottom: "TERMINAL",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BT PANJANG RD",
                "STEVENS ROAD",
                "ORCHARD ROAD",
                "HILL STREET",
                "CHINATOWN"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1902: {
        front: {
            renderType: "standardService",
            serviceNumber: "190",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "190",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "HILL STREET",
                "SOMERSET ROAD",
                "SCOTTS ROAD",
                "STEVENS ROAD",
                "BUKIT PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    1903: {
        front: {
            renderType: "destScroll",
            serviceNumber: "190A",
            top: "ENDS AT",
            bottom: "DHOBY GHAUT MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    2931: {
        front: {
            renderType: "standardService",
            serviceNumber: "293",
            destination: {
                text: "TAMPINES INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "293",
                    top: "TAMPINES",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TAMPINES CTRL 1",
                "TAMPINES AVE 5",
                "TAMPINES AVE 4",
                "TAMPINES AVE 3",
                "TAMPINES AVE 8",
                "TAMPINES AVE 5",
                "TAMPINES ST 71",
                "TAMPINES AVE 8",
                "TAMPINES AVE 3",
                "TAMPINES AVE 4",
                "TAMPINES AVE 5",
                "TAMPINES CTRL 1",
                "TAMPINES AVE 7",
                "TAMPINES ST 41",
                "TAMPINES AVE 9",
                "TAMPINES ST 45",
                "TAMPINES AVE 7",
                "TAMPINES AVE 9",
                "TAMPINES ST 42",
                "TAMPINES AVE 7",
                "TAMPINES ST 45",
                "TAMPINES AVE 9",
                "TAMPINES ST 41",
                "TAMPINES AVE 7",
                "TAMPINES CTRL 1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    3001: {
        front: {
            renderType: "standardService",
            serviceNumber: "300",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "300",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG AVE 4",
                "CHOA CHU KANG AVE 2",
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    3011: {
        front: {
            renderType: "standardService",
            serviceNumber: "301",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "301",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "C. C. K WAY",
                    font: "Mobitec-7:7"
                },
                "C. C. K AVE 2,3",
                "C. C. K AVENUE 5",
                {
                    text: "KEAT HONG CLOSE (LOOP)",
                    font: "Mobitec-7:4"
                },
                "C. C. K AVE 6,1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    3021: {
        front: {
            renderType: "standardService",
            serviceNumber: "302",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "302",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG ST 52",
                "CHOA CHU KANG CRES"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    3022: {
        front: {
            renderType: "destScroll",
            serviceNumber: "302A",
            top: "ENDS AT",
            bottom: "OPP YEW TEE MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    3071: {
        front: {
            renderType: "standardService",
            serviceNumber: "307",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "307",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG CENTRAL",
                {
                    text: "TECK WHYE LANE",
                    font: "Mobitec-7:5:3"
                },
                "CHOA CHU KANG CENTRAL",
                "CHOA CHU KANG AVE 4",
                "CHOA CHU KANG NORTH 5",
                "CHOA CHU KANG NORTH 6",
                {
                    text: "YEW TEE MRT",
                    font: "Mobitec-7:7"
                },
                "CHOA CHU KANG ST 62"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3072: {
        front: {
            renderType: "destScroll",
            serviceNumber: "307A",
            top: "ENDS AT",
            bottom: "OPP C. C. K. MRT",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    3073: {
        front: {
            renderType: "destScroll",
            serviceNumber: "307T",
            top: "ENDS AT",
            bottom: "C.C.K INT/MRT/LRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    3421: {
        front: {
            renderType: "destScroll",
            serviceNumber: "NB-1",
            spacing: 1,
            top: "On-Demand Public Bus",
            bottom: "CBD To Bedok &Tampines",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        },
    },
    3422: {
        front: {
            renderType: "destScroll",
            serviceNumber: "NB-2",
            spacing: 1,
            top: "On-Demand Public Bus",
            bottom: "CBD To Bedok &Tampines",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        },
    },
    3423: {
        front: {
            renderType: "destScroll",
            serviceNumber: "NB-3",
            spacing: 1,
            top: "On-Demand Public Bus",
            bottom: "CBD To Bedok &Tampines",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        },
    },
    3424: {
        front: {
            renderType: "destScroll",
            serviceNumber: "NB-4",
            spacing: 1,
            top: "On-Demand Public Bus",
            bottom: "CBD To Bedok &Tampines",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        },
    },
    3425: {
        front: {
            renderType: "destScroll",
            serviceNumber: "NB-5",
            spacing: 1,
            top: "On-Demand Public Bus",
            bottom: "CBD To Bedok &Tampines",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        },
    },
    3426: {
        front: {
            renderType: "destScroll",
            serviceNumber: "NB-6",
            spacing: 1,
            top: "On-Demand Public Bus",
            bottom: "CBD To Bedok &Tampines",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        },
    },
    6011: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "JOO KOON - LAKESIDE",
            bottom: "PARALLEL BUS SERVICE",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    6012: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "LAKESIDE - JOO KOON",
            bottom: "PARALLEL BUS SERVICE",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    6021: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "BOON LAY - LAKESIDE",
            bottom: "PARALLEL BUS SERVICE",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    6022: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "LAKESIDE - BOON LAY",
            bottom: "PARALLEL BUS SERVICE",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    6031: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "TANAH MERAH - CHANGI AIRPORT",
            bottom: "PARALLEL BUS SERVICE",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    6032: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "CHANGI AIRPORT - TANAH MERAH",
            bottom: "PARALLEL BUS SERVICE",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    6041: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "TANAH MERAH - CHANGI AIRPORT",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "TANAH MERAH - CHANGI AIRPORT",
                    bottom: "PARALLEL BUS SERVICE",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:5:3"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "TANAH MERAH - CHANGI AIRPORT",
                    bottom: "DIRECT (SKIPS EXPO)",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6042: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "CHANGI AIRPORT - TANAH MERAH",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "CHANGI AIRPORT - TANAH MERAH",
                    bottom: "PARALLEL BUS SERVICE",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:5:3"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "CHANGI AIRPORT - TANAH MERAH",
                    bottom: "DIRECT (SKIPS EXPO)",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6101: {
        front: {
            renderType: "standardService",
            serviceNumber: "61",
            destination: {
                text: "EUNOS",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "61",
                    top: "EUNOS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CLEMENTI RD",
                "HOLLAND RD,AVE",
                "TELOK BLANGAH RD",
                "CHINATOWN",
                "VICTORIA ST",
                "KALLANG BAHRU",
                "MACPHERSON RD",
                "UBI AVE 2"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6102: {
        front: {
            renderType: "standardService",
            serviceNumber: "61",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "61",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "UBI AVE 2",
                "MACPHERSON RD",
                "KALLANG BAHRU",
                "NORTH BRIDGE RD",
                "SOUTH BRIDGE RD",
                "TELOK BLANGAH RD",
                "HOLLAND RD",
                "CLEMENTI RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6203: {
        front: {
            renderType: "standardService",
            serviceNumber: "62A",
            destination: {
                text: "ALJUNED MRT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62A",
                    top: "ENDS AT",
                    bottom: "ALJUNED MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "ABCDEFG",
                "HIJKLMNO",
                "PQRSTUV",
                "WXYZ",
                "SOUTH BRIDGE RD",
                "TELOK BLANGAH RD",
                "HOLLAND RD",
                "CLEMENTI RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6204: {
        front: {
            renderType: "standardService",
            serviceNumber: "62M",
            destination: {
                text: "UPP PAYA LEBAR RD",
                font: "Mobitec-7:5"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62M",
                    top: "ENDS AT",
                    bottom: "BLK 115",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "HOUGANG AVE 1",
                "FEEQ WANTED THIS"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6441: {
        front: {
            renderType: "standardService",
            serviceNumber: "644",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "644",
                    top: "WELCOME ABOARD",
                    bottom: "BUSGAG TOUR",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KOVAN HUB ",
                "PUNGGOL STN...",
                "TAXI STAND",
                "YISHUN STN...",
                "TAXI STAND",
                "EXPRESS",
                "PHOTOSHOOT",
                "EXPRESS",
                "EXPRESS",
                "HARBOURFRONT MRT"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6442: {
        front: {
            renderType: "standardService",
            serviceNumber: "644",
            destination: {
                text: "HOUGANG DEPOT",
                font: "Mobitec-7:5"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "644",
                    top: "Sorry!",
                    bottom: "Not In Service",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BUSGAG ADMINS ONLY",
                "CHARTERED"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    6531: {
        front: {
            renderType: "standardService",
            serviceNumber: "653",
            destination: {
                text: "MARINA BLVD",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "MARINA BLVD",
                    topFont: "Mobitec-13:8"
                },
                {
                    text: "HUME AVE",
                    font: "Mobitec-7:7"
                },
                "HILLVIEW RD / AVE",
                "B.B EAST AVE 2 / 3",
                "ROBINSON RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6532: {
        front: {
            renderType: "standardService",
            serviceNumber: "653",
            destination: {
                text: "HILLVIEW AVE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "HILLVIEW AVE",
                    topFont: "Mobitec-13:7"
                },
                "CENTRAL BLVD",
                "SHENTON WAY",
                "B.B EAST AVE 3 / 2",
                "HUME AVE",
                "HILLVIEW RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6561: {
        front: {
            renderType: "standardService",
            serviceNumber: "656",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "656",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "ADMIRALTY LINK",
                "SEMBAWANG DR",
                "SEMBAWANG AVE",
                "DHOBY GHAUT",
                "BRAS BASAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6562: {
        front: {
            renderType: "standardService",
            serviceNumber: "653",
            destination: {
                text: "CANBERRA RD",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "653",
                    top: "CANBERRA RD",
                    topFont: "Mobitec-13:8"
                },
                "ROBINSON RD",
                "DHOBY GHAUT",
                "SEMBAWANG AVE",
                "SEMBAWANG DR",
                "ADMIRALTY LINK"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6571: {
        front: {
            renderType: "standardService",
            serviceNumber: "657",
            destination: {
                text: "MARINA BLVD",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "MARINA BLVD",
                    topFont: "Mobitec-13:8"
                },
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1",
                "TOH GUAN RD",
                "ROBINSON RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6572: {
        front: {
            renderType: "standardService",
            serviceNumber: "657",
            destination: {
                text: "JURING WEST AVE 1",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "657",
                    top: "JURONG WEST",
                    bottom: "AVENUE 1",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CENTRAL BLVD",
                "SHENTON WAY",
                "TOH GUAN RD",
                "JURONG EAST AVE 1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6701: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "67",
                    top: "TAMPINES",
                    bottom: " INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "UPP BT TIMAH RD",
                "DUNEARN ROAD",
                "SERANGOON RD",
                "SIMS AVENUE",
                "NEW UPP CHANGI RD",
                "BEDOK NORTH AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6702: {
        front: {
            renderType: "standardService",
            serviceNumber: "67",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "67",
                    top: "CHOA CHU KANG",
                    bottom: " INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BEDOK NORTH AVE 3",
                "NEW UPP CHANGI RD",
                "GEYLANG ROAD",
                "JALAN BESAR",
                "BUKIT TIMAH RD",
                "UPP BUKIT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    6703: {
        front: {
            renderType: "destScroll",
            serviceNumber: "67A",
            top: "ENDS AT   OPP",
            bottom: "CORONATION PLAZA",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    6704: {
        front: {
            renderType: "destScroll",
            serviceNumber: "67C",
            top: "ENDS AT GEYLANG ROAD",
            bottom: "(BEFORE CITY PLAZA)",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        }
    },
    6705: {
        front: {
            renderType: "destScroll",
            serviceNumber: "67W",
            top: "ENDS AT",
            bottom: "LITTLE INDIA",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    7001: {
        front: {
            renderType: "standardService",
            serviceNumber: "700",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "700",
                    top: "SHENTON WAY",
                    topFont: "Mobitec-13:7"
                },
                "BT PANJANG RD",
                "PETIR ROAD",
                "DUNEARN RD",
                "SCOTTS ROAD",
                "ORCHARD ROAD",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7002: {
        front: {
            renderType: "standardService",
            serviceNumber: "700",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "700",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "STAMFORD RD",
                "SOMERSET RD",
                "ORCHARD TURN",
                "SCOTTS ROAD",
                "BUKIT TIMAH RD",
                "PETIR RD",
                {
                    text: "BUKIT PANJANG RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    7003: {
        front: {
            renderType: "standardService",
            serviceNumber: "700A",
            destination: {
                text: "SUNTEC",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "700A",
                    top: "SUNTEC",
                    topFont: "Mobitec-13:7"
                },
                "BUKIT PANJANG RD",
                "DUNEARN RD",
                "SCOTTS RD",
                "ORCHARD RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    7004: {
        front: {
            renderType: "standardService",
            serviceNumber: "700A",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "700A",
                    top: "BUKIT",
                    bottom: "PANJANG",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "STAMFORD RD",
                "SOMERSET RD",
                {
                    text: "ORCHARD TURN",
                    font: "Mobitec-7:5:3"
                },
                "SCOTTS RD",
                {
                    text: "BUKIT TIMAH RD",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "BT PANJANG RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    7501: {
        front: {
            renderType: "standardService",
            serviceNumber: "75",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "75",
                    top: "MARINA CENTRE",
                    topFont: "Mobitec-13:7"
                },
                "UPP BT TIMAH RD",
                "CLEMENTI ROAD",
                "HOLLAND ROAD",
                "GREAT WORLD CITY",
                "OUTRAM ROAD",
                "CANTONMENT RD",
                "ANSON ROAD",
                "ROBINSON ROAD",
                "EMPRESS PLACE"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    7502: {
        front: {
            renderType: "standardService",
            serviceNumber: "75",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "75",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:8"
                },
                "COLLYER QUAY",
                "SHENTON WAY",
                "OUTRAM RD, MRT",
                "HOLLAND ROAD",
                "CLEMENTI ROAD",
                "UPP BT TIMAH RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8251: {
        front: {
            renderType: "standardService",
            serviceNumber: "825",
            destination: {
                text: "LENTOR LOOP",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "825",
                    top: "LOOPING AT",
                    bottom: "LENTOR LOOP",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEASONS PARK",
                "THOMSON GROVE",
                "CASTLE GREEN",
                "WELCOME ABOARD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8531: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN CTRL 1",
                "ANG MO KIO AVE 6",
                "ANG MO KIO AVE 1",
                "UPP SERANGOON RD",
                "KALLANG BAHRU"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8532: {
        front: {
            renderType: "standardService",
            serviceNumber: "853",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KALLANG BAHRU",
                "UPP SERANGOON RD",
                "ANG MO KIO AVE 1",
                "ANG MO KIO AVE 6",
                "YISHUN CTRL 1"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8533: {
        front: {
            renderType: "standardService",
            serviceNumber: "853C",
            destination: {
                text: "UPP E. COAST RD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853C",
                    top: "UPPER",
                    bottom: "EAST COAST RD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN CTRL 1",
                "ANG MO KIO AVE 6",
                "UPP SERANGOON RD",
                "KALLANG BAHRU",
                "TANJONG KATONG",
                "MARINE PARADE RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8534: {
        front: {
            renderType: "standardService",
            serviceNumber: "853C",
            destination: {
                text: "YISHUN ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "853C",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TANJONG KATONG",
                "KALLANG BAHRU",
                "UPP SERANGOON RD",
                "ANG MO KIO AVE 6",
                {
                    text: "YISHUN CTRL 1",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8541: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: {
                text: "BEDOK ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "BEDOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "YIO CHU KANG RD",
                    font: "Mobitec-7:5:3"
                },
                "HOUGANG AVE 2",
                "HOUGANG AVE 3",
                "JLN EUNOS, MRT"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8542: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: {
                text: "YISHUN ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "JLN EUNOS, MRT",
                "HOUGANG AVE 3",
                "HOUGANG AVE 2",
                {
                    text: "YIO CHU KANG RD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8543: {
        front: {
            renderType: "standardService",
            serviceNumber: "854e",
            destination: {
                text: "BEDOK ",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "854e",
                    top: "BEDOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "YIO CHU KANG RD",
                    font: "Mobitec-7:5:3"
                },
                "HOUGANG AVE 2",
                "HOUGANG AVE 3",
                "JLN EUNOS",
                "P I E"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8551: {
        front: {
            renderType: "standardService",
            serviceNumber: "855",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "YIO CHU KANG RD",
                "UPP THOMSON RD",
                {
                    text: "FARRER ROAD",
                    font: "Mobitec-7:7"
                },
                "JLN BUKIT MERAH",
                "LOWER DELTA RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8552: {
        front: {
            renderType: "standardService",
            serviceNumber: "855",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "855",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "LOWER DELTA RD",
                "JLN BUKIT MERAH",
                "FARRER ROAD",
                "UPP THOMSON ROAD",
                "YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8561: {
        front: {
            renderType: "standardService",
            serviceNumber: "856",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 5",
                "SEMBAWANG RD",
                "CANBERRA RD / MRT",
                "ADMIRALTY RD WEST",
                "SENOKO AVE",
                "ADMIRALTY RD",
                "WDL CENTRE RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8562: {
        front: {
            renderType: "standardService",
            serviceNumber: "856",
            destination: {
                text: "YISHUN INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "856",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                },
                "ADMIRALTY RD",
                "SENOKO AVE",
                "ADMIRALTY RD WEST",
                "CANBERRA RD / MRT",
                "SEMBAWANG RD",
                "YISHUN AVE 5"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8563: {
        front: {
            renderType: "destScroll",
            serviceNumber: "856A",
            top: "ENDS AT",
            bottom: "WDL TRAIN CHECKPT",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    8571: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: {
                text: "SUNTEC CITY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "SUNTEC",
                    bottom: "CITY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YIO CHU KANG RD,CTE",
                "JLN TOA PAYOH",
                "BENDEMEER RD",
                "JALAN BESAR",
                "BENCOOLEN ST"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8572: {
        front: {
            renderType: "standardService",
            serviceNumber: "857",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "857",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "STAMFORD RD",
                "SELEGIE RD",
                "SERANGOON RD",
                "JLN TOA PAYOH",
                "CTE,YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8573: {
        front: {
            renderType: "destScroll",
            serviceNumber: "857A",
            top: "ENDS AT",
            bottom: "OPP SUNRISE GDNS",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    8574: {
        front: {
            renderType: "destScroll",
            serviceNumber: "857",
            top: "ENDS AT",
            bottom: "PROMENADE MRT",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    8581: {
        front: {
            renderType: "standardService",
            serviceNumber: "858",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "CHANGI",
                    bottom: "AIRPORT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 4",
                "WDL AVENUE 9",
                "GAMBAS AVE",
                "WDL AVENUE 7",
                {
                    text: "SEMBAWANG WAY",
                    font: "Mobitec-7:5:3"
                },
                "CANBERRA RD",
                "SEMBAWANG RD",
                "YISHUN AVE 5, 2",
                "YISHUN CTRL 2",
                "S L E / T P E",
                {
                    text: "AIRPORT BOULEVARD",
                    font: "Mobitec-7:5:3"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8582: {
        front: {
            renderType: "standardService",
            serviceNumber: "858",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "858",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "AIRPORT BOULEVARD",
                    font: "Mobitec-7:5:3"
                },
                "T P E / S L E",
                "YISHUN CTRL 2",
                "YISHUN AVE 2, 5",
                "SEMBAWANG RD",
                "CANBERRA RD",
                "SEMBAWANG WAY",
                "WDL AVENUE 7",
                "GAMBAS AVE",
                "WDL AVENUE 9",
                "WDL AVENUE 4"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8583: {
        front: {
            renderType: "destScroll",
            serviceNumber: "858A",
            top: "ENDS AT",
            bottom: "YISHUN MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    8584: {
        front: {
            renderType: "destScroll",
            serviceNumber: "858B",
            top: "ENDS AT",
            bottom: "AFT SELETAR CAMP",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    8591: {
        front: {
            renderType: "standardService",
            serviceNumber: "859",
            destination: {
                text: "YISHUN ",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "YISHUN",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CANBERRA ROAD",
                "ADMIRALTY LINK",
                {
                    text: "SEMBAWANG CRES",
                    font: "Mobitec-7:5:3"
                },
                "SEMBAWANG RD",
                "YISHUN AVE 5"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8592: {
        front: {
            renderType: "standardService",
            serviceNumber: "859",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "YISHUN AVE 5",
                "SEMBAWANG RD",
                {
                    text: "SEMBAWANG CRES",
                    font: "Mobitec-7:5:3"
                },
                "ADMIRALTY LINK",
                "CANBERRA RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8593: {
        front: {
            renderType: "standardService",
            serviceNumber: "859A",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859A",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CANBERRA RD",
                "ADMIRALTY LINK",
                "SEMBAWANG CRES"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8594: {
        front: {
            renderType: "standardService",
            serviceNumber: "859B",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "859B",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG CRES",
                "ADMIRALTY LINK",
                "CANBERRA ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8821: {
        front: {
            renderType: "standardService",
            serviceNumber: "882",
            destination: {
                text: "SEMBAWANG PARK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "SEMBAWANG",
                    bottom: "PARK",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG DRIVE",
                "SEMBAWANG WAY",
                {
                    text: "CANBERRA RD",
                    font: "Mobitec-7:7"
                },
                "WELLINGTON CIRCLE",
                {
                    text: "MONTREAL DR",
                    font: "Mobitec-7:7"
                },
                "MONTREAL LINK",
                "SEMBAWANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8822: {
        front: {
            renderType: "standardService",
            serviceNumber: "882",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "882",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG RD",
                "MONTREAL LINK",
                "MONTREAL DRIVE",
                {
                    text: "WELLINGTON CIRCLE",
                    font: "Mobitec-7:5:3"
                },
                "CANBERRA ROAD",
                {
                    text: "SEMBAWANG WAY",
                    font: "Mobitec-7:5:3"
                },
                "SEMBAWANG DR"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    8823: {
        front: {
            renderType: "destScroll",
            serviceNumber: "882A",
            top: "ENDS AT",
            bottom: "MONTREAL LINK",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    8831: {
        front: {
            renderType: "standardService",
            serviceNumber: "883",
            destination: {
                text: "SEMBAWANG INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "883",
                    top: "SEMBAWANG",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG DR",
                "SEMBAWANG WAY",
                "CANBERRA LINK",
                "SEMBAWANG RD",
                "CANBERRA ST",
                "CANBERRA WAY",
                "YISHUN AVE 2",
                "YISHUN CTRL 2 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    8832: {
        front: {
            renderType: "destScroll",
            serviceNumber: "883A",
            top: "ENDS AT BLK 129A",
            bottom: "CANBERRA WAY",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9001: {
        front: {
            renderType: "standardService",
            serviceNumber: "900",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "900",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7",
                "WDL AVENUE 4",
                "WDL DRIVE 14",
                "WDL AVENUE 4",
                "WDL AVENUE 7"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9002: {
        front: {
            renderType: "standardService",
            serviceNumber: "900A",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "900A",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7",
                "WDL AVENUE 4",
                "WDL DRIVE 14",
                "S'PORE SPORTS SCH",
                {
                    text: "INNOVA JC",
                    font: "Mobitec-7:7"
                },
                "WDL AVENUE 4",
                "WDL AVENUE 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9011: {
        front: {
            renderType: "standardService",
            serviceNumber: "901",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "901",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 2,1",
                "WOODLANDS DRIVE 16",
                "WOODLANDS AVE 6"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9021: {
        front: {
            renderType: "standardService",
            serviceNumber: "902",
            destination: {
                text: "REPUBLIC POLY",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "902",
                    top: "REPUBLIC",
                    bottom: "POLYTECHNIC",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9031: {
        front: {
            renderType: "standardService",
            serviceNumber: "903",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "903",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 2",
                "MARSILING RD,DR",
                "WDL CENTRE RD",
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                },
                "ADMIRALTY RD",
                "MARSILING DR,RD",
                "WOODLANDS AVE 2"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9032: {
        front: {
            renderType: "standardService",
            serviceNumber: "903M",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "903M",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 2",
                "MARSILING RD",
                "MARSILING LANE",
                {
                    text: "MARSILING DR (LOOP)",
                    font: "Mobitec-7:4"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9041: {
        front: {
            renderType: "standardService",
            serviceNumber: "904",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "904",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7, 6",
                "WDL DRIVE 62, 73",
                {
                    text: "WDL CRESENT (LOOP)",
                    font: "Mobitec-7:4"
                },
                "WDL DRIVE 73, 62",
                "WDL AVENUE 6, 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9111: {
        front: {
            renderType: "standardService",
            serviceNumber: "911",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "911",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7",
                "WOODLANDS ST 83",
                "WOODLANDS AVE 2",
                "WOODLANDS ST 13",
                "WDL TRAIN CHECKPOINT",
                "WOODLANDS ST 13"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9112: {
        front: {
            renderType: "destScroll",
            serviceNumber: "911T",
            top: "ENDS AT",
            bottom: "WDL INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9121: {
        front: {
            renderType: "standardService",
            serviceNumber: "912",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 5,2,1",
                "WOODLANDS ST 41",
                "WDL TRAIN CHECKPOINT",
                "WOODLANDS ST 41",
                "WOODLANDS DR 50",
                "WOODLANDS RING RD",
                "ADMIRALTY MRT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9122: {
        front: {
            renderType: "standardService",
            serviceNumber: "912A",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912A",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVE 2,5",
                "WOODLANDS DR 50",
                "WOODLANDS RING RD",
                "ADMIRALTY MRT",
                "WDL AVE 7 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9123: {
        front: {
            renderType: "standardService",
            serviceNumber: "912B",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912B",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVE 5,2,1",
                "WDL STREET 41",
                {
                    text: "WDL TRAIN CHECKPOINT",
                    font: "Mobitec-7:4"
                },
                "WDL CTR RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9124: {
        front: {
            renderType: "destScroll",
            serviceNumber: "912T",
            top: "ENDS AT",
            bottom: "WDL INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9125: {
        front: {
            renderType: "standardService",
            serviceNumber: "912M",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "912M",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
                "WLD AVE 1,2,5",
                "WDL ST 41 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9131: {
        front: {
            renderType: "standardService",
            serviceNumber: "913",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "913",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7,6",
                "WOODLANDS DR 61",
                "WOODLANDS CIRCLE",
                "MARSILING RISE",
                "MARSILING RD",
                "WDL TRAIN CHECKPOINT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9132: {
        front: {
            renderType: "destScroll",
            serviceNumber: "913T",
            top: "ENDS AT",
            bottom: "WDL INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9201: {
        front: {
            renderType: "standardService",
            serviceNumber: "920",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "920",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:8"
                },
                "PETIR / JELEBU RD",
                "SENJAR RD / LINK",
                "JELAPANG RD",
                "SAUJANA RD",
                "FAJAR ROAD",
                "BT PANJANG RING RD",
                "BANGKIT RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9221: {
        front: {
            renderType: "standardService",
            serviceNumber: "922",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-13:8"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "922",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "PETIR / JELEBU RD",
                "JELAPANG ROAD",
                "SEGAR / FAJAR RD ",
                "BT PANJANG RING RD",
                "BANGKIT RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9251: {
        front: {
            renderType: "standardService",
            serviceNumber: "926",
            destination: {
                text: "SINGAPORE ZOO",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "926",
                    top: "SINGAPORE",
                    bottom: "ZOOLOGICAL GDN",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS CENTRE",
                "MANDAI ROAD",
                "MANDAI LAKE RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9252: {
        front: {
            renderType: "standardService",
            serviceNumber: "925",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KRANJI EXP WAY",
                "WOODLANDS RD",
                "SUNGEI KANDUT ST 1",
                "KRANJI WAY, RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9253: {
        front: {
            renderType: "standardService",
            serviceNumber: "925C",
            destination: {
                text: "SUNGEI BULOH",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925C",
                    top: "SUNGEI BULOH",
                    bottom: "NATURE PARK",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "KRANJI RD, LOOP",
                {
                    text: "KRANJI WAY",
                    font: "Mobitec-7:7"
                },
                {
                    text: "NEW TEO LANE",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9254: {
        front: {
            renderType: "standardService",
            serviceNumber: "925C",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "925C",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KRANJI WAY, LOOP",
                {
                    text: "KRANJI ROAD",
                    font: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9262: {
        front: {
            renderType: "standardService",
            serviceNumber: "926",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "926",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "MANDAI LAKE RD",
                "MANDAI ROAD",
                "WDL CENTRE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9271: {
        front: {
            renderType: "standardService",
            serviceNumber: "927",
            destination: {
                text: "SINGAPORE ZOO",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "927",
                    top: "SINGAPORE",
                    bottom: "ZOOLOGICAL GDN",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CHOA CHU KANG AVE 4",
                "CHOA CHU KANG DR,KJE",
                "WOODLANDS RD",
                "MANDAI RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9272: {
        front: {
            renderType: "standardService",
            serviceNumber: "927",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "927",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "MANDAI ROAD",
                "WOODLANDS RD",
                "KJE,CHOA CHU KANG DR",
                "CHOA CHU KANG AVE 4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9441: {
        front: {
            renderType: "standardService",
            serviceNumber: "944",
            destination: {
                text: "BUKIT BATOK",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "944",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BUKIT BATOK CTRL",
                "B.B WEST AVE 3",
                "B.B WEST AVE 6",
                "B.B WEST AVE 8",
                "BT BATOK RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9501: {
        front: {
            renderType: "standardService",
            serviceNumber: "950",
            destination: {
                text: "JB SENTRAL TER",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "950",
                    top: "WOODLANDS INT",
                    bottom: "SINGAPORE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "950",
                    top: "JB SENTRAL TER (LOOP)",
                    bottom: "JOHOR BAHRU",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9511: {
        front: {
            renderType: "standardService",
            serviceNumber: "951E",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "951E",
                    top: "SHENTON",
                    bottom: "WAY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 4,5",
                "DHOBY GHAUT MRT",
                "BRAS BASAH RD",
                "COLLYER QUAY"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9512: {
        front: {
            renderType: "standardService",
            serviceNumber: "951E",
            destination: {
                text: "WOODLANDS ST 82",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "951E",
                    top: "WOODLANDS",
                    bottom: "STREET 82",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "ROBINSON ROAD",
                "STAMFORD ROAD",
                "DHOBY GHAUT MRT",
                "WOODLANDS AVE 5,4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9601: {
        front: {
            renderType: "standardService",
            serviceNumber: "960",
            destination: {
                text: "MARINA CENTRE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "960",
                    top: "MARINA",
                    bottom: "CENTRE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS RD",
                "BT PANJANG RD",
                "BKE / PIE",
                "WHITLEY RD",
                "BUKIT TIMAH RD",
                "VICTORIA ST",
                "BRAS BASAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9602: {
        front: {
            renderType: "standardService",
            serviceNumber: "960",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "960",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "VICTORIA ST",
                "ROCHOR RD",
                "BUKIT TIMAH RD",
                "WHITLEY RD",
                "PIE / BKE",
                "BT PANJANG RD/LRT",
                "WOODLANDS RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9611: {
        front: {
            renderType: "standardService",
            serviceNumber: "961",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "961",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "UPP BT TIMAH RD",
                "QUEENSWAY",
                "JLN BUKIT MERAH",
                "CHINATOWN",
                "BEACH ROAD",
                "KALLANG BAHRU"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9612: {
        front: {
            renderType: "standardService",
            serviceNumber: "961",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "961",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KALLANG BAHRU",
                "BEACH ROAD",
                "CHINATOWN",
                "JLN BUKIT MERAH",
                "QUEENSWAY",
                "UPP BT TIMAH RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9613: {
        front: {
            renderType: "standardService",
            serviceNumber: "961C",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "961C",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "WOODLANDS AVE 3",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "UPP BT TIMAH RD",
                    font: "Mobitec-7:5:3"
                },
                "QUEENSWAY",
                {
                    text: "JLN BUKIT MERAH",
                    font: "Mobitec-7:5:3"
                },
                "CHINATOWN",
                "BEACH ROAD",
                "KALLANG BAHRU"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9614: {
        front: {
            renderType: "standardService",
            serviceNumber: "961C",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "961C",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KALLANG BAHRU",
                {
                    text: "BEACH ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "CHINATOWN",
                    font: "Mobitec-7:7"
                },
                "JLN BUKIT MERAH",
                {
                    text: "QUEENSWAY",
                    font: "Mobitec-7:7"
                },
                "UPP BT TIMAH RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9621: {
        front: {
            renderType: "standardService",
            serviceNumber: "962",
            destination: {
                text: "SEMBAWANG DR",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "962",
                    top: "SEMBAWANG",
                    bottom: "DRIVE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 5,6,7",
                "SEMBAWANG WAY",
                "SEMBAWANG CRES",
                "SEMBAWANG DRIVE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9622: {
        front: {
            renderType: "standardService",
            serviceNumber: "962",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "962",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG DR",
                "SEMBAWANG CRES",
                "SEMBAWANG WAY",
                "WOODLANDS AVE 7,6,5"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9623: {
        front: {
            renderType: "destScroll",
            serviceNumber: "962A",
            top: "ENDS AT",
            bottom: "SEMBAWANG DRIVE",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9624: {
        front: {
            renderType: "destScroll",
            serviceNumber: "962B",
            top: "ENDS AT",
            bottom: "SEMBAWANG DR",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9625: {
        front: {
            renderType: "destScroll",
            serviceNumber: "962C",
            top: "ENDS AT  BLK 680",
            bottom: "WOODLANDS AVE 6",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9631: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "MASRILING MRT",
                    font: "Mobitec-7:7"
                },
                "BUKIT PANJANG RD",
                "HILLVIEW AVENUE",
                "B.B EAST AVE 2,4",
                "B.B EAST AVE 3",
                "CLEMENTI AVE 6",
                {
                    text: "A Y E",
                    font: "Mobitec-7:7"
                },
                "NUH  , SISIR",
                "ALEXANDRA RD",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9632: {
        front: {
            renderType: "standardService",
            serviceNumber: "963",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TELOK BLANGAH RD",
                "ALEXANDRA RD",
                {
                    text: "SISIR , NUH",
                    font: "Mobitec-7:7"
                },
                {
                    text: "A Y E",
                    font: "Mobitec-7:7"
                },
                "CLEMENTI AVE 6",
                "B.B EAST AVE 3,4",
                "B.B EAST AVE 2",
                "HILLVIEW AVENUE",
                "BUKIT PANJANG RD",
                "MASRILING MRT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9633: {
        front: {
            renderType: "standardService",
            serviceNumber: "963e",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "HARBOURFRONT",
                    topFont: "Mobitec-13:7"
                },
                "MASRILING MRT",
                "BT PANJANG RD",
                "HILLVIEW AVE",
                {
                    text: "B.B EAST AVE 4",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "B.B EAST AVE 3",
                    font: "Mobitec-7:5:3"
                },
                "A Y E",
                "NUH ,SISIR",
                "ALEXANDRA RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9634: {
        front: {
            renderType: "standardService",
            serviceNumber: "963e",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963e",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TELOK BLANGAH RD",
                {
                    text: "A  Y  E",
                    font: "Mobitec-7:7"
                },
                {
                    text: "CLEMENTI AVE 6",
                    font: "Mobitec-7:7"
                },
                "B BATOK EAST AVE 3",
                {
                    text: "HILLVIEW AVE",
                    font: "Mobitec-7:7"
                },
                "UPP BT TIMAH RD",
                {
                    text: "B  K  E",
                    font: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9635: {
        front: {
            renderType: "standardService",
            serviceNumber: "963R",
            destination: {
                text: "SENTOSA",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "RESORTS WORLD",
                    bottom: "SENTOSA",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                {
                    text: "B K E",
                    font: "Mobitec-7:7"
                },
                "BT PANJANG RD",
                "PENDING ROAD",
                "PETIR ROAD",
                "JELEBU ROAD",
                "HILLVIEW AVE",
                "B.B EAST AVE 4,3",
                "C'WEALTH AVE WEST",
                "CLEMENTI AVE 6",
                {
                    text: "A Y E",
                    font: "Mobitec-7:7"
                },
                "ALEXANDRA ROAD",
                "TELOK BLANGAH RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9636: {
        front: {
            renderType: "standardService",
            serviceNumber: "963R",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "963R",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TELOK BLANGAH RD",
                {
                    text: "ALEXANDRA RD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "A Y E",
                    font: "Mobitec-7:7"
                },
                "CLEMENTI AVE 6",
                "C'WEALTH AVE WEST",
                "B. B EAST AVE 3,4",
                "HILLVIEW AVENUE",
                "BT PANJANG ROAD",
                {
                    text: "JELEBU ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "PETIR ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "PENDING ROAD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "B K E",
                    font: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9641: {
        front: {
            renderType: "standardService",
            serviceNumber: "964",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "964",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 7,6",
                "WOODLANDS AVE 9",
                "WOODLANDS LOOP",
                "WOODLANDS LINK"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9642: {
        front: {
            renderType: "destScroll",
            serviceNumber: "964A",
            top: "ENDS AT",
            bottom: "WOODLANDS LINK",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9651: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: {
                text: "SENGKANG INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "SENGKANG INT",
                    topFont: "Mobitec-13:7"
                },
                "ADMIRALTY MRT",
                "GAMBAS AVENUE",
                "YISHUN MRT, AVE 2",
                "SLE / TPE",
                "COMPASSVIEW ST, RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9652: {
        front: {
            renderType: "standardService",
            serviceNumber: "965",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "965",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "COMPASSVIEW RD, ST",
                "TPE / SLE",
                "YISHUN AVE 2, MRT",
                "GAMBAS AVENUE",
                "ADMIRALTY MRT"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9653: {
        front: {
            renderType: "destScroll",
            serviceNumber: "965A",
            top: "ENDS AT",
            bottom: "YISHUN INT / MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9660: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE",
                    bottom: "PARADE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 3",
                {
                    text: "PENDING / PETIR RD",
                    font: "Mobitec-7:5:3"
                },
                "JLN TOA PAYOH",
                {
                    text: "JLN KOLAM AYER",
                    font: "Mobitec-7:5:3"
                },
                {
                    text: "EUNOS MRT / STILL ROAD",
                    font: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE PARADE",
                    bottom: "( LOOP )",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "STILL ROAD / EUNOS MRT",
                    font: "Mobitec-7:4"
                },
                {
                    text: "JLN KOLAM AYER",
                    font: "Mobitec-7:5:3"
                },
                "JLN TOA PAYOH",
                {
                    text: "PETIR / PENDING RD",
                    font: "Mobitec-7:5:3"
                },
                "WDL AVENUE 3"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9661: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "MARINE",
                    bottom: "PARADE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WOODLANDS AVE 3",
                "PENDING / PETIR RD",
                "PIE (WHITLEY RD)",
                "JLN TOA PAYOH",
                "JLN KOLAM AYER",
                "EUNOS MRT",
                "STILL RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9662: {
        front: {
            renderType: "standardService",
            serviceNumber: "966",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "966",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "STILL RD",
                "EUNOS MRT",
                "JLN KOLAM AYER",
                "JLN TOA PAYOH",
                "PIE (WHITLEY RD)",
                "PETIR/PENDING RD",
                "WOODLANDS AVE 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9691: {
        front: {
            renderType: "standardService",
            serviceNumber: "969",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "TAMPINES",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "WDL AVENUE 7",
                "GAMBAS AVENUE",
                "YISHUN AVE 5 ,2",
                "SLE / TPE",
                "TAMPINES AVE 9",
                "TAMPINES CONCOURSE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9692: {
        front: {
            renderType: "standardService",
            serviceNumber: "969",
            destination: {
                text: "WOODLANDS INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "969",
                    top: "WOODLANDS",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 9",
                "TPE / SLE",
                "YISHUN AVE 2 ,5",
                "GAMBAS AVENUE",
                "WDL AVENUE 7"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9693: {
        front: {
            renderType: "destScroll",
            serviceNumber: "969A",
            top: "ENDS AT",
            bottom: "YISHUN INT/MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9701: {
        front: {
            renderType: "standardService",
            serviceNumber: "970",
            destination: {
                text: "SHENTON WAY",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "970",
                    top: "SHENTON",
                    bottom: "WAY",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "HILLVIEW RD, AVE",
                "JLN JURONG KECHIL",
                "DUNEARN RD",
                "SIXTH AVENUE",
                "COMMONWEALTH AVE",
                "KIM SENG ROAD",
                "EU TONG SEN ST"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9702: {
        front: {
            renderType: "standardService",
            serviceNumber: "970",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "970",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "NEW BRIDGE RD",
                    font: "Mobitec-7:7"
                },
                {
                    text: "ZION RD",
                    font: "Mobitec-7:7"
                },
                "COMMONWEALTH AVE",
                {
                    text: "SIXTH AVENUE",
                    font: "Mobitec-7:7"
                },
                "UPP BUKIT TIMAH RD",
                "JLN JURONG KECHIL",
                "HILLVIEW AVE, RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9711: {
        front: {
            renderType: "standardService",
            serviceNumber: "971E",
            destination: {
                text: "CECIL STREET",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "971E",
                    top: "CECIL STREET",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "BT PANJANG RING RD",
                    font: "Mobitec-7:4"
                },
                "JELAPANG ROAD",
                {
                    text: "SEGAR / FAJAR RD",
                    font: "Mobitec-7:5:3"
                },
                "WHITLEY ROAD",
                {
                    text: "SCOTTS / ORCHARD RD",
                    font: "Mobitec-7:4"
                },
                {
                    text: "NICOLL HIGHWAY",
                    font: "Mobitec-7:5:3"
                },
                "COLLYER QUAY",
                "RAFFLES QUAY",
                "SHENTON WAY",
                "ANSON ROAD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9712: {
        front: {
            renderType: "standardService",
            serviceNumber: "971E",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "971E",
                    top: "BUKIT",
                    bottom: "PANJANG",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "ANSON RD / CECIL ST",
                    font: "Mobitec-7:4"
                },
                "FULLERTON ROAD",
                "ESPLANADE DR",
                "STAMFORD ROAD",
                {
                    text: "ORCHARD/ PENANG RD",
                    font: "Mobitec-7:4"
                },
                "SOMERSET ROAD",
                {
                    text: "GARAGE / SCOTTS RD",
                    font: "Mobitec-7:4"
                },
                "WHITLEY ROAD",
                {
                    text: "BT PANJANG RING RD",
                    font: "Mobitec-7:4"
                },
                {
                    text: "FAJAR / SEGAR RD",
                    font: "Mobitec-7:4"
                },
                "JELAPANG ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9721: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "ORCHARD ROAD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "ORCHARD",
                    bottom: "ROAD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                    text: "BT PANJANG RD",
                    font: "Mobitec-7:4"
                },
                "SENJA ROAD / LINK",
                "JELAPANG ROAD",
                "SEGAR / FAJAR RD",
                "BT PANJANG RING RD",
                "BKE / PIE",
                "WHITLEY ROAD",
                "STEVENS / SCOTTS RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9722: {
        front: {
            renderType: "standardService",
            serviceNumber: "972",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "972",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "PENANG RD",
                {
                    text: "SOMERSET ROAD",
                    font: "Mobitec-7:7"
                },
                "ORCHARD TURN",
                "SCOTTS / STEVENS RD",
                "WHITLEY ROAD",
                "PIE / BKE",
                "BT PANJANG RING RD",
                "FAJAR / SEGAR RD",
                "JELAPANG RD",
                "SENJA LINK / ROAD",
                "BT PANJANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9723: {
        front: {
            renderType: "destScroll",
            serviceNumber: "972A",
            top: "ENDS AT",
            bottom: "DHOBY GHAUT MRT",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9731: {
        front: {
            renderType: "standardService",
            serviceNumber: "973",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "973",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "BT PANJANG ROAD",
                "PENDING / PETIR RD",
                "DAIRY FARM ROAD",
                "HILLVIEW RD / AVE",
                "HUME AVE (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9751: {
        front: {
            renderType: "standardService",
            serviceNumber: "975",
            destination: {
                text: "LIM CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "975",
                    top: "LIM CHU KANG",
                    topFont: "Mobitec-13:7"
                },
                "TECK WHYE AVE",
                "CHOA CHU KANG MRT",
                "C.C.K WAY,AVE 3",
                {
                    text: "OLD CHOA CHU KANG RD",
                    font: "Mobitec-7:4"
                },
                "LIM CHU KANG RD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9752: {
        front: {
            renderType: "standardService",
            serviceNumber: "975",
            destination: {
                text: "BUKIT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "975",
                    top: "BUKIT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                "LIM CHU KANG RD",
                {
                    text: "OLD CHOA CHU KANG RD",
                    font: "Mobitec-7:4"
                },
                "C.C.K  AVE 3,WAY",
                "CHOA CHU KANG MRT",
                {
                    text: "TECK WHYE AVE",
                    font: "Mobitec-7:7"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9753: {
        front: {
            renderType: "destScroll",
            serviceNumber: "975A",
            top: "ENDS AT",
            bottom: "LOR RUSUK",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7"
        }
    },
    9754: {
        front: {
            renderType: "destScroll",
            serviceNumber: "975B",
            top: "ENDS AT",
            bottom: "LIM CHU KANG LANE 3",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4"
        }
    },
    9791: {
        front: {
            renderType: "standardService",
            serviceNumber: "979",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "979",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:7"
                },
                {
                    text: "PETIR / JELEBU RD",
                    font: "Mobitec-7:5:3"
                },
                "WOODLANDS RD",
                "C.C.K DR / NTH 5",
                "C.C.K ST 52 / DR",
                "C.C.K NORTH 7",
                "C.C.K CRES (LOOP)"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9792: {
        front: {
            renderType: "standardService",
            serviceNumber: "979M",
            destination: {
                text: "BT PANJANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "979M",
                    top: "BT PANJANG",
                    topFont: "Mobitec-13:8"
                },
                "PETIR / JELEBU RD",
                "WOODLANDS RD",
                "C.C.K DR / NTH 6",
                "C.C.K NTH 5 (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9801: {
        front: {
            renderType: "standardService",
            serviceNumber: "980",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SEMBAWANG RD",
                "THOMSON RD",
                "BENCOOLEN ST",
                "MIDDLE ROAD",
                "BEACH ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9802: {
        front: {
            renderType: "standardService",
            serviceNumber: "980",
            destination: {
                text: "SEMBAWANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "980",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "BEACH ROAD",
                "VICTORIA ST",
                "ROCHOR RD",
                "THOMSON RD"
            ],
            scrollFont: "Mobitec-7:7"
        }
    },
    9811: {
        front: {
            renderType: "standardService",
            serviceNumber: "981",
            destination: {
                text: "SENOKO IND EST",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "SENOKO",
                    bottom: "INDUSTRIAL EST",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CANBERRA ROAD",
                "ADMIRALTY RD WEST",
                "SENOKO ROAD",
                "SENOKO LOOP"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9812: {
        front: {
            renderType: "standardService",
            serviceNumber: "981",
            destination: {
                text: "SEMBAWANG MRT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "981",
                    top: "SEMBAWANG",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SENOKO ROAD",
                "SENOKO LOOP",
                "ADMIRALTY RD WEST",
                "CANBERRA ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9821: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "MARINA BLVD",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "MARINA",
                    bottom: "BOULEVARD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C. C. K AVE 5,4",
                "C. C. K WAY,AVE 1",
                "TECK WHYE AVE",
                "CHOA CHU KANG RD",
                "BUKIT BATOK RD",
                {
                    text: "ANSON ROAD",
                    font: "Mobitec-7:7"
                },
                "ROBINSON ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9822: {
        front: {
            renderType: "standardService",
            serviceNumber: "982E",
            destination: {
                text: "C.C.K AVE 5",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "982E",
                    top: "CHOA CHU KANG",
                    bottom: "AVENUE 5",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "CENTRAL BLVD",
                "SHENTON WAY",
                "BUKIT BATOK ROAD",
                "CHOA CHU KANG RD",
                "TECK WHYE AVE",
                "C.C.K AVE 1,WAY",
                "C.C.K AVE 4"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9831: {
        front: {
            renderType: "standardService",
            serviceNumber: "983",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "983",
                    top: "CHOA CHU KANG",
                    bottom: "INTERCHANGE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "C.C.K AVE 4 ,5",
                "C.C.K AVE 6 ,1",
                "CHOA CHU KANG RD",
                "PETIR ROAD",
                "JELEBU RD (LOOP)"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9851: {
        front: {
            renderType: "standardService",
            serviceNumber: "985",
            destination: {
                text: "GEYLANG LOR 1",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "985",
                    top: "GEYLANG LOR 1/",
                    bottom: "KALLANG MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "TECK WHYE AVE",
                "B. B WEST AVE 7,4",
                "B. B WEST AVE 2",
                "B. B EAST AVE 2",
                "JLN JURONG KECHIL",
                "JLN TOA PAYOH",
                "BENDEMEER ROAD"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9852: {
        front: {
            renderType: "standardService",
            serviceNumber: "985",
            destination: {
                text: "CHOA CHU KANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "985",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "SERANGOON ROAD",
                "JLN TOA PAYOH",
                "JLN JURONG KECHIL",
                "B. B EAST AVE 2",
                "B. B WEST AVE 2, 4",
                "B. B WEST AVE 7",
                "TECK WHYE AVE"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9853: {
        front: {
            renderType: "destScroll",
            serviceNumber: "985A",
            top: "ENDS AT",
            bottom: "JLN JURONG KECHIL",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9911: {
        front: {
            renderType: "standardService",
            serviceNumber: "991",
            destination: {
                text: "CHOA CHU KANG INT",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "991",
                    top: "CHOA CHU KANG",
                    bottom: "INT / MRT / LRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "B. B WEST AVE 3, 6",
                "BUKIT BATOK ST 11",
                "B. B WEST AVE 8, 5",
                "BRICKLAND RD",
                "KEAT HONG LINK"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9912: {
        front: {
            renderType: "standardService",
            serviceNumber: "991",
            destination: {
                text: "BUKIT BATOK INT",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "991",
                    top: "BUKIT BATOK",
                    bottom: "INT / MRT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                "KEAT HONG LINK",
                "BRICKLAND RD",
                "B. B WEST AVE 5, 8",
                "BUKIT BATOK ST 11",
                "B. B WEST AVE 6, 3"
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    9913: {
        front: {
            renderType: "destScroll",
            serviceNumber: "991A",
            top: "ENDS AT PRINCESS",
            bottom: "ELIZABETH PRI SCH",
            topFont: "Mobitec-7:5:3",
            bottomFont: "Mobitec-7:5:3"
        }
    },
    9914: {
        front: {
            renderType: "destScroll",
            serviceNumber: "991B",
            top: "ENDS AT",
            bottom: "OPP C.C.K MARKET",
            topFont: "Mobitec-7:5:2", // sic
            bottomFont: "Mobitec-7:5:2"
        },
    },
}

EDSExtras.SMRT = {
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
            top: "STAY SAFE FROM WUHAN",
            topFont: "Mobitec-7:5:3",

            bottom: "WASH HANDS WITH SOAP",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    }
}

EDSImages.SMRT = {
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    'gas-temp-flower': [
        [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ]
}
