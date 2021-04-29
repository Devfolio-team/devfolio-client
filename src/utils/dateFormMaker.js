const dateFormMaker = data => {
  const date = new Date(data);

  const dYstart = date.getFullYear();
  const dMstart = date.getMonth() + 1;
  const dDstart = date.getDate();
  const day = `${dYstart}.${dMstart}.${dDstart}`;

  return day;
};

export default dateFormMaker;
