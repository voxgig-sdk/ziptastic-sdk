# Ziptastic SDK feature factory

from ziptastic_sdk.feature.base_feature import ZiptasticBaseFeature
from ziptastic_sdk.feature.test_feature import ZiptasticTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ZiptasticBaseFeature(),
        "test": lambda: ZiptasticTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
