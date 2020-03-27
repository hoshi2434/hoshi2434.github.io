EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-24",
            spacing: 2
        },
        scroll: {
            align: "left,top",
            margin: {
                top: 2,
                left: 2
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 2
        },
        destination: {
            align: "left,bottom",
            margin: {
                bottom: 1,
                left: 2
            },
            text: "$destination",
            spacing: 2
        },

        text: "$destination"
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
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
}

EDSFormats.SBST.pids = EDSFormats.SMRT.pids;


EDSData.SBST = { 
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "LECIP-20:12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "OFF SERVICE",
                scrolls: [""]
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "message",
                text: "SBS TRANSIT LOGO",
                font: "LECIP-20:12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "SBS TRANSIT",
                scrolls: [""]
            }
        }
    },
    3333: {
        1: {
            front: {
                renderType: "message",
                text: "FREE SHUTTLE",
                font: "LECIP-20:12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "FREE SHUTTLE",
                scrolls: [""]
            }
        }
    },
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "LECIP-20:12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "ON TEST DRIVE SAFE!",
                scrolls: [""]
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "LECIP-20:12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "TRAINING BUS",
                scrolls: [""]
            }
        }
    },
    7777: {
        1: {
            front: {
                renderType: "message",
                text: "FREE BRIDGING BUS",
                font: "LECIP-20:12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "FBB",
                destination: "FREE BRIDGING BUS",
                scrolls: [""]
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "31 DEC 2019",
                font: "LECIP-20:12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "31 DEC 2019",
                scrolls: [""]
            }
        }
    },
    161: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: {
                    text: "> BUKIT MERAH INT",
                    font: "LECIP-10"
                },
                scrolls: [
                "OMG HYPE DEBUT",
                " "
                ],
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "HYPE HYPE HYPE HYPE"
                ]
            }
        }
    },
    162: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: {
                    text: "> BEDOK INT",
                    font: "LECIP-10"
                },
                scrolls: [
                "OMG HYPE DEBUT",
                " "
                ],
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16",
                destination: "BEDOK INT",
                scrolls: [
                    "HYPE HYPE HYPE HYPE"
                ]
            }
        }
    },
    163: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16M",
                destination: {
                    text: "> BUKIT MERAH INT",
                    font: "LECIP-10"
                },
                scrolls: [
                "OMG HYPE DEBUT",
                " "
                ],
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16M",
                destination: "BUKIT MERAH INT",
                scrolls: [
                    "HYPE HYPE HYPE HYPE"
                ]
            }
        }
    },
    164: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16M",
                destination: {
                    text: "> BEDOK INT",
                    font: "LECIP-10"
                },
                scrolls: [
                "OMG HYPE DEBUT",
                " "
                ],
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16",
                destination: "BEDOK INT",
                scrolls: [
                    "HYPE HYPE HYPE HYPE"
                ]
            }
        }
    },
    87: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: {
                    text: ">BEDOK INT",
                    font: "LECIP-10"
                },
                scrolls: [
                "COMPASSVALE RD",
                "HOUGANG AVE 10, 5, 7, 3",
                "EUNOS LINK",
                "KAKI BUKIT AVE 1",
                "BEDOK NTH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "87",
                destination: "BEDOK INT",
                scrolls: [
                    "ANDY REP SVC"
                ]
            }
        }
    },
    93: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: {
                    text: ">HARBOURFRONT INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "EUNOS LINK"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "93",
                destination: "HARBOURFRONT INT",
                scrolls: [
                    "EUNOS INT",
                    "EUNOS STN/ INT",
                    "EUNOS STN",
                    "BLK 17",
                    "BLK 322",
                    "BLK 311",
                    "OPP EUNOS TECHNOLINK",
                    "COMFORT DRIVING CTR",
                    "COMFORT TEST CTR",
                    "OPP BLK 1022",
                    "AFT TAI SENG STN",
                    "ASIAWIDE IND BLDG",
                    "AFT PAYA LEBAR ST",
                    "AFT UPP PAYA LEBAR RD",
                    "BARTLEY STN EXIT A",
                    "OPP BARTLEY CHR CH",
                    "OPP GAMBIR RIDGE",
                    "BEF UPP SERANGOON RD",
                    // "S'PORE POWER TRG INST",
                    "PUB RECREATION CLUB",
                    "BEF BRADDELL FLYOVER",
                    "COMFORTDELGRO CORP LTD",
                    "BLK 219",
                    "AFT MUHAJIRIN MQUE",
                    "BLK 1004",
                    "AFT BISHAN RD",
                    "BRADDELL VIEW",
                    "OPP MACRITCHIE RESERVOIR",
                    "BEF ANDREW RD",
                    "BEF KHEAM HOCK RD",
                    "AFT THE JAPANESE ASSN",
                    "OPP S'PORE BIBLE COLL",
                    "OPP LUTHERAN TWRS",
                    "OPP ST. MARGARET'S SEC SCH",
                    "FARRER RD STN EXIT A",
                    "SPANISH VILLAGE",
                    "OPP TULIP GDN",
                    "OPP HOLLAND HILL LODGE",
                    "OPP BLK 95",
                    "QUEENSWAY SEC SCH",
                    "QUEENSTOWN POLYCLINIC",
                    "OPP BLESSED SACRAMENT CH",
                    "BLK 19",
                    "BLK 166",
                    "OPP QUEENSWAY SHOP CTR",
                    "BEF TELOK BLANGAH HILL PK",
                    "OPP ALEXANDRA PT",
                    "BEF PSA BLDG",
                    "AFT ALEXANDRA RD",
                    "YEO'S BLDG",
                    "OPP TELOK BLANGAH STN",
                    "BEF CHR COMMUNITY CHAPEL",
                    "BEF SEAH IM RD",
                    "HARBOURFRONT INT"
                ]
            }
        }
    },
    272: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "272",
                destination: {
                    text: ">BUKIT MERAH INT",
                    font: "LECIP-8"
                },
                scrolls: [
                    "HENDERSON RD",
                    " ",
                    "TELOK BLANGAH CRES"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "272",
                destination: "TELOK BLANGAH CRES",
                scrolls: [
                    "BT MERAH INT",
                    "AFT BT MERAH CTRL",
                    "BLK 1",
                    "BLK 25",
                    "BLK 28",
                    "BLK 36 MKT/FC",
                    "BLK 41",
                    "BLK 40",
                    "BLK 27",
                    "BLK 10",
                    "BLK 11",
                    "OPP BLK 1",
                    "BEF BT MERAH CTRL",
                    "BT MERAH INT"
                ]
            }
        }
    }
}
