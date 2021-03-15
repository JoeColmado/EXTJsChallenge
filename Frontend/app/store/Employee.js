Ext.define('ChallengeApp.store.Employee', {
    extend: 'Ext.data.ArrayStore',

    alias: 'store.employee',
    autoDestroy: true,
    autoLoad: true,
    fields: [
        { name: 'EMPLOYEE_ID', type: 'int' },
        { name: 'FIRST_NAME', type: 'string' },
        { name: 'LAST_NAME', type: 'string' },
        { name: 'EMAIL', type: 'string' },
        { name: 'PHONE', type: 'string' },
        { name: 'HIRE_DATE', type: 'date' , dateFormat :'d-M-y'   },
        { name: 'MANAGER_ID', type: 'int' },
        { name: 'JOB_TITLE', type: 'string' },

    ],
    // model: 'ChallengeApp.model.Employee',

    // proxy: {
    //     type: 'ajax',
    //     url: 'app/data/employee.json',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'employees'
    //     }
    // }
    data: [
        [
            107,
            "Summer",
            "Payne",
            "summer.payne@example.com",
            "515.123.8181",
            "07-JUN-16",
            106,
            "Public Accountant"
        ],
        [
            106,
            "Rose",
            "Stephens",
            "rose.stephens@example.com",
            "515.123.8080",
            "07-JUN-16",
            2,
            "Accounting Manager"
        ],
        [
            101,
            "Annabelle",
            "Dunn",
            "annabelle.dunn@example.com",
            "515.123.4444",
            "17-SEP-16",
            2,
            "Administration Assistant"
        ],
        [
            1,
            "Tommy",
            "Bailey",
            "tommy.bailey@example.com",
            "515.123.4567",
            "17-JUN-16",
            null,
            "President"
        ],
        [
            3,
            "Blake",
            "Cooper",
            "blake.cooper@example.com",
            "515.123.4569",
            "13-JAN-16",
            1,
            "Administration Vice President"
        ],
        [
            2,
            "Jude",
            "Rivera",
            "jude.rivera@example.com",
            "515.123.4568",
            "21-SEP-16",
            1,
            "Administration Vice President"
        ],
        [
            11,
            "Tyler",
            "Ramirez",
            "tyler.ramirez@example.com",
            "515.124.4269",
            "28-SEP-16",
            9,
            "Accountant"
        ],
        [
            10,
            "Ryan",
            "Gray",
            "ryan.gray@example.com",
            "515.124.4169",
            "16-AUG-16",
            9,
            "Accountant"
        ],
        [
            14,
            "Elliot",
            "Brooks",
            "elliot.brooks@example.com",
            "515.124.4567",
            "07-DEC-16",
            9,
            "Accountant"
        ],
        [
            12,
            "Elliott",
            "James",
            "elliott.james@example.com",
            "515.124.4369",
            "30-SEP-16",
            9,
            "Accountant"
        ],
        [
            13,
            "Albert",
            "Watson",
            "albert.watson@example.com",
            "515.124.4469",
            "07-MAR-16",
            9,
            "Accountant"
        ],
        [
            9,
            "Mohammad",
            "Peterson",
            "mohammad.peterson@example.com",
            "515.124.4569",
            "17-AUG-16",
            2,
            "Finance Manager"
        ],
        [
            104,
            "Harper",
            "Spencer",
            "harper.spencer@example.com",
            "515.123.7777",
            "07-JUN-16",
            2,
            "Human Resources Representative"
        ],
        [
            4,
            "Louie",
            "Richardson",
            "louie.richardson@example.com",
            "590.423.4567",
            "03-JAN-16",
            3,
            "Programmer"
        ],
        [
            5,
            "Nathan",
            "Cox",
            "nathan.cox@example.com",
            "590.423.4568",
            "21-MAY-16",
            4,
            "Programmer"
        ],
        [
            8,
            "Bobby",
            "Torres",
            "bobby.torres@example.com",
            "590.423.5567",
            "07-FEB-16",
            4,
            "Programmer"
        ],
        [
            7,
            "Charles",
            "Ward",
            "charles.ward@example.com",
            "590.423.4560",
            "05-FEB-16",
            4,
            "Programmer"
        ],
        [
            6,
            "Gabriel",
            "Howard",
            "gabriel.howard@example.com",
            "590.423.4569",
            "25-JUN-16",
            4,
            "Programmer"
        ],
        [
            102,
            "Emma",
            "Perkins",
            "emma.perkins@example.com",
            "515.123.5555",
            "17-FEB-16",
            1,
            "Marketing Manager"
        ],
        [
            103,
            "Amelie",
            "Hudson",
            "amelie.hudson@example.com",
            "603.123.6666",
            "17-AUG-16",
            102,
            "Marketing Representative"
        ],
        [
            105,
            "Gracie",
            "Gardner",
            "gracie.gardner@example.com",
            "515.123.8888",
            "07-JUN-16",
            2,
            "Public Relations Representative"
        ],
        [
            17,
            "Frederick",
            "Price",
            "frederick.price@example.com",
            "515.127.4563",
            "24-DEC-16",
            15,
            "Purchasing Clerk"
        ],
        [
            16,
            "Alex",
            "Sanders",
            "alex.sanders@example.com",
            "515.127.4562",
            "18-MAY-16",
            15,
            "Purchasing Clerk"
        ],
        [
            18,
            "Ollie",
            "Bennett",
            "ollie.bennett@example.com",
            "515.127.4564",
            "24-JUL-16",
            15,
            "Purchasing Clerk"
        ],
        [
            19,
            "Louis",
            "Wood",
            "louis.wood@example.com",
            "515.127.4565",
            "15-NOV-16",
            15,
            "Purchasing Clerk"
        ],
        [
            20,
            "Dexter",
            "Barnes",
            "dexter.barnes@example.com",
            "515.127.4566",
            "10-AUG-16",
            15,
            "Purchasing Clerk"
        ],
        [
            15,
            "Rory",
            "Kelly",
            "rory.kelly@example.com",
            "515.127.4561",
            "07-DEC-16",
            1,
            "Purchasing Manager"
        ],
        [
            49,
            "Isabella",
            "Cole",
            "isabella.cole@example.com",
            "011.44.1344.619268",
            "15-OCT-16",
            1,
            "Sales Manager"
        ],
        [
            48,
            "Jessica",
            "Woods",
            "jessica.woods@example.com",
            "011.44.1344.429278",
            "10-MAR-16",
            1,
            "Sales Manager"
        ],
        [
            47,
            "Ella",
            "Wallace",
            "ella.wallace@example.com",
            "011.44.1344.467268",
            "05-JAN-16",
            1,
            "Sales Manager"
        ],
        [
            46,
            "Ava",
            "Sullivan",
            "ava.sullivan@example.com",
            "011.44.1344.429268",
            "01-OCT-16",
            1,
            "Sales Manager"
        ],
        [
            50,
            "Mia",
            "West",
            "mia.west@example.com",
            "011.44.1344.429018",
            "29-JAN-16",
            1,
            "Sales Manager"
        ],
        [
            56,
            "Evie",
            "Harrison",
            "evie.harrison@example.com",
            "011.44.1344.486508",
            "23-NOV-16",
            46,
            "Sales Representative"
        ],
        [
            57,
            "Scarlett",
            "Gibson",
            "scarlett.gibson@example.com",
            "011.44.1345.429268",
            "30-JAN-16",
            47,
            "Sales Representative"
        ],
        [
            58,
            "Ruby",
            "Mcdonald",
            "ruby.mcdonald@example.com",
            "011.44.1345.929268",
            "04-MAR-16",
            47,
            "Sales Representative"
        ],
        [
            59,
            "Chloe",
            "Cruz",
            "chloe.cruz@example.com",
            "011.44.1345.829268",
            "01-AUG-16",
            47,
            "Sales Representative"
        ],
        [
            60,
            "Isabelle",
            "Marshall",
            "isabelle.marshall@example.com",
            "011.44.1345.729268",
            "10-MAR-16",
            47,
            "Sales Representative"
        ],
        [
            61,
            "Daisy",
            "Ortiz",
            "daisy.ortiz@example.com",
            "011.44.1345.629268",
            "15-DEC-16",
            47,
            "Sales Representative"
        ],
        [
            62,
            "Freya",
            "Gomez",
            "freya.gomez@example.com",
            "011.44.1345.529268",
            "03-NOV-16",
            47,
            "Sales Representative"
        ],
        [
            80,
            "Elizabeth",
            "Dixon",
            "elizabeth.dixon@example.com",
            "011.44.1644.429262",
            "04-JAN-16",
            50,
            "Sales Representative"
        ],
        [
            64,
            "Florence",
            "Freeman",
            "florence.freeman@example.com",
            "011.44.1346.229268",
            "19-MAR-16",
            48,
            "Sales Representative"
        ],
        [
            65,
            "Alice",
            "Wells",
            "alice.wells@example.com",
            "011.44.1346.329268",
            "24-JAN-16",
            48,
            "Sales Representative"
        ],
        [
            66,
            "Charlotte",
            "Webb",
            "charlotte.webb@example.com",
            "011.44.1346.529268",
            "23-FEB-16",
            48,
            "Sales Representative"
        ],
        [
            67,
            "Sienna",
            "Simpson",
            "sienna.simpson@example.com",
            "011.44.1346.629268",
            "24-MAR-16",
            48,
            "Sales Representative"
        ],
        [
            68,
            "Matilda",
            "Stevens",
            "matilda.stevens@example.com",
            "011.44.1346.729268",
            "21-APR-16",
            48,
            "Sales Representative"
        ],
        [
            69,
            "Evelyn",
            "Tucker",
            "evelyn.tucker@example.com",
            "011.44.1343.929268",
            "11-MAR-16",
            49,
            "Sales Representative"
        ],
        [
            70,
            "Eva",
            "Porter",
            "eva.porter@example.com",
            "011.44.1343.829268",
            "23-MAR-16",
            49,
            "Sales Representative"
        ],
        [
            71,
            "Millie",
            "Hunter",
            "millie.hunter@example.com",
            "011.44.1343.729268",
            "24-JAN-16",
            49,
            "Sales Representative"
        ],
        [
            72,
            "Sofia",
            "Hicks",
            "sofia.hicks@example.com",
            "011.44.1343.629268",
            "23-FEB-16",
            49,
            "Sales Representative"
        ],
        [
            73,
            "Lucy",
            "Crawford",
            "lucy.crawford@example.com",
            "011.44.1343.529268",
            "24-MAR-16",
            49,
            "Sales Representative"
        ],
        [
            74,
            "Elsie",
            "Henry",
            "elsie.henry@example.com",
            "011.44.1343.329268",
            "21-APR-16",
            49,
            "Sales Representative"
        ],
        [
            75,
            "Imogen",
            "Boyd",
            "imogen.boyd@example.com",
            "011.44.1644.429267",
            "11-MAY-16",
            50,
            "Sales Representative"
        ],
        [
            76,
            "Layla",
            "Mason",
            "layla.mason@example.com",
            "011.44.1644.429266",
            "19-MAR-16",
            50,
            "Sales Representative"
        ],
        [
            77,
            "Rosie",
            "Morales",
            "rosie.morales@example.com",
            "011.44.1644.429265",
            "24-MAR-16",
            50,
            "Sales Representative"
        ],
        [
            78,
            "Maya",
            "Kennedy",
            "maya.kennedy@example.com",
            "011.44.1644.429264",
            "23-APR-16",
            50,
            "Sales Representative"
        ],
        [
            79,
            "Esme",
            "Warren",
            "esme.warren@example.com",
            "011.44.1644.429263",
            "24-MAY-16",
            50,
            "Sales Representative"
        ],
        [
            55,
            "Grace",
            "Ellis",
            "grace.ellis@example.com",
            "011.44.1344.987668",
            "09-DEC-16",
            46,
            "Sales Representative"
        ],
        [
            54,
            "Lily",
            "Fisher",
            "lily.fisher@example.com",
            "011.44.1344.498718",
            "30-MAR-16",
            46,
            "Sales Representative"
        ],
        [
            53,
            "Sophia",
            "Reynolds",
            "sophia.reynolds@example.com",
            "011.44.1344.478968",
            "20-AUG-16",
            46,
            "Sales Representative"
        ],
        [
            52,
            "Sophie",
            "Owens",
            "sophie.owens@example.com",
            "011.44.1344.345268",
            "24-MAR-16",
            46,
            "Sales Representative"
        ],
        [
            51,
            "Poppy",
            "Jordan",
            "poppy.jordan@example.com",
            "011.44.1344.129268",
            "30-JAN-16",
            46,
            "Sales Representative"
        ],
        [
            63,
            "Phoebe",
            "Murray",
            "phoebe.murray@example.com",
            "011.44.1346.129268",
            "11-NOV-16",
            48,
            "Sales Representative"
        ],
        [
            85,
            "Holly",
            "Shaw",
            "holly.shaw@example.com",
            "650.509.1876",
            "27-JAN-16",
            22,
            "Shipping Clerk"
        ],
        [
            86,
            "Emilia",
            "Holmes",
            "emilia.holmes@example.com",
            "650.509.2876",
            "20-FEB-16",
            22,
            "Shipping Clerk"
        ],
        [
            87,
            "Molly",
            "Rice",
            "molly.rice@example.com",
            "650.509.3876",
            "24-JUN-16",
            22,
            "Shipping Clerk"
        ],
        [
            88,
            "Ellie",
            "Robertson",
            "ellie.robertson@example.com",
            "650.509.4876",
            "07-FEB-16",
            22,
            "Shipping Clerk"
        ],
        [
            89,
            "Jasmine",
            "Hunt",
            "jasmine.hunt@example.com",
            "650.505.1876",
            "14-JUN-16",
            23,
            "Shipping Clerk"
        ],
        [
            90,
            "Eliza",
            "Black",
            "eliza.black@example.com",
            "650.505.2876",
            "13-AUG-16",
            23,
            "Shipping Clerk"
        ],
        [
            91,
            "Lilly",
            "Daniels",
            "lilly.daniels@example.com",
            "650.505.3876",
            "11-JUL-16",
            23,
            "Shipping Clerk"
        ],
        [
            92,
            "Abigail",
            "Palmer",
            "abigail.palmer@example.com",
            "650.505.4876",
            "19-DEC-16",
            23,
            "Shipping Clerk"
        ],
        [
            93,
            "Georgia",
            "Mills",
            "georgia.mills@example.com",
            "650.501.1876",
            "04-FEB-16",
            24,
            "Shipping Clerk"
        ],
        [
            94,
            "Maisie",
            "Nichols",
            "maisie.nichols@example.com",
            "650.501.2876",
            "03-MAR-16",
            24,
            "Shipping Clerk"
        ],
        [
            95,
            "Eleanor",
            "Grant",
            "eleanor.grant@example.com",
            "650.501.3876",
            "01-JUL-16",
            24,
            "Shipping Clerk"
        ],
        [
            96,
            "Hannah",
            "Knight",
            "hannah.knight@example.com",
            "650.501.4876",
            "17-MAR-16",
            24,
            "Shipping Clerk"
        ],
        [
            97,
            "Harriet",
            "Ferguson",
            "harriet.ferguson@example.com",
            "650.507.9811",
            "24-APR-16",
            25,
            "Shipping Clerk"
        ],
        [
            98,
            "Amber",
            "Rose",
            "amber.rose@example.com",
            "650.507.9822",
            "23-MAY-16",
            25,
            "Shipping Clerk"
        ],
        [
            99,
            "Bella",
            "Stone",
            "bella.stone@example.com",
            "650.507.9833",
            "21-JUN-16",
            25,
            "Shipping Clerk"
        ],
        [
            100,
            "Thea",
            "Hawkins",
            "thea.hawkins@example.com",
            "650.507.9844",
            "13-JAN-16",
            25,
            "Shipping Clerk"
        ],
        [
            81,
            "Lola",
            "Ramos",
            "lola.ramos@example.com",
            "650.507.9876",
            "24-JAN-16",
            21,
            "Shipping Clerk"
        ],
        [
            82,
            "Willow",
            "Reyes",
            "willow.reyes@example.com",
            "650.507.9877",
            "23-FEB-16",
            21,
            "Shipping Clerk"
        ],
        [
            83,
            "Ivy",
            "Burns",
            "ivy.burns@example.com",
            "650.507.9878",
            "21-JUN-16",
            21,
            "Shipping Clerk"
        ],
        [
            84,
            "Erin",
            "Gordon",
            "erin.gordon@example.com",
            "650.507.9879",
            "03-FEB-16",
            21,
            "Shipping Clerk"
        ],
        [
            33,
            "Reggie",
            "Simmons",
            "reggie.simmons@example.com",
            "650.124.8234",
            "10-APR-16",
            22,
            "Stock Clerk"
        ],
        [
            44,
            "Emily",
            "Hamilton",
            "emily.hamilton@example.com",
            "650.121.2874",
            "15-MAR-16",
            25,
            "Stock Clerk"
        ],
        [
            43,
            "Olivia",
            "Ford",
            "olivia.ford@example.com",
            "650.121.2994",
            "29-JAN-16",
            25,
            "Stock Clerk"
        ],
        [
            42,
            "Amelia",
            "Myers",
            "amelia.myers@example.com",
            "650.121.8009",
            "17-OCT-16",
            25,
            "Stock Clerk"
        ],
        [
            41,
            "Connor",
            "Hayes",
            "connor.hayes@example.com",
            "650.121.1834",
            "06-APR-16",
            24,
            "Stock Clerk"
        ],
        [
            26,
            "Leon",
            "Powell",
            "leon.powell@example.com",
            "650.124.1214",
            "16-JUL-16",
            21,
            "Stock Clerk"
        ],
        [
            27,
            "Kai",
            "Long",
            "kai.long@example.com",
            "650.124.1224",
            "28-SEP-16",
            21,
            "Stock Clerk"
        ],
        [
            28,
            "Aaron",
            "Patterson",
            "aaron.patterson@example.com",
            "650.124.1334",
            "14-JAN-16",
            21,
            "Stock Clerk"
        ],
        [
            29,
            "Roman",
            "Hughes",
            "roman.hughes@example.com",
            "650.124.1434",
            "08-MAR-16",
            21,
            "Stock Clerk"
        ],
        [
            30,
            "Austin",
            "Flores",
            "austin.flores@example.com",
            "650.124.5234",
            "20-AUG-16",
            22,
            "Stock Clerk"
        ],
        [
            31,
            "Ellis",
            "Washington",
            "ellis.washington@example.com",
            "650.124.6234",
            "30-OCT-16",
            22,
            "Stock Clerk"
        ],
        [
            32,
            "Jamie",
            "Butler",
            "jamie.butler@example.com",
            "650.124.7234",
            "16-FEB-16",
            22,
            "Stock Clerk"
        ],
        [
            45,
            "Isla",
            "Graham",
            "isla.graham@example.com",
            "650.121.2004",
            "09-JUL-16",
            25,
            "Stock Clerk"
        ],
        [
            34,
            "Seth",
            "Foster",
            "seth.foster@example.com",
            "650.127.1934",
            "14-JUN-16",
            23,
            "Stock Clerk"
        ],
        [
            35,
            "Carter",
            "Gonzales",
            "carter.gonzales@example.com",
            "650.127.1834",
            "26-AUG-16",
            23,
            "Stock Clerk"
        ],
        [
            36,
            "Felix",
            "Bryant",
            "felix.bryant@example.com",
            "650.127.1734",
            "12-DEC-16",
            23,
            "Stock Clerk"
        ],
        [
            37,
            "Ibrahim",
            "Alexander",
            "ibrahim.alexander@example.com",
            "650.127.1634",
            "06-FEB-16",
            23,
            "Stock Clerk"
        ],
        [
            38,
            "Sonny",
            "Russell",
            "sonny.russell@example.com",
            "650.121.1234",
            "14-JUL-16",
            24,
            "Stock Clerk"
        ],
        [
            39,
            "Kian",
            "Griffin",
            "kian.griffin@example.com",
            "650.121.2034",
            "26-OCT-16",
            24,
            "Stock Clerk"
        ],
        [
            40,
            "Caleb",
            "Diaz",
            "caleb.diaz@example.com",
            "650.121.2019",
            "12-FEB-16",
            24,
            "Stock Clerk"
        ],
        [
            25,
            "Ronnie",
            "Perry",
            "ronnie.perry@example.com",
            "650.123.5234",
            "16-NOV-16",
            1,
            "Stock Manager"
        ],
        [
            24,
            "Callum",
            "Jenkins",
            "callum.jenkins@example.com",
            "650.123.4234",
            "10-OCT-16",
            1,
            "Stock Manager"
        ],
        [
            23,
            "Jackson",
            "Coleman",
            "jackson.coleman@example.com",
            "650.123.3234",
            "01-MAY-16",
            1,
            "Stock Manager"
        ],
        [
            22,
            "Liam",
            "Henderson",
            "liam.henderson@example.com",
            "650.123.2234",
            "10-APR-16",
            1,
            "Stock Manager"
        ],
        [
            21,
            "Jaxon",
            "Ross",
            "jaxon.ross@example.com",
            "650.123.1234",
            "18-JUL-16",
            1,
            "Stock Manager"
        ]
    ]



});
