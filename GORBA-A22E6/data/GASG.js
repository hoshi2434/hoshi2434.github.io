EDSFormats.GASG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LAWO-26:14",
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
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LAWO-26:14",
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
EDSData.GASG = {    
    1: {
        front: {
            renderType: "destScroll",
            top: "LTG EMEA Matrix Renderer",
            topFont: "LAWO-12",

            bottom: "A1 R160x16",
            bottomFont: "LAWO-12",

            serviceNumber: ""
        }
    },
    1111: {
        front: {
            renderType: "destScroll",
            top: "Sorry!",
            topFont: "LAWO-11",

            bottom: "Not in Service",
            bottomFont: "LAWO-11",

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
    21: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "KAMPONG BAHRU",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2",
                    top: "KAMPONG BAHRU",
                    topFont: "LAWO-26:9"
                },
                "CHANGI VILLAGE RD",
                "LOYANG AVE",
                "LOYANG WAY",
                "UPP CHANGI RD NTH/EAST",
                "UPP CHANGI LINK",
                "UPP CHANGI RD",
                "BEDOK RD",
                "NEW UPP CHANGI RD",
                "CHANGI RD",
                "GEYLANG RD",
                "KALLANG RD",
                "VICTORIA ST",
                "HILL ST",
                "NEW BRIDGE RD",
                "KG BAHRU RD",
                "SPOONER RD"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
    22: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "CHANGI VILLAGE",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2",
                    top: "CHANGI VILLAGE",
                    topFont: "LAWO-26:9"
                },
                "SPOONER RD",
                "KG BAHRU RD",
                "EU TONG SEN ST",
                "HILL ST",
                "VICTORIA ST",
                "KALLANG RD",
                "SIMS AVE",
                "SIMS AVE EAST",
                "NEW UPP CHANGI RD",
                "BEDOK RD",
                "UPP CHANGI RD",
                "UPP CHANGI LK",
                "UPP CHANGI RD EAST/NTH",
                "LOYANG WAY",
                "LOYANG AVE",
                "CHANGI VILLAGE RD"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
    31: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "PUNGGOL",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "PUNGGOL",
                    topFont: "LAWO-26:14"
                },
                "TAMPINES CTRL 1",
                "TAMPINES AVE 5/4",
                "TAMPINES ST 21",
                "TAMPINES AVE 2/7",
                "LOYANG AVE",
                "PASIR RIS DR 1",
                "PASIR RIS ST 21",
                "PASIR RIS DR 4/3/8/1",
                "ELIAS RD",
                "PASIR RIS ST 71",
                "PASIR RIS DR 10/1/12",
                "TPE",
                "PUNGGOL RD",
                "PUNGGOL FIELD",
                "PUNGGOL EAST",
                "PUNGGOL CTRL",
                "PUNGGOL EAST"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
    32: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "TAMPINES",
                font: "LAWO-26:14"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "TAMPINES",
                    topFont: "LAWO-11"
                },
                "PUNGGOL PL",
                "PUNGGOL CTRL",
                "PUNGGOL EAST",
                "PUNGGOL FIELD",
                "PUNGGOL RD",
                "TPE",
                "PASIR RIS DR 12/1/10",
                "PASIR RIS ST 71",
                "ELIAS RD",
                "PASIR RIS DR 1/8/3/4",
                "PASIR RIS ST 21",
                "PASIR RIS DR 1",
                "LOYANG AVE",
                "TAMPINES AVE 7/2",
                "TAMPINES ST 23/21",
                "TAMPINES AVE 4/9",
                "TAMPINES CTRL 1"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
    431: {
        front: {
            renderType: "standardService",
            serviceNumber: "43",
            destination: {
                text: "UPP EAST COAST",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "UPP EAST COAST",
                    topFont: "LAWO-26:9"
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
                "SERANGOON MRT/CTRL",
                "UPP SERANGOON RD",
                "PAYA LEBAR RD",
                "TANJONG KATONG RD",
                "AMBER RD",
                "MARINE PARADE RD",
                "BEDOK STH AVE 1",
                "UPP EAST COAST RD"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
    432: {
        front: {
            renderType: "standardService",
            serviceNumber: "43",
            destination: {
                text: "PUNGGOL",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "PUNGGOL",
                    topFont: "LAWO-26:9"
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
                "BUANGKOK GREEN",
                "BUANGKOK MRT/DR",
                "SENGKANG CTRL",
                "SENGKANG EAST RD",
                "PUNGGOL WAY",
                "PUNGGOL CTRL",
                "PUNGGOL PL"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
    433: {
        front: {
            renderType: "standardService",
            serviceNumber: "43M",
            destination: {
                text: "SERANGOON MRT",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "SERANGOON MRT",
                    topFont: "LAWO-26:9"
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
            scrollFont: "LAWO-9:6"
        }
    },
    621: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "SIMS AVE",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "SIMS AVE",
                    topFont: "LAWO-26:14"
                },
                "PUNGGOL PL",
                "PUNGGOL FIELD",
                "PUNGGOL EAST",
                "SENGKANG EAST DR",
                "UPP SERANGOON RD",
                "HOUGANG AVE 8/6/10/2/3",
                "TAMPINES RD",
                "HOUGANG AVE 1",
                "LORONG AH SOO",
                "UPP PAYA LEBAR RD",
                "MACPHERSON RD",
                "ALJUNIED RD/MRT",
                "GEYLANG RD"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
    622: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "PUNGGOL",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "PUNGGOL",
                    topFont: "LAWO-26:14"
                },
                "ALJUNIED RD/MRT",
                "MACPHERSON RD",
                "UPP PAYA LEBAR RD",
                "LORONG AH SOO",
                "HOUGANG AVE 1",
                "TAMPINES RD",
                "HOUGANG AVE 3/2/10/6/8",
                "UPP SERANGOON RD",
                "SENGKANG EAST DR",
                "PUNGGOL FIELD",
                "PUNGGOL PL"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
    623: {
        front: {
            renderType: "standardService",
            serviceNumber: "62A",
            destination: {
                text: "ALJUNED MRT",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62A",
                    top: "ENDS AT",
                    bottom: "ALJUNED MRT",
                    topFont: "LAWO-11",
                    bottomFont: "LAWO-11"
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
            scrollFont: "LAWO-9:6"
        }
    },
    624: {
        front: {
            renderType: "standardService",
            serviceNumber: "62M",
            destination: {
                text: "UPP PAYA LEBAR RD",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62M",
                    top: "ENDS AT",
                    bottom: "BLK 115",
                    topFont: "LAWO-11",
                    bottomFont: "LAWO-11"
                },
                "HOUGANG AVE 1",
                "FEEQ WANTED THIS"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
    3861: {
        front: {
            renderType: "standardService",
            serviceNumber: "386",
            destination: {
                text: "PUNGGOL INT",
                font: "LAWO-11"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "386",
                    top: "PUNGGOL INT",
                    topFont: "LAWO-26:14"
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
            scrollFont: "LAWO-9:6"
        }
    },
    6441: {
        front: {
            renderType: "standardService",
            serviceNumber: "644",
            destination: {
                text: "HARBOURFRONT",
                font: "LAWO-26:9"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "644",
                    top: "WELCOME ABOARD",
                    bottom: "BUSGAG TOUR",
                    topFont: "LAWO-11",
                    bottomFont: "LAWO-11"
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
            scrollFont: "LAWO-9:6"
        }
    },
    6442: {
        front: {
            renderType: "standardService",
            serviceNumber: "644",
            destination: {
                text: "HOUGANG DEPOT",
                font: "LAWO-26:9"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "644",
                    top: "Sorry!",
                    bottom: "Not In Service",
                    topFont: "LAWO-11",
                    bottomFont: "LAWO-11"
                },
                "BUSGAG ADMINS ONLY",
                "CHARTERED"
            ],
            scrollFont: "LAWO-9:6"
        }
    },
}

EDSExtras.GASG = {

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
    ],
    'limited-stops': [
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
}
