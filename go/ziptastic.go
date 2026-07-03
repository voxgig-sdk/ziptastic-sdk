package voxgigziptasticsdk

import (
	"github.com/voxgig-sdk/ziptastic-sdk/go/core"
	"github.com/voxgig-sdk/ziptastic-sdk/go/entity"
	"github.com/voxgig-sdk/ziptastic-sdk/go/feature"
	_ "github.com/voxgig-sdk/ziptastic-sdk/go/utility"
)

// Type aliases preserve external API.
type ZiptasticSDK = core.ZiptasticSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ZiptasticEntity = core.ZiptasticEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ZiptasticError = core.ZiptasticError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetLocationByZipcodeEntityFunc = func(client *core.ZiptasticSDK, entopts map[string]any) core.ZiptasticEntity {
		return entity.NewGetLocationByZipcodeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewZiptasticSDK = core.NewZiptasticSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewZiptasticSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ZiptasticSDK  { return NewZiptasticSDK(nil) }
func Test() *ZiptasticSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
