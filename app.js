(function () {

    var $list = $('.list'),
            itemCount = 0;

    // Add x dummy items to the list
    function addItems(x) {
        for (var i = 0; i < x; i++) {
            itemCount++;
            $list.prepend('<li class="topcoat-list__item">Item ' + itemCount + '</li>');
        }
    }

    $('.scrollable').pullToRefresh({
        callback: function () {
            var deferred = $.Deferred();

            setTimeout(function () {
                // Simulate a refresh: add 3 items to the list
                addItems(3);
                deferred.resolve();
            }, 2000);

            return deferred.promise();
        }
    });

//  Example of a typical use of pull-to-refresh where an ajax call is made to get the latest items
//        $('.scrollable').pullToRefresh({
//            callback: function () {
//                var promise = $.ajax({url: "http://myserver.com/myendpoint", dataType: "json", type: "GET"}).done(function (data) {
//                    // Add new items to the list
//                });
//                return promise;
//            }
//        });

    // Populate the list with 20 items at startup
    addItems(20);

}());
