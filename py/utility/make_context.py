# Ziptastic SDK utility: make_context

from core.context import ZiptasticContext


def make_context_util(ctxmap, basectx):
    return ZiptasticContext(ctxmap, basectx)
