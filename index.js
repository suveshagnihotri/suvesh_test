/**
 * @Author: Suvesh Agnihotri <suveshagnihotri>
 * @Date:   2019-03-07T16:54:41+05:30
 * @Last modified by:   suveshagnihotri
 * @Last modified time: 2019-03-07T16:54:57+05:30
 */



module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
