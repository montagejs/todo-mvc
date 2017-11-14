function whitespace(t){return" "===t||"\t"===t||"\r"===t||"\n"===t}function Tokenizer(t,_){this._state=TEXT,this._buffer="",this._sectionStart=0,this._index=0,this._options=t,this._special=0,this._cbs=_,this._running=!0}module.exports=Tokenizer;var i=0,TEXT=i++,BEFORE_TAG_NAME=i++,IN_TAG_NAME=i++,BEFORE_CLOSING_TAG_NAME=i++,IN_CLOSING_TAG_NAME=i++,AFTER_CLOSING_TAG_NAME=i++,BEFORE_ATTRIBUTE_NAME=i++,IN_ATTRIBUTE_NAME=i++,AFTER_ATTRIBUTE_NAME=i++,BEFORE_ATTRIBUTE_VALUE=i++,IN_ATTRIBUTE_VALUE_DOUBLE_QUOTES=i++,IN_ATTRIBUTE_VALUE_SINGLE_QUOTES=i++,IN_ATTRIBUTE_VALUE_NO_QUOTES=i++,BEFORE_DECLARATION=i++,IN_DECLARATION=i++,IN_PROCESSING_INSTRUCTION=i++,BEFORE_COMMENT=i++,IN_COMMENT=i++,AFTER_COMMENT_1=i++,AFTER_COMMENT_2=i++,BEFORE_CDATA_1=i++,BEFORE_CDATA_2=i++,BEFORE_CDATA_3=i++,BEFORE_CDATA_4=i++,BEFORE_CDATA_5=i++,BEFORE_CDATA_6=i++,IN_CDATA=i++,AFTER_CDATA_1=i++,AFTER_CDATA_2=i++,BEFORE_SPECIAL=i++,BEFORE_SPECIAL_END=i++,BEFORE_SCRIPT_1=i++,BEFORE_SCRIPT_2=i++,BEFORE_SCRIPT_3=i++,BEFORE_SCRIPT_4=i++,BEFORE_SCRIPT_5=i++,AFTER_SCRIPT_1=i++,AFTER_SCRIPT_2=i++,AFTER_SCRIPT_3=i++,AFTER_SCRIPT_4=i++,AFTER_SCRIPT_5=i++,BEFORE_STYLE_1=i++,BEFORE_STYLE_2=i++,BEFORE_STYLE_3=i++,BEFORE_STYLE_4=i++,AFTER_STYLE_1=i++,AFTER_STYLE_2=i++,AFTER_STYLE_3=i++,AFTER_STYLE_4=i++;Tokenizer.prototype.write=function(t){for(this._buffer+=t;this._index<this._buffer.length&&this._running;){var _=this._buffer.charAt(this._index);this._state===TEXT?"<"===_&&(this._emitIfToken("text"),this._state=BEFORE_TAG_NAME,this._sectionStart=this._index):this._state===BEFORE_TAG_NAME?"/"===_?this._state=BEFORE_CLOSING_TAG_NAME:">"===_||this._special>0?this._state=TEXT:whitespace(_)||("!"===_?(this._state=BEFORE_DECLARATION,this._sectionStart=this._index+1):"?"===_?(this._state=IN_PROCESSING_INSTRUCTION,this._sectionStart=this._index+1):this._options&&this._options.xmlMode||"s"!==_&&"S"!==_?(this._state=IN_TAG_NAME,this._sectionStart=this._index):(this._state=BEFORE_SPECIAL,this._sectionStart=this._index)):this._state===IN_TAG_NAME?"/"===_?(this._emitToken("opentagname"),this._cbs.onselfclosingtag(),this._state=AFTER_CLOSING_TAG_NAME):">"===_?(this._emitToken("opentagname"),this._cbs.onopentagend(),this._state=TEXT,this._sectionStart=this._index+1):whitespace(_)&&(this._emitToken("opentagname"),this._state=BEFORE_ATTRIBUTE_NAME):this._state===BEFORE_CLOSING_TAG_NAME?whitespace(_)||(">"===_?this._state=TEXT:this._special>0?"s"!==_&&"S"!==_||(this._state=BEFORE_SPECIAL_END):(this._state=IN_CLOSING_TAG_NAME,this._sectionStart=this._index)):this._state===IN_CLOSING_TAG_NAME?">"===_?(this._emitToken("closetag"),this._state=TEXT,this._sectionStart=this._index+1,this._special=0):whitespace(_)&&(this._emitToken("closetag"),this._state=AFTER_CLOSING_TAG_NAME,this._special=0):this._state===AFTER_CLOSING_TAG_NAME?">"===_&&(this._state=TEXT,this._sectionStart=this._index+1):this._state===BEFORE_ATTRIBUTE_NAME?">"===_?(this._state=TEXT,this._cbs.onopentagend(),this._sectionStart=this._index+1):"/"===_?(this._cbs.onselfclosingtag(),this._state=AFTER_CLOSING_TAG_NAME):whitespace(_)||(this._state=IN_ATTRIBUTE_NAME,this._sectionStart=this._index):this._state===IN_ATTRIBUTE_NAME?"="===_?(this._emitIfToken("attribname"),this._state=BEFORE_ATTRIBUTE_VALUE):whitespace(_)?(this._emitIfToken("attribname"),this._state=AFTER_ATTRIBUTE_NAME):"/"!==_&&">"!==_||(this._emitIfToken("attribname"),this._state=BEFORE_ATTRIBUTE_NAME,this._index--):this._state===AFTER_ATTRIBUTE_NAME?"="===_?this._state=BEFORE_ATTRIBUTE_VALUE:"/"===_||">"===_?(this._state=BEFORE_ATTRIBUTE_NAME,this._index--):whitespace(_)||(this._state=IN_ATTRIBUTE_NAME,this._sectionStart=this._index):this._state===BEFORE_ATTRIBUTE_VALUE?'"'===_?(this._state=IN_ATTRIBUTE_VALUE_DOUBLE_QUOTES,this._sectionStart=this._index+1):"'"===_?(this._state=IN_ATTRIBUTE_VALUE_SINGLE_QUOTES,this._sectionStart=this._index+1):whitespace(_)||(this._state=IN_ATTRIBUTE_VALUE_NO_QUOTES,this._sectionStart=this._index):this._state===IN_ATTRIBUTE_VALUE_DOUBLE_QUOTES?'"'===_&&(this._emitToken("attribvalue"),this._state=BEFORE_ATTRIBUTE_NAME):this._state===IN_ATTRIBUTE_VALUE_SINGLE_QUOTES?"'"===_&&(this._emitToken("attribvalue"),this._state=BEFORE_ATTRIBUTE_NAME):this._state===IN_ATTRIBUTE_VALUE_NO_QUOTES?">"===_?(this._emitToken("attribvalue"),this._state=TEXT,this._cbs.onopentagend(),this._sectionStart=this._index+1):whitespace(_)&&(this._emitToken("attribvalue"),this._state=BEFORE_ATTRIBUTE_NAME):this._state===BEFORE_DECLARATION?"["===_?this._state=BEFORE_CDATA_1:"-"===_?this._state=BEFORE_COMMENT:this._state=IN_DECLARATION:this._state===IN_DECLARATION?">"===_&&(this._emitToken("declaration"),this._state=TEXT,this._sectionStart=this._index+1):this._state===IN_PROCESSING_INSTRUCTION?">"===_&&(this._emitToken("processinginstruction"),this._state=TEXT,this._sectionStart=this._index+1):this._state===BEFORE_COMMENT?"-"===_?(this._state=IN_COMMENT,this._sectionStart=this._index+1):this._state=IN_DECLARATION:this._state===IN_COMMENT?"-"===_&&(this._state=AFTER_COMMENT_1):this._state===AFTER_COMMENT_1?"-"===_?this._state=AFTER_COMMENT_2:this._state=IN_COMMENT:this._state===AFTER_COMMENT_2?">"===_?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=TEXT,this._sectionStart=this._index+1):this._state=IN_COMMENT:this._state===BEFORE_CDATA_1?"C"===_?this._state=BEFORE_CDATA_2:this._state=IN_DECLARATION:this._state===BEFORE_CDATA_2?"D"===_?this._state=BEFORE_CDATA_3:this._state=IN_DECLARATION:this._state===BEFORE_CDATA_3?"A"===_?this._state=BEFORE_CDATA_4:this._state=IN_DECLARATION:this._state===BEFORE_CDATA_4?"T"===_?this._state=BEFORE_CDATA_5:this._state=IN_DECLARATION:this._state===BEFORE_CDATA_5?"A"===_?this._state=BEFORE_CDATA_6:this._state=IN_DECLARATION:this._state===BEFORE_CDATA_6?"["===_?(this._state=IN_CDATA,this._sectionStart=this._index+1):this._state=IN_DECLARATION:this._state===IN_CDATA?"]"===_&&(this._state=AFTER_CDATA_1):this._state===AFTER_CDATA_1?"]"===_?this._state=AFTER_CDATA_2:this._state=IN_CDATA:this._state===AFTER_CDATA_2?">"===_?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=TEXT,this._sectionStart=this._index+1):this._state=IN_CDATA:this._state===BEFORE_SPECIAL?"c"===_||"C"===_?this._state=BEFORE_SCRIPT_1:"t"===_||"T"===_?this._state=BEFORE_STYLE_1:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SPECIAL_END?1!==this._special||"c"!==_&&"C"!==_?2!==this._special||"t"!==_&&"T"!==_?this._state=TEXT:this._state=AFTER_STYLE_1:this._state=AFTER_SCRIPT_1:this._state===BEFORE_SCRIPT_1?"r"===_||"R"===_?this._state=BEFORE_SCRIPT_2:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SCRIPT_2?"i"===_||"I"===_?this._state=BEFORE_SCRIPT_3:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SCRIPT_3?"p"===_||"P"===_?this._state=BEFORE_SCRIPT_4:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SCRIPT_4?"t"===_||"T"===_?this._state=BEFORE_SCRIPT_5:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SCRIPT_5?(("/"===_||">"===_||whitespace(_))&&(this._special=1),this._state=IN_TAG_NAME,this._index--):this._state===AFTER_SCRIPT_1?"r"===_||"R"===_?this._state=AFTER_SCRIPT_2:this._state=TEXT:this._state===AFTER_SCRIPT_2?"i"===_||"I"===_?this._state=AFTER_SCRIPT_3:this._state=TEXT:this._state===AFTER_SCRIPT_3?"p"===_||"P"===_?this._state=AFTER_SCRIPT_4:this._state=TEXT:this._state===AFTER_SCRIPT_4?"t"===_||"T"===_?this._state=AFTER_SCRIPT_5:this._state=TEXT:this._state===AFTER_SCRIPT_5?">"===_||whitespace(_)?(this._state=IN_CLOSING_TAG_NAME,this._sectionStart=this._index-6,this._index--):this._state=TEXT:this._state===BEFORE_STYLE_1?"y"===_||"Y"===_?this._state=BEFORE_STYLE_2:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_STYLE_2?"l"===_||"L"===_?this._state=BEFORE_STYLE_3:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_STYLE_3?"e"===_||"E"===_?this._state=BEFORE_STYLE_4:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_STYLE_4?(("/"===_||">"===_||whitespace(_))&&(this._special=2),this._state=IN_TAG_NAME,this._index--):this._state===AFTER_STYLE_1?"y"===_||"Y"===_?this._state=AFTER_STYLE_2:this._state=TEXT:this._state===AFTER_STYLE_2?"l"===_||"L"===_?this._state=AFTER_STYLE_3:this._state=TEXT:this._state===AFTER_STYLE_3?"e"===_||"E"===_?this._state=AFTER_STYLE_4:this._state=TEXT:this._state===AFTER_STYLE_4?">"===_||whitespace(_)?(this._state=IN_CLOSING_TAG_NAME,this._sectionStart=this._index-5,this._index--):this._state=TEXT:this._cbs.onerror(Error("unknown state"),this._state),this._index++}this._sectionStart===-1?(this._buffer="",this._index=0):(this._state===TEXT?(this._emitIfToken("text"),this._buffer="",this._index=0):this._sectionStart===this._index?(this._buffer="",this._index=0):this._sectionStart>0&&(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart),this._sectionStart=0)},Tokenizer.prototype.pause=function(){this._running=!1},Tokenizer.prototype.resume=function(){this._running=!0},Tokenizer.prototype.end=function(t){t&&this.write(t),""===this._buffer||this._sectionStart===-1||this._sectionStart===this._index||(this._state===IN_CDATA||this._state===AFTER_CDATA_1||this._state===AFTER_CDATA_2?this._emitIfToken("cdata"):this._state===IN_COMMENT||this._state===AFTER_COMMENT_1||this._state===AFTER_COMMENT_2?this._emitIfToken("comment"):this._state===IN_TAG_NAME?this._emitIfToken("opentagname"):this._state===IN_CLOSING_TAG_NAME?this._emitIfToken("closetag"):this._emitIfToken("text")),this._cbs.onend()},Tokenizer.prototype.reset=function(){Tokenizer.call(this,this._options,this._cbs)},Tokenizer.prototype._emitToken=function(t){this._cbs["on"+t](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1},Tokenizer.prototype._emitIfToken=function(t){this._index>this._sectionStart&&this._cbs["on"+t](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1};