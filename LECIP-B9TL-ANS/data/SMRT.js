EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
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
                        "$marginTop === undefined": 0,
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
    brandedSvc: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 2
        },
        branding: {
            align: "centre-x,centre-y",
            margin: {
                right:'width(serviceNumber) + len(4)'
            },
            text: "$branding",
            font: "$font",
            spacing: '$spacing'
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
                text: 'ANS',
                font: 'LECIP-20:12',
                spacing: 2
            },
            rear: { // check
                renderType: 'twoline',
                top: "A&S",
                topFont: "LECIP-8",

                bottom: " ",
                bottomFont: "LECIP-8"
            }
        }
    },
    2: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "ANS",
                destination: {
                    text: "A&S TRANSIT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "FOR ENQUIRIES",
                    "CALL 6383 1111",
                    "OR VISIT",
                    "WWW.ANSTRANSIT.COM",
                    {
                renderType: 'message',
                text: 'OFF SERVICE',
                font: 'LECIP-20:12',
                spacing: 2
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: 'twoline',
                top: "A&S",
                topFont: "LECIP-8",

                bottom: " ",
                bottomFont: "LECIP-8"
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "ANS",
                destination: {
                    text: "A&S TRANSIT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "WORKER SHUTTLE",
                    "NOT FOR BOARDING"
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: 'twoline',
                top: "STAFF",
                topFont: "LECIP-6:3",

                bottom: "SHUTTLE",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    100: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: {
                    text: "STAFF SHUTTLE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "STAFF TRANSPORT HUB",
                    {
                renderType: 'twoline',
                top: "BRINGING YOU CLOSER",
                topFont: "LECIP-8",

                bottom: "TO THE THINGS YOU LOVE",
                bottomFont: "LECIP-8"
                    },
                    {
                renderType: 'twoline',
                top: "WELCOME ABOARD A&S TRANSIT'S",
                topFont: "LECIP-8",

                bottom: "BRISTOL AIRPORT SHUTTLE",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: 'twoline',
                top: "STAFF",
                topFont: "LECIP-8",

                bottom: "TER.",
                bottomFont: "LECIP-8"
            }
        }
    },
    101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: {
                    text: "STAFF SHUTTLE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BRISTOL AIRPORT TER.",
                    {
                renderType: 'twoline',
                top: "BRINGING YOU CLOSER",
                topFont: "LECIP-8",

                bottom: "TO THE THINGS YOU LOVE",
                bottomFont: "LECIP-8"
                    },
                    {
                renderType: 'twoline',
                top: "WELCOME ABOARD A&S TRANSIT'S",
                topFont: "LECIP-8",

                bottom: "BRISTOL AIRPORT SHUTTLE",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: 'twoline',
                top: "STAFF",
                topFont: "LECIP-8",

                bottom: "TER.",
                bottomFont: "LECIP-8"
            }
        }
    },
    102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: {
                    text: "SILVER ZONE SHUTTLE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BRISTOL TER.>>SILVER ZONE",
                    {
                renderType: 'twoline',
                top: "BRINGING YOU CLOSER",
                topFont: "LECIP-8",

                bottom: "TO THE THINGS YOU LOVE",
                bottomFont: "LECIP-8"
                    },
                    {
                renderType: 'twoline',
                top: "WELCOME ABOARD A&S TRANSIT'S",
                topFont: "LECIP-8",

                bottom: "BRISTOL AIRPORT SHUTTLE",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: 'twoline',
                top: "SILVER",
                topFont: "LECIP-8",

                bottom: "SERVICE",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    103: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: {
                    text: "SILVER ZONE SHUTTLE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "SILVER ZONE>>BRISTOL TER.",
                    {
                renderType: 'twoline',
                top: "BRINGING YOU CLOSER",
                topFont: "LECIP-8",

                bottom: "TO THE THINGS YOU LOVE",
                bottomFont: "LECIP-8"
                    },
                    {
                renderType: 'twoline',
                top: "WELCOME ABOARD A&S TRANSIT'S",
                topFont: "LECIP-8",

                bottom: "BRISTOL AIRPORT SHUTTLE",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: 'twoline',
                top: "SILVER",
                topFont: "LECIP-8",

                bottom: "SERVICE",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    104: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: {
                    text: "LONG STAY SHUTTLE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "via BRISTOL TERMINAL",
                    "via LONG STAY CARPARK A, B, C",
                    {
                renderType: 'twoline',
                top: "BRINGING YOU CLOSER",
                topFont: "LECIP-8",

                bottom: "TO THE THINGS YOU LOVE",
                bottomFont: "LECIP-8"
                    },
                    {
                renderType: 'twoline',
                top: "WELCOME ABOARD A&S TRANSIT'S",
                topFont: "LECIP-8",

                bottom: "BRISTOL AIRPORT SHUTTLE",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'SMRT-LAWO-7'
            },
            rear: {
                renderType: 'twoline',
                top: "LONG",
                topFont: "LECIP-8",

                bottom: "STAY",
                bottomFont: "LECIP-8"
            }
        }
    },
    "A1": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "A",
                destination: {
                    text: "ASTERWALE RETAIL SHUTTLE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "OPP BLK 201 <> GIANT&IKEA",
                    {
                renderType: 'twoline',
                top: "BRINGING YOU CLOSER",
                topFont: "LECIP-8",

                bottom: "TO THE THINGS YOU LOVE",
                bottomFont: "LECIP-8"
                    },
                    {
                renderType: 'twoline',
                top: "WELCOME ABOARD A&S TRANSIT'S",
                topFont: "LECIP-8",

                bottom: "ASTERWALE RETAIL SHUTTLE",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "B1": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "B",
                destination: {
                    text: "ASTERWALE RETAIL SHUTTLE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "FROM OPP BLK 201 (ASTW SQ)",
                    "TO COURTS & GAIN CITY",
                    {
                renderType: 'twoline',
                top: "BRINGING YOU CLOSER",
                topFont: "LECIP-8",

                bottom: "TO THE THINGS YOU LOVE",
                bottomFont: "LECIP-8"
                    },
                    {
                renderType: 'twoline',
                top: "WELCOME ABOARD A&S TRANSIT'S",
                topFont: "LECIP-8",

                bottom: "ASTERWALE RETAIL SHUTTLE",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "B",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "A11": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "A1",
                destination: {
                    text: "AIRPORT EXPRESS",
                    font: "Gorba-9"
                },
                scrolls: [
                    "BAUERNHOF INTERCHANGE",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S EXPRESS SVC",
                topFont: "LECIP-8",

                bottom: "SIT BACK AND RELAX!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'Mobitec-7:4'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A1",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "A12": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "A1",
                destination: {
                    text: "AIRPORT EXPRESS",
                    font: "Gorba-9"
                },
                scrolls: [
                    "AIRPORT PASSENGER TER.",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S EXPRESS SVC",
                topFont: "LECIP-8",

                bottom: "SIT BACK AND RELAX!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'Mobitec-7:4'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A1",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "A21": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "A2",
                destination: {
                    text: "AIRPORT EXPRESS",
                    font: "Gorba-9"
                },
                scrolls: [
                    "GRUNDORF BAY",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S EXPRESS SVC",
                topFont: "LECIP-8",

                bottom: "SIT BACK AND RELAX!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'Mobitec-7:4'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A2",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "A22": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "A2",
                destination: {
                    text: "AIRPORT EXPRESS",
                    font: "Gorba-9"
                },
                scrolls: [
                    "AIRPORT PASSENGER TER.",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S EXPRESS SVC",
                topFont: "LECIP-8",

                bottom: "SIT BACK AND RELAX!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'Mobitec-7:4'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A2",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "A31": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "A3",
                destination: {
                    text: "AIRPORT EXPRESS",
                    font: "Gorba-9"
                },
                scrolls: [
                    "SOUTH VALLEY HOSP.",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S EXPRESS SVC",
                topFont: "LECIP-8",

                bottom: "SIT BACK AND RELAX!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'Mobitec-7:4'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A3",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "A32": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "A3",
                destination: {
                    text: "AIRPORT EXPRESS",
                    font: "Gorba-9"
                },
                scrolls: [
                    "AIRPORT PASSENGER TER.",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S EXPRESS SVC",
                topFont: "LECIP-8",

                bottom: "SIT BACK AND RELAX!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'Mobitec-7:4'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A3",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "A41": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "A4",
                destination: {
                    text: "AIRPORT EXPRESS",
                    font: "Gorba-9"
                },
                scrolls: [
                    "HONG SHING PORT",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S EXPRESS SVC",
                topFont: "LECIP-8",

                bottom: "SIT BACK AND RELAX!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'Mobitec-7:4'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A4",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "A42": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "A4",
                destination: {
                    text: "AIRPORT EXPRESS",
                    font: "Gorba-9"
                },
                scrolls: [
                    "AIRPORT PASSENGER TER.",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S EXPRESS SVC",
                topFont: "LECIP-8",

                bottom: "SIT BACK AND RELAX!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'Mobitec-7:4'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A4",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
"CB1": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "CB1",
                destination: {
                    text: "POZNAN",
                    font: "LAWO-9"
                },
                scrolls: [
                    {
                renderType: "brandedSvc",
                serviceNumber: "CB1",
                branding: "POZNAN",
                font: "Hanover-19:11",
                spacing: 1
                    },
                    "via PRAGUE",
                    "via TRUCKERSMP HQ",
                    "via WROCLAW",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S FIRST",
                topFont: "LECIP-8",

                bottom: "CROSS BORDER SERVICE!",
                bottomFont: "LECIP-8"
                    },
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT WELCOMES YOU",
                topFont: "LECIP-8",

                bottom: "ONBOARD THE NEW BLUEBUS12!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LAWO-9'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CB1",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
"PR1": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "PR1",
                destination: {
                    text: "PARK & RIDE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "HILLSWICK<>SYCAMORE RD",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT WELCOMES YOU",
                topFont: "LECIP-8",

                bottom: "ONBOARD THE NEW B8RLE!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "PR1",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "RR1": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "RR",
                destination: {
                    text: "RAIL REPLACEMENT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "ASHBURY<>TIVERTON",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT WELCOMES YOU",
                topFont: "LECIP-8",

                bottom: "ONBOARD THE NEW DELUXE MOVER",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "RR",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    "83A1": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "83A",
                destination: {
                    text: "WESTFIELD POLICE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "HEADQUATERS",
                    {
                renderType: 'twoline',
                top: "A&S WELCOMES YOU ONBOARD",
                topFont: "LECIP-8",

                bottom: "CALL 6383 1111 FOR INFO!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83A",
                font: "LECIP-8",
                spacing: 2
            }
        }
    },
    "83A2": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "83A",
                destination: {
                    text: "WAIVESWORTH",
                    font: "LECIP-8"
                },
                scrolls: [
                    "INTERCHANGE",
                    {
                renderType: 'twoline',
                top: "A&S WELCOMES YOU ONBOARD",
                topFont: "LECIP-8",

                bottom: "CALL 6383 1111 FOR INFO!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83A",
                font: "LECIP-8",
                spacing: 2
            }
        }
    },
    "76X1": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "76X",
                destination: {
                    text: "EXPRESS SERVICE",
                    font: "LECIP-8"
                },
                scrolls: [
                    "BAUERNHOF<>ILLUM. LN",
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT WELCOMES YOU",
                topFont: "LECIP-8",

                bottom: "ONBOARD THE NEW B8RLE!",
                bottomFont: "LECIP-8"
                    },
                    {
                renderType: 'twoline',
                top: "A&S TRANSIT'S EXPRESS SVC",
                topFont: "LECIP-8",

                bottom: "SIT BACK AND RELAX!",
                bottomFont: "LECIP-8"
                    }
                ],
                scrollFont: 'LECIP-8'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "76X",
                font: "Gorba-16:8",
                spacing: 1
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
