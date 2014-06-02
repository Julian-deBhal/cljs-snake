// Compiled by ClojureScript 0.0-2202
goog.provide('snake_game.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('sablono.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
snake_game.core.canvas = document.getElementById("canvas");
snake_game.core.background_color_string = "#ffffdd";
snake_game.core.border_color_string = "#000000";
snake_game.core.snake_color_string = "#00dd00";
snake_game.core.food_color_string = "#ff0000";
snake_game.core.columns = 18;
snake_game.core.rows = 14;
snake_game.core.square_size = 17;
snake_game.core.canvas_width = ((2 + snake_game.core.columns) * snake_game.core.square_size);
snake_game.core.canvas_height = ((2 + snake_game.core.rows) * snake_game.core.square_size);
snake_game.core.starting_snake_length = 3;
snake_game.core.tick_speed = 150;
snake_game.core.keycode_a = 65;
snake_game.core.input_chan = cljs.core.async.chan.call(null);
snake_game.core.reset_state = (function() {
var reset_state = null;
var reset_state__0 = (function (){return reset_state.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ai","ai",1013907354),true], null));
});
var reset_state__1 = (function (state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running","running",2564688177),true,new cljs.core.Keyword(null,"x","x",1013904362),(0 | 0),new cljs.core.Keyword(null,"y","y",1013904363),(0 | 0),new cljs.core.Keyword(null,"score","score",1123168772),0,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),null,new cljs.core.Keyword(null,"direction","direction",4346280689),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),cljs.core.PersistentQueue.EMPTY);
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
if(cljs.core.truth_(snake_game.core.hasOwnProperty("state")))
{} else
{snake_game.core.state = cljs.core.atom.call(null,snake_game.core.reset_state.call(null));
}
snake_game.core.all_positions = (function (){var iter__8595__auto__ = (function iter__27824(s__27825){return (new cljs.core.LazySeq(null,(function (){var s__27825__$1 = s__27825;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27825__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first.call(null,xs__4624__auto__);var iterys__8591__auto__ = ((function (s__27825__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__27826(s__27827){return (new cljs.core.LazySeq(null,((function (s__27825__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__27827__$1 = s__27827;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27827__$1);if(temp__4126__auto____$1)
{var s__27827__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27827__$2))
{var c__8593__auto__ = cljs.core.chunk_first.call(null,s__27827__$2);var size__8594__auto__ = cljs.core.count.call(null,c__8593__auto__);var b__27829 = cljs.core.chunk_buffer.call(null,size__8594__auto__);if((function (){var i__27828 = 0;while(true){
if((i__27828 < size__8594__auto__))
{var y = cljs.core._nth.call(null,c__8593__auto__,i__27828);cljs.core.chunk_append.call(null,b__27829,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__27830 = (i__27828 + 1);
i__27828 = G__27830;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27829),iter__27826.call(null,cljs.core.chunk_rest.call(null,s__27827__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27829),null);
}
} else
{var y = cljs.core.first.call(null,s__27827__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__27826.call(null,cljs.core.rest.call(null,s__27827__$2)));
}
} else
{return null;
}
break;
}
});})(s__27825__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__27825__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__8592__auto__ = cljs.core.seq.call(null,iterys__8591__auto__.call(null,cljs.core.range.call(null,snake_game.core.rows)));if(fs__8592__auto__)
{return cljs.core.concat.call(null,fs__8592__auto__,iter__27824.call(null,cljs.core.rest.call(null,s__27825__$1)));
} else
{{
var G__27831 = cljs.core.rest.call(null,s__27825__$1);
s__27825__$1 = G__27831;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8595__auto__.call(null,cljs.core.range.call(null,snake_game.core.columns));
})();
cljs.core.println.call(null,snake_game.core.all_positions);
snake_game.core.get_context = (function get_context(name){return document.getElementById(name).getContext("2d");
});
snake_game.core.draw_coords_BANG_ = (function() {
var draw_coords_BANG_ = null;
var draw_coords_BANG___2 = (function (ctx,p__27832){var vec__27836 = p__27832;var x = cljs.core.nth.call(null,vec__27836,0,null);var y = cljs.core.nth.call(null,vec__27836,1,null);return ctx.fillRect((x * snake_game.core.square_size),(y * snake_game.core.square_size),snake_game.core.square_size,snake_game.core.square_size);
});
var draw_coords_BANG___3 = (function (ctx,p__27833,color_string){var vec__27837 = p__27833;var x = cljs.core.nth.call(null,vec__27837,0,null);var y = cljs.core.nth.call(null,vec__27837,1,null);ctx.fillStyle = color_string;
return draw_coords_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
draw_coords_BANG_ = function(ctx,p__27833,color_string){
switch(arguments.length){
case 2:
return draw_coords_BANG___2.call(this,ctx,p__27833);
case 3:
return draw_coords_BANG___3.call(this,ctx,p__27833,color_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_coords_BANG_.cljs$core$IFn$_invoke$arity$2 = draw_coords_BANG___2;
draw_coords_BANG_.cljs$core$IFn$_invoke$arity$3 = draw_coords_BANG___3;
return draw_coords_BANG_;
})()
;
snake_game.core.draw_snake_head_BANG_ = (function draw_snake_head_BANG_(p__27838){var map__27840 = p__27838;var map__27840__$1 = ((cljs.core.seq_QMARK_.call(null,map__27840))?cljs.core.apply.call(null,cljs.core.hash_map,map__27840):map__27840);var state = map__27840__$1;var ctx = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var y = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"x","x",1013904362));return snake_game.core.draw_coords_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),snake_game.core.snake_color_string);
});
snake_game.core.draw_snake_tail_BANG_ = (function draw_snake_tail_BANG_(p__27841){var map__27843 = p__27841;var map__27843__$1 = ((cljs.core.seq_QMARK_.call(null,map__27843))?cljs.core.apply.call(null,cljs.core.hash_map,map__27843):map__27843);var state = map__27843__$1;var ctx = cljs.core.get.call(null,map__27843__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var snake_tail = cljs.core.get.call(null,map__27843__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));ctx.fillStyle = snake_game.core.snake_color_string;
cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,snake_game.core.draw_coords_BANG_,ctx),snake_tail));
return state;
});
snake_game.core.draw_food_BANG_ = (function draw_food_BANG_(p__27844){var map__27846 = p__27844;var map__27846__$1 = ((cljs.core.seq_QMARK_.call(null,map__27846))?cljs.core.apply.call(null,cljs.core.hash_map,map__27846):map__27846);var state = map__27846__$1;var food_pos = cljs.core.get.call(null,map__27846__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var ctx = cljs.core.get.call(null,map__27846__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));if(cljs.core.truth_(food_pos))
{snake_game.core.draw_coords_BANG_.call(null,ctx,food_pos,snake_game.core.food_color_string);
} else
{}
return state;
});
snake_game.core.draw_background_BANG_ = (function draw_background_BANG_(p__27847){var map__27849 = p__27847;var map__27849__$1 = ((cljs.core.seq_QMARK_.call(null,map__27849))?cljs.core.apply.call(null,cljs.core.hash_map,map__27849):map__27849);var state = map__27849__$1;var ctx = cljs.core.get.call(null,map__27849__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));ctx.fillStyle = snake_game.core.background_color_string;
ctx.fillRect(0,0,snake_game.core.canvas_width,snake_game.core.canvas_height);
return state;
});
snake_game.core.draw_border_BANG_ = (function draw_border_BANG_(p__27850){var map__27852 = p__27850;var map__27852__$1 = ((cljs.core.seq_QMARK_.call(null,map__27852))?cljs.core.apply.call(null,cljs.core.hash_map,map__27852):map__27852);var state = map__27852__$1;var ctx = cljs.core.get.call(null,map__27852__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));ctx.fillStyle = snake_game.core.border_color_string;
var bottom_row_pos_27853 = (snake_game.core.square_size * (snake_game.core.rows + 1));var right_edge_pos_27854 = (snake_game.core.square_size * (snake_game.core.columns + 1));ctx.fillRect(0,0,snake_game.core.canvas_width,snake_game.core.square_size);
ctx.fillRect(0,0,snake_game.core.square_size,snake_game.core.canvas_height);
ctx.fillRect(right_edge_pos_27854,0,snake_game.core.square_size,snake_game.core.canvas_height);
ctx.fillRect(0,bottom_row_pos_27853,snake_game.core.canvas_width,snake_game.core.square_size);
return state;
});
snake_game.core.truncate_snake_tail = (function truncate_snake_tail(p__27855){while(true){
var map__27857 = p__27855;var map__27857__$1 = ((cljs.core.seq_QMARK_.call(null,map__27857))?cljs.core.apply.call(null,cljs.core.hash_map,map__27857):map__27857);var state = map__27857__$1;var snake_tail = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var score = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"score","score",1123168772));var current_snake_length = (cljs.core.count.call(null,snake_tail) + 1);var max_length = (score + snake_game.core.starting_snake_length);if((max_length < current_snake_length))
{{
var G__27858 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),cljs.core.pop.call(null,snake_tail));
p__27855 = G__27858;
continue;
}
} else
{return state;
}
break;
}
});
snake_game.core.update_x = (function update_x(x,direction){var G__27860 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__27860))
{return (x + 1);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__27860))
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
snake_game.core.update_y = (function update_y(y,direction){var G__27862 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__27862))
{return (y + 1);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__27862))
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
snake_game.core.update_position = (function update_position(p__27863){var map__27865 = p__27863;var map__27865__$1 = ((cljs.core.seq_QMARK_.call(null,map__27865))?cljs.core.apply.call(null,cljs.core.hash_map,map__27865):map__27865);var state = map__27865__$1;var running = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword(null,"running","running",2564688177));var score = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword(null,"score","score",1123168772));var snake_tail = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var y = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword(null,"x","x",1013904362));var direction = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword(null,"direction","direction",4346280689));if(cljs.core.truth_(running))
{var old_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);var x__$1 = snake_game.core.update_x.call(null,x,direction);var y__$1 = snake_game.core.update_y.call(null,y,direction);var snake_tail__$1 = cljs.core.conj.call(null,snake_tail,old_position);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",1013904362),x__$1,new cljs.core.Keyword(null,"y","y",1013904363),y__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),snake_tail__$1);
} else
{return state;
}
});
snake_game.core.empty_positions = (function empty_positions(p__27866){var map__27868 = p__27866;var map__27868__$1 = ((cljs.core.seq_QMARK_.call(null,map__27868))?cljs.core.apply.call(null,cljs.core.hash_map,map__27868):map__27868);var state = map__27868__$1;var tail = cljs.core.get.call(null,map__27868__$1,new cljs.core.Keyword(null,"tail","tail",1017456578));var y = cljs.core.get.call(null,map__27868__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__27868__$1,new cljs.core.Keyword(null,"x","x",1013904362));return snake_game.core.all_positions;
});
snake_game.core.create_food = (function create_food(p__27869){var map__27871 = p__27869;var map__27871__$1 = ((cljs.core.seq_QMARK_.call(null,map__27871))?cljs.core.apply.call(null,cljs.core.hash_map,map__27871):map__27871);var state = map__27871__$1;var tail = cljs.core.get.call(null,map__27871__$1,new cljs.core.Keyword(null,"tail","tail",1017456578));var y = cljs.core.get.call(null,map__27871__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__27871__$1,new cljs.core.Keyword(null,"x","x",1013904362));var food_pos = cljs.core.get.call(null,map__27871__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));if(cljs.core.not.call(null,food_pos))
{var empty_positions = snake_game.core.empty_positions.call(null,state);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,snake_game.core.columns),cljs.core.rand_int.call(null,snake_game.core.rows)], null));
} else
{return state;
}
});
snake_game.core.eat_food = (function eat_food(p__27872){var map__27874 = p__27872;var map__27874__$1 = ((cljs.core.seq_QMARK_.call(null,map__27874))?cljs.core.apply.call(null,cljs.core.hash_map,map__27874):map__27874);var state = map__27874__$1;var score = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"score","score",1123168772));var food_pos = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var y = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"x","x",1013904362));var snake_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);if(cljs.core._EQ_.call(null,snake_pos,food_pos))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),null,new cljs.core.Keyword(null,"score","score",1123168772),(score + 1));
} else
{return state;
}
});
snake_game.core.update_food = (function update_food(state){return snake_game.core.create_food.call(null,snake_game.core.eat_food.call(null,state));
});
snake_game.core.head_for_food = (function head_for_food(p__27875){var map__27878 = p__27875;var map__27878__$1 = ((cljs.core.seq_QMARK_.call(null,map__27878))?cljs.core.apply.call(null,cljs.core.hash_map,map__27878):map__27878);var state = map__27878__$1;var food_pos = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var y = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"x","x",1013904362));var temp__4124__auto__ = food_pos;if(cljs.core.truth_(temp__4124__auto__))
{var vec__27879 = temp__4124__auto__;var food_x = cljs.core.nth.call(null,vec__27879,0,null);var food_y = cljs.core.nth.call(null,vec__27879,1,null);var new_direction = (((x < food_x))?new cljs.core.Keyword(null,"right","right",1122416014):(((food_x < x))?new cljs.core.Keyword(null,"left","left",1017222009):(((food_y < y))?new cljs.core.Keyword(null,"up","up",1013907981):(((y < food_y))?new cljs.core.Keyword(null,"down","down",1016993812):((new cljs.core.Keyword(null,"default","default",2558708147))?new cljs.core.Keyword(null,"direction","direction",4346280689).cljs$core$IFn$_invoke$arity$1(state):null)))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"direction","direction",4346280689),new_direction);
} else
{return state;
}
});
snake_game.core.ai_auto_restart = (function ai_auto_restart(p__27880){var map__27882 = p__27880;var map__27882__$1 = ((cljs.core.seq_QMARK_.call(null,map__27882))?cljs.core.apply.call(null,cljs.core.hash_map,map__27882):map__27882);var state = map__27882__$1;var running = cljs.core.get.call(null,map__27882__$1,new cljs.core.Keyword(null,"running","running",2564688177));if(cljs.core.truth_(running))
{return state;
} else
{return snake_game.core.reset_state.call(null,state);
}
});
snake_game.core.ai = (function ai(p__27883){var map__27885 = p__27883;var map__27885__$1 = ((cljs.core.seq_QMARK_.call(null,map__27885))?cljs.core.apply.call(null,cljs.core.hash_map,map__27885):map__27885);var state = map__27885__$1;var ai__$1 = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));if(cljs.core.truth_(ai__$1))
{return snake_game.core.head_for_food.call(null,snake_game.core.ai_auto_restart.call(null,state));
} else
{return state;
}
});
/**
* true if seq contains elm
*/
snake_game.core.in_QMARK_ = (function in_QMARK_(seq,elm){return cljs.core.some.call(null,(function (p1__27886_SHARP_){return cljs.core._EQ_.call(null,elm,p1__27886_SHARP_);
}),seq);
});
snake_game.core.out_of_bounds_QMARK_ = (function out_of_bounds_QMARK_(x,y){return !((((-1 < x)) && ((x < snake_game.core.columns))) && (((-1 < y)) && ((y < snake_game.core.rows))));
});
snake_game.core.check_game_over = (function check_game_over(p__27887){var map__27889 = p__27887;var map__27889__$1 = ((cljs.core.seq_QMARK_.call(null,map__27889))?cljs.core.apply.call(null,cljs.core.hash_map,map__27889):map__27889);var state = map__27889__$1;var snake_tail = cljs.core.get.call(null,map__27889__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var y = cljs.core.get.call(null,map__27889__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__27889__$1,new cljs.core.Keyword(null,"x","x",1013904362));if(cljs.core.truth_((function (){var or__7878__auto__ = snake_game.core.in_QMARK_.call(null,snake_tail,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));if(cljs.core.truth_(or__7878__auto__))
{return or__7878__auto__;
} else
{return snake_game.core.out_of_bounds_QMARK_.call(null,x,y);
}
})()))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running","running",2564688177),false);
} else
{return state;
}
});
snake_game.core.update_state = (function update_state(state){return snake_game.core.check_game_over.call(null,snake_game.core.truncate_snake_tail.call(null,snake_game.core.update_food.call(null,snake_game.core.update_position.call(null,snake_game.core.ai.call(null,state)))));
});
snake_game.core.keycodes__GT_direction = new cljs.core.PersistentArrayMap(null, 8, [37,new cljs.core.Keyword(null,"left","left",1017222009),38,new cljs.core.Keyword(null,"up","up",1013907981),39,new cljs.core.Keyword(null,"right","right",1122416014),40,new cljs.core.Keyword(null,"down","down",1016993812),74,new cljs.core.Keyword(null,"left","left",1017222009),76,new cljs.core.Keyword(null,"right","right",1122416014),75,new cljs.core.Keyword(null,"down","down",1016993812),73,new cljs.core.Keyword(null,"up","up",1013907981)], null);
snake_game.core.is_movement_key_QMARK_ = (function is_movement_key_QMARK_(n){return cljs.core.contains_QMARK_.call(null,snake_game.core.keycodes__GT_direction,n);
});
snake_game.core.opposite_direction = (function opposite_direction(direction){var G__27891 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__27891))
{return new cljs.core.Keyword(null,"up","up",1013907981);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__27891))
{return new cljs.core.Keyword(null,"down","down",1016993812);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__27891))
{return new cljs.core.Keyword(null,"left","left",1017222009);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__27891))
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
/**
* Change to given direction, provided that's not backwards
*/
snake_game.core.turn = (function turn(state,direction){if(cljs.core._EQ_.call(null,direction,snake_game.core.opposite_direction.call(null,new cljs.core.Keyword(null,"direction","direction",4346280689).cljs$core$IFn$_invoke$arity$1(state))))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"direction","direction",4346280689),direction);
}
});
snake_game.core.handle_movement_key_event = (function handle_movement_key_event(e,keycode){e.preventDefault();
var direction = snake_game.core.keycodes__GT_direction.call(null,keycode);var c__10510__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10510__auto__,direction){
return (function (){var f__10511__auto__ = (function (){var switch__10495__auto__ = ((function (c__10510__auto__,direction){
return (function (state_27907){var state_val_27908 = (state_27907[1]);if((state_val_27908 === 2))
{var inst_27905 = (state_27907[2]);var state_27907__$1 = state_27907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27907__$1,inst_27905);
} else
{if((state_val_27908 === 1))
{var state_27907__$1 = state_27907;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27907__$1,2,snake_game.core.input_chan,direction);
} else
{return null;
}
}
});})(c__10510__auto__,direction))
;return ((function (switch__10495__auto__,c__10510__auto__,direction){
return (function() {
var state_machine__10496__auto__ = null;
var state_machine__10496__auto____0 = (function (){var statearr_27912 = [null,null,null,null,null,null,null];(statearr_27912[0] = state_machine__10496__auto__);
(statearr_27912[1] = 1);
return statearr_27912;
});
var state_machine__10496__auto____1 = (function (state_27907){while(true){
var ret_value__10497__auto__ = (function (){try{while(true){
var result__10498__auto__ = switch__10495__auto__.call(null,state_27907);if(cljs.core.keyword_identical_QMARK_.call(null,result__10498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10498__auto__;
}
break;
}
}catch (e27913){if((e27913 instanceof Object))
{var ex__10499__auto__ = e27913;var statearr_27914_27916 = state_27907;(statearr_27914_27916[5] = ex__10499__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10497__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27917 = state_27907;
state_27907 = G__27917;
continue;
}
} else
{return ret_value__10497__auto__;
}
break;
}
});
state_machine__10496__auto__ = function(state_27907){
switch(arguments.length){
case 0:
return state_machine__10496__auto____0.call(this);
case 1:
return state_machine__10496__auto____1.call(this,state_27907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10496__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10496__auto____0;
state_machine__10496__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10496__auto____1;
return state_machine__10496__auto__;
})()
;})(switch__10495__auto__,c__10510__auto__,direction))
})();var state__10512__auto__ = (function (){var statearr_27915 = f__10511__auto__.call(null);(statearr_27915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10510__auto__);
return statearr_27915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10512__auto__);
});})(c__10510__auto__,direction))
);
return c__10510__auto__;
});
snake_game.core.toggle_ai = (function toggle_ai(p__27918){var map__27920 = p__27918;var map__27920__$1 = ((cljs.core.seq_QMARK_.call(null,map__27920))?cljs.core.apply.call(null,cljs.core.hash_map,map__27920):map__27920);var state = map__27920__$1;var ai = cljs.core.get.call(null,map__27920__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ai","ai",1013907354),cljs.core.not.call(null,ai));
});
/**
* @param {...*} var_args
*/
snake_game.core.key_down_handler_BANG_ = (function() { 
var key_down_handler_BANG___delegate = function (e,args){var keycode = e.keyCode;if(snake_game.core.is_movement_key_QMARK_.call(null,keycode))
{return snake_game.core.handle_movement_key_event.call(null,e,keycode);
} else
{if(cljs.core._EQ_.call(null,snake_game.core.keycode_a,keycode))
{return cljs.core.swap_BANG_.call(null,snake_game.core.state,snake_game.core.toggle_ai);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.swap_BANG_.call(null,snake_game.core.state,snake_game.core.reset_state);
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
key_down_handler_BANG_.cljs$lang$applyTo = (function (arglist__27921){
var e = cljs.core.first(arglist__27921);
var args = cljs.core.rest(arglist__27921);
return key_down_handler_BANG___delegate(e,args);
});
key_down_handler_BANG_.cljs$core$IFn$_invoke$arity$variadic = key_down_handler_BANG___delegate;
return key_down_handler_BANG_;
})()
;
if(cljs.core.truth_(snake_game.core.hasOwnProperty("key_listener")))
{} else
{snake_game.core.key_listener = document.addEventListener("keydown",snake_game.core.key_down_handler_BANG_);
}
snake_game.core.immediate_mode_render_BANG_ = (function immediate_mode_render_BANG_(state){var ctx = snake_game.core.get_context.call(null,"canvas");var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ctx","ctx",1014003097),ctx);ctx.setTransform(1,0,0,1,0,0);
snake_game.core.draw_background_BANG_.call(null,state__$1);
snake_game.core.draw_border_BANG_.call(null,state__$1);
ctx.setTransform(1,0,0,1,snake_game.core.square_size,snake_game.core.square_size);
snake_game.core.draw_snake_tail_BANG_.call(null,state__$1);
snake_game.core.draw_snake_head_BANG_.call(null,state__$1);
return snake_game.core.draw_food_BANG_.call(null,state__$1);
});
snake_game.core.tick = (function tick(){cljs.core.swap_BANG_.call(null,snake_game.core.state,snake_game.core.update_state);
return snake_game.core.immediate_mode_render_BANG_.call(null,cljs.core.deref.call(null,snake_game.core.state));
});
snake_game.core.create_clock_BANG_ = (function create_clock_BANG_(){var c__10510__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10510__auto__){
return (function (){var f__10511__auto__ = (function (){var switch__10495__auto__ = ((function (c__10510__auto__){
return (function (state_27984){var state_val_27985 = (state_27984[1]);if((state_val_27985 === 7))
{var inst_27969 = (state_27984[7]);var inst_27968 = (state_27984[2]);var inst_27969__$1 = snake_game.core.alt_BANG_.call(null,snake_game.core.input_chan,new cljs.core.Keyword(null,"default","default",2558708147),null);var state_27984__$1 = (function (){var statearr_27986 = state_27984;(statearr_27986[7] = inst_27969__$1);
(statearr_27986[8] = inst_27968);
return statearr_27986;
})();if(cljs.core.truth_(inst_27969__$1))
{var statearr_27987_28005 = state_27984__$1;(statearr_27987_28005[1] = 8);
} else
{var statearr_27988_28006 = state_27984__$1;(statearr_27988_28006[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27985 === 1))
{var state_27984__$1 = state_27984;var statearr_27989_28007 = state_27984__$1;(statearr_27989_28007[2] = null);
(statearr_27989_28007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27985 === 4))
{var inst_27966 = cljs.core.async.timeout.call(null,snake_game.core.tick_speed);var state_27984__$1 = state_27984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27984__$1,7,inst_27966);
} else
{if((state_val_27985 === 6))
{var inst_27980 = (state_27984[2]);var state_27984__$1 = state_27984;var statearr_27990_28008 = state_27984__$1;(statearr_27990_28008[2] = inst_27980);
(statearr_27990_28008[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27985 === 3))
{var inst_27982 = (state_27984[2]);var state_27984__$1 = state_27984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27984__$1,inst_27982);
} else
{if((state_val_27985 === 2))
{var state_27984__$1 = state_27984;if(true)
{var statearr_27991_28009 = state_27984__$1;(statearr_27991_28009[1] = 4);
} else
{var statearr_27992_28010 = state_27984__$1;(statearr_27992_28010[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27985 === 9))
{var state_27984__$1 = state_27984;var statearr_27993_28011 = state_27984__$1;(statearr_27993_28011[2] = null);
(statearr_27993_28011[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27985 === 5))
{var state_27984__$1 = state_27984;var statearr_27994_28012 = state_27984__$1;(statearr_27994_28012[2] = null);
(statearr_27994_28012[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27985 === 10))
{var inst_27975 = (state_27984[2]);var inst_27976 = snake_game.core.tick.call(null);var state_27984__$1 = (function (){var statearr_27995 = state_27984;(statearr_27995[9] = inst_27976);
(statearr_27995[10] = inst_27975);
return statearr_27995;
})();var statearr_27996_28013 = state_27984__$1;(statearr_27996_28013[2] = null);
(statearr_27996_28013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27985 === 8))
{var inst_27969 = (state_27984[7]);var inst_27971 = (function (){var direction = inst_27969;return ((function (direction,inst_27969,state_val_27985,c__10510__auto__){
return (function (p1__27922_SHARP_){return cljs.core.assoc.call(null,snake_game.core.turn.call(null,p1__27922_SHARP_,direction),new cljs.core.Keyword(null,"ai","ai",1013907354),false);
});
;})(direction,inst_27969,state_val_27985,c__10510__auto__))
})();var inst_27972 = cljs.core.swap_BANG_.call(null,snake_game.core.state,inst_27971);var state_27984__$1 = state_27984;var statearr_27997_28014 = state_27984__$1;(statearr_27997_28014[2] = inst_27972);
(statearr_27997_28014[1] = 10);
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
});})(c__10510__auto__))
;return ((function (switch__10495__auto__,c__10510__auto__){
return (function() {
var state_machine__10496__auto__ = null;
var state_machine__10496__auto____0 = (function (){var statearr_28001 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28001[0] = state_machine__10496__auto__);
(statearr_28001[1] = 1);
return statearr_28001;
});
var state_machine__10496__auto____1 = (function (state_27984){while(true){
var ret_value__10497__auto__ = (function (){try{while(true){
var result__10498__auto__ = switch__10495__auto__.call(null,state_27984);if(cljs.core.keyword_identical_QMARK_.call(null,result__10498__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10498__auto__;
}
break;
}
}catch (e28002){if((e28002 instanceof Object))
{var ex__10499__auto__ = e28002;var statearr_28003_28015 = state_27984;(statearr_28003_28015[5] = ex__10499__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10497__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28016 = state_27984;
state_27984 = G__28016;
continue;
}
} else
{return ret_value__10497__auto__;
}
break;
}
});
state_machine__10496__auto__ = function(state_27984){
switch(arguments.length){
case 0:
return state_machine__10496__auto____0.call(this);
case 1:
return state_machine__10496__auto____1.call(this,state_27984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10496__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10496__auto____0;
state_machine__10496__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10496__auto____1;
return state_machine__10496__auto__;
})()
;})(switch__10495__auto__,c__10510__auto__))
})();var state__10512__auto__ = (function (){var statearr_28004 = f__10511__auto__.call(null);(statearr_28004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10510__auto__);
return statearr_28004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10512__auto__);
});})(c__10510__auto__))
);
return c__10510__auto__;
});
if(cljs.core.truth_(snake_game.core.hasOwnProperty("clock")))
{} else
{snake_game.core.clock = snake_game.core.create_clock_BANG_.call(null);
}
snake_game.core.key_handler = (function key_handler(e){return console.log("key-handler");
});
snake_game.core.mouse_handler = (function mouse_handler(e){console.log("mouse-handler");
return e.preventDefault();
});
snake_game.core.main_template = (function main_template(p__28017){var map__28024 = p__28017;var map__28024__$1 = ((cljs.core.seq_QMARK_.call(null,map__28024))?cljs.core.apply.call(null,cljs.core.hash_map,map__28024):map__28024);var running = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"running","running",2564688177));var score = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"score","score",1123168772));return React.DOM.div({"className": "board", "onMouseDown": snake_game.core.mouse_handler, "onKeyDown": snake_game.core.key_handler},(function (){var attrs28025 = [cljs.core.str("Score: "),cljs.core.str(score)].join('');if(cljs.core.map_QMARK_.call(null,attrs28025))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs28025)),null);
} else
{return React.DOM.h3({"className": "score"},sablono.interpreter.interpret.call(null,attrs28025));
}
})(),React.DOM.div(null,"Arrow keys to move. 'a' to enable AI."),React.DOM.p(null));
});
var node_28030 = document.getElementById("dynamic-area");snake_game.core.renderer = ((function (node_28030){
return (function renderer(state){return React.renderComponent(snake_game.core.main_template.call(null,state),node_28030);
});})(node_28030))
;
cljs.core.add_watch.call(null,snake_game.core.state,new cljs.core.Keyword(null,"renderer","renderer",519058485),(function (_,___$1,___$2,n){return snake_game.core.renderer.call(null,n);
}));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return null;
}));

//# sourceMappingURL=core.js.map