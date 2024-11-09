import axios from "axios";

const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
const data = response.data;

const today = new Date(data.Date);

const prevData = new Date(data.PreviousDate)
const prevDay = prevData.getDate()
const day = today.getDate();

const months = [
    "янв.", "фев.", "марта", "апр.", "мая", "июня",
    "июля", "авг.", "сент.", "окт.", "нояб.", "дек."
];

console.log(data);

const curValue = data.Valute.USD.Value
const prevValue = data.Valute.USD.Previous

const monthIndex = today.getMonth();
const month = months[monthIndex];

const monthIndexPrev = prevData.getMonth()
const monthPrev = months[monthIndexPrev];


export const rateTrend = [ 
    {
        date: '1 сент.',
        value: 0
    },
    {
        date: '20 окт.',
        value: 10
    },
    {
        date: `${prevDay} ${monthPrev}`,
        value: Number(prevValue.toFixed(2))
    },
    {
        date: `${day} ${month}`,
        value: Number(curValue.toFixed(2))
    }
]