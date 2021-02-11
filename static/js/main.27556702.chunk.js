(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{29:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),a=n.n(i),o=n(19),s=n.n(o),l=n(5),u=n(2),c=(n(29),n(3)),h=n(4),d=n(6),v=n(15),f=n(7),b=n(8),g=function(){function e(t){Object(h.a)(this,e),this._cells=[],t&&(this._cells=t)}return Object(d.a)(e,[{key:"push",value:function(e){this._cells.push(e)}},{key:"values",get:function(){return this._cells.map((function(e){return e.value}))}},{key:"cells",get:function(){return this._cells}}]),e}(),j=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return n}(g),p=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return n}(g),m=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return n}(g),O=function(){function e(t,n,r,i,a,o,s){Object(h.a)(this,e),this._x=void 0,this._y=void 0,this._value=void 0,this._row=void 0,this._column=void 0,this._subgrid=void 0,this._isSolved=!1,this._isMutable=!0,this._showError=!1,r>0&&(this._isSolved=!0,this._isMutable=!1),this._x=t,this._y=n,this._value=r,this._row=new j(a.get(t)),this._column=new p(i.get(n)),this._subgrid=new m(o.get(s))}return Object(d.a)(e,[{key:"unSolve",value:function(){this._value=0,this._isSolved=!1}},{key:"setMutable",value:function(e){this._isMutable=e}},{key:"canSolve",value:function(e){return!new Set([].concat(Object(v.a)(this._row.values),Object(v.a)(this._column.values),Object(v.a)(this._subgrid.values))).has(e)}},{key:"solve",value:function(e){this._value=e,this._isSolved=!0}},{key:"showError",get:function(){return this._showError},set:function(e){this._showError=e}},{key:"isSolved",get:function(){return this._isSolved}},{key:"isMutable",get:function(){return this._isMutable}},{key:"row",get:function(){return this._row}},{key:"column",get:function(){return this._column}},{key:"subgrid",get:function(){return this._subgrid}},{key:"value",get:function(){return this._value},set:function(e){this._value=e}},{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}}]),e}(),_=n(23),x=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e,r){var i;return Object(h.a)(this,n),(i=t.call(this,e))._invalidCellCoordinates=void 0,i._invalidCellCoordinates=r,i}return Object(d.a)(n,[{key:"invalidCellCoordinates",get:function(){return this._invalidCellCoordinates}}]),n}(Object(_.a)(Error)),w=function(){function e(){return Object(h.a)(this,e),this._board=void 0,this._cells=[],this._maxRowSize=9,this._maxBoardSize=this._maxRowSize*this._maxRowSize,this}return Object(d.a)(e,[{key:"getCell",value:function(e,t){return this._board[e][t]}},{key:"isValid",value:function(){for(var e=[],t=!1,n=0;n<this._board.length;n+=1)for(var r=0;r<this._board[n].length;r+=1)for(var i=this._board[n][r],a=[i.row.cells,i.column.cells,i.subgrid.cells],o=0;o<a.length;o+=1)for(var s=a[o],l={},u=0;u<s.length;u+=1){var c=s[u],h=c.value;if(0===h||l[h]){if(0!==h){var d=l[h];e.push([d.x,d.y]),d.value=0,delete l[h],t=!0}}else l[h]=c}return!t||e}},{key:"print",value:function(){for(var e=0;e<this._board.length;e+=1){for(var t=[],n=0;n<this._board[e].length;n+=1)t.push(this.getCell(e,n).value);console.log(JSON.stringify(t))}}},{key:"convert",value:function(){var e=[];return this._board.forEach((function(t){var n=t.map((function(e){return e.value}));e.push(n)})),e}},{key:"setAllMutable",value:function(){this.cells.forEach((function(e){e.setMutable(!0)}))}},{key:"setAllImmutable",value:function(){this.cells.forEach((function(e){e.setMutable(!1)}))}},{key:"solve",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e,r=t;if(r===this._maxRowSize&&n===this._maxRowSize-1)return!0;r===this._maxRowSize&&(n+=1,r=0);var i=this.getCell(n,r);if(i.isSolved)return this.solve(n,r+1);for(var a=1;a<=9;a+=1){if(i.canSolve(a)&&(i.solve(a),this.solve(n,r+1)))return!0;i.unSolve()}return!1}},{key:"cells",get:function(){return this._cells}},{key:"board",get:function(){return this._board}}],[{key:"parse",value:function(t){var n,r,i=new e,a=[];i._board=a;for(var o=new Map,s=new Map,l=new Map,u=0;u<t.length;u+=1)o.set(u,[]),s.set(u,[]),l.set(u,[]);for(var c=null===(n=t[0])||void 0===n?void 0:n.length,h=0;h<t.length;h+=1){var d,v=null===(d=t[h])||void 0===d?void 0:d.length;if(!c||v!==c||v!==i._maxRowSize)throw new Error("All rows must be even and have a length of ".concat(i._maxRowSize,"."));c=v,a.push(o.get(h));for(var f=0;f<t[h].length;f+=1){var b=+t[h][f];if(b<0||b>9)throw new RangeError("Board must only contain numbers between 0 and 9.");var g=3*Math.floor(f/3)+Math.floor(h/3),j=new O(h,f,b,s,o,l,g);o.get(h).push(j),s.get(f).push(j),l.get(g).push(j),i._cells.push(j)}}var p=t.length*(null===(r=t[0])||void 0===r?void 0:r.length);if(p!==i._maxBoardSize)throw new RangeError("This application only supports 3x3 Sudoku boards with \n        ".concat(i._maxBoardSize," cells. Your board has ").concat(p||0," cells."));var m=i.isValid();if(!0!==m&&"object"===typeof m)throw new x("Board is invalid.",m);return i}}]),e}(),y=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],S=function(e){var t=e.className,n=e.children,i=e.handleClick;return Object(r.jsx)("button",{className:t,type:"button",onClick:function(e){return i(e)},children:n})};S.defaultProps={children:"",className:""};var k=S;function z(){var e=Object(u.a)(["\n  background: #a911ff;\n"]);return z=function(){return e},e}function C(){var e=Object(u.a)(["\n  color: white;\n  background: #683aea;\n  margin-left: auto;\n  transition: all 0.3s ease;\n  border: 1px solid transparent;\n\n  @media screen and (min-width: 500px) {\n    font-size: 1.25rem;\n  }\n\n  &:hover {\n    opacity: .8;\n  }\n"]);return C=function(){return e},e}var M=Object(c.a)(k)(C()),E={Button:M,ResetButton:Object(c.a)(M)(z())};function R(){var e=Object(u.a)(["\n  padding: .5em 1em;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n"]);return R=function(){return e},e}var B=Object(c.a)(k)(R()),N=function(e){var t=e.className,n=e.solvePuzzle,i=e.errorMessage,a=e.isSolved,o=e.resetPuzzle;return Object(r.jsxs)("div",{className:t,children:[Object(r.jsx)(L,{children:i}),a?Object(r.jsx)(E.ResetButton,{as:B,handleClick:o,children:"Reset"}):Object(r.jsx)(E.Button,{as:B,handleClick:n,children:"Solve"})]})};N.defaultProps={className:"",errorMessage:""};var P=N;function I(){var e=Object(u.a)(["\n  color: red;\n  font-size: 1.5rem;\n"]);return I=function(){return e},e}function A(){var e=Object(u.a)(["\n  max-width: 70vw;\n  max-height: 70vw;\n  width: 300px;\n  margin: 1em 0 1em 0;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: 500px) {\n    width: 600px;\n  }\n"]);return A=function(){return e},e}var J=Object(c.a)(P)(A()),L=c.a.p(I()),T=function(e){return e.map((function(e){return e.slice()}))},V=function(e){var t=e.className,n=e.cell,a=e.setPuzzle,o=e.isSolved,s=e.setIsSolved,u=Object(i.useState)(n.value),c=Object(l.a)(u,2),h=c[0],d=c[1],v=Object(i.useState)({}),f=Object(l.a)(v,2),b=f[0],g=f[1],j=function(e){var t=e.target;t.scrollLeft=t.scrollWidth,t.setSelectionRange(t.value.length,t.value.length)};return Object(i.useEffect)((function(){var e={borderTop:[3,6].includes(n.x)?"1px solid #000":"",borderRight:[2,5].includes(n.y)?"1px solid #000":"",borderBottom:[2,5].includes(n.x)?"1px solid #000":"",borderLeft:[3,6].includes(n.y)?"1px solid #000":"",background:n.showError?"red":"",color:n.showError?"white":""};g(e),d(n.value)}),[n,n.showError]),Object(r.jsx)("div",{className:t,children:n.isMutable?Object(r.jsx)(D.MutableCell,{type:"text",value:h>0?h:"",style:b,onChange:function(e){var t=+e.target.value[e.target.value.length-1];(t>=0&&t<=9||!t)&&(d((function(){return t||0})),a((function(e){var r=T(e);return r[n.x][n.y]=t||0,r})),o&&s(!1))},onClick:j,onFocus:j}):Object(r.jsx)(D.ImmutableCell,{style:b,children:h>0&&h})})};function F(){var e=Object(u.a)(["\n  ","\n  text-align: center;\n"]);return F=function(){return e},e}function W(){var e=Object(u.a)(["\n  ","\n  background: #683aea;\n  color: white;\n"]);return W=function(){return e},e}function Y(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n  box-sizing: content-box;\n"]);return Y=function(){return e},e}var q="\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 1.5rem;\n  border: 0;\n",D={Cell:Object(c.a)(V)(Y()),ImmutableCell:c.a.p(W(),q),MutableCell:c.a.input(F(),q)},G=function(e){var t=e.className,n=e.board,i=e.setPuzzle,a=e.setIsSolved,o=e.isSolved;return Object(r.jsx)("div",{className:t,children:n&&n.cells.map((function(e){return Object(r.jsx)(D.Cell,{cell:e,setPuzzle:i,isSolved:o,setIsSolved:a},"".concat(e.x,",").concat(e.y))}))})};G.defaultProps={board:null};var H=G;function K(){var e=Object(u.a)(["\n  max-width: 70vw;\n  max-height: 70vw;\n  width: 300px;\n  height: 300px;\n  background: white;\n  display: grid;\n  grid-template-columns: repeat(9, minmax(0, 1fr));\n  grid-template-rows: repeat(9, minmax(0, 1fr));\n  align-items: center;\n  justify-content: center;\n  grid-gap: 1px;\n\n  @media screen and (min-width: 500px) {\n    width: 600px;\n    height: 600px;\n  }\n"]);return K=function(){return e},e}var Q=Object(c.a)(H)(K());function U(){var e=Object(u.a)(["\n  color: #683aea;\n  font-size: 2rem;\n  text-align: center;\n  display: block;\n  margin-bottom: .5em;\n  margin-top: 1em;\n\n  @media screen and (min-width: 500px) {\n    font-size: 3rem;\n  }\n"]);return U=function(){return e},e}var X=c.a.h1(U()),Z=function(){var e=Object(i.useState)(y),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)(null),s=Object(l.a)(o,2),u=s[0],c=s[1],h=Object(i.useState)(!1),d=Object(l.a)(h,2),v=d[0],f=d[1],b=Object(i.useState)(""),g=Object(l.a)(b,2),j=g[0],p=g[1];return Object(i.useEffect)((function(){if(!u){var e=w.parse(n);c(e)}}),[u,n]),Object(r.jsxs)("div",{id:"app",children:[Object(r.jsx)(X,{children:"Sudoku Solver"}),Object(r.jsx)(Q,{board:u,setPuzzle:a,isSolved:v,setIsSolved:f}),Object(r.jsx)(J,{solvePuzzle:function(){try{var e=w.parse(n);e.solve(),c(e),a(e.convert()),e.cells.find((function(e){return 0===e.value}))?(p("Impossible board."),e.setAllMutable()):(p(""),f(!0))}catch(i){p(i.message);var t=T(n);i.invalidCellCoordinates.forEach((function(e){var n=Object(l.a)(e,2),r=n[0],i=n[1];t[r][i]=0})),a(t);var r=w.parse(t);r.setAllMutable(),i.invalidCellCoordinates.forEach((function(e){var t=Object(l.a)(e,2),n=t[0],i=t[1];r.getCell(n,i).showError=!0})),c(r)}},errorMessage:j,resetPuzzle:function(){c(w.parse(y)),a(y),f(!1)},isSolved:v})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Z,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.27556702.chunk.js.map