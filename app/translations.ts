export const translations = {
  fi: {
    nav: {
      services: "Palvelut",
      contact: "Yhteystiedot",
    },
    hero: {
      titleLine1: "Larin Fitness",
      titleLine2: "ja Hieronta",
      intro:
        "Larin Fitness & Hieronta tarjoaa hoitavaa hierontaa Lohjan keskustassa – keholle, jonka haluat kestävän arjessa ja urheilussa.",
      location:
        "Rauhallinen hierontavastaanotto rannan tuntumassa, johon on helppo saapua oman sisäänkäynnin kautta.",
      perk1:
        "⭐ Vakioasiakkaana sinulla on mahdollisuus hierontaan myös viikonloppuisin.",
      perk2: "⭐ Maksu onnistuu myös ePassilla ja Edenredillä.",
      welcome: "Tervetuloa.",
      langNote: "Service also available in English.",
    },
    services: {
      title: "Palvelut",
      intro:
        "Hoito alkaa lyhyellä tutkimisella, jossa selvitetään mistä kipu tai lihasjännitys johtuu. Näin hieronta kohdistuu oikein ja auttaa tehokkaammin. Tutkiminen ei vähennä hieronta-aikaa.",
      s1Time: "10min",
      s1Name: "Suorituspalautus",
      s1Desc:
        "Nopea kokovartalon palautuskäsittely treenin tai kilpailun jälkeen. Toteutetaan vaatteiden läpi. Mahdollinen myös joukkue- ja kenttäkäyttöön, sovittava erikseen.",
      s2Time: "30min",
      s2Name: "Hoitava täsmäkäsittely",
      s2Desc:
        "Kohdennettu hieronta valitulle alueelle. Sopii jännityksen lievittämiseen ja liikkuvuuden ylläpitoon.",
      s3Time: "45/60min",
      s3Name: "Hoitava syväkäsittely",
      s3Desc:
        "Rauhallinen ja perusteellinen hieronta alueille, jotka vaativat enemmän hoitoa – kuten niska ja hartiat, jalat sekä selkä.",
    },
    contact: {
      title: "Yhteystiedot",
      address: "Pellervonkatu 6, Lohja, 08100, Suomi",
      hours: "Aukioloajat",
      days: [
        "Maanantai",
        "Tiistai",
        "Keskiviikko",
        "Torstai",
        "Perjantai",
        "Lauantai",
        "Sunnuntai",
      ],
      closed: "Suljettu",
    },
  },
  en: {
    nav: {
      services: "Services",
      contact: "Contact",
    },
    hero: {
      titleLine1: "Larin Fitness",
      titleLine2: "ja Hieronta",
      intro:
        "Larin Fitness & Hieronta offers therapeutic massage in the center of Lohja – for a body you want to last in everyday life and sports.",
      location:
        "A peaceful massage studio near the lakefront, easy to reach with its own private entrance.",
      perk1:
        "⭐ As a regular client, you can also book massages on weekends.",
      perk2: "⭐ Payment also accepted via ePassi and Edenred.",
      welcome: "Welcome.",
      langNote: "Palvelu saatavilla myös suomeksi.",
    },
    services: {
      title: "Services",
      intro:
        "Each treatment begins with a brief assessment to determine the cause of pain or muscle tension. This ensures the massage is targeted and more effective. The assessment does not reduce your massage time.",
      s1Time: "10min",
      s1Name: "Elite Cooldown",
      s1Desc:
        "A quick full-body recovery treatment after training or competition. Performed over clothing. Also available for team and field use – to be agreed separately.",
      s2Time: "30min",
      s2Name: "Focused Care",
      s2Desc:
        "Targeted massage for a specific area. Ideal for relieving tension and maintaining mobility.",
      s3Time: "45/60min",
      s3Name: "Deep Care Session",
      s3Desc:
        "A thorough and relaxed massage for areas that need more attention – such as neck and shoulders, legs, and back.",
    },
    contact: {
      title: "Contact",
      address: "Pellervonkatu 6, Lohja, 08100, Finland",
      hours: "Opening Hours",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      closed: "Closed",
    },
  },
} as const;

export type Locale = keyof typeof translations;
