let __paintInterval__ = 0;
let __scrollInterval__ = 0;

EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-19",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 0,
                right: "width(serviceNumber) + len(7)"
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 12,
                right: "width(serviceNumber) + len(7)"
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },

    pids: {
        __dynamic__: (matrix, data) => {
            let hold = false;
            function paint() {
                if (hold) return;

                matrix.clearRectangle(0, 0, matrix.width, matrix.height);

                matrixPrimitives.setStrokeColour(0x84e76e);
                matrixPrimitives.strokeRectangle(matrix, 0, 0, 32, 16);

                let font = Font.fromNameString("LECIP-PIDS-13:7");
                let serviceNumberObj = new TextObject(data.serviceNumber, font, null, 1);

                let textWidth;
                try {
                    textWidth = serviceNumberObj.takeMeasure().width;
                } catch (e) {
                    textWidth = Infinity;
                }

                if (textWidth >= 32) {
                    font = Font.fromNameString("LECIP-PIDS-13:5");
                    serviceNumberObj.font = font;
                    textWidth = serviceNumberObj.takeMeasure().width;
                }

                let textPosition = Math.round(32 / 2 - textWidth / 2);
                serviceNumberObj.position = new Position(textPosition, 1);

                matrix.drawText(serviceNumberObj, 0xffffff);

                function drawNextStop() {
                    let bottomRowNum = scrollNum % 3;

                    let texts = [
                        [new TextObject("NEXT>>", Font.fromNameString("LECIP-PIDS-13:5"), new Position(1, 17), 1), 0xffffff],
                        [new TextObject("STOP>>", Font.fromNameString("LECIP-PIDS-13:5"), new Position(1, 17), 1), 0xe35f57],
                        [new TextObject("Arr>>", Font.fromNameString("LECIP-PIDS-13:5"), new Position(4, 17), 1), 0xeae44a],
                        [new TextObject(" ", Font.fromNameString("LECIP-PIDS-13:5"), new Position(1, 17), 1), 0xffffff],
                    ];

                    matrix.drawText(texts[bottomRowNum][0], texts[bottomRowNum][1]);
                }

                let {destination} = data;
                let currentScroll = Math.floor(scrollNum / 3);

                if (data.secondDestination) {
                    if (currentScroll > data.secondDestination.changeIndex)
                        destination = data.secondDestination.name;
                }
                matrix.drawText(new TextObject(destination, Font.fromNameString("LECIP-PIDS-13:5"), new Position(33, 1), 1), 0xffffff);

                // Possibly make scrolls query TSG site? Not great for offline use tho
                let currentScrollObj = new TextObject(data.scrolls[currentScroll], Font.fromNameString("LECIP-PIDS-13:5"), new Position(33, 17), 1);
                let measure = currentScrollObj.takeMeasure();
                let scrollWidth = measure.width,
                    scrollHeight = measure.height;

                if (scrollWidth === 0) return;
                drawNextStop();

                if (scrollWidth > matrix.width - 34) { // scrolling text
                    hold = true;

                    let frameCount = scrollWidth + matrix.width - 32;
                    let timeBetweenFrames = 0;

                    let frameNum = 0;
                    __scrollInterval__ = setInterval(() => {
                        if (frameNum == frameCount) {
                            clearInterval(__scrollInterval__);
                            hold = false;
                            return;
                        }
                        matrix.clearRectangle(0, 17 + (13 - scrollHeight), matrix.width, 17 + scrollHeight);

                        currentScrollObj.position.x = matrix.width - frameNum;

                        matrix.drawText(currentScrollObj, 0xffffff);
                        matrix.clearRectangle(0, 17 + (13 - scrollHeight), 33, 17 + scrollHeight);
                        drawNextStop();

                        matrixPrimitives.setStrokeColour(0x84e76e);
                        matrixPrimitives.strokeRectangle(matrix, 0, 0, 32, 16);

                        frameNum++;
                    }, timeBetweenFrames);
                } else
                    matrix.drawText(currentScrollObj, 0xffffff);

                scrollNum++;
                if (scrollNum >= data.scrolls.length * 3)
                    scrollNum = 0;
            }

            let scrollNum = 0;
            clearInterval(__paintInterval__);
            clearInterval(__scrollInterval__);

            __paintInterval__ = setInterval(paint, 1000);

            paint();
        }
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

EDSData.SMRT = {
    3333: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "LECIP-20:9",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "Training Bus",
                scrolls: [" "]
            }
        }
    },
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "LECIP-20:9",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "On Test",
                scrolls: [" "]
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "ON CHARTER",
                font: "LECIP-10",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "CHARTERED",
                scrolls: [" "]
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: {
                    text: "SORRY!",
                    font: "LECIP-8"
                },
                scrolls: [
                "NOT IN SERVICE"
                ],
                scrollFont: "LECIP-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "Sorry!",
                destination: "Not in Service",
                scrolls: [
                    " "
                ]
            }
        }
    },
    621: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: {
                    text: "SIMS AVE",
                    font: "LECIP-11"
                },
                scrolls: [
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
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "62",
                destination: "SIMS AVE",
                secondDestination: {
                    name: "PUNGGOL T. INT",
                    changeIndex: 0
                },
                scrolls: [
                    " ",
                    " "
                ]
            }
        }
    },
    3821: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "382",
                destination: {
                    text: "PUNGGOL INT via",
                    font: "LECIP-11"
                },
                scrolls: [
                "PUNGGOL PLACE",
                "PUNGGOL FIELD",
                "SUMANG CRESCENT",
                "SUMANG LANE",
                "SUMANG WALK",
                "SUMANG LINK",
                "SENTUL CRESCENT",
                "PUNGGOL PLACE"
                ],
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "382G",
                destination: "SUMANG LANE",
                secondDestination: {
                    name: "PUNGGOL T. INT",
                    changeIndex: 0
                },
                scrolls: [
                    " ",
                    " "
                ]
            }
        }
    },
    3861: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "386",
                destination: {
                    text: "PUNGGOL INT",
                    font: "LECIP-11"
                },
                scrolls: [
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
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "386",
                destination: "PUNGGOL CTRL",
                secondDestination: {
                    name: "PUNGGOL INT",
                    changeIndex: 2
                },
                scrolls: [
                    " ",
                    " ",
                    " "
                ]
            }
        }
    },
    433: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43M",
                destination: {
                    text: "SERANGOON MRT",
                    font: "LECIP-11"
                },
                scrolls: [
                "PUNGGOL PL",
                "PUNGGOL CTRL",
                "PUNGGOL WAY",
                "SENGKANG EAST RD",
                "SENGKANG CTRL",
                "BUANGKOK MRT/DR",
                "BUANGKOK GREEN",
                "YIO CHU KANG RD",
                "YIO CHU KANG LK",
                "SERANGOON CTRL/MRT"
                ],
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "43M",
                destination: "SERANGOON MRT",
                secondDestination: {
                    name: "PUNGGOL TEMP INT",
                    changeIndex: 2
                },
                scrolls: [
                    " "
                ]
            }
        }
    },
    6661: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "666",
                destination: {
                    text: "MARINA BLVD",
                    font: "LECIP-11"
                },
                scrolls: [
                    "CITY DIRECT",
                    "PUNGGOL DRIVE",
                    "TO",
                    "MARINA BLVD"
                ],
                scrollFont: "LECIP-7:5"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "666",
                destination: "MARINA BLVD",
                secondDestination: {
                    name: "PUNGGOL DR",
                    changeIndex: 0
                },
                scrolls: [
                    " ",
                    " "
                ]
            }
        }
    },
    62641: {
    	1: {
        front: {
            renderType: "standardService",
            serviceNumber: "6264",
            destination: {
                text: "BUSGAG TOUR",
                font: "ArialBold-8"
            },
            scrolls: [
                "KOVAN HUB ",
                "PUNGGOL AND YISHUN STN...",
                "...TAXI STAND",
                "EXPRESS",
                "PHOTOSHOOT",
                "EXPRESS",
                "EXPRESS",
                "HARBOURFRONT MRT"
            ],
            scrollFont: "ArialBold-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "6264",
                destination: "BUSGAG PC6264K TOUR",
                scrolls: [
                    " "
                ]
            }
        },
    },
    62642: {
    	1: {
        front: {
            renderType: "standardService",
            serviceNumber: "6264",
            destination: {
                text: "OFF SERVICE",
                font: "ArialBold-8"
            },
            scrolls: [
                "THANK YOU FOR COMING"
            ],
            scrollFont: "ArialBold-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "OFF",
                destination: "TOMPANG OFF SERVICE",
                scrolls: [
                    " "
                ]
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
