$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        var user = data.results[0];
        var fullName = user.name.first + ' ' + user.name.last;
        var address = user.location.street.name + ' ' + user.location.street.number + ', ' + user.location.city + ', ' + user.location.state + ', ' + user.location.country;
        var phone = user.phone;
        var email = user.email;

        var imgSrc = user.picture.large;
        $('#profile-photo').attr('src', imgSrc);

        
        document.head.querySelector('meta[name="description"]').content = fullName + " Curriculum Vitae"

        document.head.querySelector('meta[property="og:title"]').content = fullName

        document.head.querySelector('meta[property="og:description"]').content = fullName + " Curriculum Vitae"

        document.head.querySelector('meta[property="og:image"]').content = imgSrc

        document.head.querySelector('meta[name="twitter:title"]').content = fullName

        document.head.querySelector('meta[name="twitter:description"]').content = fullName + " Curriculum Vitae"

        document.head.querySelector('meta[name="twitter:image"]').content = imgSrc

        
        $('header h1').text(fullName);
        $('head title').text(fullName + " - Curriculum Vitae");
        $('header p:nth-of-type(1)').html('<i class="bi bi-geo-alt-fill"></i> Dirección: ' + address);
        $('header p:nth-of-type(2)').html('<i class="bi bi-telephone-fill"></i> Teléfono: ' + phone);
        $('header p:nth-of-type(3)').html('<i class="bi bi-envelope-at-fill"></i> Email: ' + email);
      }
  });
  
