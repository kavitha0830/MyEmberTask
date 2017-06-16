export default function() {

  this.namespace = '/api';
  this.get('/getdropdownfrom', function(db){
    var dropdown1 = [{
      "id":"from_1",
      "location":"CHN"
    },
    {
      "id":"from_2",
      "location":"MUM"
    },
    {
      "id":"from_3",
      "location":"DLH"
    }];
    return {data: dropdown1};
  });

  this.get('/getdropdownTo', function(db){
    var dropdown2 = [{
      "id":"to_1",
      "location":"LON"
    },
    {
      "id":"to_2",
      "location":"US"
    },
    {
      "id":"to_3",
      "location":"AUS"
    }];
    return {data: dropdown2};
  });

  this.get('/flightDetails', function(db,request){
    var flights = [{
      "from": "from_1",
      "to":"to_1",
      "depart":"04:50",
      "arrive":"18:45",
      "startDate":"20/06/2017",
      "price":"22,220",
      "airName": "AIRWAYS_1",
      "imageUrl": "/assets/flight1.jpg"
    },
    {
      "from": "from_1",
      "to":"to_2",
      "depart":"05:31",
      "arrive":"22:02",
      "startDate":"25/06/2017",
      "price":"55,115",
      "airName": "AIRWAYS_1",
      "imageUrl": "/assets/flight1.jpg"
    },
    {
      "from": "from_1",
      "to":"to_3",
      "depart":"01:50",
      "arrive":"18:58",
      "startDate":"18/06/2017",
      "price":"64,899",
      "airName": "AIRWAYS_2",
      "imageUrl": "/assets/flight2.png"
    },
    {
      "from": "from_2",
      "to":"to_1",
      "depart":"23:35",
      "arrive":"18:45",
      "startDate":"23/06/2017",
      "price":"43,645",
      "airName": "AIRWAYS_3",
      "imageUrl": "/assets/flight10.png"
    },
    {
      "from": "from_2",
      "to":"to_2",
      "depart":"05:31",
      "arrive":"22:02",
      "startDate":"30/06/2017",
      "price":"30,000",
      "airName": "AIRWAYS_4",
      "imageUrl": "/assets/flight3.png"
    },
    {
      "from": "from_2",
      "to":"to_3",
      "depart":"05:31",
      "arrive":"22:02",
      "startDate":"27/06/2017",
      "price":"40,000",
      "airName": "AIRWAYS_5",
      "imageUrl": "/assets/flight1.jpg"
    },
    {
      "from": "from_2",
      "to":"to_2",
      "depart":"05:31",
      "arrive":"22:02",
      "startDate":"22/06/2017",
      "price":"33,000",
      "airName": "AIRWAYS_4",
      "imageUrl": "/assets/flight3.png"
    },
    {
      "from": "from_2",
      "to":"to_3",
      "depart":"05:31",
      "arrive":"22:02",
      "startDate":"25/06/2017",
      "price":"38,000",
      "airName": "AIRWAYS_5",
      "imageUrl": "/assets/flight1.jpg"
    },
    {
      "from": "from_3",
      "to":"to_1",
      "depart":"05:31",
      "arrive":"22:02",
      "startDate":"25/06/2017",
      "price":"20,000",
      "airName": "AIRWAYS_6",
      "imageUrl": "/assets/flight7.jpg"
    },{
      "from": "from_3",
      "to":"to_2",
      "depart":"05:31",
      "arrive":"22:02",
      "startDate":"30/06/2017",
      "price":"30,000",
      "airName": "AIRWAYS_7",
      "imageUrl": "/assets/flight5.png"
    },{
      "from": "from_3",
      "to":"to_3",
      "depart":"05:31",
      "arrive":"22:02",
      "startDate":"23/06/2017",
      "price":"40,000",
      "airName": "AIRWAYS_8",
      "imageUrl": "/assets/flight4.png"
    }
    ];
    console.log(request.queryParams);
    var fromRequest = request.queryParams.from;
    var toRequest = request.queryParams.to;
    var startRequest = request.queryParams.startDate;
    var endRequest = request.queryParams.endDate;
    if(startRequest != "" && endRequest != "")
    {
    var flights = flights.filter(function(item, index, enumerable){
    return (item.from == fromRequest && item.to == toRequest && item.startDate > startRequest && item.startDate < endRequest); });
    }
    else{
    var flights = flights.filter(function(item, index, enumerable){
    return (item.from == fromRequest && item.to == toRequest); });
    }
    return {data: flights.sortBy('price')};
  });
}
