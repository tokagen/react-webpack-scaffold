export default function (error) {
  if (error) {
    let errorObject = {};
    error.details.map((item) => {
      if (errorObject[item.path]) {
        errorObject[item.path].push(item.type);
      } else {
        errorObject[item.path] = [item.type];
      }
    });
    return errorObject;
  } else {
    return null;
  }
}
