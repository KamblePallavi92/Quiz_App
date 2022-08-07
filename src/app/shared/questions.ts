
export interface OptionsInterface{
  optionText:string,
  optionNo:number
}

export interface QuestionsInterface{
    questionId:number,
    question:string,
    option1:OptionsInterface,
    option2:OptionsInterface,
    option3:OptionsInterface,
    option4:OptionsInterface,
    answer:number
  }

export interface TopicsInterface{
  topicId:number,
  topicName:string,
  Questions:QuestionsInterface[]
}

