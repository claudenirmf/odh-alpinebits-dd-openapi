specification = 
{
  "openapi": "3.0.3",
  "externalDocs": {
    "url": "https://www.alpinebits.org/destinationdata/"
  },
  "info": {
    "title": "AlpineBits DestinationData Reference Server",
    "version": "2021-04",
    "license": {
      "name": "GPLv3"
    },
    "description": "The AlpineBits DestinationData is an standard for the exchange of data in the alpine tourism sector through REST APIs. This standard relies on well-defined and widely adopted standards, such as JSON Schema, JSON:API, and GeoJSON, to offer a high-quality API design. This document presents an OpenAPI-based documentation of the AlpineBits DestinationData standard. It is intended as a start point for server and client developers to the standard itself and can used by server developers to provide documentation tailored for their implementations.",
    "contact": {
      "name": "AlpineBits Alliance (Editorial)",
      "email": "info@alpinebits.org"
    }
  },
  "servers": [
    {
      "url": "https://destinationdata.alpinebits.opendatahub.bz.it/",
      "description": "OpenDataHub Server"
    },
    {
      "url": "https://example.com/",
      "description": "Example Server URL"
    }
  ],
  "tags": [
    {
      "name": "Base",
      "description": "Requests to base endpoints"
    },
    {
      "name": "Categories",
      "description": "Requests to resources of type `categories` and related"
    },
    {
      "name": "Events",
      "description": "Requests to resources of type `events` and related"
    },
    {
      "name": "Features",
      "description": "Requests to resources of type `features` and related"
    },
    {
      "name": "Lifts",
      "description": "Requests to resources of type `lifts` and related"
    },
    {
      "name": "Mountain Areas",
      "description": "Requests to resources of type `mountainAreas` and related"
    },
    {
      "name": "Ski Slopes",
      "description": "Requests to resources of type `skiSlopes` and related"
    },
    {
      "name": "Snowparks",
      "description": "Requests to resources of type `snowparks` and related"
    }
  ],
  "paths": {
    "/": {
      "get": {
        "operationId": "/",
        "description": "Retrieves links to the  implemented versions of the AlpineBits DestinationData standard.",
        "tags": [
          "Base"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "links": {
                    "self": "https://destinationdata.alpinebits.opendatahub.bz.it/",
                    "1.0": "https://destinationdata.alpinebits.opendatahub.bz.it/1.0/",
                    "2021-04": "https://destinationdata.alpinebits.opendatahub.bz.it/2021-04/"
                  },
                  "data": null
                }
              }
            }
          }
        }
      }
    },
    "/2021-04": {
      "get": {
        "operationId": "/2021-04",
        "description": "Retrieves links to the base endpoints of available resource types.",
        "tags": [
          "Base"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "links": {
                    "self": "https://example.com/2021-04/",
                    "categories": "https://example.com/2021-04/categories",
                    "events": "https://example.com/2021-04/events",
                    "features": "https://example.com/2021-04/features",
                    "lifts": "https://example.com/2021-04/lifts",
                    "mountainAreas": "https://example.com/2021-04/mountainAreas",
                    "skiSlopes": "https://example.com/2021-04/skiSlopes",
                    "snowparks": "https://example.com/2021-04/snowparks"
                  },
                  "data": null
                }
              }
            }
          }
        }
      }
    },
    "/2021-04/categories": {
      "get": {
        "description": "Retrieves a collection of resources of type `categories`.",
        "tags": [
          "Categories"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/2"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/3"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "meta": {
                    "count": 10,
                    "pages": 10
                  },
                  "links": {
                    "next": "https://example.com/2021-04/categories?page[number]=2",
                    "prev": "https://example.com/2021-04/categories?page[number]=1",
                    "first": "https://example.com/2021-04/categories?page[number]=1",
                    "last": "https://example.com/2021-04/categories?page[number]=10",
                    "self": "https://example.com/2021-04/categories"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "categories",
                      "id": "example:soccerEvent",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2021-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "abstract": {
                          "ita": "Un evento sportivo legato al calcio.",
                          "deu": "Ein Sportereignis, das mit Fu??ball zu tun hat.",
                          "eng": "A sports event related to soccer."
                        },
                        "description": {
                          "ita": "Un evento sportivo legato al calcio, per esempio una partita di calcio o un incontro con i giocatori.",
                          "deu": "Ein Sportereignis mit Bezug zum Fu??ball, z. B. ein Fu??ballspiel oder ein Meet-and-Greet mit Spielern.",
                          "eng": "A sports event related to soccer, for example a soccer match or a meet-and-greet with players."
                        },
                        "name": {
                          "ita": "Evento di Calcio",
                          "deu": "Fu??ball-Event",
                          "eng": "Soccer Event"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "events"
                        ],
                        "shortName": {
                          "eng": "Soccer Event"
                        },
                        "url": "https://en.wikipedia.org/wiki/Association_football"
                      },
                      "relationships": {
                        "children": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "example:sub19SoccerMatch"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/categories/example:soccerEvent/children"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/categories/example:soccerEvent/multimediaDescriptions"
                          }
                        },
                        "parents": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "schema:SportsEvent"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/categories/example:soccerEvent/parents"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/categories/example:soccerEvent",
                        "resources": {
                          "events": "https://example.com/2021-04/events?filter[categories][any]=example:soccerEvent"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/2021-04/categories/{id}": {
      "get": {
        "description": "Retrieves a single resource type `categories` with a matching `{id}`.",
        "tags": [
          "Categories"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/categories/example:soccerEvent"
                  },
                  "included": null,
                  "data": {
                    "type": "categories",
                    "id": "example:soccerEvent",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2021-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "abstract": {
                        "ita": "Un evento sportivo legato al calcio.",
                        "deu": "Ein Sportereignis, das mit Fu??ball zu tun hat.",
                        "eng": "A sports event related to soccer."
                      },
                      "description": {
                        "ita": "Un evento sportivo legato al calcio, per esempio una partita di calcio o un incontro con i giocatori.",
                        "deu": "Ein Sportereignis mit Bezug zum Fu??ball, z. B. ein Fu??ballspiel oder ein Meet-and-Greet mit Spielern.",
                        "eng": "A sports event related to soccer, for example a soccer match or a meet-and-greet with players."
                      },
                      "name": {
                        "ita": "Evento di Calcio",
                        "deu": "Fu??ball-Event",
                        "eng": "Soccer Event"
                      },
                      "namespace": "example",
                      "resourceTypes": [
                        "events"
                      ],
                      "shortName": {
                        "eng": "Soccer Event"
                      },
                      "url": "https://en.wikipedia.org/wiki/Association_football"
                    },
                    "relationships": {
                      "children": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "example:sub19SoccerMatch"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/categories/example:soccerEvent/children"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/categories/example:soccerEvent/multimediaDescriptions"
                        }
                      },
                      "parents": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "schema:SportsEvent"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/categories/example:soccerEvent/parents"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/categories/example:soccerEvent",
                      "resources": {
                        "events": "https://example.com/2021-04/events?filter[categories][any]=example:soccerEvent"
                      }
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          },
          "410": {
            "description": "410 Gone"
          }
        }
      }
    },
    "/2021-04/categories/{id}/children": {
      "get": {
        "description": "Retrieves the resources in the relationship `children` of a resource of type `categories`.",
        "tags": [
          "Categories"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/categories/example:category/children"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "categories",
                      "id": "example:subcategory",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Child Category"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "events"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/categories/example:subcategory",
                        "resources": {
                          "events": "https://example.com/2021-04/events?filter[categories][any]=example:subcategory"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/categories/{id}/multimediaDescriptions": {
      "get": {
        "description": "Retrieves the resources in the relationship `multimediaDescriptions` of a resource of type `categories`.",
        "tags": [
          "Categories"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/categories/1/multimediaDescriptions"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "mediaObjects",
                      "id": "1",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "contentType": "audio/mpeg3",
                        "description": null,
                        "duration": null,
                        "height": null,
                        "license": null,
                        "name": null,
                        "shortName": null,
                        "url": "https://example.com/audio.mp3",
                        "width": null
                      },
                      "relationships": {
                        "categories": null,
                        "copyrightOwner": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mediaObjects/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found`"
          }
        }
      }
    },
    "/2021-04/categories/{id}/parents": {
      "get": {
        "description": "Retrieves the resources in the relationship `parents` of a resource of type `categories`.",
        "tags": [
          "Categories"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/categories/example:category/parents"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "categories",
                      "id": "example:supercategory",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Parent Category"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "events"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/categories/example:supercategory",
                        "resources": {
                          "events": "https://example.com/2021-04/events?filter[categories][any]=example:supercategory"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/events": {
      "get": {
        "description": "Retrieves a collection of resources of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/2"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/3"
          },
          {
            "name": "filter",
            "in": "query",
            "style": "deepObject",
            "explode": true,
            "allowReserved": true,
            "description": "Filters resources in the endpoint based on \"label-specific\" or \"simple generic\" filters. The available filters are:\n  - `filter[lang]`: filters resources containing text data in the desired\n  languages (e.g., `filter[lang]=eng,ita,deu`). Receives comma-separated\n  ISO 639-3 languages tags.\n\n  - `filter[lastUpdate][gt]`: filters resources updated after a desired\n  date (e.g., `filter[lastUpdate][gt]=2021-04-01`). Receives an ISO 8601\n  date string.\n  \n  - `filter[lastUpdate][lt]`: filters resources updated before a desired\n  date (e.g., `filter[lastUpdate][lt]=2021-04-01`). Receives an ISO 8601\n  date string.\n\n  - `filter[startDate][gt]`: filters events with a start date greater than a\n  desired date (e.g., `filter[startDate][gt]=2021-04-01`). Receives an ISO\n  8601 date string.\n  \n  - `filter[startDate][lt]`: filters events with a start date lower than a\n  desired date (e.g., `filter[startDate][lt]=2021-04-01`). Receives an ISO\n  8601 date string.\n\n  - `filter[endDate][gt]`: filters events with a end date greater than a\n  desired date (e.g., `filter[endDate][gt]=2021-04-01`). Receives an ISO\n  8601 date string.\n  \n  - `filter[endDate][lt]`: filters events with a end date lower than a\n  desired date (e.g., `filter[endDate][lt]=2021-04-01`). Receives an ISO\n  8601 date string.\n\n  - `filter[categories][any]`: filters resources having any of the desired\n  categories (e.g., `filter[categories][any]=example:cat1,example:cat2`).\n  Receives comma-separated category ids.\n\n  - `filter[categories][all]`: filters resources having all of the desired\n  categories (e.g., `filter[categories][all]=example:cat1,example:cat2`).\n  Receives comma-separated category ids.\n\n  - `filter[venues][near]`: filters resources whose venues' geometries are\n  near a desired GPS point (e.g.,\n  `filter[venues][near]=11.309245,46.862025,10000`). Receives three\n  comma-separated numbers in the following order: a longitude value, a\n  latitude value, and a proximity radius in meters.\n\n\nIf the server is unable process any filter, it shall respond with `400 Bad Request`.\n",
            "schema": {
              "type": "object",
              "properties": {
                "lang": {
                  "type": "string"
                },
                "lastUpdate": {
                  "type": "object",
                  "properties": {
                    "gt": {
                      "type": "string"
                    },
                    "lt": {
                      "type": "string"
                    }
                  }
                },
                "categories": {
                  "type": "object",
                  "properties": {
                    "any": {
                      "type": "string"
                    },
                    "all": {
                      "type": "string"
                    }
                  }
                },
                "geometries": {
                  "type": "object",
                  "properties": {
                    "near": {
                      "type": "string"
                    }
                  }
                }
              },
              "example": {
                "lang": "eng,ita,deu",
                "lastUpdate": {
                  "gt": "2021-04-01"
                },
                "categories": {
                  "any": "example:category"
                },
                "geometries": {
                  "near": "11.309245,46.862025,10000"
                }
              }
            }
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/5"
          },
          {
            "name": "sort",
            "in": "query",
            "style": "form",
            "explode": false,
            "description": "Requests for retrieved resources to be sorted by the value some selected field. Sorting requests may be in ascending (e.g., `sort=startDate`) or descending order (e.g., `sort=-startDate`) by prefixing the field name with a MINUS (U+002D) character. Sorted requests may also take multiple fields as input as well as nested fields (e).g., `sort=-startDate,name.eng`). If a request includes both `random` and `sort` requests, the server shall respond with `400 Bad Request`. If a server is unable to use any selected fields to sort resources, it shall respond with `400 Bad Request`.",
            "schema": {
              "type": "string",
              "minLength": 1,
              "pattern": "(\\w|-)+(,(\\w|-)+)*",
              "example": "startDate"
            }
          },
          {
            "name": "random",
            "in": "query",
            "style": "form",
            "explode": false,
            "description": "Requests for resources to be retrieved in a pseudo-random sequence from a provided seed (e.g., `random=0`). The server shall provide consistent pagination over the same seed value. If a request includes both `random` and `sort` requests, the server shall respond with `400 Bad Request`.",
            "schema": {
              "type": "string",
              "minLength": 1,
              "example": 10
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "meta": {
                    "count": 10,
                    "pages": 10
                  },
                  "links": {
                    "next": "https://example.com/2021-04/events?page[number]=2",
                    "prev": "https://example.com/2021-04/events?page[number]=1",
                    "first": "https://example.com/2021-04/events?page[number]=1",
                    "last": "https://example.com/2021-04/events?page[number]=10",
                    "self": "https://example.com/2021-04/events"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "events",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "eng": "S??dtirol Jazz Festival 2020",
                          "deu": "S??dtirol Jazz Festival 2020",
                          "ita": "S??dtirol Jazz Festival 2020"
                        },
                        "shortName": {
                          "eng": "S??dtirol Jazz Festival 2020"
                        },
                        "description": {
                          "deu": "Beim S??dtirol Jazzfestival Alto Adige wagen sich Solisten und Ensembles nicht nur in schwindelerregende musikalische ???H??hen??? vor, sondern besteigen, mit ihren Instrumenten im Gep??ck, sogar ???echte??? Berge und bespielen dabei eine atemberaubende alpine Landschaft. Das Festival selbst beschreitet oft ganz neue Wege: selbstbewusst und sich mitunter ??ber zerkl??ftete Spalten herantastend, versucht es in neue Klanglandschaften vorzudringen. Mainstream und Konzerts??le sind beim S??dtirol Jazzfestival Alto Adige vom Aussterben bedroht...."
                        },
                        "abstract": {
                          "deu": "Das S??dtirol Jazzfestival Alto Adige ist ein in S??dtirol stattfindendes Musikfestival f??r Jazz und experimentelle Musik."
                        },
                        "startDate": "2020-06-26T21:00:00+00:00",
                        "endDate": "2020-07-07T23:30:00+00:00",
                        "url": "https://www.suedtiroljazzfestival.com/",
                        "status": "published",
                        "capacity": 1000
                      },
                      "relationships": {
                        "series": {
                          "data": {
                            "type": "eventSeries",
                            "id": "1"
                          },
                          "links": {
                            "related": "https://example.com/2021-04/events/1/eventSeries"
                          }
                        },
                        "publisher": {
                          "data": {
                            "type": "agents",
                            "id": "1"
                          },
                          "links": {
                            "related": "https://example.com/2021-04/events/1/publisher"
                          }
                        },
                        "organizers": {
                          "data": [
                            {
                              "type": "agents",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/events/1/organizers"
                          }
                        },
                        "sponsors": {
                          "data": [
                            {
                              "type": "agents",
                              "id": "3"
                            },
                            {
                              "type": "agents",
                              "id": "4"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/events/1/sponsors"
                          }
                        },
                        "contributors": {
                          "data": [
                            {
                              "type": "agents",
                              "id": "5"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/events/1/contributors"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "schema:MusicEvent"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/events/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            },
                            {
                              "type": "mediaObjects",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/events/1/multimediaDescriptions"
                          }
                        },
                        "venues": {
                          "data": [
                            {
                              "type": "venues",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/events/1/venues"
                          }
                        },
                        "subEvents": {
                          "data": [
                            {
                              "type": "events",
                              "id": "2"
                            },
                            {
                              "type": "events",
                              "id": "3"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/events/1/subEvents"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/events/1"
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/2021-04/events/{id}": {
      "get": {
        "description": "Retrieves a single resource type `events` with a matching `{id}`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/events/1"
                  },
                  "included": null,
                  "data": {
                    "type": "events",
                    "id": "1",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2020-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "name": {
                        "eng": "S??dtirol Jazz Festival 2020",
                        "deu": "S??dtirol Jazz Festival 2020",
                        "ita": "S??dtirol Jazz Festival 2020"
                      },
                      "shortName": {
                        "eng": "S??dtirol Jazz Festival 2020"
                      },
                      "description": {
                        "deu": "Beim S??dtirol Jazzfestival Alto Adige wagen sich Solisten und Ensembles nicht nur in schwindelerregende musikalische ???H??hen??? vor, sondern besteigen, mit ihren Instrumenten im Gep??ck, sogar ???echte??? Berge und bespielen dabei eine atemberaubende alpine Landschaft. Das Festival selbst beschreitet oft ganz neue Wege: selbstbewusst und sich mitunter ??ber zerkl??ftete Spalten herantastend, versucht es in neue Klanglandschaften vorzudringen. Mainstream und Konzerts??le sind beim S??dtirol Jazzfestival Alto Adige vom Aussterben bedroht...."
                      },
                      "abstract": {
                        "deu": "Das S??dtirol Jazzfestival Alto Adige ist ein in S??dtirol stattfindendes Musikfestival f??r Jazz und experimentelle Musik."
                      },
                      "startDate": "2020-06-26T21:00:00+00:00",
                      "endDate": "2020-07-07T23:30:00+00:00",
                      "url": "https://www.suedtiroljazzfestival.com/",
                      "status": "published",
                      "capacity": 1000
                    },
                    "relationships": {
                      "series": {
                        "data": {
                          "type": "eventSeries",
                          "id": "1"
                        },
                        "links": {
                          "related": "https://example.com/2021-04/events/1/eventSeries"
                        }
                      },
                      "publisher": {
                        "data": {
                          "type": "agents",
                          "id": "1"
                        },
                        "links": {
                          "related": "https://example.com/2021-04/events/1/publisher"
                        }
                      },
                      "organizers": {
                        "data": [
                          {
                            "type": "agents",
                            "id": "2"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/events/1/organizers"
                        }
                      },
                      "sponsors": {
                        "data": [
                          {
                            "type": "agents",
                            "id": "3"
                          },
                          {
                            "type": "agents",
                            "id": "4"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/events/1/sponsors"
                        }
                      },
                      "contributors": {
                        "data": [
                          {
                            "type": "agents",
                            "id": "5"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/events/1/contributors"
                        }
                      },
                      "categories": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "schema:MusicEvent"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/events/1/categories"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "1"
                          },
                          {
                            "type": "mediaObjects",
                            "id": "2"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/events/1/multimediaDescriptions"
                        }
                      },
                      "venues": {
                        "data": [
                          {
                            "type": "venues",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/events/1/venues"
                        }
                      },
                      "subEvents": {
                        "data": [
                          {
                            "type": "events",
                            "id": "2"
                          },
                          {
                            "type": "events",
                            "id": "3"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/events/1/subEvents"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/events/1"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          },
          "410": {
            "description": "410 Gone"
          }
        }
      }
    },
    "/2021-04/events/{id}/categories": {
      "get": {
        "description": "Retrieves the resources in the relationship `categories` of a resource of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/events/1/categories"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "categories",
                      "id": "example:category",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Category"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "events"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/categories/example:category",
                        "resources": {
                          "events": "https://example.com/2021-04/events?filter[categories][any]=example:category"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/events/{id}/contributors": {
      "get": {
        "description": "Retrieves the resources in the relationship `contributors` of a resource of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/events/1/contributors"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "agents",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "abstract": {
                          "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee...",
                          "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas...",
                          "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions..."
                        },
                        "contactPoints": [
                          {
                            "email": "info@noi.bz.it",
                            "telephone": "+39 0471 066 600",
                            "address": {
                              "street": {
                                "ita": "Piazza Universit?? 1"
                              },
                              "city": {
                                "ita": "Bolzano"
                              },
                              "region": {
                                "ita": "Trentino-Alto Adige"
                              },
                              "country": "IT",
                              "zipcode": "39100",
                              "complement": {
                                "ita": "Ufficio 3.07"
                              },
                              "categories": [
                                "example:main"
                              ]
                            },
                            "availableHours": {
                              "dailySchedules": {
                                "2020-12-23": [
                                  {
                                    "opens": "08:00:00",
                                    "closes": "12:00:00"
                                  }
                                ],
                                "2020-12-25": null
                              },
                              "weeklySchedules": [
                                {
                                  "validFrom": "2020-01-01",
                                  "validTo": "2020-12-31",
                                  "monday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "tuesday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "wednesday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "thursday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "friday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "saturday": null,
                                  "sunday": null
                                }
                              ]
                            }
                          }
                        ],
                        "description": {
                          "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee, al crocevia tra il mondo economico e culturale tedesco e italiano.",
                          "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas an der Schnittstelle zwischen dem deutschsprachigen und italienischen Kultur- und Wirtschaftsraum.",
                          "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions, at the crossroads between the German-speaking and Italian economies and cultures."
                        },
                        "name": {
                          "ita": "Libera Univerist?? di Bolzano",
                          "deu": "Freie Universit??t Bozen",
                          "eng": "Free University of Bozen-Bolzano"
                        },
                        "shortName": {
                          "eng": "Unibz"
                        },
                        "url": "https://www.unibz.it"
                      },
                      "relationships": {
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "alpinebits:organization"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/agents/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/agents/1/multimediaDescriptions"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/agents/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/events/{id}/multimediaDescriptions": {
      "get": {
        "description": "Retrieves the resources in the relationship `multimediaDescriptions` of a resource of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/events/1/multimediaDescriptions"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "mediaObjects",
                      "id": "1",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "contentType": "audio/mpeg3",
                        "description": null,
                        "duration": null,
                        "height": null,
                        "license": null,
                        "name": null,
                        "shortName": null,
                        "url": "https://example.com/audio.mp3",
                        "width": null
                      },
                      "relationships": {
                        "categories": null,
                        "copyrightOwner": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mediaObjects/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/events/{id}/organizers": {
      "get": {
        "description": "Retrieves the resources in the relationship `organizers` of a resource of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/events/1/organizers"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "agents",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "abstract": {
                          "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee...",
                          "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas...",
                          "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions..."
                        },
                        "contactPoints": [
                          {
                            "email": "info@noi.bz.it",
                            "telephone": "+39 0471 066 600",
                            "address": {
                              "street": {
                                "ita": "Piazza Universit?? 1"
                              },
                              "city": {
                                "ita": "Bolzano"
                              },
                              "region": {
                                "ita": "Trentino-Alto Adige"
                              },
                              "country": "IT",
                              "zipcode": "39100",
                              "complement": {
                                "ita": "Ufficio 3.07"
                              },
                              "categories": [
                                "example:main"
                              ]
                            },
                            "availableHours": {
                              "dailySchedules": {
                                "2020-12-23": [
                                  {
                                    "opens": "08:00:00",
                                    "closes": "12:00:00"
                                  }
                                ],
                                "2020-12-25": null
                              },
                              "weeklySchedules": [
                                {
                                  "validFrom": "2020-01-01",
                                  "validTo": "2020-12-31",
                                  "monday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "tuesday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "wednesday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "thursday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "friday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "saturday": null,
                                  "sunday": null
                                }
                              ]
                            }
                          }
                        ],
                        "description": {
                          "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee, al crocevia tra il mondo economico e culturale tedesco e italiano.",
                          "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas an der Schnittstelle zwischen dem deutschsprachigen und italienischen Kultur- und Wirtschaftsraum.",
                          "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions, at the crossroads between the German-speaking and Italian economies and cultures."
                        },
                        "name": {
                          "ita": "Libera Univerist?? di Bolzano",
                          "deu": "Freie Universit??t Bozen",
                          "eng": "Free University of Bozen-Bolzano"
                        },
                        "shortName": {
                          "eng": "Unibz"
                        },
                        "url": "https://www.unibz.it"
                      },
                      "relationships": {
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "alpinebits:organization"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/agents/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/agents/1/multimediaDescriptions"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/agents/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/events/{id}/publisher": {
      "get": {
        "description": "Retrieves the resources in the relationship `publisher` of a resource of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/events/1/publisher"
                  },
                  "included": null,
                  "data": {
                    "type": "agents",
                    "id": "1",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2020-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "abstract": {
                        "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee...",
                        "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas...",
                        "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions..."
                      },
                      "contactPoints": [
                        {
                          "email": "info@noi.bz.it",
                          "telephone": "+39 0471 066 600",
                          "address": {
                            "street": {
                              "ita": "Piazza Universit?? 1"
                            },
                            "city": {
                              "ita": "Bolzano"
                            },
                            "region": {
                              "ita": "Trentino-Alto Adige"
                            },
                            "country": "IT",
                            "zipcode": "39100",
                            "complement": {
                              "ita": "Ufficio 3.07"
                            },
                            "categories": [
                              "example:main"
                            ]
                          },
                          "availableHours": {
                            "dailySchedules": {
                              "2020-12-23": [
                                {
                                  "opens": "08:00:00",
                                  "closes": "12:00:00"
                                }
                              ],
                              "2020-12-25": null
                            },
                            "weeklySchedules": [
                              {
                                "validFrom": "2020-01-01",
                                "validTo": "2020-12-31",
                                "monday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "tuesday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "wednesday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "thursday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "friday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "saturday": null,
                                "sunday": null
                              }
                            ]
                          }
                        }
                      ],
                      "description": {
                        "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee, al crocevia tra il mondo economico e culturale tedesco e italiano.",
                        "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas an der Schnittstelle zwischen dem deutschsprachigen und italienischen Kultur- und Wirtschaftsraum.",
                        "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions, at the crossroads between the German-speaking and Italian economies and cultures."
                      },
                      "name": {
                        "ita": "Libera Univerist?? di Bolzano",
                        "deu": "Freie Universit??t Bozen",
                        "eng": "Free University of Bozen-Bolzano"
                      },
                      "shortName": {
                        "eng": "Unibz"
                      },
                      "url": "https://www.unibz.it"
                    },
                    "relationships": {
                      "categories": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "alpinebits:organization"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/agents/1/categories"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/agents/1/multimediaDescriptions"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/agents/1"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/events/{id}/series": {
      "get": {
        "description": "Retrieves the resources in the relationship `series` of a resource of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/eventSeries/1"
                  },
                  "included": null,
                  "data": {
                    "type": "eventSeries",
                    "id": "1",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2020-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "abstract": {
                        "eng": "The S??dtirol Jazzfestival Alto Adige was held for the first time in 1982 under the name of ???Jazz Summer???..."
                      },
                      "description": {
                        "eng": "The S??dtirol Jazzfestival Alto Adige was held for the first time in 1982 under the name of ???Jazz Summer???, which went on to become ???Jazz & Other???. While in the early years the concerts were played only in Bolzano itself, today the festival stretches throughout the whole of South Tyrol and beyond."
                      },
                      "frequency": "annual",
                      "name": {
                        "eng": "S??dtirol Jazz Festival",
                        "ita": "S??dtirol Jazz Festival",
                        "deu": "S??dtirol Jazz Festival"
                      },
                      "shortName": {
                        "eng": "S??dtirol Jazz Festival"
                      },
                      "url": "https://www.suedtiroljazzfestival.com/"
                    },
                    "relationships": {
                      "categories": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "example:festival"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/eventSeries/1/categories"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/eventSeries/1/multimediaDescriptions"
                        }
                      },
                      "editions": {
                        "data": [
                          {
                            "type": "events",
                            "id": "1"
                          },
                          {
                            "type": "events",
                            "id": "2"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/eventSeries/1/editions"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/eventSeries/1"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/events/{id}/sponsors": {
      "get": {
        "description": "Retrieves the resources in the relationship `sponsors` of a resource of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/events/1/sponsors"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "agents",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "abstract": {
                          "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee...",
                          "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas...",
                          "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions..."
                        },
                        "contactPoints": [
                          {
                            "email": "info@noi.bz.it",
                            "telephone": "+39 0471 066 600",
                            "address": {
                              "street": {
                                "ita": "Piazza Universit?? 1"
                              },
                              "city": {
                                "ita": "Bolzano"
                              },
                              "region": {
                                "ita": "Trentino-Alto Adige"
                              },
                              "country": "IT",
                              "zipcode": "39100",
                              "complement": {
                                "ita": "Ufficio 3.07"
                              },
                              "categories": [
                                "example:main"
                              ]
                            },
                            "availableHours": {
                              "dailySchedules": {
                                "2020-12-23": [
                                  {
                                    "opens": "08:00:00",
                                    "closes": "12:00:00"
                                  }
                                ],
                                "2020-12-25": null
                              },
                              "weeklySchedules": [
                                {
                                  "validFrom": "2020-01-01",
                                  "validTo": "2020-12-31",
                                  "monday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "tuesday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "wednesday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "thursday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "friday": [
                                    {
                                      "opens": "08:00:00+01:00",
                                      "closes": "12:00:00+01:00"
                                    },
                                    {
                                      "opens": "14:00:00+01:00",
                                      "closes": "18:00:00+01:00"
                                    }
                                  ],
                                  "saturday": null,
                                  "sunday": null
                                }
                              ]
                            }
                          }
                        ],
                        "description": {
                          "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee, al crocevia tra il mondo economico e culturale tedesco e italiano.",
                          "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas an der Schnittstelle zwischen dem deutschsprachigen und italienischen Kultur- und Wirtschaftsraum.",
                          "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions, at the crossroads between the German-speaking and Italian economies and cultures."
                        },
                        "name": {
                          "ita": "Libera Univerist?? di Bolzano",
                          "deu": "Freie Universit??t Bozen",
                          "eng": "Free University of Bozen-Bolzano"
                        },
                        "shortName": {
                          "eng": "Unibz"
                        },
                        "url": "https://www.unibz.it"
                      },
                      "relationships": {
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "alpinebits:organization"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/agents/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/agents/1/multimediaDescriptions"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/agents/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/events/{id}/subEvents": {
      "get": {
        "description": "Retrieves the resources in the relationship `subEvents` of a resource of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/events/1/subEvents"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "events",
                      "id": "2",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "name": {
                          "eng": "S??dtirol Jazz Festival 2018"
                        },
                        "shortName": null,
                        "description": null,
                        "abstract": null,
                        "startDate": "2018-06-29T00:00:00+00:00",
                        "endDate": null,
                        "url": null,
                        "status": null,
                        "capacity": null
                      },
                      "relationships": {
                        "series": null,
                        "publisher": {
                          "data": {
                            "type": "agents",
                            "id": "1"
                          },
                          "links": {
                            "related": "https://example.com/2021-04/events/2/publisher"
                          }
                        },
                        "organizers": {
                          "data": [
                            {
                              "type": "agents",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/events/2/organizers"
                          }
                        },
                        "sponsors": null,
                        "contributors": null,
                        "categories": null,
                        "multimediaDescriptions": null,
                        "venues": {
                          "data": [
                            {
                              "type": "venues",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/events/2/venues"
                          }
                        },
                        "subEvents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/events/2"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/events/{id}/venues": {
      "get": {
        "description": "Retrieves the resources in the relationship `venues` of a resource of type `events`.",
        "tags": [
          "Events"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/events/1/venues"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "venues",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "abstract": {
                          "eng": "The Auditorium 1 of the Free University of Bozen-Bolzano provides a great space for keynotes, lectures and presentations."
                        },
                        "address": {
                          "street": {
                            "ita": "Piazza Universit??, 1",
                            "deu": "Universit??tsplatz 1"
                          },
                          "city": {
                            "deu": "Bozen"
                          },
                          "region": {
                            "deu": "Trentino-S??dtirol"
                          },
                          "country": "IT",
                          "zipcode": "39100",
                          "complement": {
                            "deu": "Hauptgeb??ude"
                          },
                          "categories": [
                            "example/building"
                          ]
                        },
                        "area": 150,
                        "description": {
                          "eng": "The Auditorium 1 of the Free University of Bozen-Bolzano provides a great space for keynotes, lectures and presentations, being available to host events related academic, provincial and cultural topics."
                        },
                        "geometries": [
                          {
                            "type": "Point",
                            "coordinates": [
                              11.35087251663208,
                              46.49873937419277
                            ]
                          }
                        ],
                        "howToArrive": {
                          "eng": "From the train station, the Free University of Bozen-Bolzano is accessible in a 5 minutes walk into the historical city center."
                        },
                        "name": {
                          "eng": "Auditorium 1 - Free University of Bozen-Bolzano"
                        },
                        "shortName": {
                          "eng": "Auditorium 1"
                        },
                        "url": "https://example.com/auditorium-1"
                      },
                      "relationships": {
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "example:auditorium"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/venues/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/venues/1/multimediaDescriptions"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/venues/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/features": {
      "get": {
        "description": "Retrieves a collection of resources of type `features`.",
        "tags": [
          "Features"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/2"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/3"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "meta": {
                    "count": 10,
                    "pages": 10
                  },
                  "links": {
                    "next": "https://example.com/2021-04/features?page[number]=2",
                    "prev": "https://example.com/2021-04/features?page[number]=1",
                    "first": "https://example.com/2021-04/features?page[number]=1",
                    "last": "https://example.com/2021-04/features?page[number]=10",
                    "self": "https://example.com/2021-04/features"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "features",
                      "id": "example:snowparkRamp",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2021-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "abstract": {
                          "ita": "Una rampa di snowpark ?? una struttura per la pratica di manovre aeree negli sport invernali radicali.",
                          "deu": "Eine Snowpark-Rampe ist eine Struktur zum ??ben von Flugman??vern im radikalen Wintersport.",
                          "eng": "A snowpark ramp is a structure for the practice of aerial maneuvers in radical winter sports."
                        },
                        "description": {
                          "ita": "Una rampa da snowpark ?? una struttura presente negli snowpark progettata per supportare l'esecuzione di manovre aeree negli sport invernali radicali.",
                          "deu": "Eine Snowpark-Rampe ist eine Einrichtung in Snowparks, die dazu dient, die Ausf??hrung von Flugman??vern bei radikalen Wintersportarten zu unterst??tzen.",
                          "eng": "A snowpark ramp is a feature present in snowparks designed to support the execution of aerial maneuvers in radical winter sports."
                        },
                        "name": {
                          "ita": "Snowpark Ramp",
                          "deu": "Snowpark Rampe",
                          "eng": "Snowpark Ramp"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "snowparks"
                        ],
                        "shortName": {
                          "eng": "Snowpark Ramp"
                        },
                        "url": "https://en.wikipedia.org/wiki/Terrain_park"
                      },
                      "relationships": {
                        "children": {
                          "data": [
                            {
                              "type": "features",
                              "id": "example:snowboardRamp"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/features/example:snowparkRamp/children"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/features/example:snowparkRamp/multimediaDescriptions"
                          }
                        },
                        "parents": {
                          "data": [
                            {
                              "type": "features",
                              "id": "example:radicalSportsRamp"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/features/example:snowparkRamp/parents"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/features/example:snowparkRamp",
                        "resources": {
                          "snowparks": "https://example.com/2021-04/snowparks?filter[features][any]=example:snowparkRamp"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/2021-04/features/{id}": {
      "get": {
        "description": "Retrieves a single resource type `features` with a matching `{id}`.",
        "tags": [
          "Features"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/features/example:snowparkRamp"
                  },
                  "included": null,
                  "data": {
                    "type": "features",
                    "id": "example:snowparkRamp",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2021-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "abstract": {
                        "ita": "Una rampa di snowpark ?? una struttura per la pratica di manovre aeree negli sport invernali radicali.",
                        "deu": "Eine Snowpark-Rampe ist eine Struktur zum ??ben von Flugman??vern im radikalen Wintersport.",
                        "eng": "A snowpark ramp is a structure for the practice of aerial maneuvers in radical winter sports."
                      },
                      "description": {
                        "ita": "Una rampa da snowpark ?? una struttura presente negli snowpark progettata per supportare l'esecuzione di manovre aeree negli sport invernali radicali.",
                        "deu": "Eine Snowpark-Rampe ist eine Einrichtung in Snowparks, die dazu dient, die Ausf??hrung von Flugman??vern bei radikalen Wintersportarten zu unterst??tzen.",
                        "eng": "A snowpark ramp is a feature present in snowparks designed to support the execution of aerial maneuvers in radical winter sports."
                      },
                      "name": {
                        "ita": "Snowpark Ramp",
                        "deu": "Snowpark Rampe",
                        "eng": "Snowpark Ramp"
                      },
                      "namespace": "example",
                      "resourceTypes": [
                        "snowparks"
                      ],
                      "shortName": {
                        "eng": "Snowpark Ramp"
                      },
                      "url": "https://en.wikipedia.org/wiki/Terrain_park"
                    },
                    "relationships": {
                      "children": {
                        "data": [
                          {
                            "type": "features",
                            "id": "example:snowboardRamp"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/features/example:snowparkRamp/children"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/features/example:snowparkRamp/multimediaDescriptions"
                        }
                      },
                      "parents": {
                        "data": [
                          {
                            "type": "features",
                            "id": "example:radicalSportsRamp"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/features/example:snowparkRamp/parents"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/features/example:snowparkRamp",
                      "resources": {
                        "snowparks": "https://example.com/2021-04/snowparks?filter[features][any]=example:snowparkRamp"
                      }
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          },
          "410": {
            "description": "410 Gone"
          }
        }
      }
    },
    "/2021-04/features/{id}/children": {
      "get": {
        "description": "Retrieves the resources in the relationship `children` of a resource of type `features`.",
        "tags": [
          "Features"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/features/example:feature/children"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "features",
                      "id": "example:subfeature",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Child Feature"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "events"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/features/example:subfeature",
                        "resources": {
                          "events": "https://example.com/2021-04/events?filter[features][any]=example:subfeature"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/features/{id}/multimediaDescriptions": {
      "get": {
        "description": "Retrieves the resources in the relationship `multimediaDescriptions` of a resource of type `features`.",
        "tags": [
          "Features"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/features/1/multimediaDescriptions"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "mediaObjects",
                      "id": "1",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "contentType": "audio/mpeg3",
                        "description": null,
                        "duration": null,
                        "height": null,
                        "license": null,
                        "name": null,
                        "shortName": null,
                        "url": "https://example.com/audio.mp3",
                        "width": null
                      },
                      "relationships": {
                        "categories": null,
                        "copyrightOwner": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mediaObjects/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found`"
          }
        }
      }
    },
    "/2021-04/features/{id}/parents": {
      "get": {
        "description": "Retrieves the resources in the relationship `parents` of a resource of type `features`.",
        "tags": [
          "Features"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/features/example:feature/parents"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "features",
                      "id": "example:superfeature",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Parent Feature"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "events"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/features/example:superfeature",
                        "resources": {
                          "events": "https://example.com/2021-04/events?filter[features][any]=example:superfeature"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/lifts": {
      "get": {
        "description": "Retrieves a collection of resources of type `lifts`.",
        "tags": [
          "Lifts"
        ],
        "parameters": [
          {
            "name": "include",
            "in": "query",
            "style": "form",
            "explode": false,
            "description": "Includes resources present in selected relationships in the `included` array of the response. Only relationships of objects in the `data` field can be selected. Relationship names must be separated with a comma (e.g., `include=categories,multimediaDescriptions`). If a selected relationship does not exist among the relationships of resources in `data`, the server shall respond with `400 Bad Request`.",
            "schema": {
              "type": "string",
              "minLength": 1,
              "pattern": "(\\w|-)+(,(\\w|-)+)*"
            }
          },
          {
            "name": "fields",
            "in": "query",
            "style": "deepObject",
            "explode": true,
            "allowReserved": true,
            "description": "Selects which fields (i.e., attributes or relationships) should be present in returned resource. Each `fields` query must refer to a single resource type that can be returned in the endpoint (e.g., `fields[categories]=name,url`). If a selected resource type or field does not exist in the endpoint, the server shall respond with `400 Bad Request`.",
            "schema": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              },
              "example": {
                "categories": "name",
                "mediaObjects": "licenseType, copyrightOwner"
              }
            }
          },
          {
            "name": "page[size]",
            "in": "query",
            "style": "form",
            "explode": true,
            "allowReserved": true,
            "description": "Sets the page size of a paginated endpoint, i.e., the maximum number of resources to be returned in a single request. If not specified, the server shall set a default value (e.g., `10`).",
            "schema": {
              "type": "integer",
              "minimum": 1,
              "example": 10
            }
          },
          {
            "name": "page[number]",
            "in": "query",
            "style": "form",
            "explode": true,
            "allowReserved": true,
            "description": "Sets the page number to be returned in the request. If the requested page is greater than the total number of pages, the server shall return respond with status code `404 Not Found`.",
            "schema": {
              "type": "integer",
              "minimum": 1,
              "example": 1
            }
          },
          {
            "name": "filter",
            "in": "query",
            "style": "deepObject",
            "explode": true,
            "allowReserved": true,
            "description": "Filters resources in the endpoint based on \"label-specific\" or \"simple generic\" filters. The available filters are:\n  - `filter[lang]`: filters resources containing text data in the desired\n  languages (e.g., `filter[lang]=eng,ita,deu`). Receives comma-separated\n  ISO 639-3 languages tags.\n\n  - `filter[lastUpdate][gt]`: filters resources updated after a desired\n  date (e.g., `filter[lastUpdate][gt]=2021-04-01`). Receives an ISO 8601\n  date string.\n  \n  - `filter[lastUpdate][lt]`: filters resources updated before a desired\n  date (e.g., `filter[lastUpdate][gt]=2021-04-01`). Receives an ISO 8601\n  date string.\n\n  - `filter[categories][any]`: filters resources having any of the desired\n  categories (e.g., `filter[categories][any]=example:cat1,example:cat2`).\n  Receives comma-separated category ids.\n\n  - `filter[categories][all]`: filters resources having all of the desired\n  categories (e.g., `filter[categories][all]=example:cat1,example:cat2`).\n  Receives comma-separated category ids.\n\n  - `filter[geometries][near]`: filters resources whose geometries are near\n  a desired GPS point (e.g.,\n  `filter[geometries][near]=11.309245,46.862025,10000`). Receives three\n  comma-separated numbers in the following order: a longitude value, a\n  latitude value, and a proximity radius in meters.\n\n\nIf the server is unable process any filter, it shall respond with `400 Bad Request`.\n",
            "schema": {
              "type": "object",
              "properties": {
                "lang": {
                  "type": "string"
                },
                "lastUpdate": {
                  "type": "object",
                  "properties": {
                    "gt": {
                      "type": "string"
                    },
                    "lt": {
                      "type": "string"
                    }
                  }
                },
                "categories": {
                  "type": "object",
                  "properties": {
                    "any": {
                      "type": "string"
                    },
                    "all": {
                      "type": "string"
                    }
                  }
                },
                "geometries": {
                  "type": "object",
                  "properties": {
                    "near": {
                      "type": "string"
                    }
                  }
                }
              },
              "example": {
                "lang": "eng,ita,deu",
                "lastUpdate": {
                  "gt": "2021-04-01"
                },
                "categories": {
                  "any": "example:category"
                },
                "geometries": {
                  "near": "11.309245,46.862025,10000"
                }
              }
            }
          },
          {
            "name": "search[name]",
            "in": "query",
            "style": "form",
            "explode": true,
            "allowReserved": true,
            "description": "Searches resources containing a desired substring in their names, regardless of language or case (e.g., `search[name]=bozen`).\n",
            "schema": {
              "type": "string",
              "minimum": 1,
              "example": "bozen"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "meta": {
                    "count": 10,
                    "pages": 10
                  },
                  "links": {
                    "next": "https://example.com/2021-04/lifts?page[number]=2",
                    "prev": "https://example.com/2021-04/lifts?page[number]=1",
                    "first": "https://example.com/2021-04/lifts?page[number]=1",
                    "last": "https://example.com/2021-04/lifts?page[number]=10",
                    "self": "https://example.com/2021-04/lifts"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "lifts",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "deu": "Bergbahn Meran 2000",
                          "eng": "Ropeway Merano 2000",
                          "ita": "Funivia Merano 2000"
                        },
                        "shortName": {
                          "deu": "Meran 2000",
                          "eng": "Merano 2000",
                          "ita": "Merano 2000"
                        },
                        "description": {
                          "ita": "Situata a pochi minuti dalla citt?? di Merano, la Funivia conduce all???area sciistica ed escursionistica Merano 2000, un luogo ideale in cui passare una vacanza all???insegna del movimento e della buona cucina con tutta la famiglia. Grazie al suo clima mite, l???area offre infinite possibilit?? per il tempo libero in ogni stagione: impianti di risalita, sentieri escursionistici facili e numerosi rifugi in cui sostare per assaporare l???ottima cucina locale in un paesaggio ricco e dominato dalla tranquillit??."
                        },
                        "abstract": {
                          "ita": "Situata a pochi minuti dalla citt?? di Merano, la Funivia conduce all???area sciistica ed escursionistica Merano 2000, un luogo ideale in cui passare una vacanza all???insegna del movimento e della buona cucina con tutta la famiglia..."
                        },
                        "url": "https://example.com",
                        "length": 3650,
                        "minAltitude": 1000,
                        "maxAltitude": 2350,
                        "capacity": 200,
                        "personsPerChair": 10,
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "address": {
                          "street": {
                            "deu": "Naifweg 37",
                            "eng": "37 Val di Nova Street",
                            "ita": "Via Val di Nova, 37"
                          },
                          "city": {
                            "deu": "Meran",
                            "eng": "Merano",
                            "ita": "Merano"
                          },
                          "region": {
                            "deu": "Trentino-S??dtirol",
                            "eng": "Trentino-Alto Adige",
                            "ita": "Trentino-Alto Adige"
                          },
                          "country": "IT",
                          "zipcode": "39012",
                          "categories": null,
                          "complement": null
                        },
                        "geometries": [
                          {
                            "type": "LineString",
                            "coordinates": [
                              [
                                11.305682659149168,
                                46.66705018437341
                              ],
                              [
                                11.30692720413208,
                                46.667182709603225
                              ],
                              [
                                11.308064460754393,
                                46.667491933875965
                              ]
                            ]
                          }
                        ],
                        "howToArrive": {
                          "ita": "Fino alla stazione a valle della Funivia Merano 2000: dalla stazione ferroviaria di Merano si raggiunge in pochi minuti la stazione a valle Val di Nova con la linea urbana 1A. Da Scena c'?? il bus vacanze che porta fino alla Val di Nova.",
                          "deu": "Zur Talstation der Bergbahn Meran 2000: vom Zugbahnhof Meran erreicht man in wenigen Minuten die Talstation Naif mit der Buslinie 1A. Von Schenna aus f??hrt der G??stebus bis zur Talstation Naif."
                        }
                      },
                      "relationships": {
                        "connections": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/lifts/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "alpinebits:cablecar"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/lifts/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/lifts/1/multimediaDescriptions/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/lifts/1"
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/2021-04/lifts/{id}": {
      "get": {
        "description": "Retrieves a single resource type `lifts` with a matching `{id}`.",
        "tags": [
          "Lifts"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Requests for a resource of matching `{id}` and resource type.",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 1
            }
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/lifts/1"
                  },
                  "included": null,
                  "data": {
                    "type": "lifts",
                    "id": "1",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2020-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "name": {
                        "deu": "Bergbahn Meran 2000",
                        "eng": "Ropeway Merano 2000",
                        "ita": "Funivia Merano 2000"
                      },
                      "shortName": {
                        "deu": "Meran 2000",
                        "eng": "Merano 2000",
                        "ita": "Merano 2000"
                      },
                      "description": {
                        "ita": "Situata a pochi minuti dalla citt?? di Merano, la Funivia conduce all???area sciistica ed escursionistica Merano 2000, un luogo ideale in cui passare una vacanza all???insegna del movimento e della buona cucina con tutta la famiglia. Grazie al suo clima mite, l???area offre infinite possibilit?? per il tempo libero in ogni stagione: impianti di risalita, sentieri escursionistici facili e numerosi rifugi in cui sostare per assaporare l???ottima cucina locale in un paesaggio ricco e dominato dalla tranquillit??."
                      },
                      "abstract": {
                        "ita": "Situata a pochi minuti dalla citt?? di Merano, la Funivia conduce all???area sciistica ed escursionistica Merano 2000, un luogo ideale in cui passare una vacanza all???insegna del movimento e della buona cucina con tutta la famiglia..."
                      },
                      "url": "https://example.com",
                      "length": 3650,
                      "minAltitude": 1000,
                      "maxAltitude": 2350,
                      "capacity": 200,
                      "personsPerChair": 10,
                      "openingHours": {
                        "dailySchedules": {
                          "2020-12-25": null
                        },
                        "weeklySchedules": [
                          {
                            "validFrom": "2020-01-01",
                            "validTo": "2020-12-31",
                            "monday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "tuesday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "wednesday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "thursday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "friday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "saturday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "sunday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ]
                          }
                        ]
                      },
                      "address": {
                        "street": {
                          "deu": "Naifweg 37",
                          "eng": "37 Val di Nova Street",
                          "ita": "Via Val di Nova, 37"
                        },
                        "city": {
                          "deu": "Meran",
                          "eng": "Merano",
                          "ita": "Merano"
                        },
                        "region": {
                          "deu": "Trentino-S??dtirol",
                          "eng": "Trentino-Alto Adige",
                          "ita": "Trentino-Alto Adige"
                        },
                        "country": "IT",
                        "zipcode": "39012",
                        "categories": null,
                        "complement": null
                      },
                      "geometries": [
                        {
                          "type": "LineString",
                          "coordinates": [
                            [
                              11.305682659149168,
                              46.66705018437341
                            ],
                            [
                              11.30692720413208,
                              46.667182709603225
                            ],
                            [
                              11.308064460754393,
                              46.667491933875965
                            ]
                          ]
                        }
                      ],
                      "howToArrive": {
                        "ita": "Fino alla stazione a valle della Funivia Merano 2000: dalla stazione ferroviaria di Merano si raggiunge in pochi minuti la stazione a valle Val di Nova con la linea urbana 1A. Da Scena c'?? il bus vacanze che porta fino alla Val di Nova.",
                        "deu": "Zur Talstation der Bergbahn Meran 2000: vom Zugbahnhof Meran erreicht man in wenigen Minuten die Talstation Naif mit der Buslinie 1A. Von Schenna aus f??hrt der G??stebus bis zur Talstation Naif."
                      }
                    },
                    "relationships": {
                      "connections": {
                        "data": [
                          {
                            "type": "skiSlopes",
                            "id": "1"
                          },
                          {
                            "type": "skiSlopes",
                            "id": "2"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/lifts/1/connections/"
                        }
                      },
                      "categories": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "alpinebits:cablecar"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/lifts/1/categories"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/lifts/1/multimediaDescriptions/"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/lifts/1"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          },
          "410": {
            "description": "410 Gone"
          }
        }
      }
    },
    "/2021-04/lifts/{id}/categories": {
      "get": {
        "description": "Retrieves the resources in the relationship `categories` of a resource of type `lifts`.",
        "tags": [
          "Lifts"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/lifts/1/categories"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "categories",
                      "id": "example:category",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Category"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "lifts"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/categories/example:category",
                        "resources": {
                          "lifts": "https://example.com/2021-04/lifts?filter[categories][any]=example:category"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/lifts/{id}/connections": {
      "get": {
        "description": "Retrieves the resources in the relationship `connections` of a resource of type `lifts`.",
        "tags": [
          "Lifts"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/lifts/1/connections"
                  },
                  "included": null,
                  "data": [
                    {
                      "id": "1",
                      "type": "mountainAreas",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Merano 2000",
                          "deu": "Meran 2000",
                          "eng": "Meran 2000"
                        },
                        "shortName": {
                          "eng": "Meran 2000"
                        },
                        "description": {
                          "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he. Von Meran aus ist das Gebiet direkt ??ber die Ifinger-Seilbahn ab Naif oder durch eine Umlaufseilbahn ab Falzeben erreichbar. Das Skigebiet erstreckt sich haupts??chlich auf dem Gemeindegebiet von Hafling, ber??hrt aber auch zu den Gemeinden Schenna und Sarntal geh??rende Fl??chen."
                        },
                        "abstract": {
                          "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he."
                        },
                        "url": "https://www.meran2000.com",
                        "geometries": [
                          {
                            "type": "Polygon",
                            "coordinates": [
                              [
                                [
                                  11.310853958129883,
                                  46.66958283253642
                                ],
                                [
                                  11.304588317871094,
                                  46.668817160723044
                                ],
                                [
                                  11.301412582397461,
                                  46.666696782172096
                                ],
                                [
                                  11.305532455444336,
                                  46.66457632044435
                                ],
                                [
                                  11.31265640258789,
                                  46.66646117942096
                                ],
                                [
                                  11.314373016357422,
                                  46.66869936409677
                                ],
                                [
                                  11.310853958129883,
                                  46.66958283253642
                                ]
                              ]
                            ]
                          }
                        ],
                        "howToArrive": {
                          "ita": "L'area sciistica ed escursionistica di Merano ?? situata ai piedi della montagna Picco Ivigna ed ?? raggiungibile in pochi minuti dalle destinazioni di Merano, Avelengo, Scena e Tirolo. La cima di Merano 2000 ?? raggiungibile con due impianti di risalita diversi e ha dunque due stazioni a valle, una presso Merano con la Funivia e una ad Avelengo con la Cabinovia Falzeben.",
                          "deu": "Die Sonnenterrasse Merans liegt am Fu??e des Ifingers und ist von den Ferienorten Meran, Hafling, Schenna und Dorf Tirol in wenigen Minuten leicht erreichbar. Die Bergstation von Meran 2000 kann man mit zwei verschiedenen Aufstiegsanlagen erreichen: von Meran aus mit der Bergbahn und von Hafling aus mit der Umlaufbahn Falzeben.",
                          "eng": "The skiing and hiking area of Merano 2000 is best located next to the biggest vacation hotspots of South Tyrol and so reachable within few minutes from Merano, Avelengo, Scena and Tirolo. Two lifts can bring you to the mountain station of Merano 2000: the Ropeway in Merano or the Gondola Falzeben in Avelengo."
                        },
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "area": 36000,
                        "minAltitude": 1200,
                        "maxAltitude": 2000,
                        "totalTrailLength": 4000,
                        "totalParkArea": 20000,
                        "totalParkLength": 1000,
                        "snowCondition": {
                          "primarySurface": "powder",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 50,
                          "baseSnowRange": {
                            "lower": 40,
                            "upper": 60
                          },
                          "latestStorm": 40,
                          "obtainedIn": "2019-12-20",
                          "snowOverNight": 5,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "areaOwner": {
                          "data": {
                            "type": "agents",
                            "id": "1"
                          },
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/areaOwner/"
                          }
                        },
                        "connections": {
                          "data": [
                            {
                              "type": "lifts",
                              "id": "1"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "example/skiarea"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/multimediaDescriptions/"
                          }
                        },
                        "lifts": {
                          "data": [
                            {
                              "type": "lifts",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/lifts/"
                          }
                        },
                        "skiSlopes": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/skiSlopes/"
                          }
                        },
                        "snowparks": {
                          "data": [
                            {
                              "type": "snowparks",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/snowparks/"
                          }
                        },
                        "subAreas": {
                          "data": [
                            {
                              "type": "mountainAreas",
                              "id": "2"
                            },
                            {
                              "type": "mountainAreas",
                              "id": "3"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/subAreas/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mountainAreas/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/lifts/{id}/multimediaDescriptions": {
      "get": {
        "description": "Retrieves the resources in the relationship `multimediaDescriptions` of a resource of type `lifts`.",
        "tags": [
          "Lifts"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/lifts/1/multimediaDescriptions"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "mediaObjects",
                      "id": "1",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "contentType": "audio/mpeg3",
                        "description": null,
                        "duration": null,
                        "height": null,
                        "license": null,
                        "name": null,
                        "shortName": null,
                        "url": "https://example.com/audio.mp3",
                        "width": null
                      },
                      "relationships": {
                        "categories": null,
                        "copyrightOwner": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mediaObjects/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/mountainAreas": {
      "get": {
        "description": "Retrieves a collection of resources of type `mountainAreas`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/2"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/3"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "meta": {
                    "count": 10,
                    "pages": 10
                  },
                  "links": {
                    "next": "https://example.com/2021-04/mountainAreas?page[number]=2",
                    "prev": "https://example.com/2021-04/mountainAreas?page[number]=1",
                    "first": "https://example.com/2021-04/mountainAreas?page[number]=1",
                    "last": "https://example.com/2021-04/mountainAreas?page[number]=10",
                    "self": "https://example.com/2021-04/mountainAreas"
                  },
                  "included": null,
                  "data": [
                    {
                      "id": "1",
                      "type": "mountainAreas",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Merano 2000",
                          "deu": "Meran 2000",
                          "eng": "Meran 2000"
                        },
                        "shortName": {
                          "eng": "Meran 2000"
                        },
                        "description": {
                          "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he. Von Meran aus ist das Gebiet direkt ??ber die Ifinger-Seilbahn ab Naif oder durch eine Umlaufseilbahn ab Falzeben erreichbar. Das Skigebiet erstreckt sich haupts??chlich auf dem Gemeindegebiet von Hafling, ber??hrt aber auch zu den Gemeinden Schenna und Sarntal geh??rende Fl??chen."
                        },
                        "abstract": {
                          "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he."
                        },
                        "url": "https://www.meran2000.com",
                        "geometries": [
                          {
                            "type": "Polygon",
                            "coordinates": [
                              [
                                [
                                  11.310853958129883,
                                  46.66958283253642
                                ],
                                [
                                  11.304588317871094,
                                  46.668817160723044
                                ],
                                [
                                  11.301412582397461,
                                  46.666696782172096
                                ],
                                [
                                  11.305532455444336,
                                  46.66457632044435
                                ],
                                [
                                  11.31265640258789,
                                  46.66646117942096
                                ],
                                [
                                  11.314373016357422,
                                  46.66869936409677
                                ],
                                [
                                  11.310853958129883,
                                  46.66958283253642
                                ]
                              ]
                            ]
                          }
                        ],
                        "howToArrive": {
                          "ita": "L'area sciistica ed escursionistica di Merano ?? situata ai piedi della montagna Picco Ivigna ed ?? raggiungibile in pochi minuti dalle destinazioni di Merano, Avelengo, Scena e Tirolo. La cima di Merano 2000 ?? raggiungibile con due impianti di risalita diversi e ha dunque due stazioni a valle, una presso Merano con la Funivia e una ad Avelengo con la Cabinovia Falzeben.",
                          "deu": "Die Sonnenterrasse Merans liegt am Fu??e des Ifingers und ist von den Ferienorten Meran, Hafling, Schenna und Dorf Tirol in wenigen Minuten leicht erreichbar. Die Bergstation von Meran 2000 kann man mit zwei verschiedenen Aufstiegsanlagen erreichen: von Meran aus mit der Bergbahn und von Hafling aus mit der Umlaufbahn Falzeben.",
                          "eng": "The skiing and hiking area of Merano 2000 is best located next to the biggest vacation hotspots of South Tyrol and so reachable within few minutes from Merano, Avelengo, Scena and Tirolo. Two lifts can bring you to the mountain station of Merano 2000: the Ropeway in Merano or the Gondola Falzeben in Avelengo."
                        },
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "area": 36000,
                        "minAltitude": 1200,
                        "maxAltitude": 2000,
                        "totalTrailLength": 4000,
                        "totalParkArea": 20000,
                        "totalParkLength": 1000,
                        "snowCondition": {
                          "primarySurface": "powder",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 50,
                          "baseSnowRange": {
                            "lower": 40,
                            "upper": 60
                          },
                          "latestStorm": 40,
                          "obtainedIn": "2019-12-20",
                          "snowOverNight": 5,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "areaOwner": {
                          "data": {
                            "type": "agents",
                            "id": "1"
                          },
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/areaOwner/"
                          }
                        },
                        "connections": {
                          "data": [
                            {
                              "type": "lifts",
                              "id": "1"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "example/skiarea"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/multimediaDescriptions/"
                          }
                        },
                        "lifts": {
                          "data": [
                            {
                              "type": "lifts",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/lifts/"
                          }
                        },
                        "skiSlopes": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/skiSlopes/"
                          }
                        },
                        "snowparks": {
                          "data": [
                            {
                              "type": "snowparks",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/snowparks/"
                          }
                        },
                        "subAreas": {
                          "data": [
                            {
                              "type": "mountainAreas",
                              "id": "2"
                            },
                            {
                              "type": "mountainAreas",
                              "id": "3"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/subAreas/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mountainAreas/1"
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/2021-04/mountainAreas/{id}": {
      "get": {
        "description": "Retrieves a single resource type `mountainAreas` with a matching `{id}`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/mountainAreas/1"
                  },
                  "included": null,
                  "data": {
                    "id": "1",
                    "type": "mountainAreas",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2020-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "name": {
                        "ita": "Merano 2000",
                        "deu": "Meran 2000",
                        "eng": "Meran 2000"
                      },
                      "shortName": {
                        "eng": "Meran 2000"
                      },
                      "description": {
                        "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he. Von Meran aus ist das Gebiet direkt ??ber die Ifinger-Seilbahn ab Naif oder durch eine Umlaufseilbahn ab Falzeben erreichbar. Das Skigebiet erstreckt sich haupts??chlich auf dem Gemeindegebiet von Hafling, ber??hrt aber auch zu den Gemeinden Schenna und Sarntal geh??rende Fl??chen."
                      },
                      "abstract": {
                        "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he."
                      },
                      "url": "https://www.meran2000.com",
                      "geometries": [
                        {
                          "type": "Polygon",
                          "coordinates": [
                            [
                              [
                                11.310853958129883,
                                46.66958283253642
                              ],
                              [
                                11.304588317871094,
                                46.668817160723044
                              ],
                              [
                                11.301412582397461,
                                46.666696782172096
                              ],
                              [
                                11.305532455444336,
                                46.66457632044435
                              ],
                              [
                                11.31265640258789,
                                46.66646117942096
                              ],
                              [
                                11.314373016357422,
                                46.66869936409677
                              ],
                              [
                                11.310853958129883,
                                46.66958283253642
                              ]
                            ]
                          ]
                        }
                      ],
                      "howToArrive": {
                        "ita": "L'area sciistica ed escursionistica di Merano ?? situata ai piedi della montagna Picco Ivigna ed ?? raggiungibile in pochi minuti dalle destinazioni di Merano, Avelengo, Scena e Tirolo. La cima di Merano 2000 ?? raggiungibile con due impianti di risalita diversi e ha dunque due stazioni a valle, una presso Merano con la Funivia e una ad Avelengo con la Cabinovia Falzeben.",
                        "deu": "Die Sonnenterrasse Merans liegt am Fu??e des Ifingers und ist von den Ferienorten Meran, Hafling, Schenna und Dorf Tirol in wenigen Minuten leicht erreichbar. Die Bergstation von Meran 2000 kann man mit zwei verschiedenen Aufstiegsanlagen erreichen: von Meran aus mit der Bergbahn und von Hafling aus mit der Umlaufbahn Falzeben.",
                        "eng": "The skiing and hiking area of Merano 2000 is best located next to the biggest vacation hotspots of South Tyrol and so reachable within few minutes from Merano, Avelengo, Scena and Tirolo. Two lifts can bring you to the mountain station of Merano 2000: the Ropeway in Merano or the Gondola Falzeben in Avelengo."
                      },
                      "openingHours": {
                        "dailySchedules": {
                          "2020-12-25": null
                        },
                        "weeklySchedules": [
                          {
                            "validFrom": "2020-01-01",
                            "validTo": "2020-12-31",
                            "monday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "tuesday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "wednesday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "thursday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "friday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "saturday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "sunday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ]
                          }
                        ]
                      },
                      "area": 36000,
                      "minAltitude": 1200,
                      "maxAltitude": 2000,
                      "totalTrailLength": 4000,
                      "totalParkArea": 20000,
                      "totalParkLength": 1000,
                      "snowCondition": {
                        "primarySurface": "powder",
                        "secondarySurface": "packed-powder",
                        "baseSnow": 50,
                        "baseSnowRange": {
                          "lower": 40,
                          "upper": 60
                        },
                        "latestStorm": 40,
                        "obtainedIn": "2019-12-20",
                        "snowOverNight": 5,
                        "groomed": true,
                        "snowMaking": false
                      }
                    },
                    "relationships": {
                      "areaOwner": {
                        "data": {
                          "type": "agents",
                          "id": "1"
                        },
                        "links": {
                          "related": "https://example.com/2021-04/mountainAreas/1/areaOwner/"
                        }
                      },
                      "connections": {
                        "data": [
                          {
                            "type": "lifts",
                            "id": "1"
                          },
                          {
                            "type": "skiSlopes",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/mountainAreas/1/connections/"
                        }
                      },
                      "categories": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "example/skiarea"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/mountainAreas/1/categories"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/mountainAreas/1/multimediaDescriptions/"
                        }
                      },
                      "lifts": {
                        "data": [
                          {
                            "type": "lifts",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/mountainAreas/1/lifts/"
                        }
                      },
                      "skiSlopes": {
                        "data": [
                          {
                            "type": "skiSlopes",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/mountainAreas/1/skiSlopes/"
                        }
                      },
                      "snowparks": {
                        "data": [
                          {
                            "type": "snowparks",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/mountainAreas/1/snowparks/"
                        }
                      },
                      "subAreas": {
                        "data": [
                          {
                            "type": "mountainAreas",
                            "id": "2"
                          },
                          {
                            "type": "mountainAreas",
                            "id": "3"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/mountainAreas/1/subAreas/"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/mountainAreas/1"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          },
          "410": {
            "description": "410 Gone"
          }
        }
      }
    },
    "/2021-04/mountainAreas/{id}/areaOwner": {
      "get": {
        "description": "Retrieves the resources in the relationship `areaOwner` of a resource of type `mountainAreas`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/mountainAreas/1/areaOwner"
                  },
                  "included": null,
                  "data": {
                    "type": "agents",
                    "id": "1",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2020-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "abstract": {
                        "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee...",
                        "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas...",
                        "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions..."
                      },
                      "contactPoints": [
                        {
                          "email": "info@noi.bz.it",
                          "telephone": "+39 0471 066 600",
                          "address": {
                            "street": {
                              "ita": "Piazza Universit?? 1"
                            },
                            "city": {
                              "ita": "Bolzano"
                            },
                            "region": {
                              "ita": "Trentino-Alto Adige"
                            },
                            "country": "IT",
                            "zipcode": "39100",
                            "complement": {
                              "ita": "Ufficio 3.07"
                            },
                            "categories": [
                              "example:main"
                            ]
                          },
                          "availableHours": {
                            "dailySchedules": {
                              "2020-12-23": [
                                {
                                  "opens": "08:00:00",
                                  "closes": "12:00:00"
                                }
                              ],
                              "2020-12-25": null
                            },
                            "weeklySchedules": [
                              {
                                "validFrom": "2020-01-01",
                                "validTo": "2020-12-31",
                                "monday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "tuesday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "wednesday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "thursday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "friday": [
                                  {
                                    "opens": "08:00:00+01:00",
                                    "closes": "12:00:00+01:00"
                                  },
                                  {
                                    "opens": "14:00:00+01:00",
                                    "closes": "18:00:00+01:00"
                                  }
                                ],
                                "saturday": null,
                                "sunday": null
                              }
                            ]
                          }
                        }
                      ],
                      "description": {
                        "ita": "La Libera Universit?? di Bolzano sorge in una delle pi?? attraenti regioni europee, al crocevia tra il mondo economico e culturale tedesco e italiano.",
                        "deu": "Die Freie Universit??t Bozen befindet sich in einer der attraktivsten Regionen Europas an der Schnittstelle zwischen dem deutschsprachigen und italienischen Kultur- und Wirtschaftsraum.",
                        "eng": "The Free University of Bozen-Bolzano is located in one of the most fascinating European regions, at the crossroads between the German-speaking and Italian economies and cultures."
                      },
                      "name": {
                        "ita": "Libera Univerist?? di Bolzano",
                        "deu": "Freie Universit??t Bozen",
                        "eng": "Free University of Bozen-Bolzano"
                      },
                      "shortName": {
                        "eng": "Unibz"
                      },
                      "url": "https://www.unibz.it"
                    },
                    "relationships": {
                      "categories": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "alpinebits:organization"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/agents/1/categories"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/agents/1/multimediaDescriptions"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/agents/1"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/mountainAreas/{id}/categories": {
      "get": {
        "description": "Retrieves the resources in the relationship `categories` of a resource of type `mountainAreas`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/mountainAreas/1/categories"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "categories",
                      "id": "example:category",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Category"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "mountainAreas"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/categories/example:category",
                        "resources": {
                          "mountainAreas": "https://example.com/2021-04/mountainAreas?filter[categories][any]=example:category"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/mountainAreas/{id}/connections": {
      "get": {
        "description": "Retrieves the resources in the relationship `connections` of a resource of type `mountainAreas`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/mountainAreas/1/connections"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "lifts",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "deu": "Bergbahn Meran 2000",
                          "eng": "Ropeway Merano 2000",
                          "ita": "Funivia Merano 2000"
                        },
                        "shortName": {
                          "deu": "Meran 2000",
                          "eng": "Merano 2000",
                          "ita": "Merano 2000"
                        },
                        "description": {
                          "ita": "Situata a pochi minuti dalla citt?? di Merano, la Funivia conduce all???area sciistica ed escursionistica Merano 2000, un luogo ideale in cui passare una vacanza all???insegna del movimento e della buona cucina con tutta la famiglia. Grazie al suo clima mite, l???area offre infinite possibilit?? per il tempo libero in ogni stagione: impianti di risalita, sentieri escursionistici facili e numerosi rifugi in cui sostare per assaporare l???ottima cucina locale in un paesaggio ricco e dominato dalla tranquillit??."
                        },
                        "abstract": {
                          "ita": "Situata a pochi minuti dalla citt?? di Merano, la Funivia conduce all???area sciistica ed escursionistica Merano 2000, un luogo ideale in cui passare una vacanza all???insegna del movimento e della buona cucina con tutta la famiglia..."
                        },
                        "url": "https://example.com",
                        "length": 3650,
                        "minAltitude": 1000,
                        "maxAltitude": 2350,
                        "capacity": 200,
                        "personsPerChair": 10,
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "address": {
                          "street": {
                            "deu": "Naifweg 37",
                            "eng": "37 Val di Nova Street",
                            "ita": "Via Val di Nova, 37"
                          },
                          "city": {
                            "deu": "Meran",
                            "eng": "Merano",
                            "ita": "Merano"
                          },
                          "region": {
                            "deu": "Trentino-S??dtirol",
                            "eng": "Trentino-Alto Adige",
                            "ita": "Trentino-Alto Adige"
                          },
                          "country": "IT",
                          "zipcode": "39012",
                          "categories": null,
                          "complement": null
                        },
                        "geometries": [
                          {
                            "type": "LineString",
                            "coordinates": [
                              [
                                11.305682659149168,
                                46.66705018437341
                              ],
                              [
                                11.30692720413208,
                                46.667182709603225
                              ],
                              [
                                11.308064460754393,
                                46.667491933875965
                              ]
                            ]
                          }
                        ],
                        "howToArrive": {
                          "ita": "Fino alla stazione a valle della Funivia Merano 2000: dalla stazione ferroviaria di Merano si raggiunge in pochi minuti la stazione a valle Val di Nova con la linea urbana 1A. Da Scena c'?? il bus vacanze che porta fino alla Val di Nova.",
                          "deu": "Zur Talstation der Bergbahn Meran 2000: vom Zugbahnhof Meran erreicht man in wenigen Minuten die Talstation Naif mit der Buslinie 1A. Von Schenna aus f??hrt der G??stebus bis zur Talstation Naif."
                        }
                      },
                      "relationships": {
                        "connections": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/lifts/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "alpinebits:cablecar"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/lifts/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/lifts/1/multimediaDescriptions/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/lifts/1"
                      }
                    },
                    {
                      "type": "skiSlopes",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Falzeben I",
                          "deu": "Falzeben I",
                          "eng": "Falzeben I"
                        },
                        "shortName": {
                          "ita": "Falzeben I"
                        },
                        "description": {
                          "ita": "Falzeben I -  Discesa tra i boschi facile, immersa in un panorama da sogno ed ideale per bambini e principianti. Altezza/Lunghezza: 1900 altezza, 3500 m."
                        },
                        "abstract": {
                          "ita": "Falzeben I -  Discesa tra i boschi facile, immersa in un panorama da sogno ed ideale per bambini e principianti."
                        },
                        "url": "https://example.com",
                        "length": 2000,
                        "minAltitude": 1500,
                        "maxAltitude": 2500,
                        "difficulty": {
                          "eu": "novice",
                          "us": "beginner"
                        },
                        "address": {
                          "street": null,
                          "city": {
                            "eng": "Merano"
                          },
                          "region": null,
                          "country": "IT",
                          "zipcode": null,
                          "categories": null,
                          "complement": null
                        },
                        "howToArrive": {
                          "ita": " Le fermate pi?? vicine a Falzeben sono: Falzeben ?? a 41 metri di distanza a piedi e ci si arriva in 1 minuti di cammino; Villa Sch??fer ?? a 808 metri di distanza a piedi e ci si arriva in 11 minuti di cammino."
                        },
                        "geometries": [
                          {
                            "type": "LineString",
                            "coordinates": [
                              [
                                11.305682659149168,
                                46.66705018437341
                              ],
                              [
                                11.30692720413208,
                                46.667182709603225
                              ],
                              [
                                11.308064460754393,
                                46.667491933875965
                              ]
                            ]
                          }
                        ],
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "snowCondition": {
                          "primarySurface": "powder",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 50,
                          "baseSnowRange": {
                            "lower": 40,
                            "upper": 60
                          },
                          "latestStorm": 40,
                          "obtainedIn": "2020-02-01",
                          "snowOverNight": 5,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "connections": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "2"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "3"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "4"
                            },
                            {
                              "type": "lifts",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/skiSlopes/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "alpinebits:standard-ski-slope"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/skiSlopes/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/skiSlopes/1/multimediaDescriptions/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/skiSlopes/1"
                      }
                    },
                    {
                      "type": "snowparks",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Snowpark Merano 2000",
                          "deu": "Snowpark Merano 2000",
                          "eng": "Snowpark Merano 2000"
                        },
                        "shortName": {
                          "eng": "Snowpark Merano 2000"
                        },
                        "description": {
                          "eng": "Located in the rear part of the skiing area on the Oswald-Slope, close to the Waidmann Alpine Cottage, the SNOWPARK MERANO 2000 awaits brave Snowboarders and Freestylers. An ambitious project with many kicks, rails, tubes and boxes for newcomers and pros alike. You can reach the Jump Zone from the mountain station of the Ropeway by using the chairlift Piffing."
                        },
                        "abstract": {
                          "eng": "Located in the rear part of the skiing area on the Oswald-Slope, close to the Waidmann Alpine Cottage, the SNOWPARK MERANO 2000 awaits brave Snowboarders and Freestylers..."
                        },
                        "url": "https://example.com",
                        "length": 1300,
                        "minAltitude": 1500,
                        "maxAltitude": 2500,
                        "address": {
                          "street": null,
                          "city": {
                            "eng": "Merano"
                          },
                          "region": null,
                          "country": "IT",
                          "zipcode": null,
                          "categories": null,
                          "complement": null
                        },
                        "howToArrive": null,
                        "difficulty": "intermediate",
                        "geometries": [
                          {
                            "type": "LineString",
                            "coordinates": [
                              [
                                11.305682659149168,
                                46.66705018437341
                              ],
                              [
                                11.30692720413208,
                                46.667182709603225
                              ],
                              [
                                11.308064460754393,
                                46.667491933875965
                              ]
                            ]
                          }
                        ],
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "snowCondition": {
                          "primarySurface": "frozen-granular",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 30,
                          "baseSnowRange": {
                            "lower": 25,
                            "upper": 40
                          },
                          "latestStorm": 5,
                          "obtainedIn": "2020-01-14",
                          "snowOverNight": 0,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "connections": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "2"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "3"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/connections/"
                          }
                        },
                        "features": {
                          "data": [
                            {
                              "type": "features",
                              "id": "example:jib"
                            },
                            {
                              "type": "features",
                              "id": "example:pipe"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/features"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "example:free-style"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/multimediaDescriptions/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/snowparks/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/mountainAreas/{id}/lifts": {
      "get": {
        "description": "Retrieves the resources in the relationship `lifts` of a resource of type `mountainAreas`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/mountainAreas/1/lifts"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "lifts",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "deu": "Bergbahn Meran 2000",
                          "eng": "Ropeway Merano 2000",
                          "ita": "Funivia Merano 2000"
                        },
                        "shortName": {
                          "deu": "Meran 2000",
                          "eng": "Merano 2000",
                          "ita": "Merano 2000"
                        },
                        "description": {
                          "ita": "Situata a pochi minuti dalla citt?? di Merano, la Funivia conduce all???area sciistica ed escursionistica Merano 2000, un luogo ideale in cui passare una vacanza all???insegna del movimento e della buona cucina con tutta la famiglia. Grazie al suo clima mite, l???area offre infinite possibilit?? per il tempo libero in ogni stagione: impianti di risalita, sentieri escursionistici facili e numerosi rifugi in cui sostare per assaporare l???ottima cucina locale in un paesaggio ricco e dominato dalla tranquillit??."
                        },
                        "abstract": {
                          "ita": "Situata a pochi minuti dalla citt?? di Merano, la Funivia conduce all???area sciistica ed escursionistica Merano 2000, un luogo ideale in cui passare una vacanza all???insegna del movimento e della buona cucina con tutta la famiglia..."
                        },
                        "url": "https://example.com",
                        "length": 3650,
                        "minAltitude": 1000,
                        "maxAltitude": 2350,
                        "capacity": 200,
                        "personsPerChair": 10,
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "address": {
                          "street": {
                            "deu": "Naifweg 37",
                            "eng": "37 Val di Nova Street",
                            "ita": "Via Val di Nova, 37"
                          },
                          "city": {
                            "deu": "Meran",
                            "eng": "Merano",
                            "ita": "Merano"
                          },
                          "region": {
                            "deu": "Trentino-S??dtirol",
                            "eng": "Trentino-Alto Adige",
                            "ita": "Trentino-Alto Adige"
                          },
                          "country": "IT",
                          "zipcode": "39012",
                          "categories": null,
                          "complement": null
                        },
                        "geometries": [
                          {
                            "type": "LineString",
                            "coordinates": [
                              [
                                11.305682659149168,
                                46.66705018437341
                              ],
                              [
                                11.30692720413208,
                                46.667182709603225
                              ],
                              [
                                11.308064460754393,
                                46.667491933875965
                              ]
                            ]
                          }
                        ],
                        "howToArrive": {
                          "ita": "Fino alla stazione a valle della Funivia Merano 2000: dalla stazione ferroviaria di Merano si raggiunge in pochi minuti la stazione a valle Val di Nova con la linea urbana 1A. Da Scena c'?? il bus vacanze che porta fino alla Val di Nova.",
                          "deu": "Zur Talstation der Bergbahn Meran 2000: vom Zugbahnhof Meran erreicht man in wenigen Minuten die Talstation Naif mit der Buslinie 1A. Von Schenna aus f??hrt der G??stebus bis zur Talstation Naif."
                        }
                      },
                      "relationships": {
                        "connections": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/lifts/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "alpinebits:cablecar"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/lifts/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/lifts/1/multimediaDescriptions/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/lifts/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/mountainAreas/{id}/multimediaDescriptions": {
      "get": {
        "description": "Retrieves the resources in the relationship `multimediaDescriptions` of a resource of type `mountainAreas`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/mountainAreas/1/multimediaDescriptions"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "mediaObjects",
                      "id": "1",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "contentType": "audio/mpeg3",
                        "description": null,
                        "duration": null,
                        "height": null,
                        "license": null,
                        "name": null,
                        "shortName": null,
                        "url": "https://example.com/audio.mp3",
                        "width": null
                      },
                      "relationships": {
                        "categories": null,
                        "copyrightOwner": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mediaObjects/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/mountainAreas/{id}/skiSlopes": {
      "get": {
        "description": "Retrieves the resources in the relationship `skiSlopes` of a resource of type `mountainAreas`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/mountainAreas/1/skiSlopes"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "skiSlopes",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Falzeben I",
                          "deu": "Falzeben I",
                          "eng": "Falzeben I"
                        },
                        "shortName": {
                          "ita": "Falzeben I"
                        },
                        "description": {
                          "ita": "Falzeben I -  Discesa tra i boschi facile, immersa in un panorama da sogno ed ideale per bambini e principianti. Altezza/Lunghezza: 1900 altezza, 3500 m."
                        },
                        "abstract": {
                          "ita": "Falzeben I -  Discesa tra i boschi facile, immersa in un panorama da sogno ed ideale per bambini e principianti."
                        },
                        "url": "https://example.com",
                        "length": 2000,
                        "minAltitude": 1500,
                        "maxAltitude": 2500,
                        "difficulty": {
                          "eu": "novice",
                          "us": "beginner"
                        },
                        "address": {
                          "street": null,
                          "city": {
                            "eng": "Merano"
                          },
                          "region": null,
                          "country": "IT",
                          "zipcode": null,
                          "categories": null,
                          "complement": null
                        },
                        "howToArrive": {
                          "ita": " Le fermate pi?? vicine a Falzeben sono: Falzeben ?? a 41 metri di distanza a piedi e ci si arriva in 1 minuti di cammino; Villa Sch??fer ?? a 808 metri di distanza a piedi e ci si arriva in 11 minuti di cammino."
                        },
                        "geometries": [
                          {
                            "type": "LineString",
                            "coordinates": [
                              [
                                11.305682659149168,
                                46.66705018437341
                              ],
                              [
                                11.30692720413208,
                                46.667182709603225
                              ],
                              [
                                11.308064460754393,
                                46.667491933875965
                              ]
                            ]
                          }
                        ],
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "snowCondition": {
                          "primarySurface": "powder",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 50,
                          "baseSnowRange": {
                            "lower": 40,
                            "upper": 60
                          },
                          "latestStorm": 40,
                          "obtainedIn": "2020-02-01",
                          "snowOverNight": 5,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "connections": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "2"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "3"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "4"
                            },
                            {
                              "type": "lifts",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/skiSlopes/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "alpinebits:standard-ski-slope"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/skiSlopes/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/skiSlopes/1/multimediaDescriptions/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/skiSlopes/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/mountainAreas/{id}/snowparks": {
      "get": {
        "description": "Retrieves the resources in the relationship `snowparks` of a resource of type `mountainAreas`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/mountainAreas/1/snowparks"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "snowparks",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Snowpark Merano 2000",
                          "deu": "Snowpark Merano 2000",
                          "eng": "Snowpark Merano 2000"
                        },
                        "shortName": {
                          "eng": "Snowpark Merano 2000"
                        },
                        "description": {
                          "eng": "Located in the rear part of the skiing area on the Oswald-Slope, close to the Waidmann Alpine Cottage, the SNOWPARK MERANO 2000 awaits brave Snowboarders and Freestylers. An ambitious project with many kicks, rails, tubes and boxes for newcomers and pros alike. You can reach the Jump Zone from the mountain station of the Ropeway by using the chairlift Piffing."
                        },
                        "abstract": {
                          "eng": "Located in the rear part of the skiing area on the Oswald-Slope, close to the Waidmann Alpine Cottage, the SNOWPARK MERANO 2000 awaits brave Snowboarders and Freestylers..."
                        },
                        "url": "https://example.com",
                        "length": 1300,
                        "minAltitude": 1500,
                        "maxAltitude": 2500,
                        "address": {
                          "street": null,
                          "city": {
                            "eng": "Merano"
                          },
                          "region": null,
                          "country": "IT",
                          "zipcode": null,
                          "categories": null,
                          "complement": null
                        },
                        "howToArrive": null,
                        "difficulty": "intermediate",
                        "geometries": [
                          {
                            "type": "LineString",
                            "coordinates": [
                              [
                                11.305682659149168,
                                46.66705018437341
                              ],
                              [
                                11.30692720413208,
                                46.667182709603225
                              ],
                              [
                                11.308064460754393,
                                46.667491933875965
                              ]
                            ]
                          }
                        ],
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "snowCondition": {
                          "primarySurface": "frozen-granular",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 30,
                          "baseSnowRange": {
                            "lower": 25,
                            "upper": 40
                          },
                          "latestStorm": 5,
                          "obtainedIn": "2020-01-14",
                          "snowOverNight": 0,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "connections": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "2"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "3"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/connections/"
                          }
                        },
                        "features": {
                          "data": [
                            {
                              "type": "features",
                              "id": "example:jib"
                            },
                            {
                              "type": "features",
                              "id": "example:pipe"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/features"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "example:free-style"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/multimediaDescriptions/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/snowparks/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/mountainAreas/{id}/subAreas": {
      "get": {
        "description": "Retrieves the resources in the relationship `subAreas` of a resource of type `mountainAreas`.",
        "tags": [
          "Mountain Areas"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/mountainAreas/1/subAreas"
                  },
                  "included": null,
                  "data": [
                    {
                      "id": "2",
                      "type": "mountainAreas",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "name": {
                          "eng": "Meran 2000"
                        },
                        "shortName": null,
                        "description": null,
                        "abstract": null,
                        "url": null,
                        "geometries": null,
                        "howToArrive": null,
                        "openingHours": null,
                        "area": null,
                        "minAltitude": null,
                        "maxAltitude": null,
                        "totalTrailLength": null,
                        "totalParkArea": null,
                        "totalParkLength": null,
                        "snowCondition": null
                      },
                      "relationships": {
                        "areaOwner": null,
                        "connections": null,
                        "categories": null,
                        "multimediaDescriptions": null,
                        "lifts": null,
                        "skiSlopes": null,
                        "snowparks": null,
                        "subAreas": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mountainAreas/2"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/skiSlopes": {
      "get": {
        "description": "Retrieves a collection of resources of type `skiSlopes`.",
        "tags": [
          "Ski Slopes"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/2"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/3"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/4"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/5"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "meta": {
                    "count": 10,
                    "pages": 10
                  },
                  "links": {
                    "next": "https://example.com/2021-04/skiSlopes?page[number]=2",
                    "prev": "https://example.com/2021-04/skiSlopes?page[number]=1",
                    "first": "https://example.com/2021-04/skiSlopes?page[number]=1",
                    "last": "https://example.com/2021-04/skiSlopes?page[number]=10",
                    "self": "https://example.com/2021-04/skiSlopes"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "skiSlopes",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Falzeben I",
                          "deu": "Falzeben I",
                          "eng": "Falzeben I"
                        },
                        "shortName": {
                          "ita": "Falzeben I"
                        },
                        "description": {
                          "ita": "Falzeben I -  Discesa tra i boschi facile, immersa in un panorama da sogno ed ideale per bambini e principianti. Altezza/Lunghezza: 1900 altezza, 3500 m."
                        },
                        "abstract": {
                          "ita": "Falzeben I -  Discesa tra i boschi facile, immersa in un panorama da sogno ed ideale per bambini e principianti."
                        },
                        "url": "https://example.com",
                        "length": 2000,
                        "minAltitude": 1500,
                        "maxAltitude": 2500,
                        "difficulty": {
                          "eu": "novice",
                          "us": "beginner"
                        },
                        "address": {
                          "street": null,
                          "city": {
                            "eng": "Merano"
                          },
                          "region": null,
                          "country": "IT",
                          "zipcode": null,
                          "categories": null,
                          "complement": null
                        },
                        "howToArrive": {
                          "ita": " Le fermate pi?? vicine a Falzeben sono: Falzeben ?? a 41 metri di distanza a piedi e ci si arriva in 1 minuti di cammino; Villa Sch??fer ?? a 808 metri di distanza a piedi e ci si arriva in 11 minuti di cammino."
                        },
                        "geometries": [
                          {
                            "type": "LineString",
                            "coordinates": [
                              [
                                11.305682659149168,
                                46.66705018437341
                              ],
                              [
                                11.30692720413208,
                                46.667182709603225
                              ],
                              [
                                11.308064460754393,
                                46.667491933875965
                              ]
                            ]
                          }
                        ],
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "snowCondition": {
                          "primarySurface": "powder",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 50,
                          "baseSnowRange": {
                            "lower": 40,
                            "upper": 60
                          },
                          "latestStorm": 40,
                          "obtainedIn": "2020-02-01",
                          "snowOverNight": 5,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "connections": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "2"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "3"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "4"
                            },
                            {
                              "type": "lifts",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/skiSlopes/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "alpinebits:standard-ski-slope"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/skiSlopes/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/skiSlopes/1/multimediaDescriptions/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/skiSlopes/1"
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/2021-04/skiSlopes/{id}": {
      "get": {
        "description": "Retrieves a single resource type `skiSlopes` with a matching `{id}`.",
        "tags": [
          "Ski Slopes"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/skiSlopes/1"
                  },
                  "included": null,
                  "data": {
                    "type": "skiSlopes",
                    "id": "1",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2020-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "name": {
                        "ita": "Falzeben I",
                        "deu": "Falzeben I",
                        "eng": "Falzeben I"
                      },
                      "shortName": {
                        "ita": "Falzeben I"
                      },
                      "description": {
                        "ita": "Falzeben I -  Discesa tra i boschi facile, immersa in un panorama da sogno ed ideale per bambini e principianti. Altezza/Lunghezza: 1900 altezza, 3500 m."
                      },
                      "abstract": {
                        "ita": "Falzeben I -  Discesa tra i boschi facile, immersa in un panorama da sogno ed ideale per bambini e principianti."
                      },
                      "url": "https://example.com",
                      "length": 2000,
                      "minAltitude": 1500,
                      "maxAltitude": 2500,
                      "difficulty": {
                        "eu": "novice",
                        "us": "beginner"
                      },
                      "address": {
                        "street": null,
                        "city": {
                          "eng": "Merano"
                        },
                        "region": null,
                        "country": "IT",
                        "zipcode": null,
                        "categories": null,
                        "complement": null
                      },
                      "howToArrive": {
                        "ita": " Le fermate pi?? vicine a Falzeben sono: Falzeben ?? a 41 metri di distanza a piedi e ci si arriva in 1 minuti di cammino; Villa Sch??fer ?? a 808 metri di distanza a piedi e ci si arriva in 11 minuti di cammino."
                      },
                      "geometries": [
                        {
                          "type": "LineString",
                          "coordinates": [
                            [
                              11.305682659149168,
                              46.66705018437341
                            ],
                            [
                              11.30692720413208,
                              46.667182709603225
                            ],
                            [
                              11.308064460754393,
                              46.667491933875965
                            ]
                          ]
                        }
                      ],
                      "openingHours": {
                        "dailySchedules": {
                          "2020-12-25": null
                        },
                        "weeklySchedules": [
                          {
                            "validFrom": "2020-01-01",
                            "validTo": "2020-12-31",
                            "monday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "tuesday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "wednesday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "thursday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "friday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "saturday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "sunday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ]
                          }
                        ]
                      },
                      "snowCondition": {
                        "primarySurface": "powder",
                        "secondarySurface": "packed-powder",
                        "baseSnow": 50,
                        "baseSnowRange": {
                          "lower": 40,
                          "upper": 60
                        },
                        "latestStorm": 40,
                        "obtainedIn": "2020-02-01",
                        "snowOverNight": 5,
                        "groomed": true,
                        "snowMaking": false
                      }
                    },
                    "relationships": {
                      "connections": {
                        "data": [
                          {
                            "type": "skiSlopes",
                            "id": "2"
                          },
                          {
                            "type": "skiSlopes",
                            "id": "3"
                          },
                          {
                            "type": "skiSlopes",
                            "id": "4"
                          },
                          {
                            "type": "lifts",
                            "id": "1"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/skiSlopes/1/connections/"
                        }
                      },
                      "categories": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "alpinebits:standard-ski-slope"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/skiSlopes/1/categories"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "2"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/skiSlopes/1/multimediaDescriptions/"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/skiSlopes/1"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          },
          "410": {
            "description": "410 Gone"
          }
        }
      }
    },
    "/2021-04/skiSlopes/{id}/categories": {
      "get": {
        "description": "Retrieves the resources in the relationship `categories` of a resource of type `skiSlopes`.",
        "tags": [
          "Ski Slopes"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/skiSlopes/1/categories"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "categories",
                      "id": "example:category",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Category"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "skiSlopes"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/categories/example:category",
                        "resources": {
                          "skiSlopes": "https://example.com/2021-04/skiSlopes?filter[categories][any]=example:category"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/skiSlopes/{id}/connections": {
      "get": {
        "description": "Retrieves the resources in the relationship `connections` of a resource of type `skiSlopes`.",
        "tags": [
          "Ski Slopes"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/skiSlopes/1/connections"
                  },
                  "included": null,
                  "data": [
                    {
                      "id": "1",
                      "type": "mountainAreas",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Merano 2000",
                          "deu": "Meran 2000",
                          "eng": "Meran 2000"
                        },
                        "shortName": {
                          "eng": "Meran 2000"
                        },
                        "description": {
                          "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he. Von Meran aus ist das Gebiet direkt ??ber die Ifinger-Seilbahn ab Naif oder durch eine Umlaufseilbahn ab Falzeben erreichbar. Das Skigebiet erstreckt sich haupts??chlich auf dem Gemeindegebiet von Hafling, ber??hrt aber auch zu den Gemeinden Schenna und Sarntal geh??rende Fl??chen."
                        },
                        "abstract": {
                          "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he."
                        },
                        "url": "https://www.meran2000.com",
                        "geometries": [
                          {
                            "type": "Polygon",
                            "coordinates": [
                              [
                                [
                                  11.310853958129883,
                                  46.66958283253642
                                ],
                                [
                                  11.304588317871094,
                                  46.668817160723044
                                ],
                                [
                                  11.301412582397461,
                                  46.666696782172096
                                ],
                                [
                                  11.305532455444336,
                                  46.66457632044435
                                ],
                                [
                                  11.31265640258789,
                                  46.66646117942096
                                ],
                                [
                                  11.314373016357422,
                                  46.66869936409677
                                ],
                                [
                                  11.310853958129883,
                                  46.66958283253642
                                ]
                              ]
                            ]
                          }
                        ],
                        "howToArrive": {
                          "ita": "L'area sciistica ed escursionistica di Merano ?? situata ai piedi della montagna Picco Ivigna ed ?? raggiungibile in pochi minuti dalle destinazioni di Merano, Avelengo, Scena e Tirolo. La cima di Merano 2000 ?? raggiungibile con due impianti di risalita diversi e ha dunque due stazioni a valle, una presso Merano con la Funivia e una ad Avelengo con la Cabinovia Falzeben.",
                          "deu": "Die Sonnenterrasse Merans liegt am Fu??e des Ifingers und ist von den Ferienorten Meran, Hafling, Schenna und Dorf Tirol in wenigen Minuten leicht erreichbar. Die Bergstation von Meran 2000 kann man mit zwei verschiedenen Aufstiegsanlagen erreichen: von Meran aus mit der Bergbahn und von Hafling aus mit der Umlaufbahn Falzeben.",
                          "eng": "The skiing and hiking area of Merano 2000 is best located next to the biggest vacation hotspots of South Tyrol and so reachable within few minutes from Merano, Avelengo, Scena and Tirolo. Two lifts can bring you to the mountain station of Merano 2000: the Ropeway in Merano or the Gondola Falzeben in Avelengo."
                        },
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "area": 36000,
                        "minAltitude": 1200,
                        "maxAltitude": 2000,
                        "totalTrailLength": 4000,
                        "totalParkArea": 20000,
                        "totalParkLength": 1000,
                        "snowCondition": {
                          "primarySurface": "powder",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 50,
                          "baseSnowRange": {
                            "lower": 40,
                            "upper": 60
                          },
                          "latestStorm": 40,
                          "obtainedIn": "2019-12-20",
                          "snowOverNight": 5,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "areaOwner": {
                          "data": {
                            "type": "agents",
                            "id": "1"
                          },
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/areaOwner/"
                          }
                        },
                        "connections": {
                          "data": [
                            {
                              "type": "lifts",
                              "id": "1"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "example/skiarea"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/multimediaDescriptions/"
                          }
                        },
                        "lifts": {
                          "data": [
                            {
                              "type": "lifts",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/lifts/"
                          }
                        },
                        "skiSlopes": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/skiSlopes/"
                          }
                        },
                        "snowparks": {
                          "data": [
                            {
                              "type": "snowparks",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/snowparks/"
                          }
                        },
                        "subAreas": {
                          "data": [
                            {
                              "type": "mountainAreas",
                              "id": "2"
                            },
                            {
                              "type": "mountainAreas",
                              "id": "3"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/subAreas/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mountainAreas/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/skiSlopes/{id}/multimediaDescriptions": {
      "get": {
        "description": "Retrieves the resources in the relationship `multimediaDescriptions` of a resource of type `skiSlopes`.",
        "tags": [
          "Ski Slopes"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/skiSlopes/1/multimediaDescriptions"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "mediaObjects",
                      "id": "1",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "contentType": "audio/mpeg3",
                        "description": null,
                        "duration": null,
                        "height": null,
                        "license": null,
                        "name": null,
                        "shortName": null,
                        "url": "https://example.com/audio.mp3",
                        "width": null
                      },
                      "relationships": {
                        "categories": null,
                        "copyrightOwner": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mediaObjects/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/snowparks": {
      "get": {
        "description": "Retrieves a collection of resources of type `snowparks`.",
        "tags": [
          "Snowparks"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/2"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/3"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/4"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/5"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "meta": {
                    "count": 10,
                    "pages": 10
                  },
                  "links": {
                    "next": "https://example.com/2021-04/snowparks?page[number]=2",
                    "prev": "https://example.com/2021-04/snowparks?page[number]=1",
                    "first": "https://example.com/2021-04/snowparks?page[number]=1",
                    "last": "https://example.com/2021-04/snowparks?page[number]=10",
                    "self": "https://example.com/2021-04/snowparks"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "snowparks",
                      "id": "1",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Snowpark Merano 2000",
                          "deu": "Snowpark Merano 2000",
                          "eng": "Snowpark Merano 2000"
                        },
                        "shortName": {
                          "eng": "Snowpark Merano 2000"
                        },
                        "description": {
                          "eng": "Located in the rear part of the skiing area on the Oswald-Slope, close to the Waidmann Alpine Cottage, the SNOWPARK MERANO 2000 awaits brave Snowboarders and Freestylers. An ambitious project with many kicks, rails, tubes and boxes for newcomers and pros alike. You can reach the Jump Zone from the mountain station of the Ropeway by using the chairlift Piffing."
                        },
                        "abstract": {
                          "eng": "Located in the rear part of the skiing area on the Oswald-Slope, close to the Waidmann Alpine Cottage, the SNOWPARK MERANO 2000 awaits brave Snowboarders and Freestylers..."
                        },
                        "url": "https://example.com",
                        "length": 1300,
                        "minAltitude": 1500,
                        "maxAltitude": 2500,
                        "address": {
                          "street": null,
                          "city": {
                            "eng": "Merano"
                          },
                          "region": null,
                          "country": "IT",
                          "zipcode": null,
                          "categories": null,
                          "complement": null
                        },
                        "howToArrive": null,
                        "difficulty": "intermediate",
                        "geometries": [
                          {
                            "type": "LineString",
                            "coordinates": [
                              [
                                11.305682659149168,
                                46.66705018437341
                              ],
                              [
                                11.30692720413208,
                                46.667182709603225
                              ],
                              [
                                11.308064460754393,
                                46.667491933875965
                              ]
                            ]
                          }
                        ],
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "snowCondition": {
                          "primarySurface": "frozen-granular",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 30,
                          "baseSnowRange": {
                            "lower": 25,
                            "upper": 40
                          },
                          "latestStorm": 5,
                          "obtainedIn": "2020-01-14",
                          "snowOverNight": 0,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "connections": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "2"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "3"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/connections/"
                          }
                        },
                        "features": {
                          "data": [
                            {
                              "type": "features",
                              "id": "example:jib"
                            },
                            {
                              "type": "features",
                              "id": "example:pipe"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/features"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "example:free-style"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "2"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/snowparks/1/multimediaDescriptions/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/snowparks/1"
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/2021-04/snowparks/{id}": {
      "get": {
        "description": "Retrieves a single resource type `snowparks` with a matching `{id}`.",
        "tags": [
          "Snowparks"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/snowparks/1"
                  },
                  "included": null,
                  "data": {
                    "type": "snowparks",
                    "id": "1",
                    "meta": {
                      "dataProvider": "https://example.com",
                      "lastUpdate": "2020-04-01T08:00:00+02:00"
                    },
                    "attributes": {
                      "name": {
                        "ita": "Snowpark Merano 2000",
                        "deu": "Snowpark Merano 2000",
                        "eng": "Snowpark Merano 2000"
                      },
                      "shortName": {
                        "eng": "Snowpark Merano 2000"
                      },
                      "description": {
                        "eng": "Located in the rear part of the skiing area on the Oswald-Slope, close to the Waidmann Alpine Cottage, the SNOWPARK MERANO 2000 awaits brave Snowboarders and Freestylers. An ambitious project with many kicks, rails, tubes and boxes for newcomers and pros alike. You can reach the Jump Zone from the mountain station of the Ropeway by using the chairlift Piffing."
                      },
                      "abstract": {
                        "eng": "Located in the rear part of the skiing area on the Oswald-Slope, close to the Waidmann Alpine Cottage, the SNOWPARK MERANO 2000 awaits brave Snowboarders and Freestylers..."
                      },
                      "url": "https://example.com",
                      "length": 1300,
                      "minAltitude": 1500,
                      "maxAltitude": 2500,
                      "address": {
                        "street": null,
                        "city": {
                          "eng": "Merano"
                        },
                        "region": null,
                        "country": "IT",
                        "zipcode": null,
                        "categories": null,
                        "complement": null
                      },
                      "howToArrive": null,
                      "difficulty": "intermediate",
                      "geometries": [
                        {
                          "type": "LineString",
                          "coordinates": [
                            [
                              11.305682659149168,
                              46.66705018437341
                            ],
                            [
                              11.30692720413208,
                              46.667182709603225
                            ],
                            [
                              11.308064460754393,
                              46.667491933875965
                            ]
                          ]
                        }
                      ],
                      "openingHours": {
                        "dailySchedules": {
                          "2020-12-25": null
                        },
                        "weeklySchedules": [
                          {
                            "validFrom": "2020-01-01",
                            "validTo": "2020-12-31",
                            "monday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "tuesday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "wednesday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "thursday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "friday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "saturday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ],
                            "sunday": [
                              {
                                "opens": "08:00:00+01:00",
                                "closes": "18:00:00+01:00"
                              }
                            ]
                          }
                        ]
                      },
                      "snowCondition": {
                        "primarySurface": "frozen-granular",
                        "secondarySurface": "packed-powder",
                        "baseSnow": 30,
                        "baseSnowRange": {
                          "lower": 25,
                          "upper": 40
                        },
                        "latestStorm": 5,
                        "obtainedIn": "2020-01-14",
                        "snowOverNight": 0,
                        "groomed": true,
                        "snowMaking": false
                      }
                    },
                    "relationships": {
                      "connections": {
                        "data": [
                          {
                            "type": "skiSlopes",
                            "id": "2"
                          },
                          {
                            "type": "skiSlopes",
                            "id": "3"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/snowparks/1/connections/"
                        }
                      },
                      "features": {
                        "data": [
                          {
                            "type": "features",
                            "id": "example:jib"
                          },
                          {
                            "type": "features",
                            "id": "example:pipe"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/snowparks/1/features"
                        }
                      },
                      "categories": {
                        "data": [
                          {
                            "type": "categories",
                            "id": "example:free-style"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/snowparks/1/categories"
                        }
                      },
                      "multimediaDescriptions": {
                        "data": [
                          {
                            "type": "mediaObjects",
                            "id": "2"
                          }
                        ],
                        "links": {
                          "related": "https://example.com/2021-04/snowparks/1/multimediaDescriptions/"
                        }
                      }
                    },
                    "links": {
                      "self": "https://example.com/2021-04/snowparks/1"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          },
          "410": {
            "description": "410 Gone"
          }
        }
      }
    },
    "/2021-04/snowparks/{id}/categories": {
      "get": {
        "description": "Retrieves the resources in the relationship `categories` of a resource of type `snowparks`.",
        "tags": [
          "Snowparks"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/snowparks/1/categories"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "categories",
                      "id": "example:category",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Category"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "snowparks"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/categories/example:category",
                        "resources": {
                          "snowparks": "https://example.com/2021-04/snowparks?filter[categories][any]=example:category"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/snowparks/{id}/connections": {
      "get": {
        "description": "Retrieves the resources in the relationship `connections` of a resource of type `snowparks`.",
        "tags": [
          "Snowparks"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/snowparks/1/connections"
                  },
                  "included": null,
                  "data": [
                    {
                      "id": "1",
                      "type": "mountainAreas",
                      "meta": {
                        "dataProvider": "https://example.com",
                        "lastUpdate": "2020-04-01T08:00:00+02:00"
                      },
                      "attributes": {
                        "name": {
                          "ita": "Merano 2000",
                          "deu": "Meran 2000",
                          "eng": "Meran 2000"
                        },
                        "shortName": {
                          "eng": "Meran 2000"
                        },
                        "description": {
                          "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he. Von Meran aus ist das Gebiet direkt ??ber die Ifinger-Seilbahn ab Naif oder durch eine Umlaufseilbahn ab Falzeben erreichbar. Das Skigebiet erstreckt sich haupts??chlich auf dem Gemeindegebiet von Hafling, ber??hrt aber auch zu den Gemeinden Schenna und Sarntal geh??rende Fl??chen."
                        },
                        "abstract": {
                          "deu": "Das Skigebiet Meran 2000 liegt unter dem Berg Ifinger im Burggrafenamt auf einem Hochplateau oberhalb Meran am Tsch??gglberg in S??dtirol. Es hat 45 km Alpin-Pisten und reicht von 1670 bis 2300 m H??he."
                        },
                        "url": "https://www.meran2000.com",
                        "geometries": [
                          {
                            "type": "Polygon",
                            "coordinates": [
                              [
                                [
                                  11.310853958129883,
                                  46.66958283253642
                                ],
                                [
                                  11.304588317871094,
                                  46.668817160723044
                                ],
                                [
                                  11.301412582397461,
                                  46.666696782172096
                                ],
                                [
                                  11.305532455444336,
                                  46.66457632044435
                                ],
                                [
                                  11.31265640258789,
                                  46.66646117942096
                                ],
                                [
                                  11.314373016357422,
                                  46.66869936409677
                                ],
                                [
                                  11.310853958129883,
                                  46.66958283253642
                                ]
                              ]
                            ]
                          }
                        ],
                        "howToArrive": {
                          "ita": "L'area sciistica ed escursionistica di Merano ?? situata ai piedi della montagna Picco Ivigna ed ?? raggiungibile in pochi minuti dalle destinazioni di Merano, Avelengo, Scena e Tirolo. La cima di Merano 2000 ?? raggiungibile con due impianti di risalita diversi e ha dunque due stazioni a valle, una presso Merano con la Funivia e una ad Avelengo con la Cabinovia Falzeben.",
                          "deu": "Die Sonnenterrasse Merans liegt am Fu??e des Ifingers und ist von den Ferienorten Meran, Hafling, Schenna und Dorf Tirol in wenigen Minuten leicht erreichbar. Die Bergstation von Meran 2000 kann man mit zwei verschiedenen Aufstiegsanlagen erreichen: von Meran aus mit der Bergbahn und von Hafling aus mit der Umlaufbahn Falzeben.",
                          "eng": "The skiing and hiking area of Merano 2000 is best located next to the biggest vacation hotspots of South Tyrol and so reachable within few minutes from Merano, Avelengo, Scena and Tirolo. Two lifts can bring you to the mountain station of Merano 2000: the Ropeway in Merano or the Gondola Falzeben in Avelengo."
                        },
                        "openingHours": {
                          "dailySchedules": {
                            "2020-12-25": null
                          },
                          "weeklySchedules": [
                            {
                              "validFrom": "2020-01-01",
                              "validTo": "2020-12-31",
                              "monday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "tuesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "wednesday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "thursday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "friday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "saturday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ],
                              "sunday": [
                                {
                                  "opens": "08:00:00+01:00",
                                  "closes": "18:00:00+01:00"
                                }
                              ]
                            }
                          ]
                        },
                        "area": 36000,
                        "minAltitude": 1200,
                        "maxAltitude": 2000,
                        "totalTrailLength": 4000,
                        "totalParkArea": 20000,
                        "totalParkLength": 1000,
                        "snowCondition": {
                          "primarySurface": "powder",
                          "secondarySurface": "packed-powder",
                          "baseSnow": 50,
                          "baseSnowRange": {
                            "lower": 40,
                            "upper": 60
                          },
                          "latestStorm": 40,
                          "obtainedIn": "2019-12-20",
                          "snowOverNight": 5,
                          "groomed": true,
                          "snowMaking": false
                        }
                      },
                      "relationships": {
                        "areaOwner": {
                          "data": {
                            "type": "agents",
                            "id": "1"
                          },
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/areaOwner/"
                          }
                        },
                        "connections": {
                          "data": [
                            {
                              "type": "lifts",
                              "id": "1"
                            },
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/connections/"
                          }
                        },
                        "categories": {
                          "data": [
                            {
                              "type": "categories",
                              "id": "example/skiarea"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/categories"
                          }
                        },
                        "multimediaDescriptions": {
                          "data": [
                            {
                              "type": "mediaObjects",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/multimediaDescriptions/"
                          }
                        },
                        "lifts": {
                          "data": [
                            {
                              "type": "lifts",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/lifts/"
                          }
                        },
                        "skiSlopes": {
                          "data": [
                            {
                              "type": "skiSlopes",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/skiSlopes/"
                          }
                        },
                        "snowparks": {
                          "data": [
                            {
                              "type": "snowparks",
                              "id": "1"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/snowparks/"
                          }
                        },
                        "subAreas": {
                          "data": [
                            {
                              "type": "mountainAreas",
                              "id": "2"
                            },
                            {
                              "type": "mountainAreas",
                              "id": "3"
                            }
                          ],
                          "links": {
                            "related": "https://example.com/2021-04/mountainAreas/1/subAreas/"
                          }
                        }
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mountainAreas/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/snowparks/{id}/features": {
      "get": {
        "description": "Retrieves the resources in the relationship `features` of a resource of type `snowparks`.",
        "tags": [
          "Snowparks"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/snowparks/1/features"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "features",
                      "id": "example:feature",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "description": null,
                        "name": {
                          "eng": "Example Feature"
                        },
                        "namespace": "example",
                        "resourceTypes": [
                          "snowparks"
                        ],
                        "shortName": null,
                        "url": null
                      },
                      "relationships": {
                        "children": null,
                        "multimediaDescriptions": null,
                        "parents": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/features/example:feature",
                        "resources": {
                          "snowparks": "https://example.com/2021-04/snowparks?filter[features][any]=example:feature"
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    },
    "/2021-04/snowparks/{id}/multimediaDescriptions": {
      "get": {
        "description": "Retrieves the resources in the relationship `multimediaDescriptions` of a resource of type `snowparks`.",
        "tags": [
          "Snowparks"
        ],
        "parameters": [
          {
            "$ref": "#/paths/~12021-04~1lifts~1%7Bid%7D/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/0"
          },
          {
            "$ref": "#/paths/~12021-04~1lifts/get/parameters/1"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/vnd.api+json": {
                "example": {
                  "jsonapi": {
                    "version": "1.0"
                  },
                  "links": {
                    "self": "https://example.com/2021-04/snowparks/1/multimediaDescriptions"
                  },
                  "included": null,
                  "data": [
                    {
                      "type": "mediaObjects",
                      "id": "1",
                      "meta": {
                        "dataProvider": null,
                        "lastUpdate": null
                      },
                      "attributes": {
                        "abstract": null,
                        "contentType": "audio/mpeg3",
                        "description": null,
                        "duration": null,
                        "height": null,
                        "license": null,
                        "name": null,
                        "shortName": null,
                        "url": "https://example.com/audio.mp3",
                        "width": null
                      },
                      "relationships": {
                        "categories": null,
                        "copyrightOwner": null
                      },
                      "links": {
                        "self": "https://example.com/2021-04/mediaObjects/1"
                      }
                    }
                  ]
                }
              }
            }
          },
          "404": {
            "description": "404 Not Found"
          }
        }
      }
    }
  }
}
