// Compiled by ClojureScript 0.0-2202
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test._STAR_entry_point_STAR_ = true;
cemerick.cljs.test._STAR_test_ctx_STAR_ = null;
cemerick.cljs.test.init_test_environment_STAR_ = (function init_test_environment_STAR_(aux_data){return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",1017460740),0,new cljs.core.Keyword(null,"pass","pass",1017337731),0,new cljs.core.Keyword(null,"fail","fail",1017039504),0,new cljs.core.Keyword(null,"error","error",1110689146),0], null),(cljs.core.truth_(cemerick.cljs.test._STAR_test_print_fn_STAR_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",740963180),cemerick.cljs.test._STAR_test_print_fn_STAR_], null):null)),new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1853176376),cljs.core.List.EMPTY),aux_data));
});
cemerick.cljs.test.init_test_environment = (function init_test_environment(){var G__14139 = cemerick.cljs.test.init_test_environment_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",1471979159),cljs.core.List.EMPTY], null));cljs.core.swap_BANG_.call(null,G__14139,cljs.core.assoc,new cljs.core.Keyword(null,"async","async",1107031534),cemerick.cljs.test.init_test_environment_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY));
return G__14139;
});
cemerick.cljs.test.registered_tests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function register_test_BANG_(ns,name,fn){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.assoc,name,fn);
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function register_test_ns_hook_BANG_(ns,name){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});

/**
* @constructor
* @param {*} test_env
* @param {*} test_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cemerick.cljs.test.TestContext = (function (test_env,test_name,__meta,__extmap){
this.test_env = test_env;
this.test_name = test_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k14141,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14141,new cljs.core.Keyword(null,"test-env","test-env",4160920740)))
{return self__.test_env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14141,new cljs.core.Keyword(null,"test-name","test-name",4082390616)))
{return self__.test_name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14141,else__4070__auto__);
} else
{return null;
}
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",4160920740),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",4082390616),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-env","test-env",4160920740),null,new cljs.core.Keyword(null,"test-name","test-name",4082390616),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__14140){var self__ = this;
var this__4074__auto____$1 = this;var pred__14143 = cljs.core.keyword_identical_QMARK_;var expr__14144 = k__4075__auto__;if(cljs.core.truth_(pred__14143.call(null,new cljs.core.Keyword(null,"test-env","test-env",4160920740),expr__14144)))
{return (new cemerick.cljs.test.TestContext(G__14140,self__.test_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14143.call(null,new cljs.core.Keyword(null,"test-name","test-name",4082390616),expr__14144)))
{return (new cemerick.cljs.test.TestContext(self__.test_env,G__14140,self__.__meta,self__.__extmap,null));
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__14140),null));
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",4160920740),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",4082390616),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__14140){var self__ = this;
var this__4066__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__14140,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
cemerick.cljs.test.TestContext.cljs$lang$type = true;
cemerick.cljs.test.TestContext.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.TestContext.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.__GT_TestContext = (function __GT_TestContext(test_env,test_name){return (new cemerick.cljs.test.TestContext(test_env,test_name));
});
cemerick.cljs.test.map__GT_TestContext = (function map__GT_TestContext(G__14142){return (new cemerick.cljs.test.TestContext(new cljs.core.Keyword(null,"test-env","test-env",4160920740).cljs$core$IFn$_invoke$arity$1(G__14142),new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(G__14142),null,cljs.core.dissoc.call(null,G__14142,new cljs.core.Keyword(null,"test-env","test-env",4160920740),new cljs.core.Keyword(null,"test-name","test-name",4082390616))));
});
cemerick.cljs.test.maybe_deref = (function maybe_deref(x){if((function (){var G__14147 = x;if(G__14147)
{var bit__4131__auto__ = (G__14147.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__4131__auto__) || (G__14147.cljs$core$IDeref$))
{return true;
} else
{if((!G__14147.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__14147);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__14147);
}
})())
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function testing_complete_QMARK_(test_env){var map__14149 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__14149__$1 = ((cljs.core.seq_QMARK_.call(null,map__14149))?cljs.core.apply.call(null,cljs.core.hash_map,map__14149):map__14149);var remaining = cljs.core.get.call(null,map__14149__$1,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",3842781245));var running = cljs.core.get.call(null,map__14149__$1,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",1286908024));var async = cljs.core.get.call(null,map__14149__$1,new cljs.core.Keyword(null,"async","async",1107031534));var and__3469__auto__ = cljs.core.empty_QMARK_.call(null,remaining);if(and__3469__auto__)
{var and__3469__auto____$1 = cljs.core.empty_QMARK_.call(null,running);if(and__3469__auto____$1)
{var or__3481__auto__ = (async == null);if(or__3481__auto__)
{return or__3481__auto__;
} else
{return testing_complete_QMARK_.call(null,async);
}
} else
{return and__3469__auto____$1;
}
} else
{return and__3469__auto__;
}
});
/**
* Registers a watcher on the :async testing (sub)environment provided by
* [test-env]; when its key metrics (:test, :pass, :fail, :error) change,
* [callback] will be called with [test-env].  The watcher will be removed when all
* tests are complete.
* 
* If [test-env] is already complete, [callback] will be called with it as an
* argument immediately, and no watcher will be registered.
*/
cemerick.cljs.test.on_async_progress = (function on_async_progress(test_env,callback){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env)))
{setTimeout((function (){return callback.call(null,test_env);
}),1);
} else
{cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref.call(null,test_env)),cljs.core.gensym.call(null,"on-progress"),(function (key,ref,old,new$){var vec__14152 = cljs.core.map.call(null,(function (p1__14150_SHARP_){return cljs.core.select_keys.call(null,p1__14150_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",1017460740),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"error","error",1110689146)], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));var oldv = cljs.core.nth.call(null,vec__14152,0,null);var newv = cljs.core.nth.call(null,vec__14152,1,null);var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_.call(null,new$);if(cljs.core.truth_((function (){var or__3481__auto__ = complete_QMARK_;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.not_EQ_.call(null,oldv,newv);
}
})()))
{callback.call(null,cemerick.cljs.test.maybe_deref.call(null,test_env));
} else
{}
if(cljs.core.truth_(complete_QMARK_))
{return cljs.core.remove_watch.call(null,ref,key);
} else
{return null;
}
}));
}
return test_env;
});
goog.exportSymbol('cemerick.cljs.test.on_async_progress', cemerick.cljs.test.on_async_progress);
/**
* Same as `on-async-progress`, but will only call [callback] when all tests are complete.
*/
cemerick.cljs.test.on_testing_complete = (function on_testing_complete(test_env,callback){return cemerick.cljs.test.on_async_progress.call(null,test_env,(function (test_env__$1){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env__$1)))
{return callback.call(null,test_env__$1);
} else
{return null;
}
}));
});
goog.exportSymbol('cemerick.cljs.test.on_testing_complete', cemerick.cljs.test.on_testing_complete);
/**
* Returns a string representation of the current test.  Renders names
* in the test environment's ::test-functions list, then the source file and line of
* current assertion.
*/
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(p__14153){var map__14155 = p__14153;var map__14155__$1 = ((cljs.core.seq_QMARK_.call(null,map__14155))?cljs.core.apply.call(null,cljs.core.hash_map,map__14155):map__14155);var m = map__14155__$1;var test_name = cljs.core.get.call(null,map__14155__$1,new cljs.core.Keyword(null,"test-name","test-name",4082390616));var test_env = cljs.core.get.call(null,map__14155__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));var line = cljs.core.get.call(null,map__14155__$1,new cljs.core.Keyword(null,"line","line",1017226086));var file = cljs.core.get.call(null,map__14155__$1,new cljs.core.Keyword(null,"file","file",1017047278));return [cljs.core.str(cljs.core.pr_str.call(null,(function (){var or__3481__auto__ = cljs.core.seq.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",1471979159).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))));if(or__3481__auto__)
{return or__3481__auto__;
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,test_name);
}
})())),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
* Returns a string representation of the current test context as represented in
* the [test-env]'s ::test-contexts list. Joins strings in that list with
* spaces.
*/
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(test_env){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1853176376).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))));
});
/**
* Increments the named counter in the [test-env] atom.
*/
cemerick.cljs.test.inc_report_counter = (function inc_report_counter(test_env,name){return cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.call(null,cljs.core.inc,0));
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.  See the documentation at
* the top of test_is.clj for more information on the types of
* arguments for 'report'.
*/
cemerick.cljs.test.report = (function (){var method_table__4339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4343__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("report",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4343__auto__,method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",1017047278),error.fileName,new cljs.core.Keyword(null,"line","line",1017226086),error.lineNumber], null);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function() {
var do_report = null;
var do_report__1 = (function (m){return cemerick.cljs.test.report.call(null,(function (){var G__14160 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",1110689146),G__14160))
{return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(m)),m);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fail","fail",1017039504),G__14160))
{return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,Error()),m);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return m;
} else
{return null;
}
}
}
})());
});
var do_report__2 = (function (p__14156,m){var map__14159 = p__14156;var map__14159__$1 = ((cljs.core.seq_QMARK_.call(null,map__14159))?cljs.core.apply.call(null,cljs.core.hash_map,map__14159):map__14159);var test_ctx = map__14159__$1;var test_name = cljs.core.get.call(null,map__14159__$1,new cljs.core.Keyword(null,"test-name","test-name",4082390616));var test_env = cljs.core.get.call(null,map__14159__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol(null,"TestContext","TestContext",586269270,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",1506483237,null))))].join('')));
}
return do_report.call(null,cljs.core.merge.call(null,m,test_ctx));
});
do_report = function(p__14156,m){
switch(arguments.length){
case 1:
return do_report__1.call(this,p__14156);
case 2:
return do_report__2.call(this,p__14156,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
do_report.cljs$core$IFn$_invoke$arity$1 = do_report__1;
do_report.cljs$core$IFn$_invoke$arity$2 = do_report__2;
return do_report;
})()
;
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__14161){var map__14162 = p__14161;var map__14162__$1 = ((cljs.core.seq_QMARK_.call(null,map__14162))?cljs.core.apply.call(null,cljs.core.hash_map,map__14162):map__14162);var m = map__14162__$1;var test_env = cljs.core.get.call(null,map__14162__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));var _STAR_print_fn_STAR_14163 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3481__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",740963180).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.call(null,m);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14163;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"pass","pass",1017337731),(function (p__14164){var map__14165 = p__14164;var map__14165__$1 = ((cljs.core.seq_QMARK_.call(null,map__14165))?cljs.core.apply.call(null,cljs.core.hash_map,map__14165):map__14165);var m = map__14165__$1;var test_env = cljs.core.get.call(null,map__14165__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));var _STAR_print_fn_STAR_14166 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3481__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",740963180).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"pass","pass",1017337731));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14166;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"fail","fail",1017039504),(function (p__14167){var map__14168 = p__14167;var map__14168__$1 = ((cljs.core.seq_QMARK_.call(null,map__14168))?cljs.core.apply.call(null,cljs.core.hash_map,map__14168):map__14168);var m = map__14168__$1;var test_env = cljs.core.get.call(null,map__14168__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));var _STAR_print_fn_STAR_14169 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3481__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",740963180).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"fail","fail",1017039504));
cljs.core.println.call(null,"\nFAIL in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1853176376).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4126__auto___14170 = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4126__auto___14170))
{var message_14171 = temp__4126__auto___14170;cljs.core.println.call(null,message_14171);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",3373152810).cljs$core$IFn$_invoke$arity$1(m)));
return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(m)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14169;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"error","error",1110689146),(function (p__14172){var map__14173 = p__14172;var map__14173__$1 = ((cljs.core.seq_QMARK_.call(null,map__14173))?cljs.core.apply.call(null,cljs.core.hash_map,map__14173):map__14173);var m = map__14173__$1;var test_env = cljs.core.get.call(null,map__14173__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));var _STAR_print_fn_STAR_14174 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3481__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",740963180).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"error","error",1110689146));
cljs.core.println.call(null,"\nERROR in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1853176376).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4126__auto___14175 = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4126__auto___14175))
{var message_14176 = temp__4126__auto___14175;cljs.core.println.call(null,message_14176);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",3373152810).cljs$core$IFn$_invoke$arity$1(m)));
cljs.core.print.call(null,"  actual: ");
var actual = new cljs.core.Keyword(null,"actual","actual",3885931776).cljs$core$IFn$_invoke$arity$1(m);if((actual instanceof Error))
{return cljs.core.println.call(null,actual.stack);
} else
{return cljs.core.prn.call(null,actual);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14174;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",4521901954),(function (p__14177){var map__14178 = p__14177;var map__14178__$1 = ((cljs.core.seq_QMARK_.call(null,map__14178))?cljs.core.apply.call(null,cljs.core.hash_map,map__14178):map__14178);var m = map__14178__$1;var test_env = cljs.core.get.call(null,map__14178__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));var _STAR_print_fn_STAR_14179 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3481__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",740963180).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",4521901954));
cljs.core.println.call(null,"\nWARNING in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1853176376).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4126__auto__ = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4126__auto__))
{var message = temp__4126__auto__;return cljs.core.println.call(null,message);
} else
{return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14179;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"summary","summary",3451231000),(function (p__14180){var map__14181 = p__14180;var map__14181__$1 = ((cljs.core.seq_QMARK_.call(null,map__14181))?cljs.core.apply.call(null,cljs.core.hash_map,map__14181):map__14181);var test_env = map__14181__$1;var error = cljs.core.get.call(null,map__14181__$1,new cljs.core.Keyword(null,"error","error",1110689146));var fail = cljs.core.get.call(null,map__14181__$1,new cljs.core.Keyword(null,"fail","fail",1017039504));var pass = cljs.core.get.call(null,map__14181__$1,new cljs.core.Keyword(null,"pass","pass",1017337731));var test = cljs.core.get.call(null,map__14181__$1,new cljs.core.Keyword(null,"test","test",1017460740));var _STAR_print_fn_STAR_14182 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3481__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",740963180).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.call(null,"\nRan",test,"tests containing",((pass + fail) + error),"assertions.");
var temp__4124__auto__ = (function (){var and__3469__auto__ = cljs.core.not.call(null,cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env));if(and__3469__auto__)
{return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.juxt.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",3842781245),new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",1286908024)).call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(test_env)))));
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var pending_count = temp__4124__auto__;return cljs.core.println.call(null,"Waiting on",pending_count,[cljs.core.str("asynchronous test"),cljs.core.str((((pending_count > 1))?"s":null)),cljs.core.str(" to complete.")].join(''));
} else
{return cljs.core.println.call(null,"Testing complete:",fail,"failures,",error,"errors.");
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14182;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",1359210286),(function (p__14183){var map__14184 = p__14183;var map__14184__$1 = ((cljs.core.seq_QMARK_.call(null,map__14184))?cljs.core.apply.call(null,cljs.core.hash_map,map__14184):map__14184);var m = map__14184__$1;var async = cljs.core.get.call(null,map__14184__$1,new cljs.core.Keyword(null,"async","async",1107031534));var test_env = cljs.core.get.call(null,map__14184__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));var ns = cljs.core.get.call(null,map__14184__$1,new cljs.core.Keyword(null,"ns","ns",1013907767));var _STAR_print_fn_STAR_14185 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3481__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",740963180).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.call(null,"\nTesting",ns,(cljs.core.truth_(async)?"(async)":""));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14185;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",3401491808),(function (p__14186){var map__14187 = p__14186;var map__14187__$1 = ((cljs.core.seq_QMARK_.call(null,map__14187))?cljs.core.apply.call(null,cljs.core.hash_map,map__14187):map__14187);var m = map__14187__$1;var test_env = cljs.core.get.call(null,map__14187__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-var","begin-test-var",3128464258),(function (p__14188){var map__14189 = p__14188;var map__14189__$1 = ((cljs.core.seq_QMARK_.call(null,map__14189))?cljs.core.apply.call(null,cljs.core.hash_map,map__14189):map__14189);var m = map__14189__$1;var test_env = cljs.core.get.call(null,map__14189__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-var","end-test-var",2014682000),(function (p__14190){var map__14191 = p__14190;var map__14191__$1 = ((cljs.core.seq_QMARK_.call(null,map__14191))?cljs.core.apply.call(null,cljs.core.hash_map,map__14191):map__14191);var m = map__14191__$1;var test_env = cljs.core.get.call(null,map__14191__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));return null;
}));
/**
* Wrap test runs in a fixture function to perform setup and
* teardown. Using a fixture-type of :each wraps every test
* individually, while :once wraps the whole run in a single function.
* @param {...*} var_args
*/
cemerick.cljs.test.register_fixtures_BANG_ = (function() { 
var register_fixtures_BANG___delegate = function (ns_sym,fixture_type,fixture_fns){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly.call(null,fixture_fns));
};
var register_fixtures_BANG_ = function (ns_sym,fixture_type,var_args){
var fixture_fns = null;if (arguments.length > 2) {
  fixture_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return register_fixtures_BANG___delegate.call(this,ns_sym,fixture_type,fixture_fns);};
register_fixtures_BANG_.cljs$lang$maxFixedArity = 2;
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__14192){
var ns_sym = cljs.core.first(arglist__14192);
arglist__14192 = cljs.core.next(arglist__14192);
var fixture_type = cljs.core.first(arglist__14192);
var fixture_fns = cljs.core.rest(arglist__14192);
return register_fixtures_BANG___delegate(ns_sym,fixture_type,fixture_fns);
});
register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = register_fixtures_BANG___delegate;
return register_fixtures_BANG_;
})()
;
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cemerick.cljs.test.default_fixture = (function default_fixture(f){return f.call(null);
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cemerick.cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){return (function (g){return f1.call(null,(function (){return f2.call(null,g);
}));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cemerick.cljs.test.join_fixtures = (function join_fixtures(fixtures){return cljs.core.reduce.call(null,cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
cemerick.cljs.test.async_test_QMARK_ = (function async_test_QMARK_(test_fn){return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,test_fn)));
});
cemerick.cljs.test.test_async_fn = (function test_async_fn(async_test_env,test_name,test_fn){cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",3128464258),new cljs.core.Keyword(null,"var","var",1014020761),test_fn,new cljs.core.Keyword(null,"test-env","test-env",4160920740),async_test_env,new cljs.core.Keyword(null,"test-name","test-name",4082390616),test_name], null));
cemerick.cljs.test.inc_report_counter.call(null,async_test_env,new cljs.core.Keyword(null,"test","test",1017460740));
return test_fn.call(null,(new cemerick.cljs.test.TestContext(async_test_env,test_name)));
});
cemerick.cljs.test.start_next_async_test = (function start_next_async_test(async_test_env){var next_test = cljs.core.atom.call(null,(function (){return null;
}));cljs.core.swap_BANG_.call(null,async_test_env,((function (next_test){
return (function (env){var temp__4124__auto__ = (function (){var and__3469__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"stop","stop",1017445236).cljs$core$IFn$_invoke$arity$1(env));if(and__3469__auto__)
{return cljs.core.first.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",3842781245).cljs$core$IFn$_invoke$arity$1(env));
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var vec__14194 = temp__4124__auto__;var name = cljs.core.nth.call(null,vec__14194,0,null);var testfn = cljs.core.nth.call(null,vec__14194,1,null);cljs.core.reset_BANG_.call(null,next_test,testfn);
var ns_14195 = cljs.core.namespace.call(null,name);if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"namespaces","namespaces",1177962986).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,async_test_env)),ns_14195))
{} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",1359210286),new cljs.core.Keyword(null,"ns","ns",1013907767),ns_14195,new cljs.core.Keyword(null,"test-env","test-env",4160920740),async_test_env,new cljs.core.Keyword(null,"async","async",1107031534),true], null));
cljs.core.alter_meta_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",1177962986)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_14195);
}
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",3842781245)], null),cljs.core.dissoc,name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",1286908024)], null),cljs.core.assoc,name,(new Date()));
} else
{return env;
}
});})(next_test))
);
setTimeout(((function (next_test){
return (function (){return cljs.core.deref.call(null,next_test).call(null);
});})(next_test))
,1);
return async_test_env;
});
/**
* Removes framework-internal bits from a test environment for more pleasant human viewing.
*/
cemerick.cljs.test.squelch_internals = (function squelch_internals(test_env){var G__14200 = test_env;cljs.core.swap_BANG_.call(null,G__14200,((function (G__14200){
return (function (p1__14196_SHARP_){return cljs.core.reduce.call(null,((function (G__14200){
return (function (env,p__14201){var vec__14202 = p__14201;var k = cljs.core.nth.call(null,vec__14202,0,null);var v = cljs.core.nth.call(null,vec__14202,1,null);if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,k),cljs.core.namespace.call(null,new cljs.core.Keyword("cemerick.cljs.test","foo","cemerick.cljs.test/foo",4582478189))))
{return env;
} else
{return cljs.core.assoc.call(null,env,k,v);
}
});})(G__14200))
,cljs.core.PersistentArrayMap.EMPTY,p1__14196_SHARP_);
});})(G__14200))
);
return G__14200;
});
cemerick.cljs.test.finish_test_entry_point = (function finish_test_entry_point(entry_point_QMARK_,test_env){if(cljs.core.truth_(entry_point_QMARK_))
{if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",3842781245).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))))
{cljs.core.swap_BANG_.call(null,test_env,cljs.core.dissoc,new cljs.core.Keyword(null,"async","async",1107031534));
} else
{cemerick.cljs.test.start_next_async_test.call(null,new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)));
}
return cljs.core.deref.call(null,cemerick.cljs.test.squelch_internals.call(null,test_env));
} else
{return test_env;
}
});
cemerick.cljs.test.schedule_async_test = (function schedule_async_test(async_test_env,test_name,test_fn){cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",3842781245)], null),cljs.core.fnil.call(null,cljs.core.assoc,cljs.core.sorted_map.call(null)),test_name,cljs.core.with_meta.call(null,(function (){return cemerick.cljs.test.test_async_fn.call(null,async_test_env,test_name,test_fn);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),test_name], null)));
return async_test_env;
});
cemerick.cljs.test.done_STAR_ = (function() {
var done_STAR_ = null;
var done_STAR___1 = (function (p__14204){var map__14208 = p__14204;var map__14208__$1 = ((cljs.core.seq_QMARK_.call(null,map__14208))?cljs.core.apply.call(null,cljs.core.hash_map,map__14208):map__14208);var test_ctx = map__14208__$1;var test_name = cljs.core.get.call(null,map__14208__$1,new cljs.core.Keyword(null,"test-name","test-name",4082390616));var async_test_env = cljs.core.get.call(null,map__14208__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol(null,"TestContext","TestContext",586269270,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",1506483237,null))))].join('')));
}
var first_call_QMARK_ = cljs.core.atom.call(null,false);cljs.core.swap_BANG_.call(null,async_test_env,((function (first_call_QMARK_,map__14208,map__14208__$1,test_ctx,test_name,async_test_env){
return (function (env){cljs.core.reset_BANG_.call(null,first_call_QMARK_,cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",1286908024).cljs$core$IFn$_invoke$arity$1(env),test_name));
return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",1286908024)], null),cljs.core.dissoc,test_name);
});})(first_call_QMARK_,map__14208,map__14208__$1,test_ctx,test_name,async_test_env))
);
if(cljs.core.truth_(cljs.core.deref.call(null,first_call_QMARK_)))
{cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"end-test-var","end-test-var",2014682000),new cljs.core.Keyword(null,"var","var",1014020761),test_name], null),test_ctx));
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,async_test_env)))
{cemerick.cljs.test.squelch_internals.call(null,async_test_env);
} else
{cemerick.cljs.test.start_next_async_test.call(null,async_test_env);
}
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",4521901954),new cljs.core.Keyword(null,"message","message",1968829305),"`(done)` called multiple times to signal end-of-test"], null),test_ctx));
}
return async_test_env;
});
var done_STAR___2 = (function (p__14203,error){var map__14207 = p__14203;var map__14207__$1 = ((cljs.core.seq_QMARK_.call(null,map__14207))?cljs.core.apply.call(null,cljs.core.hash_map,map__14207):map__14207);var test_ctx = map__14207__$1;var test_name = cljs.core.get.call(null,map__14207__$1,new cljs.core.Keyword(null,"test-name","test-name",4082390616));var test_env = cljs.core.get.call(null,map__14207__$1,new cljs.core.Keyword(null,"test-env","test-env",4160920740));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol(null,"TestContext","TestContext",586269270,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",1506483237,null))))].join('')));
}
cemerick.cljs.test.do_report.call(null,cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",3373152810),null,new cljs.core.Keyword(null,"actual","actual",3885931776),error], null),test_ctx)));
return done_STAR_.call(null,test_ctx);
});
done_STAR_ = function(p__14203,error){
switch(arguments.length){
case 1:
return done_STAR___1.call(this,p__14203);
case 2:
return done_STAR___2.call(this,p__14203,error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
done_STAR_.cljs$core$IFn$_invoke$arity$1 = done_STAR___1;
done_STAR_.cljs$core$IFn$_invoke$arity$2 = done_STAR___2;
return done_STAR_;
})()
;
cemerick.cljs.test.stop = (function stop(async_test_env){return cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.assoc,new cljs.core.Keyword(null,"stop","stop",1017445236),true);
});
/**
* If v has a function in its :test metadata, calls that function,
* conjing its name into the test environment's ::test-functions list.
* 
* Note that this is the implementation of `test-var` in clojure.test,
* which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
* in the Clojure file for `test-var`.
*/
cemerick.cljs.test.test_function = (function() {
var test_function = null;
var test_function__1 = (function (v){return test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),v);
});
var test_function__2 = (function (test_env,v){var entry_point_QMARK___5174__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_14212 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
if(cljs.core.fn_QMARK_.call(null,v))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("test-var must be passed the function to be tested (not a symbol naming it)"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"v","v",-1640531409,null))))].join('')));
}
var map__14213_14215 = cljs.core.meta.call(null,v);var map__14213_14216__$1 = ((cljs.core.seq_QMARK_.call(null,map__14213_14215))?cljs.core.apply.call(null,cljs.core.hash_map,map__14213_14215):map__14213_14215);var t_14217 = cljs.core.get.call(null,map__14213_14216__$1,new cljs.core.Keyword(null,"test","test",1017460740));var test_name_14218 = cljs.core.get.call(null,map__14213_14216__$1,new cljs.core.Keyword(null,"name","name",1017277949));var async_QMARK__14219 = cljs.core.get.call(null,map__14213_14216__$1,new cljs.core.Keyword(null,"async","async",1107031534));if(cljs.core.truth_(t_14217))
{if(cljs.core.truth_(async_QMARK__14219))
{cemerick.cljs.test.schedule_async_test.call(null,new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),test_name_14218,t_14217);
} else
{try{cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",1471979159)], null),cljs.core.conj,(function (){var or__3481__auto__ = test_name_14218;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",3128464258),new cljs.core.Keyword(null,"var","var",1014020761),v,new cljs.core.Keyword(null,"test-env","test-env",4160920740),test_env,new cljs.core.Keyword(null,"test-name","test-name",4082390616),test_name_14218], null));
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"test","test",1017460740));
try{t_14217.call(null,(new cemerick.cljs.test.TestContext(test_env,test_name_14218)));
}catch (e14214){if((e14214 instanceof Error))
{var e_14220 = e14214;cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"test-env","test-env",4160920740),test_env,new cljs.core.Keyword(null,"test-name","test-name",4082390616),test_name_14218,new cljs.core.Keyword(null,"expected","expected",3373152810),null,new cljs.core.Keyword(null,"actual","actual",3885931776),e_14220], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14214;
} else
{}
}
}cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"end-test-var","end-test-var",2014682000),new cljs.core.Keyword(null,"var","var",1014020761),v,new cljs.core.Keyword(null,"test-env","test-env",4160920740),test_env,new cljs.core.Keyword(null,"test-name","test-name",4082390616),test_name_14218], null));
}finally {cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",1471979159)], null),cljs.core.pop);
}}
} else
{}
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5174__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_14212;
}});
test_function = function(test_env,v){
switch(arguments.length){
case 1:
return test_function__1.call(this,test_env);
case 2:
return test_function__2.call(this,test_env,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_function.cljs$core$IFn$_invoke$arity$1 = test_function__1;
test_function.cljs$core$IFn$_invoke$arity$2 = test_function__2;
return test_function;
})()
;
/**
* Calls test-var on every var interned in the namespace, with fixtures.
*/
cemerick.cljs.test.test_all_vars = (function() {
var test_all_vars = null;
var test_all_vars__1 = (function (ns_sym){return test_all_vars.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_all_vars__2 = (function (test_env,ns_sym){var entry_point_QMARK___5174__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_14229 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var tests_14234 = cljs.core.filter.call(null,((function (_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__){
return (function (p1__14221_SHARP_){return new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__14221_SHARP_));
});})(_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__))
,cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests),ns_sym)));var once_fixture_fn_14235 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"once","once",1017319923).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));var each_fixture_fn_14236 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"each","each",1017009523).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));once_fixture_fn_14235.call(null,((function (once_fixture_fn_14235,each_fixture_fn_14236,tests_14234,_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__){
return (function (){var seq__14230 = cljs.core.seq.call(null,cljs.core.remove.call(null,cemerick.cljs.test.async_test_QMARK_,tests_14234));var chunk__14231 = null;var count__14232 = 0;var i__14233 = 0;while(true){
if((i__14233 < count__14232))
{var v = cljs.core._nth.call(null,chunk__14231,i__14233);each_fixture_fn_14236.call(null,((function (seq__14230,chunk__14231,count__14232,i__14233,v,once_fixture_fn_14235,each_fixture_fn_14236,tests_14234,_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__14230,chunk__14231,count__14232,i__14233,v,once_fixture_fn_14235,each_fixture_fn_14236,tests_14234,_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__))
);
{
var G__14237 = seq__14230;
var G__14238 = chunk__14231;
var G__14239 = count__14232;
var G__14240 = (i__14233 + 1);
seq__14230 = G__14237;
chunk__14231 = G__14238;
count__14232 = G__14239;
i__14233 = G__14240;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14230);if(temp__4126__auto__)
{var seq__14230__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14230__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__14230__$1);{
var G__14241 = cljs.core.chunk_rest.call(null,seq__14230__$1);
var G__14242 = c__4229__auto__;
var G__14243 = cljs.core.count.call(null,c__4229__auto__);
var G__14244 = 0;
seq__14230 = G__14241;
chunk__14231 = G__14242;
count__14232 = G__14243;
i__14233 = G__14244;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__14230__$1);each_fixture_fn_14236.call(null,((function (seq__14230,chunk__14231,count__14232,i__14233,v,seq__14230__$1,temp__4126__auto__,once_fixture_fn_14235,each_fixture_fn_14236,tests_14234,_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__14230,chunk__14231,count__14232,i__14233,v,seq__14230__$1,temp__4126__auto__,once_fixture_fn_14235,each_fixture_fn_14236,tests_14234,_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__))
);
{
var G__14245 = cljs.core.next.call(null,seq__14230__$1);
var G__14246 = null;
var G__14247 = 0;
var G__14248 = 0;
seq__14230 = G__14245;
chunk__14231 = G__14246;
count__14232 = G__14247;
i__14233 = G__14248;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(once_fixture_fn_14235,each_fixture_fn_14236,tests_14234,_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__))
);
cljs.core.reduce.call(null,((function (tests_14234,_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__){
return (function (p1__14222_SHARP_,p2__14223_SHARP_){return cljs.core.apply.call(null,cemerick.cljs.test.schedule_async_test,p1__14222_SHARP_,p2__14223_SHARP_);
});})(tests_14234,_STAR_entry_point_STAR_14229,entry_point_QMARK___5174__auto__))
,new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"test","test",1017460740)),cljs.core.meta),cljs.core.filter.call(null,cemerick.cljs.test.async_test_QMARK_,tests_14234)));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5174__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_14229;
}});
test_all_vars = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_all_vars__1.call(this,test_env);
case 2:
return test_all_vars__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_all_vars.cljs$core$IFn$_invoke$arity$1 = test_all_vars__1;
test_all_vars.cljs$core$IFn$_invoke$arity$2 = test_all_vars__2;
return test_all_vars;
})()
;
/**
* If the namespace defines a function named test-ns-hook, calls that.
* Otherwise, calls test-all-vars on the namespace.  'ns' is a
* namespace object or a symbol.
* 
* Internally binds *report-counters* to an atom initialized to
* *inital-report-counters*.  Returns the final, dereferenced state of
* *report-counters*.
*/
cemerick.cljs.test.test_ns = (function() {
var test_ns = null;
var test_ns__1 = (function (ns_sym){return test_ns.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_ns__2 = (function (test_env,ns_sym){var entry_point_QMARK___5174__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_14250 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",1359210286),new cljs.core.Keyword(null,"ns","ns",1013907767),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",4160920740),test_env], null));
var temp__4124__auto___14251 = cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks),ns_sym);if(cljs.core.truth_(temp__4124__auto___14251))
{var test_hook_14252 = temp__4124__auto___14251;test_hook_14252.call(null,test_env);
} else
{cemerick.cljs.test.test_all_vars.call(null,test_env,ns_sym);
}
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",3401491808),new cljs.core.Keyword(null,"ns","ns",1013907767),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",4160920740),test_env], null));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5174__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_14250;
}});
test_ns = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_ns__1.call(this,test_env);
case 2:
return test_ns__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_ns.cljs$core$IFn$_invoke$arity$1 = test_ns__1;
test_ns.cljs$core$IFn$_invoke$arity$2 = test_ns__2;
return test_ns;
})()
;
cemerick.cljs.test.test_summary = (function test_summary(test_env){var test_env__$1 = cemerick.cljs.test.maybe_deref.call(null,test_env);return cemerick.cljs.test.do_report.call(null,cljs.core.assoc.call(null,cljs.core.merge_with.call(null,cljs.core._PLUS_,test_env__$1,cemerick.cljs.test.maybe_deref.call(null,new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(test_env__$1))),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"summary","summary",3451231000)));
});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){var vec__14259 = (((cljs.core.first.call(null,namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons.call(null,cemerick.cljs.test.init_test_environment.call(null),namespaces));var test_env = cljs.core.nth.call(null,vec__14259,0,null);var namespaces__$1 = cljs.core.nthnext.call(null,vec__14259,1);var entry_point_QMARK___5174__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_14260 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var seq__14261_14265 = cljs.core.seq.call(null,cljs.core.distinct.call(null,namespaces__$1));var chunk__14262_14266 = null;var count__14263_14267 = 0;var i__14264_14268 = 0;while(true){
if((i__14264_14268 < count__14263_14267))
{var ns_14269 = cljs.core._nth.call(null,chunk__14262_14266,i__14264_14268);cemerick.cljs.test.test_ns.call(null,test_env,ns_14269);
{
var G__14270 = seq__14261_14265;
var G__14271 = chunk__14262_14266;
var G__14272 = count__14263_14267;
var G__14273 = (i__14264_14268 + 1);
seq__14261_14265 = G__14270;
chunk__14262_14266 = G__14271;
count__14263_14267 = G__14272;
i__14264_14268 = G__14273;
continue;
}
} else
{var temp__4126__auto___14274 = cljs.core.seq.call(null,seq__14261_14265);if(temp__4126__auto___14274)
{var seq__14261_14275__$1 = temp__4126__auto___14274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14261_14275__$1))
{var c__4229__auto___14276 = cljs.core.chunk_first.call(null,seq__14261_14275__$1);{
var G__14277 = cljs.core.chunk_rest.call(null,seq__14261_14275__$1);
var G__14278 = c__4229__auto___14276;
var G__14279 = cljs.core.count.call(null,c__4229__auto___14276);
var G__14280 = 0;
seq__14261_14265 = G__14277;
chunk__14262_14266 = G__14278;
count__14263_14267 = G__14279;
i__14264_14268 = G__14280;
continue;
}
} else
{var ns_14281 = cljs.core.first.call(null,seq__14261_14275__$1);cemerick.cljs.test.test_ns.call(null,test_env,ns_14281);
{
var G__14282 = cljs.core.next.call(null,seq__14261_14275__$1);
var G__14283 = null;
var G__14284 = 0;
var G__14285 = 0;
seq__14261_14265 = G__14282;
chunk__14262_14266 = G__14283;
count__14263_14267 = G__14284;
i__14264_14268 = G__14285;
continue;
}
}
} else
{}
}
break;
}
cemerick.cljs.test.on_testing_complete.call(null,test_env,cemerick.cljs.test.test_summary);
cemerick.cljs.test.test_summary.call(null,test_env);
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5174__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_14260;
}};
var run_tests_STAR_ = function (var_args){
var namespaces = null;if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__14286){
var namespaces = cljs.core.seq(arglist__14286);
return run_tests_STAR___delegate(namespaces);
});
run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = run_tests_STAR___delegate;
return run_tests_STAR_;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);
/**
* Runs all tests in all namespaces; prints results.
* Optional argument is a regular expression; only namespaces with
* names matching the regular expression (with re-matches) will be
* tested.
*/
cemerick.cljs.test.run_all_tests = (function() {
var run_all_tests = null;
var run_all_tests__0 = (function (){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)));
});
var run_all_tests__1 = (function (re){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.call(null,(function (p1__14287_SHARP_){return cljs.core.re_matches.call(null,re,cljs.core.name.call(null,p1__14287_SHARP_));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests))));
});
run_all_tests = function(re){
switch(arguments.length){
case 0:
return run_all_tests__0.call(this);
case 1:
return run_all_tests__1.call(this,re);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run_all_tests.cljs$core$IFn$_invoke$arity$0 = run_all_tests__0;
run_all_tests.cljs$core$IFn$_invoke$arity$1 = run_all_tests__1;
return run_all_tests;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(test_env){var map__14289 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__14289__$1 = ((cljs.core.seq_QMARK_.call(null,map__14289))?cljs.core.apply.call(null,cljs.core.hash_map,map__14289):map__14289);var async = cljs.core.get.call(null,map__14289__$1,new cljs.core.Keyword(null,"async","async",1107031534));var error = cljs.core.get.call(null,map__14289__$1,new cljs.core.Keyword(null,"error","error",1110689146));var fail = cljs.core.get.call(null,map__14289__$1,new cljs.core.Keyword(null,"fail","fail",1017039504));var and__3469__auto__ = cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env);if(cljs.core.truth_(and__3469__auto__))
{var and__3469__auto____$1 = ((function (){var or__3481__auto__ = fail;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return 0;
}
})() === 0);if(and__3469__auto____$1)
{var and__3469__auto____$2 = ((function (){var or__3481__auto__ = error;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return 0;
}
})() === 0);if(and__3469__auto____$2)
{var or__3481__auto__ = (async == null);if(or__3481__auto__)
{return or__3481__auto__;
} else
{return successful_QMARK_.call(null,async);
}
} else
{return and__3469__auto____$2;
}
} else
{return and__3469__auto____$1;
}
} else
{return and__3469__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);

//# sourceMappingURL=test.js.map