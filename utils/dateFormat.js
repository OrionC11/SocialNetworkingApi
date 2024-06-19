function dateFormat(date) {
  const d = new Date(date);
  const month = "" + (d.getMonth() + 1);
  const day = "" + d.getDate();
  const year = d.getFullYear();

  return [month.padStart(2, "0"), day.padStart(2, "0"), year].join("/");
}

module.exports = dateFormat;
