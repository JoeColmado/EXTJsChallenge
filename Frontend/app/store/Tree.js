Ext.define('ChallengeApp.store.tree', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.tree',
    model: 'ChallengeApp.model.Tree',
    // autoLoad: true,
    // proxy: {
    //     type: 'ajax',
    //     url: "app/data/treeData.json",
    //     reader: {
    //         type: 'json',
    //         root : 'result'
    //     }
    // },
    root:
       {
        "id": 1,
        "firstName": "Tommy",
        "LastName": "Bailey",
        "Mail": "tommy.bailey@example.com",
        "Code": "515.123.4567",
        "creationDate": "17-JUN-16",
        "parent": null,
        "position": "President",
        "children": [
            {
                "id": 3,
                "firstName": "Blake",
                "LastName": "Cooper",
                "Mail": "blake.cooper@example.com",
                "Code": "515.123.4569",
                "creationDate": "13-JAN-16",
                "parent": 1,
                "position": "Administration Vice President",
                "children": [
                    {
                        "id": 4,
                        "firstName": "Louie",
                        "LastName": "Richardson",
                        "Mail": "louie.richardson@example.com",
                        "Code": "590.423.4567",
                        "creationDate": "03-JAN-16",
                        "parent": 3,
                        "position": "Programmer",
                        "children": [
                            {
                                "id": 5,
                                "firstName": "Nathan",
                                "LastName": "Cox",
                                "Mail": "nathan.cox@example.com",
                                "Code": "590.423.4568",
                                "creationDate": "21-MAY-16",
                                "parent": 4,
                                "position": "Programmer"
                            },
                            {
                                "id": 8,
                                "firstName": "Bobby",
                                "LastName": "Torres",
                                "Mail": "bobby.torres@example.com",
                                "Code": "590.423.5567",
                                "creationDate": "07-FEB-16",
                                "parent": 4,
                                "position": "Programmer"
                            },
                            {
                                "id": 7,
                                "firstName": "Charles",
                                "LastName": "Ward",
                                "Mail": "charles.ward@example.com",
                                "Code": "590.423.4560",
                                "creationDate": "05-FEB-16",
                                "parent": 4,
                                "position": "Programmer"
                            },
                            {
                                "id": 6,
                                "firstName": "Gabriel",
                                "LastName": "Howard",
                                "Mail": "gabriel.howard@example.com",
                                "Code": "590.423.4569",
                                "creationDate": "25-JUN-16",
                                "parent": 4,
                                "position": "Programmer"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "firstName": "Jude",
                "LastName": "Rivera",
                "Mail": "jude.rivera@example.com",
                "Code": "515.123.4568",
                "creationDate": "21-SEP-16",
                "parent": 1,
                "position": "Administration Vice President",
                "children": [
                    {
                        "id": 106,
                        "firstName": "Rose",
                        "LastName": "Stephens",
                        "Mail": "rose.stephens@example.com",
                        "Code": "515.123.8080",
                        "creationDate": "07-JUN-16",
                        "parent": 2,
                        "position": "Accounting Manager",
                        "children": [
                            {
                                "id": 107,
                                "firstName": "Summer",
                                "LastName": "Payne",
                                "Mail": "summer.payne@example.com",
                                "Code": "515.123.8181",
                                "creationDate": "07-JUN-16",
                                "parent": 106,
                                "position": "Public Accountant"
                            }
                        ]
                    },
                    {
                        "id": 101,
                        "firstName": "Annabelle",
                        "LastName": "Dunn",
                        "Mail": "annabelle.dunn@example.com",
                        "Code": "515.123.4444",
                        "creationDate": "17-SEP-16",
                        "parent": 2,
                        "position": "Administration Assistant"
                    },
                    {
                        "id": 9,
                        "firstName": "Mohammad",
                        "LastName": "Peterson",
                        "Mail": "mohammad.peterson@example.com",
                        "Code": "515.124.4569",
                        "creationDate": "17-AUG-16",
                        "parent": 2,
                        "position": "Finance Manager",
                        "children": [
                            {
                                "id": 11,
                                "firstName": "Tyler",
                                "LastName": "Ramirez",
                                "Mail": "tyler.ramirez@example.com",
                                "Code": "515.124.4269",
                                "creationDate": "28-SEP-16",
                                "parent": 9,
                                "position": "Accountant"
                            },
                            {
                                "id": 10,
                                "firstName": "Ryan",
                                "LastName": "Gray",
                                "Mail": "ryan.gray@example.com",
                                "Code": "515.124.4169",
                                "creationDate": "16-AUG-16",
                                "parent": 9,
                                "position": "Accountant"
                            },
                            {
                                "id": 14,
                                "firstName": "Elliot",
                                "LastName": "Brooks",
                                "Mail": "elliot.brooks@example.com",
                                "Code": "515.124.4567",
                                "creationDate": "07-DEC-16",
                                "parent": 9,
                                "position": "Accountant"
                            },
                            {
                                "id": 12,
                                "firstName": "Elliott",
                                "LastName": "James",
                                "Mail": "elliott.james@example.com",
                                "Code": "515.124.4369",
                                "creationDate": "30-SEP-16",
                                "parent": 9,
                                "position": "Accountant"
                            },
                            {
                                "id": 13,
                                "firstName": "Albert",
                                "LastName": "Watson",
                                "Mail": "albert.watson@example.com",
                                "Code": "515.124.4469",
                                "creationDate": "07-MAR-16",
                                "parent": 9,
                                "position": "Accountant"
                            }
                        ]
                    },
                    {
                        "id": 104,
                        "firstName": "Harper",
                        "LastName": "Spencer",
                        "Mail": "harper.spencer@example.com",
                        "Code": "515.123.7777",
                        "creationDate": "07-JUN-16",
                        "parent": 2,
                        "position": "Human Resources Representative"
                    },
                    {
                        "id": 105,
                        "firstName": "Gracie",
                        "LastName": "Gardner",
                        "Mail": "gracie.gardner@example.com",
                        "Code": "515.123.8888",
                        "creationDate": "07-JUN-16",
                        "parent": 2,
                        "position": "Public Relations Representative"
                    }
                ]
            },
            {
                "id": 102,
                "firstName": "Emma",
                "LastName": "Perkins",
                "Mail": "emma.perkins@example.com",
                "Code": "515.123.5555",
                "creationDate": "17-FEB-16",
                "parent": 1,
                "position": "Marketing Manager",
                "children": [
                    {
                        "id": 103,
                        "firstName": "Amelie",
                        "LastName": "Hudson",
                        "Mail": "amelie.hudson@example.com",
                        "Code": "603.123.6666",
                        "creationDate": "17-AUG-16",
                        "parent": 102,
                        "position": "Marketing Representative"
                    }
                ]
            },
            {
                "id": 15,
                "firstName": "Rory",
                "LastName": "Kelly",
                "Mail": "rory.kelly@example.com",
                "Code": "515.127.4561",
                "creationDate": "07-DEC-16",
                "parent": 1,
                "position": "Purchasing Manager",
                "children": [
                    {
                        "id": 17,
                        "firstName": "Frederick",
                        "LastName": "Price",
                        "Mail": "frederick.price@example.com",
                        "Code": "515.127.4563",
                        "creationDate": "24-DEC-16",
                        "parent": 15,
                        "position": "Purchasing Clerk"
                    },
                    {
                        "id": 16,
                        "firstName": "Alex",
                        "LastName": "Sanders",
                        "Mail": "alex.sanders@example.com",
                        "Code": "515.127.4562",
                        "creationDate": "18-MAY-16",
                        "parent": 15,
                        "position": "Purchasing Clerk"
                    },
                    {
                        "id": 18,
                        "firstName": "Ollie",
                        "LastName": "Bennett",
                        "Mail": "ollie.bennett@example.com",
                        "Code": "515.127.4564",
                        "creationDate": "24-JUL-16",
                        "parent": 15,
                        "position": "Purchasing Clerk"
                    },
                    {
                        "id": 19,
                        "firstName": "Louis",
                        "LastName": "Wood",
                        "Mail": "louis.wood@example.com",
                        "Code": "515.127.4565",
                        "creationDate": "15-NOV-16",
                        "parent": 15,
                        "position": "Purchasing Clerk"
                    },
                    {
                        "id": 20,
                        "firstName": "Dexter",
                        "LastName": "Barnes",
                        "Mail": "dexter.barnes@example.com",
                        "Code": "515.127.4566",
                        "creationDate": "10-AUG-16",
                        "parent": 15,
                        "position": "Purchasing Clerk"
                    }
                ]
            },
            {
                "id": 49,
                "firstName": "Isabella",
                "LastName": "Cole",
                "Mail": "isabella.cole@example.com",
                "Code": "011.44.1344.619268",
                "creationDate": "15-OCT-16",
                "parent": 1,
                "position": "Sales Manager",
                "children": [
                    {
                        "id": 69,
                        "firstName": "Evelyn",
                        "LastName": "Tucker",
                        "Mail": "evelyn.tucker@example.com",
                        "Code": "011.44.1343.929268",
                        "creationDate": "11-MAR-16",
                        "parent": 49,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 70,
                        "firstName": "Eva",
                        "LastName": "Porter",
                        "Mail": "eva.porter@example.com",
                        "Code": "011.44.1343.829268",
                        "creationDate": "23-MAR-16",
                        "parent": 49,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 71,
                        "firstName": "Millie",
                        "LastName": "Hunter",
                        "Mail": "millie.hunter@example.com",
                        "Code": "011.44.1343.729268",
                        "creationDate": "24-JAN-16",
                        "parent": 49,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 72,
                        "firstName": "Sofia",
                        "LastName": "Hicks",
                        "Mail": "sofia.hicks@example.com",
                        "Code": "011.44.1343.629268",
                        "creationDate": "23-FEB-16",
                        "parent": 49,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 73,
                        "firstName": "Lucy",
                        "LastName": "Crawford",
                        "Mail": "lucy.crawford@example.com",
                        "Code": "011.44.1343.529268",
                        "creationDate": "24-MAR-16",
                        "parent": 49,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 74,
                        "firstName": "Elsie",
                        "LastName": "Henry",
                        "Mail": "elsie.henry@example.com",
                        "Code": "011.44.1343.329268",
                        "creationDate": "21-APR-16",
                        "parent": 49,
                        "position": "Sales Representative"
                    }
                ]
            },
            {
                "id": 48,
                "firstName": "Jessica",
                "LastName": "Woods",
                "Mail": "jessica.woods@example.com",
                "Code": "011.44.1344.429278",
                "creationDate": "10-MAR-16",
                "parent": 1,
                "position": "Sales Manager",
                "children": [
                    {
                        "id": 64,
                        "firstName": "Florence",
                        "LastName": "Freeman",
                        "Mail": "florence.freeman@example.com",
                        "Code": "011.44.1346.229268",
                        "creationDate": "19-MAR-16",
                        "parent": 48,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 65,
                        "firstName": "Alice",
                        "LastName": "Wells",
                        "Mail": "alice.wells@example.com",
                        "Code": "011.44.1346.329268",
                        "creationDate": "24-JAN-16",
                        "parent": 48,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 66,
                        "firstName": "Charlotte",
                        "LastName": "Webb",
                        "Mail": "charlotte.webb@example.com",
                        "Code": "011.44.1346.529268",
                        "creationDate": "23-FEB-16",
                        "parent": 48,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 67,
                        "firstName": "Sienna",
                        "LastName": "Simpson",
                        "Mail": "sienna.simpson@example.com",
                        "Code": "011.44.1346.629268",
                        "creationDate": "24-MAR-16",
                        "parent": 48,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 68,
                        "firstName": "Matilda",
                        "LastName": "Stevens",
                        "Mail": "matilda.stevens@example.com",
                        "Code": "011.44.1346.729268",
                        "creationDate": "21-APR-16",
                        "parent": 48,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 63,
                        "firstName": "Phoebe",
                        "LastName": "Murray",
                        "Mail": "phoebe.murray@example.com",
                        "Code": "011.44.1346.129268",
                        "creationDate": "11-NOV-16",
                        "parent": 48,
                        "position": "Sales Representative"
                    }
                ]
            },
            {
                "id": 47,
                "firstName": "Ella",
                "LastName": "Wallace",
                "Mail": "ella.wallace@example.com",
                "Code": "011.44.1344.467268",
                "creationDate": "05-JAN-16",
                "parent": 1,
                "position": "Sales Manager",
                "children": [
                    {
                        "id": 57,
                        "firstName": "Scarlett",
                        "LastName": "Gibson",
                        "Mail": "scarlett.gibson@example.com",
                        "Code": "011.44.1345.429268",
                        "creationDate": "30-JAN-16",
                        "parent": 47,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 58,
                        "firstName": "Ruby",
                        "LastName": "Mcdonald",
                        "Mail": "ruby.mcdonald@example.com",
                        "Code": "011.44.1345.929268",
                        "creationDate": "04-MAR-16",
                        "parent": 47,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 59,
                        "firstName": "Chloe",
                        "LastName": "Cruz",
                        "Mail": "chloe.cruz@example.com",
                        "Code": "011.44.1345.829268",
                        "creationDate": "01-AUG-16",
                        "parent": 47,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 60,
                        "firstName": "Isabelle",
                        "LastName": "Marshall",
                        "Mail": "isabelle.marshall@example.com",
                        "Code": "011.44.1345.729268",
                        "creationDate": "10-MAR-16",
                        "parent": 47,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 61,
                        "firstName": "Daisy",
                        "LastName": "Ortiz",
                        "Mail": "daisy.ortiz@example.com",
                        "Code": "011.44.1345.629268",
                        "creationDate": "15-DEC-16",
                        "parent": 47,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 62,
                        "firstName": "Freya",
                        "LastName": "Gomez",
                        "Mail": "freya.gomez@example.com",
                        "Code": "011.44.1345.529268",
                        "creationDate": "03-NOV-16",
                        "parent": 47,
                        "position": "Sales Representative"
                    }
                ]
            },
            {
                "id": 46,
                "firstName": "Ava",
                "LastName": "Sullivan",
                "Mail": "ava.sullivan@example.com",
                "Code": "011.44.1344.429268",
                "creationDate": "01-OCT-16",
                "parent": 1,
                "position": "Sales Manager",
                "children": [
                    {
                        "id": 56,
                        "firstName": "Evie",
                        "LastName": "Harrison",
                        "Mail": "evie.harrison@example.com",
                        "Code": "011.44.1344.486508",
                        "creationDate": "23-NOV-16",
                        "parent": 46,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 55,
                        "firstName": "Grace",
                        "LastName": "Ellis",
                        "Mail": "grace.ellis@example.com",
                        "Code": "011.44.1344.987668",
                        "creationDate": "09-DEC-16",
                        "parent": 46,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 54,
                        "firstName": "Lily",
                        "LastName": "Fisher",
                        "Mail": "lily.fisher@example.com",
                        "Code": "011.44.1344.498718",
                        "creationDate": "30-MAR-16",
                        "parent": 46,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 53,
                        "firstName": "Sophia",
                        "LastName": "Reynolds",
                        "Mail": "sophia.reynolds@example.com",
                        "Code": "011.44.1344.478968",
                        "creationDate": "20-AUG-16",
                        "parent": 46,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 52,
                        "firstName": "Sophie",
                        "LastName": "Owens",
                        "Mail": "sophie.owens@example.com",
                        "Code": "011.44.1344.345268",
                        "creationDate": "24-MAR-16",
                        "parent": 46,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 51,
                        "firstName": "Poppy",
                        "LastName": "Jordan",
                        "Mail": "poppy.jordan@example.com",
                        "Code": "011.44.1344.129268",
                        "creationDate": "30-JAN-16",
                        "parent": 46,
                        "position": "Sales Representative"
                    }
                ]
            },
            {
                "id": 50,
                "firstName": "Mia",
                "LastName": "West",
                "Mail": "mia.west@example.com",
                "Code": "011.44.1344.429018",
                "creationDate": "29-JAN-16",
                "parent": 1,
                "position": "Sales Manager",
                "children": [
                    {
                        "id": 80,
                        "firstName": "Elizabeth",
                        "LastName": "Dixon",
                        "Mail": "elizabeth.dixon@example.com",
                        "Code": "011.44.1644.429262",
                        "creationDate": "04-JAN-16",
                        "parent": 50,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 75,
                        "firstName": "Imogen",
                        "LastName": "Boyd",
                        "Mail": "imogen.boyd@example.com",
                        "Code": "011.44.1644.429267",
                        "creationDate": "11-MAY-16",
                        "parent": 50,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 76,
                        "firstName": "Layla",
                        "LastName": "Mason",
                        "Mail": "layla.mason@example.com",
                        "Code": "011.44.1644.429266",
                        "creationDate": "19-MAR-16",
                        "parent": 50,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 77,
                        "firstName": "Rosie",
                        "LastName": "Morales",
                        "Mail": "rosie.morales@example.com",
                        "Code": "011.44.1644.429265",
                        "creationDate": "24-MAR-16",
                        "parent": 50,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 78,
                        "firstName": "Maya",
                        "LastName": "Kennedy",
                        "Mail": "maya.kennedy@example.com",
                        "Code": "011.44.1644.429264",
                        "creationDate": "23-APR-16",
                        "parent": 50,
                        "position": "Sales Representative"
                    },
                    {
                        "id": 79,
                        "firstName": "Esme",
                        "LastName": "Warren",
                        "Mail": "esme.warren@example.com",
                        "Code": "011.44.1644.429263",
                        "creationDate": "24-MAY-16",
                        "parent": 50,
                        "position": "Sales Representative"
                    }
                ]
            },
            {
                "id": 25,
                "firstName": "Ronnie",
                "LastName": "Perry",
                "Mail": "ronnie.perry@example.com",
                "Code": "650.123.5234",
                "creationDate": "16-NOV-16",
                "parent": 1,
                "position": "Stock Manager",
                "children": [
                    {
                        "id": 97,
                        "firstName": "Harriet",
                        "LastName": "Ferguson",
                        "Mail": "harriet.ferguson@example.com",
                        "Code": "650.507.9811",
                        "creationDate": "24-APR-16",
                        "parent": 25,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 98,
                        "firstName": "Amber",
                        "LastName": "Rose",
                        "Mail": "amber.rose@example.com",
                        "Code": "650.507.9822",
                        "creationDate": "23-MAY-16",
                        "parent": 25,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 99,
                        "firstName": "Bella",
                        "LastName": "Stone",
                        "Mail": "bella.stone@example.com",
                        "Code": "650.507.9833",
                        "creationDate": "21-JUN-16",
                        "parent": 25,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 100,
                        "firstName": "Thea",
                        "LastName": "Hawkins",
                        "Mail": "thea.hawkins@example.com",
                        "Code": "650.507.9844",
                        "creationDate": "13-JAN-16",
                        "parent": 25,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 44,
                        "firstName": "Emily",
                        "LastName": "Hamilton",
                        "Mail": "emily.hamilton@example.com",
                        "Code": "650.121.2874",
                        "creationDate": "15-MAR-16",
                        "parent": 25,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 43,
                        "firstName": "Olivia",
                        "LastName": "Ford",
                        "Mail": "olivia.ford@example.com",
                        "Code": "650.121.2994",
                        "creationDate": "29-JAN-16",
                        "parent": 25,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 42,
                        "firstName": "Amelia",
                        "LastName": "Myers",
                        "Mail": "amelia.myers@example.com",
                        "Code": "650.121.8009",
                        "creationDate": "17-OCT-16",
                        "parent": 25,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 45,
                        "firstName": "Isla",
                        "LastName": "Graham",
                        "Mail": "isla.graham@example.com",
                        "Code": "650.121.2004",
                        "creationDate": "09-JUL-16",
                        "parent": 25,
                        "position": "Stock Clerk"
                    }
                ]
            },
            {
                "id": 24,
                "firstName": "Callum",
                "LastName": "Jenkins",
                "Mail": "callum.jenkins@example.com",
                "Code": "650.123.4234",
                "creationDate": "10-OCT-16",
                "parent": 1,
                "position": "Stock Manager",
                "children": [
                    {
                        "id": 93,
                        "firstName": "Georgia",
                        "LastName": "Mills",
                        "Mail": "georgia.mills@example.com",
                        "Code": "650.501.1876",
                        "creationDate": "04-FEB-16",
                        "parent": 24,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 94,
                        "firstName": "Maisie",
                        "LastName": "Nichols",
                        "Mail": "maisie.nichols@example.com",
                        "Code": "650.501.2876",
                        "creationDate": "03-MAR-16",
                        "parent": 24,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 95,
                        "firstName": "Eleanor",
                        "LastName": "Grant",
                        "Mail": "eleanor.grant@example.com",
                        "Code": "650.501.3876",
                        "creationDate": "01-JUL-16",
                        "parent": 24,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 96,
                        "firstName": "Hannah",
                        "LastName": "Knight",
                        "Mail": "hannah.knight@example.com",
                        "Code": "650.501.4876",
                        "creationDate": "17-MAR-16",
                        "parent": 24,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 41,
                        "firstName": "Connor",
                        "LastName": "Hayes",
                        "Mail": "connor.hayes@example.com",
                        "Code": "650.121.1834",
                        "creationDate": "06-APR-16",
                        "parent": 24,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 38,
                        "firstName": "Sonny",
                        "LastName": "Russell",
                        "Mail": "sonny.russell@example.com",
                        "Code": "650.121.1234",
                        "creationDate": "14-JUL-16",
                        "parent": 24,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 39,
                        "firstName": "Kian",
                        "LastName": "Griffin",
                        "Mail": "kian.griffin@example.com",
                        "Code": "650.121.2034",
                        "creationDate": "26-OCT-16",
                        "parent": 24,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 40,
                        "firstName": "Caleb",
                        "LastName": "Diaz",
                        "Mail": "caleb.diaz@example.com",
                        "Code": "650.121.2019",
                        "creationDate": "12-FEB-16",
                        "parent": 24,
                        "position": "Stock Clerk"
                    }
                ]
            },
            {
                "id": 23,
                "firstName": "Jackson",
                "LastName": "Coleman",
                "Mail": "jackson.coleman@example.com",
                "Code": "650.123.3234",
                "creationDate": "01-MAY-16",
                "parent": 1,
                "position": "Stock Manager",
                "children": [
                    {
                        "id": 89,
                        "firstName": "Jasmine",
                        "LastName": "Hunt",
                        "Mail": "jasmine.hunt@example.com",
                        "Code": "650.505.1876",
                        "creationDate": "14-JUN-16",
                        "parent": 23,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 90,
                        "firstName": "Eliza",
                        "LastName": "Black",
                        "Mail": "eliza.black@example.com",
                        "Code": "650.505.2876",
                        "creationDate": "13-AUG-16",
                        "parent": 23,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 91,
                        "firstName": "Lilly",
                        "LastName": "Daniels",
                        "Mail": "lilly.daniels@example.com",
                        "Code": "650.505.3876",
                        "creationDate": "11-JUL-16",
                        "parent": 23,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 92,
                        "firstName": "Abigail",
                        "LastName": "Palmer",
                        "Mail": "abigail.palmer@example.com",
                        "Code": "650.505.4876",
                        "creationDate": "19-DEC-16",
                        "parent": 23,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 34,
                        "firstName": "Seth",
                        "LastName": "Foster",
                        "Mail": "seth.foster@example.com",
                        "Code": "650.127.1934",
                        "creationDate": "14-JUN-16",
                        "parent": 23,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 35,
                        "firstName": "Carter",
                        "LastName": "Gonzales",
                        "Mail": "carter.gonzales@example.com",
                        "Code": "650.127.1834",
                        "creationDate": "26-AUG-16",
                        "parent": 23,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 36,
                        "firstName": "Felix",
                        "LastName": "Bryant",
                        "Mail": "felix.bryant@example.com",
                        "Code": "650.127.1734",
                        "creationDate": "12-DEC-16",
                        "parent": 23,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 37,
                        "firstName": "Ibrahim",
                        "LastName": "Alexander",
                        "Mail": "ibrahim.alexander@example.com",
                        "Code": "650.127.1634",
                        "creationDate": "06-FEB-16",
                        "parent": 23,
                        "position": "Stock Clerk"
                    }
                ]
            },
            {
                "id": 22,
                "firstName": "Liam",
                "LastName": "Henderson",
                "Mail": "liam.henderson@example.com",
                "Code": "650.123.2234",
                "creationDate": "10-APR-16",
                "parent": 1,
                "position": "Stock Manager",
                "children": [
                    {
                        "id": 85,
                        "firstName": "Holly",
                        "LastName": "Shaw",
                        "Mail": "holly.shaw@example.com",
                        "Code": "650.509.1876",
                        "creationDate": "27-JAN-16",
                        "parent": 22,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 86,
                        "firstName": "Emilia",
                        "LastName": "Holmes",
                        "Mail": "emilia.holmes@example.com",
                        "Code": "650.509.2876",
                        "creationDate": "20-FEB-16",
                        "parent": 22,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 87,
                        "firstName": "Molly",
                        "LastName": "Rice",
                        "Mail": "molly.rice@example.com",
                        "Code": "650.509.3876",
                        "creationDate": "24-JUN-16",
                        "parent": 22,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 88,
                        "firstName": "Ellie",
                        "LastName": "Robertson",
                        "Mail": "ellie.robertson@example.com",
                        "Code": "650.509.4876",
                        "creationDate": "07-FEB-16",
                        "parent": 22,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 33,
                        "firstName": "Reggie",
                        "LastName": "Simmons",
                        "Mail": "reggie.simmons@example.com",
                        "Code": "650.124.8234",
                        "creationDate": "10-APR-16",
                        "parent": 22,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 30,
                        "firstName": "Austin",
                        "LastName": "Flores",
                        "Mail": "austin.flores@example.com",
                        "Code": "650.124.5234",
                        "creationDate": "20-AUG-16",
                        "parent": 22,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 31,
                        "firstName": "Ellis",
                        "LastName": "Washington",
                        "Mail": "ellis.washington@example.com",
                        "Code": "650.124.6234",
                        "creationDate": "30-OCT-16",
                        "parent": 22,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 32,
                        "firstName": "Jamie",
                        "LastName": "Butler",
                        "Mail": "jamie.butler@example.com",
                        "Code": "650.124.7234",
                        "creationDate": "16-FEB-16",
                        "parent": 22,
                        "position": "Stock Clerk"
                    }
                ]
            },
            {
                "id": 21,
                "firstName": "Jaxon",
                "LastName": "Ross",
                "Mail": "jaxon.ross@example.com",
                "Code": "650.123.1234",
                "creationDate": "18-JUL-16",
                "parent": 1,
                "position": "Stock Manager",
                "children": [
                    {
                        "id": 81,
                        "firstName": "Lola",
                        "LastName": "Ramos",
                        "Mail": "lola.ramos@example.com",
                        "Code": "650.507.9876",
                        "creationDate": "24-JAN-16",
                        "parent": 21,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 82,
                        "firstName": "Willow",
                        "LastName": "Reyes",
                        "Mail": "willow.reyes@example.com",
                        "Code": "650.507.9877",
                        "creationDate": "23-FEB-16",
                        "parent": 21,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 83,
                        "firstName": "Ivy",
                        "LastName": "Burns",
                        "Mail": "ivy.burns@example.com",
                        "Code": "650.507.9878",
                        "creationDate": "21-JUN-16",
                        "parent": 21,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 84,
                        "firstName": "Erin",
                        "LastName": "Gordon",
                        "Mail": "erin.gordon@example.com",
                        "Code": "650.507.9879",
                        "creationDate": "03-FEB-16",
                        "parent": 21,
                        "position": "Shipping Clerk"
                    },
                    {
                        "id": 26,
                        "firstName": "Leon",
                        "LastName": "Powell",
                        "Mail": "leon.powell@example.com",
                        "Code": "650.124.1214",
                        "creationDate": "16-JUL-16",
                        "parent": 21,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 27,
                        "firstName": "Kai",
                        "LastName": "Long",
                        "Mail": "kai.long@example.com",
                        "Code": "650.124.1224",
                        "creationDate": "28-SEP-16",
                        "parent": 21,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 28,
                        "firstName": "Aaron",
                        "LastName": "Patterson",
                        "Mail": "aaron.patterson@example.com",
                        "Code": "650.124.1334",
                        "creationDate": "14-JAN-16",
                        "parent": 21,
                        "position": "Stock Clerk"
                    },
                    {
                        "id": 29,
                        "firstName": "Roman",
                        "LastName": "Hughes",
                        "Mail": "roman.hughes@example.com",
                        "Code": "650.124.1434",
                        "creationDate": "08-MAR-16",
                        "parent": 21,
                        "position": "Stock Clerk"
                    }
                ]
            }
        ]
    }



});

