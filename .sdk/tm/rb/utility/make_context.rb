# Ziptastic SDK utility: make_context
require_relative '../core/context'
module ZiptasticUtilities
  MakeContext = ->(ctxmap, basectx) {
    ZiptasticContext.new(ctxmap, basectx)
  }
end
