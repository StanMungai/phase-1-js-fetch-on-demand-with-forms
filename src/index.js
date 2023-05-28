const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('input#searchByID')

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then( resp => resp.json() )
      .then( data => {
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')

        title.textContent = data.title
        summary.textContent = data.summary
      })
  })
}

// const handleSubmit = (e) => {
//   e.preventDefault()
//   console.log(e.target.children[1].value)
//   const input = document.querySelector('input#searchByID')
//   console.log(input.value)
// }

document.addEventListener('DOMContentLoaded', init);