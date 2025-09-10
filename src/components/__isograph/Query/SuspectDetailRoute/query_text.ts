export default 'query SuspectDetailRoute($suspectId: ID!) {\
  suspect____suspectId___v_suspectId: suspect(suspectId: $suspectId) {\
    id,\
    businessAssociates {\
      description,\
      with {\
        id,\
        imageUrl,\
        shortBio,\
        suspectName,\
      },\
    },\
    businessName,\
    customerComplaints,\
    delinquentTaxes,\
    imageUrl,\
    income,\
    jobTitle,\
    longBio,\
    suspectName,\
  },\
}';