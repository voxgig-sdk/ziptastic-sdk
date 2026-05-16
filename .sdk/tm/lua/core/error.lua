-- Ziptastic SDK error

local ZiptasticError = {}
ZiptasticError.__index = ZiptasticError


function ZiptasticError.new(code, msg, ctx)
  local self = setmetatable({}, ZiptasticError)
  self.is_sdk_error = true
  self.sdk = "Ziptastic"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ZiptasticError:error()
  return self.msg
end


function ZiptasticError:__tostring()
  return self.msg
end


return ZiptasticError
