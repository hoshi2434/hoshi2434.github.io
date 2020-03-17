EDSFormats.GASG = {
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
    autoBus: {
        serviceNumber: {
            align: "left",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "autoBus",
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
                    "else": "left-x,top"
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
            align: "left-x,bottom",
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
            top: "",
            topFont: "Mobitec-7:7",

            bottom: "",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    5: {
        front: {
            renderType: "destScroll",
            top: "LTG EMEA Matrix Renderer",
            topFont: "Mobitec-7:4",

            bottom: "A1 R160x16",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    10: {
        front: {
            renderType: "destScroll",
            top: "Bus Broken Down!",
            topFont: "Mobitec-7:7",

            bottom: "Please Do Not Board!",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    8: {
        front: {
            renderType: "boot",
            top: "USB STICK FOUND! NEW DATA FOUND!",
            topFont: "Mobitec-7:4",

            bottom: "GETTING DATA... DO NOT REMOVE!",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    9: {
        front: {
            renderType: "boot",
            top: "SHUTTING DOWN",
            topFont: "Mobitec-7:4",

            bottom: "REPLACING DATA WITH NEW DATA!",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    2: {
        front: {
            renderType: "boot",
            top: "MOBITEC ICU-602",
            topFont: "Mobitec-7:4",

            bottom: "Version 260120-GAS",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    3: {
        front: {
            renderType: "boot",
            top: "CHECKING CONTROLLER AND DATA",
            topFont: "Mobitec-7:4",

            bottom: "UNDERGOING SYSTEM CHECK",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    4: {
        front: {
            renderType: "boot",
            top: "SYSTEM CHECK PASS",
            topFont: "Mobitec-7:4",

            bottom: "COMMENCING BOOT SEQUENCE",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    7: {
        front: {
            renderType: "boot",
            top: "SYSTEM AT CRITICAL CONDITION",
            topFont: "Mobitec-7:4",

            bottom: "DATA AND SIGN(S) MAY BE CORRUPT",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    6: {
        front: {
            renderType: "boot",
            top: "SHUTTING DOWN",
            topFont: "Mobitec-7:4",

            bottom: "SYSTEM AT LOW POWER",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    11: {
        front: {
            renderType: "destScroll",
            top: "Bus Under Inspection",
            topFont: "Mobitec-7:7",

            bottom: "PLEASE KEEP CLEAR!",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    12: {
        front: {
            renderType: "destScroll",
            top: "恭喜发财",
            topFont: "Chinese-15:15",

            bottom: "",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    101: {
        front: {
            renderType: "autoBus",
            top: "    Autonomous Vehicle",
            topFont: "Mobitec-7:4",

            bottom: "    On Trial",
            bottomFont: "Mobitec-7:4",

            serviceNumber: " 1"
        }
    },
    201: {
        front: {
            renderType: "autoBus",
            top: "    Autonomous Vehicle",
            topFont: "Mobitec-7:4",

            bottom: "    On Trial",
            bottomFont: "Mobitec-7:4",

            serviceNumber: " 2"
        }
    },
    1111: {
        front: {
            renderType: "destScroll",
            top: "Sorry!",
            topFont: "Mobitec-7:7",

            bottom: "Not in Service",
            bottomFont: "Mobitec-7:7",

            serviceNumber: "1111"
        }
    },
    9999: {
        front: {
            renderType: "destScroll",
            top: "Ver 26.01.2020-Mobi",
            topFont: "Mobitec-7:7",

            bottom: "MOBITEC THE BEST",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    3333: {
        front: {
            renderType: "destScroll",
            top: "DRIVER UNDER",
            topFont: "Mobitec-7:7",

            bottom: "INSTRUCTION",
            bottomFont: "Mobitec-7:7",

            serviceNumber: "3333"
        }
    },
    4444: {
        front: {
            renderType: "destScroll",
            top: "ON TEST",
            topFont: "Mobitec-16:8",

            bottom: "",
            bottomFont: "Mobitec-7:7",

            serviceNumber: "4444"
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
            serviceNumber: "0000",
            destination: {
                text: "KAMPONG BAHRU",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "0000",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-13:7"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "0000",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    22: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "CHANGI VILLAGE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2",
                    top: "CHANGI VILLAGE",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "2",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    31: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "3",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    32: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "TAMPINES",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "3",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    61: {
        front: {
            renderType: "standardService",
            serviceNumber: "6",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "6",
                    top: "PASIR RIS INT",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "6",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3",
                "LOYANG AVE",
                "LOYANG WAY",
                "LOYANG CRESENT",
                "LOYANG WAY",
                "LOYANG AVE",
                "PASIR RIS DR 3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    121: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "KAMPONG BAHRU",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "12",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3/6/1",
                "LOYANG AVE",
                "TAMPINES AVE 7/2",
                "SIMEI RD",
                "UPP CHANGI RD EAST",
                "NEW UPP CHANGI RD",
                "BEDOK STH AVE 3",
                "BEDOK STH RD",
                "BEDOK STH AVE 1",
                "UPP EAST COAST RD",
                "EAST COAST RD",
                "MOUNTBATTEN ROAD",
                "SIMS WAY",
                "GEYLANG RD",
                "KALLANG RD",
                "VICTORIA ST",
                "HILL ST",
                "NEW BRIDGE RD",
                "KAMPONG BAHRU RD",
                "SPOONER RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    122: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12",
                    top: "PASIR RIS",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "12",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "SPOONER RD",
                "KAMPONG BAHRU RD",
                "EU TONG SEN STREET",
                "HILL ST",
                "VICTORIA ST",
                "KALLANG ROAD",
                "SIMS AVE",
                "SIMS WAY",
                "MOUNTBATTEN MRT/RD",
                "EAST COAST RD",
                "UPP EAST COAST RD",
                "BEDOK SOUTH AVE 1",
                "BEDOK SOUTH RD",
                "BEDOK SOUTH AVE 3",
                "NEW UPP CHANGI ROAD",
                "UPP CHANGI ROAD EAST",
                "SIMEI ROAD",
                "TAMPINES AVE 2/7",
                "LOYANG AVE",
                "PASIR RIS DR 1/6/3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    123: {
        front: {
            renderType: "standardService",
            serviceNumber: "12e",
            destination: {
                text: "KAMPONG BAHRU",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12e",
                    top: "LIMITED  KAMPONG",
                    bottom: "STOPS     BAHRU",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "12e",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3/6/1",
                "LOYANG AVE",
                "TAMPINES AVE 7/2",
                "SIMEI RD",
                "UPP CHANGI RD EAST",
                "NEW UPP CHANGI RD",
                "BEDOK STH AVE 3/1",
                "BEDOK STH RD",
                "ECP",
                "ROCHOR RD",
                "VICTORIA ST",
                "HILL ST",
                "NEW BRIDGE RD",
                "SPOONER RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    124: {
        front: {
            renderType: "standardService",
            serviceNumber: "12e",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12e",
                    top: "LIMITED  PASIR RIS",
                    bottom: "STOPS       INT    ",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "12e",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "SPOONER RD",
                "EU TONG SEN RD",
                "HILL ST",
                "VICTORIA ST",
                "OPHIR RD",
                "ECP",
                "BEDOK STH RD",
                "BEDOK STH AVE 1/3",
                "NEW UPP CHANGI RD",
                "UPP CHANGI RD EAST",
                "SIMEI RD",
                "TAMPINES AVE 2/7",
                "LOYANG AVE",
                "PASIR RIS DR 1/6/3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    151: {
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15",
                    top: "MARINE PARADE",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "15",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3/1/8",
                "PASIR RIS ST 52",
                "TAMPINES AVE 12/9/5/7/4/1",
                "BEDOK NTH RD EXTN (EXPRESS)",
                "BEDOK RESERVOIR RD",
                "KAKI BUKIT AVE 1",
                "EUNOS LINK",
                "JALAN EUNOS",
                "STILL RD",
                "JOO CHIAT PLACE",
                "TELOK KURAU ROAD",
                "MARINE PARADE RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    152: {
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15",
                    top: "PASIR RIS INT",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "15",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "MARINE PARADE RD",
                "JOO CHIAT PLACE",
                "STILL ROAD",
                "JALAN EUNOS",
                "EUNOS LINK",
                "KAKI BUKIT AVE 1",
                "BEDOK RESERVOIR ROAD",
                "JALAN EUNOS",
                "BEDOK NTH RD EXTN (EXPRESS)",
                "TAMPINES AVE 1/5/4/7/9/12",
                "PASIR RIS ST 52",
                "PASIR RIS DR 8/1/3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    153: {
        front: {
            renderType: "standardService",
            serviceNumber: "15A",
            destination: {
                text: "OPP EUNOS STN",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15A",
                    top: "ENDS AT",
                    bottom: "OPP EUNOS STN",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "15A",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3/1/8",
                "PASIR RIS ST 52",
                "TAMPINES AVE 12/9/5/7",
                "TAMPINES AVE 4/1",
                "BEDOK NTH RD EXTN",
                "BEDOK RESERVOIR RD",
                "KAKI BUKIT AVE 1",
                "EUNOS LINK",
                "JALAN EUNOS"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    171: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "BEDOK",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17",
                    top: "BEDOK",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "17",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3/4/1",
                "LOYANG AVE",
                "TAMPINES AVE 7/2",
                "SIMEI AVE",
                "BEDOK NORTH RD",
                "BEDOK NORTH AVE 4/1",
                "BEDOK NORTH DR"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    172: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17",
                    top: "PASIR RIS",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "17",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "BEDOK NORTH DRIVE",
                "BEDOK NORTH RD",
                "BEDOK NORTH AVE 1/4",
                "SIMEI AVE",
                "TAMPINES AVE 2/7",
                "LOYANG AVE",
                "PASIR RIS DR 1/4/3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    173: {
        front: {
            renderType: "standardService",
            serviceNumber: "17A",
            destination: {
                text: "BEDOK NTH DEPOT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17A",
                    top: "ENDS AT",
                    bottom: "BEDOK NTH DEPOT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "17A",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "BEDOK NORTH DRIVE",
                "BEDOK NORTH RD",
                "BEDOK NORTH AVE 4"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    341: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34",
                    top: "CHANGI AIRPORT",
                    bottom: "TERMINAL 2",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "34",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PUNGGOL PLACE",
                "PUNGGOL CENTRAL",
                "PUNGGOL ROAD",
                "TPE",
                "TAMPINES AVE 10/5/2/7",
                "PIE",
                "AIRPORT BOULEVARD",
                "CHANGI AIRPORT PTB 3,1,2,4"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    342: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "34",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "AIRPORT BOULEVARD",
                "PIE",
                "TAMPINES AVE 7/2/5/10",
                "TPE",
                "PUNGGOL ROAD",
                "PUNGGOL CENTRAL",
                "PUNGGOL PLACE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    343: {
        front: {
            renderType: "standardService",
            serviceNumber: "34A",
            destination: {
                text: "TAMPINES HUB",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34A",
                    top: "ENDS AT",
                    bottom: "TAMPINES HUB",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "34A",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PUNGGOL PLACE",
                "PUNGGOL CENTRAL",
                "PUNGGOL ROAD",
                "TPE",
                "TAMPINES AVE 10/5"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    344: {
        front: {
            renderType: "standardService",
            serviceNumber: "34B",
            destination: {
                text: "AFT TPE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34B",
                    top: "ENDS AT",
                    bottom: "AFT TPE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "34B",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    431: {
        front: {
            renderType: "standardService",
            serviceNumber: "43",
            destination: {
                text: "UPP EAST COAST",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "UPP EAST COAST",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "43",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    432: {
        front: {
            renderType: "standardService",
            serviceNumber: "43",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "43",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    433: {
        front: {
            renderType: "standardService",
            serviceNumber: "43M",
            destination: {
                text: "SERANGOON MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "SERANGOON MRT",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "43M",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    434: {
        front: {
            renderType: "standardService",
            serviceNumber: "43M",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    435: {
        front: {
            renderType: "standardService",
            serviceNumber: "43e",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "LIMITED    MARINE ",
                    bottom: "STOPS     PARADE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    436: {
        front: {
            renderType: "standardService",
            serviceNumber: "43e",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "LIMITED   PUNGGOL",
                    bottom: "STOPS        INT   ",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "43e",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    621: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "SIMS AVE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "SIMS AVE",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "62",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    622: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "62",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    623: {
        front: {
            renderType: "standardService",
            serviceNumber: "62A",
            destination: {
                text: "ALJUNED MRT",
                font: "Mobitec-7:7"
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
                {
                	renderType: "destScroll",
                    serviceNumber: "62A",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
    624: {
        front: {
            renderType: "standardService",
            serviceNumber: "62M",
            destination: {
                text: "UPP P. LEBAR RD",
                font: "Mobitec-7:7"
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
                {
                	renderType: "destScroll",
                    serviceNumber: "62M",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "HOUGANG AVE 1",
                "FEEQ WANTED THIS"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    681: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "TAMPINES CENTRAL I",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3/10/1/12",
                "ELIAS RD",
                "PASIR RIS ST 71",
                "TAMPINES AVE 10,11,6,9",
                "TAMPINES CONCOURSE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    682: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 9/6/11/10",
                "PASIR RIS DR 12/1/10/3",
                "ELIAS RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    683: {
        front: {
            renderType: "standardService",
            serviceNumber: "68A",
            destination: {
                text: "TAMPINES INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68A",
                    top: "ENDS AT",
                    bottom: "TAMPINES INT",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "68A",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "TAMPINES AVE 11,6,9",
                "TAMPINES CONCOURSE",
                "TAMPINES CENTRAL I"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    684: {
        front: {
            renderType: "standardService",
            serviceNumber: "68B",
            destination: {
                text: "REEBONZ BLDG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68B",
                    top: "ENDS AT",
                    bottom: "REEBONZ BLDG",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "68B",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "TAMPINES CENTRAL I",
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 9/6/11"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    821: {
        front: {
            renderType: "standardService",
            serviceNumber: "82",
            destination: {
                text: "SERANGOON MRT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "82",
                    top: "SERANGOON MRT",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "82",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PUNGGOL PLACE",
                "PUNGGOL FIELD",
                "PUNGGOL ROAD",
                "HOUGANG AVE 10/2",
                "UPP SERANGOON ROAD",
                "SERANGOON MRT/CENTRAL"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    822: {
        front: {
            renderType: "standardService",
            serviceNumber: "82",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "SERANGOON CENTRAL",
                "BOUNDARY ROAD",
                "UPP SERANGOON ROAD",
                "HOUGANG AVE 2/10",
                "PUNGGOL ROAD",
                "PUNGGOL FIELD",
                "PUNGGOL PLACE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    831: {
        front: {
            renderType: "standardService",
            serviceNumber: "83",
            destination: {
                text: "SENGKANG",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "83",
                    top: "SENGKANG",
                    bottom: "THIS IS THE WSOE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "83",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PUNGGOL PLACE",
                "PUNGGOL CENTRAL",
                "PUNGGOL EAST",
                "PUNGGOL FIELD",
                "PUNGGOL ROAD",
                "COMPASSVALE ST",
                "SENGKANG EAST RD",
                "SENGKANG SQUARE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    832: {
        front: {
            renderType: "standardService",
            serviceNumber: "83",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "83",
                    top: "PUNGGOL",
                    bottom: "THIS IS THE WSOE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "83",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    833: {
        front: {
            renderType: "standardService",
            serviceNumber: "83W",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "83W",
                    top: "",
                    bottom: "THIS IS THE WSOE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "83W",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    841: {
        front: {
            renderType: "standardService",
            serviceNumber: "84",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    851: {
        front: {
            renderType: "standardService",
            serviceNumber: "85",
            destination: {
                text: "YISHUN",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    852: {
        front: {
            renderType: "standardService",
            serviceNumber: "85",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    1181: {
        front: {
            renderType: "standardService",
            serviceNumber: "118",
            destination: {
                text: "CHANGI BIZ PARK",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118",
                    top: "CHANGI BIZ PARK",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "118",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PUNGGOL PLACE",
                "PUNGGOL CENTRAL",
                "PUNGGOL WAY",
                "TAMPINES EXPRESSWAY",
                "TAMPINES AVE 10/5/8/1",
                "SIMEI AVE",
                "XILIN AVE",
                "CHANGI SOUTH AVE 1/2",
                "CHANGI BIZ PK CTRL 1",
                "CHANGI SOUTH AVE 1"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1182: {
        front: {
            renderType: "standardService",
            serviceNumber: "118",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "118",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "CHANGI SOUTH AVE 1",
                "CHANGI BIZ PARK CTRL 1",
                "CHANGI SOUTH AVE 2",
                "XILIN AVE",
                "SIMEI AVE",
                "TAMPINES AVE 1/8/5/10",
                "TAMPINES EXPRESSWAY",
                "PUNGGOL WAY",
                "PUNGGOL CENTRAL",
                "PUNGGOL PLACE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1183: {
        front: {
            renderType: "standardService",
            serviceNumber: "118A",
            destination: {
                text: "ITE COLL EAST",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118A",
                    top: "ENDS AT",
                    bottom: "ITE COLLEGE EAST",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "118A",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "TAMPINES EXPRESSWAY",
                "TAMPINES AVE 10/5/8/1",
                "SIMEI AVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1184: {
        front: {
            renderType: "standardService",
            serviceNumber: "118B",
            destination: {
                text: "BEF PUNGGOL RD",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "118B",
                    top: "ENDS AT",
                    bottom: "BEF PUNGGOL RD",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "118B",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "SIMEI AVE",
                "TAMPINES AVE 1/8/5/10",
                "TAMPINES EXPRESSWAY"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1191: {
        front: {
            renderType: "standardService",
            serviceNumber: "119",
            destination: {
                text: "KOVAN",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "119",
                    top: "KOVAN",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "119",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PUNGGOL PLACE",
                "PUNGGOL FIELD",
                "PUNGGOL WAY",
                "SENGKANG EAST RD",
                "SENGKANG EAST WAY",
                "RIVERVALE DRIVE",
                "SENGKANG EAST AVE",
                "PUNGGOL ROAD",
                "HOUGANG AVE 10/8",
                "UPP SERANGOON ROAD",
                "HOUGANG STREET 21"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1192: {
        front: {
            renderType: "standardService",
            serviceNumber: "119",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "119",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "119",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "UPP SERANGOON ROAD",
                "HOUGANG AVE 8/10",
                "PUNGGOL ROAD",
                "SENGKANG EAST AVE",
                "RIVERVALE DRIVE",
                "SENGKANG EAST WAY",
                "SENGKANG EAST ROAD",
                "PUNGGOL WAY",
                "PUNGGOL FIELD",
                "PUNGGOL PLACE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1361: {
        front: {
            renderType: "standardService",
            serviceNumber: "136",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    1362: {
        front: {
            renderType: "standardService",
            serviceNumber: "136",
            destination: {
                text: "ANG MO KIO",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    3811: {
        front: {
            renderType: "standardService",
            serviceNumber: "381",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PUNGGOL PLACE",
                "PUNGGOL FIELD",
                "PUNGGOL WAY",
                "EDGEFIELD PLAINS",
                "PUNGGOL FIELD",
                "PUNGGOL EAST"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3821: {
        front: {
            renderType: "standardService",
            serviceNumber: "382G",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    3822: {
        front: {
            renderType: "standardService",
            serviceNumber: "382W",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    3541: {
        front: {
            renderType: "standardService",
            serviceNumber: "354",
            destination: {
                text: "JLN LOYANG BR",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3542: {
        front: {
            renderType: "standardService",
            serviceNumber: "354",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS CL",
                "PASIR RIS DR 3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3581: {
        front: {
            renderType: "standardService",
            serviceNumber: "358",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "358",
                    top: "PASIR RIS INT",
                    bottom: "(WEST LOOP)",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "358",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3/1",
                "PASIR RIS DR 10 (LOOP)",
                "ELIAS RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3582: {
        front: {
            renderType: "standardService",
            serviceNumber: "358",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "358",
                    top: "PASIR RIS INT",
                    bottom: "(EAST LOOP)",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "358",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 6/1",
                "PASIR RIS DR 4 (LOOP)",
                "PASIR RIS ST 41",
                "PASIR RIS DR 6/3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3591: {
        front: {
            renderType: "standardService",
            serviceNumber: "359",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "359",
                    top: "PASIR RIS INT",
                    bottom: "(WEST LOOP)",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "359",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3/12/1/10",
                "PASIR RIS ST 71 (LOOP)",
                "PASIR RIS 12/3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3592: {
        front: {
            renderType: "standardService",
            serviceNumber: "359",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "359",
                    top: "PASIR RIS INT",
                    bottom: "(EAST LOOP)",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "359",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS CTRL",
                "PASIR RIS ST 51/11",
                "PASIR RIS DR 1/3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4031: {
        front: {
            renderType: "standardService",
            serviceNumber: "403",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "403",
                    top: "PASIR RIS INT",
                    bottom: "PSR PARK(LOOP)",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "403",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "PASIR RIS DR 3/1",
                "PASIR RIS CTRL",
                "ELIAS RD",
                "PASIR RIS RD(LOOP)",
                "ELIAS RD",
                "PASIR RIS CTRL",
                "PASIR RIS 1/3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3861: {
        front: {
            renderType: "standardService",
            serviceNumber: "386",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
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
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    5181: {
        front: {
            renderType: "standardService",
            serviceNumber: "518",
            destination: {
                text: "BAYFRONT AVE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518",
                    top: "LIMITED  BAYFRONT",
                    bottom: "STOPS       AVE    ",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "518",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    5182: {
        front: {
            renderType: "standardService",
            serviceNumber: "518",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518",
                    top: "LIMITED  PASIR RIS",
                    bottom: "STOPS       INT    ",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "518",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                "ECP, KPE, PIE",
                "BEDOK NORTH ROAD",
                "TAMPINES AVE 1/2/7",
                "LOYANG AVE",
                "PASIR RIS DR 1/12/3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5183: {
        front: {
            renderType: "standardService",
            serviceNumber: "518A",
            destination: {
                text: "BAYFRONT AVE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "518A",
                    top: "ENDS AT",
                    bottom: "BAYFRONT AVE",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "518A",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    5881: {
        front: {
            renderType: "standardService",
            serviceNumber: "9588",
            destination: {
                text: "HARBOURFRONT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "",
                    top: "WELCOME ABOARD PA9588S!",
                    bottom: "SHOW YOUR TICKETS TO OUR STAFF",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "9588",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                 {
                	renderType: "destScroll",
                    serviceNumber: "",
                    top: "ROUTE DETAILS NOT CONFIRMED",
                    bottom: "SORRY FOR THE INCONVENIENCE!",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                 },
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    5882: {
        front: {
            renderType: "standardService",
            serviceNumber: "9588",
            destination: {
                text: "BUS DEPOT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "9588",
                    top: "Sorry!",
                    bottom: "Not In Service",
                    topFont: "Mobitec-7:7",
                    bottomFont: "Mobitec-7:7"
                },
                {
                	renderType: "destScroll",
                    serviceNumber: "9588",
                    top: "GONG XI FA CAI",
                    topFont: "Mobitec-16:8"
                 },
                 {
                	renderType: "destScroll",
                    serviceNumber: "",
                    top: "THANK YOU FOR TRAVELLING WITH US!",
                    bottom: "FOLLOW OUR INSTA (BUSGAG.SG)!",
                    topFont: "Mobitec-7:4",
                    bottomFont: "Mobitec-7:4"
                 },
                "BUSGAG ADMINS ONLY",
                "CHARTERED",
                "BUS HEADING TO DEPOT"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    8541: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: {
                text: "BEDOK via",
                font: "Mobitec-7:7"
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
            scrollFont: "Mobitec-7:4"
        }
    },
    8542: {
        front: {
            renderType: "standardService",
            serviceNumber: "854",
            destination: {
                text: "YISHUN via",
                font: "Mobitec-7:7"
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
            scrollFont: "Mobitec-7:4"
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
