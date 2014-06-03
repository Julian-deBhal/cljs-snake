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
var log__delegate = function (p__13946,args){var map__13948 = p__13946;var map__13948__$1 = ((cljs.core.seq_QMARK_.call(null,map__13948))?cljs.core.apply.call(null,cljs.core.hash_map,map__13948):map__13948);var debug = cljs.core.get.call(null,map__13948__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13946,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13946,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13949){
var p__13946 = cljs.core.first(arglist__13949);
var args = cljs.core.rest(arglist__13949);
return log__delegate(p__13946,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__13950,callback){var map__13952 = p__13950;var map__13952__$1 = ((cljs.core.seq_QMARK_.call(null,map__13952))?cljs.core.apply.call(null,cljs.core.hash_map,map__13952):map__13952);var msg = map__13952__$1;var dependency_file = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var file = cljs.core.get.call(null,map__13952__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_((function (){var or__3481__auto__ = dependency_file;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,file)).addCallback(((function (map__13952,map__13952__$1,msg,dependency_file,namespace,file){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
});})(map__13952,map__13952__$1,msg,dependency_file,namespace,file))
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
figwheel.client.reload_js_files = (function reload_js_files(p__13953,callback){var map__13989 = p__13953;var map__13989__$1 = ((cljs.core.seq_QMARK_.call(null,map__13989))?cljs.core.apply.call(null,cljs.core.hash_map,map__13989):map__13989);var files = cljs.core.get.call(null,map__13989__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__6419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto__,map__13989,map__13989__$1,files){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto__,map__13989,map__13989__$1,files){
return (function (state_14008){var state_val_14009 = (state_14008[1]);if((state_val_14009 === 6))
{var inst_13992 = (state_14008[7]);var inst_14000 = (state_14008[2]);var inst_14001 = [inst_13992];var inst_14002 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14001,null));var inst_14003 = cljs.core.apply.call(null,callback,inst_14002);var state_14008__$1 = (function (){var statearr_14010 = state_14008;(statearr_14010[8] = inst_14000);
return statearr_14010;
})();var statearr_14011_14024 = state_14008__$1;(statearr_14011_14024[2] = inst_14003);
(statearr_14011_14024[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 5))
{var inst_14006 = (state_14008[2]);var state_14008__$1 = state_14008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14008__$1,inst_14006);
} else
{if((state_val_14009 === 4))
{var state_14008__$1 = state_14008;var statearr_14012_14025 = state_14008__$1;(statearr_14012_14025[2] = null);
(statearr_14012_14025[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 3))
{var inst_13992 = (state_14008[7]);var inst_13995 = console.log("%cFigwheel: loading these files",figwheel.client.log_style);var inst_13996 = cljs.core.clj__GT_js.call(null,inst_13992);var inst_13997 = console.log(inst_13996);var inst_13998 = cljs.core.async.timeout.call(null,10);var state_14008__$1 = (function (){var statearr_14013 = state_14008;(statearr_14013[9] = inst_13995);
(statearr_14013[10] = inst_13997);
return statearr_14013;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14008__$1,6,inst_13998);
} else
{if((state_val_14009 === 2))
{var inst_13992 = (state_14008[7]);var inst_13992__$1 = (state_14008[2]);var inst_13993 = cljs.core.not_empty.call(null,inst_13992__$1);var state_14008__$1 = (function (){var statearr_14014 = state_14008;(statearr_14014[7] = inst_13992__$1);
return statearr_14014;
})();if(cljs.core.truth_(inst_13993))
{var statearr_14015_14026 = state_14008__$1;(statearr_14015_14026[1] = 3);
} else
{var statearr_14016_14027 = state_14008__$1;(statearr_14016_14027[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14009 === 1))
{var inst_13990 = figwheel.client.load_all_js_files.call(null,files);var state_14008__$1 = state_14008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14008__$1,2,inst_13990);
} else
{return null;
}
}
}
}
}
}
});})(c__6419__auto__,map__13989,map__13989__$1,files))
;return ((function (switch__6404__auto__,c__6419__auto__,map__13989,map__13989__$1,files){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_14020 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14020[0] = state_machine__6405__auto__);
(statearr_14020[1] = 1);
return statearr_14020;
});
var state_machine__6405__auto____1 = (function (state_14008){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_14008);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e14021){if((e14021 instanceof Object))
{var ex__6408__auto__ = e14021;var statearr_14022_14028 = state_14008;(statearr_14022_14028[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14008);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14029 = state_14008;
state_14008 = G__14029;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_14008){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_14008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__,map__13989,map__13989__$1,files))
})();var state__6421__auto__ = (function (){var statearr_14023 = f__6420__auto__.call(null);(statearr_14023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_14023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto__,map__13989,map__13989__$1,files))
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
return (function (state_14050){var state_val_14051 = (state_14050[1]);if((state_val_14051 === 2))
{var inst_14047 = (state_14050[2]);var inst_14048 = parent.removeChild(orig_link);var state_14050__$1 = (function (){var statearr_14052 = state_14050;(statearr_14052[7] = inst_14047);
return statearr_14052;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14050__$1,inst_14048);
} else
{if((state_val_14051 === 1))
{var inst_14045 = cljs.core.async.timeout.call(null,200);var state_14050__$1 = state_14050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14050__$1,2,inst_14045);
} else
{return null;
}
}
});})(c__6419__auto__,parent))
;return ((function (switch__6404__auto__,c__6419__auto__,parent){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_14056 = [null,null,null,null,null,null,null,null];(statearr_14056[0] = state_machine__6405__auto__);
(statearr_14056[1] = 1);
return statearr_14056;
});
var state_machine__6405__auto____1 = (function (state_14050){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_14050);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e14057){if((e14057 instanceof Object))
{var ex__6408__auto__ = e14057;var statearr_14058_14060 = state_14050;(statearr_14058_14060[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14050);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14061 = state_14050;
state_14050 = G__14061;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_14050){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_14050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__,parent))
})();var state__6421__auto__ = (function (){var statearr_14059 = f__6420__auto__.call(null);(statearr_14059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_14059;
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
figwheel.client.reload_css_file = (function reload_css_file(p__14062){var map__14064 = p__14062;var map__14064__$1 = ((cljs.core.seq_QMARK_.call(null,map__14064))?cljs.core.apply.call(null,cljs.core.hash_map,map__14064):map__14064);var file = cljs.core.get.call(null,map__14064__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,file);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,file));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,file));
}
});
figwheel.client.reload_css_files = (function reload_css_files(files_msg,jsload_callback){var seq__14069_14073 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg));var chunk__14070_14074 = null;var count__14071_14075 = 0;var i__14072_14076 = 0;while(true){
if((i__14072_14076 < count__14071_14075))
{var f_14077 = cljs.core._nth.call(null,chunk__14070_14074,i__14072_14076);figwheel.client.reload_css_file.call(null,f_14077);
{
var G__14078 = seq__14069_14073;
var G__14079 = chunk__14070_14074;
var G__14080 = count__14071_14075;
var G__14081 = (i__14072_14076 + 1);
seq__14069_14073 = G__14078;
chunk__14070_14074 = G__14079;
count__14071_14075 = G__14080;
i__14072_14076 = G__14081;
continue;
}
} else
{var temp__4126__auto___14082 = cljs.core.seq.call(null,seq__14069_14073);if(temp__4126__auto___14082)
{var seq__14069_14083__$1 = temp__4126__auto___14082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14069_14083__$1))
{var c__4229__auto___14084 = cljs.core.chunk_first.call(null,seq__14069_14083__$1);{
var G__14085 = cljs.core.chunk_rest.call(null,seq__14069_14083__$1);
var G__14086 = c__4229__auto___14084;
var G__14087 = cljs.core.count.call(null,c__4229__auto___14084);
var G__14088 = 0;
seq__14069_14073 = G__14085;
chunk__14070_14074 = G__14086;
count__14071_14075 = G__14087;
i__14072_14076 = G__14088;
continue;
}
} else
{var f_14089 = cljs.core.first.call(null,seq__14069_14083__$1);figwheel.client.reload_css_file.call(null,f_14089);
{
var G__14090 = cljs.core.next.call(null,seq__14069_14083__$1);
var G__14091 = null;
var G__14092 = 0;
var G__14093 = 0;
seq__14069_14073 = G__14090;
chunk__14070_14074 = G__14091;
count__14071_14075 = G__14092;
i__14072_14076 = G__14093;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__14094){var map__14099 = p__14094;var map__14099__$1 = ((cljs.core.seq_QMARK_.call(null,map__14099))?cljs.core.apply.call(null,cljs.core.hash_map,map__14099):map__14099);var opts = map__14099__$1;var jsload_callback = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__14100 = cljs.core._EQ_;var expr__14101 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__14100.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__14101)))
{return figwheel.client.reload_js_files.call(null,msg,jsload_callback);
} else
{if(cljs.core.truth_(pred__14100.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__14101)))
{return figwheel.client.reload_css_files.call(null,msg,jsload_callback);
} else
{return null;
}
}
});})(socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__14099,map__14099__$1,opts,jsload_callback,websocket_url,retry_count))
;
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__14103){var map__14107 = p__14103;var map__14107__$1 = ((cljs.core.seq_QMARK_.call(null,map__14107))?cljs.core.apply.call(null,cljs.core.hash_map,map__14107):map__14107);var opts = map__14107__$1;var jsload_callback = cljs.core.get.call(null,map__14107__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__14107__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__14107__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),((function (map__14107,map__14107__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14109 = {"detail":url};return obj14109;
})())));
});})(map__14107,map__14107__$1,opts,jsload_callback,websocket_url,retry_count))
,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws:"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
};
var watch_and_reload = function (var_args){
var p__14103 = null;if (arguments.length > 0) {
  p__14103 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__14103);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14110){
var p__14103 = cljs.core.seq(arglist__14110);
return watch_and_reload__delegate(p__14103);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map