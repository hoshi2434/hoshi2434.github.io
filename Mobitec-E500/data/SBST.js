EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        destination: {
            align: "left,bottom",
            margin: {
                left: 1
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                left: 1,
                top: 1
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destination.text"
    },
    SBST102: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "SBST102",
            spacing: 1
        },
        destination: {
            align: "left,bottom",
            margin: {
                left: 1
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "left,top",
            margin: {
                left: 1,
                top: 1
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destination.text"
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
    expressService: {
        logo: {
            align: "left,centre-y",
            image: "express"
        },
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        text: "'EXPRESS '+$serviceNumber"
    }
}

EDSData.SBST = {
    41: {
        front: {
            renderType: "standardService",
            serviceNumber: "4",
            destination: {
                text: "TAMPINES INT-CHANGI NTH WAY",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES AVE 7",
                "FLORA RD",
                "CHANGI NORTH WAY",
                "FLORA RD",
                "TAMPINES AVE 7"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    71: {
        front: {
            renderType: "standardService",
            serviceNumber: "7",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "CHANGI RD",
                "GUILLEMARD RD",
                "NORTH BRIDGE RD",
                "OCHARD BOULEVARD",
                "HOLLAND RD",
                "ULU PANDAN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    72: {
        front: {
            renderType: "standardService",
            serviceNumber: "7",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ULU PANDAN RD",
                "HOLLAND RD",
                "ORCHARD RD",
                "VICTORIA ST",
                "GUILLEMARD RD",
                "SIMS AVE EAST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    108: {
        front: {
            renderType: "expressService",
            serviceNumber: "10e"
        }
    },
    109: {
        front: {
            renderType: "expressService",
            serviceNumber: "10e"
        }
    },
    111: {
        front: {
            renderType: "standardService",
            serviceNumber: "11",
            destination: {
                text: "LOR 1 GEYLANG TER-RHU CROSS",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "SIMS WAY",
                "STADIUM CRESCENT",
                "RHU CROSS",
                "STADIUM WALK",
                "SIMS WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    148: {
        front: {
            renderType: "expressService",
            serviceNumber: "14e"
        }
    },
    149: {
        front: {
            renderType: "expressService",
            serviceNumber: "14e"
        }
    },
    221: {
        front: {
            renderType: "standardService",
            serviceNumber: "22",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "SERANGOON CENTRAL",
                "UPPER PAYA LEBAR RD",
                "UBI AVE 2",
                "BEDOK RESERVOIR RD",
                "TAMPINES AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    222: {
        front: {
            renderType: "standardService",
            serviceNumber: "22",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 4",
                "BEDOK RESERVOIR RD",
                "UBI AVE 2",
                "UPPER PAYA LEBAR RD",
                "SERANGOON CENTRAL",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    283: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT28",
            destination: {
                text: "> CLEMENTI AVE 4",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "EU TONG SEN ST",
                "C'WEALTH AVE WEST",
                "CLEMENTI AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    284: {
        front: {
            renderType: "standardService",
            serviceNumber: "CT28",
            destination: {
                text: "> KAMPONG BAHRU TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "CLEMENTI AVE 4",
                "C'WEALTH AVE WEST",
                "NEW BRIDGE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    302: {
        front: {
            renderType: "standardService",
            serviceNumber: "30",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "CORPORATION DR",
                "WEST COAST RD",
                "PASIR PANJANG RD",
                "TELOK BLANGAH RD",
                "KEPPEL RD",
                "OLD AIRPORT RD",
                "SIMS AVE EAST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    471: {
        front: {
            renderType: "standardService",
            serviceNumber: "47",
            destination: {
                text: "CHANGI BIZ PK-AMBER RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BEDOK SOUTH RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    501: {
        front: {
            renderType: "standardService",
            serviceNumber: "50",
            destination: {
                text: "> PUNGGOL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "ANG MO KIO AVE 5",
                "YIO CHU KANG RD",
                "SENGKANG WEST AVE",
                "SENGKANG EAST WAY",
                "PUNGGOL DR"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    502: {
        front: {
            renderType: "standardService",
            serviceNumber: "50",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PUNGGOL DR",
                "SENGKANG EAST WAY",
                "SENGKANG WEST AVE",
                "YIO CHU KANG RD",
                "ANG MO KIO AVE 5",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    531: {
        front: {
            renderType: "standardService",
            serviceNumber: "53",
            destination: {
                text: "> CHANGI AIRPORT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BISHAN RD",
                "SERANGOOON CENTRAL",
                "LORONG AH SOO",
                "HOUGANG AVE 1",
                "PASIR RIS DR 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    532: {
        front: {
            renderType: "standardService",
            serviceNumber: "53",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PASIR RIS DR 1",
                "HOUGANG AVE 1",
                "LORONG AH SOO",
                "SERANGOOON CENTRAL",
                "BISHAN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    534: {
        front: {
            renderType: "standardService",
            serviceNumber: "53M",
            destination: {
                text: "HOUGANG AVE 1-S'GOON CTRL",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "HOUGANG AVE 1",
                "LORONG AH SOO",
                "SERANGOOON CENTRAL",
                "LORONG AH SOO",
                "HOUGANG AVE 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    561: {
        front: {
            renderType: "standardService",
            serviceNumber: "56",
            destination: {
                text: "BISHAN INT-MARINA CTR TER",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BISHAN ST 13",
                "LOR 6 TOA PAYOH",
                "THOMSON RD",
                "BUKIT TIMAH RD",
                "MIDDLE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    591: {
        front: {
            renderType: "standardService",
            serviceNumber: "59",
            destination: {
                text: "> CHANGI VILLAGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOR 1 TOA PAYOH",
                "KAKI BUKIT AVE 1",
                "BEDOK RESERVOIR RD",
                "TAMPINES AVE 2",
                "LOYANG AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    592: {
        front: {
            renderType: "standardService",
            serviceNumber: "59",
            destination: {
                text: "> BISHAN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOYANG AVE",
                "TAMPINES AVE 2",
                "BEDOK RESERVOIR RD",
                "KAKI BUKIT AVE 1",
                "LOR 1 TOA PAYOH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    641: {
        front: {
            renderType: "standardService",
            serviceNumber: "64",
            destination: {
                text: "> MEI LING ST",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ALJUNIED RD",
                "BENDEMEER RD",
                "JALAN BESAR",
                "CLEMANCEAU AVE",
                "TIONG BAHRU RD",
                "STIRLING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    642: {
        front: {
            renderType: "standardService",
            serviceNumber: "64",
            destination: {
                text: "> SIMS PLACE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ALEXANDRA RD",
                "TIONG BAHRU RD",
                "CLEMANCEAU AVE",
                "SELEGIE RD",
                "SERANGOON RD",
                "ALJUNIED RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    651: {
        front: {
            renderType: "standardService",
            serviceNumber: "65",
            destination: {
                text: "> HARBOURFRONT INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEDOK RESERVOIR RD",
                "UBI AVE 2",
                "MACPHERSON RD",
                "BENDEMEER RD",
                "JALAN BESAR",
                "ORCHARD BOULEVARD",
                "LOWER DELTA RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    652: {
        front: {
            renderType: "standardService",
            serviceNumber: "65",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOWER DELTA RD",
                "ORCHARD RD",
                "SELEGIE RD",
                "SERANGOON RD",
                "MACPHERSON RD",
                "UBI AVE 2",
                "BEDOK RESERVOIR RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    711: {
        front: {
            renderType: "standardService",
            serviceNumber: "71",
            destination: {
                text: "YCK INT-BISHAN ST 11",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "ANG MO KIO AVE 4",
                "ANG MO KIO AVE 1",
                "BISHAN RD",
                "BRADDELL RD",
                "BISHAN RD",
                "ANG MO KIO AVE 1",
                "ANG MO KIO AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    721: {
        front: {
            renderType: "standardService",
            serviceNumber: "72",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 5",
                "HOUGANG AVE 9",
                "HOUGANG CENTRAL",
                "TAMPINES RD",
                "TAMPINES AVE 10",
                "TAMPINES AVE 9"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    722: {
        front: {
            renderType: "standardService",
            serviceNumber: "72",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 9",
                "TAMPINES AVE 10",
                "TAMPINES RD",
                "HOUGANG CENTRAL",
                "HOUGANG AVE 9",
                "ANG MO KIO AVE 5"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    761: {
        front: {
            renderType: "standardService",
            serviceNumber: "76",
            destination: {
                text: "> EUNOS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 4",
                "ANG MO KIO AVE 3",
                "YIO CHU KANG RD",
                "UPPER PAYA LEBAR RD",
                "PAYA LEBAR RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    762: {
        front: {
            renderType: "standardService",
            serviceNumber: "76",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PAYA LEBAR RD",
                "UPPER PAYA LEBAR RD",
                "YIO CHU KANG RD",
                "ANG MO KIO AVE 3",
                "ANG MO KIO AVE 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    811: {
        front: {
            renderType: "standardService",
            serviceNumber: "81",
            destination: {
                text: "TAMPINES INT-S'GOON CTRL",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES AVE 7",
                "PASIR RIS DR 1",
                "TAMPINES RD",
                "UPPER SERANGOON RD",
                "TAMPINES RD",
                "PASIR RIS DR 1",
                "TAMPINES AVE 7"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    871: {
        front: {
            renderType: "standardService",
            serviceNumber: "87",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "COMPASSVALE RD",
                "HOUGANG AVE 10, 5, 7, 3",
                "EUNOS LINK",
                "KAKI BUKIT AVE 1",
                "BEDOK NTH RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    881: {
        front: {
            renderType: "standardService",
            serviceNumber: "88",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PASIR RIS DR 3",
                "PUNGGOL RD",
                "HOUGANG AVE 8",
                "ANG MO KIO AVE 5",
                "ANG MO KIO AVE 3",
                "BISHAN ST 22",
                "LOR 4 TOA PAYOH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    882: {
        front: {
            renderType: "standardService",
            serviceNumber: "88",
            destination: {
                text: "> PASIR RIS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    891: {
        front: {
            renderType: "standardService",
            serviceNumber: "89",
            destination: {
                text: "> CHANGI AIRFREIGHT CTR",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HOUGANG AVE 10",
                "COMPASSVIEW RD",
                "PASIR RIS DR 1",
                "LOYANG AVE",
                "AIRLINE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    898: {
        front: {
            renderType: "expressService",
            serviceNumber: "89e"
        }
    },
    899: {
        front: {
            renderType: "expressService",
            serviceNumber: "89e"
        }
    },
    911: {
        front: {
            renderType: "standardService",
            serviceNumber: "91",
            destination: {
                text: "BUONA V TER-AYER RAJAH CRES",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "COMMONWEALTH AVE",
                "NTH BUONA VISTA RD",
                "AYER RAJAH AVE",
                "AYER RAJAH CRES",
                "AYER RAJAH AVE",
                "NTH BUONA VISTA RD",
                "COMMONWEALTH AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    991: {
        front: {
            renderType: "standardService",
            serviceNumber: "99",
            destination: {
                text: "> JOO KOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG EAST AVE 1",
                "JURONG WEST AVE 1",
                "JURONG WEST AVE 4",
                "JURONG WEST ST 91",
                "UPP JURONG RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    992: {
        front: {
            renderType: "standardService",
            serviceNumber: "99",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "UPP JURONG RD",
                "JURONG WEST ST 91",
                "JURONG WEST AVE 4",
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1011: {
        front: {
            renderType: "standardService",
            serviceNumber: "101",
            destination: {
                text: "S'GOON INT-BUANGKOK LK",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "UPPER SERANGOON RD",
                "HOUGANG CENTRAL",
                "HOUGANG AVE 8",
                "HOUGANG ST 51",
                "BUANGKOK LINK",
                "HOUGANG ST 51",
                "HOUGANG AVE 8",
                "HOUGANG CENTRAL",
                "UPPER SERANGOON RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1021: {
        front: {
            renderType: "SBST102",
            serviceNumber: "102",
            destination: {
                text: "H'GANG INT-SELETAR A'SPACE",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "UPPER SERANGOON RD",
                "BUANGKOK DR",
                "COMPASSVALE DR",
                "SENGKANG EAST WAY",
                "SENGKANG WEST WAY",
                "SELETAR A'SPACE DR"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1031: {
        front: {
            renderType: "standardService",
            serviceNumber: "103",
            destination: {
                text: "> YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YIO CHU KANG RD",
                "JLN KAYU",
                "SELETAR AEROSPACE DR",
                "WEST CAMP RD",
                "YISHUN CENTRAL"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1032: {
        front: {
            renderType: "standardService",
            serviceNumber: "103",
            destination: {
                text: "> SERANGOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN CENTRAL",
                "WEST CAMP RD",
                "SELETAR AEROSPACE DR",
                "JLN KAYU",
                "YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1071: {
        front: {
            renderType: "standardService",
            serviceNumber: "107",
            destination: {
                text: "> SHENTON WAY TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HOUGANG AVE 10",
                "UPPER SERANGOON RD",
                "KALLANG BAHRU",
                "LAVENDER ST",
                "BEACH RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1072: {
        front: {
            renderType: "standardService",
            serviceNumber: "107",
            destination: {
                text: "> HOUGANG CENTRAL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEACH RD",
                "LAVENDER ST",
                "KALLANG BAHRU",
                "UPPER SERANGOON RD",
                "HOUGANG AVE 10"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1091: {
        front: {
            renderType: "standardService",
            serviceNumber: "109",
            destination: {
                text: "> CHANGI VILLAGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YIO CHU KANG RD",
                "HOUGANG AVE 9",
                "SENGKANG EAST RD",
                "PASIR RIS DR 1",
                "LOYANG AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1092: {
        front: {
            renderType: "standardService",
            serviceNumber: "109",
            destination: {
                text: "> SERANGOON INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOYANG AVE",
                "PASIR RIS DR 1",
                "SENGKANG EAST RD",
                "HOUGANG AVE 9",
                "YIO CHU KANG RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1111: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    1112: {
        front: {
            renderType: "standardService",
            serviceNumber: "111",
            destination: {
                text: "GHIM MOH TER-MARINA CTR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "COMMONWEALTH AVE",
                "TANGLIN RD",
                "ORCHARD RD",
                "BRAS BASAH RD",
                "STAMFORD RD",
                "OCHARD BOULEVARD",
                "TANGLIN RD",
                "COMMONWEALTH AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1131: {
        front: {
            renderType: "standardService",
            serviceNumber: "113",
            destination: {
                text: "HOUGANG-UPP P. LEBAR RD",
                font: "Mobitec-6:5"
            },
            scrolls: [
                    "HOUGANG AVE 8",
                    "HOUGANG AVE 10",
                    "UPP SERANGOON RD",
                    "HOUGANG ST 21",
                    "LORONG AH SOO",
                    "HOUGANG ST 21",
                    "UPP SERANGOON RD",
                    "HOUGANG AVE 10",
                    "HOUGANG AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1161: {
        front: {
            renderType: "standardService",
            serviceNumber: "116",
            destination: {
                text: "HOUGANG INT-S'GOON CTRL",
                font: "Mobitec-6:5"
            },
            scrolls: [
                "HOUGANG AVE 4",
                "IS THIS COOLAIR",
                "WELCOME ABOARD SBST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1171: {
        front: {
            renderType: "standardService",
            serviceNumber: "117",
            destination: {
                text: "> SEMBAWANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                    "PUNGGOL WAY",
                    "SELETAR A'SPACE DR",
                    "YISHUN AVE 2",
                    "SEMBAWANG WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1201: {
        front: {
            renderType: "standardService",
            serviceNumber: "120",
            destination: {
                text: "KG BAHRU TER-TK BLANGAH",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JALAN BUKIT MERAH",
                "TELOK BLANGAH HTS",
                "TELOK BLANGAH RD",
                "ALEXANDRA RD",
                "TIONG BAHRU RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1211: {
        front: {
            renderType: "standardService",
            serviceNumber: "121",
            destination: {
                text: "KG BAHRU TER-TK BLANGAH",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "GANGES AVE",
                "TIONG BAHRU RD",
                "KIM TIAN RD",
                "LOWER DELTA RD",
                "TELOK BLANGAH RISE",
                "LOWER DELTA RD",
                "KIM TIAN RD",
                "TIONG BAHRU RD",
                "GANGES AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1221: {
        front: {
            renderType: "standardService",
            serviceNumber: "122",
            destination: {
                text: "KG BAHRU TER-C'WEALTH DR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TIONG BAHRU RD",
                "",
                "",
                "",
                "",
                ""
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1231: {
        front: {
            renderType: "standardService",
            serviceNumber: "123",
            destination: {
                text: "> SENTOSA",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "QUEENSWAY",
                "HOLLAND RD",
                "ORCHARD RD",
                "HAVELOCK RD",
                "TIONG BAHRU RD",
                "LOWER DELTA RD",
                "BUKIT PURMEI AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1232: {
        front: {
            renderType: "standardService",
            serviceNumber: "123",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BUKIT PURMEI AVE",
                "LOWER DELTA RD",
                "TIONG BAHRU RD",
                "HAVELOCK RD",
                "ORCHARD BLVD",
                "HOLLAND RD",
                "QUEENSWAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1233: {
        front: {
            renderType: "standardService",
            serviceNumber: "123M",
            destination: {
                text: "HBF INT-TIONG BAHRU RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BUKIT PURMEI AVE",
                "LOWER DELTA RD",
                "TIONG BAHRU RD",
                "LOWER DELTA RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1241: {
        front: {
            renderType: "standardService",
            serviceNumber: "124",
            destination: {
                text: "> HARBOURFRONT INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TELOK BLANGAH HTS",
                "TELOK BLANGAH WAY",
                "EU TONG SEN ST",
                "ORCHARD TURN",
                "MOULMEIN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1242: {
        front: {
            renderType: "standardService",
            serviceNumber: "124",
            destination: {
                text: "> ST MICHAEL'S TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "NEW BRIDGE RD",
                "KAMPONG BAHRU RD",
                "TELOK BLANGAH HTS",
                "MOULMEIN RD",
                "ORCHARD RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1271: {
        front: {
            renderType: "standardService",
            serviceNumber: "127",
            destination: {
                text: "TAMP INT-TAMP IND AVE 5",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 9,10",
                "TAMPINES IND AVE 5",
                "TAMPINES RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1291: {
        front: {
            renderType: "standardService",
            serviceNumber: "129",
            destination: {
                text: "> ST MICHAEL'S TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 1",
                "BRADDELL RD",
                "LOR 1 TOA PAYOH",
                "BALESTIER RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1292: {
        front: {
            renderType: "standardService",
            serviceNumber: "129",
            destination: {
                text: "> TAMP CONCOURSE INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BALESTIER RD",
                "LOR 1 TOA PAYOH",
                "BRADDELL RD",
                "TAMPINES AVE 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1311: {
        front: {
            renderType: "standardService",
            serviceNumber: "131",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "THOMSON RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1312: {
        front: {
            renderType: "standardService",
            serviceNumber: "131",
            destination: {
                text: "> ST MICHAEL'S TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BUKIT PURMEI AVE",
                "TELOK BLANGAH RD",
                "CECIL ST",
                "STAMFORD RD",
                "THOMSON RD",
                "BALESTIER RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1351: {
        front: {
            renderType: "standardService",
            serviceNumber: "135",
            destination: {
                text: "> SIGLAP RD",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "SERANGOON AVE 2",
                "UPP ALJUNIED RD",
                "TANJONG KATONG RD",
                "MARINA PARADE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1352: {
        front: {
            renderType: "standardService",
            serviceNumber: "135",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "MARINA PARADE RD",
                "TANJONG KATONG RD",
                "UPP ALJUNIED RD",
                "SERANGOON AVE 2",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1391: {
        front: {
            renderType: "standardService",
            serviceNumber: "139",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JALAN RAJAH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1473: {
        front: {
            renderType: "expressService",
            serviceNumber: "147e"
        }
    },
    1511: {
        front: {
            renderType: "standardService",
            serviceNumber: "151",
            destination: {
                text: "> KENT RIDGE TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HOUGANG AVE 3",
                "MACPHERSON RD",
                "JALAN TOA PAYOH",
                "BUKIT TIMAH RD",
                "CLEMENTI RD",
                "KENT RIDGE CRES"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1512: {
        front: {
            renderType: "standardService",
            serviceNumber: "151",
            destination: {
                text: "> HOUGANG CENTRAL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "KENT RIDGE CRES",
                "CLEMENTI RD",
                "DUNEARN RD",
                "JALAN TOA PAYOH",
                "MACPHERSON RD",
                "HOUGANG AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1518: {
        front: {
            renderType: "expressService",
            serviceNumber: "151e"
        }
    },
    1519: {
        front: {
            renderType: "expressService",
            serviceNumber: "151e"
        }
    },
    1541: {
        front: {
            renderType: "standardService",
            serviceNumber: "154",
            destination: {
                text: "> EUNOS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YUAN CHING RD",
                "AYE",
                "COMMONWEALTH AVE WEST",
                "CLEMENTI RD",
                "DUNEARN RD",
                "JALAN TOA PAYOH",
                "PAYA LEBAR RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1542: {
        front: {
            renderType: "standardService",
            serviceNumber: "154",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PAYA LEBAR RD",
                "JALAN TOA PAYOH",
                "BUKIT TIMAH RD",
                "CLEMENTI RD",
                "COMMONWEALTH AVE WEST",
                "AYE",
                "YUAN CHING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1561: {
        front: {
            renderType: "standardService",
            serviceNumber: "156",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SENGKANG EAST RD",
                "BUANGKOK GREEN",
                "YIO CHU KANG RD",
                "BISHAN RD",
                "THOMSON RD",
                "DUNEARN RD",
                "SIXTH AVE",
                "ULU PANDAN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1562: {
        front: {
            renderType: "standardService",
            serviceNumber: "156",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ULU PANDAN RD",
                "SIXTH AVE",
                "DUNEARN RD",
                "THOMSON RD",
                "BISHAN RD",
                "YIO CHU KANG RD",
                "BUANGKOK GREEN",
                "SENGKANG EAST RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1571: {
        front: {
            renderType: "standardService",
            serviceNumber: "157",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BRADDELL RD",
                "LORNIE RD",
                "BUKIT TIMAH RD",
                "JALAN JURONG KECHIL",
                "BUKIT BATOK EAST AVE 3",
                "JURONG EAST AVE 3",
                "JURONG WEST AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1572: {
        front: {
            renderType: "standardService",
            serviceNumber: "157",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST AVE 1",
                "JURONG EAST AVE 1",
                "BUKIT BATOK EAST AVE 3",
                "JALAN JURONG KECHIL",
                "DUNEARN RD",
                "LORNIE RD",
                "BRADDELL RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1601: {
        front: {
            renderType: "standardService",
            serviceNumber: "160",
            destination: {
                text: "> JB SENTRAL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG TOWN HALL RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1611: {
        front: {
            renderType: "standardService",
            serviceNumber: "161",
            destination: {
                text: "> WOODLANDS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HOUGANG AVE 8",
                "HOUGANG AVE 4",
                "SENGKANG EAST RD",
                "SENGKANG EAST WAY",
                "WOODLANDS AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1612: {
        front: {
            renderType: "standardService",
            serviceNumber: "161",
            destination: {
                text: "> HOUGANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS AVE 2",
                "SENGKANG EAST WAY",
                "SENGKANG EAST RD",
                "HOUGANG AVE 4",
                "HOUGANG AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1621: {
        front: {
            renderType: "standardService",
            serviceNumber: "162",
            destination: {
                text: "> SHENTON WAY TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 8",
                "ANG MO KIO AVE 6",
                "BISHAN ST 22",
                "SIN MING AVE",
                "UPPER THOMSON RD",
                "THOMSON RD",
                "ORCHARD RD",
                "BRAS BASAH RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1622: {
        front: {
            renderType: "standardService",
            serviceNumber: "162",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "STAMFORD RD",
                "ORCHARD TURN",
                "THOMSON RD",
                "UPPER THOMSON RD",
                "SIN MING AVE",
                "BISHAN ST 22",
                "ANG MO KIO AVE 6",
                "ANG MO KIO AVE 8"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1623: {
        front: {
            renderType: "standardService",
            serviceNumber: "162M",
            destination: {
                text: "YCK INT-MARINA CTR",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "ANG MO KIO AVE 6",
                "BISHAN ST 22",
                "SIN MING AVE",
                "THOMSON RD",
                "ORCHARD RD",
                "TEMASEK AVE",
                "ORCHARD TURN",
                "THOMSON RD",
                "SIN MING AVE",
                "BISHAN ST 22",
                "ANG MO KIO AVE 6"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1631: {
        front: {
            renderType: "standardService",
            serviceNumber: "163",
            destination: {
                text: "> TOA PAYOH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SENGKANG EAST AVE",
                "SENGKANG WEST AVE",
                "YIO CHU KANG RD",
                "UPPER THOMSON RD",
                "BRADDELL RD",
                "LOR 6 TOA PAYOH",
                "LOR 4 TOA PAYOH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1632: {
        front: {
            renderType: "standardService",
            serviceNumber: "163",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "LOR 4 TOA PAYOH",
                "LOR 6 TOA PAYOH",
                "BRADDELL RD",
                "UPPER THOMSON RD",
                "YIO CHU KANG RD",
                "SENGKANG WEST AVE",
                "SENGKANG EAST AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1661: {
        front: {
            renderType: "standardService",
            serviceNumber: "166",
            destination: {
                text: "> CLEMENTI INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 3",
                "UPP THOMSON RD",
                "THOMSON RD",
                "NEW BRIDGE RD",
                "KAMPONG BAHRU RD",
                "TELOK BLANGAH RD",
                "ALEXANDRA RD",
                "C'WEALTH AVE WEST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1662: {
        front: {
            renderType: "standardService",
            serviceNumber: "166",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "C'WEALTH AVE WEST",
                "ALEXANDRA RD",
                "TELOK BLANGAH RD",
                "KAMPONG BAHRU RD",
                "EU TONG SEN ST",
                "THOMSON RD",
                "UPP THOMSON RD",
                "ANG MO KIO AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1681: {
        front: {
            renderType: "standardService",
            serviceNumber: "168",
            destination: {
                text: "> WOODLANDS INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BEDOK NORTH AVE 3",
                "TAMPINES AVE 4",
                "TAMPINES AVE 10",
                "JALAN KAYU",
                "WOODLANDS AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1682: {
        front: {
            renderType: "standardService",
            serviceNumber: "168",
            destination: {
                text: "> BEDOK INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS AVE 2",
                "JALAN KAYU",
                "TAMPINES AVE 10",
                "TAMPINES AVE 4",
                "BEDOK NORTH AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1701: {
        front: {
            renderType: "standardService",
            serviceNumber: "170",
            destination: {
                text: "> LARKIN TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "BUKIT TIMAH RD",
                "UPPER BUKIT TIMAH RD",
                "WOODLANDS RD",
                "WOODLANDS CTR RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1702: {
        front: {
            renderType: "standardService",
            serviceNumber: "170",
            destination: {
                text: "> QUEEN ST TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS CTR RD",
                "WOODLANDS RD",
                "UPP BUKIT TIMAH RD",
                "DUNEARN RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1704: {
        front: {
            renderType: "standardService",
            serviceNumber: "170X",
            destination: {
                text: "> JB SENTRAL",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS RD",
                "WOODLANDS CROSSING",
                "JB SENTRAL"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1705: {
        front: {
            renderType: "standardService",
            serviceNumber: "170X",
            destination: {
                text: "> KRANJI STN",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WOODLANDS RD",
                "WOODLANDS CROSSING",
                "JB SENTRAL"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1741: {
        front: {
            renderType: "standardService",
            serviceNumber: "174",
            destination: {
                text: "> KAMPONG BAHRU TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG ROAD",
                "BUKIT BATOK E. AVE 3&6",
                "JALAN JURONG KECHIL",
                "DUNEARN RD",
                "FARRER RD",
                "HOLLAND RD",
                "ORCHARD RD",
                "NORTH&SOUTH BRIDGE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1742: {
        front: {
            renderType: "standardService",
            serviceNumber: "174",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "EU TONG SEN ST",
                "ORCHARD BOULEVARD",
                "HOLLAND RD",
                "FARRER RD",
                "BUKIT TIMAH RD",
                "JALAN JURONG KECHIL",
                "BT. BATOK EAST AVE 6&3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1748: {
        front: {
            renderType: "expressService",
            serviceNumber: "174e"
        }
    },
    1749: {
        front: {
            renderType: "expressService",
            serviceNumber: "174e"
        }
    },
    1751: {
        front: {
            renderType: "standardService",
            serviceNumber: "175",
            destination: {
                text: "> LOR 1 GEYLANG TER",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "WEST COAST HIGHWAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    1968: {
        front: {
            renderType: "expressService",
            serviceNumber: "196e"
        }
    },
    1969: {
        front: {
            renderType: "expressService",
            serviceNumber: "196e"
        }
    },
    2011: {
        front: {
            renderType: "standardService",
            serviceNumber: "201",
            destination: {
                text: "KENT RIDGE - PANDAN GDNS",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "WEST COAST RD",
                "C'WEALTH AVE WEST",
                "TEBAN GARDENS RD",
                "PANDAN GARDENS",
                "C'WEALTH AVE WEST",
                "WEST COAST RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2222: {
        front: {
            renderType: "logo",
            image: "logo",
            text: "SBS TRANSIT LOGO"
        }
    },
    2401: {
        front: {
            renderType: "standardService",
            serviceNumber: "240",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JALAN AHMAD IBRAHIM",
                "KANG CHING RD",
                "YUAN CHING RD",
                "BOON LAY PLACE",
                "BOON LAY WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2411: {
        front: {
            renderType: "standardService",
            serviceNumber: "241",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST ST 63",
                "PIONEER RD NTH",
                "JURONG WEST ST 91"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2421: {
        front: {
            renderType: "standardService",
            serviceNumber: "242",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST CENTRAL 1",
                "JALAN BOON LAY",
                "JURONG WEST AVE 4",
                "JURONG WEST ST 72",
                "JURONG WEST AVE 5",
                "JURONG WEST AVE 4",
                "JALAN BOON LAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2431: {
        front: {
            renderType: "standardService",
            serviceNumber: "243W",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST ST 62",
                "JURONG WEST AVE 4",
                "JURONG WEST AVE 5",
                "JURONG WEST ST 81",
                "JURONG WEST ST 75",
                "JURONG WEST ST 64"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2432: {
        front: {
            renderType: "standardService",
            serviceNumber: "243G",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JURONG WEST ST 64",
                "JURONG WEST ST 75",
                "JURONG WEST ST 81",
                "JURONG WEST AVE 5",
                "JURONG WEST AVE 4",
                "JURONG WEST ST 62"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2471: {
        front: {
            renderType: "standardService",
            serviceNumber: "247",
            destination: {
                text: "TUAS TER-TUAS BAY LINK",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "TUAS AVE 7",
                "TUAS CRES",
                "TUAS STH AVE 5&4&7",
                "TUAS STH AVE 3&9&8",
                "TUAS LINK 4"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2481: {
        front: {
            renderType: "standardService",
            serviceNumber: "248",
            destination: {
                text: "TUAS TER-TUAS STH AVE 14",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "PIONEER RD",
                "TUAS AVE 20",
                "TUAS STH AVE 5",
                "TUAS STH AVE 9",
                "TUAS STH AVE 10"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2491: {
        front: {
            renderType: "standardService",
            serviceNumber: "249",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JALAN BOON LAY",
                "JURONG PIER RD",
                "TANJONG KLING RD",
                "SHIPYARD RD",
                "JALAN SAMULUN",
                "SHIPYARD RD",
                "TANJONG KLING RD",
                "JALAN BOON LAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2511: {
        front: {
            renderType: "standardService",
            serviceNumber: "251",
            destination: {
                text: "BOON LAY INT-SHIPYARD RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BOON LAY WAY",
                "PIONEER RD NTH",
                "SHIPYARD RD",
                "PIONEER RD NTH",
                "BOON LAY WAY"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2521: {
        front: {
            renderType: "standardService",
            serviceNumber: "252",
            destination: {
                text: "> BOON LAY INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ENTERPRISE RD",
                "INTERNATIONAL RD",
                "JOO KOON CIRCLE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2531: {
        front: {
            renderType: "standardService",
            serviceNumber: "253",
            destination: {
                text: "JOO KOON INT-BENOI RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BENOI RD",
                "BENOI SECTOR",
                "PIONEER RD",
                "BENOI RD",
                "PIONEER RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2541: {
        front: {
            renderType: "standardService",
            serviceNumber: "254",
            destination: {
                text: "JOO KOON INT-TUAS AVE 11",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BENOI RD",
                "PIONEER RD",
                "TUAS RD",
                "TUAS BASIN LINK"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2551: {
        front: {
            renderType: "standardService",
            serviceNumber: "255",
            destination: {
                text: "JOO KOON INT-GUL CRES",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "GUL CIRCLE",
                "GUL CRES",
                "GUL AVE"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2561: {
        front: {
            renderType: "standardService",
            serviceNumber: "256",
            destination: {
                text: "BOON LAY INT-JOO KOON",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JURONG WEST ST 62",
                "PIONEER RD NTH",
                "JALAN AHMAD IBRAHIM",
                "JOO KOON CIRCLE",
                "JALAN AHMARD IBRAHIM",
                "PIONEER RD NTH",
                "JURONG WEST ST 62"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2571: {
        front: {
            renderType: "standardService",
            serviceNumber: "257",
            destination: {
                text: "JOO KOON INT-PIONEER SEC 2",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "BENOI RD",
                "GUL RD",
                "PIONEER SECTOR 2",
                "PIONEER SECTOR 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2581: {
        front: {
            renderType: "standardService",
            serviceNumber: "258",
            destination: {
                text: "JOO KOON INT-JUR W. ST 64",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "PIONEER RD NTH",
                "JURONG W. ST 61&81&75",
                "JALAN AHMAD IBRAHIM"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2611: {
        front: {
            renderType: "standardService",
            serviceNumber: "261",
            destination: {
                text: "> ANG MO KIO INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 3",
                "ANG MO KIO AVE 10",
                "ANG MO KIO IND PK 1",
                "ANG MO KIO AVE 10",
                "ANG MO KIO AVE 3"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2721: {
        front: {
            renderType: "standardService",
            serviceNumber: "272",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HENDERSON RD",
                "TELOK BLANGAH WAY",
                "TELOK BLANGAH RISE",
                "TELOK BLANGAH CRES",
                "HENDERSON RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2731: {
        front: {
            renderType: "standardService",
            serviceNumber: "273",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "HENDERSON RD",
                "TELOK BLANGAH HTS",
                "TELOK BLANGAH ST 32",
                "TELOK BLANGAH DRIVE",
                "HENDERSON RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2751: {
        front: {
            renderType: "standardService",
            serviceNumber: "275",
            destination: {
                text: "> BUKIT MERAH INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "JALAN BUKIT MERAH",
                "LOWER DELTA RD",
                "BUKIT PURMEI AVE",
                "LOWER DELTA RD",
                "JALAN BUKIT MERAH"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2911: {
        front: {
            renderType: "standardService",
            serviceNumber: "291",
            destination: {
                text: "> TAMPINES ST 83&33",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 5",
                "TAMPINES ST 83",
                "TAMPINES ST 81",
                "TAMPINES ST 21",
                "TAMPINES ST 32",
                "TAMPINES ST 21"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2921: {
        front: {
            renderType: "standardService",
            serviceNumber: "292",
            destination: {
                text: "> TAMPINES INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES AVE 5",
                "TAMPINES AVE 2",
                "TAMPINES ST 22",
                "TAMPINES AVE 2",
                "TAMPINES ST 11"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2931: {
        front: {
            renderType: "standardService",
            serviceNumber: "293",
            destination: {
                text: "> TAMPINES ST 71&AVE 7",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "TAMPINES ST 45&42",
                "TAMPINES AVE 4&3",
                "TAMPINES AVE 8&9"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3333: {
        front: {
            renderType: "message",
            text: "FREE SHUTTLE",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    3711: {
        front: {
            renderType: "standardService",
            serviceNumber: "371",
            destination: {
                text: "> SENGKANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "COMPASSVALE RD",
                "RIVERVALE DR",
                "RIVERVALE CRES",
                "COMPASSVALE ST"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3741: {
        front: {
            renderType: "standardService",
            serviceNumber: "374",
            destination: {
                text: "> COMPASSVALE INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "SENGKANG EAST WAY",
                "ANCHORVALE CRES",
                "COMPASSVALE RD",
                "SENGKANG EAST WAY",
                "FERNVALE RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3861: {
        front: {
            renderType: "standardService",
            serviceNumber: "386",
            destination: {
                text: "> PUNGGOL INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "PUNGGOL CENTRAL",
                "EDGEVALE PLAINS",
                "PUNGGOL EAST",
                "EDGEVALE PLAINS",
                "PUNGGOL CENTRAL"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4051: {
        front: {
            renderType: "standardService",
            serviceNumber: "405",
            destination: {
                text: "BOON LAY INT-OLD CCK RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JURONG WEST CENTRAL 1",
                "JALAN BOON LAY",
                "JALAN BAHAR",
                "OLD CHOA CHU KANG RD",
                "JALAN BAHAR",
                "JALAN BOON LAY",
                "JURONG WEST CENTRAL 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4052: {
        front: {
            renderType: "standardService",
            serviceNumber: "405M",
            destination: {
                text: "BOON LAY INT-OLD CCK RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "JURONG WEST CENTRAL 1",
                "JALAN BOON LAY",
                "JALAN BAHAR",
                "OLD CHOA CHU KANG RD",
                "JALAN BAHAR",
                "JALAN BOON LAY",
                "JURONG WEST CENTRAL 1"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4444: {
        front: {
            renderType: "message",
            text: "ON TEST",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    5011: {
        front: {
            renderType: "expressService",
            serviceNumber: "501X"
        }
    },
    5021: {
        front: {
            renderType: "expressService",
            serviceNumber: "502"
        }
    },
    5061: {
        front: {
            renderType: "expressService",
            serviceNumber: "506"
        }
    },
    5131: {
        front: {
            renderType: "expressService",
            serviceNumber: "513"
        }
    },
    5555: {
        front: {
            renderType: "message",
            text: "TRAINING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    7777: {
        front: {
            renderType: "message",
            text: "FREE BRIDGING BUS",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
    8001: {
        front: {
            renderType: "standardService",
            serviceNumber: "800",
            destination: {
                text: "YISHUN INT-SEMBAWANG RD",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN AVE 7",
                "SEMBAWANG RD",
                "YISHUN ST 71",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8041: {
        front: {
            renderType: "standardService",
            serviceNumber: "804",
            destination: {
                text: "YISHUN INT-YISHUN AVE 11",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN AVE 2",
                "YISHUN RING RD",
                "YISHUN ST 41",
                "YISHUN AVE 1",
                "YISHUN AVE 11",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8051: {
        front: {
            renderType: "standardService",
            serviceNumber: "805",
            destination: {
                text: "YISHUN INT-YISHUN AVE 1",
                font: "Mobitec-7:4"
            },
            scrolls: [
                "YISHUN AVE 2",
                "YISHUN AVE 4",
                "YISHUN AVE 1",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8111: {
        front: {
            renderType: "standardService",
            serviceNumber: "811",
            destination: {
                text: "> YISHUN AVE 5 & 1",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN AVE 9,6&7",
                "SEMBAWANG RD",
                "YISHUN AVE 5&2",
                "YISHUN RING RD",
                "YISHUN AVE 2"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8518: {
        front: {
            renderType: "expressService",
            serviceNumber: "851e"
        }
    },
    8519: {
        front: {
            renderType: "expressService",
            serviceNumber: "851e"
        }
    },
    8601: {
        front: {
            renderType: "standardService",
            serviceNumber: "860",
            destination: {
                text: "> YIO CHU KANG INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "YISHUN RING RD",
                "YISHUN AVE 3",
                "SEMBAWANG RD",
                "UPPER THOMSON RD",
                "ANG MO KIO AVE 5"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    8602: {
        front: {
            renderType: "standardService",
            serviceNumber: "860",
            destination: {
                text: "> YISHUN INT",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ANG MO KIO AVE 5",
                "UPPER THOMSON RD",
                "SEMBAWANG RD",
                "YISHUN AVE 3",
                "YISHUN RING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    9999: {
        front: {
            renderType: "message",
            text: "VER.10JUN19-DD",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
}

EDSExtras.SBST = {

}

EDSImages.SBST = {
    express: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    ]
}
