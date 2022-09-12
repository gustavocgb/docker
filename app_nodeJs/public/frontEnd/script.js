let btnSearch = document.getElementById('btnSearch')
btnSearch.addEventListener('click', search)
let spinner = document.querySelector('#spinner')

async function search() {

  let name = document.getElementById('name').value
  
  if (name === '') return alert('Please complete the fields ')

  spinner.setAttribute('style', 'display: inline;')

  let currentDate = new Date()
  // take three hours, because timezone
  currentDate.setHours(currentDate.getHours() - 3)

  try {
    const resp = await fetch('http://localhost:3000/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name, date: currentDate})
    })
    let respJson = await resp.json()
    if (respJson.status === 200) {
      spinner.setAttribute('style', 'display: none;')
      alert('Sent with success')
    } else if (respJson.status === 500){
      console.log('Error: 500');
      spinner.setAttribute('style', 'display: none;')
      alert('Problem with API\nError: 500')      
    }
  } catch (err) {
    spinner.setAttribute('style', 'display: none;')
    console.error(err)
    alert('Bad request.')
  }

}
