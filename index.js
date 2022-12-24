const libPhoneNumber = require('libphonenumber-js');
const formatNumber = libPhoneNumber.formatNumber;

function _formatPhoneNumber(str) {
  return formatNumber({ country: 'US', phone: str }, 'National');
}

function formatPhoneNumber(str, promise = true) {
  if (promise) {
    return new Promise((resolve) => resolve(_formatPhoneNumber(str)));
  } else {
    return _formatPhoneNumber(str);
  }
}

module.exports = formatPhoneNumber;
