namespace :update_questions_answer do
  desc "TODO"
  task :update_questions_answer => :environment do

  	Question.all.each do |question|
      users = User.all
  		@answerBody = "If Allison does move to Ferrari, it is unclear what role he would take. The team's current technical director is Pat Fry, who has been in his role for less than two years."
  		@answerBody2 = "Webber and Vettel have not found themselves battling each other on track since Sepang, but Watson believes there may still be repercussions when the situation does arise in the future."
    	if question.answers.count < 2
        Answer.create({question_id:question.id,group_id:question.group_id,user_id:users[2].id,body:@answerBody})
    		question.answer_added!
      end
      
      if question.answers.count < 2
        Answer.create({question_id:question.id,group_id:question.group_id,user_id:users[3].id,body:@answerBody2})
    	  question.answer_added!
      end
    end
  end

end
