export default 'query Query__dirtiestDodger($id: ID!) {\
  node____id___v_id: node(id: $id) {\
    ... on Suspect {\
      __typename,\
      id,\
      imageUrl,\
      suspectName,\
    },\
  },\
}';