export default 'query CaseDetailRoute($caseId: ID!) {\
  case____caseId___v_caseId: case(caseId: $caseId) {\
    id,\
    caseName,\
    suspects {\
      id,\
      businessName,\
      delinquentTaxes,\
      imageUrl,\
      jobTitle,\
      shortBio,\
      suspectName,\
    },\
  },\
}';