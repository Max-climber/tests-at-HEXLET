const set = (obj, key, value) => {
  if (Object.hasOwn(obj, key)) {
    return obj;
  } else {
    obj[key] = value;
    return obj;
  }
};

export default set;
