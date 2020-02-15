EDSFormats.CDC = {
    scroll: {
        scroll: {
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 5000,

            font: "Buse-16:7",
            spacing: 1
        },

        text: "$preview"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "Buse-16:7",
            spacing: {
                $$cond: {
                    "$spacing === null" : 1,
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
            spacing: {
                $$cond: {
                    "$topSpacing == null": "1",
                    "else": "$topSpacing"
                }
            },
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
                    "else": "Buse-7:5"
                }
            },
            spacing: {
                $$cond: {
                    "$bottomSpacing == null": "1",
                    "else": "$bottomSpacing"
                }
            },
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$serviceNumber+' '$top+' '+$bottom"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    }
}

EDSData.CDC = {
    24: {
        front: {
            render: "message",
            text: "SPECIAL",
            font: "Buse-16:7",
            spacing: 2
        }
    },
    6011: {
        front: {
            renderType: "scroll",
            preview: "601 MONASH UNI SHUTTLE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "601",
                    top: "MONASH UNI",
                    topFont: "Buse-7:5",
                    bottom: "SHUTTLE",
                    bottomFont: "Buse-7:5"
                },
                {
                    renderType: "destScroll",
                    serviceNumber: "601",
                    top: "HUNTINGDALE",
                    topFont: "Buse-7:5",
                    bottom: "STATION",
                    bottomFont: "Buse-7:5"
                }
            ]
        }
    },
    6061: {
        front: {
            renderType: "destScroll",
            serviceNumber: "606",
            top: "FISHERMANS",
            topFont: "Buse-7:5",
            bottom: "BEND",
            bottomFont: "Buse-7:5"
        }
    },
    6062: {
        front: {
            renderType: "destScroll",
            serviceNumber: "606",
            top: "ELSTERNWICK",
            topFont: "Buse-7:5",
            bottom: "STATION",
            bottomFont: "Buse-7:5"
        }
    },
    6301: {
        front: {
            renderType: "destScroll",
            serviceNumber: "630",
            top: "MONASH",
            topFont: "Buse-7:5",
            bottom: "UNIVERSITY",
            bottomFont: "Buse-7:5"
        }
    },
    6302: {
        front: {
            renderType: "destScroll",
            serviceNumber: "630",
            top: "ELWOOD",
            topFont: "Buse-7:5",
            bottom: "BENT AVE",
            bottomFont: "Buse-7:5"
        }
    },
    9001: {
        front: {
            renderType: "destScroll",
            serviceNumber: "900",
            top: "CAULFIELD",
            topFont: "Buse-7:5",
            bottom: "STATION",
            bottomFont: "Buse-7:5"
        }
    },
    9002: {
        front: {
            renderType: "destScroll",
            serviceNumber: "900",
            top: "STUD PARK",
            topFont: "Buse-7:5",
            bottom: "ROWVILLE",
            bottomFont: "Buse-7:5"
        }
    }
}

EDSExtras.CDC = {};

EDSImages.CDC = {};
