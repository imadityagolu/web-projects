const data = [
    {
      URL: "http://www.just-eat.co.uk/restaurants-cn-chinese-cardiff/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b26"
      },
      address: "228 City Road",
      "address line 2": "Cardiff",
      name: ".CN Chinese",
      outcode: "CF24",
      postcode: "3JH",
      rating: 5,
      type_of_food: "Chinese"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-atthai-ss9/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b27"
      },
      address: "376 Rayleigh Road",
      "address line 2": "Essex",
      name: "@ Thai",
      outcode: "SS9",
      postcode: "5PT",
      rating: 5.5,
      type_of_food: "Thai"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-atthairestaurant/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b28"
      },
      address: "30 Greyhound Road Hammersmith",
      "address line 2": "London",
      name: "@ Thai Restaurant",
      outcode: "W6",
      postcode: "8NX",
      rating: 4.5,
      type_of_food: "Thai"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-atthairestaurant/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b29"
      },
      address: "30 Greyhound Road Hammersmith",
      "address line 2": "London",
      name: "@ Thai Restaurant",
      outcode: "W6",
      postcode: "8NX",
      rating: 4.5,
      type_of_food: "Thai"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-indiancom-ch4/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b2a"
      },
      address: "9 Broughton Hall Road",
      "address line 2": "Broughton",
      name: "@Indian.com",
      outcode: "CH4",
      postcode: "0QR",
      rating: 6,
      type_of_food: "Curry"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-007takeaway-s65/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b2b"
      },
      address: "6 Drummond Street",
      "address line 2": "Rotherham",
      name: "007 Takeaway",
      outcode: "S65",
      postcode: "1HY",
      rating: 6,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b2c"
      },
      address: "885 High Road Leytonstone",
      "address line 2": "London",
      name: "042 Restaurant & Bar",
      outcode: "E11",
      postcode: "1HR",
      rating: 3,
      type_of_food: "African"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b2d"
      },
      address: "885 High Road Leytonstone",
      "address line 2": "London",
      name: "042 Restaurant & Bar",
      outcode: "E11",
      postcode: "1HR",
      rating: 3,
      type_of_food: "African"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b2e"
      },
      address: "885 High Road Leytonstone",
      "address line 2": "London",
      name: "042 Restaurant & Bar",
      outcode: "E11",
      postcode: "1HR",
      rating: 3,
      type_of_food: "African"
    },
    {
      URL:
        "http://www.just-eat.co.uk/restaurants-1-2-3-chinese-rowlands-gill/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b2f"
      },
      address: "Unit 4 Spencer House",
      "address line 2": "Swalwell",
      name: "1 2 3 Chinese",
      outcode: "NE16",
      postcode: "3DS",
      rating: 4.5,
      type_of_food: "Chinese"
    },
    {
      URL:
        "http://www.just-eat.co.uk/restaurants-1-2-3-chinese-rowlands-gill/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b30"
      },
      address: "Unit 4 Spencer House",
      "address line 2": "Swalwell",
      name: "1 2 3 Chinese",
      outcode: "NE16",
      postcode: "3DS",
      rating: 4.5,
      type_of_food: "Chinese"
    },
    {
      URL:
        "http://www.just-eat.co.uk/restaurants-100-degrees-chinese-restaurant-pontypridd/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b31"
      },
      address: "67 Park Street",
      "address line 2": "Treforest",
      name: "100 Degrees Chinese Restaurant",
      outcode: "CF37",
      postcode: "1SN",
      rating: 5,
      type_of_food: "Chinese"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-100menu-wn1/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b32"
      },
      address: "50 Wallgate",
      "address line 2": "Wigan",
      name: "100 Menu",
      outcode: "WN1",
      postcode: "1JU",
      rating: 5,
      type_of_food: "Chinese"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-104-turkish-BBQ/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b33"
      },
      address: "104 Tanners Lane",
      "address line 2": "Essex",
      name: "104 Turkish BBQ",
      outcode: "IG6",
      postcode: "1QE",
      rating: 5,
      type_of_food: "Turkish"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-109restaurant-w2/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b34"
      },
      address: "109 Westbourne Park Road",
      "address line 2": "London",
      name: "109 Ristorante",
      outcode: "W2",
      postcode: "5QL",
      rating: 5,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-113-fish-bar-wallasey/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b35"
      },
      address: "113 Poulton Road",
      "address line 2": "Merseyside",
      name: "113 Fish Bar",
      outcode: "CH44",
      postcode: "9DE",
      rating: 5.5,
      type_of_food: "Chinese"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-133-takeaway-irvine/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b36"
      },
      address: "133 Fullarton Street",
      "address line 2": "Irvine",
      name: "133 Takeaway",
      outcode: "KA12",
      postcode: "8DG",
      rating: "Not yet rated",
      type_of_food: "Breakfast"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-1498thespiceaffair-pe11/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b37"
      },
      address: "Red Lion Hotel",
      "address line 2": "Spalding",
      name: "1498 The Spice Affair",
      outcode: "PE11",
      postcode: "1SU",
      rating: 5.5,
      type_of_food: "Curry"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-168chinese-ls18/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b38"
      },
      address: "17 Alexandra Road",
      "address line 2": "West Yorkshire",
      name: "168 Chinese & Cantonese Takeaway",
      outcode: "LS18",
      postcode: "4HE",
      rating: 5.5,
      type_of_food: "Chinese"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-1awok-pa7/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b39"
      },
      address: "Unit 2 30 Greenock Road",
      "address line 2": "Bishopton",
      name: "1A Wok",
      outcode: "PA7",
      postcode: "5JN",
      rating: 5,
      type_of_food: "Chinese"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-1pizza1com-ls26/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b3a"
      },
      address: "160 Leeds Road",
      "address line 2": "Leeds",
      name: "1pizza1",
      outcode: "LS26",
      postcode: "0JH",
      rating: 4,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-1st-choice-pizza-ws11/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b3b"
      },
      address: "1 Walsall Road",
      "address line 2": "Cannock",
      name: "1st Choice Pizza",
      outcode: "WS11",
      postcode: "0HG",
      rating: 4,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-1stclasspizza-bs7/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b3c"
      },
      address: "388 Filton Avenue",
      "address line 2": "Bristol",
      name: "1st Class Pizza",
      outcode: "BS7",
      postcode: "0BE",
      rating: 4.5,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-1stclasspizza-bs7/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b3d"
      },
      address: "388 Filton Avenue",
      "address line 2": "Bristol",
      name: "1st Class Pizza",
      outcode: "BS7",
      postcode: "0BE",
      rating: 4.5,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-1stclasspizza-ng18/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b3e"
      },
      address: "70 Carter Lane",
      "address line 2": "Mansfield",
      name: "1st Class Pizza",
      outcode: "NG18",
      postcode: "3DH",
      rating: 4.5,
      type_of_food: "Pizza"
    },
    {
      URL:
        "http://www.just-eat.co.uk/restaurants-1st-class-pizza-and-kebab-house-nottingham/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b3f"
      },
      address: "470 Vernon Road",
      "address line 2": "Old Basford",
      name: "1st Class Pizza & Kebab House",
      outcode: "NG6",
      postcode: "0AT",
      rating: 4,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-241-pizza-ol1/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b40"
      },
      address: "137 Yorkshire Street",
      "address line 2": "Oldham",
      name: "2 4 1 Pizza",
      outcode: "OL1",
      postcode: "3TH",
      rating: 5.5,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-2for1pizza-le10/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b41"
      },
      address: "19 Regent Street",
      "address line 2": "Hinckley",
      name: "2 for 1 Pizza Place",
      outcode: "LE10",
      postcode: "0AZ",
      rating: 5.5,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-2-spice/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b42"
      },
      address: "2 Station Approach",
      "address line 2": "Upminster",
      name: "2 Spice",
      outcode: "RM14",
      postcode: "2TH",
      rating: 5.5,
      type_of_food: "Curry"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-1treatu-b26/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b43"
      },
      address: "1776 Coventry Road",
      "address line 2": "Birmingham",
      name: "2 Treat U",
      outcode: "B26",
      postcode: "1PB",
      rating: 5.5,
      type_of_food: "Pizza"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-23rdstreetpizza-m14/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b44"
      },
      address: "317 Wilmslow Road",
      "address line 2": "Fallowfield",
      name: "23rd Street Pizza",
      outcode: "M14",
      postcode: "6NW",
      rating: 5,
      type_of_food: "American"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-23rdstreetpizza-m14/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b45"
      },
      address: "317 Wilmslow Road",
      "address line 2": "Fallowfield",
      name: "23rd Street Pizza",
      outcode: "M14",
      postcode: "6NW",
      rating: 5,
      type_of_food: "American"
    },
    {
      URL: "http://www.just-eat.co.uk/restaurants-241-pizza/menu",
      _id: {
        $oid: "55f14312c7447c3da7051b46"
      },
      address: "107 King Richards Road",
      "address line 2": "Leicester",
      name: "241 Pizza",
      outcode: "LE3",
      postcode: "5QG",
      rating: 5,
      type_of_food: "Pizza"
    }
  ];

export default data;