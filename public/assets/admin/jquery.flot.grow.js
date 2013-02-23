/*
 * The MIT License

Copyright (c) 2010 by Juergen Marsch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(a){function c(a){function h(a,c,d){f=a.getOptions(),g=f.series.grow.valueIndex;if(f.series.grow.active==1&&b==0){e=a.getData(),e.actualStep=0;for(var h=0;h<e.length;h++){e[h].dataOrg=k(e[h].data);for(var i=0;i<e[h].data.length;i++)e[h].data[i][g]=0}a.setData(e),b=!0}}function i(a,b){f=a.getOptions();if(f.series.grow.active==1){var d=a.getData();for(var g=0;g<e.length;g++)f.series.grow.steps=Math.max(f.series.grow.steps,d[g].grow.steps);f.series.grow.stepDelay==0&&f.series.grow.stepDelay++,c=window.setInterval(j,f.series.grow.stepDelay)}}function j(){function b(){if(e.actualStep==1)for(var b=0;b<e[a].data.length;b++)e[a].data[b][g]=e[a].dataOrg[b][g]}function h(){if(e.actualStep<=e[a].grow.steps)for(var b=0;b<e[a].data.length;b++)e[a].grow.stepDirection=="up"?e[a].data[b][g]=e[a].dataOrg[b][g]/e[a].grow.steps*e.actualStep:e[a].grow.stepDirection=="down"&&(e[a].data[b][g]=e[a].dataOrg[b][g]+(e[a].yaxis.max-e[a].dataOrg[b][g])/e[a].grow.steps*(e[a].grow.steps-e.actualStep))}function i(){if(e.actualStep<=e[a].grow.steps)for(var b=0;b<e[a].data.length;b++)e[a].grow.stepDirection=="up"?e[a].data[b][g]=Math.min(e[a].dataOrg[b][g],e[a].yaxis.max/e[a].grow.steps*e.actualStep):e[a].grow.stepDirection=="down"&&(e[a].data[b][g]=Math.max(e[a].dataOrg[b][g],e[a].yaxis.max/e[a].grow.steps*(e[a].grow.steps-e.actualStep)))}function j(){if(e.actualStep==e[a].grow.steps)for(var b=0;b<e[a].data.length;b++)e[a].data[b][g]=e[a].dataOrg[b][g]}if(e.actualStep<f.series.grow.steps){e.actualStep++;for(var a=0;a<e.length;a++)typeof e[a].grow.stepMode=="function"?e[a].grow.stepMode(e[a],e.actualStep,g):e[a].grow.stepMode=="linear"?h():e[a].grow.stepMode=="maximum"?i():e[a].grow.stepMode=="delay"?j():b();d.setData(e),d.draw()}else window.clearInterval(c)}function k(a){if(a==null||typeof a!="object")return a;var b=new a.constructor;for(var c in a)b[c]=k(a[c]);return b}var b=!1,c,d=a,e=null,f=null,g;a.hooks.bindEvents.push(i),a.hooks.drawSeries.push(h)}var b={series:{grow:{active:!0,valueIndex:1,stepDelay:20,steps:100,stepMode:"linear",stepDirection:"up"}}};a.plot.plugins.push({init:c,options:b,name:"grow",version:"0.2"})})(jQuery);