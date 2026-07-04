-- Typed models for the Ziptastic SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetLocationByZipcode
---@field city? string
---@field country? string
---@field state? string

---@class GetLocationByZipcodeLoadMatch
---@field id string

local M = {}

return M
