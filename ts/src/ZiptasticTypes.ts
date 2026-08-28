// Typed models for the Ziptastic SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetLocationByZipcode {
  city?: string
  country?: string
  id?: string
  state?: string
}

export interface GetLocationByZipcodeLoadMatch {
  id: string
  callback?: string
}

