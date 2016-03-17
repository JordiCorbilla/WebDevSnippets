/*
// Copyright (c) 2016, Jordi Corbilla
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// - Redistributions of source code must retain the above copyright notice,
// this list of conditions and the following disclaimer.
// - Redistributions in binary form must reproduce the above copyright notice,
// this list of conditions and the following disclaimer in the documentation
// and/or other materials provided with the distribution.
// - Neither the name of this library nor the names of its contributors may be
// used to endorse or promote products derived from this software without
// specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
*/

var isDialogOpen = false,
    myLines = [],
    svg = null;

var count = 3;
    
var ico_people = 'https://raw.githubusercontent.com/JordiCorbilla/WebDevSnippets/master/src/DraggableLayout/img/people.png';

$(document).ready(function () {
  renderBoxes();
  initialize();
});

function setDragabble() {
    $("div .draggable").draggable({
        revert: false,
        snap: false
    });
}

function initialize() {  
    setDragabble();

    $("#AddUser").click(function () {
        Items.push({id:count, name:'UserX', email:'userx@email.com', style:'draggable'});
        renderBoxes();
        setDragabble();
        count = count + 1;
    });
}

function renderBoxes() {
  var htmlL = $("#boxTemplate").render(Items);
  $("#pnlMain").html(htmlL);
  
  $(".box img").each(function() { 
    $(this).attr("src", ico_people); });
}

var Items = [
  {id:1, name:'John', email:'john@email.com', style:'draggable'},
  {id:2, name:'Michael', email:'michael@email.com', style:'draggable'}
];