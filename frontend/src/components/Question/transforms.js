// 1. We should deal with the fact that nullable GraphQL fields can be null in responses
//    and set them to be empty strings. Same applies for any other optional property
// 2. We should convert empty string values back to undefined or null or whatever
//    the API’s contract is
// 3. Inputs can export parsing and formatting helpers used here. Our internal MoneyInput
//    for instance has a static MoneyInput.parseMoneyValue and MoneyInput.convertToMoneyValue
//    to be used here
export const responseToFormValues = response => ({
  type: response.type,
  wording: response.wording,
  imageUrl: response.imageUrl,
});

export const formValuesToRequest = values => ({
  type: values.type,
  wording: values.wording,
  imageUrl: values.imageUrl,
});