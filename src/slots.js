const slots = [
  "Massasje når Levi sovner i kveld?",
  "Jeg rydder opp og shiner kjøkken etter lunsj!",
  "Jeg lager ekstra god middag!",
  "Fotmassasje når som helst i dag!",
  "Velg en sang, så lærer jeg den på gitar og framfører når den er klar!",
  "Du velger film i kveld, baby <3",
  "Overraskelse når du kommer hjem fra byen i dag!",
  "Jeg gjør hva som helst for deg, uten unntak!",
  "Deleger noe kjedelig til meg som du hadde tenkt å gjøre – jeg tar det!",
  "Massasje any way you like!",
  "Jeg lager Pad Thai i kveld!",
  "Jeg ryddet og fikset mens du sov!",
  "Jeg kan hente også, så får du litt ekstra tid (kan godt lage middag etter det, hvis du vil).",
  "Jeg kjører et flyttelass for oss på frikvelden min :)",
  "Jeg tar kidsa og lager middag",
  "Massasje på benk (ikke valgfritt)",
  "Jeg står opp med jentene i morgen (hvis nødvendig), og tar Levi med meg hvis han våkner tidlig. Du kan sove til 9:30!",
  "Jeg lager middag og tar oppvasken i kveld mens du legger Levi!",
  "Overraskelse i kveld!",
  "Sushi når kidsa har lagt seg :D",
  "Deleger et kjedelig punkt eller to fra lista, så tar jeg det med et smil. For real.",
];

export const slotsWithDefault = Array(24)
  .fill("Tom luke?!")
  .map((def, i) => slots[i] || def);
