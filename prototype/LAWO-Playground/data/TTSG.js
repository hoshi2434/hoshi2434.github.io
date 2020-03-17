EDSFormats.TTSG = {
    standardService: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LAWO-26:14:TTS",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: "LAWO-15",
            spacing: 2
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "LAWO-9",
            spacing: 1
        },

        text: "$destination"
    },

    specialScroll: {
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LAWO-26:14:TTS",
            spacing: 2
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image === null": "blank",
                    "else": "$image"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom == null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            margin: {
                right: "width(serviceNumber)",
                left: "width(image)"
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont == null": "LAWO-12",
                    "else": "$topFont"
                }
            },
            spacing: 1
        },
        bottom: {
            align: "bottom,centre-x",
            margin: {
                right: "width(serviceNumber)",
                left: "width(image)"
            },
            text: {
                $$cond: {
                    "$bottom == null": "''",
                    "else": "$bottom"
                }
            },
            font: "LAWO-12",
            spacing: 1
        }

    }
}

EDSData.TTSG = {
    77: {
        1: {
                front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "BUKIT BATOK",
                scrolls: [
                    {
                        renderType: "specialScroll",
                        serviceNumber: "77",
                        image: "kindness-heart",
                        top: "HAPPY",
                        bottom: "KINDNESS DAY!"
                    },
                    {
                        renderType: "specialScroll",
                        serviceNumber: "77",
                        image: "kindness-heart",
                        top: "KINDNESS COSTS",
                        bottom: "$0.00. SHARE IT!"
                    },
                    {
                        renderType: "specialScroll",
                        serviceNumber: "77",
                        top: "BUKIT BATOK",
                        topFont: "LAWO-15"
                    },
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD"
                ]
            },
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "MARINA CENTRE",
                scrolls: [
                    {
                        renderType: "specialScroll",
                        serviceNumber: "77",
                        image: "kindness-heart",
                        top: "HAPPY",
                        bottom: "KINDNESS DAY!"
                    },
                    {
                        renderType: "specialScroll",
                        serviceNumber: "77",
                        image: "kindness-heart",
                        top: "KINDNESS COSTS",
                        bottom: "$0.00. SHARE IT!"
                    },
                    {
                        renderType: "specialScroll",
                        serviceNumber: "77",
                        top: "MARINA CENTRE",
                        topFont: "LAWO-15"
                    },
                    "TOH TUCK RD",
                    "SIXTH AVE",
                    "HOLLAND RD / VILLAGE",
                    "ORCHARD RD"
                ]
            }
        }
    },
    282: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: '282',
                destination: "CLEMENTI",
                scrolls: [
                    {
                        renderType: "specialScroll",
                        serviceNumber: "282",
                        image: "kindness-heart",
                        top: "HAPPY",
                        bottom: "KINDNESS DAY!"
                    },
                    {
                        renderType: "specialScroll",
                        serviceNumber: "282",
                        image: "kindness-heart",
                        top: "KINDNESS COSTS",
                        bottom: "$0.00. SHARE IT!"
                    },
                    {
                        renderType: "specialScroll",
                        serviceNumber: "282",
                        top: "CLEMENTI",
                        topFont: "LAWO-15"
                    },
                    "CLEMENTI AVE 5",
                    "CLEMENTI AVE 2",
                    "CLEMENTI WEST ST 2",
                ]
            }
        }
    },
    284: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: '284',
                destination: "CLEMENTI",
                scrolls: [
                    {
                        renderType: "specialScroll",
                        serviceNumber: "77",
                        image: "kindness-heart",
                        top: "HAPPY",
                        bottom: "KINDNESS DAY!"
                    },
                    {
                        renderType: "specialScroll",
                        serviceNumber: "77",
                        image: "kindness-heart",
                        top: "KINDNESS COSTS",
                        bottom: "$0.00. SHARE IT!"
                    },
                    {
                        renderType: "specialScroll",
                        serviceNumber: "77",
                        top: "CLEMENTI",
                        topFont: "LAWO-15"
                    },
                    "CLEMENTI AVE 4",
                ]
            }
        }
    }
}

EDSImages.TTSG = {
    blank: [[]],
    "kindness-heart": [
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    ]
}
