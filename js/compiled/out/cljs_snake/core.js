// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_snake.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cemerick.cljs.test');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('cljs_snake.drawing');
goog.require('sablono.core');
goog.require('figwheel.client');
goog.require('cemerick.cljs.test');
goog.require('cljs_snake.drawing');
cljs.core.enable_console_print_BANG_.call(null);
cljs_snake.core.tick_speed = 150;
cljs_snake.core.keycode_a = 65;
cljs_snake.core.input_chan = cljs.core.async.chan.call(null);
cljs_snake.core.starting_snake_length = 3;
cljs_snake.core.reset_state = (function() {
var reset_state = null;
var reset_state__0 = (function (){return reset_state.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ai","ai",1013907354),true], null));
});
var reset_state__1 = (function (state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running","running",2564688177),true,new cljs.core.Keyword(null,"x","x",1013904362),(0 | 0),new cljs.core.Keyword(null,"y","y",1013904363),(0 | 0),new cljs.core.Keyword(null,"score","score",1123168772),0,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),null,new cljs.core.Keyword(null,"direction","direction",4346280689),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),cljs.core.PersistentQueue.EMPTY,new cljs.core.Keyword(null,"columns","columns",1963625295),18,new cljs.core.Keyword(null,"rows","rows",1017410891),14,new cljs.core.Keyword(null,"starting-snake-length","starting-snake-length",3392558066),3);
});
reset_state = function(state){
switch(arguments.length){
case 0:
return reset_state__0.call(this);
case 1:
return reset_state__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reset_state.cljs$core$IFn$_invoke$arity$0 = reset_state__0;
reset_state.cljs$core$IFn$_invoke$arity$1 = reset_state__1;
return reset_state;
})()
;
cljs_snake.core.debug = cljs.core.atom.call(null,"Debug");
if(cljs.core.truth_(cljs_snake.core.hasOwnProperty("state")))
{} else
{cljs_snake.core.state = cljs.core.atom.call(null,cljs_snake.core.reset_state.call(null));
}
cljs_snake.core.disable_ai = (function disable_ai(p__15969){var map__15971 = p__15969;var map__15971__$1 = ((cljs.core.seq_QMARK_.call(null,map__15971))?cljs.core.apply.call(null,cljs.core.hash_map,map__15971):map__15971);var state = map__15971__$1;var ai = cljs.core.get.call(null,map__15971__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ai","ai",1013907354),false);
});
cljs_snake.core.disable_ai_BANG_ = (function disable_ai_BANG_(){return cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs_snake.core.disable_ai);
});
cljs.core.memoize.call(null,cljs_snake.core.all_positions = (function all_positions(columns,rows){var iter__8592__auto__ = (function iter__15978(s__15979){return (new cljs.core.LazySeq(null,(function (){var s__15979__$1 = s__15979;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15979__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first.call(null,xs__4624__auto__);var iterys__8588__auto__ = ((function (s__15979__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__15980(s__15981){return (new cljs.core.LazySeq(null,((function (s__15979__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__15981__$1 = s__15981;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15981__$1);if(temp__4126__auto____$1)
{var s__15981__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15981__$2))
{var c__8590__auto__ = cljs.core.chunk_first.call(null,s__15981__$2);var size__8591__auto__ = cljs.core.count.call(null,c__8590__auto__);var b__15983 = cljs.core.chunk_buffer.call(null,size__8591__auto__);if((function (){var i__15982 = 0;while(true){
if((i__15982 < size__8591__auto__))
{var y = cljs.core._nth.call(null,c__8590__auto__,i__15982);cljs.core.chunk_append.call(null,b__15983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__15984 = (i__15982 + 1);
i__15982 = G__15984;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15983),iter__15980.call(null,cljs.core.chunk_rest.call(null,s__15981__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15983),null);
}
} else
{var y = cljs.core.first.call(null,s__15981__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__15980.call(null,cljs.core.rest.call(null,s__15981__$2)));
}
} else
{return null;
}
break;
}
});})(s__15979__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__15979__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__8589__auto__ = cljs.core.seq.call(null,iterys__8588__auto__.call(null,cljs.core.range.call(null,rows)));if(fs__8589__auto__)
{return cljs.core.concat.call(null,fs__8589__auto__,iter__15978.call(null,cljs.core.rest.call(null,s__15979__$1)));
} else
{{
var G__15985 = cljs.core.rest.call(null,s__15979__$1);
s__15979__$1 = G__15985;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8592__auto__.call(null,cljs.core.range.call(null,columns));
}));
cljs_snake.core.update_x = (function update_x(x,direction){var G__15987 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__15987))
{return (x + 1);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__15987))
{return (x - 1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
});
cljs_snake.core.update_y = (function update_y(y,direction){var G__15989 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__15989))
{return (y + 1);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__15989))
{return (y - 1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return y;
} else
{return null;
}
}
}
});
cljs_snake.core.update_position = (function update_position(p__15990){var map__15992 = p__15990;var map__15992__$1 = ((cljs.core.seq_QMARK_.call(null,map__15992))?cljs.core.apply.call(null,cljs.core.hash_map,map__15992):map__15992);var state = map__15992__$1;var running = cljs.core.get.call(null,map__15992__$1,new cljs.core.Keyword(null,"running","running",2564688177));var score = cljs.core.get.call(null,map__15992__$1,new cljs.core.Keyword(null,"score","score",1123168772));var snake_tail = cljs.core.get.call(null,map__15992__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var y = cljs.core.get.call(null,map__15992__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__15992__$1,new cljs.core.Keyword(null,"x","x",1013904362));var direction = cljs.core.get.call(null,map__15992__$1,new cljs.core.Keyword(null,"direction","direction",4346280689));if(cljs.core.truth_(running))
{var old_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);var x__$1 = cljs_snake.core.update_x.call(null,x,direction);var y__$1 = cljs_snake.core.update_y.call(null,y,direction);var snake_tail__$1 = cljs.core.conj.call(null,snake_tail,old_position);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",1013904362),x__$1,new cljs.core.Keyword(null,"y","y",1013904363),y__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),snake_tail__$1);
} else
{return state;
}
});
cljs_snake.core.empty_positions = (function empty_positions(p__15993){var map__15995 = p__15993;var map__15995__$1 = ((cljs.core.seq_QMARK_.call(null,map__15995))?cljs.core.apply.call(null,cljs.core.hash_map,map__15995):map__15995);var state = map__15995__$1;var rows = cljs.core.get.call(null,map__15995__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var columns = cljs.core.get.call(null,map__15995__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var tail = cljs.core.get.call(null,map__15995__$1,new cljs.core.Keyword(null,"tail","tail",1017456578));var y = cljs.core.get.call(null,map__15995__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__15995__$1,new cljs.core.Keyword(null,"x","x",1013904362));return rows;
});
cljs_snake.core.create_food = (function create_food(p__15996){var map__15998 = p__15996;var map__15998__$1 = ((cljs.core.seq_QMARK_.call(null,map__15998))?cljs.core.apply.call(null,cljs.core.hash_map,map__15998):map__15998);var state = map__15998__$1;var rows = cljs.core.get.call(null,map__15998__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var columns = cljs.core.get.call(null,map__15998__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var tail = cljs.core.get.call(null,map__15998__$1,new cljs.core.Keyword(null,"tail","tail",1017456578));var y = cljs.core.get.call(null,map__15998__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__15998__$1,new cljs.core.Keyword(null,"x","x",1013904362));var food_pos = cljs.core.get.call(null,map__15998__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));if(cljs.core.not.call(null,food_pos))
{var empty_positions = cljs_snake.core.empty_positions.call(null,state);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,columns),cljs.core.rand_int.call(null,rows)], null));
} else
{return state;
}
});
cljs_snake.core.eat_food = (function eat_food(p__15999){var map__16001 = p__15999;var map__16001__$1 = ((cljs.core.seq_QMARK_.call(null,map__16001))?cljs.core.apply.call(null,cljs.core.hash_map,map__16001):map__16001);var state = map__16001__$1;var score = cljs.core.get.call(null,map__16001__$1,new cljs.core.Keyword(null,"score","score",1123168772));var food_pos = cljs.core.get.call(null,map__16001__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var y = cljs.core.get.call(null,map__16001__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__16001__$1,new cljs.core.Keyword(null,"x","x",1013904362));var snake_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);if(cljs.core._EQ_.call(null,snake_pos,food_pos))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),null,new cljs.core.Keyword(null,"score","score",1123168772),(score + 1));
} else
{return state;
}
});
cljs_snake.core.update_food = (function update_food(state){return cljs_snake.core.create_food.call(null,cljs_snake.core.eat_food.call(null,state));
});
cljs_snake.core.head_for_food = (function head_for_food(p__16002){var map__16005 = p__16002;var map__16005__$1 = ((cljs.core.seq_QMARK_.call(null,map__16005))?cljs.core.apply.call(null,cljs.core.hash_map,map__16005):map__16005);var state = map__16005__$1;var food_pos = cljs.core.get.call(null,map__16005__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var y = cljs.core.get.call(null,map__16005__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__16005__$1,new cljs.core.Keyword(null,"x","x",1013904362));var temp__4124__auto__ = food_pos;if(cljs.core.truth_(temp__4124__auto__))
{var vec__16006 = temp__4124__auto__;var food_x = cljs.core.nth.call(null,vec__16006,0,null);var food_y = cljs.core.nth.call(null,vec__16006,1,null);var new_direction = (((x < food_x))?new cljs.core.Keyword(null,"right","right",1122416014):(((food_x < x))?new cljs.core.Keyword(null,"left","left",1017222009):(((food_y < y))?new cljs.core.Keyword(null,"up","up",1013907981):(((y < food_y))?new cljs.core.Keyword(null,"down","down",1016993812):((new cljs.core.Keyword(null,"default","default",2558708147))?new cljs.core.Keyword(null,"direction","direction",4346280689).cljs$core$IFn$_invoke$arity$1(state):null)))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"direction","direction",4346280689),new_direction);
} else
{return state;
}
});
cljs_snake.core.ai_auto_restart = (function ai_auto_restart(p__16007){var map__16009 = p__16007;var map__16009__$1 = ((cljs.core.seq_QMARK_.call(null,map__16009))?cljs.core.apply.call(null,cljs.core.hash_map,map__16009):map__16009);var state = map__16009__$1;var running = cljs.core.get.call(null,map__16009__$1,new cljs.core.Keyword(null,"running","running",2564688177));if(cljs.core.truth_(running))
{return state;
} else
{return cljs_snake.core.reset_state.call(null,state);
}
});
cljs_snake.core.ai = (function ai(p__16010){var map__16012 = p__16010;var map__16012__$1 = ((cljs.core.seq_QMARK_.call(null,map__16012))?cljs.core.apply.call(null,cljs.core.hash_map,map__16012):map__16012);var state = map__16012__$1;var ai__$1 = cljs.core.get.call(null,map__16012__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));if(cljs.core.truth_(ai__$1))
{return cljs_snake.core.head_for_food.call(null,cljs_snake.core.ai_auto_restart.call(null,state));
} else
{return state;
}
});
/**
* true if seq contains elm
*/
cljs_snake.core.in_QMARK_ = (function in_QMARK_(seq,elm){return cljs.core.some.call(null,(function (p1__16013_SHARP_){return cljs.core._EQ_.call(null,elm,p1__16013_SHARP_);
}),seq);
});
cljs_snake.core.out_of_bounds_QMARK_ = (function out_of_bounds_QMARK_(x,y,columns,rows){return !((((-1 < x)) && ((x < columns))) && (((-1 < y)) && ((y < rows))));
});
cljs_snake.core.check_game_over = (function check_game_over(p__16014){var map__16016 = p__16014;var map__16016__$1 = ((cljs.core.seq_QMARK_.call(null,map__16016))?cljs.core.apply.call(null,cljs.core.hash_map,map__16016):map__16016);var state = map__16016__$1;var rows = cljs.core.get.call(null,map__16016__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var columns = cljs.core.get.call(null,map__16016__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var snake_tail = cljs.core.get.call(null,map__16016__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var y = cljs.core.get.call(null,map__16016__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__16016__$1,new cljs.core.Keyword(null,"x","x",1013904362));if(cljs.core.truth_((function (){var or__7875__auto__ = cljs_snake.core.in_QMARK_.call(null,snake_tail,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));if(cljs.core.truth_(or__7875__auto__))
{return or__7875__auto__;
} else
{return cljs_snake.core.out_of_bounds_QMARK_.call(null,x,y,columns,rows);
}
})()))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running","running",2564688177),false);
} else
{return state;
}
});
cljs_snake.core.truncate_snake_tail = (function truncate_snake_tail(p__16017){while(true){
var map__16019 = p__16017;var map__16019__$1 = ((cljs.core.seq_QMARK_.call(null,map__16019))?cljs.core.apply.call(null,cljs.core.hash_map,map__16019):map__16019);var state = map__16019__$1;var snake_tail = cljs.core.get.call(null,map__16019__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var score = cljs.core.get.call(null,map__16019__$1,new cljs.core.Keyword(null,"score","score",1123168772));var current_snake_length = (cljs.core.count.call(null,snake_tail) + 1);var max_length = (score + cljs_snake.core.starting_snake_length);if((max_length < current_snake_length))
{{
var G__16020 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),cljs.core.pop.call(null,snake_tail));
p__16017 = G__16020;
continue;
}
} else
{return state;
}
break;
}
});
cljs_snake.core.update_state = (function update_state(state){return cljs_snake.core.check_game_over.call(null,cljs_snake.core.truncate_snake_tail.call(null,cljs_snake.core.update_food.call(null,cljs_snake.core.update_position.call(null,cljs_snake.core.ai.call(null,state)))));
});
cljs_snake.core.keycodes__GT_direction = new cljs.core.PersistentArrayMap(null, 8, [37,new cljs.core.Keyword(null,"left","left",1017222009),38,new cljs.core.Keyword(null,"up","up",1013907981),39,new cljs.core.Keyword(null,"right","right",1122416014),40,new cljs.core.Keyword(null,"down","down",1016993812),74,new cljs.core.Keyword(null,"left","left",1017222009),76,new cljs.core.Keyword(null,"right","right",1122416014),75,new cljs.core.Keyword(null,"down","down",1016993812),73,new cljs.core.Keyword(null,"up","up",1013907981)], null);
cljs_snake.core.is_movement_key_QMARK_ = (function is_movement_key_QMARK_(n){return cljs.core.contains_QMARK_.call(null,cljs_snake.core.keycodes__GT_direction,n);
});
cljs_snake.core.opposite_direction = (function opposite_direction(direction){var G__16022 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__16022))
{return new cljs.core.Keyword(null,"up","up",1013907981);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__16022))
{return new cljs.core.Keyword(null,"down","down",1016993812);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__16022))
{return new cljs.core.Keyword(null,"left","left",1017222009);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__16022))
{return new cljs.core.Keyword(null,"right","right",1122416014);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"error","error",1110689146);
} else
{return null;
}
}
}
}
}
});
cljs_snake.core.split_dual_direction = (function split_dual_direction(dual_direction){var G__16024 = dual_direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"downright","downright",2331977260),G__16024))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"right","right",1122416014)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"downleft","downleft",2441713435),G__16024))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"left","left",1017222009)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upright","upright",792629203),G__16024))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"right","right",1122416014)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upleft","upleft",4470267028),G__16024))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"left","left",1017222009)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dual_direction], null);
} else
{return null;
}
}
}
}
}
});
cljs_snake.core.dont_reverse = (function dont_reverse(current_direction,new_direction){if(cljs.core.not_EQ_.call(null,current_direction,cljs_snake.core.opposite_direction.call(null,new_direction)))
{return new_direction;
} else
{return current_direction;
}
});
/**
* given a current direction and a compound input direction, returns which aspect of the compount direction should be applied
*/
cljs_snake.core.disambiguate_direction = (function disambiguate_direction(current_direction,dual_direction){var possible_directions = cljs_snake.core.split_dual_direction.call(null,dual_direction);return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([current_direction,cljs_snake.core.opposite_direction.call(null,current_direction)], true),possible_directions));
});
/**
* Change to given direction, provided that's not backwards
*/
cljs_snake.core.turn = (function turn(state,direction){var current_direction = new cljs.core.Keyword(null,"direction","direction",4346280689).cljs$core$IFn$_invoke$arity$1(state);var direction__$1 = (function (){var or__7875__auto__ = cljs_snake.core.disambiguate_direction.call(null,current_direction,direction);if(cljs.core.truth_(or__7875__auto__))
{return or__7875__auto__;
} else
{return cljs_snake.core.dont_reverse.call(null,current_direction,direction);
}
})();return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"direction","direction",4346280689),direction__$1);
});
cljs_snake.core.handle_movement_key_event = (function handle_movement_key_event(e,keycode){e.preventDefault();
var direction = cljs_snake.core.keycodes__GT_direction.call(null,keycode);var c__10507__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10507__auto__,direction){
return (function (){var f__10508__auto__ = (function (){var switch__10492__auto__ = ((function (c__10507__auto__,direction){
return (function (state_16040){var state_val_16041 = (state_16040[1]);if((state_val_16041 === 2))
{var inst_16038 = (state_16040[2]);var state_16040__$1 = state_16040;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16040__$1,inst_16038);
} else
{if((state_val_16041 === 1))
{var state_16040__$1 = state_16040;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16040__$1,2,cljs_snake.core.input_chan,direction);
} else
{return null;
}
}
});})(c__10507__auto__,direction))
;return ((function (switch__10492__auto__,c__10507__auto__,direction){
return (function() {
var state_machine__10493__auto__ = null;
var state_machine__10493__auto____0 = (function (){var statearr_16045 = [null,null,null,null,null,null,null];(statearr_16045[0] = state_machine__10493__auto__);
(statearr_16045[1] = 1);
return statearr_16045;
});
var state_machine__10493__auto____1 = (function (state_16040){while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_16040);if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10495__auto__;
}
break;
}
}catch (e16046){if((e16046 instanceof Object))
{var ex__10496__auto__ = e16046;var statearr_16047_16049 = state_16040;(statearr_16047_16049[5] = ex__10496__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16040);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16046;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16050 = state_16040;
state_16040 = G__16050;
continue;
}
} else
{return ret_value__10494__auto__;
}
break;
}
});
state_machine__10493__auto__ = function(state_16040){
switch(arguments.length){
case 0:
return state_machine__10493__auto____0.call(this);
case 1:
return state_machine__10493__auto____1.call(this,state_16040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10493__auto____0;
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10493__auto____1;
return state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10507__auto__,direction))
})();var state__10509__auto__ = (function (){var statearr_16048 = f__10508__auto__.call(null);(statearr_16048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10507__auto__);
return statearr_16048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10509__auto__);
});})(c__10507__auto__,direction))
);
return c__10507__auto__;
});
cljs_snake.core.toggle_ai = (function toggle_ai(p__16051){var map__16053 = p__16051;var map__16053__$1 = ((cljs.core.seq_QMARK_.call(null,map__16053))?cljs.core.apply.call(null,cljs.core.hash_map,map__16053):map__16053);var state = map__16053__$1;var ai = cljs.core.get.call(null,map__16053__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ai","ai",1013907354),cljs.core.not.call(null,ai));
});
/**
* @param {...*} var_args
*/
cljs_snake.core.key_down_handler_BANG_ = (function() { 
var key_down_handler_BANG___delegate = function (e,args){var keycode = e.keyCode;if(cljs_snake.core.is_movement_key_QMARK_.call(null,keycode))
{return cljs_snake.core.handle_movement_key_event.call(null,e,keycode);
} else
{if(cljs.core._EQ_.call(null,cljs_snake.core.keycode_a,keycode))
{return cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs_snake.core.toggle_ai);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs_snake.core.reset_state);
} else
{return null;
}
}
}
};
var key_down_handler_BANG_ = function (e,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return key_down_handler_BANG___delegate.call(this,e,args);};
key_down_handler_BANG_.cljs$lang$maxFixedArity = 1;
key_down_handler_BANG_.cljs$lang$applyTo = (function (arglist__16054){
var e = cljs.core.first(arglist__16054);
var args = cljs.core.rest(arglist__16054);
return key_down_handler_BANG___delegate(e,args);
});
key_down_handler_BANG_.cljs$core$IFn$_invoke$arity$variadic = key_down_handler_BANG___delegate;
return key_down_handler_BANG_;
})()
;
if(cljs.core.truth_(cljs_snake.core.hasOwnProperty("key_listener")))
{} else
{cljs_snake.core.key_listener = document.addEventListener("keydown",cljs_snake.core.key_down_handler_BANG_);
}
cljs_snake.core.tick = (function tick(){cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs_snake.core.update_state);
return cljs_snake.drawing.immediate_mode_render_BANG_.call(null,cljs.core.deref.call(null,cljs_snake.core.state));
});
cljs_snake.core.ensure_running = (function ensure_running(p__16055){var map__16057 = p__16055;var map__16057__$1 = ((cljs.core.seq_QMARK_.call(null,map__16057))?cljs.core.apply.call(null,cljs.core.hash_map,map__16057):map__16057);var state = map__16057__$1;var running = cljs.core.get.call(null,map__16057__$1,new cljs.core.Keyword(null,"running","running",2564688177));if(cljs.core.not.call(null,running))
{return cljs_snake.core.reset_state.call(null,state);
} else
{return state;
}
});
cljs_snake.core.create_clock_BANG_ = (function create_clock_BANG_(){var c__10507__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10507__auto__){
return (function (){var f__10508__auto__ = (function (){var switch__10492__auto__ = ((function (c__10507__auto__){
return (function (state_16133){var state_val_16134 = (state_16133[1]);if((state_val_16134 === 7))
{var inst_16111 = (state_16133[2]);var inst_16113 = [cljs_snake.core.input_chan];var inst_16114 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16113,null));var state_16133__$1 = (function (){var statearr_16135 = state_16133;(statearr_16135[7] = inst_16111);
return statearr_16135;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16133__$1,8,inst_16114,new cljs.core.Keyword(null,"default","default",2558708147),null);
} else
{if((state_val_16134 === 1))
{var state_16133__$1 = state_16133;var statearr_16136_16155 = state_16133__$1;(statearr_16136_16155[2] = null);
(statearr_16136_16155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 4))
{var inst_16109 = cljs.core.async.timeout.call(null,cljs_snake.core.tick_speed);var state_16133__$1 = state_16133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16133__$1,7,inst_16109);
} else
{if((state_val_16134 === 6))
{var inst_16129 = (state_16133[2]);var state_16133__$1 = state_16133;var statearr_16137_16156 = state_16133__$1;(statearr_16137_16156[2] = inst_16129);
(statearr_16137_16156[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 3))
{var inst_16131 = (state_16133[2]);var state_16133__$1 = state_16133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16133__$1,inst_16131);
} else
{if((state_val_16134 === 2))
{var state_16133__$1 = state_16133;if(true)
{var statearr_16138_16157 = state_16133__$1;(statearr_16138_16157[1] = 4);
} else
{var statearr_16139_16158 = state_16133__$1;(statearr_16139_16158[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 11))
{var inst_16124 = (state_16133[2]);var inst_16125 = cljs_snake.core.tick.call(null);var state_16133__$1 = (function (){var statearr_16140 = state_16133;(statearr_16140[8] = inst_16125);
(statearr_16140[9] = inst_16124);
return statearr_16140;
})();var statearr_16141_16159 = state_16133__$1;(statearr_16141_16159[2] = null);
(statearr_16141_16159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 9))
{var inst_16117 = (state_16133[10]);var inst_16118 = (state_16133[11]);var inst_16116 = (state_16133[12]);var inst_16120 = (function (){var channel = inst_16118;var direction = inst_16117;var vec__16112 = inst_16116;return ((function (channel,direction,vec__16112,inst_16117,inst_16118,inst_16116,state_val_16134,c__10507__auto__){
return (function (p1__16058_SHARP_){return cljs_snake.core.turn.call(null,cljs_snake.core.disable_ai.call(null,cljs_snake.core.ensure_running.call(null,p1__16058_SHARP_)),direction);
});
;})(channel,direction,vec__16112,inst_16117,inst_16118,inst_16116,state_val_16134,c__10507__auto__))
})();var inst_16121 = cljs.core.swap_BANG_.call(null,cljs_snake.core.state,inst_16120);var state_16133__$1 = state_16133;var statearr_16142_16160 = state_16133__$1;(statearr_16142_16160[2] = inst_16121);
(statearr_16142_16160[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 5))
{var state_16133__$1 = state_16133;var statearr_16143_16161 = state_16133__$1;(statearr_16143_16161[2] = null);
(statearr_16143_16161[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 10))
{var state_16133__$1 = state_16133;var statearr_16144_16162 = state_16133__$1;(statearr_16144_16162[2] = null);
(statearr_16144_16162[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16134 === 8))
{var inst_16117 = (state_16133[10]);var inst_16116 = (state_16133[12]);var inst_16116__$1 = (state_16133[2]);var inst_16117__$1 = cljs.core.nth.call(null,inst_16116__$1,0,null);var inst_16118 = cljs.core.nth.call(null,inst_16116__$1,1,null);var state_16133__$1 = (function (){var statearr_16145 = state_16133;(statearr_16145[10] = inst_16117__$1);
(statearr_16145[11] = inst_16118);
(statearr_16145[12] = inst_16116__$1);
return statearr_16145;
})();if(cljs.core.truth_(inst_16117__$1))
{var statearr_16146_16163 = state_16133__$1;(statearr_16146_16163[1] = 9);
} else
{var statearr_16147_16164 = state_16133__$1;(statearr_16147_16164[1] = 10);
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
});})(c__10507__auto__))
;return ((function (switch__10492__auto__,c__10507__auto__){
return (function() {
var state_machine__10493__auto__ = null;
var state_machine__10493__auto____0 = (function (){var statearr_16151 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16151[0] = state_machine__10493__auto__);
(statearr_16151[1] = 1);
return statearr_16151;
});
var state_machine__10493__auto____1 = (function (state_16133){while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_16133);if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10495__auto__;
}
break;
}
}catch (e16152){if((e16152 instanceof Object))
{var ex__10496__auto__ = e16152;var statearr_16153_16165 = state_16133;(statearr_16153_16165[5] = ex__10496__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16133);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16152;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16166 = state_16133;
state_16133 = G__16166;
continue;
}
} else
{return ret_value__10494__auto__;
}
break;
}
});
state_machine__10493__auto__ = function(state_16133){
switch(arguments.length){
case 0:
return state_machine__10493__auto____0.call(this);
case 1:
return state_machine__10493__auto____1.call(this,state_16133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10493__auto____0;
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10493__auto____1;
return state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10507__auto__))
})();var state__10509__auto__ = (function (){var statearr_16154 = f__10508__auto__.call(null);(statearr_16154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10507__auto__);
return statearr_16154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10509__auto__);
});})(c__10507__auto__))
);
return c__10507__auto__;
});
if(cljs.core.truth_(cljs_snake.core.hasOwnProperty("clock")))
{} else
{cljs_snake.core.clock = cljs_snake.core.create_clock_BANG_.call(null);
}
cljs_snake.core.key_handler = (function key_handler(e){return console.log("key-handler");
});
cljs_snake.core.mouse_handler = (function mouse_handler(e){return console.log("mouse-handler");
});
cljs_snake.core.xy_to_column_row = (function xy_to_column_row(e){var clientX = e.clientX;var clientY = e.clientY;var target = e.target;var bounding_client_rect = target.getBoundingClientRect();var left = bounding_client_rect.left;var top = bounding_client_rect.top;var canvas_x = ((clientX - left) | 0);var canvas_y = ((clientY - top) | 0);var playfield_x = (canvas_x - cljs_snake.drawing.square_size);var playfield_y = (canvas_y - cljs_snake.drawing.square_size);var column = ((playfield_x / cljs_snake.drawing.square_size) | 0);var row = ((playfield_y / cljs_snake.drawing.square_size) | 0);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null);
});
cljs_snake.core.column_row_to_input_direction = (function column_row_to_input_direction(column,row){var state = cljs.core.deref.call(null,cljs_snake.core.state);var columns = new cljs.core.Keyword(null,"columns","columns",1963625295).cljs$core$IFn$_invoke$arity$1(state);var rows = new cljs.core.Keyword(null,"rows","rows",1017410891).cljs$core$IFn$_invoke$arity$1(state);var x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(state);var y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(state);var up = (row < y);var down = (y <= row);var left = (column < x);var right = (x <= column);if((up) && (left))
{return new cljs.core.Keyword(null,"upleft","upleft",4470267028);
} else
{if((up) && (right))
{return new cljs.core.Keyword(null,"upright","upright",792629203);
} else
{if((down) && (left))
{return new cljs.core.Keyword(null,"downleft","downleft",2441713435);
} else
{if((down) && (right))
{return new cljs.core.Keyword(null,"downright","downright",2331977260);
} else
{if(up)
{return new cljs.core.Keyword(null,"up","up",1013907981);
} else
{if(left)
{return new cljs.core.Keyword(null,"left","left",1017222009);
} else
{if(right)
{return new cljs.core.Keyword(null,"right","right",1122416014);
} else
{if(down)
{return new cljs.core.Keyword(null,"down","down",1016993812);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return null;
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
});
cljs_snake.core.debug_event = (function debug_event(e){var keys = cljs.core.js_keys.call(null,e);var values = cljs.core.map.call(null,((function (keys){
return (function (p1__16167_SHARP_){return (e[p1__16167_SHARP_]);
});})(keys))
,keys);var key_value = cljs.core.zipmap.call(null,keys,values);return cljs.core.swap_BANG_.call(null,cljs_snake.core.debug,((function (keys,values,key_value){
return (function (_){return key_value;
});})(keys,values,key_value))
);
});
cljs_snake.core.canvas_xy_handler = (function canvas_xy_handler(e){cljs_snake.core.disable_ai_BANG_.call(null);
var vec__16181 = cljs_snake.core.xy_to_column_row.call(null,e);var column = cljs.core.nth.call(null,vec__16181,0,null);var row = cljs.core.nth.call(null,vec__16181,1,null);var direction = cljs_snake.core.column_row_to_input_direction.call(null,column,row);if(cljs.core.truth_(direction))
{var c__10507__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10507__auto__,vec__16181,column,row,direction){
return (function (){var f__10508__auto__ = (function (){var switch__10492__auto__ = ((function (c__10507__auto__,vec__16181,column,row,direction){
return (function (state_16185){var state_val_16186 = (state_16185[1]);if((state_val_16186 === 2))
{var inst_16183 = (state_16185[2]);var state_16185__$1 = state_16185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16185__$1,inst_16183);
} else
{if((state_val_16186 === 1))
{var state_16185__$1 = state_16185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16185__$1,2,cljs_snake.core.input_chan,direction);
} else
{return null;
}
}
});})(c__10507__auto__,vec__16181,column,row,direction))
;return ((function (switch__10492__auto__,c__10507__auto__,vec__16181,column,row,direction){
return (function() {
var state_machine__10493__auto__ = null;
var state_machine__10493__auto____0 = (function (){var statearr_16190 = [null,null,null,null,null,null,null];(statearr_16190[0] = state_machine__10493__auto__);
(statearr_16190[1] = 1);
return statearr_16190;
});
var state_machine__10493__auto____1 = (function (state_16185){while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_16185);if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10495__auto__;
}
break;
}
}catch (e16191){if((e16191 instanceof Object))
{var ex__10496__auto__ = e16191;var statearr_16192_16194 = state_16185;(statearr_16192_16194[5] = ex__10496__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16185);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16195 = state_16185;
state_16185 = G__16195;
continue;
}
} else
{return ret_value__10494__auto__;
}
break;
}
});
state_machine__10493__auto__ = function(state_16185){
switch(arguments.length){
case 0:
return state_machine__10493__auto____0.call(this);
case 1:
return state_machine__10493__auto____1.call(this,state_16185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10493__auto____0;
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10493__auto____1;
return state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10507__auto__,vec__16181,column,row,direction))
})();var state__10509__auto__ = (function (){var statearr_16193 = f__10508__auto__.call(null);(statearr_16193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10507__auto__);
return statearr_16193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10509__auto__);
});})(c__10507__auto__,vec__16181,column,row,direction))
);
return c__10507__auto__;
} else
{return null;
}
});
cljs_snake.core.canvas_mouse_handler = (function canvas_mouse_handler(e){e.preventDefault();
return cljs_snake.core.canvas_xy_handler.call(null,e);
});
cljs_snake.core.canvas_touch_handler = (function canvas_touch_handler(e){e.preventDefault();
return cljs_snake.core.canvas_xy_handler.call(null,(e.touches[0]));
});
cljs_snake.core.main_template = (function main_template(p__16196){var map__16202 = p__16196;var map__16202__$1 = ((cljs.core.seq_QMARK_.call(null,map__16202))?cljs.core.apply.call(null,cljs.core.hash_map,map__16202):map__16202);var state = map__16202__$1;var rows = cljs.core.get.call(null,map__16202__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var columns = cljs.core.get.call(null,map__16202__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var running = cljs.core.get.call(null,map__16202__$1,new cljs.core.Keyword(null,"running","running",2564688177));var score = cljs.core.get.call(null,map__16202__$1,new cljs.core.Keyword(null,"score","score",1123168772));var vec__16203 = cljs_snake.drawing.canvas_size.call(null,columns,rows);var canvas_width = cljs.core.nth.call(null,vec__16203,0,null);var canvas_height = cljs.core.nth.call(null,vec__16203,1,null);return React.DOM.div({"className": "board", "onKeyDown": cljs_snake.core.key_handler},(function (){var attrs16204 = [cljs.core.str("Score: "),cljs.core.str(score)].join('');if(cljs.core.map_QMARK_.call(null,attrs16204))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs16204)),null);
} else
{return React.DOM.h3({"className": "score"},sablono.interpreter.interpret.call(null,attrs16204));
}
})(),React.DOM.canvas({"id": "snakeCanvas", "onMouseDown": cljs_snake.core.canvas_mouse_handler, "onTouchStart": cljs_snake.core.canvas_touch_handler, "height": canvas_height, "marginLeft": "200px auto"}),React.DOM.div(null,"Arrow keys to move. 'a' to enable AI."));
});
var node_16207 = document.getElementById("dynamic-area");cljs_snake.core.renderer = ((function (node_16207){
return (function renderer(state){return React.renderComponent(cljs_snake.core.main_template.call(null,state),node_16207);
});})(node_16207))
;
cljs.core.add_watch.call(null,cljs_snake.core.state,new cljs.core.Keyword(null,"renderer","renderer",519058485),(function (_,___$1,___$2,n){return cljs_snake.core.renderer.call(null,n);
}));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return null;
}));

//# sourceMappingURL=core.js.map