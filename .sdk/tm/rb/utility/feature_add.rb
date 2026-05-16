# Ziptastic SDK utility: feature_add
module ZiptasticUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
