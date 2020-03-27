EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LAWO-26:9",
            spacing: 2
        },
        scroll: {
            align: "left,top",
            margin: {
                top: 0,
                left: 0
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
                bottom: 2,
                left: 0
            },
            text: "$destination",
            spacing: 2
        },

        text: "$destination"
    },
    Render: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LAWO-26:14",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 2,
                right: "width(serviceNumber) + len(7)"
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 14,
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

                matrixPrimitives.setStrokeColour(00000000);
                matrixPrimitives.strokeRectangle(matrix, 0, 0, 43, 10);

                let font = Font.fromNameString("Mobitec-7:7");
                let serviceNumberObj = new TextObject(data.serviceNumber, font, null, 1);

                let textWidth;
                try {
                    textWidth = serviceNumberObj.takeMeasure().width;
                } catch (e) {
                    textWidth = Infinity;
                }

                if (textWidth >= 40) {
                    font = Font.fromNameString("Mobitec-7:4");
                    serviceNumberObj.font = font;
                    textWidth = serviceNumberObj.takeMeasure().width;
                }

                let textPosition = Math.round(42 / 2 - textWidth / 2);
                serviceNumberObj.position = new Position(textPosition, 1);

                matrix.drawText(serviceNumberObj, 00000000);

                function drawNextStop() {
                    let bottomRowNum = scrollNum % 3;

                    let texts = [
                        [new TextObject("NEXT>>", Font.fromNameString("Mobitec-7:7"), new Position(1, 11), 1), 00000000],
                        [new TextObject("STOP>>", Font.fromNameString("Mobitec-7:7"), new Position(1, 11), 1), 00000000],
                        [new TextObject("ARR>>", Font.fromNameString("Mobitec-7:7"), new Position(3, 11), 1), 00000000],
                    ];

                    matrix.drawText(texts[bottomRowNum][0], texts[bottomRowNum][1]);
                }

                let {destination} = data;
                let currentScroll = Math.floor(scrollNum / 3);

                if (data.secondDestination) {
                    if (currentScroll > data.secondDestination.changeIndex)
                        destination = data.secondDestination.name;
                }
                matrix.drawText(new TextObject(destination, Font.fromNameString("Mobitec-7:7"), new Position(45, 1), 1), 00000000);

                // Possibly make scrolls query TSG site? Not great for offline use tho
                let currentScrollObj = new TextObject(data.scrolls[currentScroll], Font.fromNameString("Mobitec-7:7"), new Position(45, 11), 1);
                let measure = currentScrollObj.takeMeasure();
                let scrollWidth = measure.width,
                    scrollHeight = measure.height;

                if (scrollWidth === 0) return;
                drawNextStop();

                if (scrollWidth > matrix.width - 45) { // scrolling text
                    hold = true;

                    let frameCount = scrollWidth + matrix.width - 7;
                    let timeBetweenFrames = 1;

                    let frameNum = 0;
                    __scrollInterval__ = setInterval(() => {
                        if (frameNum == frameCount) {
                            clearInterval(__scrollInterval__);
                            hold = false;
                            return;
                        }
                        matrix.clearRectangle(0, 17 + (0 - scrollHeight), matrix.width, 17 + scrollHeight);

                        currentScrollObj.position.x = matrix.width - frameNum;

                        matrix.drawText(currentScrollObj, 00000000);
                        matrix.clearRectangle(0, 17 + (0 - scrollHeight), 45, 17 + scrollHeight);
                        drawNextStop();

                        matrixPrimitives.setStrokeColour(00000000);
                        matrixPrimitives.strokeRectangle(matrix, 0, 0, 43, 10);

                        frameNum++;
                    }, timeBetweenFrames);
                } else
                    matrix.drawText(currentScrollObj, 00000000);

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


EDSData.SBST = { 
    0000: {
        1: {
            front: {
                renderType: "Render",
                serviceNumber: "",
                destination: {
                    text: "LTG EMEA Matrix Renderer",
                    font: "Mobitec-10:7"
                },
                scrolls: [
                "A1 R200x26"
                ],
                scrollFont: "Mobitec-10:7"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "",
                scrolls: [
                    "LTG EMEA Matrix Renderer                     A7 R144x19"
                ]
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "LAWO-26:14",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "OFF SERVICE",
                scrolls: [" "]
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "message",
                text: "SBS TRANSIT LOGO",
                font: "LAWO-26:9",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "SBS TRANSIT",
                scrolls: [" "]
            }
        }
    },
    3333: {
        1: {
            front: {
                renderType: "message",
                text: "FREE SHUTTLE",
                font: "LAWO-26:14",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "FREE SHUTTLE",
                scrolls: [" "]
            }
        }
    },
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "LAWO-26:14",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "ON TEST",
                scrolls: [" "]
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "LAWO-26:14",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "TRAINING BUS",
                scrolls: [" "]
            }
        }
    },
    7777: {
        1: {
            front: {
                renderType: "message",
                text: "FREE BRIDGING BUS",
                font: "LAWO-26:9",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "FBB",
                destination: "FREE BRIDGING BUS",
                scrolls: [" "]
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "CITARO2 150320",
                font: "LAWO-26:9",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "31 DEC 2019",
                scrolls: [" "]
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
                    font: "LAWO-11"
                },
                scrolls: [
                "COMPASSVALE RD",
                "HOUGANG AVE 10, 5, 7, 3",
                "EUNOS LINK",
                "KAKI BUKIT AVE 1",
                "BEDOK NTH RD"
                ],
                scrollFont: "LAWO-11"
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
                    font: "LAWO-11"
                },
                scrolls: [
                    "EUNOS LINK"
                ],
                scrollFont: "LAWO-11"
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
                    font: "LAWO-11"
                },
                scrolls: [
                    "BUKIT MERAH CTRL",
                    "HENDERSON RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH RISE",
                    "LOWER DELTA RD",
                    "TELOK BLANGAH CRES"
                ],
                scrollFont: "LAWO-11"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "272",
                destination: "BT MERAH INT",
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
