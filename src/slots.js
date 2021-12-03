const slots = [
  "Massasje når Levi sovner i kveld?",
  "Jeg rydder opp og shiner kjøkken etter lunsj!",
  "Jeg lager ekstra god middag!",
  "Fotmassasje når som helst i dag!",
  "Jeg ryddet og fikset mens du sov!",
  "Du velger film i kveld, baby <3",
  "Jeg kan hente også, så får du litt ekstra tid (kan godt lage middag etter det, hvis du vil).",
  "Velg en sang, så lærer jeg den på gitar og framfører når den er klar!",
  "Jeg gjør hva som helst for deg, uten unntak!",
  "Deleger noe kjedelig til meg som du hadde tenkt å gjøre – jeg tar det!",
  "Jeg lager Pad Thai i kveld!",
  "Massasje any way you like!",
];

export const slotsWithDefault = Array(24)
  .fill("Tom luke?!")
  .map((def, i) => slots[i] || def);
