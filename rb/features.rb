# Ziptastic SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ZiptasticFeatures
  def self.make_feature(name)
    case name
    when "base"
      ZiptasticBaseFeature.new
    when "test"
      ZiptasticTestFeature.new
    else
      ZiptasticBaseFeature.new
    end
  end
end
