EDSFormats.GASG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "TTS-Mobitec-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: "Mobitec-9:6",
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

            font: "Mobitec-6:5",
            spacing: 1
        },

        text: "$destination+' '+$serviceNumber"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "TTS-Mobitec-16:8",
            spacing: 2
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
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
                    "$bottomFont === null": "Hanover-5:3",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
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

EDSData.TTSG = {
    1111: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "OFF SERVICE",
            scrolls: [
                {
                    renderType: "message",
                    text: "Off Service",
                    font: "TTS-Mobitec-16:9",
                    spacing: 3
                },
                {
                    renderType: "logo",
                    image: "logo",
                    text: ""
                }
            ]
        }
    },
    411: {
        front: {
            renderType: "standardService",
            serviceNumber: "41",
            destination: "JALAN ANAK BUKIT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "JALAN ANAK BUKIT"
                },
                "TOH GUAN RD",
                "TOH GUAN RD EAST",
                "TOH TUCK RD",
                "BEAUTY WORLD MRT"
            ]
        }
    },
    412: {
        front: {
            renderType: "standardService",
            serviceNumber: "41",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "41",
                    top: "JURONG EAST"
                },
                "TOH TUCK RD",
                "TOH GUAN RD EAST",
                "TOH GUAN RD"
            ]
        }
    },
    491: {
        front: {
            renderType: "standardService",
            serviceNumber: "49",
            destination: "JURONG WEST ST 42",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "JURONG WEST ST 42"
                }, // sort below
                "JURONG TOWN HALL RD",
                "LAKESIDE MRT",
                "CORPORATION DR",
                "JURONG WEST ST 51",
                "BOON LAY WAY"
            ]
        }
    },
    492: {
        front: {
            renderType: "standardService",
            serviceNumber: "49",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "49",
                    top: "JURONG EAST"
                }, // incomplete
                "CORPORATION DR",
                "LAKESIDE MRT"
            ]
        }
    },
    621: {
        front: {
            renderType: "standardService",
            serviceNumber: "62",
            destination: "SIMS AVE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "MERRY CHRISTMAS",
                    topFont: "Hanover-7:3",
                    bottom: "HAPPY NEW YEAR",
                    bottomFont: "Hanover-7:3",
                    image: ""
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "PUNGGOL INT TO",
                    topFont: "Mobitec-7:6:2",
                    bottom: "SIMS AVE",
                    bottomFont: "Mobitec-7:5:1",
                    image: ""
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "62",
                    top: "SIMS AVE via"
                }, 
                "PUNGGOL PL",
                "TREVOR HAUS"
            ]
        }
    },
    661: {
        front: {
            renderType: "standardService",
            serviceNumber: "66",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "JURONG EAST",
                    image: "mrt"
                },
                "BEDOK RESERVOIR RD",
                "MACPHERSON EST / RD",
                "LITTLE INDIA",
                "BUKIT TIMAH RD",
                "BUKIT BATOK CENTRAL"
            ]
        }
    },
    662: {
        front: {
            renderType: "standardService",
            serviceNumber: "66",
            destination: "BEDOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "66",
                    top: "BEDOK",
                    image: "mrt"
                },
                "BUKIT BATOK CENTRAL",
                "DUNEARN RD",
                "LITTLE INDIA",
                "MACPHERSON RD / EST",
                "BEDOK RESERVOIR RD",
            ]
        }
    },
    771: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "STAMFORD RD",
                "ORCHARD BOULEVARD",
                "HOLLAND RD / VILLAGE",
                "SIXTH AVE",
                "TOH TUCK RD"
            ]
        }
    },
    772: {
        front: {
            renderType: "standardService",
            serviceNumber: "77",
            destination: "MARINA CENTRE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "77",
                    top: "MARINA CENTRE",
                    bottom: "(PROMENADE MRT)",
                    image: "mrt"
                },
                "TOH TUCK RD",
                "SIXTH AVE",
                "HOLLAND RD / VILLAGE",
                "ORCHARD RD"
            ]
        }
    },
    781: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: "CLEMENTI MRT",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "CLEMENTI MRT",
                    image: "mrt"
                }, // likely incomplete
                "WEST COAST RD",
                "PENJURU RD",
                "TANJONG PENJURU",
                "PANDAN RD / AVE"
            ]
        }
    },
    782: {
        front: {
            renderType: "standardService",
            serviceNumber: "78",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "78",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // ? incomplete
                "PENJURU RD",
            ]
        }
    },
    791: {
        front: {
            renderType: "standardService",
            serviceNumber: "79",
            destination: "BOON LAY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "BOON LAY",
                    image: "mrt"
                }, // incomplete, dig for 79 scrolls
                "TEBAN GARDENS RD",
            ]
        }
    },
    792: {
        front: {
            renderType: "standardService",
            serviceNumber: "79",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "79",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // also dig
                "TEBAN GARDENS RD",
            ]
        }
    },
    961: {
        front: {
            renderType: "standardService",
            serviceNumber: "96",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "96",
                    top: "CLEMENTI",
                    image: "mrt"
                }, // incomplete
                "KENT RIDGE CRES"
                // "NAT'L UNIVERSITY OF S'PORE",
            ]
        }
    },
    971: {
        front: {
            renderType: "standardService",
            serviceNumber: "97",
            destination: "MARINA CENTRE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "MARINA CENTRE"
                }, // check
                "AYE",
                "ALEXANDRA RD",
                "HARBOURFRONT",
                "ROBINSON RD",
                "BAYFRON AVE / MBS",
                "SUNTEC CITY"
            ]
        }
    },
    972: {
        front: {
            renderType: "standardService",
            serviceNumber: "97",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "AYE",
            ]
        }
    },
    973: {
        front: {
            renderType: "standardService",
            serviceNumber: "97e",
            destination: "MARINA CENTRE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97e", 
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "MARINA CENTRE"
                }, // incomplete
                "HARBOURFRONT",
            ]
        }
    },
    974: {
        front: {
            renderType: "standardService",
            serviceNumber: "97e",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "97e",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete, something about limited stops
                "HARBOURFRONT",
            ]
        }
    },
    981: {
        front: {
            renderType: "standardService",
            serviceNumber: "98",
            destination: "JURONG PIER WAY", // jurong pier way or checkpt?
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "JURONG PIER WAY"
                }, // incomplete
                "LAKESIDE MRT",
            ]
        }
    },
    982: {
        front: {
            renderType: "standardService",
            serviceNumber: "98",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "JURONG EAST AVE 1",
            ]
        }
    },
    983: {
        front: {
            renderType: "standardService",
            serviceNumber: "98M",
            destination: "CORPORATION PL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:6:2",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "98M",
                    top: "CORPORATION PL"
                }, // incomplete
                "JURONG WEST AVE 1",
            ]
        }
    },
    1061: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: "SHENTON WAY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "SHENTON WAY",
                    bottom: "(TANJONG PAGAR MRT)",
                    image: "mrt"
                },
                "C'WEALTH AVE WEST",
                "HOLLAND RD / VILLAGE",
                "ORCHARD RD",
                "SUNTEC CITY",
                "BAYFRONT AVE / MBS"
            ]
        }
    },
    1062: {
        front: {
            renderType: "standardService",
            serviceNumber: "106",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "106",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "BAYFRON AVE / MBS",
                "ORCHARD BOULEVARD",
                "HOLLAND RD / VILLAGE",
                "C'WEALTH AVE WEST",
                "TOH TUCK AVE",
            ]
        }
    },
    1431: {
        front: {
            renderType: "standardService",
            serviceNumber: "143",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // check
                "THOMSON RD",
                "ORCHARD RD",
                "NEW BRIDGE RD",
                "KAMPONG BAHRU RD",
                "PASIR PANJANG RD",
                "WEST COAST RD",
                "TEBAN GARDENS RD",
                "JURONG TOWN HALL RD",
            ]
        }
    },
    1432: {
        front: {
            renderType: "standardService",
            serviceNumber: "143",
            destination: "TOA PAYOH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143",
                    top: "TOA PAYOH",
                    image: "mrt"
                },
                "TEBAN GARDENS RD",
                "PASIR PANJANG RD",
                "HARBOURFRONT",
                "CHINATOWN",
                "ORCHARD TURN",
            ]
        }
    },
    1433: { // check if this or 7431
        front: {
            renderType: "standardService",
            serviceNumber: "143M",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "143M",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "TEBAN GARDENS RD",
                "PANDAN GARDENS",
            ]
        }
    },
    1731: {
        front: {
            renderType: "standardService",
            serviceNumber: "173",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "CLEMENTI",
                    image: "mrt"
                },
                "BT BATOK EAST AVE 4",
                "HILLVIEW AVE",
                "HUME AVE",
                "BEAUTY WORLD MRT",
                "TOH TUCK RD / TERRACE"
            ]
        }
    },
    1732: {
        front: {
            renderType: "standardService",
            serviceNumber: "173",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "173",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "TOH TUCK RD / TERRACE",
                "BEAUTY WORLD MRT",
                "HUME AVE",
                "JLN BATU NILAM"
            ]
        }
    },
    1771: {
        front: {
            renderType: "standardService",
            serviceNumber: "177",
            destination: "BUKIT PANJANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "BUKIT PANJANG",
                    image: "mrt"
                }, // incomplete
                "MINDEF",
                "JELEBU RD",
            ]
        }
    },
    1772: {
        front: {
            renderType: "standardService",
            serviceNumber: "177",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "177",
                    top: "BUKIT BATOK",
                    image: "mrt"
                }, // incomplete
                "MINDEF",
                "JELEBU RD",
                "HILLVIEW AVE"
            ]
        }
    },
    1831: {
        front: {
            renderType: "standardService",
            serviceNumber: "183",
            destination: "SCIENCE PARK RD",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "SCIENCE PARK RD"
                }, // check
                "TOH GUAN RD EAST",
                "CLEMENTI MRT",
                "CLEMENTI RD",
                "PASIR PANJANG RD"
            ]
        }
    },
    1832: {
        front: {
            renderType: "standardService",
            serviceNumber: "183",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "183",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "CLEMENTI MRT",
                "TOH GUAN RD EAST"
            ]
        }
    },
    1891: {
        front: {
            renderType: "standardService",
            serviceNumber: "189",
            destination: "CLEMENTI AVE 1",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "CLEMENTI AVE 1"
                },
                "BT BATOK EAST AVE 6",
            ]
        }
    },
    1892: {
        front: {
            renderType: "standardService",
            serviceNumber: "189",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "189",
                    top: "BUKIT BATOK",
                    image: "mrt"
                },
                "BT BATOK EAST AVE 6",
            ]
        }
    },
    2821: {
        front: {
            renderType: "standardService",
            serviceNumber: "282",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "CLEMENTI",
                    image: "mrt"
                },
                "CLEMENTI AVE 5",
                "CLEMENTI AVE 2",
                "CLEMENTI WEST ST 2",
            ]
        }
    },
    2841: {
        front: {
            renderType: "standardService",
            serviceNumber: "284",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "284",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "284",
                    top: "CLEMENTI",
                    image: "mrt"
                }, // check
                "CLEMENTI AVE 4",
            ]
        }
    },
    2851: {
        front: {
            renderType: "standardService",
            serviceNumber: "285",
            destination: "CLEMENTI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "282",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "285",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "285",
                    top: "CLEMENTI",
                    image: "mrt"
                }, // check
                "CLEMENTI AVE 2",
                "WEST COAST RD",
                "PANDAN LOOP"
            ]
        }
    },
    3331: {
        front: {
            renderType: "standardService",
            serviceNumber: "333",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "333",
                    top: "JURONG EAST",
                    image: "mrt"
                },
                "TOH GUAN RD",
                "JURONG EAST AVE 1",
                "JURONG EAST ST 32"
            ]
        }
    },
    3341: {
        front: {
            renderType: "standardService",
            serviceNumber: "334",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "334",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "JURONG WEST ST 42",
            ]
        }
    },
    3351: {
        front: {
            renderType: "standardService",
            serviceNumber: "335",
            destination: "JURONG EAST",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "heart"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "logo"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "335",
                    top: "JURONG EAST",
                    image: "mrt"
                }, // incomplete
                "BOON LAY WAY",
            ]
        }
    },
    9411: {
        front: {
            renderType: "standardService",
            serviceNumber: "941",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "L"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "L"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "941",
                    top: "BUKIT BATOK",
                    image: "L"
                },
                "BT BATOK WEST AVE 3",
                "BT BATOK WEST AVE 6",
                "BT BATOK ST 11",
                "BT BATOK WEST AVE 8",
            ]
        }
    },
    9451: {
        front: {
            renderType: "standardService",
            serviceNumber: "945",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "L"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "L"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "945",
                    top: "BUKIT BATOK",
                    image: "L"
                },
                "BT BATOK EAST AVE 3",
                "BT BATOK ST 52",
                "BT GOMBAK MRT",
                "BT BATOK WEST AVE 7",
                "BT BATOK ST 34"
            ]
        }
    },
    9471: {
        front: {
            renderType: "standardService",
            serviceNumber: "947",
            destination: "BUKIT BATOK",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "L"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "gas"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "947",
                    top: "BUKIT BATOK",
                    image: "gas"
                }, // incomplete
                "BT BATOK WEST AVE 2",
                "BT BATOK WEST AVE 4"
            ]
        }
    },
    9741: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: "JOO KOON",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "L"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "gas"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "JOO KOON",
                    image: "gas"
                },
                "CHOA CHU KANG WAY",
                "CHOA CHU KANG MRT",
                "JLN BOON LAY",
                "JURONG WEST ST 63",
                "UPP JURONG RD"
            ]
        }
    },
    9742: {
        front: {
            renderType: "standardService",
            serviceNumber: "974",
            destination: "BUKIT PANJANG",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Happy Kindness Day!",
                    topFont: "Hanover-7:3",
                    bottom: "24 May 2019",
                    bottomFont: "Hanover-7:3",
                    image: "L"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "Welcome Aboard",
                    topFont: "Mobitec-7:5:1",
                    bottom: "Tower Transit!",
                    bottomFont: "Mobitec-7:5:1",
                    image: "gas"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "974",
                    top: "BUKIT PANJANG",
                    image: "gas"
                },
                "UPP JURONG RD",
                "JURONG WEST ST 63",
                "JLN BOON LAY",
                "CHOA CHU KANG MRT",
                "CHOA CHU KANG WAY"
            ]
        }
    },
    9743: {
        front: {
            renderType: "destScroll",
            serviceNumber: "974A",
            top: "ENDS AT",
            topFont: "Mobitec-7:7",
            bottom: "LOT 1 SHOPPERS MALL",
            bottomFont: "Hanover-6:3",
            image: "gas"
        }
    }
}

EDSImages. GASG = {
	blank:[[]],
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
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
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
