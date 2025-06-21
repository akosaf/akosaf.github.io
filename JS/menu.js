let menuObject = {
    etel: {
        reggeli: {
            kat: `Reggelik`,
            reggeli: [``,
                { nev: `Kolbászos Omlett (3 tojásból) (03)`, ar: 1600 },
                { nev: `Sonkás Omlett (3 tojásból) (03,07)`, ar: 1600 },
                { nev: `Sajtos Omlett (3 tojásból) (03,07)`, ar: 1600 },
                { nev: `Gombás Omlett (3 tojásból) (03,07)`, ar: 1600 },
                { nev: `Omlett (3 tojásból) (03,06,07)`, ar: 1400 },
                { nev: `Ham & Eggs (3 tojásból) (03,06)`, ar: 1400 },
                { nev: `Sült/Főtt virsli (06)`, ar: 1400, egyseg: `pár` },
                { nev: `Kolbászos Rántotta (3 tojásból) (03)`, ar: 1400 },
                { nev: `Sonkás Rántotta (3 tojásból) (03,06)`, ar: 1400 },
                { nev: `Gombás Rántotta (3 tojásból) (03)`, ar: 1400 },
                { nev: `Sajtos Rántotta (3 tojásból) (03,07)`, ar: 1400 },
                { nev: `Rántotta (3 tojásból) (03)`, ar: 1200 },
                { nev: `Bundás kenyér (01,03)`, ar: 600, egyseg: `db` },
                { nev: `Tükörtojás (03)`, ar: 400, egyseg: `db` },
                //{ nev: `Választható feltét: hagyma, sajt, kolbász, szalonna, gomba, sonka, bacon`, ar: 220 }
            ],
            feltet: [ `Választható extra`,
                { nev: `Vegyes zöldségtál`, ar: 1000 },
                { nev: `Extra sajt`, ar: 600 },
                { nev: `Extra sonka vagy bacon`, ar: 800 }
            ]
        },
        eloetel: [`Előételek`,
            { nev: `Tatár beefsteak  (01,03,07,10)`, ar: 5000 },
            { nev: `Fűszeres grillezett gomolya sajt friss kevert salátával (07)`, ar: 4000 },
            { nev: `Füstölt padlizsánkrém pirítóssal, friss zöldségekkel (01,07)`, ar: 2800 },
            { nev: `Roston sült mozzarella, grillezett paradicsommal, bazsalikomos pestoval (07)`, ar: 2800 },
            //{ nev: `Grillezett Szarvasi mozzarella, paradicsom karikákkal, olivás öntettel (07)`, ar: 1680 },
            //{ nev: `Zöldfűszeres kacsamáj terrine, füstölt kacsamell szeletekkel, epres madársaláta ágyon (01,07)`, ar: 3280 },
            //{ nev: `Snack sajt válogatás  (01,03,07)`, ar: 2600, info: `Chilis cheddar sajt fekete palástban, jalapeno sajtkrémmel töltve, camembert sajt, mozzarella rudacskák, cayenne paprikás mártogatóssal` },
        ],
        leves: [`Levesek`,
            { nev: `Újhagymakrémleves sajtos cipóban (01,03,07)`, ar: 2000 },
            { nev: `Málnakrémleves vanília fagylalttal (07)`, ar: 2000 },
            { nev: `Újházi tyúkhúsleves (01,03,09)`, ar: 1800 },
            { nev: `Tárkonyos szárnyas raguleves (01,07)`, ar: 1800 },
            //{ nev: `Kókusztejes gyümölcsleves vanília fagylalttal, tejszínhabbal (01,07)`, ar: 1600 },
            //{ nev: `Sajtkrémleves (01,07)`, ar: 1280 }
        ],
        foetel: {
            kat: `Főételek`,
            vega: [`Vegetáriánus/vegán ételek`,
                { nev: `Vegán kézműves mokka burger (11)`, ar: 4400, info: `Gluténmentes hamburger zsemle, vegán húspogácsa, friss zöldségek, növényi sajt, fűszeres vegán majonéz öntet, steak burgonya` },
                { nev: `Rántott camambert burgonya krokettel, áfonya lekvárral (01,03,07)`, ar: 4000 },
                { nev: `Rántott sajt párolt jázminrizzsel, tartármártással (01,03,07,10)`, ar: 3600 },
                { nev: `Vegetáriánus tál (01,03,07,10)`, ar: 3600, info: `Rántott gombafejek, rántott karfiol rózsák, rántott sajt, csónakburgonyával, tartármártással` },

                //{ nev: `Grillezett feta sajt sült zöldségekkel (07)`, ar: 3600 },
                //{ nev: `Vegán ratatouille (Francia lecsó) ravioli vargánya krémmel, vegán sajt ropogóssal, rukkolával`, ar: 3600 },
                //{ nev: `Rántott gomba csónakburgonyával, tartármártással (01,03,07,10)`, ar: 2280 },
                //{ nev: `Rántott karfiol sült burgonyával, tartármártással (01,03,07,10)`, ar: 2280 },
            ],
            szarnyas: [`Szárnyashúsból készült ételek`,
                { nev: `Pirosra sült kacsamell zöldalmás vöröskáposztával, burgonyakrokettel (01,03,07)`, ar: 6400 },
                { nev: `Kacsamell szeletek vargánya gombás gnocchi tésztával (01,03,07)`, ar: 4800 },
                { nev: `Mandulás bundába töltött csirkemell kacsamáj krémmel, pácolt aszalt szilvával, burgonya krokettel (01,03,07,08)`, ar: 4800 },
                { nev: `Grillezett jércemell steak céklás madársalátával, sült répa-paszternák hasábbal`, ar: 4200 },
                { nev: `Baconbe tekert csirkemell falatok cheddar sajtmártással, friss zöldség kavalkáddal, burgonya chipsszel (01,07)`, ar: 4200 },
                { nev: `Paradicsomos-mozzarellás csirkemell párolt jázminrizzsel (07)`, ar: 4000 },
                { nev: `Gyros tál (01,07)`, ar: 4000, info: `Fűszeres csirkemellcsíkok, friss saláta joghurtos öntettel, sült burgonyával, kenyér lepénnyel` },
                { nev: `Tejszínes-gombás csirkemell gnocchi tésztával (01,03,07)`, ar: 3800 },
                { nev: `Rántott csirkemell párolt jázminrizzsel (01,03)`, ar: 3600 },

                //{ nev: `Konfitált kacsacomb burgonyapürével, párolt lilakáposztával (07)`, ar: 4800 },
                //{ nev: `Caprese csirkemell Szarvasi mozzarellával, párolt jázminrizzsel (07)`, ar: 2480 },
            ],
            sertes: [`Sertéshúsból készült ételek`,
                { nev: `Ropogósra sült Sous-vide sertéscsülök (70 dkg) medvehagymás-szalonnás burgonyával`, ar: 6400 },
                { nev: `BBQ oldalas, grillezett kukoricával, hasábburgonyával, sülthagymás majonézzel (01,03,06)`, ar: 5800 },
                { nev: `Konfitált császárhús, lecsós parázsburgonyával`, ar: 4200 },
                { nev: `Kapros juhtúróval töltött sertésszelet, medvehagymás tört burgonyával (01,03,07)`, ar: 4000 },
                { nev: `Cigánypecsenye, sült burgonyával (01)`, ar: 4000 },
                { nev: `Szántódi ropogós sültburgonyával (01,03,07)`, ar: 4000 },
                { nev: `Sajttal és Szarvasi kolbásszal töltött sertéskaraj, sült burgonyával (01,03,07)`, ar: 4000 },
                { nev: `Milánói sertésborda (01,03,07)`, ar: 3800 },
                { nev: `Tejszínes spagetti füstölt sonkával és parmezán sajttal (01,03,07)`, ar: 3600 },
                { nev: `Rántott sertésborda, burgonyapürével (01,03,07)`, ar: 3600 },
                { nev: `Bolognai spagetti (01,03,07)`, ar: 3400 },
                //{ nev: `Brassói szűzpecsenye`, ar: 3800 },
                //{ nev: `Omlós fokhagymás oldalas (40dkg) fűszeres héjas burgonyával, rukkola salátával, BBQ mártogatóssal`, ar: 5600 },
            ],
            marha: [`Marhahúsból és vadhúsból készült ételek`,
                { nev: `Tomahawk steak (100 dkg) rozmaringos vajas burgonyával, demi-glace mártással, sülthagymás majonézzel, grillezett kukoricával (03,07,10)`, ar: 28800 },
                { nev: `T-bone steak (44 dkg) tarkabors mártogatóssal, grillezett kukoricával, hasábburgonyával`, ar: 12800 },
                { nev: `Rib-eye steak (30 dkg) Lyoni hagymával, fűszeres steakburgonyával, demi-glace mártással (01)`, ar: 9800 },
                { nev: `Bélszín steak (20 dkg) rózsabors kéregben, édesburgonya hasábbal, vargánya gombamártással (07-10)`, ar: 9800 },
                //{ nev: `Barna Guinness sörben sült marhapofa (50 dkg), vajon pirított knédlivel, gyöngyhagymával (01,07)`, ar: 6280 },
                //{ nev: `Bélszín steak (20 dkg) rózsabors kéregben, héjában sült édesburgonyával, fokhagymás tejföllel, grillezett pfefferoni paprikával (07)`, ar: 6480 },
                //{ nev: `Rib eye steak (20 dkg) Lyoni hagymával, mogyoróburgonyával (01)`, ar: 5980 },
                //{ nev: `Lassan sült rozmaringos báránycsülök (40 dkg), édesburgonya graten, pirított bacon-ös zöldbabbal (07)`, ar: 6280 }
                //{ nev: `Omlós szarvasragu Fekete-hegy erdei gyümölcseivel, pirított gnocchi tésztával (01,03,07)`, ar: 6800 }
            ],
            hal: [`Halból készült ételek`,
                { nev: `Bőrén sült lazac steak, tejszínes-parajos gnocchival (01,03,04,07)`, ar: 5400 },
                { nev: `"Aglio e olio" spagetti királyrákkal (01,02,03,07)`, ar: 4800 },
                { nev: `Fish & Chips tőkehalfiléből burgonya chipsszel, Andalúz mártogatóssal (01,03,04,07,10)`, ar: 4400 },
                { nev: `"Balatoni" hekk hasábburgonyával, kovászos uborkával (01,04)`, ar: 3800 },
                //{ nev: `Fish & Chips Afrikai harcsa filéből burgonya chipsszel, Andalúz mártogatóssal (01,03,04,07,10)`, ar: 3400 },
                //{ nev: `Bőrös lazac steak, tejszínes-parajos gnocchival (01,07,04)`, ar: 4180 }
                //{ nev: `Fekete szezámmag palástban sült Nílusi sügérfilé, fokhagymás kék kagyló raguval, párolt jázminrizzsel  (02,04,07,12)`, ar: 2980 }
            ],
            gyermek: [`Gyermekek számára szóló ételek`,
                { nev: `Rántott tőkehalfilé burgonypürével (01,03,04,07)`, ar: 2200 },
                { nev: `Rántott sertésszelet sült burgonyával (01,03)`, ar: 2200 },
                { nev: `Rántott sajt sült burgonyával, tartárral (01,03,07,10)`, ar: 2200 },
                { nev: `Tejfölös-sajtos spagetti (01,03,07)`, ar: 2000 },
                //{ nev: `Rántott harcsa sültburgonyával (01,03,04)`, ar: 2000 },
            ],
            fatal: [`Fatálas ételeink`,
                { nev: `Toma tál (4 személyre) (01,03,04,07)`, ar: 19200, info: `Szántódi ropogós, Cigánypecsenye, Rántott tőkehalfilé, Paradicsomos-mozzarellás csirkemell, BBQ oldalas, Csónakburgonya, Párolt lila káposzta, Rizibizi, Idény saláta` },
                { nev: `Mokka tál (4 személyre) (01,03,07)`, ar: 17600, info: `Szántódi ropogós, Cigánypecsenye, Baconbe göngyölt csirkemell, Rántott sajt, Rántott gomba, Rántott karfiol, Párolt rizs, Csónakburgonya, Idény saláta` },
                { nev: `Mokka tál (2 személyre) (01,03,07)`, ar: 8800, info: `Szántódi ropogós, Cigánypecsenye, Baconbe göngyölt csirkemell, Rántott sajt, Rántott gomba, Rántott karfiol, Csónakburgonya, Idénysaláta` },
            ],
            /*teszta: [`Tészták`,
                { nev: `Carbonara spagetti (01,03,07)`, ar: 3000 },
                { nev: `Bolognai spagetti (01,07)`, ar: 3000 },
                //{ nev: `Tejszínes-gombás csirkemell, főtt tésztával (01,03,07)`, ar: 2280 },
                { nev: `Tejszínes-gombás csirkemell, gnocchi tésztával (01,03,07)`, ar: 3600 },
                //{ nev: `Bélszíncsíkok (20 dkg) dijoni mustáros pappardelle tésztával, céklás gyöngyhagymával, rukkolávval (01,03,07,10)`, ar: 6800 },
                { nev: `"Mac and Cheese" spagetti panko morzsás rákfarokkal (01,02,03,07)`, ar: 3800 },
                //{ nev: `Vegán ratatouille (Francia lecsó) ravioli, vargánya krémmel, vegán sajt ropogóssal, rukkolával (01)`, ar: 2680 },
            ],*/
        },
        gyors: {
            kat: `Hamburger / Hot-dog`,
            hamburger: [`Hamburgerek`,
                { nev: `Kézműves MOKKA Burger fűszeres steak burgonyával, panírozott hagymakarikával, fűszeres majonézes mártogatóval (01,03,07,10)`, ar: 4200, info: `saláta, paradicsom, csemegeuborka, lilahagyma, bacon, cheddar sajt, 100% marhahúspogácsa` },
                { nev: `Csirkemelles MOKKA Burger fűszeres steak burgonyával, panírozott hagymakarikával, fűszeres-majonézes mártogatóval (01,03,07,10)`, ar: 4200, info: `saláta, paradicsom, csemegeuborka, lilahagyma, bacon, cheddar sajt, csirkemell steak` },
                { nev: `Smash burger hasábburgonyával, fűszeres majonézes mártogatóval (01,03,07,10)`, ar: 4200, info: `paradicsom, cheddar sajt, hamburger szósz, 2x90g húspogácsa` },
                { nev: `Classic sajtos hamburger hasábburgonyával (01,03,07,10)`, ar: 3800, info: `hamburger szósz, saláta, paradicsom, uborka, sajt, 160g marhahúspogácsa` },
                { nev: `Classic sajtos csibe hamburger hasábburgonyával (01,03,07,10)`, ar: 3600, info: `hamburgerszósz, saláta, paradicsom, uborka, sajt, roston csirkemell)` },
                //{ nev: `Full Hamburger (01,03,07,10)`, ar: 2800, info: `hamburgerszósz, füstölt tarja, kolbász, gomba, saláta, paradicsom, uborka, sajt, marhahúspogácsa` },
                //{ nev: `"Pulled pork szendvics" steak burgonyával, amerikai káposztasalátával (01,03,07,10)`, ar: 3800, info: `saláta, paradicsom, tépett sertéshús, cheddar sajt, BBQ szósz` },
                //{ nev: `Sima Hamburger (01,03,10)`, ar: 2000, info: `hamburgerszósz, saláta, paradicsom, uborka, marhahúspogácsa` },
                //{ nev: `Vegetáriánus Hamburger (01,03,10)`, ar: 1080, info: `hamburgerszósz, paradicsom, uborka, sajt` },
                //{ nev: `Magyaros Hamburger (01,03,07,10)`, ar: 1680, info: `hamburgerszósz, saláta, paradicsom, uborka, kolbász, lilahagyma, sajt, marhahúspogácsa` },
                //{ nev: `Gombás Hamburger (01,03,07,10)`, ar: 1680, info: `hamburgerszósz, saláta, paradicsom, uborka, gomba, sajt, marhahúspogácsa` },
                //{ nev: `Sonkás Hamburger (01,03,07,10)`, ar: 1480, info: `hamburgerszósz, saláta, paradicsom, uborka, sonka, sajt, marhahúspogácsa` },
                //{ nev: `Rántott sajtos Hamburger (01,03,07,10)`, ar: 1680, info: `hamburgerszósz, saláta, paradicsom, uborka, rántott sajt` },
                //{ nev: `Dupla húsos Hamburger (01,03,07,10)`, ar: 2080, info: `hamburgerszósz, saláta, paradicsom, uborka, sajt, dupla marhahúspogácsa` },
                //{ nev: `Kézműves “mindenmentes” Burger, fűszeres gerezd burgonya`, ar: 2680, info: `Gluténmentes hamburger zsemle, vegán húspogácsa, friss zöldségek, fűszeres paradicsom öntet, növényi sajt` }
                //{ nev: `Vegán Kézműves Mokka burger`, ar: 3280, info: `Gluténmentes hamburger zsemle, vegán húspogácsa, friss zöldségek, növényi sajt, fűszeres vegán majonéz öntet, steak burgonya` },
            ],
            hotdog: [`Hot-Dog`,
                { nev: `Sajtos-Hagymás (01,03,06,07,10)`, ar: 1800 }
                //{ nev: `Sima (01,03,06,10)`, ar: 1200 },
                //{ nev: `Sajtos (01,03,06,07,10)`, ar: 1400 },
            ],
            /*szendvics: [`Szendvicsek`,
                { nev: `Rántott sertéshúsos szendvics (01,03,07,11)`, ar: 1400, info: `szezámmagos zsemle, margarin, jégsaláta, uborka` },
                { nev: `Rántott csirkemelles szendvics (01,03,07,11)`, ar: 1400, info: `szezámmagos zsemle, margarin, jégsaláta, uborka` },
                { nev: `Rántott sajtos szendvics (01,03,07,11)`, ar: 1400, info: `szezámmagos zsemle, margarin, jégsaláta, uborka` },
                //{ nev: `Kolbászos szendvics (01,03,07)`, ar: 780, info: `szezámmagos zsemle, margarin, jégsaláta, uborka` },
                //{ nev: `Sonkás szendvics (01,03,07)`, ar: 780, info: `szezámmagos zsemle, margarin, jégsaláta, uborka` },
            ],*/
            /*gyros: [`Gyros`,
                { nev: `Gyrostál (01,07)`, ar: 2680, info: `Fűszeres csirkemell csíkok, friss saláta joghurtos öntettel, sült burgonyával, pirított pitával` },
                { nev: `Vegan Gyrostál (1,10)`, ar: 3280, info: `Fűszeres vegán csíkok, friss saláta, pikáns vegán majonéz öntettel, hasáb burgonyával, sült pitával` }
            ],*/
        },
        koret: [`Köretek`,
            { nev: `Édesburgonya hasáb`, ar: 1800 },
            { nev: `Grill zöldség`, ar: 1600 },
            { nev: `Friss saláta`, ar: 1400 },
            { nev: `Rizi-bizi`, ar: 1000 },
            { nev: `Csónakburgonya`, ar: 1000 },
            { nev: `Burgonyapüré (07)`, ar: 1000 },
            { nev: `Sült burgonya`, ar: 1000 },
            { nev: `Párolt jázminizs`, ar: 1000 },
            { nev: `Medvehagymás tört burgonya (07)`, ar: 1000 },
        ],
        salata: [`Saláták`,
            //{ nev: `Séf saláta`, ar: 3280, info: `friss kevert saláta, fokhagymás öntet, tépett mozzarella, füstölt kacsamell szeletek, kenyérkocka` },
            //{ nev: `Tonhal saláta(01,04,07)`, ar: 2680, info: `fokhagymás zsemlekocka, joghurtos friss kevert saláta, lilahagyma, vörös tonhal, parmezán` },
            { nev: `Caesar saláta pirított lazac szeletekkel vagy királyrákkal, kenyérlepénnyel (01,02,03,04,07,10)`, ar: 4800 },
            { nev: `Caesar saláta grillezett csirkemell csíkokkal, kenyérlepénnyel (01,03,07,10)`, ar: 4000, info: `friss kevert saláta, parmezán, Caesar szósz, lilahagyma` },
            { nev: `Görög saláta (07)`, ar: 1800 },
            { nev: `Coleslaw (03,07,10)`, ar: 1200 },
        ],
        martas: [`Mártások`,
            { nev: `Tejföl (07)`, ar: 400 },
            { nev: `Ketchup`, ar: 400 },
            { nev: `Mustár (10)`, ar: 400 },
            { nev: `Majonéz (03,10)`, ar: 400 },
            { nev: `Tartármártás (03,07,10)`, ar: 600 },
            { nev: `Hamburger szósz (03,07,10)`, ar: 600 }
        ],
        savanyu: [`Savanyúságok`,
            { nev: `Uborkasaláta`, ar: 800 },
            { nev: `Káposztasaláta`, ar: 800 },
            { nev: `Paradicsomsaláta`, ar: 800 },
            { nev: `Csemegeuborka`, ar: 800 },
            { nev: `Kovászos uborka`, ar: 800 },
            //{ nev: `Pfefferoni paprika`, ar: 800 },
            { nev: `Töltött almapaprika`, ar: 800 },
            { nev: `Ecetes cékla`, ar: 800 },
        ],
        desszert: [`Desszertek`,
            { nev: `Dupla csokoládé szuflé szamóca öntettel, vanília fagylalttal (01,03,07)`, ar: 2000 },
            { nev: `Vegán kókuszkocka mangóval`, ar: 2000 },
            { nev: `Somlói galuska kesudióval (01,03,07,08)`, ar: 1800 },
            { nev: `Palacsinta`, ar: 1200, info: `Áfonyás, Szilvás, Sárgabarackos, Nutellás, Kakaós, Fahéjas`, egyseg: `2 db`  },
            //{ nev: `Karamellás almáspite, bourbon vanília fagylalttal (01,03,07)`, ar: 1600 },
            //{ nev: `Forró szilvás pite, mézes-fahéjas öntettel, bourbon vanília fagylalttal (01,03,07)`, ar: 1600 },
            //{ nev: `"Mentes Flódni " madártejjel`, ar: 1600 },
            //{ nev: `"MENTES" Kókuszkockák sárgabarack krémmel`, ar: 1600 },
        ],
        /*pizza: {
            kat: `Pizzák`,
            pizza: [ ``,
                { nev: `Margarita Pizza: 32cm (01,07)`, ar: 1880, info: `Paradicsomszósz, mozzarella sajt, bazsalikom pesto` },
                { nev: `Son-Go-ku Pizza: 32cm (01,07)`, ar: 2280, info: `Paradicsomszósz, sonka, mozzarella sajt, kukorica, gomba` },
                { nev: `Hawai Pizza: 32cm (01,07)`, ar: 2280, info: `Paradicsomszósz, sonka, mozzarella sajt, kukorica, ananász` },
                { nev: `Bolognai Pizza 32cm (01,07)`, ar: 2480, info: `Paradicsomszósz, bolognai ragu, mozzarella sajt` },
                { nev: `Görög Vegetáriánus Pizza: 32cm (01,07)`, ar: 2280, info: `Paradicsomszósz, uborka, paradicsom, lilahagyma, paprika, mozzarella sajt, fekete olívabogyó, feta sajt` },
                { nev: `Popeye Pizza: 32cm  (01,03,07)`, ar: 2280, info: `Fokhagymás tejfölös alap, spenót levél, mozzarella sajt, bacon, tükörtojás, parmezán sajt)` },
                { nev: `Hazai Pizza: 32cm (01,07)`, ar: 2880, info: `Paradicsomszósz, főtt-füstölt tarja, paprika, sajt, bacon, házi kolbász, paradicsom, lilahagyma` },
                { nev: `Ínyenc Pizza: 32cm (01,07)`, ar: 2680, info: `Tejfölös alap, főtt-füstölt tarja, lilahagyma, mozzarella sajt, bacon, juhtúró, pfefferoni paprika` },
                { nev: `Mokka Pizza: 32cm (01,03,07)`, ar: 2880, info: `Paradicsomszósz, főtt-füstölt tarja, sonka, mozzarella sajt, bacon, pfefferoni paprika, tojás` },
                { nev: `Sajtmánia Pizza:  32cm (01,07)`, ar: 2680, info: `Paradicsomszósz, sajtkrém, füstölt mozzarella sajt, feta sajt, mozzarella sajt, parmezán` },
                { nev: `Tonhalas Pizza: 32cm (01,04,07)`, ar: 2840, info: `Paradicsomszósz, tonhal, lilahagyma, paradicsom, mozzarella sajt, fekete olívabogyó` },
                { nev: `Herkules Pizza: 32cm (01,07)`, ar: 2660, info: `Paradicsomszósz, házi kolbász, füstölt mozzarella sajt, zöld erőspaprika, jalapeno paprika` },
                { nev: `Mámor Pizza: 32cm (01,07)`, ar: 3480, info: `Paradicsomszósz, kacsamáj terrine, lilahagyma, mozzarella sajt, parmezán sajt, rukkola` },
                //{ nev: `Chef Pizza: 32cm (01,07)`, ar: 2880, info: `Paradicsomszósz, mozzarella sajt, bufala mozzarella, füstölt kacsamell, rukkola` },
                { nev: `Fantázia Pizza: 32cm (01,07)`, ar: 3480, info: `Paradicsomszósz, mozzarella sajt, 4 választható feltét` },
            ],
            feltet: [ `Feltétek`,
                { nev: `Zöldségfélék`, ar: 260/*, egyseg: `adag`* / },
                { nev: `Sajt feltétek`, ar: 300/*, egyseg: `adag`* / },
                { nev: `Húsfeltétek:`, ar: 380/*, egyseg: `adag`* / }
            ],
        },*/
    },
    ital: {
        kave: {
            kat: `Kávék`,
            kave: [ ``,
                { nev: `Ristretto`, ar: 600},
                { nev: `Espresso`, ar: 600},
                { nev: `Espresso macchiato`, ar: 700},
                { nev: `Hosszú kávé`, ar: 600},
                { nev: `Cappuccino`, ar: 800},
                { nev: `Latte Macchiato`, ar: 1000},
                { nev: `Ízes Cappuccino`, ar: `1000 Ft/1200`, info: `Csokis süti, Makadám dió, Karamell, Cukormentes karamell, Madártej, Sós karamell, Mézeskalács, Pörkölt mogyoró, Cukormentes vanília, Cukormentes mogyoró`},
                { nev: `Cafe Latte`, ar: 1000},
                //{ nev: `Ízes Latte Macchiato`, ar: 680, info: `Csokis süti, Makadám dió, Mézeskalács, Madártej, Pörkölt mogyoró, Cukormentes vanília, Cukormentes mogyoró`},
                { nev: `Jeges kávé`, ar: 1400},
                { nev: `Mokka Melange`, ar: 1000},
                //{ nev: `Choco latte`, ar: 580},
                { nev: `Koffeinmentes kávéból`, ar: `+100`}
            ],
            kavekieg: [ `Kávé kiegészítők`,
                {nev: `Kávétejszín`, ar: 100},
                {nev: `Méz`, ar: 100},
                {nev: `Tej`, ar: 100, egyseg: `dl`},
                {nev: `Laktózmentes, növényi tej`, ar: `+200`, egyseg: `dl`},
                {nev: `Tejszínhab`, ar: 200}
            ],
        },
        fcsoki: [ `Forró csokoládék`,
            { nev: `Klasszikus csoki`, ar: 800},
            { nev: `Fehér csoki`, ar: 800},
            //{ nev: `Vadcseresznyés csoki`, ar: 800},
            { nev: `Narancsos csoki`, ar: 800},
            { nev: `Rumos-Diós csoki`, ar: 800},
            //{ nev: `Fahéjas csoki`, ar: 800},
            { nev: `Light karamellás csoki`, ar: 800},
            { nev: `Light mogyorós csoki`, ar: 800},
            { nev: `Light Vaníliás csoki`, ar: 800},
            { nev: `Forró karamell`, ar: 800},
            { nev: `Ruby csoki`, ar: 800}
        ],
        dteak: [ `Dilmah Teák`,
            { nev: `Earl Grey / fekete tea`, ar: 600},
            { nev: `Pure Green / zöld tea`, ar: 600},
            { nev: `Jasmine Petals / zöld tea`, ar: 600},
            { nev: `Moroccan Mint / zöld tea`, ar: 600},
            { nev: `Raspberry / málnás Ceylon fekete tea`, ar: 600},
            { nev: `Peach / őszibarackos Ceylon fekete tea`, ar: 600},
            { nev: `Organic Rooibos tea`, ar: 600},
            { nev: `Peppermint Leaves borsmenta tea`, ar: 600},
            { nev: `Spicy Berry / gyümölcstea keverék`, ar: 600},
            { nev: `Rosehip and Hibiscus / csipkebogyó és hibiszkusz teakeverék`, ar: 600},
            { nev: `Strawberry / epres Ceylon fekete tea`, ar: 600},
            { nev: `Blackcurrant / feketeribizlis Ceylon fekete tea`, ar: 600},
            { nev: `Lemon and Lime Ceylon fekete tea`, ar: 600}
            //{ nev: `English Breakfast Ceylon / fekete tea`, ar: 600},
            //{ nev: `Apple / almás Ceylon fekete tea`, ar: 600},
            //{ nev: `Lemon / citromos tea `, ar: 600},
        ],
        soft: [ `Üdítők`,
            { nev: `Pepsi Cola, Pepsi Light`, ar: 600, egyseg: `0,25l`},
            { nev: `7up`, ar: 600, egyseg: `0,25l`},
            { nev: `Schweppes`, ar: 600, egyseg: `0,25l`, info: `Narancs, Tonic, Citrus Mix`},
            { nev: `Canada Dry`, ar: 600, egyseg: `0,25l`},
            { nev: `Lipton Ice Tea`, ar: 600, egyseg: `0,25l`, info: `citrom, barack, zöld tea`},
            //{ nev: `Tropicana`, ar: 440, egyseg: `0,25l`, info: `100% ananász, 100% narancs`},
            { nev: `Toma premium`, ar: 800, egyseg: `0,25l`, info: `100% narancs`},
            { nev: `Toma`, ar: 600, egyseg: `0,25l`, info: `Eper, Alma, Körte, Őszibarack`},
        ],
        limon: [ `Limonádék`,
            { nev: `Eper`, ar: 1000},
            { nev: `Málna`, ar: 1000},
            { nev: `Maracuja`, ar: 1000},
            { nev: `Mangó`, ar: 1000},
            { nev: `Cseresznye`, ar: 1000},
            { nev: `Zöld alma`, ar: 1000},
            { nev: `Görögdinnye`, ar: 1000},
            { nev: `Bodza`, ar: 1000},
            { nev: `Áfonya`, ar: 1000},
            { nev: `Levendula`, ar: 1000},
            { nev: `Grapefruit`, ar: 1000},
            { nev: `Kiwi`, ar: 1000},
        ],
        viz: [ `Ásványvizek`,
            { nev: `Kristályvíz`, ar: 400, egyseg: `0,33l`, info: `Szénsavmentes, Szénsavas`},
            { nev: `Szóda`, ar: 100, egyseg: `dl`},
            //{ nev: `Theodora (Szénsavmentes, Szénsavas)`, ar: 280, egyseg: `0,33l`},
            //{ nev: `VOSS`, ar: 1080, egyseg: `0,375l`},
        ],
        sor: [ `Csapolt sörök`,
            { nev: `Radeberger Pilsner világos`, ar: 500, ar2: 1000},
            { nev: `Lindemans (Meggyes)`, ar: 900, ar2: 1800},
            { nev: `Erdinger (búzasör)`, ar: 600, ar2: 1000},
            //{ nev: `Hoegarden (Szűretlen búzasör Málnás)`, ar: 440, ar2: 880},
            //{ nev: `Guiness (Ír fekete)`, ar: 480, ar2: 960},
            //{ nev: `Guiness (Hop house lager) világos`, ar: 480, ar2: 960},
            //{ nev: `DAB`, ar: 380, ar2: 580},
        ],
        usor: [ `Üveges sörök`,
            { nev: `Borsodi`, ar: 600, egyseg: `0,5l`},
            { nev: `Staropramen`, ar: 700, egyseg: `0,5l`},
            { nev: `Stella Artois`, ar: 700, egyseg: `0,5l`},
            { nev: `Stella Artois`, ar: 600, egyseg: `0,33l`},
            //{ nev: `Estrella`, ar: 680, egyseg: `0,33l`},
            //{ nev: `Radeberger`, ar: 580, egyseg: `0,33l`},
            //{ nev: `Staropramen Dark Beer`, ar: 480, egyseg: `0,5l`},
        ],
        asor: [ `Alkoholmentes sörök`,
            //{ nev: `Stella Artois`, ar: 580, egyseg: `0,5l`},
            { nev: `Dreher 24`, ar: 600, egyseg: `0,5l`},
            { nev: `Bitburger Drive`, ar: 800, egyseg: `0,33l`},
            { nev: `Clausthaler Lemon`, ar: 800, egyseg: `0,33l`},
        ],
        cider: [ `Ciderek`,
            { nev: `Sommersby`, ar: 800, egyseg: `0,33l`},
            //{ nev: `Sommersby Alma (Apple)`, ar: 680, egyseg: `0,33l`},
            //{ nev: `Sommersby Körte (Pear)`, ar: 680, egyseg: `0,33l`},
        ],
        energy: [ `Energiaitalok`,
            { nev: `Red Bull`, ar: 800, egyseg: `0,25l`},
            { nev: `Bomba (original)`, ar: 600, egyseg: `0,25l`},
        ],
        konyak: [ `Konyakok`,
            { nev: `Metaxa xxxxx`, ar: 1000, ar2: 2000, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Hennessy`, ar: 1000, ar2: 2000, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        keseru: [ `Keserűlikőrök`,
            { nev: `Jagermeister 35%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Unicum 40%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Unicum Szilva 35%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Unicum Barista 34,5%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        palinka: [ `Prémium Pálinkák`,
            { nev: `Árpád Bársonybirs 40%`, ar: 1000, ar2: 2000, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Cigánymeggy Pálinka 40%`, ar: 1000, ar2: 2000, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Kajszibarack Pálinka 40%`, ar: 1000, ar2: 2000, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Piros Vilmos Pálinka 40%`, ar: 1000, ar2: 2000, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Lepotica Szilva Pálinka 40%`, ar: 1000, ar2: 2000, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Málna Pálinka 40%`, ar: 1400, ar2: 2800, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Novum Vilmos Eszencia 49,7%`, ar: 3000, ar2: 6000, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Békési Disznótoros Szilva Pálinka 50%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Békési Disznótoros Meggy Pálinka 50% `, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Békési Disznótoros Birs Pálinka 50%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Vilmos Körte Ágyas Pálinka 37,5%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Árpád Dupla Ágyas Barack Pálinka 37,5%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            //{ nev: `Árpád Faeper Pálinka 40%`, ar: 1000, ar2: 2000, egyseg1: `2cl`, egyseg2: `4cl`},
            //{ nev: `Árpád Erdei szeder Pálinka 40%`, ar: 1000, ar2: 2000, egyseg1: `2cl`, egyseg2: `4cl`},
            //{ nev: `Békési Disznótoros Barack Pálinka 50%`, ar: 500, ar2: 1000, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        rum: [ `Rumok`,
            { nev: `Bacardi Superior 37,5%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Captain Morgan 35%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Portorico 60%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Stroh 80%`, ar: 800, ar2: 1600, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        vodka: [ `Vodkák`,
            { nev: `Finlandia 40%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            //{ nev: `Szikra 40%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Absolut Vodka 40%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Vilmoskörte Vodka 37,5 %`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Stolichnaya 40%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Stolichnaya Elit`, ar: 1200, ar2: 2400, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        tequila: [ `Tequila`,
            { nev: `Sierra Silver 38%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Sierra Gold 38%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `El Jimador Blanco 40%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `El Jimador Reposado 40%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        whiskey: [ `Whiskey`,
            { nev: `Baileys (Irish cream) 17%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Ballentines (Scotch) 40%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Chivas Regal (Scotch) 40%`, ar: 1200, ar2: 2400, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Jack Daniel’s (Tennessee) 40%`, ar: 700, ar2: 1400, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Jameson (Irish) 40%`, ar: 700, ar2: 1400, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Jim Beam (Bourbon) 40%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Johnnie Walker Red Label (Scotch) 40%`, ar: 700, ar2: 1400, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Johnnie Walker Black Label (Scotch) 40%`, ar: 1200, ar2: 2400, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        vermut: [ `Vermutok`,
            { nev: `Martini Bianco`, ar: 1200, egyseg: `dl`},
            { nev: `Martini Dry`, ar: 1200, egyseg: `dl`},
            { nev: `Martini Rosso`, ar: 1200, egyseg: `dl`},
            { nev: `Aperol Spritz`, ar: 1200, egyseg: `dl`},
            { nev: `Campari`, ar: 1200, egyseg: `dl`},
        ],
        likor: [ `Likőrök`,
            { nev: `Berentzen`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`, info: `Eper 15%, Alma 18%, Körte 15%, Karamell 17%`},
            { nev: `Tatratea (22%, 42%, 52%, 62%, 67%, 72%)`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        gin: [ `Ginek`,
            { nev: `Gordon’s 37,5%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Beefeater 37,5%`, ar: 600, ar2: 1200, egyseg1: `2cl`, egyseg2: `4cl`},
            { nev: `Copper Head 40%`, ar: 1200, ar2: 2400, egyseg1: `2cl`, egyseg2: `4cl`},
            //{ nev: `Marine 37,5%`, ar: 340, ar2: 680, egyseg1: `2cl`, egyseg2: `4cl`},
        ],
        roseb: [ `Rosé Borok`,
            { nev: `Lelovits Tamás villányi rosé (száraz)`, ar: 600, egyseg: `dl`},
            { nev: `Dubicz rosé (száraz)`, ar: 600, egyseg: `dl`},
            { nev: `Bock rosé (száraz)`, ar: 600, egyseg: `dl`},
            { nev: `Vylyan Villányi kakas rosé (száraz)`, ar: 600, egyseg: `dl`},
            //{ nev: `Hilltop rosé (édes)`, ar: 480, egyseg: `dl`},
            //{ nev: `Juhász rosé (száraz)`, ar: 380, egyseg: `dl`},
            //{ nev: `Szekszárdi Bodri rosé (száraz)`, ar: 500, egyseg: `dl`},
            //{ nev: `György-Villa Syrah rosé (száraz)`, ar: 380, egyseg: `dl`},
        ],
        vorosb: [ `Vörös Borok`,
            { nev: `Gere Attila Villányi Portugieser (száraz)`, ar: 600, egyseg: `dl`},
            { nev: `Sike Tamás Merlot (édes)`, ar: 600, egyseg: `dl`},
            { nev: `Sike Tamás Medalion (félédes)`, ar: 600, egyseg: `dl`},
        ],
        feherb: [ `Fehér Borok`,
            { nev: `Irsai Olivér (száraz)`, ar: 600, egyseg: `dl`},
            { nev: `Olaszrizling (száraz)`, ar: 600, egyseg: `dl`},
            { nev: `Tokaji Hárslevelű (édes)`, ar: 600, egyseg: `dl`},
            { nev: `Tokaji Furmint (édes)`, ar: 600, egyseg: `dl`},
        ],
        pezsgo: [ `Pezsgők`,
            { nev: `Asti Cinzano (Sweet)`, ar: 6800},
            { nev: `Dom Peringon (Brut)`, ar: 188000},
            { nev: `G.H.Mumm (Brut)`, ar: 19800},
            { nev: `Hungaria (Extra Dry)`, ar: 3800},
            { nev: `Hungaria Rosé (Demi Sec)`, ar: 3800},
            { nev: `Laurent-Perrier (Brut)`, ar: 30800},
            { nev: `Moet and Chandon (Brut)`, ar: 32800},
            { nev: `Törley Alkoholmentes (Doux)`, ar: 2800},
            { nev: `Törley Charmant (Doux)`, ar: 2800},
            { nev: `Törley Gála (Sec)`, ar: 2800},
            //{ nev: `Törley Orfeum Rosé (Sec)`, ar: 2400},
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
                        if (menuObject[par][i][j][k] == ``) {} else {
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
}

load("etel");

function shot(par) {
    if (par == "konyak" || par == "keseru" || par == "palinka" || par == "rum" || par == "vodka" || par == "gin" || par == "tequila" || par == "whiskey" || par == "likor") {
        $(`.section32 #${par}ID`).append(`<div class="row"><div></div><div class="egysegar"<div class="rb1">2cl<div class="rb2">4cl</div></div></div></div>`)
    } else if (par == "sor") {
        $(`.section32 #${par}ID`).append(`<div class="row"><div></div><div class="egysegar"<div class="rb1">pohár<div class="rb2">korsó</div></div></div></div>`)
    }
}
/*
function loadTitles(par) {
    //$(`.menu`).slideToggle();
    $(`.menu`).text(``);
    for (let i in menuObject[par]) {
        if (Array.isArray(menuObject[par][i])) {
            for (let j in menuObject[par][i]) {
                if (j == 0) {
                    $(".section32 .menu").append(`<div id="${i}ID"><h3>${menuObject[par][i][j]}</h3></div>`)
                } else {
                        $(`.section32 #${i}ID`).append(`<div class="row"><div id="termek${i}${j}">${menuObject[par][i][j].nev}</div></div>`)
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
                        if (menuObject[par][i][j][k] == ``) {} else {
                            if (k == 0) {
                                $(`.section32 #${i}ID`).append(`<h5>${menuObject[par][i][j][k]}</h5>`)
                            } else {
                                $(`.section32 #${i}ID`).append(`<div class="row"><div>${menuObject[par][i][j][k].nev}</div></div>`)
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
}
*/