montageDefine("46b7068","core/converter/upper-case-converter",{dependencies:["./converter"],factory:function(e,r,n){var t=e("./converter").Converter;r.UpperCaseConverter=t.specialize({_convert:{value:function(e){return e&&"string"==typeof e&&e.toUpperCase?e.toUpperCase():e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}});