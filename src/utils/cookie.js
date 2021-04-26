const cookie = {
  create(name, value, expiresDay) {
    if (typeof expiresDay !== 'number') return;

    const exdate = new Date();
    exdate.setDate(exdate.getDate() + expiresDay);

    document.cookie = `${name}=${value}; expires=${exdate.toUTCString()}`;
  },
  delete(name) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() - 1);
    document.cookie = `${name}=''; expires=${new Date().toUTCString()}`;
  },
};

export default cookie;
