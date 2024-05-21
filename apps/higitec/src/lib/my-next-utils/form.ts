export const toFileArray = (val: FileList | File | File[]) =>
  Array.isArray(val)
    ? val
    : (val as FileList).length
      ? Array.from(val as FileList)
      : ([] as unknown as File[]).concat(val as unknown as File);
