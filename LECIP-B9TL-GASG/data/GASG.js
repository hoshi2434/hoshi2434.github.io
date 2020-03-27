EDSFormats.GASG = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-24",
            spacing: 2
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                top: 0,
                left: 2
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                bottom: '-1',
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

EDSFormats.GASG.pids = EDSFormats.SMRT.pids;


EDSData.GASG = {  //4 spaces for each dest 3 for scroll
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "ELECTRIC BUS",
                font: "LECIP-20:12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "OFF",
                destination: "WELCOME ABOARD",
                scrolls: [
                    "WELCOME ABOARD THE ELECTRIC BUS"
               ]
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
    621: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: {
                    text: "SIMS AVE    ",
                    font: "LECIP-10"
                },
                scrolls: [
                    "LORONG AH SOO   "
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "62",
                destination: "SIMS AVE",
                scrolls: [
                    "PUNGGOL INT"
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
