import fs from "fs";
import path from "path";
import { createSchema } from "graphql-yoga";

const schemaContents = fs
  .readFileSync(path.resolve(import.meta.dirname, "../schema.graphql"))
  .toString();

const suspects = [
  {
    id: "suspect_1",
    suspectName: "The Joker",
    jobTitle: "entertainer",
    imageUrl: "http://localhost:3000/joker.jpg",
    longBio:
      "The Joker is a comedian with a flair for the dramatic, particularly when it comes to chaos. He believes the world is a stage, and he's just here to make everyone laugh—even if the punchline is a bit explosive. His hobbies include grand larceny, unsettling smiles, and a deep-seated rivalry with a certain caped crusader who just doesn't appreciate a good joke.",
    initials: "TJ",
    shortBio: "A psychotic anarchist criminal mastermind.",
    delinquentTaxes: 1000,
    income: 1000000,
    businessName: "Ace Chemicals",
    customerComplaints: "Too many explosions.",
    businessAssociates: [
      {
        description: "Often works with",
        with: "suspect_2", // Using suspect ID for the relationship
      },
    ],
  },
  {
    id: "suspect_2",
    suspectName: "The Penguin",
    jobTitle: "Politician",
    imageUrl: "http://localhost:3000/penguin.jpg",
    longBio:
      "A short, rotund man with a penchant for high society and umbrellas, the Penguin is a crime lord who runs his empire with a twisted sense of decorum. He sees himself as a refined gentleman of the underworld, often hosting lavish parties while secretly orchestrating the city's most elaborate heists. He's a bit of a control freak, a germaphobe, and a bird enthusiast, often seen surrounded by his feathery friends who serve as both companions and criminal accomplices.",
    initials: "TP",
    shortBio: "A Gotham City mobster and criminal.",
    delinquentTaxes: 10000000,
    income: 500000,
    businessName: "Iceberg Lounge",
    customerComplaints:
      "Penguins ate all the food, none left for party guests.",
    businessAssociates: [
      {
        description: "Has a rivalry with",
        with: "suspect_3", // Riddler
      },
      {
        description: "Has an uneasy alliance with",
        with: "suspect_1", // Joker
      },
    ],
  },
  {
    id: "suspect_3",
    suspectName: "The Riddler",
    imageUrl: "http://localhost:3000/riddler.jpg",
    initials: "TR",
    longBio:
      " A man of exceptional intellect, the Riddler spends his days proving he's the smartest person in any room, especially if that room is a crime scene. His elaborate schemes are less about profit and more about an intellectual high-five with himself. He's a stickler for proper grammar and a good puzzle, and he'll never miss an opportunity to leave a clue—or a very confusing note—just for fun.",
    jobTitle: "Entertainer",
    shortBio: "A criminal genius with a penchant for riddles.",
    delinquentTaxes: 500,
    income: 750000,
    businessName: "Riddle Factory",
    customerComplaints: "Too many questions.",
    businessAssociates: [],
  },
  {
    id: "suspect_4",
    suspectName: "Catwoman",
    jobTitle: "Mousecatcher",
    longBio:
      "A master thief with nine lives and an undeniable charm, Catwoman is a morally ambiguous character who lives by her own set of rules. She's a cat burglar who's as likely to steal a priceless gem as she is to save a stray kitten. She's also a big fan of bats, especially the masked ones, and she enjoys a playful, flirtatious dance with them while pilfering their gadgets.",
    imageUrl: "http://localhost:3000/catwoman.jpg",
    initials: "CW",
    shortBio: "A master burglar with a mysterious past.",
    delinquentTaxes: 300,
    income: 300000,
    businessName: "Cat Burglar Inc.",
    customerComplaints: "Stolen goods.",
    businessAssociates: [
      {
        description: "Has a past history with",
        with: "suspect_6", // The Dame
      },
    ],
  },
  {
    id: "suspect_5",
    suspectName: "Patryk Wałach",
    imageUrl: "http://localhost:3000/patryk.jpg",
    initials: "PW",
    jobTitle: "Fixer",
    shortBio: "A former fixer with a suspicious past.",
    longBio:
      'A former fixer for a shady Gotham politician. Rose through the ranks to be head enforcer at GraphQL conf.\n\
Likes to crush his competition. Is known for loving AC/DC\'s "Dirty Deeds, Done Dirt Cheap". Except, his services are \n\
never cheap. Prone to anger.',
    delinquentTaxes: 10000,
    income: 500000,
    businessName: "GraphQL Schema Migrations, Inc.",
    customerComplaints: "Dirty Schemas",
    businessAssociates: [
      {
        description: "Ex-business partner",
        with: "suspect_6",
      },
    ],
  },
  {
    id: "suspect_6",
    suspectName: "Unknown Person",
    imageUrl: "http://localhost:3000/kerry.jpg",
    initials: "UBA",
    jobTitle: "Unknown",
    shortBio:
      "A mysterious and elegant figure. Has a fondness for Chanel no. 5. Married in Capri. Rumor has it \n\
four of her previous husbands died in mysterious circumstances.",
    delinquentTaxes: 0,
    income: 250000,
    businessName: "High Society",
    customerComplaints: "",
    businessAssociates: [],
  },
  {
    id: "suspect_7",
    suspectName: "Two Face",
    jobTitle: "Rhetorician",
    longBio:
      "Formerly a respected District Attorney, Two-Face is now a man of two halves, both literally and figuratively. His life is governed by the flip of a coin, a single, scarred silver dollar that decides his every move. He's a walking contradiction, capable of both incredible generosity and devastating cruelty, but at least you know one thing for sure: he's always fair. He’s also a big advocate for personal freedom, as long as that freedom is determined by a random toss of a coin.",
    imageUrl: "http://localhost:3000/twoface.jpg",
    initials: "TF",
    shortBio: "Everyone loves him.",
    delinquentTaxes: 0,
    income: 300000,
    businessName: "Two Face Inc.",
    customerComplaints: "Lies a lot.",
    businessAssociates: [],
  },
];

const cases = [
  {
    id: "case_1",
    caseName: "GraphQL Whodunnit",
    suspects: suspects.filter((suspect) => suspect.id !== "suspect_6"),
  },
  {
    id: "case_2",
    caseName: "Murder on the Orient Express",
    suspects: [],
  },
  {
    id: "case_3",
    caseName: "Mysterious Affair at Styles",
    suspects: [],
  },
];

export const schema = createSchema({
  typeDefs: schemaContents,
  resolvers: {
    Query: {
      cases: () => cases,
      case: (parent, { caseId }) => cases.find((c) => c.id === caseId),
      suspect: (parent, { suspectId }) =>
        suspects.find((s) => s.id === suspectId),
      node: (parent, { id }) => {
        const foundCase = cases.find((c) => c.id === id);
        if (foundCase) {
          return { ...foundCase, __typename: "Case" };
        }
        const foundSuspect = suspects.find((s) => s.id === id);
        if (foundSuspect) {
          return { ...foundSuspect, __typename: "Suspect" };
        }
        return null;
      },
    },
    Suspect: {
      businessAssociates: (parent) => {
        // Find the suspect's full data object from the main suspects array
        const suspectData = suspects.find((s) => s.id === parent.id);
        if (!suspectData || !suspectData.businessAssociates) {
          return [];
        }

        // Map the IDs in businessAssociates to the actual suspect objects
        return suspectData.businessAssociates.map((assoc) => ({
          ...assoc,
          with: suspects.find((s) => s.id === assoc.with),
        }));
      },
    },
  },
});
