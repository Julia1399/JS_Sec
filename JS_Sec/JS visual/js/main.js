function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
        const { name, value } = element
  
        return { name, value }
        })

    if (iteration === 0){
        numberOfFilms = data[0].value;
    }
    personalMovieDB.count = numberOfFilms;
    if (iteration === 0){
    countStatus(numberOfFilms)
    }
   
    if (iteration === 1){
        personalMovieDB.movies[data[1].value] = data[2].value
        console.log(personalMovieDB)
        btn.disabled = true;
    }
    applicantForm.reset() 
  }

  function countStatus(num){
    document.querySelector(".popup").style.display = 'block';
    document.querySelector(".block").style.display = 'block';
    text = document.querySelector(".status")
    if (num < 10) {
        text.textContent = 'Просмотрено довольно мало фильмов';
    } else if (num >= 10 && num < 30) {
        text.textContent = 'Вы классический зритель';
    } else if (num >= 30) {
        text.textContent = 'Вы киноман';
    } else {
        text.textContent = 'Произошла ошибка';
    }
  }

  function closeFunc(){
    let question2 = document.querySelector(".question-2").style.display = 'contents';
    let question1 = document.querySelector(".question-1").style.display = 'none';
    document.querySelector(".popup").style.display = 'none';
    document.querySelector(".block").style.display = 'none';
    btn.setAttribute('disabled', true);
    iteration = 1;
  }
  
  function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
  }

  function valueCheck(){
    if (inputFilm.value !== '' && inputRate.value !== ''){
        btn.disabled = false;
    }
  }
  function firstValueCheck(){
    if (inputCount.value !== ''){
        btn.disabled = false;
    }
  }
  
  const applicantForm = document.getElementById('movies')
  var btn = document.querySelector('.btn');
  btn.disabled = true;
  let closeBtn = document.querySelector('.close');
  const inputCount = document.getElementById('1')
  const inputFilm = document.getElementById('2');
  const inputRate = document.getElementById('3');
  inputFilm.addEventListener('mousemove', valueCheck);
  inputRate.addEventListener('mousemove', valueCheck);
  inputCount.addEventListener('mousemove', firstValueCheck);
  var numberOfFilms = '';
  var personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {}, 
      genres: [], 
      privat: false
  }
  let iteration = 0;
  closeBtn.addEventListener('click', closeFunc);
  applicantForm.addEventListener('submit', handleFormSubmit);
