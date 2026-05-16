package core

type ZiptasticError struct {
	IsZiptasticError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewZiptasticError(code string, msg string, ctx *Context) *ZiptasticError {
	return &ZiptasticError{
		IsZiptasticError: true,
		Sdk:              "Ziptastic",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ZiptasticError) Error() string {
	return e.Msg
}
