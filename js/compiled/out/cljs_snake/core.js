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
if(cljs.core.truth_(cljs_snake.core.hasOwnProperty("state")))
{} else
{cljs_snake.core.state = cljs.core.atom.call(null,cljs_snake.core.reset_state.call(null));
}
cljs_snake.core.disable_ai = (function disable_ai(p__9720){var map__9722 = p__9720;var map__9722__$1 = ((cljs.core.seq_QMARK_.call(null,map__9722))?cljs.core.apply.call(null,cljs.core.hash_map,map__9722):map__9722);var state = map__9722__$1;var ai = cljs.core.get.call(null,map__9722__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ai","ai",1013907354),false);
});
cljs_snake.core.disable_ai_BANG_ = (function disable_ai_BANG_(){return cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs_snake.core.disable_ai);
});
cljs.core.memoize.call(null,cljs_snake.core.all_positions = (function all_positions(columns,rows){var iter__4198__auto__ = (function iter__9729(s__9730){return (new cljs.core.LazySeq(null,(function (){var s__9730__$1 = s__9730;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9730__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first.call(null,xs__4624__auto__);var iterys__4194__auto__ = ((function (s__9730__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__9731(s__9732){return (new cljs.core.LazySeq(null,((function (s__9730__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__9732__$1 = s__9732;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9732__$1);if(temp__4126__auto____$1)
{var s__9732__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9732__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__9732__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__9734 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__9733 = 0;while(true){
if((i__9733 < size__4197__auto__))
{var y = cljs.core._nth.call(null,c__4196__auto__,i__9733);cljs.core.chunk_append.call(null,b__9734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__9735 = (i__9733 + 1);
i__9733 = G__9735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9734),iter__9731.call(null,cljs.core.chunk_rest.call(null,s__9732__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9734),null);
}
} else
{var y = cljs.core.first.call(null,s__9732__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__9731.call(null,cljs.core.rest.call(null,s__9732__$2)));
}
} else
{return null;
}
break;
}
});})(s__9730__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__9730__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,cljs.core.range.call(null,rows)));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__9729.call(null,cljs.core.rest.call(null,s__9730__$1)));
} else
{{
var G__9736 = cljs.core.rest.call(null,s__9730__$1);
s__9730__$1 = G__9736;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__.call(null,cljs.core.range.call(null,columns));
}));
cljs_snake.core.update_x = (function update_x(x,direction){var G__9738 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__9738))
{return (x + 1);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__9738))
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
cljs_snake.core.update_y = (function update_y(y,direction){var G__9740 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__9740))
{return (y + 1);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__9740))
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
cljs_snake.core.update_position = (function update_position(p__9741){var map__9743 = p__9741;var map__9743__$1 = ((cljs.core.seq_QMARK_.call(null,map__9743))?cljs.core.apply.call(null,cljs.core.hash_map,map__9743):map__9743);var state = map__9743__$1;var running = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"running","running",2564688177));var score = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"score","score",1123168772));var snake_tail = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var y = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"x","x",1013904362));var direction = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"direction","direction",4346280689));if(cljs.core.truth_(running))
{var old_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);var x__$1 = cljs_snake.core.update_x.call(null,x,direction);var y__$1 = cljs_snake.core.update_y.call(null,y,direction);var snake_tail__$1 = cljs.core.conj.call(null,snake_tail,old_position);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",1013904362),x__$1,new cljs.core.Keyword(null,"y","y",1013904363),y__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),snake_tail__$1);
} else
{return state;
}
});
cljs_snake.core.empty_positions = (function empty_positions(p__9744){var map__9746 = p__9744;var map__9746__$1 = ((cljs.core.seq_QMARK_.call(null,map__9746))?cljs.core.apply.call(null,cljs.core.hash_map,map__9746):map__9746);var state = map__9746__$1;var rows = cljs.core.get.call(null,map__9746__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var columns = cljs.core.get.call(null,map__9746__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var tail = cljs.core.get.call(null,map__9746__$1,new cljs.core.Keyword(null,"tail","tail",1017456578));var y = cljs.core.get.call(null,map__9746__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9746__$1,new cljs.core.Keyword(null,"x","x",1013904362));return rows;
});
cljs_snake.core.create_food = (function create_food(p__9747){var map__9749 = p__9747;var map__9749__$1 = ((cljs.core.seq_QMARK_.call(null,map__9749))?cljs.core.apply.call(null,cljs.core.hash_map,map__9749):map__9749);var state = map__9749__$1;var rows = cljs.core.get.call(null,map__9749__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var columns = cljs.core.get.call(null,map__9749__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var tail = cljs.core.get.call(null,map__9749__$1,new cljs.core.Keyword(null,"tail","tail",1017456578));var y = cljs.core.get.call(null,map__9749__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9749__$1,new cljs.core.Keyword(null,"x","x",1013904362));var food_pos = cljs.core.get.call(null,map__9749__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));if(cljs.core.not.call(null,food_pos))
{var empty_positions = cljs_snake.core.empty_positions.call(null,state);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,columns),cljs.core.rand_int.call(null,rows)], null));
} else
{return state;
}
});
cljs_snake.core.eat_food = (function eat_food(p__9750){var map__9752 = p__9750;var map__9752__$1 = ((cljs.core.seq_QMARK_.call(null,map__9752))?cljs.core.apply.call(null,cljs.core.hash_map,map__9752):map__9752);var state = map__9752__$1;var score = cljs.core.get.call(null,map__9752__$1,new cljs.core.Keyword(null,"score","score",1123168772));var food_pos = cljs.core.get.call(null,map__9752__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var y = cljs.core.get.call(null,map__9752__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9752__$1,new cljs.core.Keyword(null,"x","x",1013904362));var snake_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);if(cljs.core._EQ_.call(null,snake_pos,food_pos))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),null,new cljs.core.Keyword(null,"score","score",1123168772),(score + 1));
} else
{return state;
}
});
cljs_snake.core.update_food = (function update_food(state){return cljs_snake.core.create_food.call(null,cljs_snake.core.eat_food.call(null,state));
});
cljs_snake.core.head_for_food = (function head_for_food(p__9753){var map__9756 = p__9753;var map__9756__$1 = ((cljs.core.seq_QMARK_.call(null,map__9756))?cljs.core.apply.call(null,cljs.core.hash_map,map__9756):map__9756);var state = map__9756__$1;var food_pos = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var y = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"x","x",1013904362));var temp__4124__auto__ = food_pos;if(cljs.core.truth_(temp__4124__auto__))
{var vec__9757 = temp__4124__auto__;var food_x = cljs.core.nth.call(null,vec__9757,0,null);var food_y = cljs.core.nth.call(null,vec__9757,1,null);var new_direction = (((x < food_x))?new cljs.core.Keyword(null,"right","right",1122416014):(((food_x < x))?new cljs.core.Keyword(null,"left","left",1017222009):(((food_y < y))?new cljs.core.Keyword(null,"up","up",1013907981):(((y < food_y))?new cljs.core.Keyword(null,"down","down",1016993812):((new cljs.core.Keyword(null,"default","default",2558708147))?new cljs.core.Keyword(null,"direction","direction",4346280689).cljs$core$IFn$_invoke$arity$1(state):null)))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"direction","direction",4346280689),new_direction);
} else
{return state;
}
});
cljs_snake.core.ai_auto_restart = (function ai_auto_restart(p__9758){var map__9760 = p__9758;var map__9760__$1 = ((cljs.core.seq_QMARK_.call(null,map__9760))?cljs.core.apply.call(null,cljs.core.hash_map,map__9760):map__9760);var state = map__9760__$1;var running = cljs.core.get.call(null,map__9760__$1,new cljs.core.Keyword(null,"running","running",2564688177));if(cljs.core.truth_(running))
{return state;
} else
{return cljs_snake.core.reset_state.call(null,state);
}
});
cljs_snake.core.ai = (function ai(p__9761){var map__9763 = p__9761;var map__9763__$1 = ((cljs.core.seq_QMARK_.call(null,map__9763))?cljs.core.apply.call(null,cljs.core.hash_map,map__9763):map__9763);var state = map__9763__$1;var ai__$1 = cljs.core.get.call(null,map__9763__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));if(cljs.core.truth_(ai__$1))
{return cljs_snake.core.head_for_food.call(null,cljs_snake.core.ai_auto_restart.call(null,state));
} else
{return state;
}
});
/**
* true if seq contains elm
*/
cljs_snake.core.in_QMARK_ = (function in_QMARK_(seq,elm){return cljs.core.some.call(null,(function (p1__9764_SHARP_){return cljs.core._EQ_.call(null,elm,p1__9764_SHARP_);
}),seq);
});
cljs_snake.core.out_of_bounds_QMARK_ = (function out_of_bounds_QMARK_(x,y,columns,rows){return !((((-1 < x)) && ((x < columns))) && (((-1 < y)) && ((y < rows))));
});
cljs_snake.core.check_game_over = (function check_game_over(p__9765){var map__9767 = p__9765;var map__9767__$1 = ((cljs.core.seq_QMARK_.call(null,map__9767))?cljs.core.apply.call(null,cljs.core.hash_map,map__9767):map__9767);var state = map__9767__$1;var rows = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var columns = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var snake_tail = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var y = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"x","x",1013904362));if(cljs.core.truth_((function (){var or__3481__auto__ = cljs_snake.core.in_QMARK_.call(null,snake_tail,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs_snake.core.out_of_bounds_QMARK_.call(null,x,y,columns,rows);
}
})()))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running","running",2564688177),false);
} else
{return state;
}
});
cljs_snake.core.truncate_snake_tail = (function truncate_snake_tail(p__9768){while(true){
var map__9770 = p__9768;var map__9770__$1 = ((cljs.core.seq_QMARK_.call(null,map__9770))?cljs.core.apply.call(null,cljs.core.hash_map,map__9770):map__9770);var state = map__9770__$1;var snake_tail = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var score = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"score","score",1123168772));var current_snake_length = (cljs.core.count.call(null,snake_tail) + 1);var max_length = (score + cljs_snake.core.starting_snake_length);if((max_length < current_snake_length))
{{
var G__9771 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),cljs.core.pop.call(null,snake_tail));
p__9768 = G__9771;
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
cljs_snake.core.opposite_direction = (function opposite_direction(direction){var G__9773 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__9773))
{return new cljs.core.Keyword(null,"up","up",1013907981);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__9773))
{return new cljs.core.Keyword(null,"down","down",1016993812);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__9773))
{return new cljs.core.Keyword(null,"left","left",1017222009);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__9773))
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
cljs_snake.core.split_dual_direction = (function split_dual_direction(dual_direction){var G__9775 = dual_direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"downright","downright",2331977260),G__9775))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"right","right",1122416014)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"downleft","downleft",2441713435),G__9775))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"left","left",1017222009)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upright","upright",792629203),G__9775))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"right","right",1122416014)], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upleft","upleft",4470267028),G__9775))
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
cljs_snake.core.turn = (function turn(state,direction){var current_direction = new cljs.core.Keyword(null,"direction","direction",4346280689).cljs$core$IFn$_invoke$arity$1(state);var direction__$1 = (function (){var or__3481__auto__ = cljs_snake.core.disambiguate_direction.call(null,current_direction,direction);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs_snake.core.dont_reverse.call(null,current_direction,direction);
}
})();return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"direction","direction",4346280689),direction__$1);
});
cljs_snake.core.handle_movement_key_event = (function handle_movement_key_event(e,keycode){e.preventDefault();
var direction = cljs_snake.core.keycodes__GT_direction.call(null,keycode);var c__6419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto__,direction){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto__,direction){
return (function (state_9791){var state_val_9792 = (state_9791[1]);if((state_val_9792 === 2))
{var inst_9789 = (state_9791[2]);var state_9791__$1 = state_9791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9791__$1,inst_9789);
} else
{if((state_val_9792 === 1))
{var state_9791__$1 = state_9791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9791__$1,2,cljs_snake.core.input_chan,direction);
} else
{return null;
}
}
});})(c__6419__auto__,direction))
;return ((function (switch__6404__auto__,c__6419__auto__,direction){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_9796 = [null,null,null,null,null,null,null];(statearr_9796[0] = state_machine__6405__auto__);
(statearr_9796[1] = 1);
return statearr_9796;
});
var state_machine__6405__auto____1 = (function (state_9791){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_9791);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e9797){if((e9797 instanceof Object))
{var ex__6408__auto__ = e9797;var statearr_9798_9800 = state_9791;(statearr_9798_9800[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9791);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9801 = state_9791;
state_9791 = G__9801;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_9791){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_9791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__,direction))
})();var state__6421__auto__ = (function (){var statearr_9799 = f__6420__auto__.call(null);(statearr_9799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_9799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto__,direction))
);
return c__6419__auto__;
});
cljs_snake.core.toggle_ai = (function toggle_ai(p__9802){var map__9804 = p__9802;var map__9804__$1 = ((cljs.core.seq_QMARK_.call(null,map__9804))?cljs.core.apply.call(null,cljs.core.hash_map,map__9804):map__9804);var state = map__9804__$1;var ai = cljs.core.get.call(null,map__9804__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ai","ai",1013907354),cljs.core.not.call(null,ai));
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
key_down_handler_BANG_.cljs$lang$applyTo = (function (arglist__9805){
var e = cljs.core.first(arglist__9805);
var args = cljs.core.rest(arglist__9805);
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
cljs_snake.core.ensure_running = (function ensure_running(p__9806){var map__9808 = p__9806;var map__9808__$1 = ((cljs.core.seq_QMARK_.call(null,map__9808))?cljs.core.apply.call(null,cljs.core.hash_map,map__9808):map__9808);var state = map__9808__$1;var running = cljs.core.get.call(null,map__9808__$1,new cljs.core.Keyword(null,"running","running",2564688177));cljs.core.println.call(null,"ensure-running (",running,")");
if(cljs.core.not.call(null,running))
{return cljs_snake.core.reset_state.call(null,state);
} else
{return state;
}
});
cljs_snake.core.create_clock_BANG_ = (function create_clock_BANG_(){var c__6419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto__){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto__){
return (function (state_9884){var state_val_9885 = (state_9884[1]);if((state_val_9885 === 7))
{var inst_9862 = (state_9884[2]);var inst_9864 = [cljs_snake.core.input_chan];var inst_9865 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9864,null));var state_9884__$1 = (function (){var statearr_9886 = state_9884;(statearr_9886[7] = inst_9862);
return statearr_9886;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9884__$1,8,inst_9865,new cljs.core.Keyword(null,"default","default",2558708147),null);
} else
{if((state_val_9885 === 1))
{var state_9884__$1 = state_9884;var statearr_9887_9906 = state_9884__$1;(statearr_9887_9906[2] = null);
(statearr_9887_9906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9885 === 4))
{var inst_9860 = cljs.core.async.timeout.call(null,cljs_snake.core.tick_speed);var state_9884__$1 = state_9884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9884__$1,7,inst_9860);
} else
{if((state_val_9885 === 6))
{var inst_9880 = (state_9884[2]);var state_9884__$1 = state_9884;var statearr_9888_9907 = state_9884__$1;(statearr_9888_9907[2] = inst_9880);
(statearr_9888_9907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9885 === 3))
{var inst_9882 = (state_9884[2]);var state_9884__$1 = state_9884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9884__$1,inst_9882);
} else
{if((state_val_9885 === 2))
{var state_9884__$1 = state_9884;if(true)
{var statearr_9889_9908 = state_9884__$1;(statearr_9889_9908[1] = 4);
} else
{var statearr_9890_9909 = state_9884__$1;(statearr_9890_9909[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9885 === 11))
{var inst_9875 = (state_9884[2]);var inst_9876 = cljs_snake.core.tick.call(null);var state_9884__$1 = (function (){var statearr_9891 = state_9884;(statearr_9891[8] = inst_9876);
(statearr_9891[9] = inst_9875);
return statearr_9891;
})();var statearr_9892_9910 = state_9884__$1;(statearr_9892_9910[2] = null);
(statearr_9892_9910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9885 === 9))
{var inst_9869 = (state_9884[10]);var inst_9868 = (state_9884[11]);var inst_9867 = (state_9884[12]);var inst_9871 = (function (){var channel = inst_9869;var direction = inst_9868;var vec__9863 = inst_9867;return ((function (channel,direction,vec__9863,inst_9869,inst_9868,inst_9867,state_val_9885,c__6419__auto__){
return (function (p1__9809_SHARP_){return cljs_snake.core.turn.call(null,cljs_snake.core.disable_ai.call(null,cljs_snake.core.ensure_running.call(null,p1__9809_SHARP_)),direction);
});
;})(channel,direction,vec__9863,inst_9869,inst_9868,inst_9867,state_val_9885,c__6419__auto__))
})();var inst_9872 = cljs.core.swap_BANG_.call(null,cljs_snake.core.state,inst_9871);var state_9884__$1 = state_9884;var statearr_9893_9911 = state_9884__$1;(statearr_9893_9911[2] = inst_9872);
(statearr_9893_9911[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9885 === 5))
{var state_9884__$1 = state_9884;var statearr_9894_9912 = state_9884__$1;(statearr_9894_9912[2] = null);
(statearr_9894_9912[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9885 === 10))
{var state_9884__$1 = state_9884;var statearr_9895_9913 = state_9884__$1;(statearr_9895_9913[2] = null);
(statearr_9895_9913[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9885 === 8))
{var inst_9868 = (state_9884[11]);var inst_9867 = (state_9884[12]);var inst_9867__$1 = (state_9884[2]);var inst_9868__$1 = cljs.core.nth.call(null,inst_9867__$1,0,null);var inst_9869 = cljs.core.nth.call(null,inst_9867__$1,1,null);var state_9884__$1 = (function (){var statearr_9896 = state_9884;(statearr_9896[10] = inst_9869);
(statearr_9896[11] = inst_9868__$1);
(statearr_9896[12] = inst_9867__$1);
return statearr_9896;
})();if(cljs.core.truth_(inst_9868__$1))
{var statearr_9897_9914 = state_9884__$1;(statearr_9897_9914[1] = 9);
} else
{var statearr_9898_9915 = state_9884__$1;(statearr_9898_9915[1] = 10);
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
});})(c__6419__auto__))
;return ((function (switch__6404__auto__,c__6419__auto__){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_9902 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9902[0] = state_machine__6405__auto__);
(statearr_9902[1] = 1);
return statearr_9902;
});
var state_machine__6405__auto____1 = (function (state_9884){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_9884);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e9903){if((e9903 instanceof Object))
{var ex__6408__auto__ = e9903;var statearr_9904_9916 = state_9884;(statearr_9904_9916[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9884);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9917 = state_9884;
state_9884 = G__9917;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_9884){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_9884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__))
})();var state__6421__auto__ = (function (){var statearr_9905 = f__6420__auto__.call(null);(statearr_9905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_9905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto__))
);
return c__6419__auto__;
});
if(cljs.core.truth_(cljs_snake.core.hasOwnProperty("clock")))
{} else
{cljs_snake.core.clock = cljs_snake.core.create_clock_BANG_.call(null);
}
cljs_snake.core.key_handler = (function key_handler(e){return console.log("key-handler");
});
cljs_snake.core.mouse_handler = (function mouse_handler(e){return console.log("mouse-handler");
});
cljs_snake.core.mouse_event_to_column_row = (function mouse_event_to_column_row(e){var clientX = e.clientX;var clientY = e.clientY;var target = e.target;var bounding_client_rect = target.getBoundingClientRect();var left = bounding_client_rect.left;var top = bounding_client_rect.top;var canvas_x = ((clientX - left) | 0);var canvas_y = ((clientY - top) | 0);var playfield_x = (canvas_x - cljs_snake.drawing.square_size);var playfield_y = (canvas_y - cljs_snake.drawing.square_size);var column = ((playfield_x / cljs_snake.drawing.square_size) | 0);var row = ((playfield_y / cljs_snake.drawing.square_size) | 0);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null);
});
cljs_snake.core.column_row_to_input_direction = (function column_row_to_input_direction(column,row){var state = cljs.core.deref.call(null,cljs_snake.core.state);var columns = new cljs.core.Keyword(null,"columns","columns",1963625295).cljs$core$IFn$_invoke$arity$1(state);var rows = new cljs.core.Keyword(null,"rows","rows",1017410891).cljs$core$IFn$_invoke$arity$1(state);var up = (row <= (rows / 2));var down = !(up);var left = (column <= (columns / 2));var right = !(left);if((up) && (left))
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
{return null;
}
}
}
}
});
cljs_snake.core.canvas_mouse_handler = (function canvas_mouse_handler(e){e.preventDefault();
cljs_snake.core.disable_ai_BANG_.call(null);
var vec__9932 = cljs_snake.core.mouse_event_to_column_row.call(null,e);var column = cljs.core.nth.call(null,vec__9932,0,null);var row = cljs.core.nth.call(null,vec__9932,1,null);var c__6419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6419__auto__,vec__9932,column,row){
return (function (){var f__6420__auto__ = (function (){var switch__6404__auto__ = ((function (c__6419__auto__,vec__9932,column,row){
return (function (state_9937){var state_val_9938 = (state_9937[1]);if((state_val_9938 === 2))
{var inst_9935 = (state_9937[2]);var state_9937__$1 = state_9937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9937__$1,inst_9935);
} else
{if((state_val_9938 === 1))
{var inst_9933 = cljs_snake.core.column_row_to_input_direction.call(null,column,row);var state_9937__$1 = state_9937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9937__$1,2,cljs_snake.core.input_chan,inst_9933);
} else
{return null;
}
}
});})(c__6419__auto__,vec__9932,column,row))
;return ((function (switch__6404__auto__,c__6419__auto__,vec__9932,column,row){
return (function() {
var state_machine__6405__auto__ = null;
var state_machine__6405__auto____0 = (function (){var statearr_9942 = [null,null,null,null,null,null,null];(statearr_9942[0] = state_machine__6405__auto__);
(statearr_9942[1] = 1);
return statearr_9942;
});
var state_machine__6405__auto____1 = (function (state_9937){while(true){
var ret_value__6406__auto__ = (function (){try{while(true){
var result__6407__auto__ = switch__6404__auto__.call(null,state_9937);if(cljs.core.keyword_identical_QMARK_.call(null,result__6407__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6407__auto__;
}
break;
}
}catch (e9943){if((e9943 instanceof Object))
{var ex__6408__auto__ = e9943;var statearr_9944_9946 = state_9937;(statearr_9944_9946[5] = ex__6408__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6406__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9947 = state_9937;
state_9937 = G__9947;
continue;
}
} else
{return ret_value__6406__auto__;
}
break;
}
});
state_machine__6405__auto__ = function(state_9937){
switch(arguments.length){
case 0:
return state_machine__6405__auto____0.call(this);
case 1:
return state_machine__6405__auto____1.call(this,state_9937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6405__auto____0;
state_machine__6405__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6405__auto____1;
return state_machine__6405__auto__;
})()
;})(switch__6404__auto__,c__6419__auto__,vec__9932,column,row))
})();var state__6421__auto__ = (function (){var statearr_9945 = f__6420__auto__.call(null);(statearr_9945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6419__auto__);
return statearr_9945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6421__auto__);
});})(c__6419__auto__,vec__9932,column,row))
);
return c__6419__auto__;
});
cljs_snake.core.main_template = (function main_template(p__9948){var map__9954 = p__9948;var map__9954__$1 = ((cljs.core.seq_QMARK_.call(null,map__9954))?cljs.core.apply.call(null,cljs.core.hash_map,map__9954):map__9954);var state = map__9954__$1;var rows = cljs.core.get.call(null,map__9954__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var columns = cljs.core.get.call(null,map__9954__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var running = cljs.core.get.call(null,map__9954__$1,new cljs.core.Keyword(null,"running","running",2564688177));var score = cljs.core.get.call(null,map__9954__$1,new cljs.core.Keyword(null,"score","score",1123168772));var vec__9955 = cljs_snake.drawing.canvas_size.call(null,columns,rows);var canvas_width = cljs.core.nth.call(null,vec__9955,0,null);var canvas_height = cljs.core.nth.call(null,vec__9955,1,null);return React.DOM.div({"className": "board", "onKeyDown": cljs_snake.core.key_handler},(function (){var attrs9956 = [cljs.core.str("Score: "),cljs.core.str(score)].join('');if(cljs.core.map_QMARK_.call(null,attrs9956))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs9956)),null);
} else
{return React.DOM.h3({"className": "score"},sablono.interpreter.interpret.call(null,attrs9956));
}
})(),React.DOM.canvas({"id": "snakeCanvas", "onMouseDown": cljs_snake.core.canvas_mouse_handler, "height": canvas_height, "marginLeft": "200px auto"}),React.DOM.div(null,"Arrow keys to move. 'a' to enable AI."));
});
var node_9959 = document.getElementById("dynamic-area");cljs_snake.core.renderer = ((function (node_9959){
return (function renderer(state){return React.renderComponent(cljs_snake.core.main_template.call(null,state),node_9959);
});})(node_9959))
;
cljs.core.add_watch.call(null,cljs_snake.core.state,new cljs.core.Keyword(null,"renderer","renderer",519058485),(function (_,___$1,___$2,n){return cljs_snake.core.renderer.call(null,n);
}));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return null;
}));

//# sourceMappingURL=core.js.map