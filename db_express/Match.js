const match = {
  "users": ["u1", "u2", "u3", "u4", "u5", "u6"],
  "labels": ["500m", "1000m", "1500m", "2000m"],
  "entries": [
    {
      "id": "e1",
      "user": ["u1"],
      "label": "SKA",
      "color": "rgba(23, 64, 115, 1)",
      "interval": [90, 93, 94, 89]
    },
    {
      "id": "e2",
      "user": ["u1"],
      "label": "NER",
      "color": "rgba(153, 0, 0, 1)",
      "interval": [87, 90, 91, 89]
    },
    {
      "id": "e3",
      "user": ["u1"],
      "label": "LAG",
      "color": "rgba(234, 26, 53, 1)",
      "interval": [90, 89, 91, 89]
    }
  ]
}

module.exports = match;
