/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//var lat;
//var lon;
//document.addEventListener('deviceready', onDeviceReady);
//
// function onDeviceReady() {
//       receivedEvent('deviceready');
//       //
//       prepareBtn();
//       
//        
//};
//    
//function  receivedEvent (id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//
//        console.log('Received Event: ' + id);
//    };
//
//function prepareBtn (){
//    var btn=document.querySelector(".where");
//        btn.addEventListener("click", showgelocation);
//    };
//    
//
//function  showgelocation(){
//    navigator.geolocation.getCurrentPosition( onSuccess, onError);
// };
//      
//function onSuccess (position){
//            console.log("lat: "+position.coords.latitude);
//            console.log("lon: "+position.coords.longitude);
//            lat=position.coords.latitude;
//            lon=position.coords.longitude;
//            loadPags();
//    };
//function onError(){
//            console.log('code: '    + error.code    + '\n' +
//                  'message: ' + error.message + '\n');
//    };
//   
//
//     
//function loadPags(){
//        var request = new XMLHttpRequest();
//        request.open('GET', 'http://open.mapquestapi.com/geocoding/v1/reverse?' + 
//'key=Fmjtd|luur2hurn0%2Cbg%3Do5-9wasly&location=' +
//lat + ',' + lon, true);
//        request.onreadystatechange = function(){
//             if (request.readyState ===4){
//                 if(request.status===200||request.status===0){
//                     //console.log(request.responseText);
////                     var books= JSON.parse(request.responseText);
////                     for(var i=0; i<books.length;i++ ){
////                         
////                         document.querySelector('.received').innerHTML=books[i].Title;
////                         
////                     }
//                     var city =request.responseText
//                     console.log(city/*.results[0].locations[0].adminArea5*/);
//                 }
//             }
//        };
//        request.send();
//      }
//     



var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
      //app.loadPags();
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //app.loadPags();
        app.prepareBtn();
        
    },
    

    

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    prepareBtn: function(){
    var btn=document.querySelector(".where");
        btn.addEventListener("click", app.showgelocation);
    },
    
    
    
   
    showgelocation: function (){
    navigator.geolocation.getCurrentPosition( app.onSuccess, app.onError);
            
            
     
    },
    
    onSuccess : function  (position){
            console.log("lat: "+position.coords.latitude);
            console.log("lon: "+position.coords.longitude);
        
        var request = new XMLHttpRequest();
       request.open('GET', 'http://open.mapquestapi.com/geocoding/v1/reverse?' + 
'key=Fmjtd|luur2hurn0%2Cbg%3Do5-9wasly&location=' +
position.coords.latitude + ',' + position.coords.longitude, true);
        request.onreadystatechange = function(){
             if (request.readyState ===4){
                 if(request.status===200||request.status===0){
                    //console.log(request.responseText);
//                     var books= JSON.parse(request.responseText);
//                    for(var i=0; i<books.length;i++ ){
//                         
//                        document.querySelector('.received').innerHTML=books[i].Title;
//                         
//                     }
                     //console.log(request.responseText);
                       var obj=JSON.parse(request.responseText); 
                    // console.log("xxxxxxxxxx");
                       //var city =(request.responseText);
                     
                     console.log(obj.results[0].locations[0].adminArea5);
                 }
            }
       };
        request.send();
        
    },
    onError: function onError(){
            console.log('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
    },
    
        
    // Update DOM on a Received Event
    loadPags: function(){
//        var request = new XMLHttpRequest();
//       request.open('GET', 'http://open.mapquestapi.com/geocoding/v1/reverse?' + 
//'key=Fmjtd|luur2hurn0%2Cbg%3Do5-9wasly&location=' +
//position.coords.latitude + ',' + position.coords.longitude, true);
//        request.onreadystatechange = function(){
//             if (request.readyState ===4){
//                 if(request.status===200||request.status===0){
//                    //console.log(request.responseText);
////                     var books= JSON.parse(request.responseText);
////                    for(var i=0; i<books.length;i++ ){
////                         
////                        document.querySelector('.received').innerHTML=books[i].Title;
////                         
////                     }
//                       var city =request.responseText
//                     console.log(city/*.results[0].locations[0].adminArea5*/);
//                 }
//            }
//       };
//        request.send();
    },
    
    
};
