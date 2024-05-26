

export default async function handler(req, res) {
  const key = process.env.NEXT_PUBLIC_API_KEY
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${req.query.city}&days=5&aqi=no&alerts=no`, { mode: 'no-cors' })
    .then((e) => e.json())
    .then((ele) => res.status(200).json({ info: ele }))
}
