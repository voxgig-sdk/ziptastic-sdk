# Ziptastic SDK exists test

require "minitest/autorun"
require_relative "../Ziptastic_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ZiptasticSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
