# Ziptastic SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ZiptasticUtility.registrar = ->(u) {
  u.clean = ZiptasticUtilities::Clean
  u.done = ZiptasticUtilities::Done
  u.make_error = ZiptasticUtilities::MakeError
  u.feature_add = ZiptasticUtilities::FeatureAdd
  u.feature_hook = ZiptasticUtilities::FeatureHook
  u.feature_init = ZiptasticUtilities::FeatureInit
  u.fetcher = ZiptasticUtilities::Fetcher
  u.make_fetch_def = ZiptasticUtilities::MakeFetchDef
  u.make_context = ZiptasticUtilities::MakeContext
  u.make_options = ZiptasticUtilities::MakeOptions
  u.make_request = ZiptasticUtilities::MakeRequest
  u.make_response = ZiptasticUtilities::MakeResponse
  u.make_result = ZiptasticUtilities::MakeResult
  u.make_point = ZiptasticUtilities::MakePoint
  u.make_spec = ZiptasticUtilities::MakeSpec
  u.make_url = ZiptasticUtilities::MakeUrl
  u.param = ZiptasticUtilities::Param
  u.prepare_auth = ZiptasticUtilities::PrepareAuth
  u.prepare_body = ZiptasticUtilities::PrepareBody
  u.prepare_headers = ZiptasticUtilities::PrepareHeaders
  u.prepare_method = ZiptasticUtilities::PrepareMethod
  u.prepare_params = ZiptasticUtilities::PrepareParams
  u.prepare_path = ZiptasticUtilities::PreparePath
  u.prepare_query = ZiptasticUtilities::PrepareQuery
  u.graphql_body = ZiptasticUtilities::GraphqlBody
  u.graphql_errors = ZiptasticUtilities::GraphqlErrors
  u.result_basic = ZiptasticUtilities::ResultBasic
  u.result_body = ZiptasticUtilities::ResultBody
  u.result_headers = ZiptasticUtilities::ResultHeaders
  u.transform_request = ZiptasticUtilities::TransformRequest
  u.transform_response = ZiptasticUtilities::TransformResponse
}
