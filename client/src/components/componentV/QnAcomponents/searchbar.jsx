import React, {useState} from 'react';

const SearchBar = (props) => {

const [search, updateSearch] = useState(false)
console.log(props.perma)
// console.log(props.questions)  <--- this is our array of questions to look over(use static to filter, but update questions)
// console.log(props.questions[0].answers) <----- this is our array of answers inside of each question

const handleSearch = (value) => {
  var filtered = props.perma.filter((question) => {
    if (question.question_body.toLowerCase().includes(value.toLowerCase())) {
      return question
    }
  })
  updateSearch(true)
  props.updateStatic(filtered)
  props.updateQuestions(filtered)
}

  return (
    <form className="mt-10 text text-black text-xl">
      <input type={'text'} placeholder={'Have a Question? search for answers...'} className="w-11/12 h-14" onChange={(e) => {
        if(e.target.value.length >= 3) {
          handleSearch(e.target.value);
        } else if (search) {
          props.updateStatic(props.perma)
          props.updateQuestions(props.perma)
        }
      }}/>
    </form>
  )
}


export default SearchBar;