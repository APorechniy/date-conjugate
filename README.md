# date-conjugate
Easy way to conjugate your date for Russian users

## install
npm i date-conjugate

## use
```javascript
import { dateConjugate } from 'date-conjugate'

...

return dateConjugate('2021', 'year') // returned '2021 год'
return dateConjugate('2027', 'year') // returned '2021 лет'
```

## Props

| name | type | use |
|----------------|:---------:|----------------:|
| number | number | number of date |
| type | 'year' or 'month' or 'day' | type of your number date |
