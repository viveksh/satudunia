class Faq
  include Mongoid::Document

  field :faq_question, :type => String
  field :faq_answer, :type => String

  attr_accessible :faq_question, :faq_answer

  validates_presence_of :faq_question, :message => "Question can't be blank"
  validates_presence_of :faq_answer, :message => "Answer can't be blank"
  validates_uniqueness_of :faq_question, :message => "Question is already taken"

  default_scope desc(:faq_question)

  paginates_per 25
end