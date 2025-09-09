export default 'query SuspectDetailRoute($id: ID!) {\
  suspect____suspectId___v_id: suspect(suspectId: $id) {\
    id,\
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