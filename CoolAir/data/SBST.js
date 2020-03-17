EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: {
                $$cond: {
                    "$spacing === undefined" : 3,
                    "else": "$spacing"
                }
            }
        },
        destination: {
            align: "left,bottom",
            margin: {
                bottom: {
                    $$cond: {
                        "$destinationFont |== 'Mobitec-7:7'": 0,
                        "else": 2
                    }
                }
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: {
                $$cond: {
                    "$destinationFont |== 'Mobitec-7:7'": 2,
                    "$destinationFont |== 'Mobitec-7:7'": 1,
                    "$destinationFont |== 'Mobitec-7:7'": 1,
                    "else": 1
                }
            }
        },
        scroll: {
            align: "left,top",
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$serviceNumber+'\n'+$destination" // format to tts for now, check sbst later hopefully if no one kena pok
    },
    logo: {
        logo: {
            align: "centre-x",
            image: "$image"
        },

        text: "$text"
    },
    logoSvc: {
        logo: {
            align: "left",
            image: "$image",
        },
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: 2
        },

        text: "$serviceNumber+'\n'+$destination"
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
    brandedSvc: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16",
            spacing: 2
        },
        branding: {
            align: "left",
            text: "$branding",
            font: "$font",
            spacing: '$spacing'
        },

        text: "$serviceNumber+'\n'+$branding"
    },
    twoline: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {top: 1}
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {bottom: 1}
        },
        text: "$top+'\n'+$bottom"
    },
    rearService: {
        serviceNumber: {
            align: "centre-x,centre-y",
            text: "$serviceNumber",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$serviceNumber"
    },
    holidayMessage: {
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image === null": "blank",
                    "else": "$image"
                }
            }
        },
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Mobitec-LAWO-16;Space-Width=1",
            spacing: 2 // Just to trigger people HAHAHAHA
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
            spacing: "$topSpacing",
            margin: {
                top: {
                    $$cond: {
                        "$topMargin !== null": "$topMargin",
                        "$bottom === ''": -2,
                        "else": 1
                    }
                },
                right: 'width(serviceNumber) - width(image)'
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
            spacing: "$bottomSpacing",
            margin: {
                bottom: 1,
                right: 'width(serviceNumber) - width(image)'
            }
        },
        text: "$top"
    }
}

EDSData.SBST = {
    1234 : {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "SPECIAL MESSAGE TESTING",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "",
                        image: "fireworks",

                        top: "HAPPY NEW YEAR",
                        topFont: "Hanover-8"
                    },
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "",
                        image: "ingot",

                        top: "HAPPY",
                        topFont: "Mobitec-7:4",

                        bottom: "CHINESE NEW YEAR",
                        bottomFont: "Mobitec-7:4"
                    },
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "",
                        image: "ingot",

                        top: "新年快乐",
                        topMargin: 0,
                        topFont: "Chinese-18"
                    },
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "",
                        image: "fireworks",

                        top: "Happy National Day",
                        topFont: "Hanover-7:3",

                        bottom: "Singapore!",
                        bottomFont: "Mobitec-7:4"
                    },
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "",

                        top: "Be Kind, Be Great !",
                        topFont: "Hanover-12:3",
                        topSpacing: 2
                    },
                ],
                scrollFont: "Mobitec-7:4"
            }
        },
    },
    50: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> PUNGGOL INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "ANG MO KIO AVE 5",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST WAY",
                    "PUNGGOL DR"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "50",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> BISHAN INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    "PUNGGOL DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "50",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    53: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: "> CHANGI AIRPORT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    "BISHAN RD",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1",
                    "PASIR RIS DR 1"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: "> BISHAN INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    "PASIR RIS DR 1",
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "BISHAN RD"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    88: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: "> TOA PAYOH INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    'PASIR RIS DR 3',
                    'PUNGGOL RD',
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 5',
                    'BISHAN ST 22'
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: "> PASIR RIS INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 5',
                    'HOUGANG AVE 8',
                    'PUNGGOL RD',
                    'PASIR RIS DR 3'
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    105: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: "> JURONG EAST INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [,
                    "COMMONWEALTH AVE WEST",
                    "TOH GUAN RD"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: "> SERANGOON INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    "TOH GUAN RD",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    113: {//TODO SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "113",
                destination: "HOUGANG-UPP P. LEBAR RD",
                destinationFont: "Mobitec-7:4",
                scrolls: [
                    'HOUGANG AVE 8',
                    'HOUGANG AVE 10',
                    'UPP SERANGOON RD',
                    'HOUGANG ST 21',
                    'LORONG AH SOO',
                    'HOUGANG ST 21',
                    'UPP SERANGOON RD',
                    'HOUGANG AVE 10',
                    'HOUGANG AVE 8'
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "113",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    120: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "120",
                destination: "KG BAHRU TER-T.BLANGAH HTS",
                destinationFont: "Hanover-7:3",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH RD",
                    "ALEXANDRA RD", // <-
                    "TIONG BAHRU RD"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "120",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    123: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: "> SENTOSA",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "123",
                        image: "fireworks",

                        top: "I AM THE",
                        topFont: "Mobitec-7:4",

                        bottom: "WORST SERVICE",
                        bottomFont: "Mobitec-7:4"
                    },
                    "QUEENSWAY",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "HAVELOCK RD",
                    "TIONG BAHRU RD",
                    "LOWER DELTA RD",
                    "BUKIT PURMEI AVE"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "123",
                        image: "fireworks",

                        top: "I AM THE",
                        topFont: "Mobitec-7:4",

                        bottom: "WORST SERVICE",
                        bottomFont: "Mobitec-7:4"
                    },
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD",
                    "TIONG BAHRU RD",
                    "HAVELOCK RD",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "QUEENSWAY"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    124: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> ST MICHAEL'S TER",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    "NEW BRIDGE RD",
                    "KAMPONG BAHRU RD",
                    "TELOK BLANGAH HTS",
                    "MOULMEIN RD",
                    "ORCHARD RD"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> HARBOURFRONT INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH WAY",
                    "EU TONG SEN ST",
                    "ORCHARD TURN",
                    "MOULMEIN RD",
                    "TELOK BLANGAH WAY",
                    "KAMPONG BAHRU RD"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    154: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: "> BOON LAY INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    "PAYA LEBAR RD",
                    "JALAN TOA PAYOH",
                    "BUKIT TIMAH RD",
                    "CLEMENTI RD",
                    "COMMONWEALTH AVE WEST",
                    "AYE",
                    "YUAN CHING RD"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    174: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> BOON LAY INT",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    {
                        renderType: "holidayMessage",
                        serviceNumber: "174",

                        top: "Be Kind, Be Great !",
                        topFont: "Hanover-12:3",
                        topSpacing: 2
                    },
                    "EU TONG SEN ST",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "FARRER RD",
                    "BT TIMAH RD",
                    "JLN JURONG KECHIL",
                    "BT BATOK E. AVE 6, 3"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "Hanover-8",
                scrolls: [
                    "BT BATOK E. AVE 3, 6",
                    "JLN JURONG KECHIL",
                    "DUNEARN RD",
                    "FARRER RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "NTH, STH BRIDGE RD",
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    175: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "175",
                destination: "> LOR 1 GEYLANG TER",
                destinationFont: "Hanover-8",
                scrolls: [
                    "PASIR PANJANG RD",
                    "ALEXANDRA RD"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "175",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "201",
                destination: "KENT RIDGE TER-PANDAN GDNS",
                destinationFont: "Hanover-7:4",
                scrolls: [
                    "C'WEALTH AVE WEST",
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "201",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    258: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "258",
                spacing: 1,
                destination: "JOO KOON INT-JUR W.ST64",
                destinationFont: "Hanover-8",
                scrolls: [
                    "PIONEER RD NTH",
                    "JURONG WEST ST 61,81,75",
                    "JLN AHMAD IBRAHIM"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "258",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
     854: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                spacing: 1,
                destination: ">BEDOK",
                destinationFont: "Mobitec-7:7",
                scrolls: [
                    "YISHUN AVE 2",
                    "LENTOR AVE",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 2",
                    "HOUGANG AVE 3",
                    "EUNOS LINK",
                    "JLN EUNOS, EUNOS MRT",
                    "SIMS AVE EAST",
                    "NEW UPP CHANGI RD",
                    "BEDOK NORTH AVE 1",
                    "BEDOK NORTH DR"
                ],
                scrollFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "Mobitec-16:8",
                spacing: 2
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "logo",
                text: "SBS TRANSIT",
                image: "logo"
            }
        }
    },
    6969: {
        1: {
            front: {
                renderType: "message",
                text: "OUT OF SERVICE",
                font: "Mobitec-16:8",
                spacing: 2
            }
        }
    }
}

EDSImages.SBST = {
    "fireworks": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ],
    "ingot": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
    ],
    logo: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    blank: [[]]
}
