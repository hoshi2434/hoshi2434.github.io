EDSFormats.GASG = { //This has Alignment issues that will be fixed when knowledge is gained.
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Hanover-19:11",
            spacing: {
                $$cond: {
                    "$spacing === undefined" : 3,
                    "else": "$spacing"
                }
            }
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: {
                    $$cond: {
                        "$destinationFont |== 'Hanover-10'": 10,
                        "else": 2
                    }
                }
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: {
                $$cond: {
                    "$destinationFont |== 'Hanover-10'": 2,
                    "$destinationFont |== 'Hanover-8'": 1,
                    "$destinationFont |== 'Hanover-7:3'": 1,
                    "else": 1
                }
            }
        },
        scroll: {
            align: "centre-x,bottom",
            scrolls: "$scrolls",
            margin: {
                right: {
                    $$cond: {
                        "$scrollFont |== 'Hanover-7:5'": 0,
                        "else": 2
                    }
                }
            },
            rotate: true,
            rotateSpeed: 3000,

            text: "$scrolls",
            font: "$scrollFont",
            spacing: 1
        },

        text: "$serviceNumber+' '+$destination+'\n'+'            '+$serviceNumber+'00000'" //GASG Format?
    },
    logo: {
        logo: {
            align: "centre-x",
            image: "$image"
        },

        text: "$text+'\n'+'            '+'22220000'"
    },
    logoSvc: {
        logo: {
            align: "left",
            image: "$image",
        },
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Hanover-19:11",
            spacing: 2
        },

        text: "$serviceNumber+' '+$destination+'\n'+'            '+$serviceNumber+'0000000000'"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text+'\n'+'            '+'______'"
    },
    brandedSvc: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Hanover-19:11",
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
            font: "Hanover-19:11;Space-Width=1",
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

EDSData.GASG = { //Add Spacing 3 spacing for Scroll
    2: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "KAMPONG BAHRU",
                destinationFont: "Hanover-10",
                scrolls: [
                "CHANGI VILLAGE RD   ",
                "LOYANG AVE   ",
                "LOYANG WAY   ",
                "UPP CHANGI RD NTH/EAST   ",
                "UPP CHANGI LINK   ",
                "UPP CHANGI RD   ",
                "BEDOK RD   ",
                "NEW UPP CHANGI RD   ",
                "CHANGI RD   ",
                "GEYLANG RD   ",
                "KALLANG RD   ",
                "VICTORIA ST   ",
                "HILL ST   ",
                "NEW BRIDGE RD   ",
                "KG BAHRU RD   ",
                "SPOONER RD   "
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "CHANGI VILLAGE",
                destinationFont: "Hanover-10",
                scrolls: [
                "SPOONER RD  ",
                "KG BAHRU RD   ",
                "EU TONG SEN ST   ",
                "HILL ST   ",
                "VICTORIA ST   ",
                "KALLANG RD   ",
                "SIMS AVE   ",
                "SIMS AVE EAST   ",
                "NEW UPP CHANGI RD   ",
                "BEDOK RD   ",
                "UPP CHANGI RD   ",
                "UPP CHANGI LK   ",
                "UPP CHANGI RD EAST/NTH   ",
                "LOYANG WAY   ",
                "LOYANG AVE   ",
                "CHANGI VILLAGE RD   "
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "3",
                destination: "TAMPINES",
                destinationFont: "Hanover-10",
                scrolls: [
                "PUNGGOL PL   ",
                "PUNGGOL CTRL   ",
                "PUNGGOL EAST   ",
                "PUNGGOL FIELD   ",
                "PUNGGOL RD   ",
                "TPE   ",
                "PASIR RIS DR 12/1/10   ",
                "PASIR RIS ST 71   ",
                "ELIAS RD   ",
                "PASIR RIS DR 1/8/3/4   ",
                "PASIR RIS ST 21   ",
                "PASIR RIS DR 1   ",
                "LOYANG AVE   ",
                "TAMPINES AVE 7/2   ",
                "TAMPINES ST 23/21   ",
                "TAMPINES AVE 4/9   ",
                "TAMPINES CTRL 1   "
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "3",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                "TAMPINES CTRL 1   ",
                "TAMPINES AVE 5/4   ",
                "TAMPINES ST 21   ",
                "TAMPINES AVE 2/7   ",
                "LOYANG AVE   ",
                "PASIR RIS DR 1   ",
                "PASIR RIS ST 21   ",
                "PASIR RIS DR 4/3/8/1   ",
                "ELIAS RD   ",
                "PASIR RIS ST 71   ",
                "PASIR RIS DR 10/1/12   ",
                "TPE   ",
                "PUNGGOL RD   ",
                "PUNGGOL FIELD   ",
                "PUNGGOL EAST   ",
                "PUNGGOL CTRL   ",
                "PUNGGOL EAST   "
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    62: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: "SIMS AVE",
                destinationFont: "Hanover-10",
                scrolls: [
                    "BISHAN RD   ",
                    "SERANGOON CENTRAL   ",
                    "LORONG AH SOO   ",
                    "HOUGANG AVE 1   ",
                    "PASIR RIS DR 1   ",
                    "JUST TESTING   "
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                "ALJUNIED RD/MRT",
                "MACPHERSON RD",
                "UPP PAYA LEBAR RD",
                "LORONG AH SOO",
                "HOUGANG AVE 1",
                "TAMPINES RD   ",
                "HOUGANG AVE 3/2/10/6/8",
                "UPP SERANGOON RD",
                "SENGKANG EAST DR",
                "PUNGGOL FIELD",
                "PUNGGOL PL"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    43: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "UPPER EAST COAST",
                destinationFont: "Hanover-10",
                scrolls: [
                "PUNGGOL PL   ",
                "PUNGGOL CTRL   ",
                "PUNGGOL WAY   ",
                "SENGKANG EAST RD   ",
                "SENGKANG CTRL   ",
                "BUANGKOK DR   ",
                "BUANGKOK GREEN/MRT   ",
                "YIO CHU KANG RD   ",
                "YIO CHU KANG LK   ",
                "SERANGOON MRT/CTRL   ",
                "UPP SERANGOON RD   ",
                "PAYA LEBAR RD   ",
                "TANJONG KATONG RD   ",
                "AMBER RD   ",
                "MARINE PARADE RD   ",
                "BEDOK STH AVE 1   ",
                "UPP EAST COAST RD   "
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
                font: "Hanover-19:11",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "PUNGGOL",
                destinationFont: "Hanover-10",
                scrolls: [
                "UPP EAST COAST RD   ",
                "BEDOK SOUTH AVE 1   ",
                "MARINE PARADE RD   ",
                "AMBER RD   ",
                "GEYLANG RD   ",
                "PAYA LEBAR RD   ",
                "UPP PAYA LEBAR RD   ",
                "UPP SERANGOON RD   ",
                "SERANGOON MRT/CTRL   ",
                "YIO CHU KANG LK   ",
                "YIO CHU KANG RD   ",
                "BUANGKOK GREEN/MRT   ",
                "BUANGKOK DR   ",
                "SENGKANG CTRL   ",
                "SENGKANG EAST RD   ",
                "PUNGGOL WAY   ",
                "PUNGGOL CTRL   ",
                "PUNGGOL PL   "
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
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
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "logo",
                text: "Go-Ahead SG",
                image: "logo"
            }
        }
    },
    6969: {
        1: {
            front: {
                renderType: "message",
                text: "OUT OF SERVICE",
                font: "Hanover-19:11",
                spacing: 2
            }
        }
    }
}

EDSImages.GASG = {
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
    blank: [[]]
}
