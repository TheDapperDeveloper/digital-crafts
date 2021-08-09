Limbo = "where no balance is"
dantesHashOfInferno = {
  "level1": {
    "name": Limbo,
    "contents": [1, 2, 3, 4, 5, 6, 7, 89, 9, 57, 345, 2, 4123, 4423, 4, 234, 24],
  },
  "level2": {
    "name": "Lust",
    "contents": [12, [56, 56, 56], "swag"],
  },
  "level3": {
    "name": "Gluttony",
    "contents": [{ "volume": 92, "sanctum": "lorem ipsum", "tower": ["crown"] }],
  },
  "level4": {
    "name": "Greed",
    "contents": [{ "fourth": "fourth", "number4": 4 }],
  },
  "level5": {
    "name": "Anger",
    "contents": [
      {
        "reee": 92,
        "reelorum": "latin for ree",
        "reeeeeee": ["angryreeeee", { "anger": "you need to calm down" }],
      },
    ],
  },
  "level6": {
    "name": "Heresy",
    "contents": [],
  },
  "level7": {
    "name": "Violence",
    "contents": [],
  },
  "level8": {
    "name": "Fraud",
    "contents": [],
  },
  "level9": {
    "name": "Treachery",
    "contents": [
      {
        "volume": 92,
        "sanctum": "lorem ipsum",
        "tower": [
          {
            "whywhywhy": 92,
            "reelorum": "latin for ree",
            "ahhhhhh": [
              "angryryyyyyy",
              {
                "anger": "you need to calm down",
                "secret": [
                  { "theSecretIs": "Joe is sorry he gave you this exercise" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

#Access the contents of level1, print value 234

print(dantesHashOfInferno["level1"]["contents"][-2])

#Access the contents of level3, print out the first index of tower

print(dantesHashOfInferno["level3"]["contents"][0]["tower"])

#Access the contents of level5, print out "you need to calm down" by accessing it's key

print(dantesHashOfInferno["level5"]["contents"][-1]["reeeeeee"][-1]["anger"])

#Access the final layer of the inferno, and print out the secret, specifically the value of theSecretIs 

print(dantesHashOfInferno["level9"]["contents"][-1]["tower"][0]["ahhhhhh"][-1]["secret"])

