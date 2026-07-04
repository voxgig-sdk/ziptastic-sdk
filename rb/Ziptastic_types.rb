# frozen_string_literal: true

# Typed models for the Ziptastic SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetLocationByZipcode entity data model.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
GetLocationByZipcode = Struct.new(
  :city,
  :country,
  :state,
  keyword_init: true
)

# Request payload for GetLocationByZipcode#load.
#
# @!attribute [rw] id
#   @return [String]
GetLocationByZipcodeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

