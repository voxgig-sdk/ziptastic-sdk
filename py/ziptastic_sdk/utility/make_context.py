# Ziptastic SDK utility: make_context

from ziptastic_sdk.core.context import ZiptasticContext


def make_context_util(ctxmap, basectx):
    return ZiptasticContext(ctxmap, basectx)
