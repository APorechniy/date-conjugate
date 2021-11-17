const returned = (number, type) => {
  if (Array.isArray(type)) {
    if (lastNumber === '1') {
      return `${number} ${type[0]}`
    }

    if (lastNumber === '2' || lastNumber === '3' || lastNumber === '4') {
      return `${number} ${type[1]}`
    }

    if (
      lastNumber === '5' ||
      lastNumber === '6' ||
      lastNumber === '7' ||
      lastNumber === '8' ||
      lastNumber === '9' ||
      lastNumber === '0'
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
