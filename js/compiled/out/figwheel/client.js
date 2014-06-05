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
var log__delegate = function (p__18033,args){var map__18035 = p__18033;var map__18035__$1 = ((cljs.core.seq_QMARK_.call(null,map__18035))?cljs.core.apply.call(null,cljs.core.hash_map,map__18035):map__18035);var debug = cljs.core.get.call(null,map__18035__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__18033,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__18033,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__18036){
var p__18033 = cljs.core.first(arglist__18036);
var args = cljs.core.rest(arglist__18036);
return log__delegate(p__18033,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__18037,callback){var map__18039 = p__18037;var map__18039__$1 = ((cljs.core.seq_QMARK_.call(null,map__18039))?cljs.core.apply.call(null,cljs.core.hash_map,map__18039):map__18039);var msg = map__18039__$1;var dependency_file = cljs.core.get.call(null,map__18039__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__18039__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var file = cljs.core.get.call(null,map__18039__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_((function (){var or__7874__auto__ = dependency_file;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,file)).addCallback(((function (map__18039,map__18039__$1,msg,dependency_file,namespace,file){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
});})(map__18039,map__18039__$1,msg,dependency_file,namespace,file))
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
figwheel.client.reload_js_files = (function reload_js_files(p__18040,callback){var map__18076 = p__18040;var map__18076__$1 = ((cljs.core.seq_QMARK_.call(null,map__18076))?cljs.core.apply.call(null,cljs.core.hash_map,map__18076):map__18076);var files = cljs.core.get.call(null,map__18076__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10506__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto__,map__18076,map__18076__$1,files){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto__,map__18076,map__18076__$1,files){
return (function (state_18095){var state_val_18096 = (state_18095[1]);if((state_val_18096 === 6))
{var inst_18079 = (state_18095[7]);var inst_18087 = (state_18095[2]);var inst_18088 = [inst_18079];var inst_18089 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18088,null));var inst_18090 = cljs.core.apply.call(null,callback,inst_18089);var state_18095__$1 = (function (){var statearr_18097 = state_18095;(statearr_18097[8] = inst_18087);
return statearr_18097;
})();var statearr_18098_18111 = state_18095__$1;(statearr_18098_18111[2] = inst_18090);
(statearr_18098_18111[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18096 === 5))
{var inst_18093 = (state_18095[2]);var state_18095__$1 = state_18095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18095__$1,inst_18093);
} else
{if((state_val_18096 === 4))
{var state_18095__$1 = state_18095;var statearr_18099_18112 = state_18095__$1;(statearr_18099_18112[2] = null);
(statearr_18099_18112[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18096 === 3))
{var inst_18079 = (state_18095[7]);var inst_18082 = console.log("%cFigwheel: loading these files",figwheel.client.log_style);var inst_18083 = cljs.core.clj__GT_js.call(null,inst_18079);var inst_18084 = console.log(inst_18083);var inst_18085 = cljs.core.async.timeout.call(null,10);var state_18095__$1 = (function (){var statearr_18100 = state_18095;(statearr_18100[9] = inst_18084);
(statearr_18100[10] = inst_18082);
return statearr_18100;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18095__$1,6,inst_18085);
} else
{if((state_val_18096 === 2))
{var inst_18079 = (state_18095[7]);var inst_18079__$1 = (state_18095[2]);var inst_18080 = cljs.core.not_empty.call(null,inst_18079__$1);var state_18095__$1 = (function (){var statearr_18101 = state_18095;(statearr_18101[7] = inst_18079__$1);
return statearr_18101;
})();if(cljs.core.truth_(inst_18080))
{var statearr_18102_18113 = state_18095__$1;(statearr_18102_18113[1] = 3);
} else
{var statearr_18103_18114 = state_18095__$1;(statearr_18103_18114[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18096 === 1))
{var inst_18077 = figwheel.client.load_all_js_files.call(null,files);var state_18095__$1 = state_18095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18095__$1,2,inst_18077);
} else
{return null;
}
}
}
}
}
}
});})(c__10506__auto__,map__18076,map__18076__$1,files))
;return ((function (switch__10491__auto__,c__10506__auto__,map__18076,map__18076__$1,files){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_18107 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18107[0] = state_machine__10492__auto__);
(statearr_18107[1] = 1);
return statearr_18107;
});
var state_machine__10492__auto____1 = (function (state_18095){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_18095);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e18108){if((e18108 instanceof Object))
{var ex__10495__auto__ = e18108;var statearr_18109_18115 = state_18095;(statearr_18109_18115[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18116 = state_18095;
state_18095 = G__18116;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_18095){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_18095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto__,map__18076,map__18076__$1,files))
})();var state__10508__auto__ = (function (){var statearr_18110 = f__10507__auto__.call(null);(statearr_18110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto__);
return statearr_18110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto__,map__18076,map__18076__$1,files))
);
return c__10506__auto__;
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
var c__10506__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto__,parent){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto__,parent){
return (function (state_18137){var state_val_18138 = (state_18137[1]);if((state_val_18138 === 2))
{var inst_18134 = (state_18137[2]);var inst_18135 = parent.removeChild(orig_link);var state_18137__$1 = (function (){var statearr_18139 = state_18137;(statearr_18139[7] = inst_18134);
return statearr_18139;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18137__$1,inst_18135);
} else
{if((state_val_18138 === 1))
{var inst_18132 = cljs.core.async.timeout.call(null,200);var state_18137__$1 = state_18137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18137__$1,2,inst_18132);
} else
{return null;
}
}
});})(c__10506__auto__,parent))
;return ((function (switch__10491__auto__,c__10506__auto__,parent){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_18143 = [null,null,null,null,null,null,null,null];(statearr_18143[0] = state_machine__10492__auto__);
(statearr_18143[1] = 1);
return statearr_18143;
});
var state_machine__10492__auto____1 = (function (state_18137){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_18137);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e18144){if((e18144 instanceof Object))
{var ex__10495__auto__ = e18144;var statearr_18145_18147 = state_18137;(statearr_18145_18147[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18137);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18148 = state_18137;
state_18137 = G__18148;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_18137){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_18137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto__,parent))
})();var state__10508__auto__ = (function (){var statearr_18146 = f__10507__auto__.call(null);(statearr_18146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto__);
return statearr_18146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto__,parent))
);
return c__10506__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__18149){var map__18151 = p__18149;var map__18151__$1 = ((cljs.core.seq_QMARK_.call(null,map__18151))?cljs.core.apply.call(null,cljs.core.hash_map,map__18151):map__18151);var file = cljs.core.get.call(null,map__18151__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,file);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,file));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,file));
}
});
figwheel.client.reload_css_files = (function reload_css_files(files_msg,jsload_callback){var seq__18156_18160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg));var chunk__18157_18161 = null;var count__18158_18162 = 0;var i__18159_18163 = 0;while(true){
if((i__18159_18163 < count__18158_18162))
{var f_18164 = cljs.core._nth.call(null,chunk__18157_18161,i__18159_18163);figwheel.client.reload_css_file.call(null,f_18164);
{
var G__18165 = seq__18156_18160;
var G__18166 = chunk__18157_18161;
var G__18167 = count__18158_18162;
var G__18168 = (i__18159_18163 + 1);
seq__18156_18160 = G__18165;
chunk__18157_18161 = G__18166;
count__18158_18162 = G__18167;
i__18159_18163 = G__18168;
continue;
}
} else
{var temp__4126__auto___18169 = cljs.core.seq.call(null,seq__18156_18160);if(temp__4126__auto___18169)
{var seq__18156_18170__$1 = temp__4126__auto___18169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18156_18170__$1))
{var c__8622__auto___18171 = cljs.core.chunk_first.call(null,seq__18156_18170__$1);{
var G__18172 = cljs.core.chunk_rest.call(null,seq__18156_18170__$1);
var G__18173 = c__8622__auto___18171;
var G__18174 = cljs.core.count.call(null,c__8622__auto___18171);
var G__18175 = 0;
seq__18156_18160 = G__18172;
chunk__18157_18161 = G__18173;
count__18158_18162 = G__18174;
i__18159_18163 = G__18175;
continue;
}
} else
{var f_18176 = cljs.core.first.call(null,seq__18156_18170__$1);figwheel.client.reload_css_file.call(null,f_18176);
{
var G__18177 = cljs.core.next.call(null,seq__18156_18170__$1);
var G__18178 = null;
var G__18179 = 0;
var G__18180 = 0;
seq__18156_18160 = G__18177;
chunk__18157_18161 = G__18178;
count__18158_18162 = G__18179;
i__18159_18163 = G__18180;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__18181){var map__18186 = p__18181;var map__18186__$1 = ((cljs.core.seq_QMARK_.call(null,map__18186))?cljs.core.apply.call(null,cljs.core.hash_map,map__18186):map__18186);var opts = map__18186__$1;var jsload_callback = cljs.core.get.call(null,map__18186__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__18186__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__18186__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__18187 = cljs.core._EQ_;var expr__18188 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__18187.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__18188)))
{return figwheel.client.reload_js_files.call(null,msg,jsload_callback);
} else
{if(cljs.core.truth_(pred__18187.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__18188)))
{return figwheel.client.reload_css_files.call(null,msg,jsload_callback);
} else
{return null;
}
}
});})(socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__18186,map__18186__$1,opts,jsload_callback,websocket_url,retry_count))
;
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__18190){var map__18194 = p__18190;var map__18194__$1 = ((cljs.core.seq_QMARK_.call(null,map__18194))?cljs.core.apply.call(null,cljs.core.hash_map,map__18194):map__18194);var opts = map__18194__$1;var jsload_callback = cljs.core.get.call(null,map__18194__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__18194__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__18194__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),((function (map__18194,map__18194__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj18196 = {"detail":url};return obj18196;
})())));
});})(map__18194,map__18194__$1,opts,jsload_callback,websocket_url,retry_count))
,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws:"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
};
var watch_and_reload = function (var_args){
var p__18190 = null;if (arguments.length > 0) {
  p__18190 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__18190);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__18197){
var p__18190 = cljs.core.seq(arglist__18197);
return watch_and_reload__delegate(p__18190);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map