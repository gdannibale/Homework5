//have current day displayed at top of page -->
         //<h1 class="display-4">moment(currentDay).format('MMMM Do YYYY, h:mm:ss a');</h1> -->

 var a = moment('2020-09-02');
 var b = a.clone().add(1, 'week');
 a.format();
 "2020-09-02T00:00:00-06:00"

 moment('2020-09-02 13:00:00').add(1, 'day').format('LLL')
"September 02, 2020 1:00 PM"
 
       // have timeblocks colors change based on past, current, or future times -->

      //have click events for each timeblock -->
   
        //create save button for each timeblock so that when page is refreshed, those items are still there -->        