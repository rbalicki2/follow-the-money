export default 'query CaseDetailRoute($id: ID!) {\
  case____caseId___v_id: case(caseId: $id) {\
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