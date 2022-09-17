const slugify = require("..");

test("slugify persian correctly", () => {
  expect(slugify("عنوان پست آزمایشی")).toBe("عنوان-پست-آزمایشی");
});

test("replace arabic chars", () => {
  expect(slugify("تَاء مَرْبُوطَة")).toBe("تا-مربوطه");

  const charMap = {
    ة: "ه",
    ك: "ک",
    ي: "ی",
    ؤ: "و",
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
  };
  for (const ch in charMap) {
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

test("replace persian chars", () => {
  expect(slugify("سلام دـــــــــنیا")).toBe("سلام-دنیا");

  const charMap = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };
  for (const ch in charMap) {
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

// test cases from https://github.com/simov/slugify
// see their license for more info: https://github.com/simov/slugify/blob/master/LICENSE

test("throws", () => {
  expect(() => {
    slugify(undefined);
  }).toThrow();
});

test("replace whitespaces with replacement", () => {
  expect(slugify("foo bar baz")).toBe("foo-bar-baz");
});

test("remove duplicates of the replacement character", () => {
  expect(slugify("foo , bar")).toBe("foo-bar");
});

test("remove trailing space if any", () => {
  expect(slugify(" foo bar baz ")).toBe("foo-bar-baz");
});

test("remove not allowed chars", () => {
  expect(slugify("foo, bar baz")).toBe("foo-bar-baz");
  expect(slugify("foo- bar baz")).toBe("foo-bar-baz");
  expect(slugify("foo] bar baz")).toBe("foo-bar-baz");
  expect(slugify("foo  bar--baz")).toBe("foo-bar-baz");
});

test("options.replacement", () => {
  expect(slugify("foo bar baz", "_")).toBe("foo_bar_baz");
});

test("options.replacement - empty string", () => {
  expect(slugify("foo bar baz", "")).toBe("foobarbaz");
});

test("replace latin chars", () => {
  const charMap = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    Æ: "AE",
    Ç: "C",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    Ð: "D",
    Ñ: "N",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ő: "O",
    Ø: "O",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    Ű: "U",
    Ý: "Y",
    Þ: "TH",
    ß: "ss",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    æ: "ae",
    ç: "c",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    ð: "d",
    ñ: "n",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ő: "o",
    ø: "o",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    ű: "u",
    ý: "y",
    þ: "th",
    ÿ: "y",
    ẞ: "SS",
  };
  for (const ch in charMap) {
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

test("replace greek chars", () => {
  const charMap = {
    α: "a",
    β: "b",
    γ: "g",
    δ: "d",
    ε: "e",
    ζ: "z",
    η: "h",
    θ: "8",
    ι: "i",
    κ: "k",
    λ: "l",
    μ: "m",
    ν: "n",
    ξ: "3",
    ο: "o",
    π: "p",
    ρ: "r",
    σ: "s",
    τ: "t",
    υ: "y",
    φ: "f",
    χ: "x",
    ψ: "ps",
    ω: "w",
    ά: "a",
    έ: "e",
    ί: "i",
    ό: "o",
    ύ: "y",
    ή: "h",
    ώ: "w",
    ς: "s",
    ϊ: "i",
    ΰ: "y",
    ϋ: "y",
    ΐ: "i",
    Α: "A",
    Β: "B",
    Γ: "G",
    Δ: "D",
    Ε: "E",
    Ζ: "Z",
    Η: "H",
    Θ: "8",
    Ι: "I",
    Κ: "K",
    Λ: "L",
    Μ: "M",
    Ν: "N",
    Ξ: "3",
    Ο: "O",
    Π: "P",
    Ρ: "R",
    Σ: "S",
    Τ: "T",
    Υ: "Y",
    Φ: "F",
    Χ: "X",
    Ψ: "PS",
    Ω: "W",
    Ά: "A",
    Έ: "E",
    Ί: "I",
    Ό: "O",
    Ύ: "Y",
    Ή: "H",
    Ώ: "W",
    Ϊ: "I",
    Ϋ: "Y",
  };
  for (const ch in charMap) {
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

test("replace turkish chars", () => {
  const charMap = {
    ş: "s",
    Ş: "S",
    ı: "i",
    İ: "I",
    ç: "c",
    Ç: "C",
    ü: "u",
    Ü: "U",
    ö: "o",
    Ö: "O",
    ğ: "g",
    Ğ: "G",
  };
  for (const ch in charMap) {
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

test("replace cyrillic chars", () => {
  const charMap = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "j",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sh",
    ъ: "u",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "Yo",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "J",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sh",
    Ъ: "U",
    Ы: "Y",
    Ь: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
    Є: "Ye",
    І: "I",
    Ї: "Yi",
    Ґ: "G",
    є: "ye",
    і: "i",
    ї: "yi",
    ґ: "g",
  };
  for (const ch in charMap) {
    let expected = "foo-" + charMap[ch] + "-bar-baz";
    if (!charMap[ch]) {
      expected = "foo-bar-baz";
    }
    expect(slugify("foo " + ch + " bar baz")).toBe(expected.toLowerCase());
  }
});

test("replace kazakh cyrillic chars", () => {
  const charMap = {
    Ә: "AE",
    ә: "ae",
    Ғ: "GH",
    ғ: "gh",
    Қ: "KH",
    қ: "kh",
    Ң: "NG",
    ң: "ng",
    Ү: "UE",
    ү: "ue",
    Ұ: "U",
    ұ: "u",
    Һ: "H",
    һ: "h",
    Ө: "OE",
    ө: "oe",
  };
  for (const ch in charMap) {
    let expected = "foo-" + charMap[ch] + "-bar-baz";
    if (!charMap[ch]) {
      expected = "foo-bar-baz";
    }
    expect(slugify("foo " + ch + " bar baz")).toBe(expected.toLowerCase());
  }
});

test("replace czech chars", () => {
  const charMap = {
    č: "c",
    ď: "d",
    ě: "e",
    ň: "n",
    ř: "r",
    š: "s",
    ť: "t",
    ů: "u",
    ž: "z",
    Č: "C",
    Ď: "D",
    Ě: "E",
    Ň: "N",
    Ř: "R",
    Š: "S",
    Ť: "T",
    Ů: "U",
    Ž: "Z",
  };
  for (const ch in charMap) {
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

test("replace polish chars", () => {
  const charMap = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
    Ą: "A",
    Ć: "C",
    Ę: "e",
    Ł: "L",
    Ń: "N",
    Ś: "S",
    Ź: "Z",
    Ż: "Z",
  };
  for (const ch in charMap) {
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

test("replace latvian chars", () => {
  const charMap = {
    ā: "a",
    č: "c",
    ē: "e",
    ģ: "g",
    ī: "i",
    ķ: "k",
    ļ: "l",
    ņ: "n",
    š: "s",
    ū: "u",
    ž: "z",
    Ā: "A",
    Č: "C",
    Ē: "E",
    Ģ: "G",
    Ī: "i",
    Ķ: "k",
    Ļ: "L",
    Ņ: "N",
    Š: "S",
    Ū: "u",
    Ž: "Z",
  };
  for (const ch in charMap) {
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

test("replace serbian chars", () => {
  const charMap = {
    đ: "dj",
    ǌ: "nj",
    ǉ: "lj",
    Đ: "DJ",
    ǋ: "NJ",
    ǈ: "LJ",
    ђ: "dj",
    ј: "j",
    љ: "lj",
    њ: "nj",
    ћ: "c",
    џ: "dz",
    Ђ: "DJ",
    Ј: "J",
    Љ: "LJ",
    Њ: "NJ",
    Ћ: "C",
    Џ: "DZ",
  };
  for (const ch in charMap) {
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

test("replace currencies", () => {
  const charMap = {
    "€": "euro",
    "₢": "cruzeiro",
    "₣": "french franc",
    "£": "pound",
    "₤": "lira",
    "₥": "mill",
    "₦": "naira",
    "₧": "peseta",
    "₨": "rupee",
    "₩": "won",
    "₪": "new shequel",
    "₫": "dong",
    "₭": "kip",
    "₮": "tugrik",
    "₸": "kazakhstani tenge",
    "₯": "drachma",
    "₰": "penny",
    "₱": "peso",
    "₲": "guarani",
    "₳": "austral",
    "₴": "hryvnia",
    "₵": "cedi",
    "¢": "cent",
    "¥": "yen",
    元: "yuan",
    円: "yen",
    "﷼": "rial",
    "₠": "ecu",
    "¤": "currency",
    "฿": "baht",
    $: "dollar",
    "₽": "russian ruble",
    "₿": "bitcoin",
    "₺": "turkish lira",
  };
  for (const ch in charMap) {
    charMap[ch] = charMap[ch].replace(" ", "-");
    expect(slugify("foo " + ch + " bar baz")).toBe(
      ("foo-" + charMap[ch] + "-bar-baz").toLowerCase()
    );
  }
});

test("replace symbols", () => {
  const charMap = {
    œ: "oe",
    Œ: "OE",
    "∑": "",
    "†": "",
    "“": "",
    "”": "",
    "‘": "",
    "’": "",
    "∂": "d",
    ƒ: "f",
    "™": "tm",
    "℠": "sm",
    "…": "",
    "˚": "o",
    º: "o",
    ª: "a",
    "•": "",
    "∆": "delta",
    "∞": "infinity",
    "♥": "love",
    "&": "and",
    "|": "or",
    "<": "less",
    ">": "greater",
  };
  for (const ch in charMap) {
    let expected = "foo-" + charMap[ch] + "-bar-baz";
    if (!charMap[ch]) {
      expected = "foo-bar-baz";
    }

    expect(slugify("foo " + ch + " bar baz")).toBe(expected.toLowerCase());
  }
});

test("replaces leading and trailing replacement chars", () => {
  expect(slugify("-Come on, fhqwhgads-")).toBe("come-on-fhqwhgads");
});
