import { iso } from "@iso";

export const SuspectsCard = iso(`
  pointer Case.dirtiestDodger to Suspect ! {
    suspects {
      link
      delinquentTaxes
    }
  }
`)(function SuspectsCard({ data }) {
  console.log("diritest dodger", data);
  // Find the suspect with most delinquent taxes
  let largestDelinquentTaxes = -Infinity;
  let suspectLink = null;
  for (const suspect of data.suspects) {
    if (suspect.delinquentTaxes > largestDelinquentTaxes) {
      suspectLink = suspect.link;
      largestDelinquentTaxes = suspect.delinquentTaxes;
    }
  }
  return suspectLink;
});
