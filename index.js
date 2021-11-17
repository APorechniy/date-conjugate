const returned = (number, type) => {
  if (Array.isArray(type)) {
    if (number === '1') {
      return `${number} ${type[0]}`
    }

    if (number === '2' || number === '3' || number === '4') {
      return `${number} ${type[1]}`
    }

    if (
      number === '5' ||
      number === '6' ||
      number === '7' ||
      number === '8' ||
      number === '9' ||
      number === '0'
    ) {
      return `${number} ${type[2]}`
    }
  }
  else {
    console.log('Error: types not includes your type')
  }
}

export const dateConjugate = (number, type) => {
  const lastNumber = number.toString().slice(-1)
  let typeArray;
  switch (type) {
    case 'day':
      typeArray = ['день', 'дня', 'дней']
      return returned(lastNumber, typeArray)
      break;  
    case 'month':
      typeArray = ['месяц', 'месяца', 'месяцев']
      return returned(lastNumber, typeArray)
      break;  
    case 'year':
      typeArray = ['год', 'года', 'лет']
      return returned(lastNumber, typeArray)
      break;  
    default:
      break;
  }
}
