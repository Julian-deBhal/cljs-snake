// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15125 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15125 = (function (f,fn_handler,meta15126){
this.f = f;
this.fn_handler = fn_handler;
this.meta15126 = meta15126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15125.cljs$lang$type = true;
cljs.core.async.t15125.cljs$lang$ctorStr = "cljs.core.async/t15125";
cljs.core.async.t15125.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15125");
});
cljs.core.async.t15125.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15127){var self__ = this;
var _15127__$1 = this;return self__.meta15126;
});
cljs.core.async.t15125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15127,meta15126__$1){var self__ = this;
var _15127__$1 = this;return (new cljs.core.async.t15125(self__.f,self__.fn_handler,meta15126__$1));
});
cljs.core.async.__GT_t15125 = (function __GT_t15125(f__$1,fn_handler__$1,meta15126){return (new cljs.core.async.t15125(f__$1,fn_handler__$1,meta15126));
});
}
return (new cljs.core.async.t15125(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15129 = buff;if(G__15129)
{var bit__8524__auto__ = null;if(cljs.core.truth_((function (){var or__7874__auto__ = bit__8524__auto__;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return G__15129.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15129.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15129);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15129);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15130 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15130);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15130,ret){
return (function (){return fn1.call(null,val_15130);
});})(val_15130,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8722__auto___15131 = n;var x_15132 = 0;while(true){
if((x_15132 < n__8722__auto___15131))
{(a[x_15132] = 0);
{
var G__15133 = (x_15132 + 1);
x_15132 = G__15133;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15134 = (i + 1);
i = G__15134;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15138 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15138 = (function (flag,alt_flag,meta15139){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15139 = meta15139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15138.cljs$lang$type = true;
cljs.core.async.t15138.cljs$lang$ctorStr = "cljs.core.async/t15138";
cljs.core.async.t15138.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15138");
});})(flag))
;
cljs.core.async.t15138.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15140){var self__ = this;
var _15140__$1 = this;return self__.meta15139;
});})(flag))
;
cljs.core.async.t15138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15140,meta15139__$1){var self__ = this;
var _15140__$1 = this;return (new cljs.core.async.t15138(self__.flag,self__.alt_flag,meta15139__$1));
});})(flag))
;
cljs.core.async.__GT_t15138 = ((function (flag){
return (function __GT_t15138(flag__$1,alt_flag__$1,meta15139){return (new cljs.core.async.t15138(flag__$1,alt_flag__$1,meta15139));
});})(flag))
;
}
return (new cljs.core.async.t15138(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15144 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15144 = (function (cb,flag,alt_handler,meta15145){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15145 = meta15145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15144.cljs$lang$type = true;
cljs.core.async.t15144.cljs$lang$ctorStr = "cljs.core.async/t15144";
cljs.core.async.t15144.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15144");
});
cljs.core.async.t15144.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15146){var self__ = this;
var _15146__$1 = this;return self__.meta15145;
});
cljs.core.async.t15144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15146,meta15145__$1){var self__ = this;
var _15146__$1 = this;return (new cljs.core.async.t15144(self__.cb,self__.flag,self__.alt_handler,meta15145__$1));
});
cljs.core.async.__GT_t15144 = (function __GT_t15144(cb__$1,flag__$1,alt_handler__$1,meta15145){return (new cljs.core.async.t15144(cb__$1,flag__$1,alt_handler__$1,meta15145));
});
}
return (new cljs.core.async.t15144(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15147_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15147_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15148_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15148_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7874__auto__ = wport;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15149 = (i + 1);
i = G__15149;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7874__auto__ = ret;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7862__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7862__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7862__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15150){var map__15152 = p__15150;var map__15152__$1 = ((cljs.core.seq_QMARK_.call(null,map__15152))?cljs.core.apply.call(null,cljs.core.hash_map,map__15152):map__15152);var opts = map__15152__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15150 = null;if (arguments.length > 1) {
  p__15150 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15150);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15153){
var ports = cljs.core.first(arglist__15153);
var p__15150 = cljs.core.rest(arglist__15153);
return alts_BANG___delegate(ports,p__15150);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15161 = (function (ch,f,map_LT_,meta15162){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15162 = meta15162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15161.cljs$lang$type = true;
cljs.core.async.t15161.cljs$lang$ctorStr = "cljs.core.async/t15161";
cljs.core.async.t15161.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15161");
});
cljs.core.async.t15161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t15161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15164 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15164 = (function (fn1,_,meta15162,ch,f,map_LT_,meta15165){
this.fn1 = fn1;
this._ = _;
this.meta15162 = meta15162;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15165 = meta15165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15164.cljs$lang$type = true;
cljs.core.async.t15164.cljs$lang$ctorStr = "cljs.core.async/t15164";
cljs.core.async.t15164.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15164");
});})(___$1))
;
cljs.core.async.t15164.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15164.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15154_SHARP_){return f1.call(null,(((p1__15154_SHARP_ == null))?null:self__.f.call(null,p1__15154_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15166){var self__ = this;
var _15166__$1 = this;return self__.meta15165;
});})(___$1))
;
cljs.core.async.t15164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15166,meta15165__$1){var self__ = this;
var _15166__$1 = this;return (new cljs.core.async.t15164(self__.fn1,self__._,self__.meta15162,self__.ch,self__.f,self__.map_LT_,meta15165__$1));
});})(___$1))
;
cljs.core.async.__GT_t15164 = ((function (___$1){
return (function __GT_t15164(fn1__$1,___$2,meta15162__$1,ch__$2,f__$2,map_LT___$2,meta15165){return (new cljs.core.async.t15164(fn1__$1,___$2,meta15162__$1,ch__$2,f__$2,map_LT___$2,meta15165));
});})(___$1))
;
}
return (new cljs.core.async.t15164(fn1,___$1,self__.meta15162,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7862__auto__ = ret;if(cljs.core.truth_(and__7862__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7862__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15161.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15161.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15163){var self__ = this;
var _15163__$1 = this;return self__.meta15162;
});
cljs.core.async.t15161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15163,meta15162__$1){var self__ = this;
var _15163__$1 = this;return (new cljs.core.async.t15161(self__.ch,self__.f,self__.map_LT_,meta15162__$1));
});
cljs.core.async.__GT_t15161 = (function __GT_t15161(ch__$1,f__$1,map_LT___$1,meta15162){return (new cljs.core.async.t15161(ch__$1,f__$1,map_LT___$1,meta15162));
});
}
return (new cljs.core.async.t15161(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15170 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15170 = (function (ch,f,map_GT_,meta15171){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15171 = meta15171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15170.cljs$lang$type = true;
cljs.core.async.t15170.cljs$lang$ctorStr = "cljs.core.async/t15170";
cljs.core.async.t15170.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15170");
});
cljs.core.async.t15170.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t15170.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15170.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15172){var self__ = this;
var _15172__$1 = this;return self__.meta15171;
});
cljs.core.async.t15170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15172,meta15171__$1){var self__ = this;
var _15172__$1 = this;return (new cljs.core.async.t15170(self__.ch,self__.f,self__.map_GT_,meta15171__$1));
});
cljs.core.async.__GT_t15170 = (function __GT_t15170(ch__$1,f__$1,map_GT___$1,meta15171){return (new cljs.core.async.t15170(ch__$1,f__$1,map_GT___$1,meta15171));
});
}
return (new cljs.core.async.t15170(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15176 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15176 = (function (ch,p,filter_GT_,meta15177){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15177 = meta15177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15176.cljs$lang$type = true;
cljs.core.async.t15176.cljs$lang$ctorStr = "cljs.core.async/t15176";
cljs.core.async.t15176.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15176");
});
cljs.core.async.t15176.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t15176.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15176.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15176.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15178){var self__ = this;
var _15178__$1 = this;return self__.meta15177;
});
cljs.core.async.t15176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15178,meta15177__$1){var self__ = this;
var _15178__$1 = this;return (new cljs.core.async.t15176(self__.ch,self__.p,self__.filter_GT_,meta15177__$1));
});
cljs.core.async.__GT_t15176 = (function __GT_t15176(ch__$1,p__$1,filter_GT___$1,meta15177){return (new cljs.core.async.t15176(ch__$1,p__$1,filter_GT___$1,meta15177));
});
}
return (new cljs.core.async.t15176(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10506__auto___15261 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___15261,out){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___15261,out){
return (function (state_15240){var state_val_15241 = (state_15240[1]);if((state_val_15241 === 7))
{var inst_15236 = (state_15240[2]);var state_15240__$1 = state_15240;var statearr_15242_15262 = state_15240__$1;(statearr_15242_15262[2] = inst_15236);
(statearr_15242_15262[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15241 === 1))
{var state_15240__$1 = state_15240;var statearr_15243_15263 = state_15240__$1;(statearr_15243_15263[2] = null);
(statearr_15243_15263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15241 === 4))
{var inst_15222 = (state_15240[7]);var inst_15222__$1 = (state_15240[2]);var inst_15223 = (inst_15222__$1 == null);var state_15240__$1 = (function (){var statearr_15244 = state_15240;(statearr_15244[7] = inst_15222__$1);
return statearr_15244;
})();if(cljs.core.truth_(inst_15223))
{var statearr_15245_15264 = state_15240__$1;(statearr_15245_15264[1] = 5);
} else
{var statearr_15246_15265 = state_15240__$1;(statearr_15246_15265[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15241 === 6))
{var inst_15222 = (state_15240[7]);var inst_15227 = p.call(null,inst_15222);var state_15240__$1 = state_15240;if(cljs.core.truth_(inst_15227))
{var statearr_15247_15266 = state_15240__$1;(statearr_15247_15266[1] = 8);
} else
{var statearr_15248_15267 = state_15240__$1;(statearr_15248_15267[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15241 === 3))
{var inst_15238 = (state_15240[2]);var state_15240__$1 = state_15240;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15240__$1,inst_15238);
} else
{if((state_val_15241 === 2))
{var state_15240__$1 = state_15240;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15240__$1,4,ch);
} else
{if((state_val_15241 === 11))
{var inst_15230 = (state_15240[2]);var state_15240__$1 = state_15240;var statearr_15249_15268 = state_15240__$1;(statearr_15249_15268[2] = inst_15230);
(statearr_15249_15268[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15241 === 9))
{var state_15240__$1 = state_15240;var statearr_15250_15269 = state_15240__$1;(statearr_15250_15269[2] = null);
(statearr_15250_15269[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15241 === 5))
{var inst_15225 = cljs.core.async.close_BANG_.call(null,out);var state_15240__$1 = state_15240;var statearr_15251_15270 = state_15240__$1;(statearr_15251_15270[2] = inst_15225);
(statearr_15251_15270[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15241 === 10))
{var inst_15233 = (state_15240[2]);var state_15240__$1 = (function (){var statearr_15252 = state_15240;(statearr_15252[8] = inst_15233);
return statearr_15252;
})();var statearr_15253_15271 = state_15240__$1;(statearr_15253_15271[2] = null);
(statearr_15253_15271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15241 === 8))
{var inst_15222 = (state_15240[7]);var state_15240__$1 = state_15240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15240__$1,11,out,inst_15222);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___15261,out))
;return ((function (switch__10491__auto__,c__10506__auto___15261,out){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_15257 = [null,null,null,null,null,null,null,null,null];(statearr_15257[0] = state_machine__10492__auto__);
(statearr_15257[1] = 1);
return statearr_15257;
});
var state_machine__10492__auto____1 = (function (state_15240){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_15240);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e15258){if((e15258 instanceof Object))
{var ex__10495__auto__ = e15258;var statearr_15259_15272 = state_15240;(statearr_15259_15272[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15240);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15273 = state_15240;
state_15240 = G__15273;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_15240){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_15240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___15261,out))
})();var state__10508__auto__ = (function (){var statearr_15260 = f__10507__auto__.call(null);(statearr_15260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___15261);
return statearr_15260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___15261,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10506__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto__){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto__){
return (function (state_15439){var state_val_15440 = (state_15439[1]);if((state_val_15440 === 7))
{var inst_15435 = (state_15439[2]);var state_15439__$1 = state_15439;var statearr_15441_15482 = state_15439__$1;(statearr_15441_15482[2] = inst_15435);
(statearr_15441_15482[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 20))
{var inst_15405 = (state_15439[7]);var inst_15416 = (state_15439[2]);var inst_15417 = cljs.core.next.call(null,inst_15405);var inst_15391 = inst_15417;var inst_15392 = null;var inst_15393 = 0;var inst_15394 = 0;var state_15439__$1 = (function (){var statearr_15442 = state_15439;(statearr_15442[8] = inst_15416);
(statearr_15442[9] = inst_15394);
(statearr_15442[10] = inst_15392);
(statearr_15442[11] = inst_15391);
(statearr_15442[12] = inst_15393);
return statearr_15442;
})();var statearr_15443_15483 = state_15439__$1;(statearr_15443_15483[2] = null);
(statearr_15443_15483[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 1))
{var state_15439__$1 = state_15439;var statearr_15444_15484 = state_15439__$1;(statearr_15444_15484[2] = null);
(statearr_15444_15484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 4))
{var inst_15380 = (state_15439[13]);var inst_15380__$1 = (state_15439[2]);var inst_15381 = (inst_15380__$1 == null);var state_15439__$1 = (function (){var statearr_15445 = state_15439;(statearr_15445[13] = inst_15380__$1);
return statearr_15445;
})();if(cljs.core.truth_(inst_15381))
{var statearr_15446_15485 = state_15439__$1;(statearr_15446_15485[1] = 5);
} else
{var statearr_15447_15486 = state_15439__$1;(statearr_15447_15486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 15))
{var state_15439__$1 = state_15439;var statearr_15451_15487 = state_15439__$1;(statearr_15451_15487[2] = null);
(statearr_15451_15487[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 21))
{var state_15439__$1 = state_15439;var statearr_15452_15488 = state_15439__$1;(statearr_15452_15488[2] = null);
(statearr_15452_15488[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 13))
{var inst_15394 = (state_15439[9]);var inst_15392 = (state_15439[10]);var inst_15391 = (state_15439[11]);var inst_15393 = (state_15439[12]);var inst_15401 = (state_15439[2]);var inst_15402 = (inst_15394 + 1);var tmp15448 = inst_15392;var tmp15449 = inst_15391;var tmp15450 = inst_15393;var inst_15391__$1 = tmp15449;var inst_15392__$1 = tmp15448;var inst_15393__$1 = tmp15450;var inst_15394__$1 = inst_15402;var state_15439__$1 = (function (){var statearr_15453 = state_15439;(statearr_15453[9] = inst_15394__$1);
(statearr_15453[14] = inst_15401);
(statearr_15453[10] = inst_15392__$1);
(statearr_15453[11] = inst_15391__$1);
(statearr_15453[12] = inst_15393__$1);
return statearr_15453;
})();var statearr_15454_15489 = state_15439__$1;(statearr_15454_15489[2] = null);
(statearr_15454_15489[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 22))
{var state_15439__$1 = state_15439;var statearr_15455_15490 = state_15439__$1;(statearr_15455_15490[2] = null);
(statearr_15455_15490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 6))
{var inst_15380 = (state_15439[13]);var inst_15389 = f.call(null,inst_15380);var inst_15390 = cljs.core.seq.call(null,inst_15389);var inst_15391 = inst_15390;var inst_15392 = null;var inst_15393 = 0;var inst_15394 = 0;var state_15439__$1 = (function (){var statearr_15456 = state_15439;(statearr_15456[9] = inst_15394);
(statearr_15456[10] = inst_15392);
(statearr_15456[11] = inst_15391);
(statearr_15456[12] = inst_15393);
return statearr_15456;
})();var statearr_15457_15491 = state_15439__$1;(statearr_15457_15491[2] = null);
(statearr_15457_15491[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 17))
{var inst_15405 = (state_15439[7]);var inst_15409 = cljs.core.chunk_first.call(null,inst_15405);var inst_15410 = cljs.core.chunk_rest.call(null,inst_15405);var inst_15411 = cljs.core.count.call(null,inst_15409);var inst_15391 = inst_15410;var inst_15392 = inst_15409;var inst_15393 = inst_15411;var inst_15394 = 0;var state_15439__$1 = (function (){var statearr_15458 = state_15439;(statearr_15458[9] = inst_15394);
(statearr_15458[10] = inst_15392);
(statearr_15458[11] = inst_15391);
(statearr_15458[12] = inst_15393);
return statearr_15458;
})();var statearr_15459_15492 = state_15439__$1;(statearr_15459_15492[2] = null);
(statearr_15459_15492[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 3))
{var inst_15437 = (state_15439[2]);var state_15439__$1 = state_15439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15439__$1,inst_15437);
} else
{if((state_val_15440 === 12))
{var inst_15425 = (state_15439[2]);var state_15439__$1 = state_15439;var statearr_15460_15493 = state_15439__$1;(statearr_15460_15493[2] = inst_15425);
(statearr_15460_15493[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 2))
{var state_15439__$1 = state_15439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15439__$1,4,in$);
} else
{if((state_val_15440 === 23))
{var inst_15433 = (state_15439[2]);var state_15439__$1 = state_15439;var statearr_15461_15494 = state_15439__$1;(statearr_15461_15494[2] = inst_15433);
(statearr_15461_15494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 19))
{var inst_15420 = (state_15439[2]);var state_15439__$1 = state_15439;var statearr_15462_15495 = state_15439__$1;(statearr_15462_15495[2] = inst_15420);
(statearr_15462_15495[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 11))
{var inst_15391 = (state_15439[11]);var inst_15405 = (state_15439[7]);var inst_15405__$1 = cljs.core.seq.call(null,inst_15391);var state_15439__$1 = (function (){var statearr_15463 = state_15439;(statearr_15463[7] = inst_15405__$1);
return statearr_15463;
})();if(inst_15405__$1)
{var statearr_15464_15496 = state_15439__$1;(statearr_15464_15496[1] = 14);
} else
{var statearr_15465_15497 = state_15439__$1;(statearr_15465_15497[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 9))
{var inst_15427 = (state_15439[2]);var inst_15428 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15439__$1 = (function (){var statearr_15466 = state_15439;(statearr_15466[15] = inst_15427);
return statearr_15466;
})();if(cljs.core.truth_(inst_15428))
{var statearr_15467_15498 = state_15439__$1;(statearr_15467_15498[1] = 21);
} else
{var statearr_15468_15499 = state_15439__$1;(statearr_15468_15499[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 5))
{var inst_15383 = cljs.core.async.close_BANG_.call(null,out);var state_15439__$1 = state_15439;var statearr_15469_15500 = state_15439__$1;(statearr_15469_15500[2] = inst_15383);
(statearr_15469_15500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 14))
{var inst_15405 = (state_15439[7]);var inst_15407 = cljs.core.chunked_seq_QMARK_.call(null,inst_15405);var state_15439__$1 = state_15439;if(inst_15407)
{var statearr_15470_15501 = state_15439__$1;(statearr_15470_15501[1] = 17);
} else
{var statearr_15471_15502 = state_15439__$1;(statearr_15471_15502[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 16))
{var inst_15423 = (state_15439[2]);var state_15439__$1 = state_15439;var statearr_15472_15503 = state_15439__$1;(statearr_15472_15503[2] = inst_15423);
(statearr_15472_15503[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15440 === 10))
{var inst_15394 = (state_15439[9]);var inst_15392 = (state_15439[10]);var inst_15399 = cljs.core._nth.call(null,inst_15392,inst_15394);var state_15439__$1 = state_15439;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15439__$1,13,out,inst_15399);
} else
{if((state_val_15440 === 18))
{var inst_15405 = (state_15439[7]);var inst_15414 = cljs.core.first.call(null,inst_15405);var state_15439__$1 = state_15439;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15439__$1,20,out,inst_15414);
} else
{if((state_val_15440 === 8))
{var inst_15394 = (state_15439[9]);var inst_15393 = (state_15439[12]);var inst_15396 = (inst_15394 < inst_15393);var inst_15397 = inst_15396;var state_15439__$1 = state_15439;if(cljs.core.truth_(inst_15397))
{var statearr_15473_15504 = state_15439__$1;(statearr_15473_15504[1] = 10);
} else
{var statearr_15474_15505 = state_15439__$1;(statearr_15474_15505[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto__))
;return ((function (switch__10491__auto__,c__10506__auto__){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_15478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15478[0] = state_machine__10492__auto__);
(statearr_15478[1] = 1);
return statearr_15478;
});
var state_machine__10492__auto____1 = (function (state_15439){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_15439);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e15479){if((e15479 instanceof Object))
{var ex__10495__auto__ = e15479;var statearr_15480_15506 = state_15439;(statearr_15480_15506[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15439);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15507 = state_15439;
state_15439 = G__15507;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_15439){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_15439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto__))
})();var state__10508__auto__ = (function (){var statearr_15481 = f__10507__auto__.call(null);(statearr_15481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto__);
return statearr_15481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto__))
);
return c__10506__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10506__auto___15602 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___15602){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___15602){
return (function (state_15578){var state_val_15579 = (state_15578[1]);if((state_val_15579 === 7))
{var inst_15574 = (state_15578[2]);var state_15578__$1 = state_15578;var statearr_15580_15603 = state_15578__$1;(statearr_15580_15603[2] = inst_15574);
(statearr_15580_15603[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 1))
{var state_15578__$1 = state_15578;var statearr_15581_15604 = state_15578__$1;(statearr_15581_15604[2] = null);
(statearr_15581_15604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 4))
{var inst_15557 = (state_15578[7]);var inst_15557__$1 = (state_15578[2]);var inst_15558 = (inst_15557__$1 == null);var state_15578__$1 = (function (){var statearr_15582 = state_15578;(statearr_15582[7] = inst_15557__$1);
return statearr_15582;
})();if(cljs.core.truth_(inst_15558))
{var statearr_15583_15605 = state_15578__$1;(statearr_15583_15605[1] = 5);
} else
{var statearr_15584_15606 = state_15578__$1;(statearr_15584_15606[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 13))
{var state_15578__$1 = state_15578;var statearr_15585_15607 = state_15578__$1;(statearr_15585_15607[2] = null);
(statearr_15585_15607[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 6))
{var inst_15557 = (state_15578[7]);var state_15578__$1 = state_15578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15578__$1,11,to,inst_15557);
} else
{if((state_val_15579 === 3))
{var inst_15576 = (state_15578[2]);var state_15578__$1 = state_15578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15578__$1,inst_15576);
} else
{if((state_val_15579 === 12))
{var state_15578__$1 = state_15578;var statearr_15586_15608 = state_15578__$1;(statearr_15586_15608[2] = null);
(statearr_15586_15608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 2))
{var state_15578__$1 = state_15578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15578__$1,4,from);
} else
{if((state_val_15579 === 11))
{var inst_15567 = (state_15578[2]);var state_15578__$1 = state_15578;if(cljs.core.truth_(inst_15567))
{var statearr_15587_15609 = state_15578__$1;(statearr_15587_15609[1] = 12);
} else
{var statearr_15588_15610 = state_15578__$1;(statearr_15588_15610[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 9))
{var state_15578__$1 = state_15578;var statearr_15589_15611 = state_15578__$1;(statearr_15589_15611[2] = null);
(statearr_15589_15611[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 5))
{var state_15578__$1 = state_15578;if(cljs.core.truth_(close_QMARK_))
{var statearr_15590_15612 = state_15578__$1;(statearr_15590_15612[1] = 8);
} else
{var statearr_15591_15613 = state_15578__$1;(statearr_15591_15613[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 14))
{var inst_15572 = (state_15578[2]);var state_15578__$1 = state_15578;var statearr_15592_15614 = state_15578__$1;(statearr_15592_15614[2] = inst_15572);
(statearr_15592_15614[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 10))
{var inst_15564 = (state_15578[2]);var state_15578__$1 = state_15578;var statearr_15593_15615 = state_15578__$1;(statearr_15593_15615[2] = inst_15564);
(statearr_15593_15615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15579 === 8))
{var inst_15561 = cljs.core.async.close_BANG_.call(null,to);var state_15578__$1 = state_15578;var statearr_15594_15616 = state_15578__$1;(statearr_15594_15616[2] = inst_15561);
(statearr_15594_15616[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___15602))
;return ((function (switch__10491__auto__,c__10506__auto___15602){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_15598 = [null,null,null,null,null,null,null,null];(statearr_15598[0] = state_machine__10492__auto__);
(statearr_15598[1] = 1);
return statearr_15598;
});
var state_machine__10492__auto____1 = (function (state_15578){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_15578);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e15599){if((e15599 instanceof Object))
{var ex__10495__auto__ = e15599;var statearr_15600_15617 = state_15578;(statearr_15600_15617[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15578);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15618 = state_15578;
state_15578 = G__15618;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_15578){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_15578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___15602))
})();var state__10508__auto__ = (function (){var statearr_15601 = f__10507__auto__.call(null);(statearr_15601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___15602);
return statearr_15601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___15602))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10506__auto___15719 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___15719,tc,fc){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___15719,tc,fc){
return (function (state_15694){var state_val_15695 = (state_15694[1]);if((state_val_15695 === 7))
{var inst_15690 = (state_15694[2]);var state_15694__$1 = state_15694;var statearr_15696_15720 = state_15694__$1;(statearr_15696_15720[2] = inst_15690);
(statearr_15696_15720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 1))
{var state_15694__$1 = state_15694;var statearr_15697_15721 = state_15694__$1;(statearr_15697_15721[2] = null);
(statearr_15697_15721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 4))
{var inst_15671 = (state_15694[7]);var inst_15671__$1 = (state_15694[2]);var inst_15672 = (inst_15671__$1 == null);var state_15694__$1 = (function (){var statearr_15698 = state_15694;(statearr_15698[7] = inst_15671__$1);
return statearr_15698;
})();if(cljs.core.truth_(inst_15672))
{var statearr_15699_15722 = state_15694__$1;(statearr_15699_15722[1] = 5);
} else
{var statearr_15700_15723 = state_15694__$1;(statearr_15700_15723[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 13))
{var state_15694__$1 = state_15694;var statearr_15701_15724 = state_15694__$1;(statearr_15701_15724[2] = null);
(statearr_15701_15724[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 6))
{var inst_15671 = (state_15694[7]);var inst_15677 = p.call(null,inst_15671);var state_15694__$1 = state_15694;if(cljs.core.truth_(inst_15677))
{var statearr_15702_15725 = state_15694__$1;(statearr_15702_15725[1] = 9);
} else
{var statearr_15703_15726 = state_15694__$1;(statearr_15703_15726[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 3))
{var inst_15692 = (state_15694[2]);var state_15694__$1 = state_15694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15694__$1,inst_15692);
} else
{if((state_val_15695 === 12))
{var state_15694__$1 = state_15694;var statearr_15704_15727 = state_15694__$1;(statearr_15704_15727[2] = null);
(statearr_15704_15727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 2))
{var state_15694__$1 = state_15694;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15694__$1,4,ch);
} else
{if((state_val_15695 === 11))
{var inst_15671 = (state_15694[7]);var inst_15681 = (state_15694[2]);var state_15694__$1 = state_15694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15694__$1,8,inst_15681,inst_15671);
} else
{if((state_val_15695 === 9))
{var state_15694__$1 = state_15694;var statearr_15705_15728 = state_15694__$1;(statearr_15705_15728[2] = tc);
(statearr_15705_15728[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 5))
{var inst_15674 = cljs.core.async.close_BANG_.call(null,tc);var inst_15675 = cljs.core.async.close_BANG_.call(null,fc);var state_15694__$1 = (function (){var statearr_15706 = state_15694;(statearr_15706[8] = inst_15674);
return statearr_15706;
})();var statearr_15707_15729 = state_15694__$1;(statearr_15707_15729[2] = inst_15675);
(statearr_15707_15729[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 14))
{var inst_15688 = (state_15694[2]);var state_15694__$1 = state_15694;var statearr_15708_15730 = state_15694__$1;(statearr_15708_15730[2] = inst_15688);
(statearr_15708_15730[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 10))
{var state_15694__$1 = state_15694;var statearr_15709_15731 = state_15694__$1;(statearr_15709_15731[2] = fc);
(statearr_15709_15731[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15695 === 8))
{var inst_15683 = (state_15694[2]);var state_15694__$1 = state_15694;if(cljs.core.truth_(inst_15683))
{var statearr_15710_15732 = state_15694__$1;(statearr_15710_15732[1] = 12);
} else
{var statearr_15711_15733 = state_15694__$1;(statearr_15711_15733[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___15719,tc,fc))
;return ((function (switch__10491__auto__,c__10506__auto___15719,tc,fc){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_15715 = [null,null,null,null,null,null,null,null,null];(statearr_15715[0] = state_machine__10492__auto__);
(statearr_15715[1] = 1);
return statearr_15715;
});
var state_machine__10492__auto____1 = (function (state_15694){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_15694);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e15716){if((e15716 instanceof Object))
{var ex__10495__auto__ = e15716;var statearr_15717_15734 = state_15694;(statearr_15717_15734[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15694);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15735 = state_15694;
state_15694 = G__15735;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_15694){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_15694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___15719,tc,fc))
})();var state__10508__auto__ = (function (){var statearr_15718 = f__10507__auto__.call(null);(statearr_15718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___15719);
return statearr_15718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___15719,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10506__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto__){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto__){
return (function (state_15782){var state_val_15783 = (state_15782[1]);if((state_val_15783 === 7))
{var inst_15778 = (state_15782[2]);var state_15782__$1 = state_15782;var statearr_15784_15800 = state_15782__$1;(statearr_15784_15800[2] = inst_15778);
(statearr_15784_15800[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15783 === 6))
{var inst_15771 = (state_15782[7]);var inst_15768 = (state_15782[8]);var inst_15775 = f.call(null,inst_15768,inst_15771);var inst_15768__$1 = inst_15775;var state_15782__$1 = (function (){var statearr_15785 = state_15782;(statearr_15785[8] = inst_15768__$1);
return statearr_15785;
})();var statearr_15786_15801 = state_15782__$1;(statearr_15786_15801[2] = null);
(statearr_15786_15801[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15783 === 5))
{var inst_15768 = (state_15782[8]);var state_15782__$1 = state_15782;var statearr_15787_15802 = state_15782__$1;(statearr_15787_15802[2] = inst_15768);
(statearr_15787_15802[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15783 === 4))
{var inst_15771 = (state_15782[7]);var inst_15771__$1 = (state_15782[2]);var inst_15772 = (inst_15771__$1 == null);var state_15782__$1 = (function (){var statearr_15788 = state_15782;(statearr_15788[7] = inst_15771__$1);
return statearr_15788;
})();if(cljs.core.truth_(inst_15772))
{var statearr_15789_15803 = state_15782__$1;(statearr_15789_15803[1] = 5);
} else
{var statearr_15790_15804 = state_15782__$1;(statearr_15790_15804[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15783 === 3))
{var inst_15780 = (state_15782[2]);var state_15782__$1 = state_15782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15782__$1,inst_15780);
} else
{if((state_val_15783 === 2))
{var state_15782__$1 = state_15782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15782__$1,4,ch);
} else
{if((state_val_15783 === 1))
{var inst_15768 = init;var state_15782__$1 = (function (){var statearr_15791 = state_15782;(statearr_15791[8] = inst_15768);
return statearr_15791;
})();var statearr_15792_15805 = state_15782__$1;(statearr_15792_15805[2] = null);
(statearr_15792_15805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10506__auto__))
;return ((function (switch__10491__auto__,c__10506__auto__){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_15796 = [null,null,null,null,null,null,null,null,null];(statearr_15796[0] = state_machine__10492__auto__);
(statearr_15796[1] = 1);
return statearr_15796;
});
var state_machine__10492__auto____1 = (function (state_15782){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_15782);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e15797){if((e15797 instanceof Object))
{var ex__10495__auto__ = e15797;var statearr_15798_15806 = state_15782;(statearr_15798_15806[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15807 = state_15782;
state_15782 = G__15807;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_15782){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_15782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto__))
})();var state__10508__auto__ = (function (){var statearr_15799 = f__10507__auto__.call(null);(statearr_15799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto__);
return statearr_15799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto__))
);
return c__10506__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10506__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto__){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto__){
return (function (state_15881){var state_val_15882 = (state_15881[1]);if((state_val_15882 === 7))
{var inst_15863 = (state_15881[2]);var state_15881__$1 = state_15881;var statearr_15883_15906 = state_15881__$1;(statearr_15883_15906[2] = inst_15863);
(statearr_15883_15906[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 1))
{var inst_15857 = cljs.core.seq.call(null,coll);var inst_15858 = inst_15857;var state_15881__$1 = (function (){var statearr_15884 = state_15881;(statearr_15884[7] = inst_15858);
return statearr_15884;
})();var statearr_15885_15907 = state_15881__$1;(statearr_15885_15907[2] = null);
(statearr_15885_15907[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 4))
{var inst_15858 = (state_15881[7]);var inst_15861 = cljs.core.first.call(null,inst_15858);var state_15881__$1 = state_15881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15881__$1,7,ch,inst_15861);
} else
{if((state_val_15882 === 13))
{var inst_15875 = (state_15881[2]);var state_15881__$1 = state_15881;var statearr_15886_15908 = state_15881__$1;(statearr_15886_15908[2] = inst_15875);
(statearr_15886_15908[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 6))
{var inst_15866 = (state_15881[2]);var state_15881__$1 = state_15881;if(cljs.core.truth_(inst_15866))
{var statearr_15887_15909 = state_15881__$1;(statearr_15887_15909[1] = 8);
} else
{var statearr_15888_15910 = state_15881__$1;(statearr_15888_15910[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 3))
{var inst_15879 = (state_15881[2]);var state_15881__$1 = state_15881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15881__$1,inst_15879);
} else
{if((state_val_15882 === 12))
{var state_15881__$1 = state_15881;var statearr_15889_15911 = state_15881__$1;(statearr_15889_15911[2] = null);
(statearr_15889_15911[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 2))
{var inst_15858 = (state_15881[7]);var state_15881__$1 = state_15881;if(cljs.core.truth_(inst_15858))
{var statearr_15890_15912 = state_15881__$1;(statearr_15890_15912[1] = 4);
} else
{var statearr_15891_15913 = state_15881__$1;(statearr_15891_15913[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 11))
{var inst_15872 = cljs.core.async.close_BANG_.call(null,ch);var state_15881__$1 = state_15881;var statearr_15892_15914 = state_15881__$1;(statearr_15892_15914[2] = inst_15872);
(statearr_15892_15914[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 9))
{var state_15881__$1 = state_15881;if(cljs.core.truth_(close_QMARK_))
{var statearr_15893_15915 = state_15881__$1;(statearr_15893_15915[1] = 11);
} else
{var statearr_15894_15916 = state_15881__$1;(statearr_15894_15916[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 5))
{var inst_15858 = (state_15881[7]);var state_15881__$1 = state_15881;var statearr_15895_15917 = state_15881__$1;(statearr_15895_15917[2] = inst_15858);
(statearr_15895_15917[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 10))
{var inst_15877 = (state_15881[2]);var state_15881__$1 = state_15881;var statearr_15896_15918 = state_15881__$1;(statearr_15896_15918[2] = inst_15877);
(statearr_15896_15918[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15882 === 8))
{var inst_15858 = (state_15881[7]);var inst_15868 = cljs.core.next.call(null,inst_15858);var inst_15858__$1 = inst_15868;var state_15881__$1 = (function (){var statearr_15897 = state_15881;(statearr_15897[7] = inst_15858__$1);
return statearr_15897;
})();var statearr_15898_15919 = state_15881__$1;(statearr_15898_15919[2] = null);
(statearr_15898_15919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto__))
;return ((function (switch__10491__auto__,c__10506__auto__){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_15902 = [null,null,null,null,null,null,null,null];(statearr_15902[0] = state_machine__10492__auto__);
(statearr_15902[1] = 1);
return statearr_15902;
});
var state_machine__10492__auto____1 = (function (state_15881){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_15881);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e15903){if((e15903 instanceof Object))
{var ex__10495__auto__ = e15903;var statearr_15904_15920 = state_15881;(statearr_15904_15920[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15881);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15921 = state_15881;
state_15881 = G__15921;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_15881){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_15881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto__))
})();var state__10508__auto__ = (function (){var statearr_15905 = f__10507__auto__.call(null);(statearr_15905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto__);
return statearr_15905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto__))
);
return c__10506__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15923 = {};return obj15923;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7862__auto__ = _;if(and__7862__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8501__auto__ = (((_ == null))?null:_);return (function (){var or__7874__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15925 = {};return obj15925;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16147 = (function (cs,ch,mult,meta16148){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16148 = meta16148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16147.cljs$lang$type = true;
cljs.core.async.t16147.cljs$lang$ctorStr = "cljs.core.async/t16147";
cljs.core.async.t16147.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t16147");
});})(cs))
;
cljs.core.async.t16147.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16147.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16147.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16147.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16147.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16149){var self__ = this;
var _16149__$1 = this;return self__.meta16148;
});})(cs))
;
cljs.core.async.t16147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16149,meta16148__$1){var self__ = this;
var _16149__$1 = this;return (new cljs.core.async.t16147(self__.cs,self__.ch,self__.mult,meta16148__$1));
});})(cs))
;
cljs.core.async.__GT_t16147 = ((function (cs){
return (function __GT_t16147(cs__$1,ch__$1,mult__$1,meta16148){return (new cljs.core.async.t16147(cs__$1,ch__$1,mult__$1,meta16148));
});})(cs))
;
}
return (new cljs.core.async.t16147(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10506__auto___16368 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___16368,cs,m,dchan,dctr,done){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___16368,cs,m,dchan,dctr,done){
return (function (state_16280){var state_val_16281 = (state_16280[1]);if((state_val_16281 === 7))
{var inst_16276 = (state_16280[2]);var state_16280__$1 = state_16280;var statearr_16282_16369 = state_16280__$1;(statearr_16282_16369[2] = inst_16276);
(statearr_16282_16369[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 20))
{var inst_16181 = (state_16280[7]);var inst_16191 = cljs.core.first.call(null,inst_16181);var inst_16192 = cljs.core.nth.call(null,inst_16191,0,null);var inst_16193 = cljs.core.nth.call(null,inst_16191,1,null);var state_16280__$1 = (function (){var statearr_16283 = state_16280;(statearr_16283[8] = inst_16192);
return statearr_16283;
})();if(cljs.core.truth_(inst_16193))
{var statearr_16284_16370 = state_16280__$1;(statearr_16284_16370[1] = 22);
} else
{var statearr_16285_16371 = state_16280__$1;(statearr_16285_16371[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 27))
{var inst_16152 = (state_16280[9]);var inst_16221 = (state_16280[10]);var inst_16228 = (state_16280[11]);var inst_16223 = (state_16280[12]);var inst_16228__$1 = cljs.core._nth.call(null,inst_16221,inst_16223);var inst_16229 = cljs.core.async.put_BANG_.call(null,inst_16228__$1,inst_16152,done);var state_16280__$1 = (function (){var statearr_16286 = state_16280;(statearr_16286[11] = inst_16228__$1);
return statearr_16286;
})();if(cljs.core.truth_(inst_16229))
{var statearr_16287_16372 = state_16280__$1;(statearr_16287_16372[1] = 30);
} else
{var statearr_16288_16373 = state_16280__$1;(statearr_16288_16373[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 1))
{var state_16280__$1 = state_16280;var statearr_16289_16374 = state_16280__$1;(statearr_16289_16374[2] = null);
(statearr_16289_16374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 24))
{var inst_16181 = (state_16280[7]);var inst_16198 = (state_16280[2]);var inst_16199 = cljs.core.next.call(null,inst_16181);var inst_16161 = inst_16199;var inst_16162 = null;var inst_16163 = 0;var inst_16164 = 0;var state_16280__$1 = (function (){var statearr_16290 = state_16280;(statearr_16290[13] = inst_16162);
(statearr_16290[14] = inst_16164);
(statearr_16290[15] = inst_16161);
(statearr_16290[16] = inst_16163);
(statearr_16290[17] = inst_16198);
return statearr_16290;
})();var statearr_16291_16375 = state_16280__$1;(statearr_16291_16375[2] = null);
(statearr_16291_16375[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 39))
{var state_16280__$1 = state_16280;var statearr_16295_16376 = state_16280__$1;(statearr_16295_16376[2] = null);
(statearr_16295_16376[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 4))
{var inst_16152 = (state_16280[9]);var inst_16152__$1 = (state_16280[2]);var inst_16153 = (inst_16152__$1 == null);var state_16280__$1 = (function (){var statearr_16296 = state_16280;(statearr_16296[9] = inst_16152__$1);
return statearr_16296;
})();if(cljs.core.truth_(inst_16153))
{var statearr_16297_16377 = state_16280__$1;(statearr_16297_16377[1] = 5);
} else
{var statearr_16298_16378 = state_16280__$1;(statearr_16298_16378[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 15))
{var inst_16162 = (state_16280[13]);var inst_16164 = (state_16280[14]);var inst_16161 = (state_16280[15]);var inst_16163 = (state_16280[16]);var inst_16177 = (state_16280[2]);var inst_16178 = (inst_16164 + 1);var tmp16292 = inst_16162;var tmp16293 = inst_16161;var tmp16294 = inst_16163;var inst_16161__$1 = tmp16293;var inst_16162__$1 = tmp16292;var inst_16163__$1 = tmp16294;var inst_16164__$1 = inst_16178;var state_16280__$1 = (function (){var statearr_16299 = state_16280;(statearr_16299[13] = inst_16162__$1);
(statearr_16299[14] = inst_16164__$1);
(statearr_16299[18] = inst_16177);
(statearr_16299[15] = inst_16161__$1);
(statearr_16299[16] = inst_16163__$1);
return statearr_16299;
})();var statearr_16300_16379 = state_16280__$1;(statearr_16300_16379[2] = null);
(statearr_16300_16379[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 21))
{var inst_16202 = (state_16280[2]);var state_16280__$1 = state_16280;var statearr_16304_16380 = state_16280__$1;(statearr_16304_16380[2] = inst_16202);
(statearr_16304_16380[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 31))
{var inst_16228 = (state_16280[11]);var inst_16232 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16233 = cljs.core.async.untap_STAR_.call(null,m,inst_16228);var state_16280__$1 = (function (){var statearr_16305 = state_16280;(statearr_16305[19] = inst_16232);
return statearr_16305;
})();var statearr_16306_16381 = state_16280__$1;(statearr_16306_16381[2] = inst_16233);
(statearr_16306_16381[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 32))
{var inst_16221 = (state_16280[10]);var inst_16220 = (state_16280[20]);var inst_16222 = (state_16280[21]);var inst_16223 = (state_16280[12]);var inst_16235 = (state_16280[2]);var inst_16236 = (inst_16223 + 1);var tmp16301 = inst_16221;var tmp16302 = inst_16220;var tmp16303 = inst_16222;var inst_16220__$1 = tmp16302;var inst_16221__$1 = tmp16301;var inst_16222__$1 = tmp16303;var inst_16223__$1 = inst_16236;var state_16280__$1 = (function (){var statearr_16307 = state_16280;(statearr_16307[10] = inst_16221__$1);
(statearr_16307[20] = inst_16220__$1);
(statearr_16307[21] = inst_16222__$1);
(statearr_16307[12] = inst_16223__$1);
(statearr_16307[22] = inst_16235);
return statearr_16307;
})();var statearr_16308_16382 = state_16280__$1;(statearr_16308_16382[2] = null);
(statearr_16308_16382[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 40))
{var inst_16248 = (state_16280[23]);var inst_16252 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16253 = cljs.core.async.untap_STAR_.call(null,m,inst_16248);var state_16280__$1 = (function (){var statearr_16309 = state_16280;(statearr_16309[24] = inst_16252);
return statearr_16309;
})();var statearr_16310_16383 = state_16280__$1;(statearr_16310_16383[2] = inst_16253);
(statearr_16310_16383[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 33))
{var inst_16239 = (state_16280[25]);var inst_16241 = cljs.core.chunked_seq_QMARK_.call(null,inst_16239);var state_16280__$1 = state_16280;if(inst_16241)
{var statearr_16311_16384 = state_16280__$1;(statearr_16311_16384[1] = 36);
} else
{var statearr_16312_16385 = state_16280__$1;(statearr_16312_16385[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 13))
{var inst_16171 = (state_16280[26]);var inst_16174 = cljs.core.async.close_BANG_.call(null,inst_16171);var state_16280__$1 = state_16280;var statearr_16313_16386 = state_16280__$1;(statearr_16313_16386[2] = inst_16174);
(statearr_16313_16386[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 22))
{var inst_16192 = (state_16280[8]);var inst_16195 = cljs.core.async.close_BANG_.call(null,inst_16192);var state_16280__$1 = state_16280;var statearr_16314_16387 = state_16280__$1;(statearr_16314_16387[2] = inst_16195);
(statearr_16314_16387[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 36))
{var inst_16239 = (state_16280[25]);var inst_16243 = cljs.core.chunk_first.call(null,inst_16239);var inst_16244 = cljs.core.chunk_rest.call(null,inst_16239);var inst_16245 = cljs.core.count.call(null,inst_16243);var inst_16220 = inst_16244;var inst_16221 = inst_16243;var inst_16222 = inst_16245;var inst_16223 = 0;var state_16280__$1 = (function (){var statearr_16315 = state_16280;(statearr_16315[10] = inst_16221);
(statearr_16315[20] = inst_16220);
(statearr_16315[21] = inst_16222);
(statearr_16315[12] = inst_16223);
return statearr_16315;
})();var statearr_16316_16388 = state_16280__$1;(statearr_16316_16388[2] = null);
(statearr_16316_16388[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 41))
{var inst_16239 = (state_16280[25]);var inst_16255 = (state_16280[2]);var inst_16256 = cljs.core.next.call(null,inst_16239);var inst_16220 = inst_16256;var inst_16221 = null;var inst_16222 = 0;var inst_16223 = 0;var state_16280__$1 = (function (){var statearr_16317 = state_16280;(statearr_16317[10] = inst_16221);
(statearr_16317[20] = inst_16220);
(statearr_16317[21] = inst_16222);
(statearr_16317[12] = inst_16223);
(statearr_16317[27] = inst_16255);
return statearr_16317;
})();var statearr_16318_16389 = state_16280__$1;(statearr_16318_16389[2] = null);
(statearr_16318_16389[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 43))
{var state_16280__$1 = state_16280;var statearr_16319_16390 = state_16280__$1;(statearr_16319_16390[2] = null);
(statearr_16319_16390[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 29))
{var inst_16264 = (state_16280[2]);var state_16280__$1 = state_16280;var statearr_16320_16391 = state_16280__$1;(statearr_16320_16391[2] = inst_16264);
(statearr_16320_16391[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 44))
{var inst_16273 = (state_16280[2]);var state_16280__$1 = (function (){var statearr_16321 = state_16280;(statearr_16321[28] = inst_16273);
return statearr_16321;
})();var statearr_16322_16392 = state_16280__$1;(statearr_16322_16392[2] = null);
(statearr_16322_16392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 6))
{var inst_16212 = (state_16280[29]);var inst_16211 = cljs.core.deref.call(null,cs);var inst_16212__$1 = cljs.core.keys.call(null,inst_16211);var inst_16213 = cljs.core.count.call(null,inst_16212__$1);var inst_16214 = cljs.core.reset_BANG_.call(null,dctr,inst_16213);var inst_16219 = cljs.core.seq.call(null,inst_16212__$1);var inst_16220 = inst_16219;var inst_16221 = null;var inst_16222 = 0;var inst_16223 = 0;var state_16280__$1 = (function (){var statearr_16323 = state_16280;(statearr_16323[29] = inst_16212__$1);
(statearr_16323[10] = inst_16221);
(statearr_16323[20] = inst_16220);
(statearr_16323[21] = inst_16222);
(statearr_16323[12] = inst_16223);
(statearr_16323[30] = inst_16214);
return statearr_16323;
})();var statearr_16324_16393 = state_16280__$1;(statearr_16324_16393[2] = null);
(statearr_16324_16393[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 28))
{var inst_16239 = (state_16280[25]);var inst_16220 = (state_16280[20]);var inst_16239__$1 = cljs.core.seq.call(null,inst_16220);var state_16280__$1 = (function (){var statearr_16325 = state_16280;(statearr_16325[25] = inst_16239__$1);
return statearr_16325;
})();if(inst_16239__$1)
{var statearr_16326_16394 = state_16280__$1;(statearr_16326_16394[1] = 33);
} else
{var statearr_16327_16395 = state_16280__$1;(statearr_16327_16395[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 25))
{var inst_16222 = (state_16280[21]);var inst_16223 = (state_16280[12]);var inst_16225 = (inst_16223 < inst_16222);var inst_16226 = inst_16225;var state_16280__$1 = state_16280;if(cljs.core.truth_(inst_16226))
{var statearr_16328_16396 = state_16280__$1;(statearr_16328_16396[1] = 27);
} else
{var statearr_16329_16397 = state_16280__$1;(statearr_16329_16397[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 34))
{var state_16280__$1 = state_16280;var statearr_16330_16398 = state_16280__$1;(statearr_16330_16398[2] = null);
(statearr_16330_16398[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 17))
{var state_16280__$1 = state_16280;var statearr_16331_16399 = state_16280__$1;(statearr_16331_16399[2] = null);
(statearr_16331_16399[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 3))
{var inst_16278 = (state_16280[2]);var state_16280__$1 = state_16280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16280__$1,inst_16278);
} else
{if((state_val_16281 === 12))
{var inst_16207 = (state_16280[2]);var state_16280__$1 = state_16280;var statearr_16332_16400 = state_16280__$1;(statearr_16332_16400[2] = inst_16207);
(statearr_16332_16400[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 2))
{var state_16280__$1 = state_16280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16280__$1,4,ch);
} else
{if((state_val_16281 === 23))
{var state_16280__$1 = state_16280;var statearr_16333_16401 = state_16280__$1;(statearr_16333_16401[2] = null);
(statearr_16333_16401[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 35))
{var inst_16262 = (state_16280[2]);var state_16280__$1 = state_16280;var statearr_16334_16402 = state_16280__$1;(statearr_16334_16402[2] = inst_16262);
(statearr_16334_16402[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 19))
{var inst_16181 = (state_16280[7]);var inst_16185 = cljs.core.chunk_first.call(null,inst_16181);var inst_16186 = cljs.core.chunk_rest.call(null,inst_16181);var inst_16187 = cljs.core.count.call(null,inst_16185);var inst_16161 = inst_16186;var inst_16162 = inst_16185;var inst_16163 = inst_16187;var inst_16164 = 0;var state_16280__$1 = (function (){var statearr_16335 = state_16280;(statearr_16335[13] = inst_16162);
(statearr_16335[14] = inst_16164);
(statearr_16335[15] = inst_16161);
(statearr_16335[16] = inst_16163);
return statearr_16335;
})();var statearr_16336_16403 = state_16280__$1;(statearr_16336_16403[2] = null);
(statearr_16336_16403[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 11))
{var inst_16161 = (state_16280[15]);var inst_16181 = (state_16280[7]);var inst_16181__$1 = cljs.core.seq.call(null,inst_16161);var state_16280__$1 = (function (){var statearr_16337 = state_16280;(statearr_16337[7] = inst_16181__$1);
return statearr_16337;
})();if(inst_16181__$1)
{var statearr_16338_16404 = state_16280__$1;(statearr_16338_16404[1] = 16);
} else
{var statearr_16339_16405 = state_16280__$1;(statearr_16339_16405[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 9))
{var inst_16209 = (state_16280[2]);var state_16280__$1 = state_16280;var statearr_16340_16406 = state_16280__$1;(statearr_16340_16406[2] = inst_16209);
(statearr_16340_16406[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 5))
{var inst_16159 = cljs.core.deref.call(null,cs);var inst_16160 = cljs.core.seq.call(null,inst_16159);var inst_16161 = inst_16160;var inst_16162 = null;var inst_16163 = 0;var inst_16164 = 0;var state_16280__$1 = (function (){var statearr_16341 = state_16280;(statearr_16341[13] = inst_16162);
(statearr_16341[14] = inst_16164);
(statearr_16341[15] = inst_16161);
(statearr_16341[16] = inst_16163);
return statearr_16341;
})();var statearr_16342_16407 = state_16280__$1;(statearr_16342_16407[2] = null);
(statearr_16342_16407[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 14))
{var state_16280__$1 = state_16280;var statearr_16343_16408 = state_16280__$1;(statearr_16343_16408[2] = null);
(statearr_16343_16408[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 45))
{var inst_16270 = (state_16280[2]);var state_16280__$1 = state_16280;var statearr_16344_16409 = state_16280__$1;(statearr_16344_16409[2] = inst_16270);
(statearr_16344_16409[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 26))
{var inst_16212 = (state_16280[29]);var inst_16266 = (state_16280[2]);var inst_16267 = cljs.core.seq.call(null,inst_16212);var state_16280__$1 = (function (){var statearr_16345 = state_16280;(statearr_16345[31] = inst_16266);
return statearr_16345;
})();if(inst_16267)
{var statearr_16346_16410 = state_16280__$1;(statearr_16346_16410[1] = 42);
} else
{var statearr_16347_16411 = state_16280__$1;(statearr_16347_16411[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 16))
{var inst_16181 = (state_16280[7]);var inst_16183 = cljs.core.chunked_seq_QMARK_.call(null,inst_16181);var state_16280__$1 = state_16280;if(inst_16183)
{var statearr_16348_16412 = state_16280__$1;(statearr_16348_16412[1] = 19);
} else
{var statearr_16349_16413 = state_16280__$1;(statearr_16349_16413[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 38))
{var inst_16259 = (state_16280[2]);var state_16280__$1 = state_16280;var statearr_16350_16414 = state_16280__$1;(statearr_16350_16414[2] = inst_16259);
(statearr_16350_16414[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 30))
{var state_16280__$1 = state_16280;var statearr_16351_16415 = state_16280__$1;(statearr_16351_16415[2] = null);
(statearr_16351_16415[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 10))
{var inst_16162 = (state_16280[13]);var inst_16164 = (state_16280[14]);var inst_16170 = cljs.core._nth.call(null,inst_16162,inst_16164);var inst_16171 = cljs.core.nth.call(null,inst_16170,0,null);var inst_16172 = cljs.core.nth.call(null,inst_16170,1,null);var state_16280__$1 = (function (){var statearr_16352 = state_16280;(statearr_16352[26] = inst_16171);
return statearr_16352;
})();if(cljs.core.truth_(inst_16172))
{var statearr_16353_16416 = state_16280__$1;(statearr_16353_16416[1] = 13);
} else
{var statearr_16354_16417 = state_16280__$1;(statearr_16354_16417[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 18))
{var inst_16205 = (state_16280[2]);var state_16280__$1 = state_16280;var statearr_16355_16418 = state_16280__$1;(statearr_16355_16418[2] = inst_16205);
(statearr_16355_16418[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 42))
{var state_16280__$1 = state_16280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16280__$1,45,dchan);
} else
{if((state_val_16281 === 37))
{var inst_16152 = (state_16280[9]);var inst_16239 = (state_16280[25]);var inst_16248 = (state_16280[23]);var inst_16248__$1 = cljs.core.first.call(null,inst_16239);var inst_16249 = cljs.core.async.put_BANG_.call(null,inst_16248__$1,inst_16152,done);var state_16280__$1 = (function (){var statearr_16356 = state_16280;(statearr_16356[23] = inst_16248__$1);
return statearr_16356;
})();if(cljs.core.truth_(inst_16249))
{var statearr_16357_16419 = state_16280__$1;(statearr_16357_16419[1] = 39);
} else
{var statearr_16358_16420 = state_16280__$1;(statearr_16358_16420[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16281 === 8))
{var inst_16164 = (state_16280[14]);var inst_16163 = (state_16280[16]);var inst_16166 = (inst_16164 < inst_16163);var inst_16167 = inst_16166;var state_16280__$1 = state_16280;if(cljs.core.truth_(inst_16167))
{var statearr_16359_16421 = state_16280__$1;(statearr_16359_16421[1] = 10);
} else
{var statearr_16360_16422 = state_16280__$1;(statearr_16360_16422[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___16368,cs,m,dchan,dctr,done))
;return ((function (switch__10491__auto__,c__10506__auto___16368,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_16364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16364[0] = state_machine__10492__auto__);
(statearr_16364[1] = 1);
return statearr_16364;
});
var state_machine__10492__auto____1 = (function (state_16280){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_16280);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e16365){if((e16365 instanceof Object))
{var ex__10495__auto__ = e16365;var statearr_16366_16423 = state_16280;(statearr_16366_16423[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16280);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16424 = state_16280;
state_16280 = G__16424;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_16280){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_16280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___16368,cs,m,dchan,dctr,done))
})();var state__10508__auto__ = (function (){var statearr_16367 = f__10507__auto__.call(null);(statearr_16367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___16368);
return statearr_16367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___16368,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16426 = {};return obj16426;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16546 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16546 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16547){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16547 = meta16547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16546.cljs$lang$type = true;
cljs.core.async.t16546.cljs$lang$ctorStr = "cljs.core.async/t16546";
cljs.core.async.t16546.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t16546");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16546.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16546.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16546.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16546.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16546.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16546.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16546.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16548){var self__ = this;
var _16548__$1 = this;return self__.meta16547;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16548,meta16547__$1){var self__ = this;
var _16548__$1 = this;return (new cljs.core.async.t16546(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16547__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16546 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16546(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16547){return (new cljs.core.async.t16546(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16547));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16546(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10506__auto___16665 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___16665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___16665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16618){var state_val_16619 = (state_16618[1]);if((state_val_16619 === 7))
{var inst_16562 = (state_16618[7]);var inst_16567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16562);var state_16618__$1 = state_16618;var statearr_16620_16666 = state_16618__$1;(statearr_16620_16666[2] = inst_16567);
(statearr_16620_16666[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 20))
{var inst_16577 = (state_16618[8]);var state_16618__$1 = state_16618;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16618__$1,23,out,inst_16577);
} else
{if((state_val_16619 === 1))
{var inst_16552 = (state_16618[9]);var inst_16552__$1 = calc_state.call(null);var inst_16553 = cljs.core.seq_QMARK_.call(null,inst_16552__$1);var state_16618__$1 = (function (){var statearr_16621 = state_16618;(statearr_16621[9] = inst_16552__$1);
return statearr_16621;
})();if(inst_16553)
{var statearr_16622_16667 = state_16618__$1;(statearr_16622_16667[1] = 2);
} else
{var statearr_16623_16668 = state_16618__$1;(statearr_16623_16668[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 24))
{var inst_16570 = (state_16618[10]);var inst_16562 = inst_16570;var state_16618__$1 = (function (){var statearr_16624 = state_16618;(statearr_16624[7] = inst_16562);
return statearr_16624;
})();var statearr_16625_16669 = state_16618__$1;(statearr_16625_16669[2] = null);
(statearr_16625_16669[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 4))
{var inst_16552 = (state_16618[9]);var inst_16558 = (state_16618[2]);var inst_16559 = cljs.core.get.call(null,inst_16558,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16560 = cljs.core.get.call(null,inst_16558,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16561 = cljs.core.get.call(null,inst_16558,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16562 = inst_16552;var state_16618__$1 = (function (){var statearr_16626 = state_16618;(statearr_16626[7] = inst_16562);
(statearr_16626[11] = inst_16560);
(statearr_16626[12] = inst_16561);
(statearr_16626[13] = inst_16559);
return statearr_16626;
})();var statearr_16627_16670 = state_16618__$1;(statearr_16627_16670[2] = null);
(statearr_16627_16670[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 15))
{var state_16618__$1 = state_16618;var statearr_16628_16671 = state_16618__$1;(statearr_16628_16671[2] = null);
(statearr_16628_16671[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 21))
{var inst_16570 = (state_16618[10]);var inst_16562 = inst_16570;var state_16618__$1 = (function (){var statearr_16629 = state_16618;(statearr_16629[7] = inst_16562);
return statearr_16629;
})();var statearr_16630_16672 = state_16618__$1;(statearr_16630_16672[2] = null);
(statearr_16630_16672[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 13))
{var inst_16614 = (state_16618[2]);var state_16618__$1 = state_16618;var statearr_16631_16673 = state_16618__$1;(statearr_16631_16673[2] = inst_16614);
(statearr_16631_16673[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 22))
{var inst_16612 = (state_16618[2]);var state_16618__$1 = state_16618;var statearr_16632_16674 = state_16618__$1;(statearr_16632_16674[2] = inst_16612);
(statearr_16632_16674[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 6))
{var inst_16616 = (state_16618[2]);var state_16618__$1 = state_16618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16618__$1,inst_16616);
} else
{if((state_val_16619 === 25))
{var state_16618__$1 = state_16618;var statearr_16633_16675 = state_16618__$1;(statearr_16633_16675[2] = null);
(statearr_16633_16675[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 17))
{var inst_16592 = (state_16618[14]);var state_16618__$1 = state_16618;var statearr_16634_16676 = state_16618__$1;(statearr_16634_16676[2] = inst_16592);
(statearr_16634_16676[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 3))
{var inst_16552 = (state_16618[9]);var state_16618__$1 = state_16618;var statearr_16635_16677 = state_16618__$1;(statearr_16635_16677[2] = inst_16552);
(statearr_16635_16677[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 12))
{var inst_16578 = (state_16618[15]);var inst_16592 = (state_16618[14]);var inst_16573 = (state_16618[16]);var inst_16592__$1 = inst_16573.call(null,inst_16578);var state_16618__$1 = (function (){var statearr_16636 = state_16618;(statearr_16636[14] = inst_16592__$1);
return statearr_16636;
})();if(cljs.core.truth_(inst_16592__$1))
{var statearr_16637_16678 = state_16618__$1;(statearr_16637_16678[1] = 17);
} else
{var statearr_16638_16679 = state_16618__$1;(statearr_16638_16679[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 2))
{var inst_16552 = (state_16618[9]);var inst_16555 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16552);var state_16618__$1 = state_16618;var statearr_16639_16680 = state_16618__$1;(statearr_16639_16680[2] = inst_16555);
(statearr_16639_16680[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 23))
{var inst_16603 = (state_16618[2]);var state_16618__$1 = state_16618;if(cljs.core.truth_(inst_16603))
{var statearr_16640_16681 = state_16618__$1;(statearr_16640_16681[1] = 24);
} else
{var statearr_16641_16682 = state_16618__$1;(statearr_16641_16682[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 19))
{var inst_16600 = (state_16618[2]);var state_16618__$1 = state_16618;if(cljs.core.truth_(inst_16600))
{var statearr_16642_16683 = state_16618__$1;(statearr_16642_16683[1] = 20);
} else
{var statearr_16643_16684 = state_16618__$1;(statearr_16643_16684[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 11))
{var inst_16577 = (state_16618[8]);var inst_16583 = (inst_16577 == null);var state_16618__$1 = state_16618;if(cljs.core.truth_(inst_16583))
{var statearr_16644_16685 = state_16618__$1;(statearr_16644_16685[1] = 14);
} else
{var statearr_16645_16686 = state_16618__$1;(statearr_16645_16686[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 9))
{var inst_16570 = (state_16618[10]);var inst_16570__$1 = (state_16618[2]);var inst_16571 = cljs.core.get.call(null,inst_16570__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16572 = cljs.core.get.call(null,inst_16570__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16573 = cljs.core.get.call(null,inst_16570__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16618__$1 = (function (){var statearr_16646 = state_16618;(statearr_16646[10] = inst_16570__$1);
(statearr_16646[16] = inst_16573);
(statearr_16646[17] = inst_16572);
return statearr_16646;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16618__$1,10,inst_16571);
} else
{if((state_val_16619 === 5))
{var inst_16562 = (state_16618[7]);var inst_16565 = cljs.core.seq_QMARK_.call(null,inst_16562);var state_16618__$1 = state_16618;if(inst_16565)
{var statearr_16647_16687 = state_16618__$1;(statearr_16647_16687[1] = 7);
} else
{var statearr_16648_16688 = state_16618__$1;(statearr_16648_16688[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 14))
{var inst_16578 = (state_16618[15]);var inst_16585 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16578);var state_16618__$1 = state_16618;var statearr_16649_16689 = state_16618__$1;(statearr_16649_16689[2] = inst_16585);
(statearr_16649_16689[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 26))
{var inst_16608 = (state_16618[2]);var state_16618__$1 = state_16618;var statearr_16650_16690 = state_16618__$1;(statearr_16650_16690[2] = inst_16608);
(statearr_16650_16690[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 16))
{var inst_16588 = (state_16618[2]);var inst_16589 = calc_state.call(null);var inst_16562 = inst_16589;var state_16618__$1 = (function (){var statearr_16651 = state_16618;(statearr_16651[7] = inst_16562);
(statearr_16651[18] = inst_16588);
return statearr_16651;
})();var statearr_16652_16691 = state_16618__$1;(statearr_16652_16691[2] = null);
(statearr_16652_16691[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 10))
{var inst_16577 = (state_16618[8]);var inst_16578 = (state_16618[15]);var inst_16576 = (state_16618[2]);var inst_16577__$1 = cljs.core.nth.call(null,inst_16576,0,null);var inst_16578__$1 = cljs.core.nth.call(null,inst_16576,1,null);var inst_16579 = (inst_16577__$1 == null);var inst_16580 = cljs.core._EQ_.call(null,inst_16578__$1,change);var inst_16581 = (inst_16579) || (inst_16580);var state_16618__$1 = (function (){var statearr_16653 = state_16618;(statearr_16653[8] = inst_16577__$1);
(statearr_16653[15] = inst_16578__$1);
return statearr_16653;
})();if(cljs.core.truth_(inst_16581))
{var statearr_16654_16692 = state_16618__$1;(statearr_16654_16692[1] = 11);
} else
{var statearr_16655_16693 = state_16618__$1;(statearr_16655_16693[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 18))
{var inst_16578 = (state_16618[15]);var inst_16573 = (state_16618[16]);var inst_16572 = (state_16618[17]);var inst_16595 = cljs.core.empty_QMARK_.call(null,inst_16573);var inst_16596 = inst_16572.call(null,inst_16578);var inst_16597 = cljs.core.not.call(null,inst_16596);var inst_16598 = (inst_16595) && (inst_16597);var state_16618__$1 = state_16618;var statearr_16656_16694 = state_16618__$1;(statearr_16656_16694[2] = inst_16598);
(statearr_16656_16694[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16619 === 8))
{var inst_16562 = (state_16618[7]);var state_16618__$1 = state_16618;var statearr_16657_16695 = state_16618__$1;(statearr_16657_16695[2] = inst_16562);
(statearr_16657_16695[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___16665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10491__auto__,c__10506__auto___16665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_16661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16661[0] = state_machine__10492__auto__);
(statearr_16661[1] = 1);
return statearr_16661;
});
var state_machine__10492__auto____1 = (function (state_16618){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_16618);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e16662){if((e16662 instanceof Object))
{var ex__10495__auto__ = e16662;var statearr_16663_16696 = state_16618;(statearr_16663_16696[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16618);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16697 = state_16618;
state_16618 = G__16697;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_16618){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_16618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___16665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10508__auto__ = (function (){var statearr_16664 = f__10507__auto__.call(null);(statearr_16664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___16665);
return statearr_16664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___16665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16699 = {};return obj16699;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7874__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7874__auto__,mults){
return (function (p1__16700_SHARP_){if(cljs.core.truth_(p1__16700_SHARP_.call(null,topic)))
{return p1__16700_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16700_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7874__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16815 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16816){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16816 = meta16816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16815.cljs$lang$type = true;
cljs.core.async.t16815.cljs$lang$ctorStr = "cljs.core.async/t16815";
cljs.core.async.t16815.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t16815");
});})(mults,ensure_mult))
;
cljs.core.async.t16815.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16815.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16815.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16815.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16817){var self__ = this;
var _16817__$1 = this;return self__.meta16816;
});})(mults,ensure_mult))
;
cljs.core.async.t16815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16817,meta16816__$1){var self__ = this;
var _16817__$1 = this;return (new cljs.core.async.t16815(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16816__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16815 = ((function (mults,ensure_mult){
return (function __GT_t16815(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16816){return (new cljs.core.async.t16815(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16816));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16815(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10506__auto___16929 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___16929,mults,ensure_mult,p){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___16929,mults,ensure_mult,p){
return (function (state_16885){var state_val_16886 = (state_16885[1]);if((state_val_16886 === 7))
{var inst_16881 = (state_16885[2]);var state_16885__$1 = state_16885;var statearr_16887_16930 = state_16885__$1;(statearr_16887_16930[2] = inst_16881);
(statearr_16887_16930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 20))
{var state_16885__$1 = state_16885;var statearr_16888_16931 = state_16885__$1;(statearr_16888_16931[2] = null);
(statearr_16888_16931[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 1))
{var state_16885__$1 = state_16885;var statearr_16889_16932 = state_16885__$1;(statearr_16889_16932[2] = null);
(statearr_16889_16932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 4))
{var inst_16820 = (state_16885[7]);var inst_16820__$1 = (state_16885[2]);var inst_16821 = (inst_16820__$1 == null);var state_16885__$1 = (function (){var statearr_16890 = state_16885;(statearr_16890[7] = inst_16820__$1);
return statearr_16890;
})();if(cljs.core.truth_(inst_16821))
{var statearr_16891_16933 = state_16885__$1;(statearr_16891_16933[1] = 5);
} else
{var statearr_16892_16934 = state_16885__$1;(statearr_16892_16934[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 15))
{var inst_16862 = (state_16885[2]);var state_16885__$1 = state_16885;var statearr_16893_16935 = state_16885__$1;(statearr_16893_16935[2] = inst_16862);
(statearr_16893_16935[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 21))
{var inst_16868 = (state_16885[8]);var inst_16876 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16868);var state_16885__$1 = state_16885;var statearr_16894_16936 = state_16885__$1;(statearr_16894_16936[2] = inst_16876);
(statearr_16894_16936[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 13))
{var inst_16844 = (state_16885[9]);var inst_16846 = cljs.core.chunked_seq_QMARK_.call(null,inst_16844);var state_16885__$1 = state_16885;if(inst_16846)
{var statearr_16895_16937 = state_16885__$1;(statearr_16895_16937[1] = 16);
} else
{var statearr_16896_16938 = state_16885__$1;(statearr_16896_16938[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 22))
{var inst_16878 = (state_16885[2]);var state_16885__$1 = (function (){var statearr_16897 = state_16885;(statearr_16897[10] = inst_16878);
return statearr_16897;
})();var statearr_16898_16939 = state_16885__$1;(statearr_16898_16939[2] = null);
(statearr_16898_16939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 6))
{var inst_16868 = (state_16885[8]);var inst_16820 = (state_16885[7]);var inst_16868__$1 = topic_fn.call(null,inst_16820);var inst_16869 = cljs.core.deref.call(null,mults);var inst_16870 = cljs.core.get.call(null,inst_16869,inst_16868__$1);var inst_16871 = cljs.core.async.muxch_STAR_.call(null,inst_16870);var state_16885__$1 = (function (){var statearr_16899 = state_16885;(statearr_16899[8] = inst_16868__$1);
return statearr_16899;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16885__$1,19,inst_16871,inst_16820);
} else
{if((state_val_16886 === 17))
{var inst_16844 = (state_16885[9]);var inst_16853 = cljs.core.first.call(null,inst_16844);var inst_16854 = cljs.core.async.muxch_STAR_.call(null,inst_16853);var inst_16855 = cljs.core.async.close_BANG_.call(null,inst_16854);var inst_16856 = cljs.core.next.call(null,inst_16844);var inst_16830 = inst_16856;var inst_16831 = null;var inst_16832 = 0;var inst_16833 = 0;var state_16885__$1 = (function (){var statearr_16900 = state_16885;(statearr_16900[11] = inst_16832);
(statearr_16900[12] = inst_16830);
(statearr_16900[13] = inst_16833);
(statearr_16900[14] = inst_16855);
(statearr_16900[15] = inst_16831);
return statearr_16900;
})();var statearr_16901_16940 = state_16885__$1;(statearr_16901_16940[2] = null);
(statearr_16901_16940[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 3))
{var inst_16883 = (state_16885[2]);var state_16885__$1 = state_16885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16885__$1,inst_16883);
} else
{if((state_val_16886 === 12))
{var inst_16864 = (state_16885[2]);var state_16885__$1 = state_16885;var statearr_16902_16941 = state_16885__$1;(statearr_16902_16941[2] = inst_16864);
(statearr_16902_16941[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 2))
{var state_16885__$1 = state_16885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16885__$1,4,ch);
} else
{if((state_val_16886 === 19))
{var inst_16873 = (state_16885[2]);var state_16885__$1 = state_16885;if(cljs.core.truth_(inst_16873))
{var statearr_16903_16942 = state_16885__$1;(statearr_16903_16942[1] = 20);
} else
{var statearr_16904_16943 = state_16885__$1;(statearr_16904_16943[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 11))
{var inst_16830 = (state_16885[12]);var inst_16844 = (state_16885[9]);var inst_16844__$1 = cljs.core.seq.call(null,inst_16830);var state_16885__$1 = (function (){var statearr_16905 = state_16885;(statearr_16905[9] = inst_16844__$1);
return statearr_16905;
})();if(inst_16844__$1)
{var statearr_16906_16944 = state_16885__$1;(statearr_16906_16944[1] = 13);
} else
{var statearr_16907_16945 = state_16885__$1;(statearr_16907_16945[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 9))
{var inst_16866 = (state_16885[2]);var state_16885__$1 = state_16885;var statearr_16908_16946 = state_16885__$1;(statearr_16908_16946[2] = inst_16866);
(statearr_16908_16946[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 5))
{var inst_16827 = cljs.core.deref.call(null,mults);var inst_16828 = cljs.core.vals.call(null,inst_16827);var inst_16829 = cljs.core.seq.call(null,inst_16828);var inst_16830 = inst_16829;var inst_16831 = null;var inst_16832 = 0;var inst_16833 = 0;var state_16885__$1 = (function (){var statearr_16909 = state_16885;(statearr_16909[11] = inst_16832);
(statearr_16909[12] = inst_16830);
(statearr_16909[13] = inst_16833);
(statearr_16909[15] = inst_16831);
return statearr_16909;
})();var statearr_16910_16947 = state_16885__$1;(statearr_16910_16947[2] = null);
(statearr_16910_16947[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 14))
{var state_16885__$1 = state_16885;var statearr_16914_16948 = state_16885__$1;(statearr_16914_16948[2] = null);
(statearr_16914_16948[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 16))
{var inst_16844 = (state_16885[9]);var inst_16848 = cljs.core.chunk_first.call(null,inst_16844);var inst_16849 = cljs.core.chunk_rest.call(null,inst_16844);var inst_16850 = cljs.core.count.call(null,inst_16848);var inst_16830 = inst_16849;var inst_16831 = inst_16848;var inst_16832 = inst_16850;var inst_16833 = 0;var state_16885__$1 = (function (){var statearr_16915 = state_16885;(statearr_16915[11] = inst_16832);
(statearr_16915[12] = inst_16830);
(statearr_16915[13] = inst_16833);
(statearr_16915[15] = inst_16831);
return statearr_16915;
})();var statearr_16916_16949 = state_16885__$1;(statearr_16916_16949[2] = null);
(statearr_16916_16949[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 10))
{var inst_16832 = (state_16885[11]);var inst_16830 = (state_16885[12]);var inst_16833 = (state_16885[13]);var inst_16831 = (state_16885[15]);var inst_16838 = cljs.core._nth.call(null,inst_16831,inst_16833);var inst_16839 = cljs.core.async.muxch_STAR_.call(null,inst_16838);var inst_16840 = cljs.core.async.close_BANG_.call(null,inst_16839);var inst_16841 = (inst_16833 + 1);var tmp16911 = inst_16832;var tmp16912 = inst_16830;var tmp16913 = inst_16831;var inst_16830__$1 = tmp16912;var inst_16831__$1 = tmp16913;var inst_16832__$1 = tmp16911;var inst_16833__$1 = inst_16841;var state_16885__$1 = (function (){var statearr_16917 = state_16885;(statearr_16917[11] = inst_16832__$1);
(statearr_16917[12] = inst_16830__$1);
(statearr_16917[16] = inst_16840);
(statearr_16917[13] = inst_16833__$1);
(statearr_16917[15] = inst_16831__$1);
return statearr_16917;
})();var statearr_16918_16950 = state_16885__$1;(statearr_16918_16950[2] = null);
(statearr_16918_16950[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 18))
{var inst_16859 = (state_16885[2]);var state_16885__$1 = state_16885;var statearr_16919_16951 = state_16885__$1;(statearr_16919_16951[2] = inst_16859);
(statearr_16919_16951[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16886 === 8))
{var inst_16832 = (state_16885[11]);var inst_16833 = (state_16885[13]);var inst_16835 = (inst_16833 < inst_16832);var inst_16836 = inst_16835;var state_16885__$1 = state_16885;if(cljs.core.truth_(inst_16836))
{var statearr_16920_16952 = state_16885__$1;(statearr_16920_16952[1] = 10);
} else
{var statearr_16921_16953 = state_16885__$1;(statearr_16921_16953[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___16929,mults,ensure_mult,p))
;return ((function (switch__10491__auto__,c__10506__auto___16929,mults,ensure_mult,p){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_16925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16925[0] = state_machine__10492__auto__);
(statearr_16925[1] = 1);
return statearr_16925;
});
var state_machine__10492__auto____1 = (function (state_16885){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_16885);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e16926){if((e16926 instanceof Object))
{var ex__10495__auto__ = e16926;var statearr_16927_16954 = state_16885;(statearr_16927_16954[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16955 = state_16885;
state_16885 = G__16955;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_16885){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_16885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___16929,mults,ensure_mult,p))
})();var state__10508__auto__ = (function (){var statearr_16928 = f__10507__auto__.call(null);(statearr_16928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___16929);
return statearr_16928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___16929,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10506__auto___17092 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___17092,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___17092,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17062){var state_val_17063 = (state_17062[1]);if((state_val_17063 === 7))
{var state_17062__$1 = state_17062;var statearr_17064_17093 = state_17062__$1;(statearr_17064_17093[2] = null);
(statearr_17064_17093[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 1))
{var state_17062__$1 = state_17062;var statearr_17065_17094 = state_17062__$1;(statearr_17065_17094[2] = null);
(statearr_17065_17094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 4))
{var inst_17026 = (state_17062[7]);var inst_17028 = (inst_17026 < cnt);var state_17062__$1 = state_17062;if(cljs.core.truth_(inst_17028))
{var statearr_17066_17095 = state_17062__$1;(statearr_17066_17095[1] = 6);
} else
{var statearr_17067_17096 = state_17062__$1;(statearr_17067_17096[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 15))
{var inst_17058 = (state_17062[2]);var state_17062__$1 = state_17062;var statearr_17068_17097 = state_17062__$1;(statearr_17068_17097[2] = inst_17058);
(statearr_17068_17097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 13))
{var inst_17051 = cljs.core.async.close_BANG_.call(null,out);var state_17062__$1 = state_17062;var statearr_17069_17098 = state_17062__$1;(statearr_17069_17098[2] = inst_17051);
(statearr_17069_17098[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 6))
{var state_17062__$1 = state_17062;var statearr_17070_17099 = state_17062__$1;(statearr_17070_17099[2] = null);
(statearr_17070_17099[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 3))
{var inst_17060 = (state_17062[2]);var state_17062__$1 = state_17062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17062__$1,inst_17060);
} else
{if((state_val_17063 === 12))
{var inst_17048 = (state_17062[8]);var inst_17048__$1 = (state_17062[2]);var inst_17049 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17048__$1);var state_17062__$1 = (function (){var statearr_17071 = state_17062;(statearr_17071[8] = inst_17048__$1);
return statearr_17071;
})();if(cljs.core.truth_(inst_17049))
{var statearr_17072_17100 = state_17062__$1;(statearr_17072_17100[1] = 13);
} else
{var statearr_17073_17101 = state_17062__$1;(statearr_17073_17101[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 2))
{var inst_17025 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17026 = 0;var state_17062__$1 = (function (){var statearr_17074 = state_17062;(statearr_17074[7] = inst_17026);
(statearr_17074[9] = inst_17025);
return statearr_17074;
})();var statearr_17075_17102 = state_17062__$1;(statearr_17075_17102[2] = null);
(statearr_17075_17102[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 11))
{var inst_17026 = (state_17062[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17062,10,Object,null,9);var inst_17035 = chs__$1.call(null,inst_17026);var inst_17036 = done.call(null,inst_17026);var inst_17037 = cljs.core.async.take_BANG_.call(null,inst_17035,inst_17036);var state_17062__$1 = state_17062;var statearr_17076_17103 = state_17062__$1;(statearr_17076_17103[2] = inst_17037);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17062__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 9))
{var inst_17026 = (state_17062[7]);var inst_17039 = (state_17062[2]);var inst_17040 = (inst_17026 + 1);var inst_17026__$1 = inst_17040;var state_17062__$1 = (function (){var statearr_17077 = state_17062;(statearr_17077[7] = inst_17026__$1);
(statearr_17077[10] = inst_17039);
return statearr_17077;
})();var statearr_17078_17104 = state_17062__$1;(statearr_17078_17104[2] = null);
(statearr_17078_17104[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 5))
{var inst_17046 = (state_17062[2]);var state_17062__$1 = (function (){var statearr_17079 = state_17062;(statearr_17079[11] = inst_17046);
return statearr_17079;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17062__$1,12,dchan);
} else
{if((state_val_17063 === 14))
{var inst_17048 = (state_17062[8]);var inst_17053 = cljs.core.apply.call(null,f,inst_17048);var state_17062__$1 = state_17062;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17062__$1,16,out,inst_17053);
} else
{if((state_val_17063 === 16))
{var inst_17055 = (state_17062[2]);var state_17062__$1 = (function (){var statearr_17080 = state_17062;(statearr_17080[12] = inst_17055);
return statearr_17080;
})();var statearr_17081_17105 = state_17062__$1;(statearr_17081_17105[2] = null);
(statearr_17081_17105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 10))
{var inst_17030 = (state_17062[2]);var inst_17031 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17062__$1 = (function (){var statearr_17082 = state_17062;(statearr_17082[13] = inst_17030);
return statearr_17082;
})();var statearr_17083_17106 = state_17062__$1;(statearr_17083_17106[2] = inst_17031);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17062__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17063 === 8))
{var inst_17044 = (state_17062[2]);var state_17062__$1 = state_17062;var statearr_17084_17107 = state_17062__$1;(statearr_17084_17107[2] = inst_17044);
(statearr_17084_17107[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___17092,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10491__auto__,c__10506__auto___17092,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_17088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17088[0] = state_machine__10492__auto__);
(statearr_17088[1] = 1);
return statearr_17088;
});
var state_machine__10492__auto____1 = (function (state_17062){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_17062);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e17089){if((e17089 instanceof Object))
{var ex__10495__auto__ = e17089;var statearr_17090_17108 = state_17062;(statearr_17090_17108[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17062);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17109 = state_17062;
state_17062 = G__17109;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_17062){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_17062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___17092,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10508__auto__ = (function (){var statearr_17091 = f__10507__auto__.call(null);(statearr_17091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___17092);
return statearr_17091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___17092,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10506__auto___17217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___17217,out){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___17217,out){
return (function (state_17193){var state_val_17194 = (state_17193[1]);if((state_val_17194 === 7))
{var inst_17173 = (state_17193[7]);var inst_17172 = (state_17193[8]);var inst_17172__$1 = (state_17193[2]);var inst_17173__$1 = cljs.core.nth.call(null,inst_17172__$1,0,null);var inst_17174 = cljs.core.nth.call(null,inst_17172__$1,1,null);var inst_17175 = (inst_17173__$1 == null);var state_17193__$1 = (function (){var statearr_17195 = state_17193;(statearr_17195[7] = inst_17173__$1);
(statearr_17195[9] = inst_17174);
(statearr_17195[8] = inst_17172__$1);
return statearr_17195;
})();if(cljs.core.truth_(inst_17175))
{var statearr_17196_17218 = state_17193__$1;(statearr_17196_17218[1] = 8);
} else
{var statearr_17197_17219 = state_17193__$1;(statearr_17197_17219[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 1))
{var inst_17164 = cljs.core.vec.call(null,chs);var inst_17165 = inst_17164;var state_17193__$1 = (function (){var statearr_17198 = state_17193;(statearr_17198[10] = inst_17165);
return statearr_17198;
})();var statearr_17199_17220 = state_17193__$1;(statearr_17199_17220[2] = null);
(statearr_17199_17220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 4))
{var inst_17165 = (state_17193[10]);var state_17193__$1 = state_17193;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17193__$1,7,inst_17165);
} else
{if((state_val_17194 === 6))
{var inst_17189 = (state_17193[2]);var state_17193__$1 = state_17193;var statearr_17200_17221 = state_17193__$1;(statearr_17200_17221[2] = inst_17189);
(statearr_17200_17221[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 3))
{var inst_17191 = (state_17193[2]);var state_17193__$1 = state_17193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17193__$1,inst_17191);
} else
{if((state_val_17194 === 2))
{var inst_17165 = (state_17193[10]);var inst_17167 = cljs.core.count.call(null,inst_17165);var inst_17168 = (inst_17167 > 0);var state_17193__$1 = state_17193;if(cljs.core.truth_(inst_17168))
{var statearr_17202_17222 = state_17193__$1;(statearr_17202_17222[1] = 4);
} else
{var statearr_17203_17223 = state_17193__$1;(statearr_17203_17223[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 11))
{var inst_17165 = (state_17193[10]);var inst_17182 = (state_17193[2]);var tmp17201 = inst_17165;var inst_17165__$1 = tmp17201;var state_17193__$1 = (function (){var statearr_17204 = state_17193;(statearr_17204[10] = inst_17165__$1);
(statearr_17204[11] = inst_17182);
return statearr_17204;
})();var statearr_17205_17224 = state_17193__$1;(statearr_17205_17224[2] = null);
(statearr_17205_17224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 9))
{var inst_17173 = (state_17193[7]);var state_17193__$1 = state_17193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17193__$1,11,out,inst_17173);
} else
{if((state_val_17194 === 5))
{var inst_17187 = cljs.core.async.close_BANG_.call(null,out);var state_17193__$1 = state_17193;var statearr_17206_17225 = state_17193__$1;(statearr_17206_17225[2] = inst_17187);
(statearr_17206_17225[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 10))
{var inst_17185 = (state_17193[2]);var state_17193__$1 = state_17193;var statearr_17207_17226 = state_17193__$1;(statearr_17207_17226[2] = inst_17185);
(statearr_17207_17226[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17194 === 8))
{var inst_17165 = (state_17193[10]);var inst_17173 = (state_17193[7]);var inst_17174 = (state_17193[9]);var inst_17172 = (state_17193[8]);var inst_17177 = (function (){var c = inst_17174;var v = inst_17173;var vec__17170 = inst_17172;var cs = inst_17165;return ((function (c,v,vec__17170,cs,inst_17165,inst_17173,inst_17174,inst_17172,state_val_17194,c__10506__auto___17217,out){
return (function (p1__17110_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17110_SHARP_);
});
;})(c,v,vec__17170,cs,inst_17165,inst_17173,inst_17174,inst_17172,state_val_17194,c__10506__auto___17217,out))
})();var inst_17178 = cljs.core.filterv.call(null,inst_17177,inst_17165);var inst_17165__$1 = inst_17178;var state_17193__$1 = (function (){var statearr_17208 = state_17193;(statearr_17208[10] = inst_17165__$1);
return statearr_17208;
})();var statearr_17209_17227 = state_17193__$1;(statearr_17209_17227[2] = null);
(statearr_17209_17227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___17217,out))
;return ((function (switch__10491__auto__,c__10506__auto___17217,out){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_17213 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17213[0] = state_machine__10492__auto__);
(statearr_17213[1] = 1);
return statearr_17213;
});
var state_machine__10492__auto____1 = (function (state_17193){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_17193);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e17214){if((e17214 instanceof Object))
{var ex__10495__auto__ = e17214;var statearr_17215_17228 = state_17193;(statearr_17215_17228[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17229 = state_17193;
state_17193 = G__17229;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_17193){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_17193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___17217,out))
})();var state__10508__auto__ = (function (){var statearr_17216 = f__10507__auto__.call(null);(statearr_17216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___17217);
return statearr_17216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___17217,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10506__auto___17322 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___17322,out){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___17322,out){
return (function (state_17299){var state_val_17300 = (state_17299[1]);if((state_val_17300 === 7))
{var inst_17281 = (state_17299[7]);var inst_17281__$1 = (state_17299[2]);var inst_17282 = (inst_17281__$1 == null);var inst_17283 = cljs.core.not.call(null,inst_17282);var state_17299__$1 = (function (){var statearr_17301 = state_17299;(statearr_17301[7] = inst_17281__$1);
return statearr_17301;
})();if(inst_17283)
{var statearr_17302_17323 = state_17299__$1;(statearr_17302_17323[1] = 8);
} else
{var statearr_17303_17324 = state_17299__$1;(statearr_17303_17324[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17300 === 1))
{var inst_17276 = 0;var state_17299__$1 = (function (){var statearr_17304 = state_17299;(statearr_17304[8] = inst_17276);
return statearr_17304;
})();var statearr_17305_17325 = state_17299__$1;(statearr_17305_17325[2] = null);
(statearr_17305_17325[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17300 === 4))
{var state_17299__$1 = state_17299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17299__$1,7,ch);
} else
{if((state_val_17300 === 6))
{var inst_17294 = (state_17299[2]);var state_17299__$1 = state_17299;var statearr_17306_17326 = state_17299__$1;(statearr_17306_17326[2] = inst_17294);
(statearr_17306_17326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17300 === 3))
{var inst_17296 = (state_17299[2]);var inst_17297 = cljs.core.async.close_BANG_.call(null,out);var state_17299__$1 = (function (){var statearr_17307 = state_17299;(statearr_17307[9] = inst_17296);
return statearr_17307;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17299__$1,inst_17297);
} else
{if((state_val_17300 === 2))
{var inst_17276 = (state_17299[8]);var inst_17278 = (inst_17276 < n);var state_17299__$1 = state_17299;if(cljs.core.truth_(inst_17278))
{var statearr_17308_17327 = state_17299__$1;(statearr_17308_17327[1] = 4);
} else
{var statearr_17309_17328 = state_17299__$1;(statearr_17309_17328[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17300 === 11))
{var inst_17276 = (state_17299[8]);var inst_17286 = (state_17299[2]);var inst_17287 = (inst_17276 + 1);var inst_17276__$1 = inst_17287;var state_17299__$1 = (function (){var statearr_17310 = state_17299;(statearr_17310[8] = inst_17276__$1);
(statearr_17310[10] = inst_17286);
return statearr_17310;
})();var statearr_17311_17329 = state_17299__$1;(statearr_17311_17329[2] = null);
(statearr_17311_17329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17300 === 9))
{var state_17299__$1 = state_17299;var statearr_17312_17330 = state_17299__$1;(statearr_17312_17330[2] = null);
(statearr_17312_17330[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17300 === 5))
{var state_17299__$1 = state_17299;var statearr_17313_17331 = state_17299__$1;(statearr_17313_17331[2] = null);
(statearr_17313_17331[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17300 === 10))
{var inst_17291 = (state_17299[2]);var state_17299__$1 = state_17299;var statearr_17314_17332 = state_17299__$1;(statearr_17314_17332[2] = inst_17291);
(statearr_17314_17332[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17300 === 8))
{var inst_17281 = (state_17299[7]);var state_17299__$1 = state_17299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17299__$1,11,out,inst_17281);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___17322,out))
;return ((function (switch__10491__auto__,c__10506__auto___17322,out){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_17318 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17318[0] = state_machine__10492__auto__);
(statearr_17318[1] = 1);
return statearr_17318;
});
var state_machine__10492__auto____1 = (function (state_17299){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_17299);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e17319){if((e17319 instanceof Object))
{var ex__10495__auto__ = e17319;var statearr_17320_17333 = state_17299;(statearr_17320_17333[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17299);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17334 = state_17299;
state_17299 = G__17334;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_17299){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_17299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___17322,out))
})();var state__10508__auto__ = (function (){var statearr_17321 = f__10507__auto__.call(null);(statearr_17321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___17322);
return statearr_17321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___17322,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10506__auto___17431 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___17431,out){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___17431,out){
return (function (state_17406){var state_val_17407 = (state_17406[1]);if((state_val_17407 === 7))
{var inst_17401 = (state_17406[2]);var state_17406__$1 = state_17406;var statearr_17408_17432 = state_17406__$1;(statearr_17408_17432[2] = inst_17401);
(statearr_17408_17432[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17407 === 1))
{var inst_17383 = null;var state_17406__$1 = (function (){var statearr_17409 = state_17406;(statearr_17409[7] = inst_17383);
return statearr_17409;
})();var statearr_17410_17433 = state_17406__$1;(statearr_17410_17433[2] = null);
(statearr_17410_17433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17407 === 4))
{var inst_17386 = (state_17406[8]);var inst_17386__$1 = (state_17406[2]);var inst_17387 = (inst_17386__$1 == null);var inst_17388 = cljs.core.not.call(null,inst_17387);var state_17406__$1 = (function (){var statearr_17411 = state_17406;(statearr_17411[8] = inst_17386__$1);
return statearr_17411;
})();if(inst_17388)
{var statearr_17412_17434 = state_17406__$1;(statearr_17412_17434[1] = 5);
} else
{var statearr_17413_17435 = state_17406__$1;(statearr_17413_17435[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17407 === 6))
{var state_17406__$1 = state_17406;var statearr_17414_17436 = state_17406__$1;(statearr_17414_17436[2] = null);
(statearr_17414_17436[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17407 === 3))
{var inst_17403 = (state_17406[2]);var inst_17404 = cljs.core.async.close_BANG_.call(null,out);var state_17406__$1 = (function (){var statearr_17415 = state_17406;(statearr_17415[9] = inst_17403);
return statearr_17415;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17406__$1,inst_17404);
} else
{if((state_val_17407 === 2))
{var state_17406__$1 = state_17406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17406__$1,4,ch);
} else
{if((state_val_17407 === 11))
{var inst_17386 = (state_17406[8]);var inst_17395 = (state_17406[2]);var inst_17383 = inst_17386;var state_17406__$1 = (function (){var statearr_17416 = state_17406;(statearr_17416[7] = inst_17383);
(statearr_17416[10] = inst_17395);
return statearr_17416;
})();var statearr_17417_17437 = state_17406__$1;(statearr_17417_17437[2] = null);
(statearr_17417_17437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17407 === 9))
{var inst_17386 = (state_17406[8]);var state_17406__$1 = state_17406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17406__$1,11,out,inst_17386);
} else
{if((state_val_17407 === 5))
{var inst_17383 = (state_17406[7]);var inst_17386 = (state_17406[8]);var inst_17390 = cljs.core._EQ_.call(null,inst_17386,inst_17383);var state_17406__$1 = state_17406;if(inst_17390)
{var statearr_17419_17438 = state_17406__$1;(statearr_17419_17438[1] = 8);
} else
{var statearr_17420_17439 = state_17406__$1;(statearr_17420_17439[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17407 === 10))
{var inst_17398 = (state_17406[2]);var state_17406__$1 = state_17406;var statearr_17421_17440 = state_17406__$1;(statearr_17421_17440[2] = inst_17398);
(statearr_17421_17440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17407 === 8))
{var inst_17383 = (state_17406[7]);var tmp17418 = inst_17383;var inst_17383__$1 = tmp17418;var state_17406__$1 = (function (){var statearr_17422 = state_17406;(statearr_17422[7] = inst_17383__$1);
return statearr_17422;
})();var statearr_17423_17441 = state_17406__$1;(statearr_17423_17441[2] = null);
(statearr_17423_17441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___17431,out))
;return ((function (switch__10491__auto__,c__10506__auto___17431,out){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_17427 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17427[0] = state_machine__10492__auto__);
(statearr_17427[1] = 1);
return statearr_17427;
});
var state_machine__10492__auto____1 = (function (state_17406){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_17406);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e17428){if((e17428 instanceof Object))
{var ex__10495__auto__ = e17428;var statearr_17429_17442 = state_17406;(statearr_17429_17442[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17443 = state_17406;
state_17406 = G__17443;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_17406){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_17406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___17431,out))
})();var state__10508__auto__ = (function (){var statearr_17430 = f__10507__auto__.call(null);(statearr_17430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___17431);
return statearr_17430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___17431,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10506__auto___17578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___17578,out){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___17578,out){
return (function (state_17548){var state_val_17549 = (state_17548[1]);if((state_val_17549 === 7))
{var inst_17544 = (state_17548[2]);var state_17548__$1 = state_17548;var statearr_17550_17579 = state_17548__$1;(statearr_17550_17579[2] = inst_17544);
(statearr_17550_17579[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 1))
{var inst_17511 = (new Array(n));var inst_17512 = inst_17511;var inst_17513 = 0;var state_17548__$1 = (function (){var statearr_17551 = state_17548;(statearr_17551[7] = inst_17512);
(statearr_17551[8] = inst_17513);
return statearr_17551;
})();var statearr_17552_17580 = state_17548__$1;(statearr_17552_17580[2] = null);
(statearr_17552_17580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 4))
{var inst_17516 = (state_17548[9]);var inst_17516__$1 = (state_17548[2]);var inst_17517 = (inst_17516__$1 == null);var inst_17518 = cljs.core.not.call(null,inst_17517);var state_17548__$1 = (function (){var statearr_17553 = state_17548;(statearr_17553[9] = inst_17516__$1);
return statearr_17553;
})();if(inst_17518)
{var statearr_17554_17581 = state_17548__$1;(statearr_17554_17581[1] = 5);
} else
{var statearr_17555_17582 = state_17548__$1;(statearr_17555_17582[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 15))
{var inst_17538 = (state_17548[2]);var state_17548__$1 = state_17548;var statearr_17556_17583 = state_17548__$1;(statearr_17556_17583[2] = inst_17538);
(statearr_17556_17583[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 13))
{var state_17548__$1 = state_17548;var statearr_17557_17584 = state_17548__$1;(statearr_17557_17584[2] = null);
(statearr_17557_17584[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 6))
{var inst_17513 = (state_17548[8]);var inst_17534 = (inst_17513 > 0);var state_17548__$1 = state_17548;if(cljs.core.truth_(inst_17534))
{var statearr_17558_17585 = state_17548__$1;(statearr_17558_17585[1] = 12);
} else
{var statearr_17559_17586 = state_17548__$1;(statearr_17559_17586[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 3))
{var inst_17546 = (state_17548[2]);var state_17548__$1 = state_17548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17548__$1,inst_17546);
} else
{if((state_val_17549 === 12))
{var inst_17512 = (state_17548[7]);var inst_17536 = cljs.core.vec.call(null,inst_17512);var state_17548__$1 = state_17548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17548__$1,15,out,inst_17536);
} else
{if((state_val_17549 === 2))
{var state_17548__$1 = state_17548;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17548__$1,4,ch);
} else
{if((state_val_17549 === 11))
{var inst_17528 = (state_17548[2]);var inst_17529 = (new Array(n));var inst_17512 = inst_17529;var inst_17513 = 0;var state_17548__$1 = (function (){var statearr_17560 = state_17548;(statearr_17560[10] = inst_17528);
(statearr_17560[7] = inst_17512);
(statearr_17560[8] = inst_17513);
return statearr_17560;
})();var statearr_17561_17587 = state_17548__$1;(statearr_17561_17587[2] = null);
(statearr_17561_17587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 9))
{var inst_17512 = (state_17548[7]);var inst_17526 = cljs.core.vec.call(null,inst_17512);var state_17548__$1 = state_17548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17548__$1,11,out,inst_17526);
} else
{if((state_val_17549 === 5))
{var inst_17516 = (state_17548[9]);var inst_17521 = (state_17548[11]);var inst_17512 = (state_17548[7]);var inst_17513 = (state_17548[8]);var inst_17520 = (inst_17512[inst_17513] = inst_17516);var inst_17521__$1 = (inst_17513 + 1);var inst_17522 = (inst_17521__$1 < n);var state_17548__$1 = (function (){var statearr_17562 = state_17548;(statearr_17562[12] = inst_17520);
(statearr_17562[11] = inst_17521__$1);
return statearr_17562;
})();if(cljs.core.truth_(inst_17522))
{var statearr_17563_17588 = state_17548__$1;(statearr_17563_17588[1] = 8);
} else
{var statearr_17564_17589 = state_17548__$1;(statearr_17564_17589[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 14))
{var inst_17541 = (state_17548[2]);var inst_17542 = cljs.core.async.close_BANG_.call(null,out);var state_17548__$1 = (function (){var statearr_17566 = state_17548;(statearr_17566[13] = inst_17541);
return statearr_17566;
})();var statearr_17567_17590 = state_17548__$1;(statearr_17567_17590[2] = inst_17542);
(statearr_17567_17590[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 10))
{var inst_17532 = (state_17548[2]);var state_17548__$1 = state_17548;var statearr_17568_17591 = state_17548__$1;(statearr_17568_17591[2] = inst_17532);
(statearr_17568_17591[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17549 === 8))
{var inst_17521 = (state_17548[11]);var inst_17512 = (state_17548[7]);var tmp17565 = inst_17512;var inst_17512__$1 = tmp17565;var inst_17513 = inst_17521;var state_17548__$1 = (function (){var statearr_17569 = state_17548;(statearr_17569[7] = inst_17512__$1);
(statearr_17569[8] = inst_17513);
return statearr_17569;
})();var statearr_17570_17592 = state_17548__$1;(statearr_17570_17592[2] = null);
(statearr_17570_17592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___17578,out))
;return ((function (switch__10491__auto__,c__10506__auto___17578,out){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_17574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17574[0] = state_machine__10492__auto__);
(statearr_17574[1] = 1);
return statearr_17574;
});
var state_machine__10492__auto____1 = (function (state_17548){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_17548);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e17575){if((e17575 instanceof Object))
{var ex__10495__auto__ = e17575;var statearr_17576_17593 = state_17548;(statearr_17576_17593[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17548);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17594 = state_17548;
state_17548 = G__17594;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_17548){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_17548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___17578,out))
})();var state__10508__auto__ = (function (){var statearr_17577 = f__10507__auto__.call(null);(statearr_17577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___17578);
return statearr_17577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___17578,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10506__auto___17737 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10506__auto___17737,out){
return (function (){var f__10507__auto__ = (function (){var switch__10491__auto__ = ((function (c__10506__auto___17737,out){
return (function (state_17707){var state_val_17708 = (state_17707[1]);if((state_val_17708 === 7))
{var inst_17703 = (state_17707[2]);var state_17707__$1 = state_17707;var statearr_17709_17738 = state_17707__$1;(statearr_17709_17738[2] = inst_17703);
(statearr_17709_17738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 1))
{var inst_17666 = [];var inst_17667 = inst_17666;var inst_17668 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17707__$1 = (function (){var statearr_17710 = state_17707;(statearr_17710[7] = inst_17667);
(statearr_17710[8] = inst_17668);
return statearr_17710;
})();var statearr_17711_17739 = state_17707__$1;(statearr_17711_17739[2] = null);
(statearr_17711_17739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 4))
{var inst_17671 = (state_17707[9]);var inst_17671__$1 = (state_17707[2]);var inst_17672 = (inst_17671__$1 == null);var inst_17673 = cljs.core.not.call(null,inst_17672);var state_17707__$1 = (function (){var statearr_17712 = state_17707;(statearr_17712[9] = inst_17671__$1);
return statearr_17712;
})();if(inst_17673)
{var statearr_17713_17740 = state_17707__$1;(statearr_17713_17740[1] = 5);
} else
{var statearr_17714_17741 = state_17707__$1;(statearr_17714_17741[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 15))
{var inst_17697 = (state_17707[2]);var state_17707__$1 = state_17707;var statearr_17715_17742 = state_17707__$1;(statearr_17715_17742[2] = inst_17697);
(statearr_17715_17742[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 13))
{var state_17707__$1 = state_17707;var statearr_17716_17743 = state_17707__$1;(statearr_17716_17743[2] = null);
(statearr_17716_17743[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 6))
{var inst_17667 = (state_17707[7]);var inst_17692 = inst_17667.length;var inst_17693 = (inst_17692 > 0);var state_17707__$1 = state_17707;if(cljs.core.truth_(inst_17693))
{var statearr_17717_17744 = state_17707__$1;(statearr_17717_17744[1] = 12);
} else
{var statearr_17718_17745 = state_17707__$1;(statearr_17718_17745[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 3))
{var inst_17705 = (state_17707[2]);var state_17707__$1 = state_17707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17707__$1,inst_17705);
} else
{if((state_val_17708 === 12))
{var inst_17667 = (state_17707[7]);var inst_17695 = cljs.core.vec.call(null,inst_17667);var state_17707__$1 = state_17707;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17707__$1,15,out,inst_17695);
} else
{if((state_val_17708 === 2))
{var state_17707__$1 = state_17707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17707__$1,4,ch);
} else
{if((state_val_17708 === 11))
{var inst_17671 = (state_17707[9]);var inst_17675 = (state_17707[10]);var inst_17685 = (state_17707[2]);var inst_17686 = [];var inst_17687 = inst_17686.push(inst_17671);var inst_17667 = inst_17686;var inst_17668 = inst_17675;var state_17707__$1 = (function (){var statearr_17719 = state_17707;(statearr_17719[11] = inst_17685);
(statearr_17719[12] = inst_17687);
(statearr_17719[7] = inst_17667);
(statearr_17719[8] = inst_17668);
return statearr_17719;
})();var statearr_17720_17746 = state_17707__$1;(statearr_17720_17746[2] = null);
(statearr_17720_17746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 9))
{var inst_17667 = (state_17707[7]);var inst_17683 = cljs.core.vec.call(null,inst_17667);var state_17707__$1 = state_17707;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17707__$1,11,out,inst_17683);
} else
{if((state_val_17708 === 5))
{var inst_17671 = (state_17707[9]);var inst_17675 = (state_17707[10]);var inst_17668 = (state_17707[8]);var inst_17675__$1 = f.call(null,inst_17671);var inst_17676 = cljs.core._EQ_.call(null,inst_17675__$1,inst_17668);var inst_17677 = cljs.core.keyword_identical_QMARK_.call(null,inst_17668,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17678 = (inst_17676) || (inst_17677);var state_17707__$1 = (function (){var statearr_17721 = state_17707;(statearr_17721[10] = inst_17675__$1);
return statearr_17721;
})();if(cljs.core.truth_(inst_17678))
{var statearr_17722_17747 = state_17707__$1;(statearr_17722_17747[1] = 8);
} else
{var statearr_17723_17748 = state_17707__$1;(statearr_17723_17748[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 14))
{var inst_17700 = (state_17707[2]);var inst_17701 = cljs.core.async.close_BANG_.call(null,out);var state_17707__$1 = (function (){var statearr_17725 = state_17707;(statearr_17725[13] = inst_17700);
return statearr_17725;
})();var statearr_17726_17749 = state_17707__$1;(statearr_17726_17749[2] = inst_17701);
(statearr_17726_17749[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 10))
{var inst_17690 = (state_17707[2]);var state_17707__$1 = state_17707;var statearr_17727_17750 = state_17707__$1;(statearr_17727_17750[2] = inst_17690);
(statearr_17727_17750[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17708 === 8))
{var inst_17671 = (state_17707[9]);var inst_17675 = (state_17707[10]);var inst_17667 = (state_17707[7]);var inst_17680 = inst_17667.push(inst_17671);var tmp17724 = inst_17667;var inst_17667__$1 = tmp17724;var inst_17668 = inst_17675;var state_17707__$1 = (function (){var statearr_17728 = state_17707;(statearr_17728[7] = inst_17667__$1);
(statearr_17728[14] = inst_17680);
(statearr_17728[8] = inst_17668);
return statearr_17728;
})();var statearr_17729_17751 = state_17707__$1;(statearr_17729_17751[2] = null);
(statearr_17729_17751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10506__auto___17737,out))
;return ((function (switch__10491__auto__,c__10506__auto___17737,out){
return (function() {
var state_machine__10492__auto__ = null;
var state_machine__10492__auto____0 = (function (){var statearr_17733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17733[0] = state_machine__10492__auto__);
(statearr_17733[1] = 1);
return statearr_17733;
});
var state_machine__10492__auto____1 = (function (state_17707){while(true){
var ret_value__10493__auto__ = (function (){try{while(true){
var result__10494__auto__ = switch__10491__auto__.call(null,state_17707);if(cljs.core.keyword_identical_QMARK_.call(null,result__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10494__auto__;
}
break;
}
}catch (e17734){if((e17734 instanceof Object))
{var ex__10495__auto__ = e17734;var statearr_17735_17752 = state_17707;(statearr_17735_17752[5] = ex__10495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17707);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17753 = state_17707;
state_17707 = G__17753;
continue;
}
} else
{return ret_value__10493__auto__;
}
break;
}
});
state_machine__10492__auto__ = function(state_17707){
switch(arguments.length){
case 0:
return state_machine__10492__auto____0.call(this);
case 1:
return state_machine__10492__auto____1.call(this,state_17707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10492__auto____0;
state_machine__10492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10492__auto____1;
return state_machine__10492__auto__;
})()
;})(switch__10491__auto__,c__10506__auto___17737,out))
})();var state__10508__auto__ = (function (){var statearr_17736 = f__10507__auto__.call(null);(statearr_17736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10506__auto___17737);
return statearr_17736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10508__auto__);
});})(c__10506__auto___17737,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map