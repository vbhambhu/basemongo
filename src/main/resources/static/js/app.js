
$('.placecomplete').placecomplete({
    placeServiceResult:function(data,status){
        var city, country;
        for (var i = 0; i < data['address_components'].length; i++) {
            if(data['address_components'][i]['types'].includes("locality")){
                city = data['address_components'][i]['short_name'];
            } else if(data['address_components'][i]['types'].includes("country")){
                country = data['address_components'][i]['long_name'];
            }
        }
        $('#city').val(city);
        $('#country').val(country);
        $('#lng').val(data.geometry.location.lng());
        $('#lat').val(data.geometry.location.lat());
    }
});