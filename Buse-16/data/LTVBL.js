EDSFormats.LTVBL = {
    scroll: {
        scroll: {
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 5000,

            font: "Buse-16:8",
            spacing: 1
        },

        text: "$preview"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Buse-16:8",
            spacing: {
                $$cond: {
                    "$spacing === null" : 1,
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
            spacing: {
                $$cond: {
                    "$topSpacing == null": "2",
                    "else": "$topSpacing"
                }
            },
            margin: {
                right: "width(serviceNumber)"
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": ""
                }
            },
            font: {
                $$cond: {
                    "$bottomFont !== null": "$bottomFont",
                    "else": "Buse-7:5"
                }
            },
            spacing: {
                $$cond: {
                    "$bottomSpacing == null": "2",
                    "else": "$bottomSpacing"
                }
            },
            margin: {
                right: "width(serviceNumber)",
                bottom: {
                    $$cond: {
                        "$bottomMargin == null": "1",
                        "else": "$bottomMargin"
                    }
                }
            }
        },

        text: `$serviceNumber+" "+$top+" "+$bottom`
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    }
}

EDSData.LTVBL = {
    1: {
        front: {
            renderType: "destScroll",
            serviceNumber: "1",
            top: "MOE-TRARALGON",
            topFont: "Buse-10:5:1",
            bottom: 'VIA MORWELL',
            bottomFont: "Buse-5:5",
            bottomMargin: 0
        }
    },
    2: {
        front: {
            renderType: "destScroll",
            serviceNumber: "2",
            top: [ { text: "MORWELL ", font: "Buse-7:5" }, { text: "TO", font: "Buse-7:4" } ],
            topFont: "Buse-7:5",
            bottom: 'CHURCHILL',
            bottomFont: "Buse-7:5",
        }
    },
    3: {
        front: {
            renderType: "destScroll",
            serviceNumber: "3",
            top: 'CHURCHILL',
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-7:4" }, { text: "FED UNI", font: "Buse-7:5" } ],
            bottomFont: "Buse-7:5",
        }
    },
    4: {
        front: {
            renderType: "destScroll",
            serviceNumber: "4",
            top: 'BOOLARRA',
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-7:4" }, { text: "YINNAR", font: "Buse-7:5" } ],
            bottomFont: "Buse-7:5",
        }
    },
    5: {
        front: {
            renderType: "scroll",
            preview: "MOE-TRARALGON 5",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "5",
                    top: "MOE-TRARALGON",
                    topFont: "Buse-10:5:1",
                    bottom: "VIA",
                    bottomFont: "Buse-5:5",
                    bottomMargin: 0
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "5",
                    top: "MOE-TRARALGON",
                    topFont: "Buse-10:5:1",
                    bottom: "YALLOURN NORTH",
                    bottomFont: "Buse-5:5",
                    bottomMargin: 0
                }
            ]
        }
    },
    7: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "CHURCHILL -",
            topFont: "Buse-7:5",
            bottom: "SPECIAL",
            bottomFont: "Buse-7:5"
        }
    },
    8: {
        front: {
            renderType: "message",
            text: "SALE",
            font: "Buse-16:8",
            spacing: 3
        }
    },
    11: {
        front: {
            renderType: "destScroll",
            serviceNumber: "11",
            top: "MOE -",
            topFont: "Buse-7:5",
            bottom: "MOE WEST",
            bottomFont: "Buse-7:5"
        }
    },
    10: {
        front: {
            renderType: "message",
            text: "TRARALGON",
            font: "Buse-16:8",
            spacing: 3
        }
    },
    11: {
        front: {
            renderType: "destScroll",
            serviceNumber: "11",
            top: "MOE -",
            topFont: "Buse-7:5",
            bottom: "MOE WEST",
            bottomFont: "Buse-7:5"
        }
    },
    12: {
        front: {
            renderType: "destScroll",
            serviceNumber: "12",
            top: "MOE -",
            topFont: "Buse-7:5",
            bottom: "MOE SOUTH",
            bottomFont: "Buse-7:5"
        }
    },
    13: {
        front: {
            renderType: "destScroll",
            serviceNumber: "13",
            top: "MOE -",
            topFont: "Buse-7:5",
            bottom: "MOE NORTH",
            bottomFont: "Buse-7:5"
        }
    },
    14: {
        front: {
            renderType: "scroll",
            preview: "MOE-TRARALGON 5",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "14",
                    top: "MOE -",
                    topFont: "Buse-7:5",
                    bottom: "NEWBOROUGH",
                    bottomFont: "Buse-7:5"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "14",
                    top: "VIA",
                    topFont: "Buse-7:5",
                    bottom: "OLD SALE RD",
                    bottomFont: "Buse-7:5"
                }
            ]
        }
    },
    15: {
        front: {
            renderType: "destScroll",
            serviceNumber: "15",
            top: "MOE TO",
            topFont: "Buse-7:5",
            bottom: "NEWBOROUGH",
            bottomFont: "Buse-7:5"
        }
    },
    20: {
        front: {
            renderType: "destScroll",
            serviceNumber: "20",
            top: "MORWELL",
            topFont: "Buse-7:5",
            bottom: "SOUTH",
            bottomFont: "Buse-7:5"
        }
    },
    21: {
        front: {
            renderType: "destScroll",
            serviceNumber: "21",
            top: "MIDVALLEY",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-5:5" }, { text: "CRINIGAN RD", font: "Buse-7:4" } ],
            bottomFont: "Buse-7:5",
            bottomSpacing: 1
        }
    },
    22: {
        front: {
            renderType: "destScroll",
            serviceNumber: "22",
            top: "MIDVALLEY",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-5:5" }, { text: "HOURIGAN RD", font: "Buse-7:4" } ],
            bottomFont: "Buse-7:5",
            bottomSpacing: 1
        }
    },
    23: {
        front: {
            renderType: "destScroll",
            serviceNumber: "21",
            top: "MORWELL",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-5:5" }, { text: "CRINIGAN RD", font: "Buse-7:4" } ],
            bottomFont: "Buse-7:5",
            bottomSpacing: 1
        }
    },
    24: {
        front: {
            renderType: "destScroll",
            serviceNumber: "22",
            top: "MORWELL",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-5:5" }, { text: "HOURIGAN RD", font: "Buse-7:4" } ],
            bottomFont: "Buse-7:5",
            bottomSpacing: 1
        }
    },
    25: {
        front: {
            renderType: "message",
            text: "MORWELL",
            font: "Buse-16:8",
            spacing: 3
        }
    },
    30: {
        front: {
            renderType: "destScroll",
            serviceNumber: "30",
            top: "CHURCHILL",
            topFont: "Buse-7:5",
            bottom: "TOWN SERVICE",
            bottomFont: "Buse-7:5",
            bottomSpacing: 1
        }
    },
    31: {
        front: {
            renderType: "message",
            text: "CHURCHILL",
            font: "Buse-16:8",
            spacing: 3
        }
    },
    32: {
        front: {
            renderType: "message",
            text: "MORWELL",
            font: "Buse-16:8",
            spacing: 3
        }
    },
    40: {
        front: {
            renderType: "destScroll",
            serviceNumber: "40",
            top: "TRARALGON-",
            topFont: "Buse-7:5",
            bottom: "CROSS ROAD",
            bottomFont: "Buse-7:5"
        }
    },
    41: {
        front: {
            renderType: "destScroll",
            serviceNumber: "41",
            top: "TRARALGON-",
            topFont: "Buse-7:5",
            bottom: "TRARALGON WEST",
            bottomFont: "Buse-7:4",
            bottomSpacing: 1
        }
    },
    42: {
        front: {
            renderType: "destScroll",
            serviceNumber: "42",
            top: "TRARALGON-",
            topFont: "Buse-7:5",
            bottom: "SOUTHSIDE",
            bottomFont: "Buse-7:5"
        }
    },
    43: {
        front: {
            renderType: "destScroll",
            serviceNumber: "43",
            top: "TRARALGON-",
            topFont: "Buse-7:5",
            bottom: "TRARALGON EAST",
            bottomFont: "Buse-7:4",
            bottomSpacing: 1
        }
    },
    44: {
        front: {
            renderType: "destScroll",
            serviceNumber: "44",
            top: "TRARALGON-",
            topFont: "Buse-7:5",
            bottom: "ELLAVALE",
            bottomFont: "Buse-7:4",
            bottomSpacing: 1
        }
    },
    45: {
        front: {
            renderType: "destScroll",
            serviceNumber: "45",
            top: "TRARALGON-",
            topFont: "Buse-7:5",
            bottom: "TRARALGON NTH",
            bottomFont: "Buse-7:4"
        }
    },
    50: {
        front: {
            renderType: "message",
            text: "NOT IN SERVICE",
            font: "Buse-14:7",
            spacing: 1
        }
    },
    51: {
        front: {
            renderType: "destScroll",
            serviceNumber: "1",
            top: "MOE",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-7:4" }, { text: "MORWELL", font: "Buse-7:5" } ],
            bottomFont: "Buse-7:5",
        }
    },
    52: {
        front: {
            renderType: "destScroll",
            serviceNumber: "2",
            top: "MORWELL",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-7:4" }, { text: "MIDVALLEY", font: "Buse-7:5" } ],
            bottomFont: "Buse-7:5",
        }
    },
    54: {
        front: {
            renderType: "destScroll",
            serviceNumber: "4",
            top: "CHURCHILL",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-7:4" }, { text: "YINNAR", font: "Buse-7:5" } ],
            bottomFont: "Buse-7:5"
        }
    },
    90: {
        front: {
            renderType: "message",
            text: [ {text: "SALE", font: "Buse-14:7"}, {text: "  VIA  ", font: "Buse-7:5;Space-Width=0"}, {text: "MAFFRA", font: "Buse-14:7"} ],
            font: "align=centre",
            spacing: 1
        }
    },
    91: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "TRARALGON",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-7:4" }, { text: "MAFFRA", font: "Buse-7:5" } ],
            bottomFont: "Buse-7:5",
            bottomSpacing: 1
        }
    },
    92: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SALE",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-7:4" }, { text: "ROSEDALE", font: "Buse-7:5" } ],
            bottomFont: "Buse-7:5",
            bottomSpacing: 1
        }
    },
    93: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "TRARALGON",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-7:4" }, { text: "ROSEDALE", font: "Buse-7:5" } ],
            bottomFont: "Buse-7:5",
            bottomSpacing: 1
        }
    },
    94: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "SALE",
            topFont: "Buse-7:5",
            bottom: [ { text: "VIA ", font: "Buse-5:5" }, { text: "ROSEDALE, MAFFRA", font: "Buse-7:4" } ],
            bottomFont: "align=centre",
            bottomSpacing: 1
        }
    },
    95: {
        front: {
            renderType: "message",
            text: "MAFFRA",
            font: "Buse-16:8",
            spacing: 3
        }
    },
    96: {
        front: {
            renderType: "message",
            text: "SALE",
            font: "Buse-16:8",
            spacing: 3
        }
    },
    97: {
        front: {
            renderType: "message",
            text: "V/LINE",
            font: "Buse-16:8",
            spacing: 3
        }
    },
    98: {
        front: {
            renderType: "message",
            text: "TRAIN REPLACEMENT",
            font: "Buse-10:5:1",
            spacing: 1
        }
    },
    101: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "GLENGARRY COUNTRY",
            topFont: "Buse-7:4",
            topSpacing: 1,
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:4",
            bottomSpacing: 1
        }
    },
    102: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "CAIRNBROOK RD",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    103: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "TRARALGON EAST",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    104: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "ELLAVALE",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    105: {
        front: {
            renderType: "destScroll",
            serviceNumber: "4",
            top: "MARIE ST &    ", // make left aligned
            topFont: "Buse-7:5",
            bottom: "GARIBALDI ST  ",
            bottomFont: "Buse-7:5"
        }
    },
    106: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "GLENDONALD",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    107: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "LOCH PARK RD",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    108: {
        front: {
            renderType: "destScroll",
            serviceNumber: "3",
            top: "GORDON ST &",
            topFont: "Buse-7:5",
            bottom: "CHENHALL CRS",
            bottomFont: "Buse-7:5"
        }
    },
    109: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "FEDERATION UNI",
            topFont: "Buse-7:5",
            bottom: "DIRECT BUS",
            bottomFont: "Buse-7:5"
        }
    },
    110: {
        front: {
            renderType: "destScroll",
            serviceNumber: "2",
            top: "HENRY ST",
            topFont: "Buse-7:5",
            bottom: "& KAY ST",
            bottomFont: "Buse-7:5"
        }
    },
    115: {
        front: {
            renderType: "message",
            text: "CHARTER",
            font: "Buse-16:8",
            spacing: 3
        }
    },
    116: {
        front: {
            renderType: "message",
            text: "SCHOOL BUS",
            font: "Buse-16:8",
            spacing: 2
        }
    },
    120: {
        front: {
            renderType: "message",
            text: "PARKLANE SCHOOL BUS",
            font: "Buse-7:4",
            spacing: 1
        }
    },
    121: {
        front: {
            renderType: "message",
            text: "COWWARR WEIR",
            font: "Buse-16:7",
            spacing: 1
        }
    },
    122: {
        front: {
            renderType: "message",
            text: "CALIGNEE COUNTRY",
            font: "Buse-10:5:1",
            spacing: 1
        }
    },
    123: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "HAZELBANK",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    124: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "KOORNALLA COUNTRY",
            topFont: "Buse-7:4",
            topSpacing: 1,
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:4",
            bottomSpacing: 1
        }
    },
    125: {
        front: {
            renderType: "message",
            text: "GLEN WEST COUNTRY",
            font: "Buse-10:5:1",
            spacing: 1
        }
    },
    126: {
        front: {
            renderType: "message",
            text: "TYERS FLAT COUNTRY",
            font: "Buse-7:4",
            spacing: 1
        }
    },
    128: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "FEDERATION",
            topFont: "Buse-7:5",
            bottom: "UNI CHARTER",
            bottomFont: "Buse-7:5"
        }
    },
    201: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "MORWELL 1",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    202: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "MORWELL 2",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    203: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "MORWELL 3",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    204: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "MORWELL 4",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    205: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "MORWELL 5",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    206: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "CHURCHILL 1",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    207: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "CHURCHILL 2",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
    208: {
        front: {
            renderType: "destScroll",
            serviceNumber: "",
            top: "CHURCHILL 3",
            topFont: "Buse-7:5",
            bottom: "SCHOOL BUS",
            bottomFont: "Buse-7:5"
        }
    },
}

EDSExtras.LTVBL = {};

EDSImages.LTVBL = {};
