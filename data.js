const data = [
    {
        "kode_emiten": "AALI",
        "nama_emiten": "Astra Agro Lestari Tbk.",
        "tanggal_listing": "1997-12-09T00:00:00",
        "jumlah_saham": 1924688333,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ABBA",
        "nama_emiten": "Mahaka Media Tbk.",
        "tanggal_listing": "2002-04-03T00:00:00",
        "jumlah_saham": 2755125000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ABDA",
        "nama_emiten": "Asuransi Bina Dana Arta Tbk.",
        "tanggal_listing": "1989-07-06T00:00:00",
        "jumlah_saham": 620806680,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ABMM",
        "nama_emiten": "ABM Investama Tbk.",
        "tanggal_listing": "2011-12-06T00:00:00",
        "jumlah_saham": 2753165000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ACES",
        "nama_emiten": "Ace Hardware Indonesia Tbk.",
        "tanggal_listing": "2007-11-06T00:00:00",
        "jumlah_saham": 17150000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ACST",
        "nama_emiten": "Acset Indonusa Tbk.",
        "tanggal_listing": "2013-06-24T00:00:00",
        "jumlah_saham": 6425160000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ADES",
        "nama_emiten": "Akasha Wira International Tbk.",
        "tanggal_listing": "1994-06-13T00:00:00",
        "jumlah_saham": 589896800,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ADHI",
        "nama_emiten": "Adhi Karya (Persero) Tbk.",
        "tanggal_listing": "2004-03-18T00:00:00",
        "jumlah_saham": 3560849376,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ADMF",
        "nama_emiten": "Adira Dinamika Multi Finance T",
        "tanggal_listing": "2004-03-31T00:00:00",
        "jumlah_saham": 1000000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ADMG",
        "nama_emiten": "Polychem Indonesia Tbk",
        "tanggal_listing": "1993-10-20T00:00:00",
        "jumlah_saham": 3889179559,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ADRO",
        "nama_emiten": "Adaro Energy Tbk.",
        "tanggal_listing": "2008-07-16T00:00:00",
        "jumlah_saham": 31985962000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AGAR",
        "nama_emiten": "Asia Sejahtera Mina Tbk.",
        "tanggal_listing": "2019-12-02T00:00:00",
        "jumlah_saham": 1000000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AGII",
        "nama_emiten": "Aneka Gas Industri Tbk.",
        "tanggal_listing": "2016-09-28T00:00:00",
        "jumlah_saham": 3066660000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AGRO",
        "nama_emiten": "Bank Rakyat Indonesia Agroniag",
        "tanggal_listing": "2003-08-08T00:00:00",
        "jumlah_saham": 21129857328,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AGRS",
        "nama_emiten": "Bank IBK Indonesia Tbk.",
        "tanggal_listing": "2014-12-22T00:00:00",
        "jumlah_saham": 11154923542,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AHAP",
        "nama_emiten": "Asuransi Harta Aman Pratama Tb",
        "tanggal_listing": "1990-09-14T00:00:00",
        "jumlah_saham": 2940000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AIMS",
        "nama_emiten": "Akbar Indo Makmur Stimec Tbk",
        "tanggal_listing": "2001-07-20T00:00:00",
        "jumlah_saham": 220000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AISA",
        "nama_emiten": "Tiga Pilar Sejahtera Food Tbk.",
        "tanggal_listing": "1997-06-11T00:00:00",
        "jumlah_saham": 9311800000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AKKU",
        "nama_emiten": "Anugerah Kagum Karya Utama Tbk",
        "tanggal_listing": "2004-11-01T00:00:00",
        "jumlah_saham": 6449463636,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AKPI",
        "nama_emiten": "Argha Karya Prima Industry Tbk",
        "tanggal_listing": "1992-12-18T00:00:00",
        "jumlah_saham": 680000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AKRA",
        "nama_emiten": "AKR Corporindo Tbk.",
        "tanggal_listing": "1994-10-03T00:00:00",
        "jumlah_saham": 4014694920,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AKSI",
        "nama_emiten": "Maming Enam Sembilan Mineral T",
        "tanggal_listing": "2001-07-13T00:00:00",
        "jumlah_saham": 720000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ALDO",
        "nama_emiten": "Alkindo Naratama Tbk.",
        "tanggal_listing": "2011-07-12T00:00:00",
        "jumlah_saham": 1100000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ALKA",
        "nama_emiten": "Alakasa Industrindo Tbk",
        "tanggal_listing": "1990-07-12T00:00:00",
        "jumlah_saham": 507665055,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ALMI",
        "nama_emiten": "Alumindo Light Metal Industry",
        "tanggal_listing": "1997-01-02T00:00:00",
        "jumlah_saham": 616000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ALTO",
        "nama_emiten": "Tri Banyan Tirta Tbk.",
        "tanggal_listing": "2012-07-10T00:00:00",
        "jumlah_saham": 2191870558,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AMAG",
        "nama_emiten": "Asuransi Multi Artha Guna Tbk.",
        "tanggal_listing": "2005-12-23T00:00:00",
        "jumlah_saham": 5001552516,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AMAN",
        "nama_emiten": "Makmur Berkah Amanda Tbk.",
        "tanggal_listing": "2020-03-13T00:00:00",
        "jumlah_saham": 3873500000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AMAR",
        "nama_emiten": "Bank Amar Indonesia Tbk.",
        "tanggal_listing": "2020-01-09T00:00:00",
        "jumlah_saham": 7954749000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AMFG",
        "nama_emiten": "Asahimas Flat Glass Tbk.",
        "tanggal_listing": "1995-11-08T00:00:00",
        "jumlah_saham": 434000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AMIN",
        "nama_emiten": "Ateliers Mecaniques D Indonesi",
        "tanggal_listing": "2015-12-10T00:00:00",
        "jumlah_saham": 1080000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AMOR",
        "nama_emiten": "Ashmore Asset Management Indon",
        "tanggal_listing": "2020-01-14T00:00:00",
        "jumlah_saham": 1111111200,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "AMRT",
        "nama_emiten": "Sumber Alfaria Trijaya Tbk.",
        "tanggal_listing": "2009-01-15T00:00:00",
        "jumlah_saham": 41524501700,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ANDI",
        "nama_emiten": "Andira Agro Tbk.",
        "tanggal_listing": "2018-08-16T00:00:00",
        "jumlah_saham": 9350000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ANJT",
        "nama_emiten": "Austindo Nusantara Jaya Tbk.",
        "tanggal_listing": "2013-05-08T00:00:00",
        "jumlah_saham": 3354175000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ANTM",
        "nama_emiten": "Aneka Tambang Tbk.",
        "tanggal_listing": "1997-11-27T00:00:00",
        "jumlah_saham": 24030764725,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "APEX",
        "nama_emiten": "Apexindo Pratama Duta Tbk.",
        "tanggal_listing": "2002-07-10T00:00:00",
        "jumlah_saham": 2659850000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "APIC",
        "nama_emiten": "Pacific Strategic Financial Tb",
        "tanggal_listing": "2002-12-18T00:00:00",
        "jumlah_saham": 11766313488,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "APII",
        "nama_emiten": "Arita Prima Indonesia Tbk.",
        "tanggal_listing": "2013-10-29T00:00:00",
        "jumlah_saham": 1075760000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "APLI",
        "nama_emiten": "Asiaplast Industries Tbk.",
        "tanggal_listing": "2000-05-01T00:00:00",
        "jumlah_saham": 1362671400,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "APLN",
        "nama_emiten": "Agung Podomoro Land Tbk.",
        "tanggal_listing": "2010-11-11T00:00:00",
        "jumlah_saham": 22699326779,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ARGO",
        "nama_emiten": "Argo Pantes Tbk",
        "tanggal_listing": "1991-01-07T00:00:00",
        "jumlah_saham": 335557450,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ARII",
        "nama_emiten": "Atlas Resources Tbk.",
        "tanggal_listing": "2011-11-08T00:00:00",
        "jumlah_saham": 3000000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ARKA",
        "nama_emiten": "Arkha Jayanti Persada Tbk.",
        "tanggal_listing": "2019-07-10T00:00:00",
        "jumlah_saham": 2000000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ARMY",
        "nama_emiten": "Armidian Karyatama Tbk.",
        "tanggal_listing": "2017-06-21T00:00:00",
        "jumlah_saham": 9006250000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ARNA",
        "nama_emiten": "Arwana Citramulia Tbk.",
        "tanggal_listing": "2001-07-17T00:00:00",
        "jumlah_saham": 7341430976,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ARTA",
        "nama_emiten": "Arthavest Tbk",
        "tanggal_listing": "2002-11-05T00:00:00",
        "jumlah_saham": 446674175,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ARTI",
        "nama_emiten": "Ratu Prabu Energi Tbk",
        "tanggal_listing": "2003-04-30T00:00:00",
        "jumlah_saham": 7840000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ARTO",
        "nama_emiten": "Bank Jago Tbk.",
        "tanggal_listing": "2016-01-12T00:00:00",
        "jumlah_saham": 10747687500,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ASBI",
        "nama_emiten": "Asuransi Bintang Tbk.",
        "tanggal_listing": "1989-11-29T00:00:00",
        "jumlah_saham": 348386472,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ASDM",
        "nama_emiten": "Asuransi Dayin Mitra Tbk.",
        "tanggal_listing": "1989-12-15T00:00:00",
        "jumlah_saham": 192000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ASGR",
        "nama_emiten": "Astra Graphia Tbk.",
        "tanggal_listing": "1989-11-15T00:00:00",
        "jumlah_saham": 1348780500,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ASII",
        "nama_emiten": "Astra International Tbk.",
        "tanggal_listing": "1990-04-04T00:00:00",
        "jumlah_saham": 40483553140,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ASJT",
        "nama_emiten": "Asuransi Jasa Tania Tbk.",
        "tanggal_listing": "2003-12-29T00:00:00",
        "jumlah_saham": 600000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ASMI",
        "nama_emiten": "Asuransi Kresna Mitra Tbk.",
        "tanggal_listing": "2014-01-16T00:00:00",
        "jumlah_saham": 8958380460,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ASPI",
        "nama_emiten": "Andalan Sakti Primaindo Tbk.",
        "tanggal_listing": "2020-02-17T00:00:00",
        "jumlah_saham": 681792805,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ASRI",
        "nama_emiten": "Alam Sutera Realty Tbk.",
        "tanggal_listing": "2007-12-18T00:00:00",
        "jumlah_saham": 19649411888,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ASRM",
        "nama_emiten": "Asuransi Ramayana Tbk.",
        "tanggal_listing": "1990-03-19T00:00:00",
        "jumlah_saham": 304283840,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ASSA",
        "nama_emiten": "Adi Sarana Armada Tbk.",
        "tanggal_listing": "2012-11-12T00:00:00",
        "jumlah_saham": 3397500000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ATAP",
        "nama_emiten": "Trimitra Prawara Goldland Tbk.",
        "tanggal_listing": "2020-12-11T00:00:00",
        "jumlah_saham": 1250000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ATIC",
        "nama_emiten": "Anabatic Technologies Tbk.",
        "tanggal_listing": "2015-07-08T00:00:00",
        "jumlah_saham": 2315361355,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AUTO",
        "nama_emiten": "Astra Otoparts Tbk.",
        "tanggal_listing": "1998-06-15T00:00:00",
        "jumlah_saham": 4819733000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "AYLS",
        "nama_emiten": "Agro Yasa Lestari Tbk.",
        "tanggal_listing": "2020-02-12T00:00:00",
        "jumlah_saham": 853423236,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BABP",
        "nama_emiten": "Bank MNC Internasional Tbk.",
        "tanggal_listing": "2002-07-15T00:00:00",
        "jumlah_saham": 25061670687,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BACA",
        "nama_emiten": "Bank Capital Indonesia Tbk.",
        "tanggal_listing": "2007-10-04T00:00:00",
        "jumlah_saham": 7007601007,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BAJA",
        "nama_emiten": "Saranacentral Bajatama Tbk.",
        "tanggal_listing": "2011-12-21T00:00:00",
        "jumlah_saham": 1800000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BALI",
        "nama_emiten": "Bali Towerindo Sentra Tbk.",
        "tanggal_listing": "2014-03-13T00:00:00",
        "jumlah_saham": 3934592500,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BANK",
        "nama_emiten": "Bank Net Indonesia Syariah Tbk",
        "tanggal_listing": "2021-02-01T00:00:00",
        "jumlah_saham": 13061141834,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BAPA",
        "nama_emiten": "Bekasi Asri Pemula Tbk.",
        "tanggal_listing": "2008-01-14T00:00:00",
        "jumlah_saham": 661784520,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BAPI",
        "nama_emiten": "Bhakti Agung Propertindo Tbk.",
        "tanggal_listing": "2019-09-16T00:00:00",
        "jumlah_saham": 5591740006,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BATA",
        "nama_emiten": "Sepatu Bata Tbk.",
        "tanggal_listing": "1982-03-24T00:00:00",
        "jumlah_saham": 1300000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BAYU",
        "nama_emiten": "Bayu Buana Tbk",
        "tanggal_listing": "1989-10-30T00:00:00",
        "jumlah_saham": 353220780,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BBCA",
        "nama_emiten": "Bank Central Asia Tbk.",
        "tanggal_listing": "2000-05-31T00:00:00",
        "jumlah_saham": 24408459900,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BBHI",
        "nama_emiten": "Bank Harda Internasional Tbk.",
        "tanggal_listing": "2015-08-12T00:00:00",
        "jumlah_saham": 4142587477,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BBKP",
        "nama_emiten": "Bank KB Bukopin Tbk.",
        "tanggal_listing": "2006-07-10T00:00:00",
        "jumlah_saham": 32510124471,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BBLD",
        "nama_emiten": "Buana Finance Tbk.",
        "tanggal_listing": "1990-05-07T00:00:00",
        "jumlah_saham": 1645796054,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BBMD",
        "nama_emiten": "Bank Mestika Dharma Tbk.",
        "tanggal_listing": "2013-07-08T00:00:00",
        "jumlah_saham": 4049189100,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BBNI",
        "nama_emiten": "Bank Negara Indonesia (Persero",
        "tanggal_listing": "1996-11-25T00:00:00",
        "jumlah_saham": 18462169893,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BBRI",
        "nama_emiten": "Bank Rakyat Indonesia (Persero",
        "tanggal_listing": "2003-11-10T00:00:00",
        "jumlah_saham": 122112351900,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BBRM",
        "nama_emiten": "Pelayaran Nasional Bina Buana",
        "tanggal_listing": "2013-01-09T00:00:00",
        "jumlah_saham": 5367076248,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BBSI",
        "nama_emiten": "Bank Bisnis Internasional Tbk.",
        "tanggal_listing": "2020-09-07T00:00:00",
        "jumlah_saham": 2996264110,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BBSS",
        "nama_emiten": "Bumi Benowo Sukses Sejahtera T",
        "tanggal_listing": "2020-04-15T00:00:00",
        "jumlah_saham": 4800000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BBTN",
        "nama_emiten": "Bank Tabungan Negara (Persero)",
        "tanggal_listing": "2009-12-17T00:00:00",
        "jumlah_saham": 10484100000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BBYB",
        "nama_emiten": "Bank Neo Commerce Tbk.",
        "tanggal_listing": "2015-01-13T00:00:00",
        "jumlah_saham": 6595177287,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BCAP",
        "nama_emiten": "MNC Kapital Indonesia Tbk.",
        "tanggal_listing": "2001-06-08T00:00:00",
        "jumlah_saham": 42618850927,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BCIC",
        "nama_emiten": "Bank JTrust Indonesia Tbk.",
        "tanggal_listing": "1997-06-25T00:00:00",
        "jumlah_saham": 9912003256,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BCIP",
        "nama_emiten": "Bumi Citra Permai Tbk.",
        "tanggal_listing": "2009-12-11T00:00:00",
        "jumlah_saham": 1429915525,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BDMN",
        "nama_emiten": "Bank Danamon Indonesia Tbk.",
        "tanggal_listing": "1989-12-06T00:00:00",
        "jumlah_saham": 9675817341,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BEEF",
        "nama_emiten": "Estika Tata Tiara Tbk.",
        "tanggal_listing": "2019-01-10T00:00:00",
        "jumlah_saham": 1884312595,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BEKS",
        "nama_emiten": "Bank Pembangunan Daerah Banten",
        "tanggal_listing": "2001-07-13T00:00:00",
        "jumlah_saham": 43403920512,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BELL",
        "nama_emiten": "Trisula Textile Industries Tbk",
        "tanggal_listing": "2017-10-03T00:00:00",
        "jumlah_saham": 7250000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BESS",
        "nama_emiten": "Batulicin Nusantara Maritim Tb",
        "tanggal_listing": "2020-03-09T00:00:00",
        "jumlah_saham": 3405466102,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BEST",
        "nama_emiten": "Bekasi Fajar Industrial Estate",
        "tanggal_listing": "2012-04-10T00:00:00",
        "jumlah_saham": 9647311150,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BFIN",
        "nama_emiten": "BFI Finance  Indonesia Tbk.",
        "tanggal_listing": "1990-05-16T00:00:00",
        "jumlah_saham": 15967115620,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BGTG",
        "nama_emiten": "Bank Ganesha Tbk.",
        "tanggal_listing": "2016-05-12T00:00:00",
        "jumlah_saham": 11063309400,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BHAT",
        "nama_emiten": "Bhakti Multi Artha Tbk.",
        "tanggal_listing": "2020-04-15T00:00:00",
        "jumlah_saham": 5000000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BHIT",
        "nama_emiten": "MNC Investama Tbk.",
        "tanggal_listing": "1997-11-24T00:00:00",
        "jumlah_saham": 73766098834,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BIKA",
        "nama_emiten": "Binakarya Jaya Abadi Tbk.",
        "tanggal_listing": "2015-07-14T00:00:00",
        "jumlah_saham": 592280000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BIMA",
        "nama_emiten": "Primarindo Asia Infrastructure",
        "tanggal_listing": "1994-08-30T00:00:00",
        "jumlah_saham": 608175716,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BINA",
        "nama_emiten": "Bank Ina Perdana Tbk.",
        "tanggal_listing": "2014-01-16T00:00:00",
        "jumlah_saham": 5597831250,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BIPI",
        "nama_emiten": "Astrindo Nusantara Infrastrukt",
        "tanggal_listing": "2010-02-11T00:00:00",
        "jumlah_saham": 44693066193,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BIPP",
        "nama_emiten": "Bhuwanatala Indah Permai Tbk.",
        "tanggal_listing": "1995-10-23T00:00:00",
        "jumlah_saham": 5028669366,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BIRD",
        "nama_emiten": "Blue Bird Tbk.",
        "tanggal_listing": "2014-11-05T00:00:00",
        "jumlah_saham": 2502100000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BISI",
        "nama_emiten": "BISI International Tbk.",
        "tanggal_listing": "2007-05-28T00:00:00",
        "jumlah_saham": 3000000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BJBR",
        "nama_emiten": "Bank Pembangunan Daerah Jawa B",
        "tanggal_listing": "2010-07-08T00:00:00",
        "jumlah_saham": 9740399289,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BJTM",
        "nama_emiten": "Bank Pembangunan Daerah Jawa T",
        "tanggal_listing": "2012-07-12T00:00:00",
        "jumlah_saham": 14865343101,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BKDP",
        "nama_emiten": "Bukit Darmo Property Tbk",
        "tanggal_listing": "2007-06-15T00:00:00",
        "jumlah_saham": 7513992252,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BKSL",
        "nama_emiten": "Sentul City Tbk.",
        "tanggal_listing": "1997-07-28T00:00:00",
        "jumlah_saham": 67083561082,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BKSW",
        "nama_emiten": "Bank QNB Indonesia Tbk.",
        "tanggal_listing": "2002-11-21T00:00:00",
        "jumlah_saham": 20232319124,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BLTA",
        "nama_emiten": "Berlian Laju Tanker Tbk",
        "tanggal_listing": "1990-03-26T00:00:00",
        "jumlah_saham": 25940187103,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BLTZ",
        "nama_emiten": "Graha Layar Prima Tbk.",
        "tanggal_listing": "2014-04-10T00:00:00",
        "jumlah_saham": 873937142,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BLUE",
        "nama_emiten": "Berkah Prima Perkasa Tbk.",
        "tanggal_listing": "2019-07-08T00:00:00",
        "jumlah_saham": 418000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BMAS",
        "nama_emiten": "Bank Maspion Indonesia Tbk.",
        "tanggal_listing": "2013-07-11T00:00:00",
        "jumlah_saham": 4399026922,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BMRI",
        "nama_emiten": "Bank Mandiri (Persero) Tbk.",
        "tanggal_listing": "2003-07-14T00:00:00",
        "jumlah_saham": 46199999998,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BMSR",
        "nama_emiten": "Bintang Mitra Semestaraya Tbk",
        "tanggal_listing": "1999-12-29T00:00:00",
        "jumlah_saham": 1159200024,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BMTR",
        "nama_emiten": "Global Mediacom Tbk.",
        "tanggal_listing": "1995-07-17T00:00:00",
        "jumlah_saham": 16583997586,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BNBA",
        "nama_emiten": "Bank Bumi Arta Tbk.",
        "tanggal_listing": "2006-06-01T00:00:00",
        "jumlah_saham": 2286900000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BNBR",
        "nama_emiten": "Bakrie & Brothers Tbk",
        "tanggal_listing": "1989-08-28T00:00:00",
        "jumlah_saham": 20863053480,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BNGA",
        "nama_emiten": "Bank CIMB Niaga Tbk.",
        "tanggal_listing": "1989-11-29T00:00:00",
        "jumlah_saham": 24880290775,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BNII",
        "nama_emiten": "Bank Maybank Indonesia Tbk.",
        "tanggal_listing": "1989-11-21T00:00:00",
        "jumlah_saham": 75357433911,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BNLI",
        "nama_emiten": "Bank Permata Tbk.",
        "tanggal_listing": "1990-01-15T00:00:00",
        "jumlah_saham": 27762311813,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BOGA",
        "nama_emiten": "Bintang Oto Global Tbk.",
        "tanggal_listing": "2016-12-19T00:00:00",
        "jumlah_saham": 3803526210,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BOLA",
        "nama_emiten": "Bali Bintang Sejahtera Tbk.",
        "tanggal_listing": "2019-06-17T00:00:00",
        "jumlah_saham": 6000000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BOLT",
        "nama_emiten": "Garuda Metalindo Tbk.",
        "tanggal_listing": "2015-07-07T00:00:00",
        "jumlah_saham": 2343750000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BOSS",
        "nama_emiten": "Borneo Olah Sarana Sukses Tbk.",
        "tanggal_listing": "2018-02-15T00:00:00",
        "jumlah_saham": 1400000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BPFI",
        "nama_emiten": "Batavia Prosperindo Finance Tb",
        "tanggal_listing": "2009-06-01T00:00:00",
        "jumlah_saham": 1782663575,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BPII",
        "nama_emiten": "Batavia Prosperindo Internasio",
        "tanggal_listing": "2014-07-08T00:00:00",
        "jumlah_saham": 562224662,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BPTR",
        "nama_emiten": "Batavia Prosperindo Trans Tbk.",
        "tanggal_listing": "2018-07-09T00:00:00",
        "jumlah_saham": 1550000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BRAM",
        "nama_emiten": "Indo Kordsa Tbk.",
        "tanggal_listing": "1990-09-05T00:00:00",
        "jumlah_saham": 450000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BRIS",
        "nama_emiten": "Bank Syariah Indonesia Tbk.",
        "tanggal_listing": "1911-01-01T00:00:00",
        "jumlah_saham": 40619825972,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BRMS",
        "nama_emiten": "Bumi Resources Minerals Tbk.",
        "tanggal_listing": "2010-12-09T00:00:00",
        "jumlah_saham": 71007759834,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BRNA",
        "nama_emiten": "Berlina Tbk.",
        "tanggal_listing": "1989-11-06T00:00:00",
        "jumlah_saham": 979110000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BRPT",
        "nama_emiten": "Barito Pacific Tbk.",
        "tanggal_listing": "1993-10-01T00:00:00",
        "jumlah_saham": 93388824105,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BSDE",
        "nama_emiten": "Bumi Serpong Damai Tbk.",
        "tanggal_listing": "2008-06-06T00:00:00",
        "jumlah_saham": 21171365812,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BSIM",
        "nama_emiten": "Bank Sinarmas Tbk.",
        "tanggal_listing": "2010-12-13T00:00:00",
        "jumlah_saham": 17263895026,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BSSR",
        "nama_emiten": "Baramulti Suksessarana Tbk.",
        "tanggal_listing": "2012-11-08T00:00:00",
        "jumlah_saham": 2616500000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BSWD",
        "nama_emiten": "Bank Of India Indonesia Tbk.",
        "tanggal_listing": "2002-05-01T00:00:00",
        "jumlah_saham": 1374912000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BTEK",
        "nama_emiten": "Bumi Teknokultura Unggul Tbk",
        "tanggal_listing": "2004-05-14T00:00:00",
        "jumlah_saham": 46277496376,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BTEL",
        "nama_emiten": "Bakrie Telecom Tbk.",
        "tanggal_listing": "2006-02-03T00:00:00",
        "jumlah_saham": 36822665755,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BTON",
        "nama_emiten": "Betonjaya Manunggal Tbk.",
        "tanggal_listing": "2001-07-18T00:00:00",
        "jumlah_saham": 720000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BTPN",
        "nama_emiten": "Bank BTPN Tbk.",
        "tanggal_listing": "2008-03-12T00:00:00",
        "jumlah_saham": 8066054461,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BTPS",
        "nama_emiten": "Bank BTPN Syariah Tbk.",
        "tanggal_listing": "2018-05-08T00:00:00",
        "jumlah_saham": 7626663000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BUDI",
        "nama_emiten": "Budi Starch & Sweetener Tbk.",
        "tanggal_listing": "1995-05-08T00:00:00",
        "jumlah_saham": 4498997362,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BUKK",
        "nama_emiten": "Bukaka Teknik Utama Tbk.",
        "tanggal_listing": "1995-01-09T00:00:00",
        "jumlah_saham": 2640452000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BULL",
        "nama_emiten": "Buana Lintas Lautan Tbk.",
        "tanggal_listing": "2011-05-23T00:00:00",
        "jumlah_saham": 12915651996,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BUMI",
        "nama_emiten": "Bumi Resources Tbk.",
        "tanggal_listing": "1990-07-30T00:00:00",
        "jumlah_saham": 74274746007,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BUVA",
        "nama_emiten": "Bukit Uluwatu Villa Tbk.",
        "tanggal_listing": "2010-07-12T00:00:00",
        "jumlah_saham": 6811269200,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "BVIC",
        "nama_emiten": "Bank Victoria International Tb",
        "tanggal_listing": "1999-06-30T00:00:00",
        "jumlah_saham": 8862427568,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BWPT",
        "nama_emiten": "Eagle High Plantations Tbk.",
        "tanggal_listing": "2009-10-27T00:00:00",
        "jumlah_saham": 31525291000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "BYAN",
        "nama_emiten": "Bayan Resources Tbk.",
        "tanggal_listing": "2008-08-12T00:00:00",
        "jumlah_saham": 3333333500,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CAKK",
        "nama_emiten": "Cahayaputra Asa Keramik Tbk.",
        "tanggal_listing": "2018-10-31T00:00:00",
        "jumlah_saham": 1203300219,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CAMP",
        "nama_emiten": "Campina Ice Cream Industry Tbk",
        "tanggal_listing": "2017-12-19T00:00:00",
        "jumlah_saham": 5885000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CANI",
        "nama_emiten": "Capitol Nusantara Indonesia Tb",
        "tanggal_listing": "2014-01-16T00:00:00",
        "jumlah_saham": 833440000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CARE",
        "nama_emiten": "Metro Healthcare Indonesia Tbk",
        "tanggal_listing": "2020-03-13T00:00:00",
        "jumlah_saham": 33250000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CARS",
        "nama_emiten": "Industri dan Perdagangan Bintr",
        "tanggal_listing": "2017-04-10T00:00:00",
        "jumlah_saham": 15000000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CASA",
        "nama_emiten": "Capital Financial Indonesia Tb",
        "tanggal_listing": "2016-07-19T00:00:00",
        "jumlah_saham": 54476253593,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CASH",
        "nama_emiten": "Cashlez Worldwide Indonesia Tb",
        "tanggal_listing": "2020-05-04T00:00:00",
        "jumlah_saham": 1431108207,
        "kategori": "Akselerasi"
    },
    {
        "kode_emiten": "CASS",
        "nama_emiten": "Cardig Aero Services Tbk.",
        "tanggal_listing": "2011-12-05T00:00:00",
        "jumlah_saham": 2086950000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CBMF",
        "nama_emiten": "Cahaya Bintang Medan Tbk.",
        "tanggal_listing": "2020-04-09T00:00:00",
        "jumlah_saham": 1875000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CCSI",
        "nama_emiten": "Communication Cable Systems In",
        "tanggal_listing": "2019-06-18T00:00:00",
        "jumlah_saham": 1000000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CEKA",
        "nama_emiten": "Wilmar Cahaya Indonesia Tbk.",
        "tanggal_listing": "1996-07-09T00:00:00",
        "jumlah_saham": 595000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CENT",
        "nama_emiten": "Centratama Telekomunikasi Indo",
        "tanggal_listing": "2001-11-01T00:00:00",
        "jumlah_saham": 31183464900,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CFIN",
        "nama_emiten": "Clipan Finance Indonesia Tbk.",
        "tanggal_listing": "1990-08-27T00:00:00",
        "jumlah_saham": 3984520457,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CINT",
        "nama_emiten": "Chitose Internasional Tbk.",
        "tanggal_listing": "2014-06-27T00:00:00",
        "jumlah_saham": 1000000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CITA",
        "nama_emiten": "Cita Mineral Investindo Tbk.",
        "tanggal_listing": "2002-03-20T00:00:00",
        "jumlah_saham": 3960361250,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CITY",
        "nama_emiten": "Natura City Developments Tbk.",
        "tanggal_listing": "2018-09-28T00:00:00",
        "jumlah_saham": 5404704955,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CLAY",
        "nama_emiten": "Citra Putra Realty Tbk.",
        "tanggal_listing": "2019-01-18T00:00:00",
        "jumlah_saham": 2570000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CLEO",
        "nama_emiten": "Sariguna Primatirta Tbk.",
        "tanggal_listing": "2017-05-05T00:00:00",
        "jumlah_saham": 12000000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CLPI",
        "nama_emiten": "Colorpak Indonesia Tbk.",
        "tanggal_listing": "2001-11-30T00:00:00",
        "jumlah_saham": 306338500,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CMNP",
        "nama_emiten": "Citra Marga Nusaphala Persada",
        "tanggal_listing": "1995-01-10T00:00:00",
        "jumlah_saham": 5431247916,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CMPP",
        "nama_emiten": "AirAsia Indonesia Tbk.",
        "tanggal_listing": "1994-12-08T00:00:00",
        "jumlah_saham": 10685124441,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CNKO",
        "nama_emiten": "Exploitasi Energi Indonesia Tb",
        "tanggal_listing": "2001-11-21T00:00:00",
        "jumlah_saham": 8956361206,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CNTX",
        "nama_emiten": "Century Textile Industry Tbk.",
        "tanggal_listing": "1979-05-22T00:00:00",
        "jumlah_saham": 70000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "COCO",
        "nama_emiten": "Wahana Interfood Nusantara Tbk",
        "tanggal_listing": "2019-03-20T00:00:00",
        "jumlah_saham": 560285571,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "COWL",
        "nama_emiten": "Cowell Development Tbk.",
        "tanggal_listing": "2007-12-19T00:00:00",
        "jumlah_saham": 4871214021,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CPIN",
        "nama_emiten": "Charoen Pokphand Indonesia Tbk",
        "tanggal_listing": "1991-03-18T00:00:00",
        "jumlah_saham": 16398000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CPRI",
        "nama_emiten": "Capri Nusa Satu Properti Tbk.",
        "tanggal_listing": "2019-04-11T00:00:00",
        "jumlah_saham": 2433375005,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CPRO",
        "nama_emiten": "Central Proteina Prima Tbk.",
        "tanggal_listing": "2006-11-28T00:00:00",
        "jumlah_saham": 59572382787,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CSAP",
        "nama_emiten": "Catur Sentosa Adiprana Tbk.",
        "tanggal_listing": "2007-12-12T00:00:00",
        "jumlah_saham": 4458352920,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CSIS",
        "nama_emiten": "Cahayasakti Investindo Sukses",
        "tanggal_listing": "2017-05-10T00:00:00",
        "jumlah_saham": 1307000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CSMI",
        "nama_emiten": "Cipta Selera Murni Tbk.",
        "tanggal_listing": "2020-04-09T00:00:00",
        "jumlah_saham": 816061500,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CSRA",
        "nama_emiten": "Cisadane Sawit Raya Tbk.",
        "tanggal_listing": "2020-01-09T00:00:00",
        "jumlah_saham": 2050000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "CTBN",
        "nama_emiten": "Citra Tubindo Tbk.",
        "tanggal_listing": "1989-11-28T00:00:00",
        "jumlah_saham": 800371500,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CTRA",
        "nama_emiten": "Ciputra Development Tbk.",
        "tanggal_listing": "1994-03-28T00:00:00",
        "jumlah_saham": 18560303397,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "CTTH",
        "nama_emiten": "Citatah Tbk.",
        "tanggal_listing": "1996-07-03T00:00:00",
        "jumlah_saham": 1230839821,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DADA",
        "nama_emiten": "Diamond Citra Propertindo Tbk.",
        "tanggal_listing": "2020-02-14T00:00:00",
        "jumlah_saham": 7177000307,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DART",
        "nama_emiten": "Duta Anggada Realty Tbk.",
        "tanggal_listing": "1990-05-08T00:00:00",
        "jumlah_saham": 3141390962,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DAYA",
        "nama_emiten": "Duta Intidaya Tbk.",
        "tanggal_listing": "2016-06-28T00:00:00",
        "jumlah_saham": 2420547025,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DCII",
        "nama_emiten": "DCI Indonesia Tbk.",
        "tanggal_listing": "2021-01-06T00:00:00",
        "jumlah_saham": 2383745900,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DEAL",
        "nama_emiten": "Dewata Freightinternational Tb",
        "tanggal_listing": "2018-11-09T00:00:00",
        "jumlah_saham": 1132748019,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DEFI",
        "nama_emiten": "Danasupra Erapacific Tbk.",
        "tanggal_listing": "2001-07-06T00:00:00",
        "jumlah_saham": 687266666,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DEWA",
        "nama_emiten": "Darma Henwa Tbk",
        "tanggal_listing": "2007-09-26T00:00:00",
        "jumlah_saham": 21853733792,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DFAM",
        "nama_emiten": "Dafam Property Indonesia Tbk.",
        "tanggal_listing": "2018-04-27T00:00:00",
        "jumlah_saham": 1899788650,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DGIK",
        "nama_emiten": "Nusa Konstruksi Enjiniring Tbk",
        "tanggal_listing": "2007-12-19T00:00:00",
        "jumlah_saham": 5541165000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DGNS",
        "nama_emiten": "Diagnos Laboratorium Utama Tbk",
        "tanggal_listing": "2021-01-15T00:00:00",
        "jumlah_saham": 1250000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DIGI",
        "nama_emiten": "Arkadia Digital Media Tbk.",
        "tanggal_listing": "2018-09-18T00:00:00",
        "jumlah_saham": 1625000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DILD",
        "nama_emiten": "Intiland Development Tbk.",
        "tanggal_listing": "1991-09-04T00:00:00",
        "jumlah_saham": 10365854185,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DIVA",
        "nama_emiten": "Distribusi Voucher Nusantara T",
        "tanggal_listing": "2018-11-27T00:00:00",
        "jumlah_saham": 714285700,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DKFT",
        "nama_emiten": "Central Omega Resources Tbk.",
        "tanggal_listing": "1997-11-21T00:00:00",
        "jumlah_saham": 5638246600,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DLTA",
        "nama_emiten": "Delta Djakarta Tbk.",
        "tanggal_listing": "1984-02-27T00:00:00",
        "jumlah_saham": 800659050,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DMAS",
        "nama_emiten": "Puradelta Lestari Tbk.",
        "tanggal_listing": "2015-05-29T00:00:00",
        "jumlah_saham": 48198111100,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DMMX",
        "nama_emiten": "Digital Mediatama Maxima Tbk.",
        "tanggal_listing": "2019-10-21T00:00:00",
        "jumlah_saham": 7692307700,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DMND",
        "nama_emiten": "Diamond Food Indonesia Tbk.",
        "tanggal_listing": "2020-01-22T00:00:00",
        "jumlah_saham": 9468359000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DNAR",
        "nama_emiten": "Bank Oke Indonesia Tbk.",
        "tanggal_listing": "2014-07-11T00:00:00",
        "jumlah_saham": 11447006258,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DNET",
        "nama_emiten": "Indoritel Makmur Internasional",
        "tanggal_listing": "2000-12-11T00:00:00",
        "jumlah_saham": 14184000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DOID",
        "nama_emiten": "Delta Dunia Makmur Tbk.",
        "tanggal_listing": "2001-06-15T00:00:00",
        "jumlah_saham": 8619817982,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DPNS",
        "nama_emiten": "Duta Pertiwi Nusantara Tbk.",
        "tanggal_listing": "1990-08-08T00:00:00",
        "jumlah_saham": 331129952,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DPUM",
        "nama_emiten": "Dua Putra Utama Makmur Tbk.",
        "tanggal_listing": "2015-12-08T00:00:00",
        "jumlah_saham": 4175000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DSFI",
        "nama_emiten": "Dharma Samudera Fishing Indust",
        "tanggal_listing": "2000-03-24T00:00:00",
        "jumlah_saham": 1857135500,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DSNG",
        "nama_emiten": "Dharma Satya Nusantara Tbk.",
        "tanggal_listing": "2013-06-14T00:00:00",
        "jumlah_saham": 10599842400,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DSSA",
        "nama_emiten": "Dian Swastatika Sentosa Tbk",
        "tanggal_listing": "2009-12-10T00:00:00",
        "jumlah_saham": 770552320,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DUCK",
        "nama_emiten": "Jaya Bersama Indo Tbk.",
        "tanggal_listing": "2018-10-10T00:00:00",
        "jumlah_saham": 1283330000,
        "kategori": "UTAMA"
    },
    {
        "kode_emiten": "DUTI",
        "nama_emiten": "Duta Pertiwi Tbk",
        "tanggal_listing": "1994-11-02T00:00:00",
        "jumlah_saham": 1850000000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DVLA",
        "nama_emiten": "Darya-Varia Laboratoria Tbk.",
        "tanggal_listing": "1994-11-11T00:00:00",
        "jumlah_saham": 1120000000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "DWGL",
        "nama_emiten": "Dwi Guna Laksana Tbk.",
        "tanggal_listing": "2017-12-13T00:00:00",
        "jumlah_saham": 8711599831,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "DYAN",
        "nama_emiten": "Dyandra Media International Tb",
        "tanggal_listing": "2013-03-25T00:00:00",
        "jumlah_saham": 4272964279,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "EAST",
        "nama_emiten": "Eastparc Hotel Tbk.",
        "tanggal_listing": "2019-07-09T00:00:00",
        "jumlah_saham": 4126366095,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "ECII",
        "nama_emiten": "Electronic City Indonesia Tbk.",
        "tanggal_listing": "2013-07-03T00:00:00",
        "jumlah_saham": 1334333000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "EDGE",
        "nama_emiten": "Indointernet Tbk.",
        "tanggal_listing": "2021-02-08T00:00:00",
        "jumlah_saham": 404050000,
        "kategori": "Pengembangan"
    },
    {
        "kode_emiten": "EKAD",
        "nama_emiten": "Ekadharma International Tbk.",
        "tanggal_listing": "1990-08-14T00:00:00",
        "jumlah_saham": 698775000,
        "kategori": "Utama"
    },
    {
        "kode_emiten": "ELSA",
        "nama_emiten": "Elnusa Tbk.",
        "tanggal_listing": "2008-02-06T00:00:00",
        "jumlah_saham": 7298500000,
        "kategori": "Utama"
    },
]