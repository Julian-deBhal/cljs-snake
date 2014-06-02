// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__13870,args){var map__13872 = p__13870;var map__13872__$1 = ((cljs.core.seq_QMARK_.call(null,map__13872))?cljs.core.apply.call(null,cljs.core.hash_map,map__13872):map__13872);var debug = cljs.core.get.call(null,map__13872__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13870,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13870,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13873){
var p__13870 = cljs.core.first(arglist__13873);
var args = cljs.core.rest(arglist__13873);
return log__delegate(p__13870,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__13874,callback){var map__13876 = p__13874;var map__13876__$1 = ((cljs.core.seq_QMARK_.call(null,map__13876))?cljs.core.apply.call(null,cljs.core.hash_map,map__13876):map__13876);var msg = map__13876__$1;var dependency_file = cljs.core.get.call(null,map__13876__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__13876__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var file = cljs.core.get.call(null,map__13876__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_((function (){var or__3481__auto__ = dependency_file;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,file)).addCallback(((function (map__13876,map__13876__$1,msg,dependency_file,namespace,file){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
});})(map__13876,map__13876__$1,msg,dependency_file,namespace,file))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.reload_js_files = (function reload_js_files(p__13877,callback){var map__13913 = p__13877;var map__13913__$1 = ((cljs.core.seq_QMARK_.call(null,map__13913))?cljs.core.apply.call(null,cljs.core.hash_map,map__13913):map__13913);var files = cljs.core.get.call(null,map__13913__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__6419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto__,map__13913,map__13913__$1,files){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto__,map__13913,map__13913__$1,files){
return (function (state_13932){var state_val_13933 = (state_13932[1]);if((state_val_13933 === 6))
{var inst_13916 = (state_13932[7]);var inst_13924 = (state_13932[2]);var inst_13925 = [inst_13916];var inst_13926 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13925,null));var inst_13927 = cljs.core.apply.call(null,callback,inst_13926);var state_13932__$1 = (function (){var statearr_13934 = state_13932;(statearr_13934[8] = inst_13924);
return statearr_13934;
})();var statearr_13935_13948 = state_13932__$1;(statearr_13935_13948[2] = inst_13927);
(statearr_13935_13948[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13933 === 5))
{var inst_13930 = (state_13932[2]);var state_13932__$1 = state_13932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13932__$1,inst_13930);
} else
{if((state_val_13933 === 4))
{var state_13932__$1 = state_13932;var statearr_13936_13949 = state_13932__$1;(statearr_13936_13949[2] = null);
(statearr_13936_13949[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13933 === 3))
{var inst_13916 = (state_13932[7]);var inst_13919 = console.log("%cFigwheel: loading these files",figwheel.client.log_style);var inst_13920 = cljs.core.clj__GT_js.call(null,inst_13916);var inst_13921 = console.log(inst_13920);var inst_13922 = cljs.core.async.timeout.call(null,10);var state_13932__$1 = (function (){var statearr_13937 = state_13932;(statearr_13937[9] = inst_13919);
(statearr_13937[10] = inst_13921);
return statearr_13937;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13932__$1,6,inst_13922);
} else
{if((state_val_13933 === 2))
{var inst_13916 = (state_13932[7]);var inst_13916__$1 = (state_13932[2]);var inst_13917 = cljs.core.not_empty.call(null,inst_13916__$1);var state_13932__$1 = (function (){var statearr_13938 = state_13932;(statearr_13938[7] = inst_13916__$1);
return statearr_13938;
})();if(cljs.core.truth_(inst_13917))
{var statearr_13939_13950 = state_13932__$1;(statearr_13939_13950[1] = 3);
} else
{var statearr_13940_13951 = state_13932__$1;(statearr_13940_13951[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13933 === 1))
{var inst_13914 = figwheel.client.load_all_js_files.call(null,files);var state_13932__$1 = state_13932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13932__$1,2,inst_13914);
} else
{return null;
}
}
}
}
}
}
});})(c__6419__auto__,map__13913,map__13913__$1,files))
;return ((function (switch__6404__auto__,c__6419__auto__,map__13913,map__13913__$1,files){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_13944 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13944[0] = state_machine__6405__auto__);
(statearr_13944[1] = 1);
return statearr_13944;
});
var state_machine__6405__auto____1 = (function (state_13932){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_13932);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e13945){if((e13945 instanceof Object))
{var ex__6408__auto__ = e13945;var statearr_13946_13952 = state_13932;(statearr_13946_13952[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13953 = state_13932;
state_13932 = G__13953;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_13932){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_13932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__,map__13913,map__13913__$1,files))
})();var state__6421__auto__ = (function (){var statearr_13947 = f__6420__auto__.call(null);(statearr_13947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_13947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto__,map__13913,map__13913__$1,files))
);
return c__6419__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(css_path,link_href){return cljs.core._EQ_.call(null,css_path,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,link_href,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),location.host,""));
});
figwheel.client.get_correct_link = (function get_correct_link(css_path){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,css_path,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto__,parent){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto__,parent){
return (function (state_13974){var state_val_13975 = (state_13974[1]);if((state_val_13975 === 2))
{var inst_13971 = (state_13974[2]);var inst_13972 = parent.removeChild(orig_link);var state_13974__$1 = (function (){var statearr_13976 = state_13974;(statearr_13976[7] = inst_13971);
return statearr_13976;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13974__$1,inst_13972);
} else
{if((state_val_13975 === 1))
{var inst_13969 = cljs.core.async.timeout.call(null,200);var state_13974__$1 = state_13974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13974__$1,2,inst_13969);
} else
{return null;
}
}
});})(c__6419__auto__,parent))
;return ((function (switch__6404__auto__,c__6419__auto__,parent){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_13980 = [null,null,null,null,null,null,null,null];(statearr_13980[0] = state_machine__6405__auto__);
(statearr_13980[1] = 1);
return statearr_13980;
});
var state_machine__6405__auto____1 = (function (state_13974){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_13974);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e13981){if((e13981 instanceof Object))
{var ex__6408__auto__ = e13981;var statearr_13982_13984 = state_13974;(statearr_13982_13984[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13974);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13985 = state_13974;
state_13974 = G__13985;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_13974){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_13974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__,parent))
})();var state__6421__auto__ = (function (){var statearr_13983 = f__6420__auto__.call(null);(statearr_13983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_13983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto__,parent))
);
return c__6419__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13986){var map__13988 = p__13986;var map__13988__$1 = ((cljs.core.seq_QMARK_.call(null,map__13988))?cljs.core.apply.call(null,cljs.core.hash_map,map__13988):map__13988);var file = cljs.core.get.call(null,map__13988__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,file);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,file));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,file));
}
});
figwheel.client.reload_css_files = (function reload_css_files(files_msg,jsload_callback){var seq__13993_13997 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg));var chunk__13994_13998 = null;var count__13995_13999 = 0;var i__13996_14000 = 0;while(true){
if((i__13996_14000 < count__13995_13999))
{var f_14001 = cljs.core._nth.call(null,chunk__13994_13998,i__13996_14000);figwheel.client.reload_css_file.call(null,f_14001);
{
var G__14002 = seq__13993_13997;
var G__14003 = chunk__13994_13998;
var G__14004 = count__13995_13999;
var G__14005 = (i__13996_14000 + 1);
seq__13993_13997 = G__14002;
chunk__13994_13998 = G__14003;
count__13995_13999 = G__14004;
i__13996_14000 = G__14005;
continue;
}
} else
{var temp__4126__auto___14006 = cljs.core.seq.call(null,seq__13993_13997);if(temp__4126__auto___14006)
{var seq__13993_14007__$1 = temp__4126__auto___14006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13993_14007__$1))
{var c__4229__auto___14008 = cljs.core.chunk_first.call(null,seq__13993_14007__$1);{
var G__14009 = cljs.core.chunk_rest.call(null,seq__13993_14007__$1);
var G__14010 = c__4229__auto___14008;
var G__14011 = cljs.core.count.call(null,c__4229__auto___14008);
var G__14012 = 0;
seq__13993_13997 = G__14009;
chunk__13994_13998 = G__14010;
count__13995_13999 = G__14011;
i__13996_14000 = G__14012;
continue;
}
} else
{var f_14013 = cljs.core.first.call(null,seq__13993_14007__$1);figwheel.client.reload_css_file.call(null,f_14013);
{
var G__14014 = cljs.core.next.call(null,seq__13993_14007__$1);
var G__14015 = null;
var G__14016 = 0;
var G__14017 = 0;
seq__13993_13997 = G__14014;
chunk__13994_13998 = G__14015;
count__13995_13999 = G__14016;
i__13996_14000 = G__14017;
continue;
}
}
} else
{}
}
break;
}
console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
return console.log(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg))));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__14018){var map__14023 = p__14018;var map__14023__$1 = ((cljs.core.seq_QMARK_.call(null,map__14023))?cljs.core.apply.call(null,cljs.core.hash_map,map__14023):map__14023);var opts = map__14023__$1;var jsload_callback = cljs.core.get.call(null,map__14023__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__14023__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__14023__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__14024 = cljs.core._EQ_;var expr__14025 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__14024.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__14025)))
{return figwheel.client.reload_js_files.call(null,msg,jsload_callback);
} else
{if(cljs.core.truth_(pred__14024.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__14025)))
{return figwheel.client.reload_css_files.call(null,msg,jsload_callback);
} else
{return null;
}
}
});})(socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__14023,map__14023__$1,opts,jsload_callback,websocket_url,retry_count))
;
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__14027){var map__14031 = p__14027;var map__14031__$1 = ((cljs.core.seq_QMARK_.call(null,map__14031))?cljs.core.apply.call(null,cljs.core.hash_map,map__14031):map__14031);var opts = map__14031__$1;var jsload_callback = cljs.core.get.call(null,map__14031__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__14031__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__14031__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),((function (map__14031,map__14031__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14033 = {"detail":url};return obj14033;
})())));
});})(map__14031,map__14031__$1,opts,jsload_callback,websocket_url,retry_count))
,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws:"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
};
var watch_and_reload = function (var_args){
var p__14027 = null;if (arguments.length > 0) {
  p__14027 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__14027);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14034){
var p__14027 = cljs.core.seq(arglist__14034);
return watch_and_reload__delegate(p__14027);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map