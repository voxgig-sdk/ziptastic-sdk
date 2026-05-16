# ProjectName SDK exists test

import pytest
from ziptastic_sdk import ZiptasticSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ZiptasticSDK.test(None, None)
        assert testsdk is not None
