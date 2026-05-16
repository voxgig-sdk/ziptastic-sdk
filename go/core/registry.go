package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetLocationByZipcodeEntityFunc func(client *ZiptasticSDK, entopts map[string]any) ZiptasticEntity

