$(function(){

	//    google_map_api埋め込み設定 開始
            var latlng = new google.maps.LatLng(35.695497, 139.707289);
            var mapOptions = {
                //ズームレベル
                zoom: 18,

                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                /*表示タイプの指定*/
                disableDefaultUI: true,
                scrollwheel: false,
            };

            var map = new google.maps.Map($('.google_map').get(0), mapOptions);
            /*アイコン設定*/

            var icon = new google.maps.MarkerImage('images/pin_map.png',
                new google.maps.Size(100, 100), /*アイコンサイズ設定*/
                new google.maps.Point(0, 0) /*アイコン位置設定*/
            );
            var markerOptions = {
                position: latlng,
                map: map,
                icon: icon,
                title: '株式会社フォークトカンプフ'
            };
            var marker = new google.maps.Marker(markerOptions);
            // 地図をグレースケールに
            var mapStyle = [{
                "stylers": [{
                    "saturation": -100
                }]
            }];
            var mapType = new google.maps.StyledMapType(mapStyle);
            map.mapTypes.set('GrayScaleMap', mapType);
            map.setMapTypeId('GrayScaleMap');

            //    google_map_api埋め込み設定 終了

});