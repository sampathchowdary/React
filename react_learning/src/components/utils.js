export const getNames = (data) => {
    const names = [];
    data.forEach(obj => {
      names.push(obj.name);
    });
    return names;
  };