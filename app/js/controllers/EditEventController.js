'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope , eventData) {
 /* 
  $scope.saveEvent = function(event, newEventForm) {
    if(newEventForm.$valid) {
    // window.alert('event' + event.name + ' saved!');
    
    eventData.save(event)
        .$promise
        .then(function(response) { console.log('success', response)})
        .catch(function(response) { console.log('failure', response)});     

    }
  };*/

  $scope.event = {};

        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function(response) { console.log('success', response)})
                    .catch(function(response) { console.log('failure', response)});
            }
  };
  
  $scope.cancelEvent = function() {
    window.location = '/EventDetails.htm';
  }


});