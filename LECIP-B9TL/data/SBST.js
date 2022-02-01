EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-20:12",
                    "else": "$serviceFont"
                }
            },
            spacing: 3
        },
        destination: {
            align: "left,bottom",
            margin: {
                bottom: {
                    $$cond: {
                        "$destinationFont === 'LECIP-6:3'": 3,
                        "$destinationFont === 'LECIP-6:4'": 3,
                        "$destinationFont === 'LECIP-7:5'": 2,
                        "$destinationFont === 'LECIP-10'": 0
                    }
                },
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: {
                $$cond: {
                    "$destinationFont === 'LECIP-10'": 2,
                    "else": 1
                }
            }
        },
        scroll: {
            align: "left,top",
            margin: {
                top: {
                    $$cond: {
                        "$destinationFont === 'LECIP-6:3'": 2,
                        "$destinationFont === 'LECIP-6:4'": 2,
                        "else": 1
                    }
                }
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
            font: "LECIP-20:12",
            spacing: 3
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
    'on-demand': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 5
            },
            text: '$serviceNumber',
            font: 'LECIP-14:7',
            spacing: 2
        },
        title: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 3
            },
            text: 'ON-DEMAND PUBLIC BUS',
            font: 'LECIP-6:4',
            spacing: 1
        },
        area: {
            align: 'centre-x,bottom',
            margin: {
                right: 'width(serviceNumber) len(5)',
                bottom: 2
            },
            text: '$area',
            font: 'LECIP-6:4',
            spacing: 1
        }
    },
    brandedSvc: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 3
        },
        branding: {
            align: "left",
            margin: {
                left: 1
            },
            text: "$branding",
            font: "$font",
            spacing: '$spacing'
        }
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
        text: "$top"
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
    mrtPrototype: {
        station: {
            align: 'centre-x,top',
            margin: {
                top: 1
            },
            text: '$station',
            font: 'LECIP-10',
            spacing: 1
        },
        name: {
            align: 'centre-x,bottom',
            margin: {
                bottom: 1
            },
            text: 'FREE TRAIN REPLACEMENT',
            font: 'LECIP-6:4',
            spacing: 1
        },
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "FULL"
    },
    swt: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 3
        },
        terminateAt: {
            align: "centre-x,top",
            margin: {
                top: 2,
                right: "width(serviceNumber)"
            },
            text: {
                $$cond: {
                    "$terminateAt === undefined": "TERMINATING AT",
                    "else": "'TERMINATING AT '+$terminateAt"
                }
            },
            font: "LECIP-6:3",
            spacing: 1
        },
        landmark: {
            align: "centre-x,bottom",
            margin: {
                bottom: 3,
                right: "width(serviceNumber)"
            },
            text: "$landmark",
            font: "LECIP-6:3",
            spacing: 1
        },

        text: {
            $$cond: {
                "$terminateAt === undefined": "'TERMINATING AT '+$landmark",
                "else": "'TERMINATING AT '+$terminateAt+' '+$landmark"
            }
        }
    }
}

EDSData.SBST = {
    // "1": {
    //     1: {
    //         front: {
    //             renderType: "mrtPrototype",
    //             station: "ANG MO KIO"
    //         }
    //     }
    // },
    1: {
        1: {
            front: {
                renderType: "full"
            },
            rear: {
                renderType: "full"
            }
        }
    },
    "1N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "1N",
                branding: "NIGHT  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "1N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "2N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "2N",
                branding: "NIGHT  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "3N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "3N",
                branding: "NIGHT  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    4: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "4",
                destination: "TAMP INT-CHANGI NTH WAY",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES AVE 7",
                    "FLORA DR",
                    "CHANGI NORTH WAY",
                    "FLORA RD",
                    "TAMPINES AVE 7"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "4",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "4N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "4N",
                branding: "NIGHT  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "4N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    5: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPP CHANGI RD EAST",
                    "BEDOK RESERVOIR RD",
                    "THOMSON RD",
                    "SCOTTS RD",
                    "TIONG BAHRU RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TIONG BAHRU RD",
                    "SCOTTS RD",
                    "THOMSON RD",
                    "BEDOK RESERVOIR RD",
                    "UPP CHANGI RD EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "5N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "5N",
                branding: "NIGHT  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    7: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "7",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI RD",
                    "GUILLEMARD RD",
                    "NORTH BRIDGE RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD",
                    "ULU PANDAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "7",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "7",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ULU PANDAN RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "VICTORIA ST",
                    "GUILLEMARD RD",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "7",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "7A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "7A",
                terminateAt: "ORCHARD BLVD",
                landmark: "BEF ORCHARD STN EXIT B"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "7A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "7B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "7B",
                terminateAt: "ORCHARD RD",
                landmark: "(DHOBY GHAUT STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "7B",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    8: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "8",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 1",
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    'PAYA LEBAR RD',
                    'MACPHERSON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "8",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "8",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MACPHERSON RD",
                    'PAYA LEBAR RD',
                    'UBI AVE 2',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 1, 2, 7'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "8",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    9: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "9",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPPER CHANGI RD",
                    'SIMEI ST 3',
                    'TAMPINES AVE 2, 7',
                    'LOYANG AVE',
                    'CHANGI CARGO RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9",
                font: "LECIP-20:12",
                spacing: 2
            }
        }, // D2
    },
    "9A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "9A",
                landmark: "LOYANG AVE (BLK 149A)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    10: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "10",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "EAST COAST RD",
                    'TANJONG KATON RD',
                    'SHENTON WAY',
                    'PASIR PANJANG RD',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "10",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR PANJANG RD",
                    'NICOLL HIGHWAY',
                    'TANJONG KATONG RD',
                    'EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "10E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "10e",
                image: "express",
                destination: "EXPRESS 10e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10e",
                font: "LECIP-20:9", // zz still dk font, need ID. looks alot like lecip-20:9 but width doesnt match
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "10e",
                image: "express",
                destination: "EXPRESS 10e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    11: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "11",
                destination: "LOR 1 GEYLANG TER-RHU CROSS",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SIMS WAY",
                    "STADIUM CRESCENT",
                    "RHU CROSS",
                    "STADIUM WALK",
                    "SIMS WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "11",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    13: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "13",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 6",
                    'BRADDELL RD',
                    'LAVENDER ST',
                    'SIMS AVE',
                    'UPP EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "13",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "13",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPP AST COAST RD",
                    'GEYLANG RD',
                    'LAVENDER ST',
                    'BRADDELL RD',
                    'ANG MO KIO AVE 6, 8'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "13",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "13A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "13A",
                landmark: "BISHAN RD (BISHAN STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "13A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    14: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "14",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH AVE 3",
                    "UPPER EAST COAST RD", // check order later
                    'EAST COAST RD',
                    "MOUNTBATTEN RD",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "14",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COMMONWEALTH AVE WEST",
                    "ORCHARD RD",
                    "MOUNTBATTEN RD",
                    "EAST COAST RD",
                    "UPPER EAST COAST RD",
                    "BEDOK NORTH RD" // check
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "14A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "14A",
                landmark: "GRANGE RD (NATL Y. COUNCIL)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "14E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "14e",
                image: "express",
                destination: "EXPRESS 14e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "14e",
                image: "express",
                destination: "EXPRESS 14e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    16: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPP EAST COAST RD",
                    'MARINE PARADE RD',
                    'JOO CHIAT RD',
                    'SOMERSET RD',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TIONG BAHRU RD",
                    'ORCHARD RD',
                    'JOO CHIAT RD',
                    'MARINE PARADE RD',
                    'UPP EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    18: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 7",
                    'TAMPINES AVE 2',
                    'BEDOK RESERVOIR RD',
                    'BEDOK INTERCHANGE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "18",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: "> TAMPINES CONCOURSE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEDOK INTERCHANGE",
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 2',
                    'TAMPINES AVE 7'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "18",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    19: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "19",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TAMPINES AVE 7',
                    "LOYANG AVE",
                    'AIRLINE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "19",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "19",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'AIRLINE RD',
                    'LOYANG AVE',
                    'TAMPINES AVE 7'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "19",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    20: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "20",
                destination: "TAMPINES INT-CHANGI BIZ PK",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 2",
                    "SIMEI ST 1",
                    "CHANGI STH AVE 2",
                    'CHANGI BIZ PK CTRL 2',
                    'TAMPINES AVE 2',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "20",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    21: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "21",
                destination: "> ST. MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 7",
                    'BEDOK RESERVOIR RD',
                    'GEYLANG RD',
                    'BOON KENG RD',
                    'MOULMEIN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "21",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "21",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BALESTIER RD",
                    "MOULMEIN RD",
                    'SIMS AVE',
                    'BOON KENG RD',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 7',
                    "PASIR RIS DR 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "21",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "21A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "21A",
                landmark: "KITCHENER RD (BEF TAI HOE HTL)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "21A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    22: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "22",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "SERANGOON CTRL",
                    "UPPER PAYA LEBAR RD",
                    "UBI AVE 2",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "22",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "22",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 4",
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    "UPPER PAYA LEBAR RD",
                    "SERANGOON CTRL",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "22",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    23: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "23",
                destination: "TAMPINES INT-ROCHOR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 1",
                    "BEDOK NORTH RD",
                    "BENDEMEER RD",
                    "SERANGOON RD",
                    "BEDOK NORTH RD",
                    "TAMPINES AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "23",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    24: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "24",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BOUNDARY RD',
                    'UPPER PAYA LEBAR RD',
                    'SIMS AVE',
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "24",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "24",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'NEW UPPER CHANGI RD',
                    'GEYLANG RD',
                    'UPPER PAYA LEBAR RD',
                    'BOUNDARY RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "24",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    25: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "25",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 3",
                    "HOUGANG AVE 2, 3",
                    "JALAN EUNOS",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "25",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "25",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI RD",
                    "JALAN EUNOS",
                    "HOUGANG AVE 3",
                    "HOUGANG AVE 2",
                    "ANG MO KIO AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "25",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    26: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "26",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'NEW UPPER CHANGI RD',
                    'GEYLANG RD',
                    'KALLANG BAHRU',
                    'JALAN TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "26",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "26",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JALAN TOA PAYOH',
                    'KALLANG BAHRU',
                    'SIMS AVE',
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "26",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    27: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "27",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HOUGANG AVE 10, 6',
                    'SENGKANG CTRL',
                    'COMPASSVALE RD',
                    'TAMPINES AVE 10, 9, 7, 4, 5',
                    'AIRPORT BOULEVARD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "27",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "27",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'AIRPORT BOULEVARD',
                    'TAMPINES AVE 5, 4, 7, 9, 10',
                    'COMPASSVALE RD',
                    'SENGKANG CTRL',
                    'HOUGANG AVE 6, 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "27",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "27A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "27A",
                landmark: "TAMP. AVE 4 (OPP CENTURY SQ)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "27A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    28: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "28",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 9, 2',
                    'NEW UPP CHANGI RD',
                    'PAYA LEBAR RD',
                    'BRADDELL RD',
                    'TOA PAYOH LOR 4, 6'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "28",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "28",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOA PAYOH LOR 6, 4',
                    'BRADDELL RD',
                    'PAYA LEBAR RD',
                    'NEW UPP CHANGI RD',
                    'TAMPINES AVE 2, 9'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "28",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    29: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "29",
                destination: "TAMP INT-CHANGI VILLAGE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES AVE 9",
                    "OLD TAMPINES RD",
                    "UPPER CHANGI RD NORTH",
                    "NETHERAVON RD",
                    "CHANGI VILLAGE RD",
                    "NETHERAVON RD",
                    "UPPER CHANGI RD NORTH",
                    "OLD TAMPINES RD",
                    "TAMPINES AVE 9"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "29",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "29A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "29A",
                landmark: "TAMPINES AVE 7 (BLK 479D)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "29A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    30: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "30",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI RD",
                    'TANJONG KATONG RD',
                    'OLD AIRPORT RD',
                    'KEPPEL RD',
                    'TELOK BLANGAH RD',
                    'PASIR PANJANG RD',
                    'WEST COAST RD',
                    'CORPORATION RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "30",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COPORATION DR",
                    "WEST COAST RD",
                    "PASIR PANJANG RD",
                    "TELOK BLANGAH RD",
                    "KEPPEL RD",
                    "OLD AIRPORT RD",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "30E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "30e",
                image: "express",
                destination: "EXPRESS 30e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "30e",
                image: "express",
                destination: "EXPRESS 30e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    31: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "31",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SIMEI AVE',
                    'BEDOK SOUTH AVE 1',
                    'MARINE PARADE RD',
                    'DUNMAN RD',
                    'SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "31",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "31",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BENDEMEER RD',
                    'DUNMAN RD',
                    'MARINE PARADE RD',
                    'BEDOK SOUTH AVE 1',
                    'SIMEI AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "31",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "31A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "31A",
                landmark: "NEW U. CHANGI RD (T. MERAH STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "31A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    32: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "32",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'EAST COAST RD',
                    'NORTH BRIDGE RD',
                    'RIVER VALLEY RD',
                    'MARGARET DRIVE',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "32",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "32",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MARGARET DR',
                    'RIVER VALLEY RD',
                    'VICTORIA ST',
                    'EASST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "32",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    33: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "33",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'OLD AIRPORT RD',
                    'VICTORIA ST',
                    'TIONG BAHRU RD',
                    'AYE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "33",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'AYE',
                    'TIONG BAHRU RD',
                    'VICTORIA ST',
                    'OLD AIRPORT RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "33A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "33A",
                landmark: "TIONG BAHRU RD (BLK 1)" // check
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "33B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "33B",
                landmark: "JOO CHIAT PL (AFT TEMBELING ST)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    35: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "35",
                destination: "> ALPS AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "NEW UPPER CHANGI RD",
                    "XILIN AVE",
                    "TANAH MERAH FERRY RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "35",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "35",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TANAH MERAH FERRY RD",
                    "XILIN AVE",
                    "NEW UPPER CHANGI RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "35",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "35M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "35M",
                destination: "> T.MERAH FERRY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'NEW UPP CHANGI RD',
                    'XILIN AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "35M",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "35M",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'XILIN AVE',
                    'NEW UPP CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "35M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    37: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "37",
                destination: "TAMP INT-CHANGI NTH CRES",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES AVE 7",
                    "UPPER CHANGI RD NORTH",
                    "CHANGI NORTH ST 1"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "37",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    38: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "38",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 7, 2',
                    'SIMEI ST 1, 3, 4',
                    'NEW UPP CHANGI RD',
                    'BEDOK SOUTH AVE 3',
                    'BEDOK SOUTH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "38",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "38",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK SOUTH RD',
                    'BEDOK SOUTH AVE 3',
                    'NEW UPP CHANGI RD',
                    'SIMEI ST 4, 3, 1',
                    'TAMPINES AVE 2, 7'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "38",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    39: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "39",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 2",
                    'PASIR RIS DR 1',
                    "JALAN KAYU",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "39",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "39",
                destination: "> TAMPINES CONCOURSE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN AVE 2",
                    "JALAN KAYU",
                    "PASIR RIS DR 1",
                    "TAMPINES AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "39",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    40: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "40",
                destination: "BEDOK INT-MERPATI RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIGLAP RD',
                    'TANJONG KATONG RD',
                    'MACPHERSON EST',
                    'SIMS AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "40",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    42: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "42",
                destination: "JLN KEMBANGAN-FIDELIO ST",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LENGKOK TIGA',
                    'LENGKOK EMPAT',
                    'FIDELIO ST',
                    'SIGLAP DR',
                    'FRANKEL AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "42",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    45: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'SERANGOON AVE 2',
                    'LOR AH SOO',
                    'EUNOS LINK',
                    'BEDOK NORTH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "45",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: "> ANG MO KIO DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH RD',
                    'EUNOS LINK',
                    'LOR AH SOO',
                    'SERANGOON AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "45",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "45A": { // check
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "45A",
                landmark: "UPPER SERANGOON RD"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "45A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    46: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 3",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH RD",
                    "BEDOK SOUTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "46",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK SOUTH AVE 3",
                    "BEDOK NORTH RD",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "46",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    47: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "47",
                destination: "CHANGI BIZ PARK TER-AMBER RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "BEDOK SOUTH RD",
                    "MARINE PARADE RD",
                    "AMBER RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "48",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    48: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "48",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK SOUTH AVE 3',
                    'UPP EAST COAST RD',
                    'MARINE PARADE RD',
                    'BUKIT TIAMH RD',
                    'FARRER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "48",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "48",
                destination: "> BEDOK NTH DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'FARRER RD',
                    'DUNEARN RD',
                    'MARINE PARADE RD',
                    'UPP EAST COAST RD',
                    'BEDOK SOTUH AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "48",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    50: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "ANG MO KIO AVE 5",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST WAY",
                    "PUNGGOL DR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "50",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "50",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    51: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "51",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'EUNOS LINK',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'ALEXANDRA RD',
                    'WEST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "51",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "51",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'WEST COAST RD',
                    'ALEXANDRA RD',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'EUNOS LINK'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "51",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    52: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIN MING AVE',
                    'UPP THOMSON AVE',
                    'CLEMENTI RD',
                    "C'WEALTH AVE WEST",
                    'TOH GUAN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "52",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOH GUAN RD',
                    "C'WEALTH AVE WEST",
                    'CLEMENTI RD',
                    'UPP THOMSON RD',
                    'SIN MING AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "52",
                font: "LECIP-20:12",
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
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN RD",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1",
                    "PASIR RIS DR 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS DR 1",
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "BISHAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "53A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "53A",
                landmark: "CHANGI AIRPORT (PTB2)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "53M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53M",
                destination: "HOUGANG AVE 1-S'GOON CTRL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    54: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "54",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'MARYMOUNT RD',
                    'THOMSON RD',
                    'NEWTON RD',
                    'SCOTTS RD',
                    'RIVER VALLEY RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "54",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "54",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'RIVER VALLEY RD',
                    'SCOTTS RD',
                    'NEWTON RD',
                    'THOMSON RD',
                    'MARYMOUNT RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "54",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    55: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'HOUGANG AVE 2',
                    'HOUGANG AVE 3',
                    'JALAN EUNOS',
                    'STILL ROAD SOUTH',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "55",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MARINE PARADE RD',
                    'STILL ROAD SOUTH',
                    'JALAN EUNOS',
                    'HOUGANG AVE 3',
                    'HOUGANG AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "55",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "55B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "55B",
                landmark: "ANG MO KIO AVE 10 (BLK 443)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "55B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    56: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "56",
                destination: "> MARINA CTR TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN ST 13",
                    "LOR 6 TOA PAYOH",
                    "THOMSON RD",
                    "BUKIT TIMAH RD",
                    "MIDDLE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "56",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "56",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MIDDLE RD',
                    'BUKIT TIMAH RD',
                    'THOMSON RD',
                    'LOR 6 TOA PAYOH',
                    'BISHAN ST 13'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "56",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    57: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'THOMSON RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'DEPOT RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "57",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'DEPOT RD',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'THOMSON RD',
                    'LOR 6 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "57",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    58: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SERANGOON AVE 3',
                    'SERANGOON AVE 2',
                    'UPP PAYA LEBAR RD',
                    'UBI AVE 3',
                    'KAKI BUKIT AVE 1',
                    'TAMPINES AVE 10',
                    'PASIR RIS DR 12, 3',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PASIR RIS DR 3, 12',
                    'TAMPINES AVE 10',
                    'KAKI BUKIT AVE 1',
                    'UBI AVE 3',
                    'UPP PAYA LEBAR RD',
                    'SERANGOON AVE 2',
                    'SERANGOON AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "58A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "58A",
                landmark: "TAMPINES AVE 10 (BEF TPE)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "58B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "58B",
                terminateAt: "UPP PAYA LEBAR RD",
                landmark: "AFT TAI SENG STN"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    59: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE",
                    "TAMPINES AVE 2",
                    "BEDOK RESERVOIR RD",
                    "KAKI BUKIT AVE 1",
                    "LOR 1 TOA PAYOH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "59",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: "> CHANGI VILLAGE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "LOR 1 TOA PAYOH",
                    "KAKI BUKIT AVE 1",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 2",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "59",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    60: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "60",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JALAN EUNOS',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NTH RD',
                    'BEDOK RESERVOIR RD',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "60",
                font: "LECIP-20:12",
                spacing: 2
            }
        } // D2?
    },
    "60A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "60A",
                landmark: "BEDOK RESERVOIR RD (BLK 608)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "60A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    63: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "63",
                destination: "> JALAN RUMAH TINGGI",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UBI AVE 1',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'UPPER CROSS ST',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "63",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "63",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TIONG BAHRU RD',
                    'EU TONG SEN ST',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'UBI AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "63",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "63M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "63M",
                destination: "> CIRCUIT RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UBI AVE 1',
                    'UBI AVE 2',
                    'JALAN EUNOS',
                    'CIRCUIT RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "63M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    64: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: "> MEI LING ST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ALJUNIED RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "CLEMANCEAU AVE",
                    "TIONG BAHRU RD",
                    "STIRLING RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "64",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: "> SIMS PLACE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD",
                    "CLEMANCEAU AVE",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "ALJUNIED RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "64",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    65: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    "MACPHERSON RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "ORCHARD BOULEVARD",
                    "LOWER DELTA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "65",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOWER DELTA RD",
                    "ORCHARD RD",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "MACPHERSON RD",
                    "UBI AVE 2",
                    "BEDOK RESERVOIR RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "65",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    69: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "69",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 5',
                    'TAMPINES AVE 8',
                    'TAMPINES AVE 1',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NTH AVE 3',
                    'BEDOK NTH ST 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "69",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "69",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NTH AVE 3',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 1',
                    'TAMPINES AVE 8',
                    'TAMPINES AVE 5'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "69",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    70: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "70",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YIO CHU KANG RD",
                    "SERANGOON CENTRAL",
                    "UPPER PAYA LEBAR RD",
                    "PAYA LEBAR RD",
                    "GUILLEMARD RD",
                    "NICOLL HIGHWAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "70",
                destination: "> YIO CHU KANG TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "NICOLL HIGHWAY",
                    'GUILLEMARD RD',
                    "PAYA LEBAR RD",
                    "UPPER PAYA LEBAR RD",
                    "SERANGOON CENTRAL",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "70A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "70A",
                landmark: "TAMASEK AVE (OP. RITZ-CARLTON)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "70B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "70B",
                landmark: "SERANGOON CTRL (S'GOON STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "70M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "70M",
                destination: "YCK INT-MARINA CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO ST 63',
                    'ANG MO KIO ST 64',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD',
                    'TEMASAK AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    71: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "71",
                destination: "YCK INT-BISHAN ST 11",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 4",
                    "ANG MO KIO AVE 1",
                    "BISHAN RD",
                    "BRADDELL RD",
                    "BISHAN RD",
                    "ANG MO KIO AVE 1",
                    "ANG MO KIO AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "71",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    72: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "72",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 5",
                    "HOUGANG AVE 9",
                    "HOUGANG CENTRAL",
                    "TAMPINES RD",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "72",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "72",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 9",
                    "TAMPINES AVE 10",
                    "TAMPINES RD",
                    "HOUGANG CENTRAL",
                    "HOUGANG AVE 9",
                    "ANG MO KIO AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "72",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "72A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "72A",
                landmark: "HOUGANG CTRL (OPP HG CTRL INT)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "72A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "72B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "72B",
                landmark: "AMK AVE 5 (ITE COLLEGE CTRL)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "72B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    73: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "73",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SERANGOON NORTH AVE 4',
                    'SERANGOON GARDEN WAY',
                    'LOR CHUAN',
                    'BRADDELL RD',
                    'LOR 4 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "73",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "73",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LOR 4 TOA PAYOH',
                    'BRADDELL RD',
                    'LOR CHUAN',
                    'SERANGOON GARDEN WAY',
                    'SERANGOON NORTH AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "73",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    74: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "74",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 3',
                    'ADAM RD',
                    'CLEMENTI RD',
                    'DOVER AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "74",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "74",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'DOVER AVE',
                    'CLEMENTI RD',
                    'ADAM RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 8'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "74",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    76: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD',
                    'TANJONG KATONG RD',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "76",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'UPP PAYA LEBAR RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "76",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "76A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "76A",
                terminateAt: "MARINA TERR",
                landmark: "(OP. CHIJ KATONG CONVENT)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "76A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    80: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "80",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UPP SERANGOON RD',
                    'UPP PAYA LEBAR RD',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'KEPPEL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "80",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "80",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'KEPPEL RD',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'UPP PAYA LEBAR RD',
                    'UPP SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "80",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "80A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "80A",
                landmark: "ALJUNIED RD (ALJUNIED STATION)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "80A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    81: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "81",
                destination: "TAMPINES INT-S'GOON CTRL",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 7",
                    "PASIR RIS DR 1",
                    "TAMPINES RD",
                    "UPP SERANGOON RD",
                    "TAMPINES RD",
                    "PASIR RIS DR 1",
                    "TAMPINES AVE 7",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "81",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    86: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "86",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'COMPASSVALE RD',
                    'RIVERVALE DR',
                    'JALAN KAYU',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 6'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "86",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "86",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 6',
                    'YIO CHU KANG RD',
                    'JALAN KAYU',
                    'RIVERVALE DR',
                    'COMPASSVALE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "86",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    87: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'COMPASSVALE RD',
                    'HOUGANG AVE 10, 5, 7, 3',
                    'EUNOS LINK',
                    'KAKI BUKIT AVE 1',
                    'BEDOK NTH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "87",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NTH RD',
                    'KAKI BUKIT AVE 1',
                    'EUNOS LINK',
                    'HOUGANG AVE 3, 5, 7, 10',
                    'COMPASSVALE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "87",
                font: "LECIP-20:12",
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
                destinationFont: "LECIP-10",
                scrolls: [
                    'PASIR RIS DR 3',
                    'PUNGGOL RD',
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 5',
                    'BISHAN ST 22'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 5',
                    'HOUGANG AVE 8',
                    'PUNGGOL RD',
                    'PASIR RIS DR 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "88A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "88A",
                landmark: "AMK AVE 3 (OPP AMK STATION)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "88B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "88B",
                landmark: "AMK AVE 5 (BEF YIO CHU KANG RD)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    89: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "89",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HOUGANG AVE 10",
                    "COMPASSVALE RD",
                    "PASIR RIS DR 1",
                    "PASIR RIS DR 3",
                    "LOYANG AVE",
                    "AIRLINE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "89",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'AIRLINE RD',
                    'LOYANG AVE',
                    'PASIR RIS DR 3',
                    'PASIR RIS DR 1',
                    'COMPASSVALE RD',
                    'HOUGANG AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "89A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "89A",
                terminateAt: "AIRPORT CARGO RD",
                landmark: "AIRFREIGHT TERMINAL BLDG"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "89E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "89e",
                image: "express",
                destination: "EXPRESS 89e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "89e",
                image: "express",
                destination: "EXPRESS 89e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    90: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "90",
                destination: "EUNOS INT-AIRPORT RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "LOR 6 TOA PAYOH",
                    "JALAN TOA PAYOH",
                    "MACPHERSON RD",
                    "AIRPORT RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "90",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "90A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "90A",
                terminateAt: "AIRPORT RD",
                landmark: "PAYA LEBAR AIR BASE"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "90A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    91: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "91",
                destination: "BUONA VISTA TER-AYER RAJAH C.",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'COMMONWEALTH AVE',
                    'NORTH BUONA VISTA RD',
                    'AYER RAJAH AVE',
                    'AYER RAJAH CRES',
                    'AYER RAJAH AVE',
                    'NORTH BUONA VISTA RD'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "91",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    92: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "92",
                destination: "GHIM MOH TER-SCIENCE PK DR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'NORTH BUONA VISTA RD',
                    'BUONA VISTA FLYOVER',
                    'SCIENCE PK DR',
                    'BUONA VISTA FLYOVER',
                    'NORTH BUONA VISTA RD',
                    'MOUNT SINAI RD',
                    'MOUNT SINAI DR',
                    'MOUNT SINAI RISE'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "92A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "92A",
                landmark: "GHIM MOH RD (BLK 13)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "92B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "92B",
                terminateAt: "SCIENCE PARK DR",
                landmark: "(OPP THE RUTHERFORD)" // check
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    93: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALEXANDRA RD',
                    'FARRER RD',
                    'BRADDELL RD',
                    'BARTLEY RD',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "93",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JALAN EUNOS',
                    'BARTLEY RD',
                    'BRADDELL RD',
                    'FARRER RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "93",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    94: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "94",
                destination: "EUNOS INT-AIRPORT RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JALAN EUNOS',
                    'EUNOS LINK',
                    'AIRPORT RD',
                    'PAYA LEBAR AIRPORT',
                    'AIRPORT RD',
                    'EUNOS LINK',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "94",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "94A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "94A",
                landmark: "AIRPORT RD(BEF RSAF R'ABOUT)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "94A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    95: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "95",
                destination: "KENT RIDGE TER-HOLLAND RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'KENT RIDGE CRESCENT',
                    "NORTH BUONA VISTA RD",
                    "HOLLAND AVE",
                    'NORTH BUONA VISTA RD',
                    'KENT RIDGE CRESENT'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "95B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "95B",
                landmark: "N.BUONA VISTA RD (BUONA V. STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    99: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "99",
                destination: "> JOO KOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 91",
                    "UPPER JURONG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "99",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "99",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPP JURONG RD",
                    "JURONG WEST ST 91",
                    "JURONG WEST AVE 4",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "99",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    100: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: "> GHIM MOH TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALJUNIED RD',
                    'BEACH RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "100",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TELOK BLANGAH RD',
                    'ROBINSON RD',
                    'BEACH RD',
                    'ALJUNIED RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "100",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "100A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "100A",
                terminateAt: "ALJUNIED RD",
                landmark: "(ALJUNIED STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "100A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "101",
                destination: "S'GOON INT-BUANGKOK LINK",
                destinationFont: "LECIP-7:5",
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
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "101",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "102",
                destination: "HOUGANG-SELETAR A'SPACE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "UPPER SERANGOON RD",
                    "BUANGKOK DR",
                    "COMPASSVALE DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST WAY",
                    "SELETAR A'SPACE DR"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "102",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    103: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN CENTRAL",
                    "WEST CAMP RD",
                    "SELETAR AEROSPACE DR",
                    "JALAN KAYU",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YIO CHU KANG RD",
                    "JALAN KAYU",
                    "SELETAR AEROSPACE DR",
                    "WEST CAMP RD",
                    "YISHUN CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103",
                font: "LECIP-20:9",
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
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SERANGOON AVE 3',
                    'TOA PAYOH CTRL',
                    'STEVENS RD',
                    'HOLLAND RD',
                    "COMMONWEALTH AVE WEST",
                    'TOH GUAN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOH GUAN RD',
                    "COMMONWEALTH AVE WEST",
                    'HOLLAND RD',
                    'STEVEN RD',
                    'TOA PAYOH CTRL',
                    'SERANGOON AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "105B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "105B",
                landmark: "CLEMENTI RD (CLEMENTI STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105B",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    107: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "107",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HOUGANG AVE 10",
                    "UPPER SERANGOON RD",
                    "KALLANG BAHRU",
                    "LAVENDER ST",
                    "BEACH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "107",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "107",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEACH RD",
                    "LAVENDER ST",
                    "KALLANG BAHRU",
                    "UPPER SERANGOON RD",
                    "HOUGANG AVE 10"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "107",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "107M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "107M",
                destination: "HOUGANG INT-MARINA CTR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'UPPER SERANGOON RD',
                    'KALLANG BAHRU',
                    'BEACH RD',
                    'TEMASAK BOULEVARD',
                    'KALLANG BAHRU'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "107M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    109: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: "> CHANGI VILLAGE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 9",
                    "SENGKANG EAST RD",
                    "PASIR RIS DR 1",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "109",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE",
                    "PASIR RIS DR 1",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 9",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "109",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "109A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "109A",
                landmark: "HOUGANG AVE 4 (BLK 913)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "109A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "111",
                destination: "GHIM MOH TER-TAMASEK AVE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "COMMONWEALTH AVE",
                    "TANGLIN RD",
                    "ORCHARD RD",
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "TANGLIN RD",
                    "COMMONWEALTH AVE"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "111",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "112",
                destination: "HOUGANG CTRL INT-HOUGANG ST 92",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'HOUGANG AVE 7',
                    'TAMPINES RD',
                    'HOUGANG AVE 2',
                    'HOUGANG AVE 9'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "112",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    113: {//TODO SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "113",
                destination: "HOUGANG INT-U. PAYA LEBAR",
                destinationFont: "LECIP-6:3",
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
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "113",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "113A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "113A",
                landmark: "U. S'GOON RD (KOVAN STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "113A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    115: {// TODO:  SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "115",
                destination: "HOUGANG CTRL INT-HOUGANG AVE 3",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'HOUGANG AVE 1'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "115",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    116: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "116",
                destination: "HOUGANG CTRL INT-S'GOON CTRL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'HOUGANG AVE 4',
                    'HOUGANG AVE 9',
                    "S'GOON NORTH AVE 4",
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 3',
                    'SERANGOON CTRL'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "116",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    117: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: "> SEMBAWANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PUNGGOL WAY',
                    "SELETAR A'SPACE DR",
                    'YISHUN AVE 2',
                    'SEMBAWANG WAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: "> PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SEMBAWANG WAY',
                    'YISHUN AVE 1',
                    "SELETAR A'SPACE CR",
                    'PUNGGOL WAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
'117M': { //TODO SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117M",
                destination: "> SEMBAWANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PUNGGOL WAY',
                    "SELETAR A'SPACE CR",
                    'YISHUN AVE 1',
                    'SEMBAWANG WAY'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "117M",
                destination: "> PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SEMBAWANG WAY',
                    'YISHUN AVE 1',
                    "SELETAR A'SPACE CR",
                    'PUNGGOL WAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    120: { //todo font
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "120",
                destination: "KG BAHRU TER-T.BLANGAH HTS",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH RD",
                    "ALEXANDRA RD", // <-
                    "TIONG BAHRU RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "120",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    121: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "121",
                destination: "KG.BAHRU TER-T.BLANGAH",
                destinationFont: "LECIP-6:4",
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
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "121",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    122: { // TODO: scroll font
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "122",
                destination: "KG.BAHRU TER-C'WEALTH DR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'ALEXANDRA RD',
                    'MARGARET DR',
                    "COMMONWEALTH DR",
                    'QUEENSWAY'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "122",
                font: "LECIP-20:9",
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
                destinationFont: "LECIP-10",
                scrolls: [
                    "QUEENSWAY",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "HAVELOCK RD",
                    "TIONG BAHRU RD",
                    "LOWER DELTA RD",
                    "BUKIT PURMEI AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD",
                    "TIONG BAHRU RD",
                    "HAVELOCK RD",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "QUEENSWAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "123M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123M",
                destination: "HARBOURFRONT INT-T.BAHRU",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'BUKIT PURMEI AVE',
                    'LOWER DELTA RD',
                    'TIONG BAHRU RD',
                    'LOWER DELTA RD',
                    'BUKIT PURMEI AVE'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    124: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH WAY",
                    "KAMPONG BAHRU RD",
                    "NEW BRIDGE RD",
                    "EU TONG SEN ST",
                    "ORCHARD TURN",
                    "MOULMEIN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "MOULMEIN RD",
                    "ORCHARD RD",
                    "NEW BRIDGE RD",
                    "KAMPONG BAHRU RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH HTS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    125: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "125",
                destination: "> SIMS DR",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BALESTIER RD',
                    'SERANGOON RD',
                    'KALLANG WAY',
                    'ALJUNIED RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "125",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "125",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ALJUNIED RD',
                    'KALLANG WAY',
                    'BENDEMEER RD',
                    'BALESTIER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "125",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "125A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "125A",
                terminateAt: "MACPHERSON RD",
                landmark: "(BEF SIEMENS CTR)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "125A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    127: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "127",
                destination: "TAMP INT-TAMP IND AVE 5",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES CONCOURSE",
                    "TAMPINES AVE 9, 10",
                    "TAMPINES IND AVE 5",
                    "TAMPINES RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "127",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "127A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "127A",
                landmark: "TAMPINES AVE 9 (BLK 742A)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "127A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    128: {// TODO: SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "128",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BISHAN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "128",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "128",
                destination: "> ANG MO KIO DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 8'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "128",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    129: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: "> TAMP CONCOURSE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BALESTIER RD",
                    "LOR 1 TOA PAYOH",
                    "BRADDELL RD",
                    "TAMPINES AVE 1",
                    "TAMPINES AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "129",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: "> ST. MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 1",
                    "BRADDELL RD",
                    "LOR 1 TOA PAYOH",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "129",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    130: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "130",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIN MING RD',
                    'BALESTIER RD',
                    'JALAN BESAR',
                    'SHENTON WAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "130",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "130",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ROBINSON RD',
                    'SERANGOON RD',
                    'BALESTIER RD',
                    'SIN MING RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "130",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "130A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "130A",
                landmark: "SIN MING RD (BLK 25)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "130A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    131: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'THOMSON RD',
                    'OWEN RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'BUKIT PURMEI AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "131",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BUKIT PURMEI AVE',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'OWEN RD',
                    'THOMSON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "131",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "131M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131M",
                destination: "BUKIT MERAH INT-BUKIT PURMEI",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'JALAN BUKIT MERAH',
                    'LOWER DELTA RD',
                    'BUKIT PURMEI AVE',
                    'LOWER DELTA RD',
                    'JALAN BUKIT MERAH'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "131M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    132: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'UPP THOMSON RD',
                    'STEVENS RD',
                    'TANGLIN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "132",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TANGLIN RD',
                    'STEVENS RD',
                    'UPP THOMSON RD',
                    'ANG MO KIO AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "132",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    133: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "133",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 1',
                    'SERANGOON AVE 2',
                    'BENDEMEER RD',
                    'VICTORIA ST',
                    'BAYFRON AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "133",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "133",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BAYFRONT AVE',
                    'VICTORIA ST',
                    'SERANGOON RD',
                    'SERANGOON AVE 2',
                    'ANG MO KIO AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "133",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    135: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: "> SIGLAP RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SERANGOON AVE 2',
                    'UPP ALJUNIED RD',
                    'MACPHERSON EST',
                    'TANJONG KATONG RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "135",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TANJONG KATONG RD',
                    'MACPHERSON EST',
                    'UPP ALJUNIED RD',
                    'SERANGOON AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "135",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "135A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "135A",
                landmark: "M. PARADE RD (VICTORIA SCH)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "135A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    137: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "137",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'KAKI BUKIT AVE 3',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "137",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: "> SIMS PLACE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NTH AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "135",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "137A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "137A",
                terminateAt: "BEDOK NORTH",
                landmark: "(BEDOK NTH STN EXIT A)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "137A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    138: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "138",
                destination: "> SINGAPORE ZOO",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3, 6, 5',
                    'YIO CHU KANG RD',
                    'UPP THOMSON RD',
                    'MANDAI RD',
                    'MANDAI LAKE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "138",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MANDAI LAKE RD',
                    'MANDAI RD',
                    'UPP THOMSON RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 5, 6, 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "138A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "138A",
                landmark: "MANDAI LAKE RD (S'PORE ZOO)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "138B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "138B",
                landmark: "AMK AVE 5 (OPP BLK 604)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138B",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    139: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "139",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ST MICHAEL'S EST",
                    'BALESTIER RD',
                    'BENCOOLEN ST',
                    'RIVER VALLEY RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "139",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "139",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALEXANDRA RD',
                    'RIVER VALLEY RD',
                    'SELEGIE RD',
                    'BALESTIER RD',
                    "ST MICHAEL'S EST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "139",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "139M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "139M",
                destination: "TOA PAYOH INT-JLN BAHAGIA",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "BALESTIER RD",
                    "JLN RAJAH",
                    "JLN BAHAGIA",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "139M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
    },
    140: {//CHECK SCROLL FONT
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "140",
                destination: "LOR 1 GEYLANG TER-ST WILFRED ST",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'GEYLANG BAHRU'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "140",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    141: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "141",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LAVENDER ST',
                    'JALAN BESAR',
                    'RANGOON RD',
                    'THOMSON RD',
                    'LOR 1 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "141",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "141",
                destination: "> LOR 1 GEYLANG TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 1 TOA PAYOH',
                    'THOMSON RD',
                    'RANGOON RD',
                    'SERANGOON RD',
                    'LAVENDER ST'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "141",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    142: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "142",
                destination: "TOA PAYOH INT-POTONG P. AVE 1",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'JLN TOA PAYOH',
                    'UPP SERANGOON RD',
                    'POTONG PASIR AVE 1, 3, 2'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "142",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    "142A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "142A",
                landmark: "UPP SERANGOON RD (SAINT RITZ)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "142A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    145: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BALESTIER RD',
                    'NTH BRIDGE RD',
                    'KEPPEL RD',
                    'HENDERSON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "145",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HENDERSON RD',
                    'KEPPEL RD',
                    'VICTORIA ST',
                    'BALESTIER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "145",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "145A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "145A",
                landmark: "HENDERSON RD (BLK 1)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "145A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    147: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "147",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "HOUGANG AVE 8",
                    "YIO CHU KANG RD",
                    "UPP SERANGOON RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "NEW BRIDGE RD",
                    "JALAN BUKIT MERAH",
                    "COMMONWEALTH AVE WEST",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "147",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "COMMONWEALTH AVE WEST",
                    "UPP SERANGOON RD",
                    // 'JLN BUKIT MERAH',
                    // 'VICTORIA ST',
                    // 'PRINSEP ST',
                    // 'SERANGOON CTRL',
                    // 'HOUGANG AVE 2, 8'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "147A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "147A",
                terminateAt: "NEW BRIDGE RD",
                landmark: "(OPP PEARL'S CTR)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "147E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "147e",
                image: "express",
                destination: "EXPRESS 147e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147e",
                font: "LECIP-20:6", // check rear font for all 4 digit express
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "147e",
                image: "express",
                destination: "EXPRESS 147e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147e",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    150: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "150",
                destination: "BEDOK INT-MARINE TERR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'STILL RD',
                    'TELOK KURAU RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "150",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    151: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "151",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HOUGANG AVE 5, 7, 3',
                    'MACPHERSON RD',
                    'JLN TOA PAYOH',
                    'BUKIT TIMAH RD',
                    'CLEMENTI RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "151",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'CLEMENTI RD',
                    'DUNEARN RD',
                    'JLN TOA PAYOH',
                    'MACPHERSON RD',
                    'HOUGANG AVE 3, 7, 5'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "151E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "151e",
                image: "express",
                destination: "EXPRESS 151e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151e",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "151e",
                image: "express",
                destination: "EXPRESS 151e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151e",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    153: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "153",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'FARRER RD',
                    'WHITLEY RD',
                    'TOA PAYOH CTRL',
                    'BRADDELL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "153",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "153",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BRADDELL RD',
                    'TOA PAYOH CTRL',
                    'WHITLEY RD',
                    'FARRER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "153",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    154: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YUAN CHIN RD",
                    "AYE",
                    "COMMONWEALTH AVE WEST",
                    "CLEMENTI RD",
                    "DUNEARN RD",
                    "JALAN TOA PAYOH",
                    "PAYA LEBAR RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PAYA LEBAR RD",
                    "JALAN TOA PAYOH",
                    "BUKIT TIMAH RD",
                    "CLEMENTI RD",
                    "C'WEALTH AVE WEST",
                    "AYE",
                    "YUAN CHING RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "154A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "154A",
                landmark: "BOON LAY WAY (LAKESIDE STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "154B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "154B",
                landmark: "CLEMENTI RD (NGEE ANN POLY)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154B",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    155: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "155",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BRADDELL RD',
                    'UPP ALJUNIED RD',
                    'GEYLANG EAST CTRL',
                    'CIRCUIT RD',
                    'TELOK KURAU RD',
                    'EAST COAST RD',
                    'BEDOK STH AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "155",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "155",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK STH AVE 1',
                    'EAST COAST RD',
                    'TELOK KURAU RD',
                    'CIRCUIT RD',
                    'GEYLANG EAST CTRL',
                    'UPP ALJUNIED RD',
                    'BRADDELL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "155",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "155A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "155A",
                landmark: "M. PARADE RD (VICTORIA SCH)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "155A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    156: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SENGKANG EAST RD',
                    'BUANGKOK GREEN',
                    'YIO CHU KANG RD',
                    'BISHAN RD',
                    'BUKIT TIMAH RD',
                    'SIXTH AVE',
                    'ULU PANDAN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "156",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
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
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "156",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    157: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "157",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1",
                    "BUKIT BATOK EAST AVE 3",
                    "JALAN JURONG KECHIL",
                    "DUNEARN RD",
                    "LORNIE RD",
                    "BRADDELL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "157",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "157",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BRADDELL RD",
                    "LORNIE RD",
                    "BUKIT TIMAH RD",
                    "JALAN JURONG KECHIL",
                    "BUKIT BATOK EAST AVE 3",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "157",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    158: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "158",
                destination: "SERANGOON INT-RHU CROSS",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'BARTLEY RD',
                    'UPP PAYA LEBAR',
                    'ALJUNIED RD',
                    'MOUNTBATTEN RD',
                    'TANJONG RHU RD'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "158",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "158A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "158A",
                landmark: "ALJUNIED RD (OPP ALJUNIED STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "158A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    159: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "159",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SENGKANG EAST RD',
                    'HOUGANG AVE 9',
                    "S'GOON NTH AVE 5, 6",
                    'ANG MO KIO AVE 5, 8',
                    'LOR CHUAN'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "159",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "159",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LOR CHUAN',
                    'ANG MO KIO AVE 8, 5',
                    "S'GOON NTH AVE 6, 5",
                    'HOUGANG AVE 9',
                    'SENGKANG EAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "159",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "159A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "159A",
                landmark: "AMK AVE 6 (AMK STATION)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "159A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "159B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "159B",
                landmark: "AMK AVE 5 (ITE COLLEGE CTRL)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "159B",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    160: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JB SENTRAL",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'BUKIT BATOK RD',
                    'CHOA CHU KANG RD',
                    'WOODLANDS RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'WOODLANDS RD',
                    'CHOA CHU KANG RD',
                    'BUKIT BATOK RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "160A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "160A",
                terminateAt: "BT BATOK RD",
                landmark: "(OPP DUNEARN SEC SCH)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    161: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: "> WOODLANDS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "HOUGANG AVE 8",
                    "HOUGANG AVE 4",
                    "SENGKANG EAST RD",
                    "SENGKANG EAST WAY",
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "161",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "WOODLANDS AVE 2",
                    "SENGKANG EAST WAY",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 4",
                    "HOUGANG AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "161",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    162: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
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
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
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
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "162M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162M",
                destination: "YCK INT-TAMASEK AVE",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 8',
                    'BISHAN ST 22',
                    'SIN MING AVE',
                    'THOMSON RD',
                    'ORCHARD RD',
                    'THOMSON RD',
                    'SING MIN AVE',
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 8'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    163: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "163",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOR 4 TOA PAYOH",
                    "BRADDELL RD",
                    "UPPER THOMSON RD",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "163",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SENGKANG EAST AVE",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "UPPER THOMSON RD",
                    "BRADDELL RD",
                    "LOR 4 TOA PAYOH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "163M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "163M",
                destination: "> SENGKANG W. AVE",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PUNGGOL RD",
                    "SENGKANG EAST AVE",
                    "SENGKANG WEST AVE",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163M",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "163M",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST AVE",
                    "PUNGGOL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "163A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "163A",
                terminateAt: "FERNVALE LN",
                landmark: "(BEF SENGKANG WEST RD)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    165: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "165",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 3',
                    'UPPER THOMSON RD',
                    "LORNIE RD",
                    'FARRER RD',
                    'HOLLAND RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "165",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "165",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'HOLLAND RD',
                    'FARRER RD',
                    'UPP THOMSON RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 8, 4',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "165",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    166: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "166",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'THOMSON RD',
                    'STH BRIDGE RD',
                    'TELOK BLANGAH RD',
                    'ALEXANDRA RD',
                    'DOVER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "166",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "166",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "KAMPONG BAHRU RD",
                    "EU TONG SEN ST",
                    "UPPER THOMSON RD"
                    // 'DOVER RD',
                    // 'ALEXANDRA RD',
                    // 'TELOK BLANGAH RD',
                    // 'EU TONG SEN ST',
                    // 'THOMSON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "166",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    168: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "168",
                destination: "> WOODLANDS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH AVE 3",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 10",
                    "JALAN KAYU",
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "168",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "168",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "WOODLANDS AVE 2",
                    "JALAN KAYU",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 4",
                    "BEDOK NORTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "168",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    170: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: "> LARKIN TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BUKIT TIMAH RD',
                    'UPP BT TIMAH RD',
                    'WOODLANDS RD',
                    'WOODLANDS CTR RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: "> QUEEN ST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'WOODLANDS CTR RD',
                    'WOODLANDS RD',
                    'UPP BT TIMAH RD',
                    'DUNEARN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "170X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170X",
                destination: "> JB SENTRAL",
                destinationFont: "LECIP-10",
                scrolls: [
                    'WOODLANDS RD',
                    'WOODLANDS CROSSING',
                    'JB SENTRAL'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170X",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "170X",
                destination: "> KRANJI STN",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JB SENTRAL',
                    'WOODLANDS CROSSING',
                    'WOODLANDS RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170X",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    174: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BT BATOK E. AVE 3, 6",
                    "JLN JURONG KECHIL",
                    "DUNEARN RD",
                    "FARRER RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "NTH, STH BRIDGE RD",
                    "NTH BRIDGE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "EU TONG SEN ST",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "FARRER RD",
                    "BT TIMAH RD",
                    "JLN JURONG KECHIL",
                    "BT BATOK E. AVE 6, 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "174E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "174e",
                image: "express",
                destination: "EXPRESS 174e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174e",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "174e",
                image: "express",
                destination: "EXPRESS 174e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174e",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    175: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "175",
                destination: "> LOR 1 GEYLANG TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PASIR PANJANG RD",
                    'ALEXANDRA RD',
                    'JLN BUKIT MERAH',
                    'ORCHARD RD',
                    'BRAS BASAH RD',
                    'KALLANG BAHRU'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "175",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "175",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'KALLANG BAHRU',
                    'STAMFORD RD',
                    'ORCHARD BOULEVARD',
                    'JLN BUKIT MERAH',
                    'ALEXANDRA RD',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "175",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    179: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179",
                destination: "BOON LAY INT-NTU",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NORTH",
                    "LIEN YING CHOW DR",
                    "NANYANG DR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "179",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "179A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179A",
                destination: "BOON LAY INT-NANYANG DR",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "NANYANG DR",
                    "PIONEER RD NTH"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "179A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    181: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181",
                destination: "BOON LAY INT-JURONG W.",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    'JURONG WEST AVE 5',
                    'JURONG WEST AVE 3'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "181",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    182: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182",
                destination: "JOO KOON INT-TUAS STH",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TUAS STH AVE 3",
                    "JALAN AHMAD IBRAHIM",
                    "TUAS STH AVE 3",
                    "TUAS STH AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "182M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182M",
                destination: "JOO KOON INT-TUAS STH",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TUAS STH AVE 3',
                    "JALAN AHMAD IBRAHIM",
                    'TUAS STH AVE 3',
                    'TUAS STH AVE 9',
                    'TUAS STH AVE 5'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    185: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "185",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'PIONEER RD NTH',
                    'JURONG WEST AVE 5, 3',
                    'JURONG EAST AVE 1',
                    'CLEMENTI AVE 6',
                    "C'WEALTH AVE WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "185",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "185",
                destination: "> SOON LEE DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "C'WEALTH AVE WEST",
                    'CLEMENTI AVE 6',
                    'JURONG EAST AVE 1',
                    'JURONG WEST AVE 5, 3',
                    'PIONEER RD NTH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "185",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    186: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "186",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BALESTIER RD",
                    "FARRER RD",
                    "QUEENSWAY",
                    "ALEXANDRA RD",
                    "HAVELOCK RD",
                    "UPPER PICKERING ST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "186",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "186",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPPER PICKERING ST",
                    "HAVELOCK RD",
                    "ALEXANDRA RD",
                    "QUEENSWAY",
                    "FARRER RD",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "186",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    191: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "191",
                destination: "BUONA VISTA TER-PORTSDOWN RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'COMMONWEALTH AVE',
                    'NORTH BUONA VISTA RD',
                    'PORTSDOWN RD'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "191",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    192: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: "> TUAS TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 62",
                    "TUAS AVE 1",
                    'JALAN AHMAD IBRAHIM',
                    "TUAS AVE 12",
                    "PIONEER RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "192",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 1",
                    "JALAN AHMAD IBRAHIM",
                    "UPP JURONG RD",
                    "JURONG WEST ST 62"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "192",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    193: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "> TUAS TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST AVE 4",
                    "LOK YANG WAY",
                    "TUAS RD",
                    "TUAS AVE 5, 9",
                    "TUAS WEST DR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "193",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TUAS WEST DR",
                    "TUAS AVE 9, 5",
                    "TUAS RD",
                    "LOK YANG WAY",
                    "JURONG WEST AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "193",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    194: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "194",
                destination: "BOON LAY INT-JALAN AHMAD IBRAHIM",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "JALAN AHMAD IBRAHIM"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "194",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    195: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "195",
                destination: "MARINA CTR TER-C'WEALTH",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'RIVER VALLEY RD',
                    'TIONG BAHRU RD',
                    'LOWER DELTA RD',
                    'TELOK BLANGAH WAY',
                    'ALEXANDRA RD',
                    'COMMONWEALTH DR'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "195",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "195A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "195A",
                landmark: "T. BAHRU RD (T. BAHRU PLAZA)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "195A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    196: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "196",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MOUNTBATTEN RD",
                    "NICOLL HIGHWAY",
                    "JALAN BUKIT MERAH"
                    // 'BEDOK STH AVE 1',
                    // 'MARINE PARADE RD',
                    // 'MOUNTBATTEN RD',
                    // 'SHENTON WAY',
                    // 'JLN BUKIT MERAH',
                    // 'QUEENSWAY',
                    // 'DOVER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "196",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'DOVER RD',
                    'JLN BUKIT MERAH',
                    'QUEENSWAY',
                    'ROBINSON RD',
                    'MOUNTBATTEN RD',
                    'MARINE PARADE RD',
                    'BEDOK STH AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "196A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "196A",
                landmark: "SHENTON WAY (OPP MAS BLDG)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "196E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "196e",
                image: "express",
                destination: "EXPRESS 196e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196e",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "196e",
                image: "express",
                destination: "EXPRESS 196e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196e",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    197: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "197",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK STH AVE 1',
                    'MARINE PARADE RD',
                    'NTH, STH BRIDGE RD',
                    'JLN BUKIT MERAH',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "197",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "197",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'JLN BUKIT MERAH',
                    'EU TONG SEN ST',
                    'MARINE PARADE RD',
                    'BEDOK STH AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "197",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    198: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "198",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "QUEENSWAY",
                    "AYE",
                    "JURONG TOWN HALL RD",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "BOON LAY AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "198",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "198",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BOON LAY AVE',
                    'JURONG WEST AVE 1',
                    'JURONG EAST AVE 1',
                    'JURONG TOWN HALL RD',
                    'AYE',
                    'QUEENSWAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "198",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "198A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "198A",
                landmark: "JUR E. AVE 1 (OPP PARC OASIS)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "198A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    199: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "199",
                destination: "BOON LAY INT-NANYANG CRES",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'JALAN BAHAR',
                    'NANYANG AVE',
                    'NANYANG CRES',
                    'NANYANG DR'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "199",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    200: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'HOLLAND DR',
                    'COMMONWEALTH AVE',
                    'NTH BUONA VISTA RD',
                    'STH BUONA VISTA RD',
                    "PASIR PANJANG RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "200",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'PASIR PANJANG RD',
                    'STH BUONA VISTA RD',
                    'NTH BUONA VISTA RD',
                    'COMMONWEALTH AVE',
                    'HOLLAND DR'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "200",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "200A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "200A",
                terminateAt: "CLEMENTI RD",
                landmark: "(KENT RIDGE TER)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "200A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "201",
                destination: "KENT RIDGE TER-PANDAN GDNS",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "WEST COAST RD",
                    "C'WEALTH AVE WEST",
                    "WEST COAST RD",
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "201",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    222: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "222",
                destination: "BEDOK INT-CHAI CHEE DR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH ST 1',
                    'BEDOK NORTH AVE 3',
                    'BEDOK NORTH RD',
                    'CHAI CHEE RD',
                    'CHAI CHEE ST'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "222",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "222A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "222A",
                landmark: "NEW U. CHANGI RD (BEDOK STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "222A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "222B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "222B",
                landmark: "NEW U. CHANGI RD (BEDOK STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "222B",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "225G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "225G",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NORTH AVE 1',
                    'BEDOK NORTH ST 3',
                    'BEDOK NORTH AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "225G",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "225W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "225W",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NORTH AVE 2',
                    'BEDOK NORTH ST 3',
                    'BEDOK NORTH AVE 1',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "225W",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    228: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "228",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH ST 1",
                    "BEDOK NORTH AVE 3",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "228",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    229: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "229",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'CHAI CHEE RD',
                    'BEDOK SOUTH RD',
                    'BEDOK SOUTH AVE 3',
                    'UPP EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "229",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    231: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "231",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LOR 1 TOA PAYOH',
                    'LOR 4 TOA PAYOH',
                    'LOR 5 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "231",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    232: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "232",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'LOR 4 TOA PAYOH',
                    'LOR 2 TOA PAYOH',
                    'LOR 1 TOA PAYOH',
                    'LOR 7 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "232",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    235: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "235",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'TOA PAYOH EAST',
                    'LOR 5, 3, 2, 1 TOA PAYOH',
                    'TOA PAYOH RISE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "235",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    238: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "238",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'LOR 8 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "238",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    240: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN AHMAD IBRAHIM",
                    "KANG CHING RD",
                    "YUAN CHING RD",
                    "BOON LAY PLACE",
                    "BOON LAY WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "240",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "240A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "240A",
                landmark: "BOON LAY WAY (LAKESIDE STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "240A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "240M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240M",
                destination: "BOON LAY WY-JUR W.64",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "JURONG W ST 64"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "240M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    241: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "241",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NORTH",
                    "JURONG WEST ST 91"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "241",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "241A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "241A",
                landmark: "JURONG W. ST 63 (BLK 649A)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "241A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    242: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "242",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 72",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 4",
                    "JALAN BOON LAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "242",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "243G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "243G",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 81",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 62"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "243G",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "243W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "243W",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 62",
                    "JURONG WEST AVE 4",
                    "JURONG WEST AVE 5",
                    "JURONG WEST ST 81",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 64"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "243W",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    246: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "246",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'CHIN BEE DR',
                    'TAH CHING RD',
                    'BOON LAY DR',
                    "YUAN CHING RD",
                    'JALAN TUKANG'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "246",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    247: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "247",
                destination: "TUAS TER-TUAS BAY LINK",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TUAS AVE 7",
                    "TUAS CRES",
                    "TUAS STH AVE 5&4&7",
                    "TUAS STH AVE 3&9&8",
                    "TUAS LINK 4"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "247",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    248: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "248",
                destination: "TUAS TER-TUAS STH AVE 14",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 20",
                    "TUAS STH AVE 5",
                    "TUAS STH AVE 9",
                    "TUAS STH AVE 10"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "248",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    249: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "249",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN BOON LAY",
                    "JURONG PIER RD",
                    "TANJONG KLING RD",
                    "SHIPYARD RD",
                    "JALAN SAMULUN",
                    "SHIPYARD RD",
                    "TANJONG KLING RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "249",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    251: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "251",
                destination: "BOON LAY INT-SHIPYARD RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "BOON LAY WAY",
                    "PIONEER RD NTH",
                    "SHIPYARD RD",
                    "PIONEER RD NTH"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "251",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    252: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "252",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JOO KOON CIRCLE",
                    "ENTERPRISE RD",
                    "INTERNATIONAL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "252",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    253: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "253",
                destination: "JOO KOON INT-BENOI RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PIONEER RD",
                    "BENOI RD",
                    "PIONEER RD",
                    "BENOI SECTOR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "253",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    254: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "254",
                destination: "JOO KOON INT-TUAS AVE 11",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TUAS RD",
                    "TUAS BASIN LINK",
                    "BENOI RD",
                    "PIONEER RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "254",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    255: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "255",
                destination: "JOO KOON INT-GUL CRES",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "GUL AVE",
                    "GUL CIRCLE",
                    "GUL CRES"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "255",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    256: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "256",
                destination: "BOON LAY INT-JOO KOON",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 62",
                    "PIONEER RD NTH",
                    "JOO KOON CIRCLE",
                    "PIONEER RD NTH",
                    "JURONG WEST ST 62",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "256",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    257: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "257",
                destination: "JOO KOON INT-PIONEER SEC 2",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER SECT. 2",
                    "PIONEER SECT. 1",
                    "BENOI RD",
                    "GUL RD"
                ],
                scrollFont: "LECIP-6:4"
            }
        },
        rear: {
            renderType: "rearService",
            serviceNumber: "257",
            font: "LECIP-20:12",
            spacing: 2
        }
    },
    258: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "258",
                destination: "JOO KOON INT-JUR W. ST 64",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER RD NTH",
                    "JURONG WEST ST 61, 81, 75",
                    "JALAN AHMAD IBRAHIM"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "258",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    261: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "261",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 10',
                    'INDUSTRIAL PARK 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "261",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    262: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "262",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 8',
                    'ANG MO KIO AVE 1',
                    'ANG MO KIO ST 11',
                    'ANG MO KIO AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "262",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    265: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "265",
                destination: "AMK-AMK AVE 10",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 9',
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "265",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    268: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "268",
                destination: "> ANG MO KIO AVE 5",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 5'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "268",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "268A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "268A",
                landmark: "AMK AVE 5 (TECHPLACE 2)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "268A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "268B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "268B",
                landmark: "ANG MO KIO AVE 3 (AMK STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "268B",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "268C": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "268C",
                landmark: "AMK AVE 9 (AMK POLICE HQ)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "268C",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    269: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "269",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 5',
                    'ANG MO KIO ST 61',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 5',
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "269",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "269A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "269A",
                landmark: "AMK ST 61 (AMK MK/FC)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "269A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    272: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "272",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HENDERSON RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH RISE",
                    "TELOK BLANGAH CRES",
                    "HENDERSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "272",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    273: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "273",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HENDERSON RD",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH ST 32",
                    "TELOK BLANGAH DRIVE",
                    "HENDERSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "273",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    275: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "275",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "LOWER DELTA RD",
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD",
                    "JALAN BUKIT MERAH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "275",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    291: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "291",
                destination: "> TAMPINES ST 83 & 33",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES ST 83",
                    "TAMPINES ST 81",
                    "TAMPINES ST 21",
                    "TAMPINES ST 32",
                    "TAMPINES ST 21"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "291",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "291T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "291T",
                destination: "> TAMPINES ST 83 & 33",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES ST 83",
                    "TAMPINES ST 81",
                    "TAMPINES ST 21",
                    "TAMPINES ST 32",
                    "TAMPINES ST 21"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "291T",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    292: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "292",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 2",
                    "TAMPINES ST 22",
                    "TAMPINES AVE 2",
                    "TAMPINES ST 11"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "292",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    293: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "293",
                destination: "> TAMPINES ST 71&AVE 7",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES ST 45 & 42",
                    "TAMPINES AVE 4 & 3",
                    "TAMPINES AVE 8 & 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "293",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "293T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "293T",
                destination: "> TAMP ST 71&AVE 7",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES ST 45 & 42",
                    "TAMPINES AVE 4 & 3",
                    "TAMPINES AVE 8 & 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "293T",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    298: {//TODO SCROLL
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "298",
                destination: "TAMP CONCOURSE INT-TAMP ST 86",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'TAMPINES CENTRAL 1',
                    'TAMPINES AVE 3'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "298",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    315: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "315",
                destination: "> SERANGOON NTH AVE 5",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LORONG CHUAN',
                    'SERANGOON GARDEN WAY',
                    'SERANGOON NORTH AVE 1',
                    'SERANGOON NORTH AVE 4',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "315",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "315",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'SERANGOON NORTH 1',
                    'SERANGOON GARDEN WAY',
                    'LORONG CHUAN'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "315",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    317: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "317",
                destination: "> BERWICK DRIVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    'UPP SERANGOON RD',
                    'YIO CHU KANG LINK',
                    'SERANGOON GARDEN WAY',
                    'CHARTWELL DR',
                    'BURGHLEY DR'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "317",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "317",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAVISTOCK AVE',
                    'HEMSLEY AVE',
                    'KENSINGTON PARK RD',
                    'SERANGOON GARDEN WAY',
                    'YIO CHU KANG LINK',
                    'UPP SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "317",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    325: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "325",
                destination: "> HOUGANG AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UPP SERANGOON RD',
                    'HOUGANG AVE 2, 10, 8',
                    'HOUGANG ST 51',
                    'BUANGKOK GREEN'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "325",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    329: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "329",
                destination: "HOUGANG CTRL INT-BUANGKOK CRES",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "HOUGANG AVE 4,9",
                    "HOUGANG ST 91,93",
                    "BUANGKOK LINK"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "329",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    371: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "371",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COMPASSVALE RD",
                    "RIVERVALE DR",
                    "RIVERVALE CRES",
                    "COMPASSVALE ST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "371",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    372: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "372",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SENGKANG EAST WAY',
                    'ANCHORVALE DR',
                    'PUNGGOL DR',
                    'COMPASSVALE RD',
                    'ANCHORVALE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "372",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    374: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "374",
                destination: "> COMPASSVALE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SENGKANG EAST WAY",
                    "ANCHORVALE CRES",
                    "COMPASSVALE RD",
                    "SENGKANG EAST WAY",
                    "FERNVALE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "374",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    400: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "400",
                serviceFont: "LECIP-20:9",
                destination: "SHENTON WY TER-M.COASTAL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'MARINA BOULEVARD',
                    'MARINA GDNS DR',
                    'MARINA COSTAL DR',
                    'CENTRAL BOULEVARD',
                    'SHENTON WAY'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "400",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    401: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "401",
                destination: "BEDOK INT-FORT RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'EAST COAST PARK SVC RD',
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'OLD AIRPORT RD',
                    'FORT RD',
                    'EAST COAST PARK SVC RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "401",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    405: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405",
                destination: "BOON LAY INT-OLD CCK RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "OLD CHOA CHU KANG RD",
                    "JALAN BAHAR",
                    "JALAN BOON LAY",
                    "JURONG WEST CENTRAL 1"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "405",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "405M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405M",
                destination: "BOON LAY INT-OLD CCK RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "OLD CHOA CHU KANG RD",
                    "JALAN BAHAR",
                    "JALAN BOON LAY",
                    "JURONG WEST CENTRAL 1"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "405M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "410G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "410G",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BISHAN ST 21',
                    'UPP THOMSON RD',
                    'SIN MING AVE',
                    'BISHAN ST 22'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "410G",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "410W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "410W",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN ST 22",
                    "SIN MING AVE",
                    "UPPER THOMSON RD",
                    "SHUNFU RD",
                    "BISHAN ST 21",
                    "BISHAN ST 12",
                    "BISHAN ST 14"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "410W",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    502: {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "502",
                image: "express",
                destination: "EXPRESS 502"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "502",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "502",
                image: "express",
                destination: "EXPRESS 502"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "502",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "502A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "502A",
                landmark: "CTRL BLVD (DOWNTOWN STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "502A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    506: {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "506",
                image: "express",
                destination: "EXPRESS 506"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "506",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "506",
                image: "express",
                destination: "EXPRESS 506"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "506",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    513: {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "513",
                image: "express",
                destination: "EXPRESS 513"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "513",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "513",
                image: "express",
                destination: "EXPRESS 513"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "513",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    601: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-1',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-1",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    // 602: {
    //     1: {
    //         front: {
    //             renderType: 'on-demand',
    //             serviceNumber: 'JK-2',
    //             area: '(JOO KOON)'
    //         },
    //         rear: {
    //             renderType: "rearService",
    //             serviceNumber: "JK-2",
    //             font: "LECIP-14:6",
    //             spacing: 2
    //         }
    //     }
    // },
    603: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-3',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-3",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    604: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-4',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-4",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    605: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-5',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-5",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    606: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-6',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-6",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    607: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-7',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-7",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    608: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-8',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-8",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    609: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-9',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-9",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    "609D": { // kept for historic purposes
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "DTL",
                destination: "> CHINATOWN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BUKIT PANJANG",
                    "CASHEW",
                    "HILLVIEW",
                    "BEAUTY WORLD",
                    "KING ALBERT PARK",
                    "SIXTH AVENUE",
                    "TAN KAH KEE",
                    "BOTANIC GARDENS",
                    "STEVENS",
                    "NEWTON",
                    "LITTLE INDIA",
                    "ROCHOR",
                    "BUGIS",
                    "PROMENADE",
                    "BAYFRONT",
                    "DOWNTOWN",
                    "TELOK AYER"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "DTL",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "DTL",
                destination: "> BUKIT PANJANG",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "CHINATOWN",
                    "TELOK AYER",
                    "DOWNTOWN",
                    "BAYFRONT",
                    "PROMENADE",
                    "BUGIS",
                    "ROCHOR",
                    "LITTLE INDIA",
                    "NEWTON",
                    "STEVENS",
                    "BOTANIC GARDENS",
                    "TAN KAH KEE",
                    "SIXTH AVENUE",
                    "KING ALBERT PARK",
                    "BEAUTY WORLD",
                    "HILLVIEW",
                    "CASHEW"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "DTL",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    610: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-10',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-10",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    611: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-11',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-11",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    // 612: {
    //     1: {
    //         front: {
    //             renderType: 'on-demand',
    //             serviceNumber: 'JK-12',
    //             area: '(JOO KOON)'
    //         },
    //         rear: {
    //             renderType: "rearService",
    //             serviceNumber: "JK-12",
    //             font: "LECIP-14:6",
    //             spacing: 1
    //         }
    //     }
    // },
    613: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-13',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-13",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    "660": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "660",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "660",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "660",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "660",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "665": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "665",
                branding: "CITY DIRECT",
                font: "LECIP-20:12",
                spacing: 1
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "665",
                branding: "CITY DIRECT",
                font: "LECIP-20:12",
                spacing: 1
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },

    702: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 2",
                topFont: "LECIP-7:5",

                bottom: "JOO KOON - BUONA VISTA",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "JKN-",
                topFont: "LECIP-7:5",

                bottom: "BVN",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 2",
                topFont: "LECIP-7:5",

                bottom: "BUONA VISTA - JOO KOON",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "BNV-",
                topFont: "LECIP-7:5",

                bottom: "JKN",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    705: {
        1: {
            front: {
                renderType: "twoline",
                top: "EXPRESS 5",
                topFont: "LECIP-7:5",

                bottom: "BOON LAY - OUTRAM PARK",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "BNL-",
                topFont: "LECIP-7:5",

                bottom: "OTP",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "EXPRESS 5",
                topFont: "LECIP-7:5",

                bottom: "OUTRAM PARK - BOON LAY",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "OTP-",
                topFont: "LECIP-7:5",

                bottom: "BNL",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    706: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 6",
                topFont: "LECIP-7:5",

                bottom: "RAFFLES PLACE - PAYA LEBAR",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "RFP-",
                topFont: "LECIP-7:5",

                bottom: "PYL",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 6",
                topFont: "LECIP-7:5",

                bottom: "PAYA LEBAR - RAFFLES PLACE",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "PYL-",
                topFont: "LECIP-7:5",

                bottom: "RFP",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    707: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 7",
                topFont: "LECIP-7:5",

                bottom: "PAYA LEBAR - PASIR RIS",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "PYL-",
                topFont: "LECIP-7:5",

                bottom: "PSR",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 7",
                topFont: "LECIP-7:5",

                bottom: "PASIR RIS - PAYA LEBAR",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "PSR-",
                topFont: "LECIP-7:5",

                bottom: "PYL",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    713: {
        1: {
            front: {
                renderType: "twoline",
                top: "EXPRESS 13",
                topFont: "LECIP-7:5",

                bottom: "BEDOK - BEDOK NORTH",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "BDK-",
                topFont: "LECIP-7:5",

                bottom: "BDN",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "EXPRESS 13",
                topFont: "LECIP-7:5",

                bottom: "BEDOK NORTH - BEDOK",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "BDN-",
                topFont: "LECIP-7:5",

                bottom: "BDK",
                bottomFont: "LECIP-7:5"
            }
        }
    },

    800: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "800",
                destination: "YISHUN INT-SEMBAWANG RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 7",
                    "SEMBAWANG RD",
                    "YISHUN ST 71",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "800",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    803: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "803",
                destination: "YISHUN INT-YISHUN AVE 6",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 6"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "803",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    804: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "804",
                destination: "YISHUN INT-YISHUN AVE 11",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 2",
                    "YISHUN RING RD",
                    "YISHUN ST 41",
                    "YISHUN AVE 1",
                    "YISHUN AVE 11",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "804",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    805: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "805",
                destination: "YISHUN INT-YISHUN AVE 1",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 2",
                    "YISHUN AVE 4",
                    "YISHUN AVE 1",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "805",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    806: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "806",
                destination: "YISHUN INT-YISHUN AVE 6",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN CENTRAL",
                    "YISHUN AVE 11",
                    "YISHUN AVE 6",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "806",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    807: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "807",
                destination: "YISHUN INT-YISHUN ST 71",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN RING RD",
                    "YISHUN AVE 9",
                    "YISHUN RING RD",
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "YISHUN ST 71"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "807",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "807A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "807A",
                landmark: "YISHUN RING RD(OPP BLK798)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "807A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    811: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "811",
                destination: "> YISHUN AVE 5&1",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN AVE 9,6,7",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5,2",
                    "YISHUN RING RD",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "811",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "811A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "811A",
                landmark: "YISHUN AVE 5 (BLK 151)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "811A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "811T": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "811T",
                landmark: "YISHUN INT"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "811T",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    812: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "812",
                destination: "> YISHUN AVE 4&3",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN ST 61",
                    "YISHUN AVE 2",
                    "YISHUN RING RD",
                    "YISHUN CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "812",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "812T": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "812T",
                landmark: "YISHUN INT"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "812T",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    814: {// TODO: SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT8",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT8",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT8",
                destination: "> ANG MO KIO AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT8",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    815: {// TODO: SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT18",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT18",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT18",
                destination: "> BEDOK NORTH AVE 3",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT18", // font even exists??
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    816: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT28",
                destination: "> NEW BRIDGE ROAD TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "CLEMENTI AVE 4",
                    "C'WEALTH AVE WEST",
                    "NEW BRIDGE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT28",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT28",
                destination: "> CLEMENTI AVE 4",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "EU TONG SEN ST",
                    "C'WEALTH AVE WEST",
                    "CLEMENTI AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT28",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "850E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "850E",
                destination: "> SHENTON WAY",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BRAS BASAH RD",
                    "COLLYER QUAY",
                    "RAFFLES QUAY",
                    "VICTORIA ST", // ?
                    "SHENTON WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "850E",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "850E",
                destination: "> YISHUN RING RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "FULLERTON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "850E",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TIONG BAHRU RD",
                    'EU TONG SEN ST',
                    "VICTORIA ST",
                    "THOMSON RD",
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 6",
                    "LENTOR AVE",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'YISHUN AVE 2',
                    'LENTOR AVE',
                    'ANG MO KIO AVE 6',
                    'ANG MO KIO AVE 5',
                    'MARYMOUNT RD',
                    'THOMSON RD',
                    'VICTORIA ST',
                    'NEW BRIDGE RD',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "851E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "851e",
                image: "express",
                destination: "EXPRESS 851e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851e",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "851e",
                image: "express",
                destination: "EXPRESS 851e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851e",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    852: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "852",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT BATOK E. AVE 6",
                    "UPP BUKIT TIMAH RD",
                    "DUNEARN RD",
                    "LORNIE RD",
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 6",
                    "LENTOR AVE",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "852",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "852",
                destination: "> BUKIT BATOK INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN AVE 2",
                    "LENTOR AVE",
                    "ANG MO KIO AVE 6",
                    "LORNIE RD",
                    "BUKIT TIMAH RD",
                    "UPP BUKIT TIMAH RD",
                    "BUKIT BATOK E. AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "852",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    860: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN RING RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "860",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPPER THOMSON RD",
                    "ANG MO KIO AVE 5",
                    "YISHUN RING RD",
                    "YISHUN AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "860",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    901: {
        1: {
            front: {
                renderType: "message",
                text: "EB 1",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB1",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    902: {
        1: {
            front: {
                renderType: "message",
                text: "EB 2",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB2",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    903: {
        1: {
            front: {
                renderType: "message",
                text: "EB 3",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB3",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    904: {
        1: {
            front: {
                renderType: "message",
                text: "EB 4",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB4",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    905: {
        1: {
            front: {
                renderType: "message",
                text: "EB 5",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB5",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    906: {
        1: {
            front: {
                renderType: "message",
                text: "EB 6",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB6",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    907: {
        1: {
            front: {
                renderType: "message",
                text: "EB 7",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB7",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    908: {
        1: {
            front: {
                renderType: "message",
                text: "EB 8",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB8",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    909: {
        1: {
            front: {
                renderType: "message",
                text: "EB 9",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB9",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    910: {
        1: {
            front: {
                renderType: "message",
                text: "EB 10",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB10",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    911: {
        1: {
            front: {
                renderType: "message",
                text: "EB 11",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB11",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    912: {
        1: {
            front: {
                renderType: "message",
                text: "EB 12",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB12",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    913: {
        1: {
            front: {
                renderType: "message",
                text: "EB 13",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB13",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    914: {
        1: {
            front: {
                renderType: "message",
                text: "EB 14",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB14",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    915: {
        1: {
            front: {
                renderType: "message",
                text: "EB 15",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB15",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    921: {
        1: {
            front: {
                renderType: "message",
                text: "EB 21",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB21",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    922: {
        1: {
            front: {
                renderType: "message",
                text: "EB 22",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB22",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    926: {
        1: {
            front: {
                renderType: "message",
                text: "EB 26",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB26",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    928: {
        1: {
            front: {
                renderType: "message",
                text: "EB 28",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB28",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    931: {
        1: {
            front: {
                renderType: "message",
                text: "EB 31",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB31",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    936: {
        1: {
            front: {
                renderType: "message",
                text: "EB 36",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB36",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    937: {
        1: {
            front: {
                renderType: "message",
                text: "EB 37",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB37",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    939: {
        1: {
            front: {
                renderType: "message",
                text: "EB 39",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB39",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    941: {
        1: {
            front: {
                renderType: "message",
                text: "EB 41",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB41",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    942: {
        1: {
            front: {
                renderType: "message",
                text: "EB 42",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB42",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    943: {
        1: {
            front: {
                renderType: "message",
                text: "EB 43",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB43",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    944: {
        1: {
            front: {
                renderType: "message",
                text: "EB 44",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB44",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    948: {
        1: {
            front: {
                renderType: "message",
                text: "EB 48",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB48",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    951: {
        1: {
            front: {
                renderType: "message",
                text: "EB 51",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB51",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    988: {
        1: {
            front: {
                renderType: "message",
                text: "EB 88",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB88",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'twoline',
                top: "OFF",
                topFont: "LECIP-7:4",

                bottom: "SERVICE",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "logo",
                text: "SBS TRANSIT",
                image: "logo"
            },
            rear: {
                renderType: 'twoline',
                top: "SBS",
                topFont: "LECIP-7:4",

                bottom: "TRANSIT",
                bottomFont: "LECIP-7:4"
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
            rear: {
                renderType: 'twoline',
                top: "FREE",
                topFont: "LECIP-7:4", // check font

                bottom: "SHUTTLE",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'twoline',
                top: "ON",
                topFont: "LECIP-7:5",

                bottom: "TEST",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'twoline',
                top: "TRAINING",
                topFont: "LECIP-7:4",

                bottom: "BUS",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    7777: {
        1: {
            front: {
                renderType: "message",
                text: "FREE BRIDGING BUS",
                font: "LECIP-20:9",
                spacing: 2
            } // check
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "VER. 09JUN19-DD",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
}

EDSImages.SBST = {
    logo: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ],
    express: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
        [ 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ],
    fastForward: [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0 ]
    ]
}
