let data = {
  1: {
      front: {
          renderType: "logo",
          image: "notInService",
          text: "NOT IN SERVICE"
      }
  },
  2: {
      front: {
          renderType: "logo",
          image: "logo",
          text: "VENTURA LOGO"
      }
  },
  3: { // check
      front: {
          renderType: "message",
          text: "Charter",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  4: {
      front: {
          renderType: "message",
          text: "SCHOOL BUS",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  5: {
      front: {
          renderType: "message",
          text: "Express",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  6: {
      front: {
          renderType: "message",
          text: "Special",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  7: {
      front: {
          renderType: "message",
          text: "Set Down Only",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  9: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "All routes board this bus",
              font: "Mobitec-7:5:2"
          },
          scrolls: [
              "for connecting services"
          ],
          scrollFont: 'Mobitec-7:5:2'
      }
  },

  // SCHOOL BUSES
  1000: {
      front: {
          renderType: "message",
          text: "Mentone Station",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  1001: {
      front: {
          renderType: "message",
          text: "South Oakleigh",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  1002: {
      front: {
          renderType: "message",
          text: "Mentone Station",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  1003: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Ashburton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Primary School"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  1006: {
      front: {
          renderType: "message",
          text: "Salesian College",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  1007: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mt Waverley",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Secondary College"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  1008: {
      front: {
          renderType: "message",
          text: "South Road",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  1430: {
      front: {
          renderType: "message",
          text: "Mazenod College",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  1431: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Haleybury",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "College"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  1432: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Cheltenham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Secondary College"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  1433: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Parkdale",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Secondary College"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  1434: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "South Oakleigh",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Secondary College"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  1435: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mordialloc Chelsea",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Secondary College"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  1436: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Sandringham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Secondary College"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  1437: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Berwick",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Secondary College"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  1438: {
      front: {
          renderType: "message",
          text: "John Paul College",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  1439: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Montery",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Secondary College"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },

  // Some special codes

  4300: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Melbourne",
              font: "Mobitec-7:7"
          },
          scrolls: [
              [{text: "Universit", font: "Mobitec-7:7"},
              {text: "y", font: "Mobitec-7:5:2"}]
          ],
          bottomMargin: 1,
          scrollFont: 'Mobitec-7:7'
      }
  },
  4301: {
      front: {
          renderType: "message",
          text: "Sovereign Hill",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  4302: {
      front: {
          renderType: "message",
          text: "M.S.A.C",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  4303: {
      front: {
          renderType: "message",
          text: "Melbourne Airport",
          spacing: 1,
          font: "Mobitec-13:8"
      }
  },
  4304: {
      front: {
          renderType: "message",
          text: "Melbourne Zoo",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  4305: {
      front: {
          renderType: "message",
          text: "Shuttle Bus",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  4306: {
      front: {
          renderType: "message",
          text: "Crown Casino",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  4307: {
      front: {
          renderType: "message",
          text: "Melbourne City",
          spacing: 1,
          font: "Mobitec-13:10"
      }
  },
  4308: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Dandenong",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "High School"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  4309: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Hallam SC",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Glenroy" // ?
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },

  // TRAM REPLACEMENTS
  5000: { // check
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "St Kilda Junction",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  5001: { // check
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Arts Centre",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  5002: { // check
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Melbourne Uni",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  5003: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "St Kilda Road",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },

  10: {
      front: {
          renderType: "standardService",
          serviceNumber: "1",
          destination: {
              text: "South Melb Beach",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  11: {
      front: {
          renderType: "standardService",
          serviceNumber: "1",
          destination: {
              text: "East Coburg",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  12: {
      front: {
          renderType: "standardService",
          serviceNumber: "1",
          destination: {
              text: "Brunswick Depot",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  60: {
      front: {
          renderType: "standardService",
          serviceNumber: "6",
          destination: {
              text: "Glen Iris",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  61: {
      front: {
          renderType: "standardService",
          serviceNumber: "6",
          destination: {
              text: "Melbourne Uni",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  64: {
      front: {
          renderType: "standardService",
          serviceNumber: "6",
          destination: {
              text: "Moreland",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  160: {
      front: {
          renderType: "standardService",
          serviceNumber: "16",
          destination: {
              text: "Kew",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  161: {
      front: {
          renderType: "standardService",
          serviceNumber: "16",
          destination: {
              text: "Melbourne Uni",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  190: {
      front: {
          renderType: "standardService",
          serviceNumber: "19",
          destination: {
              text: "North Coburg",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  191: {
      front: {
          renderType: "standardService",
          serviceNumber: "19",
          destination: {
              text: "City", // format?
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  580: {
      front: {
          renderType: "standardService",
          serviceNumber: "58",
          destination: {
              text: "Toorak",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  581: {
      front: {
          renderType: "standardService",
          serviceNumber: "58",
          destination: {
              text: "West Coburg",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  640: {
      front: {
          renderType: "standardService",
          serviceNumber: "64",
          destination: {
              text: "East Brighton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  641: {
      front: {
          renderType: "standardService",
          serviceNumber: "64",
          destination: {
              text: "Melbourne Uni",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  670: {
      front: {
          renderType: "standardService",
          serviceNumber: "67",
          destination: {
              text: "Carnegie",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  671: {
      front: {
          renderType: "standardService",
          serviceNumber: "67",
          destination: {
              text: "Melbourne Uni",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  720: {
      front: {
          renderType: "standardService",
          serviceNumber: "72",
          destination: {
              text: "Camberwell",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  721: {
      front: {
          renderType: "standardService",
          serviceNumber: "72",
          destination: {
              text: "Melbourne Uni",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  750: {
      front: {
          renderType: "standardService",
          serviceNumber: "75",
          destination: {
              text: "Vermont South",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  751: {
      front: {
          renderType: "scroll",
          scrolls: [
              {
                  renderType: "viaFormat",
                  serviceNumber: "75",
                  top: "Tram",
                  topFont: "Mobitec-7:4",
                  bottom: "Replacement",
                  bottomFont: "Mobitec-7:4",
                  leftText: "CITY",
                  leftFont: "Ventura-16",
                  leftSpacing: 2
              },
              {
                  renderType: "viaFormat",
                  serviceNumber: "75",
                  top: "Spencer",
                  topFont: "Mobitec-7:7",
                  bottom: "Street",
                  bottomFont: "Mobitec-7:7",
                  bottomMargin: 1,
                  leftText: "CITY",
                  leftFont: "Ventura-16",
                  leftSpacing: 2
              }
          ]
      }
  },
  752: {
      front: {
          renderType: "standardService",
          serviceNumber: "75",
          destination: {
              text: "Docklands",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  753: {
      front: {
          renderType: "standardService",
          serviceNumber: "75d",
          destination: {
              text: "Camberwell Depot",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  780: {
      front: {
          renderType: "standardService",
          serviceNumber: "78",
          destination: {
              text: "Prahran",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  781: {
      front: {
          renderType: "standardService",
          serviceNumber: "78",
          destination: {
              text: "North Richmond",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  960: {
      front: {
          renderType: "standardService",
          serviceNumber: "96",
          destination: {
              text: "East Brunswick",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  961: {
      front: {
          renderType: "standardService",
          serviceNumber: "96",
          destination: {
              text: "St. Kilda Beach",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  5090: {
      front: {
          renderType: "standardService",
          serviceNumber: "109",
          destination: {
              text: "Box Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  5091: {
      front: {
          renderType: "standardService",
          serviceNumber: "109",
          destination: {
              text: "Port Melbourne",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Tram Replacement"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },

  5996: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Accessible",
              font: "Mobitec-6:5"
          },
          scrolls: [
              "Standby Bus",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  5997: { // TRAIN REPLACEMENTS
      front: {
          renderType: "destService",
          serviceNumber: "",
          destination: {
              text: "  Standby Bus",
              font: "Mobitec-13:10"
          },
          topMargin: 0
      }
  },
  5998: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "All Stations",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  5999: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Limited Express",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6000: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Express",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6001: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Darling",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6101: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Darling",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6002: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Burnley",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6102: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Burnley",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6003: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Oakleigh",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6103: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Oakleigh",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6004: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Springvale",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6104: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Springvale",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6005: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Dandenong",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6105: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Dandenong",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6006: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Pakenham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6106: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Pakenham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6007: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Cranbourne",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6107: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Cranbourne",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6008: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Caulfield",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6108: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Caulfield",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6908: { // for fun
      front: {
          renderType: "trainReplacement",
          destination: "Caulfield"
      }
  },


  6010: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mordialloc",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6110: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mordialloc",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6009: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Cheltenham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6109: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Cheltenham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6011: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Carrum",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6111: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Carrum",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6012: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Frankston",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6112: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Frankston",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6013: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Sandringham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6113: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Sandringham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6014: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Elsternwick",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6114: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Elsternwick",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6015: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "South Yarra",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6115: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "South Yarra",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6016: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Blackburn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6116: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Blackburn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6017: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mitcham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6117: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mitcham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6018: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Ringwood",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6118: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Ringwood",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6019: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Lilydale",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6119: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Lilydale",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6020: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Belgrave",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6120: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Belgrave",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6021: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Bayswater",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6121: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Bayswater",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6022: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Ferntree Gully",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6122: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Ferntree Gully",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6023: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Camberwell",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6123: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Camberwell",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6024: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Alamein",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6124: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Alamein",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6025: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Upper Ferntree Gully",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6125: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Upper Ferntree Gully",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6026: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Glen Waverley",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6126: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Glen Waverley",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6027: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Box Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6127: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Box Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6028: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Berwick",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6128: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Berwick",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6029: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Epping",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6129: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Epping",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6030: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Bell",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6130: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Bell",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6031: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Clifton Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6131: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Clifton Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6032: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Victoria Park",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6132: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Victoria Park",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6033: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Hurstbridge",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6133: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Hurstbridge",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6034: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Eltham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6134: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Eltham",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6035: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Greensborough",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6135: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Greensborough",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6036: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Heidelberg",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6136: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Heidelberg",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6037: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Moorabbin",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6137: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Moorabbin",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6038: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Flinders Street",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6138: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Flinders Street",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6039: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Stony Point",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6139: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Stony Point",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6040: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "South Morang",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6140: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "South Morang",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6041: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Sunbury",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6141: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Sunbury",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6042: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Watergardens",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6142: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Watergardens",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6043: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "St Albans",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6143: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "St Albans",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6044: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Footscray",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6144: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Footscray",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6045: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "North Melbourne",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6145: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "North Melbourne",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6046: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Upfield",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6146: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Upfield",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6047: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Broadmeadows",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6147: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Broadmeadows",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6048: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Craigieburn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6148: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Craigieburn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6049: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Newport",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6149: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Newport",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6050: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Williamstown",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6150: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Williamstown",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6051: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Laverton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6151: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Laverton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6052: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Werribee",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6152: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Werribee",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6053: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Croydon",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6153: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Croydon",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6054: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Westall",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6154: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Westall",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6055: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Richmond",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6155: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Richmond",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6056: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mooroolbark",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6156: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mooroolbark",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6057: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Albion",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6157: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Albion",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6058: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Flemington Racecourse",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6158: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Flemington Racecourse",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6059: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Parliament",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6159: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Parliament",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6060: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Boronia",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6160: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Boronia",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6061: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Carnegie",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6161: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Carnegie",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6062: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Murrumbeena",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6162: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Murrumbeena",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6063: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Hughesdale",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6163: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Hughesdale",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6064: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Southland",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6164: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Southland",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6065: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Brighton Beach",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6165: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Brighton Beach",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6066: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Chelsea",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6166: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Chelsea",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6067: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Sunshine",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6167: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Sunshine",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6068: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Essendon",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6168: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Essendon",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6069: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Coburg",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6169: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Coburg",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6070: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "City Loop",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6170: { // WHY NOT
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "City Loop",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6071: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "East Malvern",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6171: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "East Malvern",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6072: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mernda",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6172: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Mernda",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6073: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Holmesglen",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6173: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Holmesglen",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6074: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Watsonia",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "All Stations"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6174: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Watsonia",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Train Replacement",
              "Limited Express"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },

  // THE END OF TRAIN REPLACEMENTS - FOR NOW

  2010: { // REGULAR SERVICES
      front: {
          renderType: "standardService",
          serviceNumber: "201",
          destination: {
              text: "Deakin Shuttle",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Express to Deakin"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  5510: {
      front: {
          renderType: "standardService",
          serviceNumber: "551",
          destination: {
              text: "Latrobe Uni",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Southern Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6270: { // check
      front: {
          renderType: "standardService",
          serviceNumber: "627",
          destination: {
              text: "Morrabbin Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Bentleigh" //?
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6310: {
      front: {
          renderType: "standardService",
          serviceNumber: "631",
          destination: {
              text: "Southland",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Monash Uni",
              "via Clayton"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6311: {
      front: {
          renderType: "standardService",
          serviceNumber: "631",
          destination: {
              text: "Waverley Gdns",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Clayton",
              "via Monash Uni"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6630: {
      front: {
          renderType: "standardService",
          serviceNumber: "663",
          destination: {
              text: "Lilydale Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via York Rd",
              "via Monbulk",
              "via Silvan",
              "via Mt. Evelyn"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6631: {
      front: {
          renderType: "standardService",
          serviceNumber: "663",
          destination: {
              text: "Belgrave Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Mt. Evelyn",
              "via Silvan",
              "via Monbulk",
              "via York Rd",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6640: {
      front: {
          renderType: "standardService",
          serviceNumber: "664",
          destination: {
              text: "Knox Park",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Croydon",
              "via Glen Park",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6700: {
      front: {
          renderType: "standardService",
          serviceNumber: "670",
          destination: {
              text: "Lilydale Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Croydon",
              "via Chirnside Park"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6720: {
      front: {
          renderType: "standardService",
          serviceNumber: "672",
          destination: {
              text: "Croydon Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Midhurst Road" // ?
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6790: {
      front: {
          renderType: "standardService",
          serviceNumber: "679",
          destination: {
              text: "Chirnside Park",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Heathmont",
              "via Canterbury Rd",
              "via Mt. Evelyn",
              "via Lilydale"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6791: {
      front: {
          renderType: "standardService",
          serviceNumber: "679",
          destination: {
              text: "Ringwood Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Lilydale",
              "via Mt. Evelyn",
              "via Canterbury Rd",
              "via Heathmont"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6880: {
      front: {
          renderType: "standardService",
          serviceNumber: "688",
          destination: {
              text: "Upper F.T Gully",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Ridge Road",
              "via Sky High",
              "via Olinda"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6881: {
      front: {
          renderType: "standardService",
          serviceNumber: "688",
          destination: {
              text: "Croydon Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Olinda",
              "via Sky High",
              "via Ridge Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  // 6911: {
  //     front: {
  //         renderType: "standardService",
  //         serviceNumber: "691",
  //         destination: {
  //             text: "Waverley Gardens",
  //             font: "Mobitec-7:7"
  //         },
  //         scrolls: [
  //             "via"
  //         ],
  //         scrollFont: 'Mobitec-6:5'
  //     }
  // },
  6930: {
      front: {
          renderType: "standardService",
          serviceNumber: "693",
          destination: {
              text: "Oakleigh Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Burwood Hwy",
              "via F'tree Gully Rd"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6931: {
      front: {
          renderType: "standardService",
          serviceNumber: "693",
          destination: {
              text: "Belgrave Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via F'tree Gully Rd",
              "via Burwood Hwy"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6940: {
      front: {
          renderType: "standardService",
          serviceNumber: "694",
          destination: {
              text: "Mt. Dandenong",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Sky High",
              {
                  text: "via Olinda Township",
                  font: "Mobitec-6:5;Space-Width=1"
              }
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6941: {
      front: {
          renderType: "standardService",
          serviceNumber: "694",
          destination: {
              text: "Belgrave Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Sassafras"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6942: {
      front: {
          renderType: "standardService",
          serviceNumber: "694",
          destination: {
              text: "Olinda Township",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "via Sassafras"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  6950: {
      front: {
          renderType: "standardService",
          serviceNumber: "695",
          destination: {
              text: "Gembrook",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Emerald",
              "via Cockatoo"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7010: {
      front: {
          renderType: "standardService",
          serviceNumber: "701",
          destination: {
              text: "Oakleigh Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Mackie Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7011: {
      front: {
          renderType: "standardService",
          serviceNumber: "701",
          destination: {
              text: "Bentleigh",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Mackie Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7012: {
      front: {
          renderType: "standardService",
          serviceNumber: "701",
          destination: {
              text: "Centre &",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Mackie Roads"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7030: {
      front: {
          renderType: "standardService",
          serviceNumber: "703",
          destination: {
              text: "Blackburn Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Bentleigh",
              "via Clayton",
              "via Monash Uni",
              "via K-Mart Plaza",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7031: {
      front: {
          renderType: "standardService",
          serviceNumber: "703",
          destination: {
              text: "Middle Brighton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via K-Mart Plaza",
              "via Monash Uni",
              "via Clayton",
              "via Bentleigh"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7032: {
      front: {
          renderType: "destService",
          serviceNumber: "703",
          destination: {
              text: "Monash University", // check formatting
              font: "Mobitec-7:7"
          },
          topMargin: 4
      }
  },
  7033: {
      front: {
          renderType: "destService",
          serviceNumber: "703",
          destination: {
              text: "Bentleigh Station", // check formatting
              font: "Mobitec-7:7"
          },
          topMargin: 4
      }
  },
  7034: {
      front: {
          renderType: "destService",
          serviceNumber: "703",
          destination: {
              text: "South ṡńOakleigh",
              font: "Mobitec-7:7"
          },
          topMargin: 4
      }
  },
  7035: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Limited Stops",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Syndal Station",
              "K-Mart Plaza",
              "Blackburn Station"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7036: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Express",
              font: "Mobitec-6:5"
          },
          scrolls: [
              [{text: "Monash Universit", font: "Mobitec-7:7"},
              {text: "y", font: "Mobitec-7:5:2"}]
          ],
          bottomMargin: 1,
          scrollFont: 'Mobitec-7:7'
      }
  },
  7037: {
      front: {
          renderType: "destService",
          serviceNumber: "703",
          destination: {
              text: "Syndal Station",
              font: "Mobitec-7:7"
          },
          topMargin: 4
      }
  },
  7038: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Limited Stops",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Syndal Station",
              "K-Mart Plaza",
              "Blackburn Station"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7039: {
      front: {
          renderType: "standardService",
          serviceNumber: "",
          destination: {
              text: "Express",
              font: "Mobitec-6:5"
          },
          scrolls: [
              [{text: "Cla", font: "Mobitec-7:7"},
              {text: "y", font: "Mobitec-7:5:2"}, // all 7039 corrupted beyond recognition so use 7332 style for now (GET CODE FOR DAT TOO BUT LAZY GO BOX HILL)
              {text: "ton Station", font: "Mobitec-7:7"}]
          ],
          bottomMargin: 1,
          scrollFont: 'Mobitec-7:7'
      }
  },
  7040: {
      front: {
          renderType: "standardService",
          serviceNumber: "704",
          destination: {
              text: "Oakleigh Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Clayton",
              "via Huntingdale",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7041: {
      front: {
          renderType: "standardService",
          serviceNumber: "704",
          destination: {
              text: "East Clayton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Huntingdale",
              "via Clayton",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7042: {
      front: {
          renderType: "standardService",
          serviceNumber: "704",
          destination: {
              text: "Scotsburn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Avenue", // copied off yag buse
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7043: {
      front: {
          renderType: "standardService",
          serviceNumber: "704",
          destination: {
              text: "Clayton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Station", // check formatting
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7044: {
      front: {
          renderType: "standardService",
          serviceNumber: "704",
          destination: {
              text: "Westall",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Station", // check formatting
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7050: {
      front: {
          renderType: "standardService",
          serviceNumber: "705",
          destination: {
              text: "Springvale Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Braeside",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7051: {
      front: {
          renderType: "standardService",
          serviceNumber: "705",
          destination: {
              text: "Mordialloc Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Braeside",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7080: {
      front: {
          renderType: "standardService",
          serviceNumber: "708",
          destination: {
              text: "Carrum Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Southland",
              "via Mentone",
              "via Mordialloc",
              "via Aspendale Gdn."
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7081: {
      front: {
          renderType: "standardService",
          serviceNumber: "708",
          destination: {
              text: "Hampton Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Aspendale Gdn.",
              "via Mordialloc",
              "via Mentone",
              "via Southland"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7090: {
      front: {
          renderType: "standardService",
          serviceNumber: "709",
          destination: {
              text: "Mordialloc Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Waterways Est.",
              "via Parkmore S/C"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7091: {
      front: {
          renderType: "standardService",
          serviceNumber: "709",
          destination: {
              text: "Noble Park Stn",
              font: "Mobitec-7:6:1"
          },
          scrolls: [,
              "via Parkmore S/C",
              "via Waterways Est."
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7320: {
      front: {
          renderType: "standardService",
          serviceNumber: "732",
          destination: {
              text: "Box Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Knox City",
              "via K-Mart Plaza"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7330: {
      front: {
          renderType: "standardService",
          serviceNumber: "733",
          destination: {
              text: "Box Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Monash Uni" // mt waverley? buse has mobi e11
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7331: {
      front: {
          renderType: "standardService",
          serviceNumber: "733",
          destination: {
              text: "Oakleigh Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Monash Uni"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7332: { // check code
      front: {
          renderType: "standardService",
          serviceNumber: "733",
          destination: {
              text: "Monash",
              font: "Mobitec-7:7"
          },
          scrolls: [
              [{text: "Universit", font: "Mobitec-7:7"},
              {text: "y", font: "Mobitec-7:5:2"}]
          ],
          scrollFont: 'Mobitec-7:7',
          bottomMargin: 1
      }
  },
  7340: {
      front: {
          renderType: "standardService",
          serviceNumber: "734",
          destination: {
              text: "Glen Iris Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Ashburton",
              "via High St Road",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7341: {
      front: {
          renderType: "standardService",
          serviceNumber: "734",
          destination: {
              text: "Glen Waverley", // ?
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via High St Road",
              "via Ashburton",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7360: {
      front: {
          renderType: "standardService",
          serviceNumber: "736",
          destination: {
              text: "Mitcham Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Deakin Uni",
              "via Vermont Stn"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7361: {
      front: {
          renderType: "standardService",
          serviceNumber: "736",
          destination: {
              text: "Box Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Vermont Stn",
              "via Deakin Uni"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7370: {
      front: {
          renderType: "standardService",
          serviceNumber: "737",
          destination: {
              text: "Monash Uni",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Boronia",
              "via Knox City",
              "via G Waverley"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7371: {
      front: {
          renderType: "standardService",
          serviceNumber: "737",
          destination: {
              text: "Croydon Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via G Waverley",
              "via Knox City",
              "via Boronia",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7372: {
      front: {
          renderType: "standardService",
          serviceNumber: "737",
          destination: {
              text: "Knox City",
              font: "Mobitec-13:10"
          },
          scrolls: [""],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7420: {
      front: {
          renderType: "standardService",
          serviceNumber: "742",
          destination: {
              text: "Chadstone",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Oakleigh",
              "via Vermont South",
              "via G Waverley",
              "via F.T Gully Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7421: {
      front: {
          renderType: "standardService",
          serviceNumber: "742",
          destination: {
              text: "Eastland",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via F.T Gully Road",
              "via G Waverley",
              "via Vermont South",
              "via Oakleigh",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7530: {
      front: {
          renderType: "standardService",
          serviceNumber: "753",
          destination: {
              text: "Boronia Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Knoxfield Shops",
              "via F.T Gully Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7531: {
      front: {
          renderType: "standardService",
          serviceNumber: "753",
          destination: {
              text: "Glen Waverley",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "F.T Gully Road",
              "via Knoxfield Shops"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7540: {
      front: {
          renderType: "standardService",
          serviceNumber: "754",
          destination: {
              text: "Rowville",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Wheelers Hill",
              "Stud Park"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7600: { // check
      front: {
          renderType: "standardService",
          serviceNumber: "760",
          destination: {
              text: "Seaford Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Carrum Downs"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7601: { // check
      front: {
          renderType: "standardService",
          serviceNumber: "760",
          destination: {
              text: "Cranbourne Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Carrum Downs"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7650: {
      front: {
          renderType: "standardService",
          serviceNumber: "765",
          destination: {
              text: "Mitcham Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Blackburn",
              "via Forest Hill"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7651: {
      front: {
          renderType: "standardService",
          serviceNumber: "765",
          destination: {
              text: "Box Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Forest Hill",
              "via Blackburn"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7670: {
      front: {
          renderType: "standardService",
          serviceNumber: "767",
          destination: {
              text: "Southland",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Deakin Uni",
              "via Chadstone"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7671: {
      front: {
          renderType: "standardService",
          serviceNumber: "767",
          destination: {
              text: "Box Hill",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Deakin Uni"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7700: {
      front: {
          renderType: "standardService",
          serviceNumber: "770",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Ashleigh Ave"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7701: {
      front: {
          renderType: "standardService",
          serviceNumber: "770",
          destination: {
              text: "Karingal S/C",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Ashleigh Ave"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  //770A - 7702 Orwill st, 7703 frk stn
  7710: {
      front: {
          renderType: "standardService",
          serviceNumber: "771",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Karingal S/C"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7711: {
      front: {
          renderType: "standardService",
          serviceNumber: "771",
          destination: {
              text: "Langwarrin",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Warrandyte Road",
              "via Karingal S/C"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7720: {
      front: {
          renderType: "standardService",
          serviceNumber: "772",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Foot St",
              "via Moorooduc Hwy"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7721: {
      front: {
          renderType: "standardService",
          serviceNumber: "772",
          destination: {
              text: "Eliza Heights",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Overport Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7730: {
      front: {
          renderType: "standardService",
          serviceNumber: "773",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Kars Street"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7731: {
      front: {
          renderType: "standardService",
          serviceNumber: "773",
          destination: {
              text: "Frankston Sth",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Kars Street"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7740: {
      front: {
          renderType: "standardService",
          serviceNumber: "774",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Foot St"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7741: {
      front: {
          renderType: "standardService",
          serviceNumber: "774",
          destination: {
              text: "Delacombe Pk",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Foot St"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7750: {
      front: {
          renderType: "standardService",
          serviceNumber: "775",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Heatherhill Rd"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7751: {
      front: {
          renderType: "standardService",
          serviceNumber: "775",
          destination: {
              text: "Lakewood",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Heatherhill Rd" // check
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7780: {
      front: {
          renderType: "standardService",
          serviceNumber: "778",
          destination: {
              text: "Kananook Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Brunei Rd"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7790: {
      front: {
          renderType: "standardService",
          serviceNumber: "779",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Kananook Stn"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7791: {
      front: {
          renderType: "standardService",
          serviceNumber: "779",
          destination: {
              text: "Belvedere",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Kananook Stn"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7800: {
      front: {
          renderType: "standardService",
          serviceNumber: "780",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Seaford"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7801: {
      front: {
          renderType: "standardService",
          serviceNumber: "780",
          destination: {
              text: "Carrum Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Seaford"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7811: {
      front: {
          renderType: "standardService",
          serviceNumber: "781",
          destination: {
              text: "Mt. Martha",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Mt. Eliza",
              "via Mornington"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7820: {
      front: {
          renderType: "destService",
          serviceNumber: "782",
          destination: {
              text: "Frankston",
              font: "Mobitec-13:10"
          },
          topMargin: 1
      }
  },
  7821: {
      front: {
          renderType: "standardService",
          serviceNumber: "782",
          destination: {
              text: "Flinders",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Somerville",
              "via Hastings",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7822: { // check codes
      front: {
          renderType: "destService",
          serviceNumber: "782",
          destination: {
              text: "Balnarring",
              font: "Mobitec-13:10"
          },
          topMargin: 0
      }
  },
  // Hastings 782??
  7840: {
      front: {
          renderType: "standardService",
          serviceNumber: "784",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Mornington",
              "via Mt Eliza",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7841: {
      front: {
          renderType: "standardService",
          serviceNumber: "784",
          destination: {
              text: "Osborne",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Mt Eliza",
              "via Mornington"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7850: {
      front: {
          renderType: "standardService",
          serviceNumber: "785",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Mornington",
              "via Mt Eliza"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7851: {
      front: {
          renderType: "standardService",
          serviceNumber: "785",
          destination: {
              text: "Mornington East",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "via Mt Eliza",
              "via Mornington"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  7860: {
      front: {
          renderType: "destService",
          serviceNumber: "786",
          serviceFont: "Mobitec-16:8",
          destination: {
              text: "Rye",
              font: "Mobitec-13:10"
          },
          topMargin: 2
      }
  },
  // 7861: {
  //     front: {
  //         renderType: "destService",
  //         serviceNumber: "786",
  //         serviceFont: "Mobitec-16:8",
  //         destination: {
  //             text: "St Andrews Beach",
  //             font: "Mobitec-11:6" // Calibri or smth hard to tell, punk on non rosebud bus
  //         },
  //         topMargin: 3
  //     }
  // },
  7871: {
      front: {
          renderType: "destService",
          serviceNumber: "787",
          serviceFont: "Mobitec-16:8",
          destination: {
              text: "Sorrento",
              font: "Mobitec-13:10"
          },
          topMargin: 2
      }
  },
  7880: {
      front: {
          renderType: "destService",
          serviceNumber: "788",
          serviceFont: "Mobitec-16:8",
          destination: {
              text: "Frankston",
              font: "Mobitec-13:10" // see portsea bound code
          },
          topMargin: 2
      }
  },
  7881: {
      front: {
          renderType: "destService",
          serviceNumber: "788",
          serviceFont: "Mobitec-16:8",
          destination: {
              text: "Portsea",
              font: "Mobitec-13:10"
              // somehow has scroll variant?
              /*
              via rosebud
              via dromana
              */
          },
          topMargin: 2
      }
  },
  8000: {
      front: {
          renderType: "standardService",
          serviceNumber: "800",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "via Oakleigh"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8001: {
      front: {
          renderType: "standardService",
          serviceNumber: "800",
          destination: {
              text: "Chadstone",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Oakleigh"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  //8002 Oakleigh
  8020: {
      front: {
          renderType: "standardService",
          serviceNumber: "802",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Chadstone",
              "via Oakleigh",
              "via Monash Uni",
              "via Mulgrave"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8021: {
      front: {
          renderType: "standardService",
          serviceNumber: "802",
          destination: {
              text: "Chadstone",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Mulgrave",
              "via Monash Uni",
              "via Oakleigh",
              "via Chadstone",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8040: {
      front: {
          renderType: "standardService",
          serviceNumber: "804",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "via Oakleigh",
              "via Monash Uni",
              "via Wheelers Hill"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8041: {
      front: {
          renderType: "standardService",
          serviceNumber: "804",
          destination: {
              text: "Chadstone",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Wheelers Hill",
              "via Monash Uni",
              "via Oakleigh"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8110: {
      front: {
          renderType: "standardService",
          serviceNumber: "811",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Southland",
              "via Springvale",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8111: {
      front: {
          renderType: "standardService",
          serviceNumber: "811",
          destination: {
              text: "Brighton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Springvale",
              "via Southland"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8120: {
      front: {
          renderType: "standardService",
          serviceNumber: "812",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Southland",
              "via Parkmore S/C"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8121: {
      front: {
          renderType: "standardService",
          serviceNumber: "812",
          destination: {
              text: "Brighton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Parkmore S/C",
              "via Southland"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8130: {
      front: {
          renderType: "standardService",
          serviceNumber: "813",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Springvale",
              "via Parkmore S/C"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8131: {
      front: {
          renderType: "standardService",
          serviceNumber: "813",
          destination: {
              text: "Waverley Gdns",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Parkmore S/C",
              "via Springvale"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8140: {
      front: {
          renderType: "standardService",
          serviceNumber: "814",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "via Springvale",
              "via Waverley Gdns"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8141: {
      front: {
          renderType: "standardService",
          serviceNumber: "814",
          destination: {
              text: "Springvale South",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "via Waverley Gdns",
              "via Springvale"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8150: {
      front: {
          renderType: "standardService",
          serviceNumber: "815",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Parkmore S/C"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8151: {
      front: {
          renderType: "standardService",
          serviceNumber: "815",
          destination: {
              text: "Noble Park",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Parkmore S/C"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8220: {
      front: {
          renderType: "standardService",
          serviceNumber: "822",
          destination: {
              text: "Chadstone",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Cheltenham"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8221: {
      front: {
          renderType: "standardService",
          serviceNumber: "822",
          destination: {
              text: "Sandringham Stn",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "via Murrumbeena"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8240: {
      front: {
          renderType: "standardService",
          serviceNumber: "824",
          destination: {
              text: "Keysborough",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Bourke Road",
              "via Westall",
              "via Clayton"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8241: {
      front: {
          renderType: "standardService",
          serviceNumber: "824",
          destination: {
              text: "Moorabbin Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Westall",
              "via Clayton",
              "via Bourke Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8242: { // confirm codes
      front: {
          renderType: "standardService",
          serviceNumber: "824",
          destination: {
              text: "Keysborough",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Parkmore S/C",
              {
                  renderType: "viaFormat",
                  serviceNumber: "824",
                  top: "South/Bourke Rds",
                  topFont: "Mobitec-7:4",
                  bottom: "Clayton & Westall",
                  bottomFont: "Mobitec-7:4",
                  leftText: "via",
                  leftFont: "Mobitec-6:5",
                  leftSpacing: 1
              },
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8230: {
      front: {
          renderType: "standardService",
          serviceNumber: "823",
          destination: {
              text: "Southland",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Moorabbin"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8280: {
      front: {
          renderType: "standardService",
          serviceNumber: "828",
          destination: {
              text: "Hampton Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Dandenong",
              "via Cheltenham"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8281: {
      front: {
          renderType: "standardService",
          serviceNumber: "828",
          destination: {
              text: "Berwick Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Cheltenham",
              "via Dandenong",
              "via Fountain Gate",
              "via Southland"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8320: { // predicted all frankston bound are 0 (in ?), all out of frankston are 1 or more (out?)
      front: {
          renderType: "standardService",
          serviceNumber: "832",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Kananook"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8321: {
      front: {
          renderType: "standardService",
          serviceNumber: "832",
          destination: {
              text: "Carrum Downs",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Kananook"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8330: {
      front: {
          renderType: "standardService",
          serviceNumber: "833",
          destination: {
              text: "Frankston Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Carrum Downs",
              "via Frankston Nth"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8331: {
      front: {
          renderType: "standardService",
          serviceNumber: "833",
          destination: {
              text: "Carrum Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Frankston Nth",
              "via Carrum Downs"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8430: {
      front: {
          renderType: "standardService",
          serviceNumber: "843",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via End. Hills S/C",
              "Shetland Street",
              "via Clow Street"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8431: {
      front: {
          renderType: "standardService",
          serviceNumber: "843",
          destination: {
              text: "Mossgiel Park",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Shetland Street",
              "via Clow Street",
              "via End. Hills S/C"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8440: {
      front: {
          renderType: "standardService",
          serviceNumber: "844",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via McCrae St",
              "via Kidds Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8441: {
      front: {
          renderType: "standardService",
          serviceNumber: "844",
          destination: {
              text: "Doveton",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Kidds Road",
              "via McCrae St"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8480: {
      front: {
          renderType: "standardService",
          serviceNumber: "848",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Waverley Gdns"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8481: {
      front: {
          renderType: "standardService",
          serviceNumber: "848",
          destination: {
              text: "Brandon Park",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Waverley Gdns"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8490: {
      front: {
          renderType: "standardService",
          serviceNumber: "849",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via End Hills Shops",
              "via Reema Blvd"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8491: {
      front: {
          renderType: "standardService",
          serviceNumber: "849",
          destination: {
              text: "Mossgiel Park",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Reema Blvd",
              "via End Hills Shops"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8500: {
      front: {
          renderType: "standardService",
          serviceNumber: "850",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Waverley Gdns"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8501: {
      front: {
          renderType: "standardService",
          serviceNumber: "850",
          destination: {
              text: "Glen Waverley",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Waverley Gdns"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8570: {
      front: {
          renderType: "standardService",
          serviceNumber: "857",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Patterson Lks"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8571: {
      front: {
          renderType: "standardService",
          serviceNumber: "857",
          destination: {
              text: "Chelsea",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Patterson Lks"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8580: {
      front: {
          renderType: "standardService",
          serviceNumber: "858",
          destination: {
              text: "Edithvale Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Chelsea"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8581: {
      front: {
          renderType: "standardService",
          serviceNumber: "858",
          destination: {
              text: "Aspendale Gdn",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "via Chelsea"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8610: {
      front: {
          renderType: "standardService",
          serviceNumber: "861",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Clow Street"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8620: {
      front: {
          renderType: "standardService",
          serviceNumber: "862",
          destination: {
              text: "Dandenong Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Oakleigh",
              "via Monash Uni",
              "via Waverley Gdns"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  8621: {
      front: {
          renderType: "standardService",
          serviceNumber: "862",
          destination: {
              text: "Chadstone",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Waverley Gdns",
              "via Monash Uni",
              "via Oakleigh",
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  9000: {
      front: {
          renderType: "standardService",
          serviceNumber: "900",
          destination: {
              text: "Rowville",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Chadstone",
              "via Oakleigh",
              "via Monash Uni"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  9001: {
      front: {
          renderType: "standardService",
          serviceNumber: "900",
          destination: {
              text: "Caulfield Stn",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Monash Uni",
              "via Oakleigh",
              "via Chadstone"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  9002: {
      front: {
          renderType: "standardService",
          serviceNumber: "900",
          destination: {
              text: "Huntingdale",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "Station"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  9261: {
      front: {
          renderType: "standardService",
          serviceNumber: "926",
          destination: {
              text: "Fountain Gate",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Berwick Shops",
              "via Beaconsfield"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  9280: {
      front: {
          renderType: "standardService",
          serviceNumber: "928",
          destination: {
              text: "Pakenham Sth",
              font: "Mobitec-7:7"
          },
          scrolls: [
              "via Henry Road"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  },
  9780: {
      front: {
          renderType: "standardService",
          serviceNumber: "978",
          destination: {
              text: "Elsternwick Stn",
              font: "Mobitec-7:6:1"
          },
          scrolls: [
              "via Princes Hwy",
              "via Monash Uni",
              "via Huntingdale"
          ],
          scrollFont: 'Mobitec-6:5'
      }
  }
}

let lines = []
Object.keys(data).forEach(code => {
  let line = `${code} `
  let {front} = data[code]
  let {serviceNumber, text, destination, scrolls, renderType} = front
  if (renderType === 'destService') {
    line += `${serviceNumber} ${destination.text}`
  } else if (renderType === 'standardService') {
    line += `${serviceNumber} ${destination.text} ${scrolls.map((e, i) => (e.text || (e.top ? e.leftText + ': ' + e.top + ', ' + e.bottom : null) || e).toString().replace((i > 0 ? 'via ' : 'this will never match'), '')).join(', ')}`
  } else {
    line += text
  }
  lines.push(line.replace(/  +/g, ' '))
})

console.log(lines.join('\n'))
