let menuObject = {
    etel: {
        reggeli: [`Reggelik`,
            { nev: `Ham & Eggs (3 tojásból) (03,06)`, ar: 680 },
            { nev: `Kolbászos Rántotta (3 tojásból) (03)`, ar: 680 },
            { nev: `Sonkás Rántotta (3 tojásból) (03,06)`, ar: 680 },
            { nev: `Gombás Rántotta (3 tojásból) (03)`, ar: 680 },
            { nev: `Sajtos Rántotta (3 tojásból) (03,07)`, ar: 680 },
            { nev: `Kolbászos Omlett (3 tojásból) (03,06)`, ar: 720 },
            { nev: `Sonkás Omlett (3 tojásból) (03,06,07)`, ar: 720 },
            { nev: `Gombás Omlett (3 tojásból) (03,07)`, ar: 720 },
            { nev: `Sajtos Omlett (3 tojásból) (03,07)`, ar: 720 },
            { nev: `Bundás kenyér (03)`, ar: 260, egyseg: `db` },
            { nev: `Tükörtojás (03)`, ar: 260, egyseg: `db` },
            { nev: `Sült/Főtt virsli (06)`, ar: 880, egyseg: `pár` },
            { nev: `Választható feltét: hagyma, sajt, kolbász, szalonna, gomba, sonka`, ar: 220 }
        ],
        eloetel: [`Előételek`,
            { nev: `Füstölt padlizsánkrém pirítóssal, friss zöldségekkel (01,07)`, ar: 1480 },
            { nev: `Roston sült mozzarella, paradicsomkarikák, olívás dresszing (07)`, ar: 1280 },
            { nev: `Zöldfűszeres kacsamáj terrine, füstölt kacsamell szeletekkel, epres madársaláta ágyon 07)`, ar: 3180 },
            { nev: `Tatár beefsteak  (01,03,07,10)`, ar: 3480 }
        ],
        leves: [`Levesek`,
            { nev: `Kókusztejes gyümölcsleves fagyival, tejszínhabbal (01,07)`, ar: 980 },
            { nev: `Tárkonyos raguleves (01,07)`, ar: 980 },
            { nev: `Újházi tyúkhúsleves (01,03,09)`, ar: 980 },
            { nev: `Sajtkrémleves (07,01)`, ar: 980 }
        ],
        foetel: {
            kat: `Főételek`,
            vega: [`Vegetáriánus ételek`,
                { nev: `Roston sült fetasajt grillzöldségekkel (07)`, ar: 1680 },
                { nev: `Rántott sajt, jázmin rizzsel, tartárral (01,03,07,10)`, ar: 1880 },
                { nev: `Rántott gomba csónakburgonyával, tartárral (01,03,07,10)`, ar: 1880 },
                { nev: `Rántott karfiol hasábburgonyával, tartárral (01,03,07,10)`, ar: 1880 },
                { nev: `Rántott camambert krokettel, áfonya lekvárral (01,03,07)`, ar: 1980 }
            ],
            marha: [`Marhahúsból, bárányhúsból készült ételek`,
                { nev: `Bélszín steak rózsabors kéregben, héjában sült édesburgonya fokhagymás tejföllel, grillezett pfefferoni paprikával (07)`, ar: 4880 },
                { nev: `Rib-eye steak Lyoni hagymával, mogyoróburgonyával (01)`, ar: 4480 },
                { nev: `Lassan sült rozmaringos báránycsülök, édesburgonya graten, pirított baconos zöldbab`, ar: 4980 }
            ],
            sertes: [`Sertéshúsból készült ételek`,
                { nev: `Rántott sertésborda, burgonyapürével (01,03,07)`, ar: 1980 },
                { nev: `Kapros juhtúróval töltött sertésszelet, medvehagymás tört burgonyával (01,03,07)`, ar: 2280 },
                { nev: `Szántódi ropogós, sültburgonyával (01,03,07)`, ar: 2280 },
                { nev: `Brassói aprópecsenye`, ar: 1980 },
                { nev: `Cigánypecsenye, sült burgonyával (01)`, ar: 2280 },
                { nev: `Füstölt mozzarella sajttal-szarvasi kolbásszal töltött sertéskaraj, hasábburgonyával (01,03,07)`, ar: 2280 },
                { nev: `Milánói sertésborda (01,03,07)`, ar: 2280 },
                { nev: `Sous-vide sertés csülök zöldbabos, szalonnás burgonyával (01)`, ar: 4480 }
            ],
            szarnyas: [`Szárnyashúsból készült ételek`,
                { nev: `Rántott csirkemell, párolt jázminrizzsel (01,03)`, ar: 1980 },
                { nev: `Mandulás bundába töltött csirkemell kacsamájjal, pácolt aszalt szilvával, burgonya krokettel (01,03,07)`, ar: 2480 },
                { nev: `Konfitált kacsacomb, burgonyapürével, sült almával (01,07)`, ar: 2680 },
                { nev: `Caprese csirkemell szarvasi mozzarellával, párolt jázminrizzsel (07)`, ar: 2280 },
                { nev: `Grillezett jércemell steak, céklás madársalátával, sült répa-paszternák hasábbal`, ar: 2480 },
                { nev: `Baconben sült csirke darabok, Cheddarsajt öntetes friss zöldségkavalkáddal, burgonya chipsszel (01,07)`, ar: 2280 }
            ],
            gyermek: [`Gyermek menük`,
                { nev: `Rántott harcsa sültburgonyával (01,03,04)`, ar: 1480 },
                { nev: `Tejfölös-sajtos spagetti (01,07,09)`, ar: 1280 },
                { nev: `Rántott szelet sült burgonyával (01,03)`, ar: 1280 },
                { nev: `Rántott sajt sült burgonyával, tartárral (01,03,07,10)`, ar: 1280 }
            ],
            hal: [`Halból készült ételek`,
                { nev: `Fish and Chips Afrikai harcsa filé, burgonya chips, andalúz mártogatós (01,07,04)`, ar: 2980 },
                { nev: `Roston sült lazac steak fokhagymás, parajos tejszínes gnocchival (01,07,04)`, ar: 2980 },
                { nev: `Fekete szezámmag palástban pirított nílusi sügérfilé, fokhagymás kék kagyló raguval, párolt jázminrizzsel  (02,04,07,12)`, ar: 2980 }
            ],
            teszta: [`Tészták`,
                { nev: `Carbonara spagetti (01,03,07)`, ar: 1880 },
                { nev: `Bolognai spagetti (01,03,07)`, ar: 1880 },
                { nev: `Tejszínes-gombás csirkemell, főtt tésztával (01,03,07)`, ar: 2280 },
                { nev: `Kézműves ravioli ratatouille-al töltve, vargánya krémmel, reszelt sajttal, rukkoltával (Vegán)`, ar: 1980 }
            ],
            salata: [`Saláták`,
                { nev: `Séf saláta`, ar: 3480, info: `friss kevert saláta, fokhagymás öntet, tépett mozzarella, füstölt kacsamell szeletek, kenyérkocka` },
                { nev: `Ceasar saláta (01,03,04,07,10)`, ar: 1880, info: `fokhagymás zsemlekocka, grillezett csirkemell csíkok, jégsaláta, parmezán, Caesar szósz, póréhagyma` },
                { nev: `Görög saláta (07)`, ar: 1080 }
            ]
        },
        fatal: [`Fatálas ételeink`,
            { nev: `Mokka tál (2 személyre) (01,03,07)`, ar: 5280, info: `Szántódi ropogós, Cigánypecsenye, Zöldfűszeres csirkemell, Rántott sajt, Rántott gomba, Rántott karfiol, Csónakburgonya, Idénysaláta` },
            { nev: `Mokka tál (4 személyre) (01,03,07)`, ar: 9880, info: `Szántódi ropogós, Cigánypecsenye, Zöldfűszeres csirkemell, Rántott saajt, Rántott gomba, Rántott karfiol, Párolt rizs, Csónak burgonya, Idény saláta` },
            { nev: `Toma tál (4 személyre) (01,03,07)`, ar: 9880, info: `Szántódi ropogós, Cigánypecsenye, Mozzarellás csirke, Sertés flekken kolozsvári szalonnával, Holstein szelet, Csónak burgonya, Párolt lilakáposzta, Rizi-bizi, Idény saláta` }
        ],
        desszert: [`Desszertek`,
            { nev: `Forró szilvás pite, mézes-fahéjas öntettel, vanília fagylalttal (01,03,07)`, ar: 1080 },
            { nev: `Dupla csokoládés muffin, szamóca öntettel, gyümölcs fagylalttal (01,03,07)`, ar: 1080 }
        ],
        koret: [`Köretek`,
            { nev: `Sült burgonya`, ar: 480 },
            { nev: `Rizs`, ar: 480 },
            { nev: `Medvehagymás tört burgonya (07)`, ar: 480 },
            { nev: `Csónakburgonya`, ar: 680 },
            { nev: `Rizi-bizi`, ar: 480 },
            { nev: `Burgonyapüré`, ar: 480 },
            { nev: `Friss saláta`, ar: 680 },
            { nev: `Grillzöldség`, ar: 680 }
        ],
        savanyu: [`Savanyúságok`,
            { nev: `Uborkasaláta`, ar: 380 },
            { nev: `Káposztasaláta`, ar: 380 },
            { nev: `Paradicsomsaláta`, ar: 380 },
            { nev: `Csemege uborka`, ar: 380 },
            { nev: `Pfefferoni paprika`, ar: 380 }
        ],
        martas: [`Mártások`,
            { nev: `Tartármártás (01,03,07,10)`, ar: 280 },
            { nev: `Ketchup`, ar: 120 },
            { nev: `Mustár (10)`, ar: 120 },
            { nev: `Majonéz (03,10)`, ar: 120 },
            { nev: `Tejföl (07)`, ar: 120 }
        ],
        gyors: {
            kat: `Gyorsételek`,
            hotdog: [`Hot-Dog`,
                { nev: `Sima`, ar: 480 },
                { nev: `Sajtos`, ar: 580 },
                { nev: `Sajtos-Hagymás`, ar: 640 }
            ],
            hamburger: [`Hamburgerek`,
                { nev: `Sima Hamburger`, ar: 780, info: `hamburger szósz, saláta, paradicsom, uborka, marhahúspogácsa` },
                { nev: `Vegetáriánus Hamburger`, ar: 780, info: `hamburger szósz, paradicsom, uborka, sajt` },
                { nev: `Sajtos Hamburger`, ar: 880, info: `hamburger szósz, saláta, paradicsom, uborka, sajt, marhahúspogácsa` },
                { nev: `Magyaros Hamburger`, ar: 980, info: `hamburger szósz, saláta, paradicsom, uborka, kolbász, lilahagyma, sajt, marhahúspogácsa` },
                { nev: `Gombás Hamburger`, ar: 980, info: `hamburger szósz, saláta, paradicsom, uborka, gomba, sajt, marhahúspogácsa` },
                { nev: `Sonkás Hamburger`, ar: 980, info: `hamburger szósz, saláta, paradicsom, uborka, sonka, sajt, marhahúspogácsa` },
                { nev: `Rántott Sajtos Hamburger`, ar: 980, info: `hamburger szósz, saláta, paradicsom, uborka, rántott sajt` },
                { nev: `Csibe Hamburger`, ar: 980, info: `hamburger szósz, paradicsom, uborka, sajt, roston csirkemell` },
                { nev: `Dupla Húsos Hamburger`, ar: 1080, info: `hamburger szósz, paradicsom, uborka, sajt, dupla marhahúspogácsa` },
                { nev: `Full Hamburger`, ar: 1380, info: `hamburger szósz, paradicsom, uborka, sajt, gomba, lilahagyma, sonka, kolbász, marhahúspogácsa` },
                { nev: `Kézműves MOKKA Burger fűszeres steak burgonyával, panírozott hagymakarikával sülthagymás, majonézes mártogatóval`, ar: 1880, info: `jégsaláta, paradicsom, csemegeuborka, lilahagyma, bacon, cheddar sajt, 100% marhahúspogácsa` },
                { nev: `Kézműves “mindenmentes” Mokka Burger`, ar: 1980, info: `Gluténmentes hamburger zsemle, vegán húspogácsa, friss zöldségek, fűszeres paradicsom öntet, növényi sajt` }
            ],
            szendvics: [`Szendvicsek`,
                { nev: `Rántott sertéshúsos szendvics`, ar: 680 },
                { nev: `Rántott csirkemelles szendvics`, ar: 680 },
                { nev: `Rántott sajtos szendvics`, ar: 680 },
                { nev: `Kolbászos szendvics`, ar: 680 },
                { nev: `Sonkás szednvics`, ar: 680 }
            ],
            gyros: [`Gyros`,
                { nev: `Tál`, ar: 1880, info: `Fűszeres csirkemell csíkok, friss saláta joghurtos öntettel, sült burgonyával` }
            ]
        }
    },
    ital: {
        kave: [ `Kávék`,
            { nev: `Ristretto`, ar: 320},
            { nev: `Espresso`, ar: 320},
            { nev: `Espresso macchiato`, ar: 380},
            { nev: `Hosszú kávé`, ar: 320},
            { nev: `Cappuccino`, ar: 420},
            { nev: `Ízes Cappuccino`, ar: 520, info: `Csokis süti, Makadám dió, Mézeskalács, Madártej, Pörkölt mogyoró, Cukormentes vanília, Cukormentes mogyoró`},
            { nev: `Latte Macchiato`, ar: 520},
            { nev: `Ízes Latte Macchiato`, ar: 620, info: `Csokis süti, Makadám dió, Mézeskalács, Madártej, Pörkölt mogyoró, Cukormentes vanília, Cukormentes mogyoró`},
            { nev: `Cafe Latte`, ar: 520},
            { nev: `Mokka Melange`, ar: 620},
            { nev: `Jeges kávé, Jeges csokoládé`, ar: 720},
            { nev: `Choco latte`, ar: 520},
            { nev: `Koffeinmentes kávé`, ar: `+100`}
        ],
        kavekieg: [ `Kávé kiegészítők`,
            {nev: `Kávétejszín`, ar: 40},
            {nev: `Méz`, ar: 80},
            {nev: `Tej`, ar: 80, egyseg: `dl`},
            {nev: `Laktózmentes tej`, ar: 100},
            {nev: `Tejszínhab`, ar: 100}
        ],
        fcsoki: [ `Forró csokoládék`,
            { nev: `Klasszikus csoki`, ar: 460},
            { nev: `Fehér csoki`, ar: 460},
            { nev: `Vadcseresznyés csoki`, ar: 460},
            { nev: `Narancsos csoki`, ar: 460},
            { nev: `Rumos Diós csoki`, ar: 460},
            { nev: `Fahéjas csoki`, ar: 460},
            { nev: `Light karamellás csoki`, ar: 460},
            { nev: `Light mogyorós csoki`, ar: 460},
            { nev: `Light Vaníliás csoki`, ar: 460},
            { nev: `Forró karamell`, ar: 460}
        ],
        dteak: [ `Dilmah Teák`,
            { nev: `Earl Grey / fekete tea`, ar: 380},
            { nev: `English Breakfast, Ceylon / fekete tea`, ar: 380},
            { nev: `Pure Green / zöld tea`, ar: 380},
            { nev: `Jasmine Petals / zöld tea`, ar: 380},
            { nev: `Moroccan Mint / zöld tea`, ar: 380},
            { nev: `Raspberry / málnás Ceylon fekete tea`, ar: 380},
            { nev: `Peach / őszibarackos Ceylon fekete tea`, ar: 380},
            { nev: `Apple / almás Ceylon fekete tea`, ar: 380},
            { nev: `Organic Rooibos tea`, ar: 380},
            { nev: `Lemon / citromos tea `, ar: 380},
            { nev: `Peppermint Leaves borsmenta tea`, ar: 380},
            { nev: `Spicy Berry / gyümölcstea keverék`, ar: 380},
            { nev: `Rosehip and Hibiscus teakeverék`, ar: 380},
            { nev: `Strawberry / epres Ceylon fekete tea`, ar: 380},
            { nev: `Fekete ribizlis Ceylon fekete tea`, ar: 380},
            { nev: `Citrom and Lime-os Ceylon fekete tea`, ar: 380}
        ],
        soft: [ `Üdítők`,
            { nev: `Pepsi Cola`, ar: 320, egyseg: `0,25l`},
            { nev: `Pepsi Light`, ar: 320, egyseg: `0,25l`},
            { nev: `7up`, ar: 320, egyseg: `0,25l`},
            { nev: `Schweppes`, ar: 320, egyseg: `0,25l`, info: `narancs, tonic, citrus mix`},
            { nev: `Canada Dry`, ar: 320, egyseg: `0,25l`},
            { nev: `Lipton Ice Tea`, ar: 320, egyseg: `0,25l`, info: `citrom, barack, zöld tea`},
            { nev: `Tropicana`, ar: 380, egyseg: `0,25l`, info: `100% ananász, 100% narancs`},
            { nev: `Toma`, ar: 340, egyseg: `0,25l`, info: `narancs, eper, alma, körte, őszibarack`}
        ],
        cider: [ `Ciderek`,
            { nev: `Sommersby Alma (Apple)`, ar: 480, egyseg: `0,33l`},
            { nev: `Sommersby Körte (Pear)`, ar: 480, egyseg: `0,33l`}
        ],
        energy: [ `Energiaitalok`,
            { nev: `Red Bull`, ar: 680, egyseg: `0,25l`},
            { nev: `Bomba (original)`, ar: 320, egyseg: `0,25l`}
        ],
        konyak: [ `Konyakok`,
            { nev: `Metaxa xxxxx`, ar: 480, ar2: 960, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Hennessy`, ar: 980, ar2: 196, egyseg1: `2cl`, egyseg2: `4cl`}
        ],
        keseru: [ `Keserűlikőrök`,
            { nev: `Jagermeister 35%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Unicum 40%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Unicum Szilva 35%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`}
        ],
        palinka: [ `Pálinkák`,
            { nev: `Árpád Bársonybirs 40%`, ar: 660, ar2: 1320, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Faeper Pálinka 40%`, ar: 660, ar2: 1320, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Kajszibarack Pálinka 40%`, ar: 660, ar2: 1320, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Erdei szeder Pálinka 40%`, ar: 660, ar2: 1320, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Champion Lepotica Szilva Pálinka 40%`, ar: 660, ar2: 1320, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Novum Vilmos Eszencia 49,7%`, ar: 2960, ar2: 5920, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Békési Disznótoros Barack Pálinka 50%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Békési Disznótoros Szilva Pálinka 50%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Békési Disznótoros Meggy Pálinka 50% `, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Békési Disznótoros Birs Pálinka 50%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Vilmos Körte Ágyas Pálinka 37,5%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`}
        ],
        rum: [ `Rumok`,
            { nev: `Bacardi Superior 37,5%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Captain Morgan 35%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Portorico 60%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Stroh 80%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        vodka: [ `Vodkák`,
            { nev: `Finlandia 40%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Szikra 40%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Vilmoskörte 37,5 %`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Stolichnaya 40%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Stolichnaya Elit`, ar: 980, ar2: 1960, egyseg1: `2cl`, egyseg2: `4cl`}
        ],
        gin: [ `Ginek`,
            { nev: `Gordon’s 37,5%`, ar: 380, ar2: 760, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Marine 37,5%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Copper Head 40%`, ar: 980, ar2: 1960, egyseg1: `2cl`, egyseg2: `4cl`}
        ],
        tequila: [ `Tequila`,
            { nev: `Sierra Silver 38%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Sierra Gold 38%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `El Jimador Blanco 40%`, ar: 380, ar2: 760, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `El Jimador Reposado 40%`, ar: 380, ar2: 760, egyseg1: `2cl`, egyseg2: `4cl`}
        ],
        whiskey: [ `Whiskey`,
            { nev: `Baileys (Irish cream) 17%`, ar: 380, ar2: 760, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Ballentines (Scotch) 40%`, ar: 380, ar2: 760, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Chivas Regal (Scotch) 40%`, ar: 660, ar2: 1320, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Jack Daniel’s (Tennessee) 40%`, ar: 480, ar2: 960, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Jameson (Irish) 40%`, ar: 480, ar2: 960, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Jim Beam (Bourbon) 40%`, ar: 380, ar2: 760, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Johnnie Walker Red Label (Scotch) 40%`, ar: 480, ar2: 960, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Johnnie Walker Black Label (Scotch) 40%`, ar: 580, ar2: 1160, egyseg1: `2cl`, egyseg2: `4cl`}
        ],
        vermut: [ `Vermutok`,
            { nev: `Martini Bianco`, ar: 680},
            { nev: `Martini Dry`, ar: 680},
            { nev: `Martini Rosso`, ar: 680},
            { nev: `Aperol`, ar: 980},
            { nev: `Campari`, ar: 980}
        ],
        feherb: [ `Kimért Fehér Borok`,
            { nev: `Irsai Olivér (száraz)`, ar: 380, egyseg: `dl`},
            { nev: `Tokaji Hárslevelű (édes)`, ar: 480, egyseg: `dl`},
            { nev: `Tokaji Furmint (félédes)`, ar: 480, egyseg: `dl`}
        ],
        roseb: [ `Kimért Rosé Borok`,
            { nev: `Hilltop rosé (édes)`, ar: 380, egyseg: `dl`},
            { nev: `Lelovits Tamás villányi rosé (száraz)`, ar: 380, egyseg: `dl`},
            { nev: `Juhász rosé (száraz)`, ar: 380, egyseg: `dl`},
            { nev: `Szekszárdi Bodri rosé (száraz)`, ar: 380, egyseg: `dl`},
            { nev: `György-Villa Syrah rosé (száraz)`, ar: 380, egyseg: `dl`},
            { nev: `Vylyan Villányi kakas rosé`, ar: 380, egyseg: `dl`},
        ],
        vorosb: [ `Kimért Vörös Borok`,
            { nev: `Gere Attila Villányi Portugieser (száraz)`, ar: 480, egyseg: `dl`},
            { nev: `Sike Tamás Merlot (édes)`, ar: 480, egyseg: `dl`},
            { nev: `Sike Tamás Medalion (félédes)`, ar: 480, egyseg: `dl`}
        ],
        likor: [ `Likőrök`,
            { nev: `Berentzen`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`, info: `Eper 15%, Alma 18%, Körte 15%, Karamell 17%`},
            { nev: `Tatratea (42%, 52%, 62%, 72%)`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`}
        ],
        pezsgo: [ `Pezsgők`,
            { nev: `Asti Cinzano (Sweet)`, ar: 4800},
            { nev: `Dom Peringon (Brut)`, ar: 68000},
            { nev: `G.H.Mumm (Brut)`, ar: 15000},
            { nev: `Hungaria (Extra Dry)`, ar: 3400},
            { nev: `Hungaria Rosé (Demi Sec)`, ar: 3400},
            { nev: `Laurent-Perrier (Brut)`, ar: 18000},
            { nev: `Moet and Chandon (Brut)`, ar: 21600},
            { nev: `Törley Alkoholmentes (Doux)`, ar: 2400},
            { nev: `Törley Charmant (Doux)`, ar: 2400},
            { nev: `Törley Gála (Sec)`, ar: 2400},
            { nev: `Törley Orfeum Rosé (Sec)`, ar: 2400},
        ],
        sor: [ `Csapolt sörök`,
            { nev: `Erdinger`, ar: 580, ar2: 880},
            { nev: `Hoegarden (Szűretlen búzasör Málnás)`, ar: 440, ar2: 880},
            { nev: `Guiness (Ír fekete)`, ar: 480, ar2: 960},
            { nev: `Guiness (Hop house lager) világos`, ar: 480, ar2: 960},
            { nev: `Lindemans (Meggyes)`, ar: 480, ar2: 960},
            { nev: `DAB`, ar: 380, ar2: 580},],
        usor: [ `Üveges sörök`,
            { nev: `Borsodi`, ar: 360, egyseg: `0,5l`},
            { nev: `Estrella`, ar: 580, egyseg: `0,33l`},
            { nev: `Radeberger`, ar: 580, egyseg: `0,33l`},
            { nev: `Staropramen`, ar: 400, egyseg: ` 0,5l`},
            { nev: `Stella Artois`, ar: 380, egyseg: `0,33l`},
            { nev: `Stella Artois`, ar: 420, egyseg: ` 0,5l`},
            { nev: `Staropramen Dark Beer`, ar: 480, egyseg: ` 0,5l`},
        ],
        asor: [ `Alkoholmentes sörök`,
            { nev: `Stella Artois`, ar: 480, egyseg: ` 0,5l`},
            { nev: `Bitburger Drive`, ar: 580, egyseg: `0,33l`},
            { nev: `Clausthaler Lemon`, ar: 580, egyseg: `0,33l`},
        ],
        limon: [ `Limonádék`,
            { nev: `Házi limonádé`, ar: 580, info: `eper, málna, maracuja, mangó, cseresznye, erdei gyümölcs, zöld alma, görögdinnye, kiwi, áfonya`}
        ],
        viz: [ `Ásványvizek`,
            { nev: `Kristályvíz (Szénsavmentes, Szénsavas)`, ar: 260, egyseg: `0,3l`},
            { nev: `Szóda`, ar: 20, egyseg: `dl`},
        ],
    }
}
function load(par) {
    //$(`.menu`).slideToggle();
    $(`.menu`).text(``);
    for (let i in menuObject[par]) {
        if (Array.isArray(menuObject[par][i])) {
            for (let j in menuObject[par][i]) {
                if (j == 0) {
                    $(".section32 .menu").append(`<div id="${i}ID"><h3>${menuObject[par][i][j]}</h3></div>`)
                    shot(`${i}`)
                } else {
                    if (j != 0 && menuObject[par][i][j].hasOwnProperty("ar2")) {
                        $(`.section32 #${i}ID`).append(`<div class="row"><div id="termek${i}${j}">${menuObject[par][i][j].nev}</div><div class="egysegar" id="ar${i}${j}"><div class="rb1">${menuObject[par][i][j].ar} Ft</div></div></div>`)
                    } else if (j != 0 && menuObject[par][i][j].hasOwnProperty("egyseg")) {
                        $(`.section32 #${i}ID`).append(`<div class="row"><div id="termek${i}${j}">${menuObject[par][i][j].nev}</div><div class="egysegar" id="ar${i}${j}"><div class="rb1">${menuObject[par][i][j].ar} Ft / ${menuObject[par][i][j].egyseg}</div></div></div>`)
                    } else {
                        $(`.section32 #${i}ID`).append(`<div class="row"><div id="termek${i}${j}">${menuObject[par][i][j].nev}</div><div class="egysegar" id="ar${i}${j}"><div class="rb1">${menuObject[par][i][j].ar} Ft</div></div></div>`)
                    }
                }
                if (j != 0 && menuObject[par][i][j].hasOwnProperty("ar2")) {
                    $(`.section32 #ar${i}${j}`).append(`<div class="rb2">${menuObject[par][i][j].ar2} Ft</div>`)
                }
                if (j != 0 && menuObject[par][i][j].hasOwnProperty("info")) {
                    $(`.section32 #${i}ID`).append(`<div class="row"><div class="info">/${menuObject[par][i][j].info}/</div></div>`)
                }
            }
        } else {
            $(".menu").append(`<div id="${i}ID"><h3>${menuObject[par][i].kat}</h3></div>`)
            for (let j in menuObject[par][i]) {
                if (j == "kat") { } else {
                    for (let k in menuObject[par][i][j]) {
                        if (k == 0) {
                            $(`.section32 #${i}ID`).append(`<h5>${menuObject[par][i][j][k]}</h5>`)
                        } else {
                            $(`.section32 #${i}ID`).append(`<div class="row"><div>${menuObject[par][i][j][k].nev}</div>${menuObject[par][i][j][k].ar} Ft</div>`)
                        }
                        if (j != 0 && menuObject[par][i][j][k].hasOwnProperty("ar2")) {
                            $(".section32 .row:nth-last-child(1)").append(`<div class="rb2"> ${menuObject[par][i][j][k].ar2} Ft</div>`)
                        } else if (j != 0 && menuObject[par][i][j][k].hasOwnProperty("egyseg")) {
                            $(".section32 .row:nth-last-child(1)").append(` / ${menuObject[par][i][j][k].egyseg}`)
                        }
                        if (j != 0 && menuObject[par][i][j][k].hasOwnProperty("info")) {
                            $(`.section32 #${i}ID`).append(`<div class="row"><div class="info">/${menuObject[par][i][j][k].info}/</div></div>`)
                        }
                    }
                }

            }
        }
    }
}
load("etel")

function shot(par) {
    if (par == "konyak" || par == "keseru" || par == "palinka" || par == "rum" || par == "vodka" || par == "gin" || par == "tequila" || par == "whiskey" || par == "likor") {
        $(`.section32 #${par}ID`).append(`<div class="row"><div></div><div class="egysegar"<div class="rb1">2cl<div class="rb2">4cl</div></div></div></div>`)
    } else if (par == "sor") {
        $(`.section32 #${par}ID`).append(`<div class="row"><div></div><div class="egysegar"<div class="rb1">pohár<div class="rb2">korsó</div></div></div></div>`)
    }
}
