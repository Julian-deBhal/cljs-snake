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
var G__13696__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__13695 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__13695,0,null);var body = cljs.core.nthnext.call(null,vec__13695,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__13696 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13696__delegate.call(this,args);};
G__13696.cljs$lang$maxFixedArity = 0;
G__13696.cljs$lang$applyTo = (function (arglist__13697){
var args = cljs.core.seq(arglist__13697);
return G__13696__delegate(args);
});
G__13696.cljs$core$IFn$_invoke$arity$variadic = G__13696__delegate;
return G__13696;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4198__auto__ = (function iter__13702(s__13703){return (new cljs.core.LazySeq(null,(function (){var s__13703__$1 = s__13703;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13703__$1);if(temp__4126__auto__)
{var s__13703__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13703__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13703__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13705 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13704 = 0;while(true){
if((i__13704 < size__4197__auto__))
{var args = cljs.core._nth.call(null,c__4196__auto__,i__13704);cljs.core.chunk_append.call(null,b__13705,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__13706 = (i__13704 + 1);
i__13704 = G__13706;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13705),iter__13702.call(null,cljs.core.chunk_rest.call(null,s__13703__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13705),null);
}
} else
{var args = cljs.core.first.call(null,s__13703__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__13702.call(null,cljs.core.rest.call(null,s__13703__$2)));
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
var include_css__delegate = function (styles){var iter__4198__auto__ = (function iter__13711(s__13712){return (new cljs.core.LazySeq(null,(function (){var s__13712__$1 = s__13712;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13712__$1);if(temp__4126__auto__)
{var s__13712__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13712__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13712__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13714 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13713 = 0;while(true){
if((i__13713 < size__4197__auto__))
{var style = cljs.core._nth.call(null,c__4196__auto__,i__13713);cljs.core.chunk_append.call(null,b__13714,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__13715 = (i__13713 + 1);
i__13713 = G__13715;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13714),iter__13711.call(null,cljs.core.chunk_rest.call(null,s__13712__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13714),null);
}
} else
{var style = cljs.core.first.call(null,s__13712__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__13711.call(null,cljs.core.rest.call(null,s__13712__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__13716){
var styles = cljs.core.seq(arglist__13716);
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
sablono.core.link_to13717 = (function() { 
var link_to13717__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to13717 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to13717__delegate.call(this,url,content);};
link_to13717.cljs$lang$maxFixedArity = 1;
link_to13717.cljs$lang$applyTo = (function (arglist__13718){
var url = cljs.core.first(arglist__13718);
var content = cljs.core.rest(arglist__13718);
return link_to13717__delegate(url,content);
});
link_to13717.cljs$core$IFn$_invoke$arity$variadic = link_to13717__delegate;
return link_to13717;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to13717);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to13719 = (function() { 
var mail_to13719__delegate = function (e_mail,p__13720){var vec__13722 = p__13720;var content = cljs.core.nth.call(null,vec__13722,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3481__auto__ = content;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to13719 = function (e_mail,var_args){
var p__13720 = null;if (arguments.length > 1) {
  p__13720 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to13719__delegate.call(this,e_mail,p__13720);};
mail_to13719.cljs$lang$maxFixedArity = 1;
mail_to13719.cljs$lang$applyTo = (function (arglist__13723){
var e_mail = cljs.core.first(arglist__13723);
var p__13720 = cljs.core.rest(arglist__13723);
return mail_to13719__delegate(e_mail,p__13720);
});
mail_to13719.cljs$core$IFn$_invoke$arity$variadic = mail_to13719__delegate;
return mail_to13719;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to13719);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list13724 = (function unordered_list13724(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4198__auto__ = (function iter__13729(s__13730){return (new cljs.core.LazySeq(null,(function (){var s__13730__$1 = s__13730;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13730__$1);if(temp__4126__auto__)
{var s__13730__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13730__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13730__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13732 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13731 = 0;while(true){
if((i__13731 < size__4197__auto__))
{var x = cljs.core._nth.call(null,c__4196__auto__,i__13731);cljs.core.chunk_append.call(null,b__13732,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__13733 = (i__13731 + 1);
i__13731 = G__13733;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13732),iter__13729.call(null,cljs.core.chunk_rest.call(null,s__13730__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13732),null);
}
} else
{var x = cljs.core.first.call(null,s__13730__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__13729.call(null,cljs.core.rest.call(null,s__13730__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list13724);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list13734 = (function ordered_list13734(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4198__auto__ = (function iter__13739(s__13740){return (new cljs.core.LazySeq(null,(function (){var s__13740__$1 = s__13740;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13740__$1);if(temp__4126__auto__)
{var s__13740__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13740__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13740__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13742 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13741 = 0;while(true){
if((i__13741 < size__4197__auto__))
{var x = cljs.core._nth.call(null,c__4196__auto__,i__13741);cljs.core.chunk_append.call(null,b__13742,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__13743 = (i__13741 + 1);
i__13741 = G__13743;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13742),iter__13739.call(null,cljs.core.chunk_rest.call(null,s__13740__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13742),null);
}
} else
{var x = cljs.core.first.call(null,s__13740__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__13739.call(null,cljs.core.rest.call(null,s__13740__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list13734);
/**
* Create an image element.
*/
sablono.core.image13744 = (function() {
var image13744 = null;
var image13744__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image13744__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image13744 = function(src,alt){
switch(arguments.length){
case 1:
return image13744__1.call(this,src);
case 2:
return image13744__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image13744.cljs$core$IFn$_invoke$arity$1 = image13744__1;
image13744.cljs$core$IFn$_invoke$arity$2 = image13744__2;
return image13744;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image13744);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__13745_SHARP_,p2__13746_SHARP_){return [cljs.core.str(p1__13745_SHARP_),cljs.core.str("["),cljs.core.str(p2__13746_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__13747_SHARP_,p2__13748_SHARP_){return [cljs.core.str(p1__13747_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13748_SHARP_)].join('');
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
sablono.core.color_field13749 = (function() {
var color_field13749 = null;
var color_field13749__1 = (function (name__4956__auto__){return color_field13749.call(null,name__4956__auto__,null);
});
var color_field13749__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__4956__auto__,value__4957__auto__);
});
color_field13749 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return color_field13749__1.call(this,name__4956__auto__);
case 2:
return color_field13749__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field13749.cljs$core$IFn$_invoke$arity$1 = color_field13749__1;
color_field13749.cljs$core$IFn$_invoke$arity$2 = color_field13749__2;
return color_field13749;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field13749);
/**
* Creates a date input field.
*/
sablono.core.date_field13750 = (function() {
var date_field13750 = null;
var date_field13750__1 = (function (name__4956__auto__){return date_field13750.call(null,name__4956__auto__,null);
});
var date_field13750__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__4956__auto__,value__4957__auto__);
});
date_field13750 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return date_field13750__1.call(this,name__4956__auto__);
case 2:
return date_field13750__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field13750.cljs$core$IFn$_invoke$arity$1 = date_field13750__1;
date_field13750.cljs$core$IFn$_invoke$arity$2 = date_field13750__2;
return date_field13750;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field13750);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field13751 = (function() {
var datetime_field13751 = null;
var datetime_field13751__1 = (function (name__4956__auto__){return datetime_field13751.call(null,name__4956__auto__,null);
});
var datetime_field13751__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__4956__auto__,value__4957__auto__);
});
datetime_field13751 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return datetime_field13751__1.call(this,name__4956__auto__);
case 2:
return datetime_field13751__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field13751.cljs$core$IFn$_invoke$arity$1 = datetime_field13751__1;
datetime_field13751.cljs$core$IFn$_invoke$arity$2 = datetime_field13751__2;
return datetime_field13751;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field13751);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field13752 = (function() {
var datetime_local_field13752 = null;
var datetime_local_field13752__1 = (function (name__4956__auto__){return datetime_local_field13752.call(null,name__4956__auto__,null);
});
var datetime_local_field13752__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__4956__auto__,value__4957__auto__);
});
datetime_local_field13752 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return datetime_local_field13752__1.call(this,name__4956__auto__);
case 2:
return datetime_local_field13752__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field13752.cljs$core$IFn$_invoke$arity$1 = datetime_local_field13752__1;
datetime_local_field13752.cljs$core$IFn$_invoke$arity$2 = datetime_local_field13752__2;
return datetime_local_field13752;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field13752);
/**
* Creates a email input field.
*/
sablono.core.email_field13753 = (function() {
var email_field13753 = null;
var email_field13753__1 = (function (name__4956__auto__){return email_field13753.call(null,name__4956__auto__,null);
});
var email_field13753__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__4956__auto__,value__4957__auto__);
});
email_field13753 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return email_field13753__1.call(this,name__4956__auto__);
case 2:
return email_field13753__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field13753.cljs$core$IFn$_invoke$arity$1 = email_field13753__1;
email_field13753.cljs$core$IFn$_invoke$arity$2 = email_field13753__2;
return email_field13753;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field13753);
/**
* Creates a file input field.
*/
sablono.core.file_field13754 = (function() {
var file_field13754 = null;
var file_field13754__1 = (function (name__4956__auto__){return file_field13754.call(null,name__4956__auto__,null);
});
var file_field13754__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__4956__auto__,value__4957__auto__);
});
file_field13754 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return file_field13754__1.call(this,name__4956__auto__);
case 2:
return file_field13754__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field13754.cljs$core$IFn$_invoke$arity$1 = file_field13754__1;
file_field13754.cljs$core$IFn$_invoke$arity$2 = file_field13754__2;
return file_field13754;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field13754);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field13755 = (function() {
var hidden_field13755 = null;
var hidden_field13755__1 = (function (name__4956__auto__){return hidden_field13755.call(null,name__4956__auto__,null);
});
var hidden_field13755__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__4956__auto__,value__4957__auto__);
});
hidden_field13755 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return hidden_field13755__1.call(this,name__4956__auto__);
case 2:
return hidden_field13755__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field13755.cljs$core$IFn$_invoke$arity$1 = hidden_field13755__1;
hidden_field13755.cljs$core$IFn$_invoke$arity$2 = hidden_field13755__2;
return hidden_field13755;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field13755);
/**
* Creates a month input field.
*/
sablono.core.month_field13756 = (function() {
var month_field13756 = null;
var month_field13756__1 = (function (name__4956__auto__){return month_field13756.call(null,name__4956__auto__,null);
});
var month_field13756__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__4956__auto__,value__4957__auto__);
});
month_field13756 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return month_field13756__1.call(this,name__4956__auto__);
case 2:
return month_field13756__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field13756.cljs$core$IFn$_invoke$arity$1 = month_field13756__1;
month_field13756.cljs$core$IFn$_invoke$arity$2 = month_field13756__2;
return month_field13756;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field13756);
/**
* Creates a number input field.
*/
sablono.core.number_field13757 = (function() {
var number_field13757 = null;
var number_field13757__1 = (function (name__4956__auto__){return number_field13757.call(null,name__4956__auto__,null);
});
var number_field13757__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__4956__auto__,value__4957__auto__);
});
number_field13757 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return number_field13757__1.call(this,name__4956__auto__);
case 2:
return number_field13757__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field13757.cljs$core$IFn$_invoke$arity$1 = number_field13757__1;
number_field13757.cljs$core$IFn$_invoke$arity$2 = number_field13757__2;
return number_field13757;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field13757);
/**
* Creates a password input field.
*/
sablono.core.password_field13758 = (function() {
var password_field13758 = null;
var password_field13758__1 = (function (name__4956__auto__){return password_field13758.call(null,name__4956__auto__,null);
});
var password_field13758__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__4956__auto__,value__4957__auto__);
});
password_field13758 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return password_field13758__1.call(this,name__4956__auto__);
case 2:
return password_field13758__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field13758.cljs$core$IFn$_invoke$arity$1 = password_field13758__1;
password_field13758.cljs$core$IFn$_invoke$arity$2 = password_field13758__2;
return password_field13758;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field13758);
/**
* Creates a range input field.
*/
sablono.core.range_field13759 = (function() {
var range_field13759 = null;
var range_field13759__1 = (function (name__4956__auto__){return range_field13759.call(null,name__4956__auto__,null);
});
var range_field13759__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__4956__auto__,value__4957__auto__);
});
range_field13759 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return range_field13759__1.call(this,name__4956__auto__);
case 2:
return range_field13759__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field13759.cljs$core$IFn$_invoke$arity$1 = range_field13759__1;
range_field13759.cljs$core$IFn$_invoke$arity$2 = range_field13759__2;
return range_field13759;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field13759);
/**
* Creates a search input field.
*/
sablono.core.search_field13760 = (function() {
var search_field13760 = null;
var search_field13760__1 = (function (name__4956__auto__){return search_field13760.call(null,name__4956__auto__,null);
});
var search_field13760__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__4956__auto__,value__4957__auto__);
});
search_field13760 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return search_field13760__1.call(this,name__4956__auto__);
case 2:
return search_field13760__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field13760.cljs$core$IFn$_invoke$arity$1 = search_field13760__1;
search_field13760.cljs$core$IFn$_invoke$arity$2 = search_field13760__2;
return search_field13760;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field13760);
/**
* Creates a tel input field.
*/
sablono.core.tel_field13761 = (function() {
var tel_field13761 = null;
var tel_field13761__1 = (function (name__4956__auto__){return tel_field13761.call(null,name__4956__auto__,null);
});
var tel_field13761__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__4956__auto__,value__4957__auto__);
});
tel_field13761 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return tel_field13761__1.call(this,name__4956__auto__);
case 2:
return tel_field13761__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field13761.cljs$core$IFn$_invoke$arity$1 = tel_field13761__1;
tel_field13761.cljs$core$IFn$_invoke$arity$2 = tel_field13761__2;
return tel_field13761;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field13761);
/**
* Creates a text input field.
*/
sablono.core.text_field13762 = (function() {
var text_field13762 = null;
var text_field13762__1 = (function (name__4956__auto__){return text_field13762.call(null,name__4956__auto__,null);
});
var text_field13762__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__4956__auto__,value__4957__auto__);
});
text_field13762 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return text_field13762__1.call(this,name__4956__auto__);
case 2:
return text_field13762__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field13762.cljs$core$IFn$_invoke$arity$1 = text_field13762__1;
text_field13762.cljs$core$IFn$_invoke$arity$2 = text_field13762__2;
return text_field13762;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field13762);
/**
* Creates a time input field.
*/
sablono.core.time_field13763 = (function() {
var time_field13763 = null;
var time_field13763__1 = (function (name__4956__auto__){return time_field13763.call(null,name__4956__auto__,null);
});
var time_field13763__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__4956__auto__,value__4957__auto__);
});
time_field13763 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return time_field13763__1.call(this,name__4956__auto__);
case 2:
return time_field13763__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field13763.cljs$core$IFn$_invoke$arity$1 = time_field13763__1;
time_field13763.cljs$core$IFn$_invoke$arity$2 = time_field13763__2;
return time_field13763;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field13763);
/**
* Creates a url input field.
*/
sablono.core.url_field13764 = (function() {
var url_field13764 = null;
var url_field13764__1 = (function (name__4956__auto__){return url_field13764.call(null,name__4956__auto__,null);
});
var url_field13764__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__4956__auto__,value__4957__auto__);
});
url_field13764 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return url_field13764__1.call(this,name__4956__auto__);
case 2:
return url_field13764__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field13764.cljs$core$IFn$_invoke$arity$1 = url_field13764__1;
url_field13764.cljs$core$IFn$_invoke$arity$2 = url_field13764__2;
return url_field13764;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field13764);
/**
* Creates a week input field.
*/
sablono.core.week_field13765 = (function() {
var week_field13765 = null;
var week_field13765__1 = (function (name__4956__auto__){return week_field13765.call(null,name__4956__auto__,null);
});
var week_field13765__2 = (function (name__4956__auto__,value__4957__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__4956__auto__,value__4957__auto__);
});
week_field13765 = function(name__4956__auto__,value__4957__auto__){
switch(arguments.length){
case 1:
return week_field13765__1.call(this,name__4956__auto__);
case 2:
return week_field13765__2.call(this,name__4956__auto__,value__4957__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field13765.cljs$core$IFn$_invoke$arity$1 = week_field13765__1;
week_field13765.cljs$core$IFn$_invoke$arity$2 = week_field13765__2;
return week_field13765;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field13765);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box13766 = (function() {
var check_box13766 = null;
var check_box13766__1 = (function (name){return check_box13766.call(null,name,null);
});
var check_box13766__2 = (function (name,checked_QMARK_){return check_box13766.call(null,name,checked_QMARK_,"true");
});
var check_box13766__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box13766 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box13766__1.call(this,name);
case 2:
return check_box13766__2.call(this,name,checked_QMARK_);
case 3:
return check_box13766__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box13766.cljs$core$IFn$_invoke$arity$1 = check_box13766__1;
check_box13766.cljs$core$IFn$_invoke$arity$2 = check_box13766__2;
check_box13766.cljs$core$IFn$_invoke$arity$3 = check_box13766__3;
return check_box13766;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box13766);
/**
* Creates a radio button.
*/
sablono.core.radio_button13767 = (function() {
var radio_button13767 = null;
var radio_button13767__1 = (function (group){return radio_button13767.call(null,group,null);
});
var radio_button13767__2 = (function (group,checked_QMARK_){return radio_button13767.call(null,group,checked_QMARK_,"true");
});
var radio_button13767__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button13767 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button13767__1.call(this,group);
case 2:
return radio_button13767__2.call(this,group,checked_QMARK_);
case 3:
return radio_button13767__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button13767.cljs$core$IFn$_invoke$arity$1 = radio_button13767__1;
radio_button13767.cljs$core$IFn$_invoke$arity$2 = radio_button13767__2;
radio_button13767.cljs$core$IFn$_invoke$arity$3 = radio_button13767__3;
return radio_button13767;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button13767);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options13768 = (function() {
var select_options13768 = null;
var select_options13768__1 = (function (coll){return select_options13768.call(null,coll,null);
});
var select_options13768__2 = (function (coll,selected){var iter__4198__auto__ = (function iter__13777(s__13778){return (new cljs.core.LazySeq(null,(function (){var s__13778__$1 = s__13778;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13778__$1);if(temp__4126__auto__)
{var s__13778__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13778__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__13778__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__13780 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__13779 = 0;while(true){
if((i__13779 < size__4197__auto__))
{var x = cljs.core._nth.call(null,c__4196__auto__,i__13779);cljs.core.chunk_append.call(null,b__13780,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13783 = x;var text = cljs.core.nth.call(null,vec__13783,0,null);var val = cljs.core.nth.call(null,vec__13783,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__13783,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options13768.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__13785 = (i__13779 + 1);
i__13779 = G__13785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13780),iter__13777.call(null,cljs.core.chunk_rest.call(null,s__13778__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13780),null);
}
} else
{var x = cljs.core.first.call(null,s__13778__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13784 = x;var text = cljs.core.nth.call(null,vec__13784,0,null);var val = cljs.core.nth.call(null,vec__13784,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__13784,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options13768.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__13777.call(null,cljs.core.rest.call(null,s__13778__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__.call(null,coll);
});
select_options13768 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options13768__1.call(this,coll);
case 2:
return select_options13768__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options13768.cljs$core$IFn$_invoke$arity$1 = select_options13768__1;
select_options13768.cljs$core$IFn$_invoke$arity$2 = select_options13768__2;
return select_options13768;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options13768);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down13786 = (function() {
var drop_down13786 = null;
var drop_down13786__2 = (function (name,options){return drop_down13786.call(null,name,options,null);
});
var drop_down13786__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down13786 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down13786__2.call(this,name,options);
case 3:
return drop_down13786__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down13786.cljs$core$IFn$_invoke$arity$2 = drop_down13786__2;
drop_down13786.cljs$core$IFn$_invoke$arity$3 = drop_down13786__3;
return drop_down13786;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down13786);
/**
* Creates a text area element.
*/
sablono.core.text_area13787 = (function() {
var text_area13787 = null;
var text_area13787__1 = (function (name){return text_area13787.call(null,name,null);
});
var text_area13787__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area13787 = function(name,value){
switch(arguments.length){
case 1:
return text_area13787__1.call(this,name);
case 2:
return text_area13787__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area13787.cljs$core$IFn$_invoke$arity$1 = text_area13787__1;
text_area13787.cljs$core$IFn$_invoke$arity$2 = text_area13787__2;
return text_area13787;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area13787);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label13788 = (function label13788(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label13788);
/**
* Creates a submit button.
*/
sablono.core.submit_button13789 = (function submit_button13789(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button13789);
/**
* Creates a form reset button.
*/
sablono.core.reset_button13790 = (function reset_button13790(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button13790);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to13791 = (function() { 
var form_to13791__delegate = function (p__13792,body){var vec__13794 = p__13792;var method = cljs.core.nth.call(null,vec__13794,0,null);var action = cljs.core.nth.call(null,vec__13794,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to13791 = function (p__13792,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to13791__delegate.call(this,p__13792,body);};
form_to13791.cljs$lang$maxFixedArity = 1;
form_to13791.cljs$lang$applyTo = (function (arglist__13795){
var p__13792 = cljs.core.first(arglist__13795);
var body = cljs.core.rest(arglist__13795);
return form_to13791__delegate(p__13792,body);
});
form_to13791.cljs$core$IFn$_invoke$arity$variadic = form_to13791__delegate;
return form_to13791;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to13791);

//# sourceMappingURL=core.js.map