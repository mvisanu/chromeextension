async function fetchData() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '<yourkey>',
      'X-RapidAPI-Host': '<yourhost>'
    }
  };
  
  const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Niceville&minDate=2023-03-17&maxDate=2023-03-24&page=1', options)
  const record = await res.json()

  console.log('record', record)

  document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}

fetchData();