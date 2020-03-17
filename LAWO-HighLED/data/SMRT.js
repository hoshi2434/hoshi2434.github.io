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
                text: 'SMRT BUSES',
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
            rear: {
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
            }
        }
    },
    51: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR1",
                destination: {
                    text: "SUNTEC CITY",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: "Calibri-7"
            }
        }
    },
    52: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR1",
                destination: {
                    text: "YISHUN",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    53: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR2",
                destination: {
                    text: "MARINA CENTRE",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    54: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR2",
                destination: {
                    text: "SEMBAWANG",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    55: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR3",
                destination: {
                    text: "BOAT QUAY",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    56: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR3",
                destination: {
                    text: "CHOA CHU KANG",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    57: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR5",
                destination: {
                    text: "JURONG WEST",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    58: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR5", // from memory the NR5 is kinda corrupted but need check
                destination: {
                    text: "WHAMPOA",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: "Calibri-7"
            }
        }
    },
    59: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR6",
                destination: {
                    text: "SENGKANG",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    60: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR6",
                destination: {
                    text: "MARINA CENTRE",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    61: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR7",
                destination: {
                    text: "PASIR RIS",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    62: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR7",
                destination: {
                    text: "MARINA CENTRE",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    75: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR5",
                destination: {
                    text: "JURONG WEST",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    76: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR5",
                destination: {
                    text: "MARINA CENTRE",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    77: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR8",
                destination: {
                    text: "BUKIT BATOK",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    78: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "NR8",
                destination: {
                    text: "MARINA CENTRE",
                    font: "Calibri-7"
                },
                scrolls: [""],
                scrollFont: 'Calibri-7'
            }
        }
    },
    106: {
        1: {
            front: {
                renderType: 'message',
                text: 'NGEE ANN POLY',
                font: 'Arial-12',
                spacing: 2
            }
        }
    },
    113: {
        1: {
            front: {
                renderType: 'message',
                text: 'AIRSHOW SHUTTLE',
                font: 'ArialBold-8', // check font
                spacing: 1
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
        }
    },
    118: {
        1: {
            front: {
                renderType: "message",
                text: "SMRT FLY OUR FLAG",
                font: "Arial-12",
                marginTop: 2,
                spacing: 1
            }
        }
    },
    119: {
        1: {
            front: {
                renderType: "message",
                text: "SMRT",
                font: "CalibriBold-17",
                marginLeft: -80, // whack first
                spacing: 1
            }
        }
    },
    218: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "300",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CHOA CHU KANG WAY"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    219: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "302",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CHOA CHU KANG WAY",
                    "CHOA CHU KANG ST 52"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    222: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "307",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CCK CENTRAL"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    230: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "67W",
                destination: {
                    text: "ENDS AT",
                    font: "Calibri-7"
                },
                scrolls: [
                    "LITTLE INDIA"
                ],
                scrollFont: "Calibri-7"
            }
        }
    },
    252: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "903",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS CENTRE"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    253: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "911",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS AVE 2"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    255: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "913",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS DR 61"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    256: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "BPS1", // TODO: font
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SEGAR RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    285: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "301",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "AVE 2, 3"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    288: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "307",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "CCK DR"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    373: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 10",
                topFont: "ArialBold-8",

                bottom: "ANG MO KIO-WOODLANDS",
                bottomFont: "ArialBold-8"
            }
        }
    },
    374: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 10", // check font
                topFont: "ArialBold-8",

                bottom: "WOODLANDS-ANG MO KIO",
                bottomFont: "ArialBold-8"
            }
        }
    },
    381: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 2",
                topFont: "ArialBold-8",

                bottom: "JOO KOON - JURONG EAST",
                bottomFont: "Arial-8"
            }
        }
    },
    382: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 2",
                topFont: "ArialBold-8",

                bottom: "JURONG EAST - JOO KOON",
                bottomFont: "Arial-8"
            }
        }
    },
    383: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 4",
                topFont: "ArialBold-8",

                bottom: "CHOA CHU KANG-JURONG EAST",
                bottomFont: "Arial-8;Space-Width=1"
            }
        }
    },
    384: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 4",
                topFont: "ArialBold-8",

                bottom: "JURONG EAST-CHOA CHU KANG",
                bottomFont: "Arial-8;Space-Width=1"
            }
        }
    },
    397: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 1",
                topFont: "ArialBold-8",

                bottom: "OUTRAM PARK-JURONG EAST",
                bottomFont: "Arial-8"
            }
        }
    },
    398: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 1",
                topFont: "ArialBold-8",

                bottom: "OUTRAM PARK-JURONG EAST",
                bottomFont: "Arial-8"
            }
        }
    },
    420: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "CLEMENTI via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BT PANJANG RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    422: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: {
                    text: "BOON LAY via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WDL AVE 3",
                    "JURONG EAST AVE 1",
                    "BT PANJANG RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    423: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: {
                    text: "WOODLANDS via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "JURONG EAST AVE 1"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    424: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "859",
                destination: {
                    text: "SEMBAWANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    425: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "859",
                destination: {
                    text: "YISHUN via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    431: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "852",
                destination: {
                    text: "BUKIT BATOK via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 6"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    440: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "855",
                destination: {
                    text: "HARBOURFRONT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "UPP THOMSON RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    441: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "855",
                destination: {
                    text: "YISHUN via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "LOWER DELTA RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    444: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "980",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    445: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "980",
                destination: {
                    text: "SEMBAWANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    477: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "NEW BRIDGE RD via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'BT PANJANG RD',
                    'STEVENS ROAD',
                    'ORCHARD ROAD',
                    'HILL STREET',
                    'CHINATOWN'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "Arial-15",
                spacing: 2
            }
        },
    },
    478: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "CHOA CHUA KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'HILL STREET',
                    'SOMERSET RD',
                    'SCOTTS RD',
                    'STEVENS RD',
                    'BUKIT PANJANG RD'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    492: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "700A",
                destination: {
                    text: "SUNTEC CITY via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "DUNEARN RD"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "700A",
                font: "Arial-9",
                spacing: 1
            }
        }
    },
    494: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "927",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "MANDAI RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    495: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "927",
                destination: {
                    text: "SINGAPORE ZOO via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CHOA CHU KANG AVE 4"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    512: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "970",
                destination: {
                    text: "SHENTON WAY via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "HILLVIEW RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    525: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "941",
                destination: {
                    text: "BT BATOK via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "B.B WEST AVE 3 , 6"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    539: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "173",
                destination: {
                    text: "CLEMENTI via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "JLN JURONG KECHIL",
                    "HUME AVE"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    540: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "173",
                destination: {
                    text: "BT BATOK via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "JLN JURONG KECHIL"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    553: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "188E",
                destination: {
                    text: "HARBOURFRONT",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BT BATOK WEST AVE 4"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    576: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "963R",
                destination: {
                    text: "SENTOSA via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS AVE 3"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    578: {
        1: {
            front: {
                renderType: "message",
                text: "RESORT WORLD SENTOSA RWS88",
                font: "CalibriBold-8",
                marginTop: 3,
                spacing: 1
            }
        }
    },
    582: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "858",
                destination: {
                    text: "CHANGI AIRPORT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SEMBAWANG RD"
                ],
                scrollFont: 'Calibri-7'
            }
        },
        rear: {
            renderType: "rearService",
            serviceNumber: "858",
            font: "Calibri-17",
            spacing: 2
        }
    },
    584: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "106",
                destination: {
                    text: "SHENTON WAY TER via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "B.B WEST AVE 3",
                    "TOH TUCK RD"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    585: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "106",
                destination: {
                    text: "BT BATOK via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "BAYFRONT AVE"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    586: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "188R",
                destination: {
                    text: "RWS via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "B.B WEST AVE 2"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    587: {
        1: {
            front: {
                renderType: "calibriOldService",
                serviceNumber: "188R",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "TOH GUAN RD"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    589: {
        1: {
            front: {
                renderType: "calibriOldService",
                serviceNumber: "966",
                destination: {
                    text: "MARINE PARADE via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "PENDING RD"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    590: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "971E",
                destination: {
                    text: "CECIL ST via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "BT PANJANG RING RD",
                    "JELAPANG RD",
                    "SEGAR/FAJAR RD",
                    "WHITLEY RD",
                    "SCOTTS/ORCHARD RD",
                    "NICOLL HIGHTWAY", // sic
                    "COLLYER QUAY",
                    "ANSON RD"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    591: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "178",
                destination: {
                    text: "BOON LAY via",
                    font: "Calibri-7"
                },
                scrolls: [
                    'WDL CENTRE RD',
                    'UPP BT TIMAH',
                    "BT BATOK",
                    'JURONG TOWN HALL',
                    "CORPORATION RD"
                ],
                scrollFont: "Calibri-7"
            }
        },
    },
    592: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "178",
                destination: {
                    text: "WOODLANDS via",
                    font: "Calibri-7"
                },
                scrolls: [
                    'WDL CENTRE RD',
                    'UPP BT TIMAH',
                    "BT BATOK",
                    'JURONG TOWN HALL',
                    "CORPORATION RD"
                ],
                scrollFont: "Calibri-7"
            }
        },
    },
    598: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: {
                    text: "YISHUN INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "YISHUN RING RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    614: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CLEMENTI RD"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    624: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "975",
                destination: {
                    text: "LIM CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "TECK WHYE AVE"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    649: {
        1: {
            front: {
                renderType: "calibriSmallService",
                serviceNumber: "850E",
                destination: {
                    text: "SHENTON WAY via",
                    font: "Calibri-7"
                },
                scrolls: [
                    "YISHUN RING RD"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },

    6101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: {
                    text: "EUNOS via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'CLEMENTI RD',
                    'HOLLAND RD',
                    'HOLLAND AVE',
                    'TELOK BLANGAH RD',
                    'CHINATOWN',
                    'VICTORIA ST',
                    'KALLANG BAHRU',
                    'MACPHERSON RD',
                    'UBI AVE 2'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "61",
                font: "Arial-17",
                spacing: 2
            }
        },
    },
    6102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "61",
                destination: {
                    text: "BUKIT BATOK via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'UBI AVE 2',
                    'MACPHERSON RD',
                    'KALLANG BAHRU',
                    'NORTH BRIDGE RD',
                    'SOUTH BRIDGE RD',
                    'TELOK BLANGAH RD',
                    'HOLLAND RD',
                    'CLEMENTI RD'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "61",
                font: "Arial-17",
                spacing: 2
            }
        }
    },
    6701: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: {
                    text: "TAMPINES via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'UPP BT TIMAH RD',
                    'DUNEARN RD',
                    'SERANGOON RD',
                    'SIMS AVE',
                    'NEW UPP CHANGI RD',
                    'BEDOK NORTH AVE 3'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "67",
                font: "Arial-17",
                spacing: 2
            }
        },
    },
    6702: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: {
                    text: "CHOA CHUA KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'BEDOK NTH AVE 3',
                    'NEW UPP CHANGI RD',
                    'GEYLANG RD',
                    'JALAN BESAR',
                    'BUKIT TIMAH RD',
                    'UPP BT TIMAH RD'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "67",
                font: "Arial-17",
                spacing: 2
            }
        }
    },
    6703: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67A",
                destination: {
                    text: "ENDS AT OPP",
                    font: "Arial-8"
                },
                scrolls: [
                    "CORONATION PLAZA"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67A",
                destination: "OPP CORONATION PLAZA",
                scrolls: [
                ]
            }
        }
    },
    6704: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67C",
                destination: {
                    text: "ENDS AT GEYLANG RD",
                    font: "Arial-8"
                },
                scrolls: [
                    "(BEFORE CITY PLAZA)"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67C",
                destination: "GEYLANG RD",
                scrolls: [
                ]
            }
        }
    },
    6705: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67W",
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    "LITTLE INDIA"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67W",
                destination: "LITTLE INDIA",
                scrolls: [
                ]
            }
        }
    },
    1101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "110",
                destination: {
                    text: "CHANGI AIRPORT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "COMASSVALE DR"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "110",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "110",
                destination: {
                    text: "COMPASSVALE INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "PTB 3, 1, 2, 4"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "110",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1671: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: {
                    text: "BT MERAH via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'JLN BT MERAH'
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1672: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: {
                    text: "SEMBAWANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CANTOMENT RD"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1691: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: {
                    text: "WOODLANDS via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 8, 9'
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1711: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: {
                    text: "MARINA CENTRE via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SEMBAWANG RD",
                    "DUNEARN RD",
                    "ORCHARD RD"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1761: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "176",
                destination: {
                    text: "BT MERAH via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BT BATOK CTR/MRT", // check order??
                    "JURONG TOWN HALL",
                    'W.COAST HIGHWAY',
                    'TELOK BLANGAH RD',
                    "UPP BT TIMAH RD"
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "176",
                font: "Arial-15",
                spacing: 2
            }
        },
    },
    1781: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "178",
                destination: {
                    text: "BOON LAY via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WDL CENTRE RD',
                    'UPP BT TIMAH',
                    "BT BATOK",
                    'JURONG TOWN HALL',
                    "CORPORATION RD"
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "178",
                font: "Arial-15",
                spacing: 2
            }
        },
    },
    1782: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "178",
                destination: {
                    text: "WOODLANDS via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WDL CENTRE RD',
                    'UPP BT TIMAH',
                    "BT BATOK",
                    'JURONG TOWN HALL',
                    "CORPORATION RD"
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "178",
                font: "Arial-15",
                spacing: 2
            }
        },
    },
    1841: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "CLEMENTI via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'BT PANJANG RD'
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "184",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1842: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'BT PANJANG RD'
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "184",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1871: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: {
                    text: "BOON LAY via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WDL AVE 3",
                    "JURONG EAST AVE 1",
                    "BT PANJANG RD"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "187",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1872: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "187",
                destination: {
                    text: "WOODLANDS via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "JURONG EAST AVE 1"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "187",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1881: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "188",
                destination: {
                    text: "HARBOURFRONT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CHOA CHU KANG WAY",
                    {
                        text: "BT BATOK WEST AVE 4",
                        font: "Arial-7",
                    },
                    {
                        text: "BT BATOK WEST AVE 2",
                        font: "Arial-7",
                    },
                    {
                        text: "BT BATOK WEST AVE 3",
                        font: "Arial-7",
                    },
                    {
                        text: "BT BATOK WEST AVE 6",
                        font: "Arial-7",
                    },
                    "TOH GUAN RD",
                    "HAW PAR VILLA",
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "188",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1882: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "188",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BOON LAY WAY",
                    "TOH GUAN RD"
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "188",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    1901: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "KAMPONG BAHRU via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'BT PANJANG RD',
                    'STEVENS ROAD',
                    'ORCHARD ROAD',
                    'HILL STREET',
                    'CHINATOWN'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "Arial-15",
                spacing: 2
            }
        },
    },
    1902: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "190",
                destination: {
                    text: "CHOA CHUA KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'HILL STREET',
                    'SOMERSET RD',
                    'SCOTTS RD',
                    'STEVENS RD',
                    'BUKIT PANJANG RD'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    "19O": {
        1: {
            front: {
                renderType: "scammer",
                serviceNumber: "190",
                destination: "N       B              R",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'B    P                 R'
                ],
                scrollFont:"LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "190",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    3021: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "302",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CHOA CHU KANG WAY",
                    "CHOA CHU KANG ST 52"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    7001: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "700",
                destination: {
                    text: "SHENTON WAY via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BT PANJANG RD",
                    "PETIR RD",
                    "DUNEARN RD",
                    "SCOTTS RD",
                    "ORCHARD RD",
                    //?
                    "COLLYER QUAY"
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    7002: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "700",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "STAMFORD RD",
                    "SOMERSET RD",
                    "ORCHARD TURN",
                    "SCOTTS RD",
                    "BT TIMAH RD",
                    "PETIR RD",
                    "BT PANJANG RD",
                ],
                scrollFont: 'Arial-8'
            }
        }
    },
    8541: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: {
                    text: "YISHUN via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "YIO CHU KANG RD"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    8572: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: {
                    text: "YISHUN via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "YIO CHU KANG RD"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    8681: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "868E",
                destination: {
                    text: "SUNTEC CITY via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "JURONG EAST CTRL",
                    "TEMASEK BLVD/AVE"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "868E",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9001: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "900",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WDL AVENUE 7',
                    'WDL AVENUE 4',
                    'WDL DRIVE 14',
                    'WDL AVENUE 4',
                    'WDL AVENUE 7'
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "900",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9002: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "900A", // fonts all messed up ????
                destination: {
                    text: "WOODLANDS INT",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 7',
                    'WOODLANDS AVE 4',
                    'WOODLANDS DR 14',
                    // '' ??
                    'INNOVA JC',
                    'WOODLANDS AVE 4',
                    'WOODLANDS AVE 7'
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "900A",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9011: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "901",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 2,1',
                    'WOODLANDS DRIVE 16',
                    'WOODLANDS AVE 6',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "901",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9021: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "902",
                destination: {
                    text: "REPUBLIC",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'POLYTECHNIC',
                ],
                scrollFont: 'ArialBold-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "902",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9031: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "903",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 2', // scrolls??
                    "TRAIN CHECKPOINT"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "903",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9032: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "903M",
                destination: {
                    text: "WOODLANDS INT",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 2', // scrolls??
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "903M",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9041: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "904",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WDL CRESENT(LOOP)',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "904",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "911",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 7',
                    'WOODLANDS ST 83',
                    'WOODLANDS AVE 2',
                    'WOODLANDS ST 13',
                    'WDL TRAIN CHECKPOINT',
                    'WOODLANDS ST 13'
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "911",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "911T", // wot??
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "911T",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9121: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 5',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9122: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912A",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WDL AVE 2,5',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912A",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9123: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912B",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 5',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912B",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9124: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912T",
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912T",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9125: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "912M",
                destination: {
                    text: "WOODLANDS INT",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'AVE 1,2,5',
                    'ST 41 (LOOP)'
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "912M",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9131: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'WOODLANDS AVE 7,6',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9132: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "913T",
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    'WDL INT / MRT',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "913T",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "920",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'PETIR / JELEBU RD',
                    'SENJA RD / LINK',
                    'JELAPANG RD',
                    'SAUJANA RD',
                    'FAJAR RD',
                    'BT PANJANG RING RD',
                    'BANGKIT RD',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "920",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9512: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "951E",
                destination: {
                    text: "WOODLANDS ST 82",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'ROBINSON RD',
                    'STAMFORD RD',
                    'DHOBY GHAUT MRT',
                    {
                        text: 'WOODLANDS AVE 5, 4',
                        font: 'Arial-7'
                    },
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "951E",
                font: "Arial-15",
                spacing: 2
            }
        },
    },
    9601: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960",
                destination: {
                    text: "MARINA CTR via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS RD",
                    'BT TIMAH RD',
                    "BRAS BASAH RD"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9602: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960",
                destination: {
                    text: "WOODLANDS via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "VICTORIA ST",
                    "ROCHOR RD",
                    "BT TIMAH RD",
                    "WHITLEY RD",
                    "PIE/BKE",
                    "BT PANJANG RD/LRT",
                    "WOODLANDS RD"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9603: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "960e",
                destination: {
                    text: "WOODLANDS via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "RAFFLES AVE",
                    "VICTORIA ST",
                    'BT TIMAH RD',
                    "WOODLANDS AVE 3"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "960e",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9631: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: {
                    text: "HARBOURFRONT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'ALEXANDRA RD',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9641: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "964",
                destination: {
                    text: "WOODLANDS INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS AVE 7,6",
                    "WOODLANDS LOOP"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "964",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9701: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "970",
                destination: {
                    text: "SHENTON WAY via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "HILLVIEW AVE"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9702: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "970",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "HILLVIEW AVE"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9721: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "972",
                destination: {
                    text: "ORCHARD RD via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BKE / PIE"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "972",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9731: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "973",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BT PANJANG RD",
                    "PENDING RD"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "970",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9751: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "975",
                destination: {
                    text: "LIM CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "TECK WHYE AVE"
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "975",
                font: "Calibri-15",
                spacing: 2
            }
        }
    },
    9754: {
        1: {
            front: {
                renderType: "calibriStandardService",
                serviceNumber: "975B",
                destination: {
                    text: "ENDS AT OPP",
                    font: "Arial-8"
                },
                scrolls: [
                    "LIM CHU KANG LANE 3"
                ],
                scrollFont: 'Calibri-7'
            }
        }
    },
    9791: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "979",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'PETIR / JELEBU RD',
                    'WOODLANDS RD',
                    {
                        text: 'CHOA CHU KANG NORTH 5',
                        font: 'Arial-7'
                    },
                    {
                        text: 'CHOA CHU KANG ST 52/DR',
                        font: 'Arial-7'
                    },
                    {
                        text: 'CHOA CHU KANG NORTH 7',
                        font: 'Arial-7'
                    },
                    'C.C.K CRES (LOOP)'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "979",
                font: "Arial-15",
                spacing: 2
            }
        },
    },
    9831: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "983",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "PETIR RD",
                    "CHOA CHU KANG RD"
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "983",
                font: "Arial-15",
                spacing: 2
            }
        },
    },
    9851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'TECK WHYE AVE',
                    'B. B WEST AVE 7, 4',
                    'B. B WEST AVE 2',
                    'B. B EAST AVE 2',
                    'JLN JURONG KECHIL',
                    'JLN TOA PAYOH',
                    'BENDEMEER ROAD',
                    'KALLANG MRT'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "985",
                font: "Arial-15",
                spacing: 2
            }
        },
    },
    9852: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    'SERANGOON ROAD',
                    'JLN TOA PAYOH',
                    'JLN JURONG KECHIL',
                    'B. B EAST AVE 2',
                    'B. B WEST AVE 2, 4',
                    'B. B WEST AVE 7',
                    'TECK WHYE AVE'
                ],
                scrollFont: "Arial-8"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "985",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9911: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "991",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    '',
                ],
                scrollFont: 'Arial-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "991",
                font: "Arial-15",
                spacing: 2
            }
        }
    },
    9912: {
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
