EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 4
            },
            text: "$serviceNumber",
            font: "Arial-17",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 1,
                right: 'width(serviceNumber) + len(4)'
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 11,
                right: 'width(serviceNumber) + len(4)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    calibriOldService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 4
            },
            text: "$serviceNumber",
            font: "Calibri-17",
            spacing: 2
        },
        destination: {
            align: "left,top",
            margin: {
                left: 1,
                top: 1
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "left,bottom",
            margin: {
                left: 1,
                bottom: 2
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "FULL"
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
            align: "centre-x,top",
            margin: {
                top: {
                    $$cond: {
                        "$marginTop === undefined": 1,
                        "else": "$marginTop"
                    }
                },
                left: {
                    $$cond: {
                        "$marginLeft === undefined": 0,
                        "else": "$marginLeft"
                    }
                }
            },
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    },
    twoline: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 1
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                bottom: {
                    $$cond: {
                        "$bottomMargin === undefined": 1,
                        "else": "$bottomMargin"
                    }
                }
            }
        },
        text: "$top"
    },
    testFontMix: {
        display: {
            align: "centre-x,bottom",
            text: "$text",
            spacing: "$spacing"
        }
    },

    rearService: {
        serviceNumber: {
            align: "centre-x,centre-y",
            text: "$serviceNumber",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$serviceNumber"
    }
}

EDSFormats.SMRT.scammer = EDSFormats.SBST.standardService;

EDSFormats.SMRT.calibriStandardService = JSON.parse(JSON.stringify(EDSFormats.SMRT.standardService));
EDSFormats.SMRT.calibriStandardService.serviceNumber.font = 'Calibri-17';

EDSFormats.SMRT.calibriSmallService = JSON.parse(JSON.stringify(EDSFormats.SMRT.standardService));
EDSFormats.SMRT.calibriSmallService.serviceNumber.font = 'Calibri-15'; // TODO: make font

EDSData.SMRT = {
    1: {
        1: {
            front: {
                renderType: 'message',
                text: 'CHARTERED',
                font: 'Arial-17',
                spacing: 2
            },
            rear: { // check
                renderType: 'message',
                text: ' ',
                font: 'Arial-17',
                spacing: 2
            }
        }
    },
    2: {
        1: {
            front: {
                renderType: 'message',
                text: 'ANG MO KIO DEPOT',
                font: 'Arial-12', // not this font but idk what
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "AMK",
                topFont: "ArialBold-8",

                bottom: " DEPOT",
                bottomFont: "Arial-7;Space-Width=0",
                bottomMargin: 2
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: 'message',
                text: 'KRANJI DEPOT',
                font: 'Arial-15',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "KJ",
                topFont: "ArialBold-8",

                bottom: " DEPOT",
                bottomFont: "Arial-7;Space-Width=0",
                bottomMargin: 2
            }
        }
    },
    4: {
        1: {
            front: {
                renderType: 'message',
                text: 'RMRT BUSES',
                font: 'Arial-17',
                spacing: 2
            }
        }
    },
    5: {
        1: {
            front: {
                renderType: 'message',
                text: 'OFF SERVICE',
                font: 'Arial-17',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "OFF",
                topFont: "ArialBold-8",

                bottom: "SERVICE",
                bottomFont: "ArialNarrow-7",
                bottomMargin: 2
            }
        }
    },
    6: {
        1: {
            front: {
                renderType: 'message',
                text: 'WOODLANDS DEPOT',
                font: 'Arial-8', // check font
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "WLD",
                topFont: "ArialBold-8",

                bottom: " DEPOT",
                bottomFont: "Arial-7;Space-Width=0",
                bottomMargin: 2
            }
        }
    },
    7: {
        1: {
            front: {
                renderType: "message",
                text: "OUT OF SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "OUT OF",
                topFont: "Arial-7",

                bottom: "SERVICE",
                bottomFont: "ArialNarrow-7;Space-Width=0",
                bottomMargin: 2
            }
        }
    },
    8: {
        1: {
            front: {
                renderType: 'message',
                text: 'OFF SERVICE',
                font: 'Arial-17',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "OFF",
                topFont: "ArialBold-8",

                bottom: "SERVICE",
                bottomFont: "ArialNarrow-7",
                bottomMargin: 2
            }
        }
    },
    9: {
        1: {
            front: {
                renderType: 'message',
                text: 'ON DRIVING TEST',
                font: 'Arial-15',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "ON",
                topFont: "ArialBold-8",

                bottom: "TEST",
                bottomFont: "ArialBold-8",
                bottomMargin: 2
            }
        }
    },
    10: {
        1: {
            front: {
                renderType: 'message',
                text: 'FERRY SERVICE',
                font: 'Arial-15',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "FERRY",
                topFont: "Arial-7",

                bottom: "SERVICE",
                bottomFont: "ArialNarrow-7;Space-Width=0",
                bottomMargin: 2
            }
        }
    },
    11: {
        1: {
            front: {
                renderType: 'message',
                text: 'MRT SHUTTLE',
                font: 'Arial-17',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "MRT",
                topFont: "Arial-7",

                bottom: "SERVICE",
                bottomFont: "ArialNarrow-7;Space-Width=0",
                bottomMargin: 2
            }
        }
    },
   12: {
        1: {
            front: {
                renderType: "full"
            },
            rear: {
                renderType: "full"
            }
        }
    },
    13: {
        1: {
            front: {
                renderType: 'message',
                text: 'TRAINING BUS',
                font: 'Arial-17',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "ON",
                topFont: "Arial-8",

                bottom: "TEST",
                bottomFont: "Arial-8",
                bottomMargin: 2
            }
        }
    },
    14: {
        1: {
            front: {
                renderType: 'message',
                text: 'VER 28.03.2021-DD',
                font: 'Arial-15',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "VER",
                topFont: "Arial-8",

                bottom: "28.DD",
                bottomFont: "Arial-8",
                bottomMargin: 2
            }
        }
    },
    23: {
        1: {
            front: {
                renderType: 'message',
                text: 'WT3',
                font: 'Arial-15',
                spacing: 2
            },
            rear: { // check
                renderType: 'message',
                text: 'WT3',
                font: 'Arial-8',
                spacing: 2
            }
        }
    },
    66: {
        1: {
            front: {
                renderType: 'message',
                text: 'BULIM DEPOT',
                font: 'Arial-8', // check font
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "BULIM",
                topFont: "Arial-7",

                bottom: " DEPOT",
                bottomFont: "Arial-7;Space-Width=0",
                bottomMargin: 2
            }
        }
    },
    73: {
        1: {
            front: {
                renderType: 'message',
                text: 'ASTERWALE DEPOT',
                font: 'Arial-8', // check font
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "ASTW",
                topFont: "Arial-7",

                bottom: " DEPOT",
                bottomFont: "Arial-7;Space-Width=0",
                bottomMargin: 2
            }
        }
    },
    117: {
        1: {
            front: {
                renderType: "logo",
                text: "SMRT LOGO",
                image: "logo"
            },
            rear: {
                renderType: "logo",
                text: "SMRT LOGO",
                image: "logosmall"
            }
        }
    },
    118: {
        1: {
            front: {
                renderType: "message",
                text: "RMRT FLY OUR FLAG",
                font: "Arial-12",
                marginTop: 2,
                spacing: 1
            },
            rear: {
                renderType: "logo",
                text: "SMRT LOGO",
                image: "logosmall"
            }
        }
    },
    119: {
        1: {
            front: {
                renderType: "message",
                text: "RMRT",
                font: "CalibriBold-17",
                marginLeft: -80, // whack first
                spacing: 1
            },
            rear: { // check
                renderType: 'message',
                text: 'RMRT',
                font: 'Arial-8',
                spacing: 2
            }
        }
    },
    151: {
        1: {
            front: {
                renderType: "message",
                text: "FREE BRIDGING BUS",
                font: "Arial-8",
                marginLeft: 0, // whack first
                spacing: 1
            },
            rear: { // check
                renderType: 'twoline',
                top: "FREE",
                topFont: "ArialBold-8",

                bottom: "SERVICE",
                bottomFont: "ArialNarrow-7",
                bottomMargin: 2
            }
        }
    },
    166: {
        1: {
            front: {
                renderType: 'twoline',
                    top: "MERRY XMAS",
                    topFont: "Arial-8",
    
                    bottom: "HAPPY NEW YEAR",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            },
            rear: { // check
                    renderType: 'twoline',
                    top: " ",
                    topFont: "Arial-8",
    
                    bottom: " ",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            }
        }
    },
    167: {
        1: {
            front: {
                renderType: "message",
                text: "GONG XI FA CAI",
                font: "Arial-8",
                marginLeft: 0, // whack first
                spacing: 1
            },
            rear: { // check
                    renderType: 'twoline',
                    top: " ",
                    topFont: "Arial-8",
    
                    bottom: " ",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            }
        }
    },
    168: {
        1: {
            front: {
                renderType: "message",
                text: "SELAMAT HARI RAYA",
                font: "Arial-8",
                marginLeft: 0, // whack first
                spacing: 1
            },
            rear: { // check
                    renderType: 'twoline',
                    top: " ",
                    topFont: "Arial-8",
    
                    bottom: " ",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            }
        }
    },
    169: {
        1: {
            front: {
                renderType: "message",
                text: "HAPPY DEEPAVALI",
                font: "Arial-8",
                marginLeft: 0, // whack first
                spacing: 1
            },
            rear: { // check
                    renderType: 'twoline',
                    top: " ",
                    topFont: "Arial-8",
    
                    bottom: " ",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            }
        }
    },
    170: {
        1: {
            front: {
                renderType: "message",
                text: "HAPPY NATIONAL DAY",
                font: "Arial-8",
                marginLeft: 0, // whack first
                spacing: 1
            },
            rear: { // check
                    renderType: 'twoline',
                    top: " ",
                    topFont: "Arial-8",
    
                    bottom: " ",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            }
        }
    },
    171: {
        1: {
            front: {
                renderType: 'twoline',
                    top: "MOVING WITH YOU",
                    topFont: "Arial-8",
    
                    bottom: "13 JUNE 2022",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            },
            rear: { // check
                    renderType: 'twoline',
                    top: " ",
                    topFont: "Arial-8",
    
                    bottom: " ",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            }
        }
    },
    199: {
        1: {
            front: {
                renderType: 'message',
                text: 'ON TEST',
                font: 'Arial-15',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "ON",
                topFont: "ArialBold-8",

                bottom: "TEST",
                bottomFont: "ArialBold-8",
                bottomMargin: 2
            }
        }
    },
    4208: {
        1: {
            front: {
                renderType: 'twoline',
                    top: "RMRT THANKS YOU",
                    topFont: "Arial-8",
    
                    bottom: "FOR YOUR SUPPORT",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            },
            rear: { // check
                    renderType: 'twoline',
                    top: " ",
                    topFont: "Arial-8",
    
                    bottom: " ",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            }
        }
    },
    2606: {
        1: {
            front: {
                renderType: 'twoline',
                    top: "JORNEYING WITH YOU",
                    topFont: "Arial-8",
    
                    bottom: "TO THE WEST",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            },
            rear: { // check
                    renderType: 'twoline',
                    top: " ",
                    topFont: "Arial-8",
    
                    bottom: " ",
                    bottomFont: "Arial-8",
                    bottomMargin: 2
            }
        }
    },
    9912:{
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991",
                destination: {
                    text: "BUKIT BATOK via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CHOA CHU KANG AVE 1,3",
                    "BT BATOK WEST AVE 6,3",
                    "BT BATOK WEST AVE 5,8"
                ],
                scrollFont: 'Arial-8;Space-Width=0'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "991",
                font: "Arial-15",
                spacing: 2
            }
        }
    },


"5714": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "KOPI",
                destination: {
                    text: "I SPILL KOPI ON",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SG5714D"
                ],
                scrollFont: 'Calibri-7'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "KOPI",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
};


EDSImages.SMRT = {
    "logo": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    "logosmall": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
