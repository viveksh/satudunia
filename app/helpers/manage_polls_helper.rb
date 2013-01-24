module ManagePollsHelper
  def show_result(contributors, poll_options)
    array_result = []

    poll_options.each do |option|
      if contributors == 0
        string_result = number_to_percentage(0, :precision => 0)
      else
        string_result = number_to_percentage((option.hit_counter.to_f / contributors.to_f)*100, :precision => 2)
      end
      string_result << " #{option.option_desc}" 
      array_result << string_result
    end

    array_result.join('<br> ').html_safe
  end
end