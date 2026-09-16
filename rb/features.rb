# Ziptastic SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ZiptasticFeatures
  def self.make_feature(name)
    case name
    when "base"
      ZiptasticBaseFeature.new
    when "ratelimit"
      ZiptasticRatelimitFeature.new
    when "retry"
      ZiptasticRetryFeature.new
    when "test"
      ZiptasticTestFeature.new
    when "timeout"
      ZiptasticTimeoutFeature.new
    else
      ZiptasticBaseFeature.new
    end
  end
end
