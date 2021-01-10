import Vue from "vue";
import highlightjs from 'highlight.js'
import 'highlight.js/styles/obsidian.css';

Vue.use(highlightjs);


export default function(context) {
    const { app } = context
    app.highlightjs = highlightjs
}
  