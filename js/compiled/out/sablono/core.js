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
var G__13772__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__13771 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__13771,0,null);var body = cljs.core.nthnext.call(null,vec__13771,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__13772 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13772__delegate.call(this,args);};
G__13772.cljs$lang$maxFixedArity = 0;
G__13772.cljs$lang$applyTo = (function (arglist__13773){
var args = cljs.core.seq(arglist__13773);
return G__13772__delegate(args);
});
G__13772.cljs$core$IFn$_invoke$arity$variadic = G__13772__delegate;
return G__13772;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4198__auto__ = (function iter__13778(s__13779){return (new cljs.core.LazySeq(null,(function (){var s__13779__$1 = s__13779;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13779__$1);if(temp__4126__auto__)
{var s__13779__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13779__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13779__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13781 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13780 = 0;while(true){
if((i__13780 < size__4197__auto__))
{var args = cljs.core._nth.call(null,c__4196__auto__,i__13780);cljs.core.chunk_append.call(null,b__13781,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__13782 = (i__13780 + 1);
i__13780 = G__13782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13781),iter__13778.call(null,cljs.core.chunk_rest.call(null,s__13779__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13781),null);
}
} else
{var args = cljs.core.first.call(null,s__13779__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__13778.call(null,cljs.core.rest.call(null,s__13779__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4198__auto__ = (function iter__13787(s__13788){return (new cljs.core.LazySeq(null,(function (){var s__13788__$1 = s__13788;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13788__$1);if(temp__4126__auto__)
{var s__13788__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13788__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13788__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13790 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13789 = 0;while(true){
if((i__13789 < size__4197__auto__))
{var style = cljs.core._nth.call(null,c__4196__auto__,i__13789);cljs.core.chunk_append.call(null,b__13790,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__13791 = (i__13789 + 1);
i__13789 = G__13791;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13790),iter__13787.call(null,cljs.core.chunk_rest.call(null,s__13788__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13790),null);
}
} else
{var style = cljs.core.first.call(null,s__13788__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__13787.call(null,cljs.core.rest.call(null,s__13788__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__13792){
var styles = cljs.core.seq(arglist__13792);
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
sablono.core.link_to13793 = (function() { 
var link_to13793__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to13793 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to13793__delegate.call(this,url,content);};
link_to13793.cljs$lang$maxFixedArity = 1;
link_to13793.cljs$lang$applyTo = (function (arglist__13794){
var url = cljs.core.first(arglist__13794);
var content = cljs.core.rest(arglist__13794);
return link_to13793__delegate(url,content);
});
link_to13793.cljs$core$IFn$_invoke$arity$variadic = link_to13793__delegate;
return link_to13793;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to13793);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to13795 = (function() { 
var mail_to13795__delegate = function (e_mail,p__13796){var vec__13798 = p__13796;var content = cljs.core.nth.call(null,vec__13798,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3481__auto__ = content;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to13795 = function (e_mail,var_args){
var p__13796 = null;if (arguments.length > 1) {
  p__13796 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to13795__delegate.call(this,e_mail,p__13796);};
mail_to13795.cljs$lang$maxFixedArity = 1;
mail_to13795.cljs$lang$applyTo = (function (arglist__13799){
var e_mail = cljs.core.first(arglist__13799);
var p__13796 = cljs.core.rest(arglist__13799);
return mail_to13795__delegate(e_mail,p__13796);
});
mail_to13795.cljs$core$IFn$_invoke$arity$variadic = mail_to13795__delegate;
return mail_to13795;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to13795);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list13800 = (function unordered_list13800(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4198__auto__ = (function iter__13805(s__13806){return (new cljs.core.LazySeq(null,(function (){var s__13806__$1 = s__13806;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13806__$1);if(temp__4126__auto__)
{var s__13806__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13806__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13806__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13808 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13807 = 0;while(true){
if((i__13807 < size__4197__auto__))
{var x = cljs.core._nth.call(null,c__4196__auto__,i__13807);cljs.core.chunk_append.call(null,b__13808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__13809 = (i__13807 + 1);
i__13807 = G__13809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13808),iter__13805.call(null,cljs.core.chunk_rest.call(null,s__13806__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13808),null);
}
} else
{var x = cljs.core.first.call(null,s__13806__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__13805.call(null,cljs.core.rest.call(null,s__13806__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list13800);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list13810 = (function ordered_list13810(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4198__auto__ = (function iter__13815(s__13816){return (new cljs.core.LazySeq(null,(function (){var s__13816__$1 = s__13816;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13816__$1);if(temp__4126__auto__)
{var s__13816__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13816__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13816__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13818 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13817 = 0;while(true){
if((i__13817 < size__4197__auto__))
{var x = cljs.core._nth.call(null,c__4196__auto__,i__13817);cljs.core.chunk_append.call(null,b__13818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__13819 = (i__13817 + 1);
i__13817 = G__13819;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13818),iter__13815.call(null,cljs.core.chunk_rest.call(null,s__13816__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13818),null);
}
} else
{var x = cljs.core.first.call(null,s__13816__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__13815.call(null,cljs.core.rest.call(null,s__13816__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list13810);
/**
* Create an image element.
*/
sablono.core.image13820 = (function() {
var image13820 = null;
var image13820__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image13820__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image13820 = function(src,alt){
switch(arguments.length){
case 1:
return image13820__1.call(this,src);
case 2:
return image13820__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image13820.cljs$core$IFn$_invoke$arity$1 = image13820__1;
image13820.cljs$core$IFn$_invoke$arity$2 = image13820__2;
return image13820;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image13820);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__13821_SHARP_,p2__13822_SHARP_){return [cljs.core.str(p1__13821_SHARP_),cljs.core.str("["),cljs.core.str(p2__13822_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__13823_SHARP_,p2__13824_SHARP_){return [cljs.core.str(p1__13823_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13824_SHARP_)].join('');
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
sablono.core.color_field13825 = (function() {
var color_field13825 = null;
var color_field13825__1 = (function (name__4956__auto__){return color_field13825.call(null,name__4956__auto__,null);
});
var color_field13825__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__4956__auto__,value__4957__auto__);
});
color_field13825 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return color_field13825__1.call(this,name__4956__auto__);
case 2:
return color_field13825__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field13825.cljs$core$IFn$_invoke$arity$1 = color_field13825__1;
color_field13825.cljs$core$IFn$_invoke$arity$2 = color_field13825__2;
return color_field13825;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field13825);
/**
* Creates a date input field.
*/
sablono.core.date_field13826 = (function() {
var date_field13826 = null;
var date_field13826__1 = (function (name__4956__auto__){return date_field13826.call(null,name__4956__auto__,null);
});
var date_field13826__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__4956__auto__,value__4957__auto__);
});
date_field13826 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return date_field13826__1.call(this,name__4956__auto__);
case 2:
return date_field13826__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field13826.cljs$core$IFn$_invoke$arity$1 = date_field13826__1;
date_field13826.cljs$core$IFn$_invoke$arity$2 = date_field13826__2;
return date_field13826;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field13826);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field13827 = (function() {
var datetime_field13827 = null;
var datetime_field13827__1 = (function (name__4956__auto__){return datetime_field13827.call(null,name__4956__auto__,null);
});
var datetime_field13827__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__4956__auto__,value__4957__auto__);
});
datetime_field13827 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return datetime_field13827__1.call(this,name__4956__auto__);
case 2:
return datetime_field13827__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field13827.cljs$core$IFn$_invoke$arity$1 = datetime_field13827__1;
datetime_field13827.cljs$core$IFn$_invoke$arity$2 = datetime_field13827__2;
return datetime_field13827;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field13827);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field13828 = (function() {
var datetime_local_field13828 = null;
var datetime_local_field13828__1 = (function (name__4956__auto__){return datetime_local_field13828.call(null,name__4956__auto__,null);
});
var datetime_local_field13828__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__4956__auto__,value__4957__auto__);
});
datetime_local_field13828 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return datetime_local_field13828__1.call(this,name__4956__auto__);
case 2:
return datetime_local_field13828__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field13828.cljs$core$IFn$_invoke$arity$1 = datetime_local_field13828__1;
datetime_local_field13828.cljs$core$IFn$_invoke$arity$2 = datetime_local_field13828__2;
return datetime_local_field13828;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field13828);
/**
* Creates a email input field.
*/
sablono.core.email_field13829 = (function() {
var email_field13829 = null;
var email_field13829__1 = (function (name__4956__auto__){return email_field13829.call(null,name__4956__auto__,null);
});
var email_field13829__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__4956__auto__,value__4957__auto__);
});
email_field13829 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return email_field13829__1.call(this,name__4956__auto__);
case 2:
return email_field13829__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field13829.cljs$core$IFn$_invoke$arity$1 = email_field13829__1;
email_field13829.cljs$core$IFn$_invoke$arity$2 = email_field13829__2;
return email_field13829;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field13829);
/**
* Creates a file input field.
*/
sablono.core.file_field13830 = (function() {
var file_field13830 = null;
var file_field13830__1 = (function (name__4956__auto__){return file_field13830.call(null,name__4956__auto__,null);
});
var file_field13830__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__4956__auto__,value__4957__auto__);
});
file_field13830 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return file_field13830__1.call(this,name__4956__auto__);
case 2:
return file_field13830__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field13830.cljs$core$IFn$_invoke$arity$1 = file_field13830__1;
file_field13830.cljs$core$IFn$_invoke$arity$2 = file_field13830__2;
return file_field13830;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field13830);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field13831 = (function() {
var hidden_field13831 = null;
var hidden_field13831__1 = (function (name__4956__auto__){return hidden_field13831.call(null,name__4956__auto__,null);
});
var hidden_field13831__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__4956__auto__,value__4957__auto__);
});
hidden_field13831 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return hidden_field13831__1.call(this,name__4956__auto__);
case 2:
return hidden_field13831__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field13831.cljs$core$IFn$_invoke$arity$1 = hidden_field13831__1;
hidden_field13831.cljs$core$IFn$_invoke$arity$2 = hidden_field13831__2;
return hidden_field13831;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field13831);
/**
* Creates a month input field.
*/
sablono.core.month_field13832 = (function() {
var month_field13832 = null;
var month_field13832__1 = (function (name__4956__auto__){return month_field13832.call(null,name__4956__auto__,null);
});
var month_field13832__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__4956__auto__,value__4957__auto__);
});
month_field13832 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return month_field13832__1.call(this,name__4956__auto__);
case 2:
return month_field13832__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field13832.cljs$core$IFn$_invoke$arity$1 = month_field13832__1;
month_field13832.cljs$core$IFn$_invoke$arity$2 = month_field13832__2;
return month_field13832;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field13832);
/**
* Creates a number input field.
*/
sablono.core.number_field13833 = (function() {
var number_field13833 = null;
var number_field13833__1 = (function (name__4956__auto__){return number_field13833.call(null,name__4956__auto__,null);
});
var number_field13833__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__4956__auto__,value__4957__auto__);
});
number_field13833 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return number_field13833__1.call(this,name__4956__auto__);
case 2:
return number_field13833__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field13833.cljs$core$IFn$_invoke$arity$1 = number_field13833__1;
number_field13833.cljs$core$IFn$_invoke$arity$2 = number_field13833__2;
return number_field13833;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field13833);
/**
* Creates a password input field.
*/
sablono.core.password_field13834 = (function() {
var password_field13834 = null;
var password_field13834__1 = (function (name__4956__auto__){return password_field13834.call(null,name__4956__auto__,null);
});
var password_field13834__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__4956__auto__,value__4957__auto__);
});
password_field13834 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return password_field13834__1.call(this,name__4956__auto__);
case 2:
return password_field13834__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field13834.cljs$core$IFn$_invoke$arity$1 = password_field13834__1;
password_field13834.cljs$core$IFn$_invoke$arity$2 = password_field13834__2;
return password_field13834;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field13834);
/**
* Creates a range input field.
*/
sablono.core.range_field13835 = (function() {
var range_field13835 = null;
var range_field13835__1 = (function (name__4956__auto__){return range_field13835.call(null,name__4956__auto__,null);
});
var range_field13835__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__4956__auto__,value__4957__auto__);
});
range_field13835 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return range_field13835__1.call(this,name__4956__auto__);
case 2:
return range_field13835__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field13835.cljs$core$IFn$_invoke$arity$1 = range_field13835__1;
range_field13835.cljs$core$IFn$_invoke$arity$2 = range_field13835__2;
return range_field13835;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field13835);
/**
* Creates a search input field.
*/
sablono.core.search_field13836 = (function() {
var search_field13836 = null;
var search_field13836__1 = (function (name__4956__auto__){return search_field13836.call(null,name__4956__auto__,null);
});
var search_field13836__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__4956__auto__,value__4957__auto__);
});
search_field13836 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return search_field13836__1.call(this,name__4956__auto__);
case 2:
return search_field13836__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field13836.cljs$core$IFn$_invoke$arity$1 = search_field13836__1;
search_field13836.cljs$core$IFn$_invoke$arity$2 = search_field13836__2;
return search_field13836;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field13836);
/**
* Creates a tel input field.
*/
sablono.core.tel_field13837 = (function() {
var tel_field13837 = null;
var tel_field13837__1 = (function (name__4956__auto__){return tel_field13837.call(null,name__4956__auto__,null);
});
var tel_field13837__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__4956__auto__,value__4957__auto__);
});
tel_field13837 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return tel_field13837__1.call(this,name__4956__auto__);
case 2:
return tel_field13837__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field13837.cljs$core$IFn$_invoke$arity$1 = tel_field13837__1;
tel_field13837.cljs$core$IFn$_invoke$arity$2 = tel_field13837__2;
return tel_field13837;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field13837);
/**
* Creates a text input field.
*/
sablono.core.text_field13838 = (function() {
var text_field13838 = null;
var text_field13838__1 = (function (name__4956__auto__){return text_field13838.call(null,name__4956__auto__,null);
});
var text_field13838__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__4956__auto__,value__4957__auto__);
});
text_field13838 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return text_field13838__1.call(this,name__4956__auto__);
case 2:
return text_field13838__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field13838.cljs$core$IFn$_invoke$arity$1 = text_field13838__1;
text_field13838.cljs$core$IFn$_invoke$arity$2 = text_field13838__2;
return text_field13838;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field13838);
/**
* Creates a time input field.
*/
sablono.core.time_field13839 = (function() {
var time_field13839 = null;
var time_field13839__1 = (function (name__4956__auto__){return time_field13839.call(null,name__4956__auto__,null);
});
var time_field13839__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__4956__auto__,value__4957__auto__);
});
time_field13839 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return time_field13839__1.call(this,name__4956__auto__);
case 2:
return time_field13839__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field13839.cljs$core$IFn$_invoke$arity$1 = time_field13839__1;
time_field13839.cljs$core$IFn$_invoke$arity$2 = time_field13839__2;
return time_field13839;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field13839);
/**
* Creates a url input field.
*/
sablono.core.url_field13840 = (function() {
var url_field13840 = null;
var url_field13840__1 = (function (name__4956__auto__){return url_field13840.call(null,name__4956__auto__,null);
});
var url_field13840__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__4956__auto__,value__4957__auto__);
});
url_field13840 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return url_field13840__1.call(this,name__4956__auto__);
case 2:
return url_field13840__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field13840.cljs$core$IFn$_invoke$arity$1 = url_field13840__1;
url_field13840.cljs$core$IFn$_invoke$arity$2 = url_field13840__2;
return url_field13840;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field13840);
/**
* Creates a week input field.
*/
sablono.core.week_field13841 = (function() {
var week_field13841 = null;
var week_field13841__1 = (function (name__4956__auto__){return week_field13841.call(null,name__4956__auto__,null);
});
var week_field13841__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__4956__auto__,value__4957__auto__);
});
week_field13841 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return week_field13841__1.call(this,name__4956__auto__);
case 2:
return week_field13841__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field13841.cljs$core$IFn$_invoke$arity$1 = week_field13841__1;
week_field13841.cljs$core$IFn$_invoke$arity$2 = week_field13841__2;
return week_field13841;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field13841);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box13842 = (function() {
var check_box13842 = null;
var check_box13842__1 = (function (name){return check_box13842.call(null,name,null);
});
var check_box13842__2 = (function (name,checked_QMARK_){return check_box13842.call(null,name,checked_QMARK_,"true");
});
var check_box13842__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box13842 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box13842__1.call(this,name);
case 2:
return check_box13842__2.call(this,name,checked_QMARK_);
case 3:
return check_box13842__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box13842.cljs$core$IFn$_invoke$arity$1 = check_box13842__1;
check_box13842.cljs$core$IFn$_invoke$arity$2 = check_box13842__2;
check_box13842.cljs$core$IFn$_invoke$arity$3 = check_box13842__3;
return check_box13842;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box13842);
/**
* Creates a radio button.
*/
sablono.core.radio_button13843 = (function() {
var radio_button13843 = null;
var radio_button13843__1 = (function (group){return radio_button13843.call(null,group,null);
});
var radio_button13843__2 = (function (group,checked_QMARK_){return radio_button13843.call(null,group,checked_QMARK_,"true");
});
var radio_button13843__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button13843 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button13843__1.call(this,group);
case 2:
return radio_button13843__2.call(this,group,checked_QMARK_);
case 3:
return radio_button13843__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button13843.cljs$core$IFn$_invoke$arity$1 = radio_button13843__1;
radio_button13843.cljs$core$IFn$_invoke$arity$2 = radio_button13843__2;
radio_button13843.cljs$core$IFn$_invoke$arity$3 = radio_button13843__3;
return radio_button13843;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button13843);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options13844 = (function() {
var select_options13844 = null;
var select_options13844__1 = (function (coll){return select_options13844.call(null,coll,null);
});
var select_options13844__2 = (function (coll,selected){var iter__4198__auto__ = (function iter__13853(s__13854){return (new cljs.core.LazySeq(null,(function (){var s__13854__$1 = s__13854;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13854__$1);if(temp__4126__auto__)
{var s__13854__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13854__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13854__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13856 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13855 = 0;while(true){
if((i__13855 < size__4197__auto__))
{var x = cljs.core._nth.call(null,c__4196__auto__,i__13855);cljs.core.chunk_append.call(null,b__13856,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13859 = x;var text = cljs.core.nth.call(null,vec__13859,0,null);var val = cljs.core.nth.call(null,vec__13859,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__13859,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options13844.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__13861 = (i__13855 + 1);
i__13855 = G__13861;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13856),iter__13853.call(null,cljs.core.chunk_rest.call(null,s__13854__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13856),null);
}
} else
{var x = cljs.core.first.call(null,s__13854__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13860 = x;var text = cljs.core.nth.call(null,vec__13860,0,null);var val = cljs.core.nth.call(null,vec__13860,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__13860,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options13844.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__13853.call(null,cljs.core.rest.call(null,s__13854__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__.call(null,coll);
});
select_options13844 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options13844__1.call(this,coll);
case 2:
return select_options13844__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options13844.cljs$core$IFn$_invoke$arity$1 = select_options13844__1;
select_options13844.cljs$core$IFn$_invoke$arity$2 = select_options13844__2;
return select_options13844;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options13844);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down13862 = (function() {
var drop_down13862 = null;
var drop_down13862__2 = (function (name,options){return drop_down13862.call(null,name,options,null);
});
var drop_down13862__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down13862 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down13862__2.call(this,name,options);
case 3:
return drop_down13862__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down13862.cljs$core$IFn$_invoke$arity$2 = drop_down13862__2;
drop_down13862.cljs$core$IFn$_invoke$arity$3 = drop_down13862__3;
return drop_down13862;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down13862);
/**
* Creates a text area element.
*/
sablono.core.text_area13863 = (function() {
var text_area13863 = null;
var text_area13863__1 = (function (name){return text_area13863.call(null,name,null);
});
var text_area13863__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area13863 = function(name,value){
switch(arguments.length){
case 1:
return text_area13863__1.call(this,name);
case 2:
return text_area13863__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area13863.cljs$core$IFn$_invoke$arity$1 = text_area13863__1;
text_area13863.cljs$core$IFn$_invoke$arity$2 = text_area13863__2;
return text_area13863;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area13863);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label13864 = (function label13864(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label13864);
/**
* Creates a submit button.
*/
sablono.core.submit_button13865 = (function submit_button13865(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button13865);
/**
* Creates a form reset button.
*/
sablono.core.reset_button13866 = (function reset_button13866(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button13866);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to13867 = (function() { 
var form_to13867__delegate = function (p__13868,body){var vec__13870 = p__13868;var method = cljs.core.nth.call(null,vec__13870,0,null);var action = cljs.core.nth.call(null,vec__13870,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to13867 = function (p__13868,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to13867__delegate.call(this,p__13868,body);};
form_to13867.cljs$lang$maxFixedArity = 1;
form_to13867.cljs$lang$applyTo = (function (arglist__13871){
var p__13868 = cljs.core.first(arglist__13871);
var body = cljs.core.rest(arglist__13871);
return form_to13867__delegate(p__13868,body);
});
form_to13867.cljs$core$IFn$_invoke$arity$variadic = form_to13867__delegate;
return form_to13867;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to13867);

//# sourceMappingURL=core.js.map