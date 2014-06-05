// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__17859__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17858 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17858,0,null);var body = cljs.core.nthnext.call(null,vec__17858,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17859 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17859__delegate.call(this,args);};
G__17859.cljs$lang$maxFixedArity = 0;
G__17859.cljs$lang$applyTo = (function (arglist__17860){
var args = cljs.core.seq(arglist__17860);
return G__17859__delegate(args);
});
G__17859.cljs$core$IFn$_invoke$arity$variadic = G__17859__delegate;
return G__17859;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8591__auto__ = (function iter__17865(s__17866){return (new cljs.core.LazySeq(null,(function (){var s__17866__$1 = s__17866;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17866__$1);if(temp__4126__auto__)
{var s__17866__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17866__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17866__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17868 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17867 = 0;while(true){
if((i__17867 < size__8590__auto__))
{var args = cljs.core._nth.call(null,c__8589__auto__,i__17867);cljs.core.chunk_append.call(null,b__17868,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17869 = (i__17867 + 1);
i__17867 = G__17869;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17868),iter__17865.call(null,cljs.core.chunk_rest.call(null,s__17866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17868),null);
}
} else
{var args = cljs.core.first.call(null,s__17866__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17865.call(null,cljs.core.rest.call(null,s__17866__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8591__auto__ = (function iter__17874(s__17875){return (new cljs.core.LazySeq(null,(function (){var s__17875__$1 = s__17875;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17875__$1);if(temp__4126__auto__)
{var s__17875__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17875__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17875__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17877 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17876 = 0;while(true){
if((i__17876 < size__8590__auto__))
{var style = cljs.core._nth.call(null,c__8589__auto__,i__17876);cljs.core.chunk_append.call(null,b__17877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17878 = (i__17876 + 1);
i__17876 = G__17878;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17877),iter__17874.call(null,cljs.core.chunk_rest.call(null,s__17875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17877),null);
}
} else
{var style = cljs.core.first.call(null,s__17875__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17874.call(null,cljs.core.rest.call(null,s__17875__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17879){
var styles = cljs.core.seq(arglist__17879);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to17880 = (function() { 
var link_to17880__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17880 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17880__delegate.call(this,url,content);};
link_to17880.cljs$lang$maxFixedArity = 1;
link_to17880.cljs$lang$applyTo = (function (arglist__17881){
var url = cljs.core.first(arglist__17881);
var content = cljs.core.rest(arglist__17881);
return link_to17880__delegate(url,content);
});
link_to17880.cljs$core$IFn$_invoke$arity$variadic = link_to17880__delegate;
return link_to17880;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17880);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17882 = (function() { 
var mail_to17882__delegate = function (e_mail,p__17883){var vec__17885 = p__17883;var content = cljs.core.nth.call(null,vec__17885,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7874__auto__ = content;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17882 = function (e_mail,var_args){
var p__17883 = null;if (arguments.length > 1) {
  p__17883 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17882__delegate.call(this,e_mail,p__17883);};
mail_to17882.cljs$lang$maxFixedArity = 1;
mail_to17882.cljs$lang$applyTo = (function (arglist__17886){
var e_mail = cljs.core.first(arglist__17886);
var p__17883 = cljs.core.rest(arglist__17886);
return mail_to17882__delegate(e_mail,p__17883);
});
mail_to17882.cljs$core$IFn$_invoke$arity$variadic = mail_to17882__delegate;
return mail_to17882;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17882);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17887 = (function unordered_list17887(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8591__auto__ = (function iter__17892(s__17893){return (new cljs.core.LazySeq(null,(function (){var s__17893__$1 = s__17893;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17893__$1);if(temp__4126__auto__)
{var s__17893__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17893__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17893__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17895 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17894 = 0;while(true){
if((i__17894 < size__8590__auto__))
{var x = cljs.core._nth.call(null,c__8589__auto__,i__17894);cljs.core.chunk_append.call(null,b__17895,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17896 = (i__17894 + 1);
i__17894 = G__17896;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17895),iter__17892.call(null,cljs.core.chunk_rest.call(null,s__17893__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17895),null);
}
} else
{var x = cljs.core.first.call(null,s__17893__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17892.call(null,cljs.core.rest.call(null,s__17893__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17887);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17897 = (function ordered_list17897(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8591__auto__ = (function iter__17902(s__17903){return (new cljs.core.LazySeq(null,(function (){var s__17903__$1 = s__17903;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17903__$1);if(temp__4126__auto__)
{var s__17903__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17903__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17903__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17905 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17904 = 0;while(true){
if((i__17904 < size__8590__auto__))
{var x = cljs.core._nth.call(null,c__8589__auto__,i__17904);cljs.core.chunk_append.call(null,b__17905,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17906 = (i__17904 + 1);
i__17904 = G__17906;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17905),iter__17902.call(null,cljs.core.chunk_rest.call(null,s__17903__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17905),null);
}
} else
{var x = cljs.core.first.call(null,s__17903__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17902.call(null,cljs.core.rest.call(null,s__17903__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17897);
/**
* Create an image element.
*/
sablono.core.image17907 = (function() {
var image17907 = null;
var image17907__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17907__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17907 = function(src,alt){
switch(arguments.length){
case 1:
return image17907__1.call(this,src);
case 2:
return image17907__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17907.cljs$core$IFn$_invoke$arity$1 = image17907__1;
image17907.cljs$core$IFn$_invoke$arity$2 = image17907__2;
return image17907;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17907);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17908_SHARP_,p2__17909_SHARP_){return [cljs.core.str(p1__17908_SHARP_),cljs.core.str("["),cljs.core.str(p2__17909_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17910_SHARP_,p2__17911_SHARP_){return [cljs.core.str(p1__17910_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17911_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field17912 = (function() {
var color_field17912 = null;
var color_field17912__1 = (function (name__9349__auto__){return color_field17912.call(null,name__9349__auto__,null);
});
var color_field17912__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__9349__auto__,value__9350__auto__);
});
color_field17912 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return color_field17912__1.call(this,name__9349__auto__);
case 2:
return color_field17912__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17912.cljs$core$IFn$_invoke$arity$1 = color_field17912__1;
color_field17912.cljs$core$IFn$_invoke$arity$2 = color_field17912__2;
return color_field17912;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17912);
/**
* Creates a date input field.
*/
sablono.core.date_field17913 = (function() {
var date_field17913 = null;
var date_field17913__1 = (function (name__9349__auto__){return date_field17913.call(null,name__9349__auto__,null);
});
var date_field17913__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__9349__auto__,value__9350__auto__);
});
date_field17913 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return date_field17913__1.call(this,name__9349__auto__);
case 2:
return date_field17913__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17913.cljs$core$IFn$_invoke$arity$1 = date_field17913__1;
date_field17913.cljs$core$IFn$_invoke$arity$2 = date_field17913__2;
return date_field17913;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17913);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17914 = (function() {
var datetime_field17914 = null;
var datetime_field17914__1 = (function (name__9349__auto__){return datetime_field17914.call(null,name__9349__auto__,null);
});
var datetime_field17914__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__9349__auto__,value__9350__auto__);
});
datetime_field17914 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return datetime_field17914__1.call(this,name__9349__auto__);
case 2:
return datetime_field17914__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17914.cljs$core$IFn$_invoke$arity$1 = datetime_field17914__1;
datetime_field17914.cljs$core$IFn$_invoke$arity$2 = datetime_field17914__2;
return datetime_field17914;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17914);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17915 = (function() {
var datetime_local_field17915 = null;
var datetime_local_field17915__1 = (function (name__9349__auto__){return datetime_local_field17915.call(null,name__9349__auto__,null);
});
var datetime_local_field17915__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__9349__auto__,value__9350__auto__);
});
datetime_local_field17915 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17915__1.call(this,name__9349__auto__);
case 2:
return datetime_local_field17915__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17915.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17915__1;
datetime_local_field17915.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17915__2;
return datetime_local_field17915;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17915);
/**
* Creates a email input field.
*/
sablono.core.email_field17916 = (function() {
var email_field17916 = null;
var email_field17916__1 = (function (name__9349__auto__){return email_field17916.call(null,name__9349__auto__,null);
});
var email_field17916__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__9349__auto__,value__9350__auto__);
});
email_field17916 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return email_field17916__1.call(this,name__9349__auto__);
case 2:
return email_field17916__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17916.cljs$core$IFn$_invoke$arity$1 = email_field17916__1;
email_field17916.cljs$core$IFn$_invoke$arity$2 = email_field17916__2;
return email_field17916;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17916);
/**
* Creates a file input field.
*/
sablono.core.file_field17917 = (function() {
var file_field17917 = null;
var file_field17917__1 = (function (name__9349__auto__){return file_field17917.call(null,name__9349__auto__,null);
});
var file_field17917__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__9349__auto__,value__9350__auto__);
});
file_field17917 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return file_field17917__1.call(this,name__9349__auto__);
case 2:
return file_field17917__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17917.cljs$core$IFn$_invoke$arity$1 = file_field17917__1;
file_field17917.cljs$core$IFn$_invoke$arity$2 = file_field17917__2;
return file_field17917;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17917);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17918 = (function() {
var hidden_field17918 = null;
var hidden_field17918__1 = (function (name__9349__auto__){return hidden_field17918.call(null,name__9349__auto__,null);
});
var hidden_field17918__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__9349__auto__,value__9350__auto__);
});
hidden_field17918 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return hidden_field17918__1.call(this,name__9349__auto__);
case 2:
return hidden_field17918__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17918.cljs$core$IFn$_invoke$arity$1 = hidden_field17918__1;
hidden_field17918.cljs$core$IFn$_invoke$arity$2 = hidden_field17918__2;
return hidden_field17918;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17918);
/**
* Creates a month input field.
*/
sablono.core.month_field17919 = (function() {
var month_field17919 = null;
var month_field17919__1 = (function (name__9349__auto__){return month_field17919.call(null,name__9349__auto__,null);
});
var month_field17919__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__9349__auto__,value__9350__auto__);
});
month_field17919 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return month_field17919__1.call(this,name__9349__auto__);
case 2:
return month_field17919__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17919.cljs$core$IFn$_invoke$arity$1 = month_field17919__1;
month_field17919.cljs$core$IFn$_invoke$arity$2 = month_field17919__2;
return month_field17919;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17919);
/**
* Creates a number input field.
*/
sablono.core.number_field17920 = (function() {
var number_field17920 = null;
var number_field17920__1 = (function (name__9349__auto__){return number_field17920.call(null,name__9349__auto__,null);
});
var number_field17920__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__9349__auto__,value__9350__auto__);
});
number_field17920 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return number_field17920__1.call(this,name__9349__auto__);
case 2:
return number_field17920__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17920.cljs$core$IFn$_invoke$arity$1 = number_field17920__1;
number_field17920.cljs$core$IFn$_invoke$arity$2 = number_field17920__2;
return number_field17920;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17920);
/**
* Creates a password input field.
*/
sablono.core.password_field17921 = (function() {
var password_field17921 = null;
var password_field17921__1 = (function (name__9349__auto__){return password_field17921.call(null,name__9349__auto__,null);
});
var password_field17921__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__9349__auto__,value__9350__auto__);
});
password_field17921 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return password_field17921__1.call(this,name__9349__auto__);
case 2:
return password_field17921__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17921.cljs$core$IFn$_invoke$arity$1 = password_field17921__1;
password_field17921.cljs$core$IFn$_invoke$arity$2 = password_field17921__2;
return password_field17921;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17921);
/**
* Creates a range input field.
*/
sablono.core.range_field17922 = (function() {
var range_field17922 = null;
var range_field17922__1 = (function (name__9349__auto__){return range_field17922.call(null,name__9349__auto__,null);
});
var range_field17922__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__9349__auto__,value__9350__auto__);
});
range_field17922 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return range_field17922__1.call(this,name__9349__auto__);
case 2:
return range_field17922__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17922.cljs$core$IFn$_invoke$arity$1 = range_field17922__1;
range_field17922.cljs$core$IFn$_invoke$arity$2 = range_field17922__2;
return range_field17922;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17922);
/**
* Creates a search input field.
*/
sablono.core.search_field17923 = (function() {
var search_field17923 = null;
var search_field17923__1 = (function (name__9349__auto__){return search_field17923.call(null,name__9349__auto__,null);
});
var search_field17923__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__9349__auto__,value__9350__auto__);
});
search_field17923 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return search_field17923__1.call(this,name__9349__auto__);
case 2:
return search_field17923__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17923.cljs$core$IFn$_invoke$arity$1 = search_field17923__1;
search_field17923.cljs$core$IFn$_invoke$arity$2 = search_field17923__2;
return search_field17923;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17923);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17924 = (function() {
var tel_field17924 = null;
var tel_field17924__1 = (function (name__9349__auto__){return tel_field17924.call(null,name__9349__auto__,null);
});
var tel_field17924__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__9349__auto__,value__9350__auto__);
});
tel_field17924 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return tel_field17924__1.call(this,name__9349__auto__);
case 2:
return tel_field17924__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17924.cljs$core$IFn$_invoke$arity$1 = tel_field17924__1;
tel_field17924.cljs$core$IFn$_invoke$arity$2 = tel_field17924__2;
return tel_field17924;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17924);
/**
* Creates a text input field.
*/
sablono.core.text_field17925 = (function() {
var text_field17925 = null;
var text_field17925__1 = (function (name__9349__auto__){return text_field17925.call(null,name__9349__auto__,null);
});
var text_field17925__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__9349__auto__,value__9350__auto__);
});
text_field17925 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return text_field17925__1.call(this,name__9349__auto__);
case 2:
return text_field17925__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17925.cljs$core$IFn$_invoke$arity$1 = text_field17925__1;
text_field17925.cljs$core$IFn$_invoke$arity$2 = text_field17925__2;
return text_field17925;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17925);
/**
* Creates a time input field.
*/
sablono.core.time_field17926 = (function() {
var time_field17926 = null;
var time_field17926__1 = (function (name__9349__auto__){return time_field17926.call(null,name__9349__auto__,null);
});
var time_field17926__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__9349__auto__,value__9350__auto__);
});
time_field17926 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return time_field17926__1.call(this,name__9349__auto__);
case 2:
return time_field17926__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17926.cljs$core$IFn$_invoke$arity$1 = time_field17926__1;
time_field17926.cljs$core$IFn$_invoke$arity$2 = time_field17926__2;
return time_field17926;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17926);
/**
* Creates a url input field.
*/
sablono.core.url_field17927 = (function() {
var url_field17927 = null;
var url_field17927__1 = (function (name__9349__auto__){return url_field17927.call(null,name__9349__auto__,null);
});
var url_field17927__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__9349__auto__,value__9350__auto__);
});
url_field17927 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return url_field17927__1.call(this,name__9349__auto__);
case 2:
return url_field17927__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17927.cljs$core$IFn$_invoke$arity$1 = url_field17927__1;
url_field17927.cljs$core$IFn$_invoke$arity$2 = url_field17927__2;
return url_field17927;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17927);
/**
* Creates a week input field.
*/
sablono.core.week_field17928 = (function() {
var week_field17928 = null;
var week_field17928__1 = (function (name__9349__auto__){return week_field17928.call(null,name__9349__auto__,null);
});
var week_field17928__2 = (function (name__9349__auto__,value__9350__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__9349__auto__,value__9350__auto__);
});
week_field17928 = function(name__9349__auto__,value__9350__auto__){
switch(arguments.length){
case 1:
return week_field17928__1.call(this,name__9349__auto__);
case 2:
return week_field17928__2.call(this,name__9349__auto__,value__9350__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17928.cljs$core$IFn$_invoke$arity$1 = week_field17928__1;
week_field17928.cljs$core$IFn$_invoke$arity$2 = week_field17928__2;
return week_field17928;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17928);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17929 = (function() {
var check_box17929 = null;
var check_box17929__1 = (function (name){return check_box17929.call(null,name,null);
});
var check_box17929__2 = (function (name,checked_QMARK_){return check_box17929.call(null,name,checked_QMARK_,"true");
});
var check_box17929__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17929 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17929__1.call(this,name);
case 2:
return check_box17929__2.call(this,name,checked_QMARK_);
case 3:
return check_box17929__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17929.cljs$core$IFn$_invoke$arity$1 = check_box17929__1;
check_box17929.cljs$core$IFn$_invoke$arity$2 = check_box17929__2;
check_box17929.cljs$core$IFn$_invoke$arity$3 = check_box17929__3;
return check_box17929;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17929);
/**
* Creates a radio button.
*/
sablono.core.radio_button17930 = (function() {
var radio_button17930 = null;
var radio_button17930__1 = (function (group){return radio_button17930.call(null,group,null);
});
var radio_button17930__2 = (function (group,checked_QMARK_){return radio_button17930.call(null,group,checked_QMARK_,"true");
});
var radio_button17930__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17930 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17930__1.call(this,group);
case 2:
return radio_button17930__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17930__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17930.cljs$core$IFn$_invoke$arity$1 = radio_button17930__1;
radio_button17930.cljs$core$IFn$_invoke$arity$2 = radio_button17930__2;
radio_button17930.cljs$core$IFn$_invoke$arity$3 = radio_button17930__3;
return radio_button17930;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17930);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17931 = (function() {
var select_options17931 = null;
var select_options17931__1 = (function (coll){return select_options17931.call(null,coll,null);
});
var select_options17931__2 = (function (coll,selected){var iter__8591__auto__ = (function iter__17940(s__17941){return (new cljs.core.LazySeq(null,(function (){var s__17941__$1 = s__17941;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17941__$1);if(temp__4126__auto__)
{var s__17941__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17941__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__17941__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__17943 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__17942 = 0;while(true){
if((i__17942 < size__8590__auto__))
{var x = cljs.core._nth.call(null,c__8589__auto__,i__17942);cljs.core.chunk_append.call(null,b__17943,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17946 = x;var text = cljs.core.nth.call(null,vec__17946,0,null);var val = cljs.core.nth.call(null,vec__17946,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17946,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17931.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17948 = (i__17942 + 1);
i__17942 = G__17948;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17943),iter__17940.call(null,cljs.core.chunk_rest.call(null,s__17941__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17943),null);
}
} else
{var x = cljs.core.first.call(null,s__17941__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17947 = x;var text = cljs.core.nth.call(null,vec__17947,0,null);var val = cljs.core.nth.call(null,vec__17947,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17947,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17931.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17940.call(null,cljs.core.rest.call(null,s__17941__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,coll);
});
select_options17931 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17931__1.call(this,coll);
case 2:
return select_options17931__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17931.cljs$core$IFn$_invoke$arity$1 = select_options17931__1;
select_options17931.cljs$core$IFn$_invoke$arity$2 = select_options17931__2;
return select_options17931;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17931);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17949 = (function() {
var drop_down17949 = null;
var drop_down17949__2 = (function (name,options){return drop_down17949.call(null,name,options,null);
});
var drop_down17949__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17949 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17949__2.call(this,name,options);
case 3:
return drop_down17949__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17949.cljs$core$IFn$_invoke$arity$2 = drop_down17949__2;
drop_down17949.cljs$core$IFn$_invoke$arity$3 = drop_down17949__3;
return drop_down17949;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17949);
/**
* Creates a text area element.
*/
sablono.core.text_area17950 = (function() {
var text_area17950 = null;
var text_area17950__1 = (function (name){return text_area17950.call(null,name,null);
});
var text_area17950__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17950 = function(name,value){
switch(arguments.length){
case 1:
return text_area17950__1.call(this,name);
case 2:
return text_area17950__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17950.cljs$core$IFn$_invoke$arity$1 = text_area17950__1;
text_area17950.cljs$core$IFn$_invoke$arity$2 = text_area17950__2;
return text_area17950;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17950);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17951 = (function label17951(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17951);
/**
* Creates a submit button.
*/
sablono.core.submit_button17952 = (function submit_button17952(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17952);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17953 = (function reset_button17953(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17953);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17954 = (function() { 
var form_to17954__delegate = function (p__17955,body){var vec__17957 = p__17955;var method = cljs.core.nth.call(null,vec__17957,0,null);var action = cljs.core.nth.call(null,vec__17957,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17954 = function (p__17955,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17954__delegate.call(this,p__17955,body);};
form_to17954.cljs$lang$maxFixedArity = 1;
form_to17954.cljs$lang$applyTo = (function (arglist__17958){
var p__17955 = cljs.core.first(arglist__17958);
var body = cljs.core.rest(arglist__17958);
return form_to17954__delegate(p__17955,body);
});
form_to17954.cljs$core$IFn$_invoke$arity$variadic = form_to17954__delegate;
return form_to17954;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17954);

//# sourceMappingURL=core.js.map