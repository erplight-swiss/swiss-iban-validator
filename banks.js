// Schweizer Banken Clearing-Nummern Lookup
// Quelle: SIX Interbank Clearing

const SWISS_BANKS = {
  // UBS Switzerland AG
  '00230': 'UBS Switzerland AG',
  '00231': 'UBS Switzerland AG',
  '00232': 'UBS Switzerland AG',
  '00233': 'UBS Switzerland AG',
  '00234': 'UBS Switzerland AG',
  '00235': 'UBS Switzerland AG',
  '00236': 'UBS Switzerland AG',
  '00237': 'UBS Switzerland AG',
  '00238': 'UBS Switzerland AG',
  '00239': 'UBS Switzerland AG',
  '00240': 'UBS Switzerland AG',
  '00241': 'UBS Switzerland AG',
  '00242': 'UBS Switzerland AG',
  '00243': 'UBS Switzerland AG',
  '00244': 'UBS Switzerland AG',
  '00245': 'UBS Switzerland AG',
  '00246': 'UBS Switzerland AG',
  '00247': 'UBS Switzerland AG',
  '00248': 'UBS Switzerland AG',
  '00249': 'UBS Switzerland AG',
  '00250': 'UBS Switzerland AG',
  '00251': 'UBS Switzerland AG',
  '00252': 'UBS Switzerland AG',
  '00253': 'UBS Switzerland AG',
  '00254': 'UBS Switzerland AG',
  '00255': 'UBS Switzerland AG',
  '00256': 'UBS Switzerland AG',
  '00257': 'UBS Switzerland AG',
  '00258': 'UBS Switzerland AG',
  '00259': 'UBS Switzerland AG',

  // Credit Suisse (jetzt Teil von UBS)
  '00762': 'Credit Suisse (Schweiz) AG',
  '00763': 'Credit Suisse (Schweiz) AG',
  '00768': 'Credit Suisse (Schweiz) AG',
  '00778': 'Credit Suisse (Schweiz) AG',
  '04835': 'Credit Suisse (Schweiz) AG',

  // PostFinance AG
  '09000': 'PostFinance AG',

  // Kantonalbanken
  '00700': 'Zürcher Kantonalbank',
  '00701': 'Zürcher Kantonalbank',
  '00702': 'Zürcher Kantonalbank',
  '00703': 'Zürcher Kantonalbank',
  '00704': 'Zürcher Kantonalbank',
  '00705': 'Zürcher Kantonalbank',
  '00710': 'Zürcher Kantonalbank',
  '00711': 'Zürcher Kantonalbank',
  '00715': 'Zürcher Kantonalbank',
  '00720': 'Zürcher Kantonalbank',
  '00721': 'Zürcher Kantonalbank',
  '00722': 'Zürcher Kantonalbank',
  '00723': 'Zürcher Kantonalbank',
  '00724': 'Zürcher Kantonalbank',
  '00725': 'Zürcher Kantonalbank',
  '00726': 'Zürcher Kantonalbank',
  '00727': 'Zürcher Kantonalbank',
  '00728': 'Zürcher Kantonalbank',
  '00729': 'Zürcher Kantonalbank',
  '00730': 'Zürcher Kantonalbank',
  '00732': 'Zürcher Kantonalbank',
  '00733': 'Zürcher Kantonalbank',
  '00734': 'Zürcher Kantonalbank',
  '00735': 'Zürcher Kantonalbank',
  '00736': 'Zürcher Kantonalbank',
  '00737': 'Zürcher Kantonalbank',
  '00738': 'Zürcher Kantonalbank',
  '00739': 'Zürcher Kantonalbank',
  '00740': 'Zürcher Kantonalbank',
  '00750': 'Zürcher Kantonalbank',
  '00751': 'Zürcher Kantonalbank',
  '00752': 'Zürcher Kantonalbank',

  '00764': 'Aargauische Kantonalbank',
  '00765': 'Basler Kantonalbank',
  '00766': 'St. Galler Kantonalbank',
  '00767': 'Graubündner Kantonalbank',
  '00769': 'Luzerner Kantonalbank',
  '00770': 'Thurgauer Kantonalbank',
  '00771': 'Schwyzer Kantonalbank',
  '00772': 'Basellandschaftliche Kantonalbank',
  '00773': 'Zuger Kantonalbank',
  '00774': 'Schaffhauser Kantonalbank',
  '00775': 'Appenzeller Kantonalbank',
  '00776': 'Nidwaldner Kantonalbank',
  '00777': 'Berner Kantonalbank',
  '00779': 'Glarner Kantonalbank',
  '00780': 'Obwaldner Kantonalbank',
  '00781': 'Urner Kantonalbank',
  '00782': 'Banque Cantonale de Genève',
  '00783': 'Banque Cantonale Vaudoise',
  '00784': 'Banque Cantonale de Fribourg',
  '00785': 'Banque Cantonale du Valais',
  '00786': 'Banque Cantonale Neuchâteloise',
  '00787': 'Banque Cantonale du Jura',
  '00788': 'Banca dello Stato del Cantone Ticino',

  // Raiffeisen Schweiz
  '80000': 'Raiffeisen Schweiz',
  '80001': 'Raiffeisen Schweiz',
  '80002': 'Raiffeisen Schweiz',
  '80003': 'Raiffeisen Schweiz',
  '80004': 'Raiffeisen Schweiz',
  '80005': 'Raiffeisen Schweiz',
  '80006': 'Raiffeisen Schweiz',
  '80007': 'Raiffeisen Schweiz',
  '80008': 'Raiffeisen Schweiz',
  '80009': 'Raiffeisen Schweiz',
  '80080': 'Raiffeisen Schweiz',
  '80808': 'Raiffeisen Schweiz',
  '08080': 'Raiffeisen Schweiz',
  '08081': 'Raiffeisen Schweiz',

  // Migros Bank
  '08401': 'Migros Bank AG',
  '08402': 'Migros Bank AG',
  '08403': 'Migros Bank AG',

  // Bank Cler (ex. Bank Coop)
  '08440': 'Bank Cler AG',
  '08441': 'Bank Cler AG',
  '08442': 'Bank Cler AG',

  // Valiant Bank
  '06300': 'Valiant Bank AG',
  '06301': 'Valiant Bank AG',
  '06302': 'Valiant Bank AG',

  // Banque Cantonale de Genève
  '00788': 'Banca dello Stato del Cantone Ticino',

  // Alternative Bank Schweiz
  '08390': 'Alternative Bank Schweiz AG',

  // WIR Bank
  '08720': 'WIR Bank Genossenschaft',

  // Clientis Banken
  '08560': 'Clientis AG',

  // Hypothekarbank Lenzburg
  '08780': 'Hypothekarbank Lenzburg AG',

  // Swissquote Bank
  '08950': 'Swissquote Bank SA',

  // QR-IBAN Bereich (30000-31999)
  '30000': 'PostFinance AG (QR)',
  '30001': 'PostFinance AG (QR)',
  '30002': 'PostFinance AG (QR)',
  '30003': 'PostFinance AG (QR)',
  '30004': 'PostFinance AG (QR)',
  '30005': 'PostFinance AG (QR)',
  '30006': 'PostFinance AG (QR)',
  '30007': 'PostFinance AG (QR)',
  '30008': 'PostFinance AG (QR)',
  '30009': 'PostFinance AG (QR)',
  '30010': 'PostFinance AG (QR)',
  '30020': 'PostFinance AG (QR)',
  '30050': 'PostFinance AG (QR)',
  '30100': 'PostFinance AG (QR)',
  '30200': 'PostFinance AG (QR)',
  '30300': 'PostFinance AG (QR)',
  '30400': 'PostFinance AG (QR)',
  '30500': 'PostFinance AG (QR)',
  '30600': 'PostFinance AG (QR)',
  '30700': 'PostFinance AG (QR)',
  '30800': 'PostFinance AG (QR)',
  '30808': 'Raiffeisen Schweiz (QR)',
  '30900': 'PostFinance AG (QR)',
  '31000': 'UBS Switzerland AG (QR)',
  '31001': 'UBS Switzerland AG (QR)',
  '31002': 'UBS Switzerland AG (QR)',
  '31003': 'UBS Switzerland AG (QR)',
  '31004': 'UBS Switzerland AG (QR)',
  '31005': 'UBS Switzerland AG (QR)',
  '31010': 'UBS Switzerland AG (QR)',
  '31020': 'UBS Switzerland AG (QR)',
  '31050': 'UBS Switzerland AG (QR)',
  '31100': 'Credit Suisse (Schweiz) AG (QR)',
  '31200': 'Zürcher Kantonalbank (QR)',
  '31300': 'Raiffeisen Schweiz (QR)',
  '31400': 'Berner Kantonalbank (QR)',
  '31500': 'Basler Kantonalbank (QR)',
  '31600': 'St. Galler Kantonalbank (QR)',
  '31700': 'Luzerner Kantonalbank (QR)',
  '31800': 'Aargauische Kantonalbank (QR)',
  '31900': 'Thurgauer Kantonalbank (QR)',
};

// Prefix-Mapping für unbekannte Clearing-Nummern
const BANK_PREFIXES = {
  '002': 'UBS Switzerland AG',
  '007': 'Kantonalbank',
  '080': 'Raiffeisen Schweiz',
  '084': 'Migros Bank / Bank Cler',
  '090': 'PostFinance AG',
  '300': 'PostFinance AG (QR)',
  '310': 'UBS Switzerland AG (QR)',
  '311': 'Credit Suisse (QR)',
  '312': 'Zürcher Kantonalbank (QR)',
  '313': 'Raiffeisen Schweiz (QR)',
};

function getBankName(clearingNr) {
  // Exakte Suche
  if (SWISS_BANKS[clearingNr]) {
    return SWISS_BANKS[clearingNr];
  }

  // Prefix-Suche (erste 3 Ziffern)
  const prefix = clearingNr.slice(0, 3);
  if (BANK_PREFIXES[prefix]) {
    return BANK_PREFIXES[prefix];
  }

  // Fallback für bekannte Bereiche
  const numericClearing = parseInt(clearingNr, 10);

  // QR-IBAN Bereich
  if (numericClearing >= 30000 && numericClearing <= 31999) {
    return 'Schweizer Bank (QR-IBAN)';
  }

  // Standard Bereich
  return 'Schweizer Bank';
}
