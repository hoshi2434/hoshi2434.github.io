EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Gorba-26:11",
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
    Glitch: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Gorba-26:11",
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
            align: "bottom, left",
            margin: {
                bottom: 8,
                left: 5
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
                matrixPrimitives.strokeRectangle(matrix, 0, 0, 44, 10);

                let font = Font.fromNameString("Mobitec-7:7");
                let serviceNumberObj = new TextObject(data.serviceNumber, font, null, 1);

                let textWidth;
                try {
                    textWidth = serviceNumberObj.takeMeasure().width;
                } catch (e) {
                    textWidth = Infinity;
                }

                if (textWidth >= 32) {
                    font = Font.fromNameString("Mobitec-7:4");
                    serviceNumberObj.font = font;
                    textWidth = serviceNumberObj.takeMeasure().width;
                }

                let textPosition = Math.round(43 / 2 - textWidth / 2);
                serviceNumberObj.position = new Position(textPosition, 1);

                matrix.drawText(serviceNumberObj, 00000000);

                function drawNextStop() {
                    let bottomRowNum = scrollNum % 4;

                    let texts = [
                        [new TextObject("NEXT>>ON-ROUTE", Font.fromNameString("Mobitec-7:7"), new Position(1, 11), 1), 00000000],
                        [new TextObject("STOP>>BUS STOPPING", Font.fromNameString("Mobitec-7:7"), new Position(1, 11), 1), 00000000],
                        [new TextObject("ARR>>ARRIVED", Font.fromNameString("Mobitec-7:7"), new Position(1, 11), 1), 00000000],
                        [new TextObject(" ", Font.fromNameString("Mobitec-7:7"), new Position(1, 11), 1), 00000000],
                    ];

                    matrix.drawText(texts[bottomRowNum][0], texts[bottomRowNum][1]);
                }

                let {destination} = data;
                let currentScroll = Math.floor(scrollNum / 4);

                if (data.secondDestination) {
                    if (currentScroll > data.secondDestination.changeIndex)
                        destination = data.secondDestination.name;
                }
                matrix.drawText(new TextObject(destination, Font.fromNameString("Mobitec-7:7"), new Position(46, 1), 1), 00000000);

                // Possibly make scrolls query TSG site? Not great for offline use tho
                let currentScrollObj = new TextObject(data.scrolls[currentScroll], Font.fromNameString("Mobitec-7:7"), new Position(160, 11), 1);
                let measure = currentScrollObj.takeMeasure();
                let scrollWidth = measure.width,
                    scrollHeight = measure.height;

                if (scrollWidth === 0) return;
                drawNextStop();

                if (scrollWidth > matrix.width - 45) { // scrolling text
                    hold = true;

                    let frameCount = scrollWidth + matrix.width - 7;
                    let timeBetweenFrames = 0;

                    let frameNum = 80;
                    __scrollInterval__ = setInterval(() => {
                        if (frameNum == frameCount) {
                            clearInterval(__scrollInterval__);
                            hold = false;
                            return;
                        }
                        matrix.clearRectangle(0, 17 + (0 - scrollHeight), matrix.width, 17 + scrollHeight);

                        currentScrollObj.position.x = matrix.width - frameNum;

                        matrix.drawText(currentScrollObj, 00000000);
                        matrix.clearRectangle(0, 17 + (0 - scrollHeight), 160, 17 + scrollHeight);
                        drawNextStop();

                        matrixPrimitives.setStrokeColour(00000000);
                        matrixPrimitives.strokeRectangle(matrix, 0, 0, 44, 10);

                        frameNum++;
                    }, timeBetweenFrames);
                } else
                    matrix.drawText(currentScrollObj, 00000000);

                scrollNum++;
                if (scrollNum >= data.scrolls.length * 4)
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
   1: {
        1: {
            front: {
                renderType: "Glitch",
                serviceNumber: "OUT OF",
                destination: {
                    text: "OUT OF SERVICE",
                    font: "Gorba-11"
                },
                scrolls: [
                ""
                ],
                scrollFont: "Gorba-11"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "OUT OF",
                destination: "OUT OF SERVICE",
                scrolls: [
                    " "
                ]
            }
        }
    },
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
                serviceNumber: "LTG EMEA",
                destination: "A7 R144x19",
                scrolls: [
                    ""
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
   163: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16M",
                destination: {
                    text: "> BUKIT MERAH INT",
                    font: "Gorba-11"
                },
                scrolls: [
                "HYPE DEBUT SIA",
                "WELCOME ABOARD SBST"
                ],
                scrollFont: "Gorba-11"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16M",
                destination: "BT MERAH INT",
                scrolls: [
                    " "
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
                    font: "Gorba-11"
                },
                scrolls: [
                "HYPE DEBUT SIA",
                "SG4004B ON 825 IS PERFECT"
                ],
                scrollFont: "Gorba-11"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "16M",
                destination: "BEDOK INT",
                scrolls: [
                    " "
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
                    text: "> BEDOK INT",
                    font: "Gorba-11"
                },
                scrolls: [
                "COMPASSVALE RD",
                "HOUGANG AVE 10, 5, 7, 3",
                "EUNOS LINK",
                "KAKI BUKIT AVE 1",
                "BEDOK NTH RD"
                ],
                scrollFont: "Gorba-11"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "87",
                destination: "BEDOK INT",
                scrolls: [
                    " "
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
                    text: "> HARBOURFRONT INT",
                    font: "Gorba-11"
                },
                scrolls: [
                    "EUNOS LINK"
                ],
                scrollFont: "Gorba-11"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "93",
                destination: "HARBOURFRONT INT",
                scrolls: [
                    " "
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
                    text: "> BUKIT MERAH INT",
                    font: "Gorba-11"
                },
                scrolls: [
                    "BUKIT MERAH CTRL",
                    "HENDERSON RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH RISE",
                    "LOWER DELTA RD",
                    "TELOK BLANGAH CRES"
                ],
                scrollFont: "Gorba-11"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "272",
                destination: "BT MERAH INT",
                scrolls: [
                    " "
                ]
            }
        }
    }
}
