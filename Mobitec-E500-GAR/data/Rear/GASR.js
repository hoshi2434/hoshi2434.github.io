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
            top: "Reset",
            topFont: "Mobitec-7:4",

            bottom: "'F4'",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
   '-2': {
        front: {
            renderType: "boot",
            top: "Ok",
            topFont: "Mobitec-7:4",

            bottom: "'Home'",
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
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Sorry! Not In Service",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
               {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Sorry!",
                    topFont: "Mobitec-7:5:3"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Not in",
                    bottom: "Service",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:4"
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
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Driver",
                    bottom: "Under",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Instruction",
                    topFont: "LECIP-6:3"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Thank",
                    bottom: "You",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "For",
                    bottom: "Your",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Patience",
                    topFont: "LECIP-6:3"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    4444: {
        front: {
            renderType: "destScroll",
            top: "On",
            bottom: "Test",
            topFont: "Mobitec-7:7",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    5555: {
        front: {
            renderType: "destScroll",
            top: "On",
            bottom: "Charter",
            topFont: "Mobitec-7:4",
            bottomFont: "Mobitec-7:4",

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
                    top: "",
                    bottom: ""
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Go",
                    bottom: "Ahead",
                    topFont: "Mobitec-6:5",
                    bottomFont: "Mobitec-6:5"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "S'pore",
                    topFont: "Mobitec-6:5"
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
                text: "Route Training",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Route",
                    bottom: "Training",
                    topFont: "Mobitec-7:4",
                    bottomFont: "LECIP-6:3"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Thank",
                    bottom: "You",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "For",
                    bottom: "Your",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Patience",
                    topFont: "LECIP-6:3"
                }
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    10: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "WW Staff Shuttle",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "WWDEP",
                    bottom: "to",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "WW",
                    bottom: "Pier",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Staff",
                    bottom: "Shuttle",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    11: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "WW Staff Shuttle",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "WWDEP",
                    bottom: "to",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "WW",
                    bottom: "TBI",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Staff",
                    bottom: "Shuttle",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    12: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "KG Staff Shuttle",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "KGDEP",
                    bottom: "to",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "KG",
                    bottom: "ITH",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Staff",
                    bottom: "Shuttle",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    13: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "KG Staff Shuttle",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "KGDEP",
                    bottom: "to",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Beach",
                    bottom: "Ter",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Staff",
                    bottom: "Shuttle",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    14: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "RF Staff Shuttle",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "RFDEP",
                    bottom: "to",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "R'ford",
                    bottom: "Airport",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Staff",
                    bottom: "Shuttle",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    15: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "RF Staff Shuttle",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "RFDEP",
                    bottom: "to",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Pasir",
                    bottom: "Gudang",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "Staff",
                    bottom: "Shuttle",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
            ],
            scrollFont: "Mobitec-7:5:3"
        }
    },
    541: {
        front: {
            renderType: "standardService",
            serviceNumber: "54",
            destination: {
                text: "KAMPONG GARANG CTRL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "54",
                    topFont: "Mobitec-LAWO-16"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    542: {
        front: {
            renderType: "standardService",
            serviceNumber: "54",
            destination: {
                text: "D'RESORT SAMOSA",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "54",
                    topFont: "Mobitec-LAWO-16"
                },
            ],
            scrollFont: "Mobitec-7:4"
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
                    serviceNumber: "",
                    top: "57M",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "423",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "425",
                    topFont: "Mobitec-LAWO-16"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4252: {
        front: {
            renderType: "standardService",
            serviceNumber: "425A",
            destination: {
                text: "Rochester Ferry Ter",
                font: "Mobitec-7:4"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "425A",
                    topFont: "Mobitec-13:7"
                },
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
                    serviceNumber: "",
                    top: "426",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "450",
                    topFont: "Mobitec-7:5:3"
                },
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
                    serviceNumber: "",
                    top: "450",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "453",
                    topFont: "Mobitec-LAWO-16"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4532: {
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
                    serviceNumber: "",
                    top: "453",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "587",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "587",
                    topFont: "Mobitec-LAWO-16"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5873: {
        front: {
            renderType: "standardService",
            serviceNumber: "587A",
            destination: {
                text: "AFT R'FORD SPRING",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "587A",
                    topFont: "Mobitec-13:7"
                },
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
                    serviceNumber: "",
                    top: "587e",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "To",
                    bottom: "Airport",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
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
                    serviceNumber: "",
                    top: "587e",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "To",
                    bottom: "R'ford",
                    topFont: "Mobitec-7:5:3",
                    bottomFont: "Mobitec-7:5:3"
                },
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
                    serviceNumber: "",
                    top: "587T",
                    topFont: "Mobitec-13:7"
                },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5901: {
        front: {
            renderType: "standardService",
            serviceNumber: "590",
            destination: {
                text: "ROCKFORD, PASIR GUDANG",
                font: "Mobitec-7:5:3"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "590",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "751G",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "751W",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "752",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "759",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "860",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "868",
                    topFont: "Mobitec-LAWO-16"
                },
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
                    serviceNumber: "",
                    top: "868",
                    topFont: "Mobitec-LAWO-16"
                },
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
    8: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: {
                text: "Listen to Our Weekly Podcast,",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "GARThings!",
                "Streamed in our Discord Server!",
                "Approach a MR or HR for details!"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    9: {
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
