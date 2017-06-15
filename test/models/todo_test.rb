# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  done       :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
