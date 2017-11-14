var Component=require("montage/ui/component").Component;exports.TodoView=Component.specialize({todo:{value:null},editInput:{value:null},constructor:{value:function(){this.defineBinding("isCompleted",{"<-":"todo.completed"})}},enterDocument:{value:function(){this.element.addEventListener("dblclick",this,!1),this.element.addEventListener("blur",this,!0),this.element.addEventListener("submit",this,!1)}},exitDocument:{value:function(){this.element.removeEventListener("dblclick",this,!1),this.element.removeEventListener("blur",this,!0),this.element.removeEventListener("submit",this,!1)}},captureDestroyButtonAction:{value:function(){this.dispatchDestroy()}},dispatchDestroy:{value:function(){this.dispatchEventNamed("destroyTodo",!0,!0,{todo:this.todo})}},handleDblclick:{value:function(){this.isEditing=!0}},_isEditing:{value:!1},isEditing:{get:function(){return this._isEditing},set:function(t){t!==this._isEditing&&(t?this.classList.add("editing"):this.classList.remove("editing"),this._isEditing=t,this.needsDraw=!0)}},_isCompleted:{value:!1},isCompleted:{get:function(){return this._isCompleted},set:function(t){t!==this._isCompleted&&(t?this.classList.add("completed"):this.classList.remove("completed"),this._isCompleted=t,this.needsDraw=!0)}},captureBlur:{value:function(t){this.isEditing&&this.editInput.element===t.target&&this._submitTitle()}},handleSubmit:{value:function(t){this.isEditing&&(t.preventDefault(),this._submitTitle())}},_submitTitle:{value:function(){var t=this.editInput.value.trim();""===t?this.dispatchDestroy():this.todo.title=t,this.isEditing=!1}},draw:{value:function(){this.isEditing?this.editInput.element.focus():this.editInput.element.blur()}}});