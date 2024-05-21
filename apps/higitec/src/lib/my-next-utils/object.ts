export const objectToFormData = (
  obj: any,
  form?: FormData,
  namespace?: string,
): FormData => {
  const fd = form || new FormData();
  let formKey;

  for (let property in obj) {
    if (
      obj.hasOwnProperty(property) &&
      obj[property] !== null &&
      obj[property] !== undefined
    ) {
      if (namespace) {
        formKey = `${namespace}[${property}]`;
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File or FileList, use recursion.
      if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File) &&
        !(obj[property] instanceof FileList)
      ) {
        objectToFormData(obj[property], fd, formKey);
      } else if (obj[property] instanceof FileList) {
        // if the property is a FileList, append each file to the FormData
        for (let i = 0; i < obj[property].length; i++) {
          fd.append(formKey, obj[property].item(i));
        }
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
};
