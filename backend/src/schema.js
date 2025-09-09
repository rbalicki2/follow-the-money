import fs from "fs";
import path from "path";
import { createSchema } from "graphql-yoga";

const schemaContents = fs
  .readFileSync(path.resolve(import.meta.dirname, "../schema.graphql"))
  .toString();

const suspects = [
  {
    id: "suspect_1",
    name: "Joker",
    initials: "J",
    biography: "A psychotic anarchist criminal mastermind.",
    taxDelinquency: 0,
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
    name: "Penguin",
    initials: "P",
    biography: "A Gotham City mobster and criminal.",
    taxDelinquency: 0,
    income: 500000,
    businessName: "Iceberg Lounge",
    customerComplaints: "Bad service.",
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
    name: "Riddler",
    initials: "R",
    biography: "A criminal genius with a penchant for riddles.",
    taxDelinquency: 0,
    income: 750000,
    businessName: "Riddle Factory",
    customerComplaints: "Too many questions.",
    businessAssociates: [],
  },
  {
    id: "suspect_4",
    name: "Catwoman",
    initials: "C",
    biography: "A master burglar with a mysterious past.",
    taxDelinquency: 0,
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
    name: "Patryk Wałach",
    initials: "PW",
    biography:
      'A former fixer for a shady Gotham politician. Rose through the ranks to be head enforcer at GraphQL conf.\n\
Likes to crush his competition. Is known for loving AC/DC\'s "Dirty Deeds, Done Dirt Cheap". Except, his services are \n\
never cheap. Prone to anger.',
    taxDelinquency: 1000000,
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
    name: "Unknown Business Associate",
    initials: "UBA",
    biography:
      "A mysterious and elegant figure. Has a fondness for Chanel no. 5. Married in Capri. Rumor has it \n\
four of her previous husbands died in mysterious circumstances.",
    taxDelinquency: 0,
    income: 250000,
    businessName: "High Society",
    customerComplaints: "",
    businessAssociates: [],
  },
];

const cases = [
  {
    id: "case_1",
    name: "GraphQL Whodunnit",
    suspects: suspects.filter((suspect) => suspect.id !== "suspect_6"),
  },
  {
    id: "case_2",
    name: "Murder on the Orient Express",
    suspects: [],
  },
  {
    id: "case_3",
    name: "Mysterious Affair at Styles",
    suspects: [],
  },
];

export const schema = createSchema({
  typeDefs: schemaContents,
  resolvers: {
    Query: {
      cases: () => cases,
      case: (parent, { caseId }) => cases.find((c) => c.id === caseId),
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
      lofiImageUrl: () => null,
      hifiImageUrl: () => null,
    },
  },
});
