export const getNames = (data) => {
    const names = [];
    data.forEach(obj => {
      names.push(obj.name);
    });
    // for (const obj of data) {
    //   console.log(obj.name);
    // }
    return names;
  };